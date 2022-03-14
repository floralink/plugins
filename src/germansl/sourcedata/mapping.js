const thisReference = {
  referenceID: "germansl",
  referenceVersion: "1.5.1",
};

export default function (o) {
  return {
    instanceOf: "Taxon",
    id: o["TaxonUsageID"],
    ...thisReference,
    externalIdentifiers: [
      {
        id: o["EuroMed"],
        referenceID: "EuroMed",
      },
    ],
    taxonConcept: {
      id: o["TaxonConceptID"],
      ...thisReference,
    },
    childTaxonOf: {
      id: o["IsChildTaxonOfID"],
      ...thisReference,
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

// function to delete empty or meaningless entries (like references without id)
