import axios from "axios";
axios.defaults.baseURL = "https://service.infinitenature.org/api/v1";

let credentials = {};
let token = "";
let tokenRetrieveDate = Date.now();

// refreshInterval: time in minutes for which an access token is valid
// chunkSize: size of elements to retrieve as chunk in one request
const refreshInterval = 240; // minutes
const chunkSize = 500;

async function getAccessToken() {
  let resToken = await axios.post("/security/token", credentials);
  token = resToken.data.token.access_token;
  tokenRetrieveDate = Date.now();
  console.log(
    `INFO: WERBEO: Access token for WerBeo retrieved at ${tokenRetrieveDate.toLocaleString()}`
  );
  return token;
}

export async function initialize(cred = {}) {
  credentials = cred;
  return "OK";
}

export async function getRawData(query, portalID = 5) {
  // retrieve access token if first request or token expired
  let localToken = "";
  if (Object.keys(credentials) > 0) {
    let lastRefreshDiff =
      Math.abs(Date.now() - tokenRetrieveDate) / (1000 * 60);

    if (token === "" || lastRefreshDiff >= refreshInterval) {
      console.log("INFO: WERBEO: Refresh access token for WerBeo");
      localToken = await getAccessToken();
      token = localToken;
    } else {
      localToken = token;
    }
  }

  // resolve Floralink Query to WerBeo specific query structure

  let resolvedAreaParam = {};

  switch (query.area.areaFormat) {
    case "mtb":
      resolvedAreaParam = {
        mtb: query.area.areaValue,
      };
      break;
    case "wkt":
      resolvedAreaParam = {
        wkt: query.area.areaValue,
      };
  }

  let resolvedParams = {
    limit: chunkSize,
    from: query.period.from,
    to: query.period.to,
    ...resolvedAreaParam,
  };

  // retrieve occurrence data for query in chunks

  let allOccurrences = [];
  let retrievedElements;
  let totalElements = 0;

  // set header with auth token if credentials provided

  let headers = {
    "werbeo-request-source-id": "floralink-core-v0.1.0",
  };
  if (Object.keys(credentials) > 0) {
    headers.Authorization = "Bearer " + localToken;
  }

  // request occurrence data in chunks

  while (!retrievedElements || retrievedElements === chunkSize) {
    let res = await axios.get(`/${portalID}/occurrences`, {
      params: {
        ...resolvedParams,
        offset: totalElements,
      },
      headers,
    });

    retrievedElements = res.data.numberOfElements;
    totalElements += retrievedElements;
    allOccurrences.push(...res.data.occurrences);

    console.log(
      `INFO: WERBEO: ${retrievedElements} occurrences retrieved, ${totalElements} total`
    );
  }

  console.log(
    `INFO: WERBEO: total of ${totalElements} occurrences in responses`
  );

  return allOccurrences;
}
