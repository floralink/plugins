import { initialize, getRawData } from "./connection";
// import { getData } from "./testing/connection";
import { convertToOccurrenceData } from "./convert";

export default {
  pluginType: "occurrencedata",
  sourceType: "api",
  name: "werbeo",
  title: "Flora-MV",
  version: "1.0.0",
  homepage: "https://service.infinitenature.org/doc/index.html",
  taxonReferencePlugin: {
    name: "germansl",
    version: "1.5.1",
  },
  initialize: initialize,
  getRawData: getRawData,
  convertToOccurrenceData: convertToOccurrenceData,
};
