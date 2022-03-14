import database from "./database.json" assert { type: "json" };

export default {
  pluginType: "taxonreference",
  sourceType: "local",
  name: "germansl",
  title: "GermanSL",
  version: "1.5.1",
  description:
    "Taxonomische Referenzliste für Botanische Funddatenbanken in Deutschland",
  homepage: "https://germansl.infinitenature.org/",
  sources: {
    primary: {
      citation:
        "Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253",
      citationShort: "Jansen & Dengler 2008",
    },
  },
  getDatabase: () => database,
  // todo: define properties
};
