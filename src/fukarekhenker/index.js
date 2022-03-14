import database from "./database.json";

export default {
  pluginType: "taxonspecific",
  sourceType: "local",
  name: "fukarekhenker",
  version: "2006-1",
  taxonReferencePlugin: {
    name: "germansl",
    version: "1.5.1",
  },
  title: "N-F-T-Status",
  description:
    "Bei der Vergabe der N-F-T-Werte für eine bestimmte Sippe spielen pflanzensoziologische Überlegungen die Hauptrolle. Es muss betont werden, dass sich alle Angaben streng auf Mecklenburg-Vorpommern beziehen. Wie früher ausgeführt, begannen die ersten floristischen Untersuchungen in Mecklenburg und Vorpommern erst 1760–1770, daher gibt es für frühere Einschleppungen oder Einbürgerungen, sofern nicht prähistorische Funde vorliegen, keine konkreten Nachweise oder Belege. Es ist daher durchaus möglich, dass eine auf Grund fehlender Unterlagen als Neophyt (T 3) eingestufte Sippe in Wirklichkeit bereits vor 1500 in Mecklenburg-Vorpommern aufgetreten sein kann. Bei der N-F-T-Formel mag uns mancher Irrtum oder manche Fehleinschätzung unterlaufen sein. Wir sind daher für entsprechende Hinweise dankbar.",
  sources: {
    primary: {
      citation:
        "Fukarek, Franz, Henker, Heinz (2006): Flora von Mecklenburg-Vorpommern: Farn- und Blütenpflanzen. Jena: Weissdorn-Verlag Jena",
      citationShort: "Fukarek & Henker 2006",
    },
    secondary: {
      citation:
        "Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253",
      citationShort: "Jansen & Dengler 2008",
    },
  },
  getDatabase: () => database,
  properties: {
    nStatus: {
      dataKey: "nStatus",
      title: "Grad der Naturalisation",
      titleShort: "N",
      description: "",
      scaleOfMeasure: "nominal",
      enum: ["1", "2", "3", "4", "4a", "4b", "5"],
      // prettier-ignore
      possibleValues: {
        "1": {
          title: "Idiochorophyten",
          description: "Urwüchsige, indigene Sippen",
        },
        "2": {
          title: "Agriophyten",
          description:
            "Eingebürgerte, kulturunabhängige, nicht urwüchsige Sippen",
        },
        "3": {
          title: "Epökophyten",
          description: "Eingebürgerte, kulturabhängige, wildwachsende Sippen",
        },
        "4": {
          title: "Ephemerophyten",
          description:
            "Adventive, unbeständige, wildwachsende Sippen, aber nur zeitweilig spontan aufgetreten (eingeschleppt, verwildert) oder eingebracht (angesalbt)",
        },
        "4a": {
          description:
            "Mit Einbürgerungstendenz, Vermehrung und Ausbreitung durch Diasporen oder vegetativ. Bei der Einstufung ist die Lebensform (Lebensdauer) der einzelnen Arten zu berücksichtigen (siehe Vorbemerkungen).",
        },
        "4b": {
          title: "Passanten",
          description:
            "Ohne Einbürgerungstendenz, immer nur vorübergehend, auch zeitweilig bzw. von Zeit zu Zeit neu eingeführt, was eine Einbürgerungstendenz vortäuschen kann.",
        },
        "5": {
          title: "Ergasiophyten",
          description:
            "Kultivierte Arten. Diese Sippen werden in der Flora im allgemeinen nur berücksichtigt, wenn sie verwildern.",
        },
      },
    },
    fStatus: {
      dataKey: "fStatus",
      title: "Einwanderungsform",
      titleShort: "F",
      scaleOfMeasure: "nominal",
      enum: ["1a", "1b", "2", "3", "4"],
      // prettier-ignore
      possibleValues: {
        "1a": {
          description:
            "Spontan, aus eigener Kraft eingewanderte oder im Gebiet entstandene Sippen, ohne dass der Mensch direkt oder indirekt eine Rolle spielte",
        },
        "1b": {
          description:
            "Spontan eingewanderte Sippen, aber quantitativ durch menschliche Aktivitäten (vor allem die Landnutzung) gefördert",
        },
        "2": {
          description:
            "Spontan eingewanderte Sippen, aber die Einwanderung wurde erst möglich, nachdem der Mensch geeignete Standorte geschaffen hatte. Hierzu gehören auch spontan entstandene Sippen, die sich erst unter den vom Menschen geschaffenen Bedingungen (Auflichtung der Landschaft) als Sippen herausbilden konnten, z. B. Kulturpflanzenanbau, Grünlandwirtschaft, Waldbewirtschaftung.",
        },
        "3": {
          description:
            "Eingeschleppte Sippen (Xenophyten), unbeabsichtigt vom Menschen eingebrachte Fremdpflanzen",
        },
        "4": {
          description:
            "Verwilderte Sippen, absichtlich eingeführt und kultiviert, danach auch außerhalb der Kulturflächen auftretend, hierzu gehören Kulturflüchter (Ergasiophygophyten) und Kulturrelikte (Ergasiolipophyten)",
        },
      },
    },
    tStatus: {
      dataKey: "tStatus",
      title: "Einführungszeit",
      titleShort: "T",
      scaleOfMeasure: "nominal",
      enum: ["1", "2", "3"],
      possibleValues: {
        1: {
          title: "Oikophyten",
          description:
            "Unabhängig vom Einwirken des Menschen eingewandert, im allgemeinen vorneolithisch",
        },
        2: {
          title: "Archäophyten",
          description:
            "Vor- oder frühgeschichtliche Einwanderung, Einschleppung oder Einbürgerung, meist vom Neolithikum bis etwa 1500, Altadventive",
        },
        3: {
          title: "Neophyten",
          description:
            "Einwanderung, Einschleppung oder Einbürgerung erst nach 1492, dem Jahr der Entdeckung Amerikas, d. h. etwa 1500, Neuadventive",
        },
      },
    },
  },
};
