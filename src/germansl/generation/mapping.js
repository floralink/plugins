const reference = {
  id: "germansl",
  version: "1.5.1",
};

export default function (o) {
  return {
    // taxon reference
    id: o["TaxonUsageID"],
    reference,
    externalReference: [
      {
        id: o["EuroMed"],
        reference: {
          id: "europlusmed",
          version: "",
        },
      },
    ],
    // field mappings
    taxonConcept: {
      id: o["TaxonConceptID"],
      reference,
    },
    childTaxonOf: {
      id: o["IsChildTaxonOfID"],
      reference,
    },
    taxonGroup: o["GRUPPE"],
    taxonRank: o["TaxonRank"],
    scientificName: o["TaxonName"],
    vernacularNames: [
      {
        localeCode: "de_DE",
        name: o["VernacularName"],
      },
    ],
  };
}
