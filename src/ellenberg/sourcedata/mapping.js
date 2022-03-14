const thisReference = {
  referenceID: "germansl",
  referenceVersion: "1.5.1",
};

export default function (o) {
  return {
    // taxon reference
    instanceOf: "TaxonSpecificData",
    id: o["SPECIES_NR,N,10,0"],
    ...thisReference,
    taxonSpecificPlugin: {
      id: "ellenberg",
      version: "1991",
    },
    // db fields
    indicatorL: convertIndicatorValue(o["OEK_L,N,5,0"], o["Z_OEK_L,C,7"]),
    indicatorT: convertIndicatorValue(o["OEK_T,N,5,0"], o["Z_OEK_T,C,7"]),
    indicatorK: convertIndicatorValue(o["OEK_K,N,5,0"], o["Z_OEK_K,C,7"]),
    indicatorF: convertIndicatorValue(o["OEK_F,N,5,0"], o["Z_OEK_F,C,7"]),
    waterRegime: o["WASSERREGI,C,10"],
    indicatorR: convertIndicatorValue(o["OEK_R,N,5,0"], o["Z_OEK_R,C,7"]),
    indicatorN: convertIndicatorValue(o["OEK_N,N,5,0"], o["Z_OEK_N,C,7"]),
    indicatorS: convertIndicatorValue(o["OEK_S,N,5,0"], o["Z_OEK_S,C,7"], true),
    lifeForm: toArray(o["LF_LEB,C,7"]),
    leafPerennation: o["LF_B,C,4"],
    // for old support
    rank: o["RANG,C,4"],
    group: o["GRUPPE,C,6"],
  };
}

function toArray(str) {
  return str.split(",");
}

function convertIndicatorValue(indicatorValue, comment, zeroValid = false) {
  switch (comment) {
    case "y":
      return "?";
    case "x":
      return "x";
  }
  // also return x (indifferent) if value is 0 (where it shouldn't be), because input data is not consistent in that way
  if (!zeroValid && indicatorValue == "0") return "x";
  else return indicatorValue;
}

// fall: alle 0 -> auslassen!
