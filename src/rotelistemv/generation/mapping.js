export default function (o) {
  return {
    // taxon reference
    id: o["SPECIES_NR"],
    reference: {
      id: "germansl",
      version: "1.5.1",
    },
    // field mappings
    rl2006: o["GEF2006"],
    rl1991: o["GEF1991"],
  };
}
