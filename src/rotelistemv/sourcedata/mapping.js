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
    rl2006: o["GEF2006"],
    rl1991: o["GEF1991"],
  };
}
