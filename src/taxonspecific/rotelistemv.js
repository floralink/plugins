export default {
  pluginType: "taxonspecific",
  sourceType: "local",
  name: "rotelistemv",
  version: "2005-1",
  taxonReference: {
    name: "germansl",
    version: "1.5.1",
  },
  title: "Rote Liste Mecklenburg-Vorpommern",
  sources: {
    primary: {
      citation:
        "Voigtländer, Ulrich, Henker, Heinz (2005): Rote Liste der Farn- und Blütenpflanzen Mecklenburg-Vorpommerns.",
      citationShort: "Voigtländer & Henker 2005",
    },
    secondary: {
      citation:
        "Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253",
      citationShort: "Jansen & Dengler 2008",
    },
  },
  properties: {
    rl2006: {
      dataKey: "rl2006",
      title: "Gefährdungskategorie Rote Liste MV 2006",
      titleShort: "RL-MV 2006",
      scaleOfMeasure: "nominal",
      enum: ["0", "1", "2", "3", "R", "G", "V", "**", "*", "D"],
    },
    rl1991: {
      dataKey: "rl1991",
      title: "Gefährdungskategorie Rote Liste MV 1991",
      titleShort: "RL-MV 1991",
      scaleOfMeasure: "nominal",
      enum: ["0", "1", "2", "3", "4", "D"],
    },
  },
};
