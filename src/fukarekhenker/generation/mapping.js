export default function (o) {
  return {
    // taxon reference
    id: o["SPECIES_NR"],
    reference: {
      id: "germansl",
      version: "1.5.1",
    },
    // field mappings
    nStatus: o["N"],
    fStatus: o["F"],
    tStatus: o["T"],
  };
}
