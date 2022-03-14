const thisReference = {
  referenceID: "germansl",
  referenceVersion: "1.5.1",
};

export default function (o) {
  return {
    // taxon reference
    instanceOf: "TaxonSpecificData",
    id: o["SPECIES_NR"],
    ...thisReference,
    // db fields
    nStatus: o["N"],
    fStatus: o["F"],
    tStatus: o["T"],
  };
}
