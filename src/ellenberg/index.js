import database from "./database.json" assert { type: "json" };

const sharedEnum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const sharedEnumNominal = ["x", "?"];

const sharedPossibleValues = {
  x: {
    title: "indifferent",
    description:
      "weite Amplitude oder ungleiches Verhalten in verschiedenen Gegenden",
    extraOrdinal: true,
  },
  "?": {
    title: "ungeklärt",
    description:
      "ungeklärtes Verhalten, über das selbst Mutmaßungen noch nicht möglich sind",
    extraOrdinal: true,
  },
};

export default {
  pluginType: "taxonspecific",
  sourceType: "local",
  name: "ellenberg",
  version: "1991-1",
  taxonReference: {
    id: "germansl",
    version: "1.5.1",
  },
  title: "Ökologische Zeigerwerte",
  description:
    "Das ökologische Verhalten gegenüber einem bestimmten Standortfaktor ist in der Regel durch eine Ziffer von 1 bis 9 ausgedrückt. [...] Die Zeigerwerte spiegeln das Vorkommen einer Sippe im Gefälle der Umweltfaktoren unter Freilandbedingungen wider, d. h. bei ausgeprägter zwischenartlicher Konkurrenz. Die Zeigerwerte sagen also nichts über die „Ansprüche“, also das Verhalten in Reinkultur, aus. [...] Sämtliche Angaben beziehen sich auf das westliche Mitteleuropa, insbesondere auf Westdeutschland, einschließlich der angrenzenden Alpen.",
  sources: {
    primary: {
      citation:
        "Ellenberg, H. (1991): Zeigerwerte von Pflanzen in Mitteleuropa, Scripta geobotanica 18: 9-166. Goltze: Göttingen.",
      citationShort: "Ellenberg 1991",
    },
    secondary: {
      citation:
        "Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253",
      citationShort: "Jansen & Dengler 2008",
    },
    description: {
      citation:
        "Ellenberg, Heinz, Leuschner, Christoph, Dierschke, Hartmut (2010): Vegetation Mitteleuropas mit den Alpen: in ökologischer, dynamischer und historischer Sicht ; 203 Tabellen. (6., vollständig neu bearbeitete und stark erweiterte Auflage.). Stuttgart: Verlag Eugen Ulmer",
      citationShort: "Ellenberg et al. 2010",
    },
  },
  getDatabase: () => database,
  filters: {
    "group-s-only": {
      title: "nur Samenpflanzen",
      filterKey: "group",
      filterValue: "S",
      onlyMatching: true,
      default: true,
    },
    "lf-a-exclude": {
      title: "keine Hydrophyten",
      filterKey: "lifeForm",
      filterValue: "A",
      onlyMatching: false,
      default: true,
    },
  },
  properties: {
    indicatorL: {
      dataKey: "indicatorL",
      title: "Lichtzahl",
      titleShort: "L",
      description:
        "Vorkommen in Beziehung zur relativen Beleuchtungsstärke (= r. B.; nach eigenen Messungen sowie Angaben anderer Autoren). Maßgebend ist für alle Arten die r. B., die an ihrem Wuchsort zur Zeit der vollen Belaubung der sommergrünen Pflanzen (also etwa von Juli bis September) bei diffuser Strahlung (d. h. bei Nebel oder gleichmäßig bedecktem Himmel) herrscht.",
      scaleOfMeasure: "ordinal",
      enum: [...sharedEnum, ...sharedEnumNominal],
      possibleValues: {
        ...sharedPossibleValues,
        1: {
          title: "Tiefschattenpflanze",
          description:
            "noch bei weniger als 1 %, selten bei mehr als 30 % relativer Beleuchtungsstärke vorkommend",
        },
        2: {
          title: "zwischen 1 und 3 stehend",
        },
        3: {
          title: "Schattenpflanze",
          description:
            "meist bei weniger als 5 % r. B., doch auch an helleren Stellen",
        },
        4: {
          title: "zwischen 3 und 5 stehend",
        },
        5: {
          title: "Halbschattenpflanze",
          description:
            "nur ausnahmsweise im vollen Licht, meist aber bei mehr als 10 % r.B.",
        },
        6: {
          title: "zwischen 5 und 7 stehend",
          description: "selten bei weniger als 20 % r.B.",
        },
        7: {
          title: "Halblichtpflanze",
          description:
            "meist bei vollem Licht, aber auch im Schatten bis etwa 30 % r. B.",
        },
        8: {
          title: "Lichtpflanze",
          description: "nur ausnahmsweise bei weniger als 40 % r. B.",
        },
        9: {
          title: "Volllichtpflanze",
          description:
            "nur an voll bestrahlten Plätzen, nicht bei weniger als 50 % r. B.",
        },
      },
    },
    indicatorT: {
      dataKey: "indicatorT",
      title: "Temperaturzahl",
      titleShort: "T",
      description:
        "Vorkommen im Wärmegefälle von der nivalen Stufe bis in die wärmsten Tieflagen (unter besonderer Berücksichtigung der Punktrasterkarten in den Verbreitungsatlanten der mitteleuropäischen Flora).",
      scaleOfMeasure: "ordinal",
      enum: [...sharedEnum, ...sharedEnumNominal],
      possibleValues: {
        ...sharedPossibleValues,
        1: {
          title: "Kältezeiger",
          description:
            "nur in hohen Gebirgslagen, d. h. der alpinen und nivalen Stufe",
        },
        2: {
          title: "zwischen 1 und 3 stehend",
          description: "(viele alpine Arten)",
        },
        3: {
          title: "Kühlezeiger",
          description: "vorwiegend in subalpinen Lagen",
        },
        4: {
          title: "zwischen 3 und 5 stehend",
          description: "(insbesondere hochmontane und montane Arten)",
        },
        5: {
          title: "Mäßigwärmezeiger",
          description:
            "von tiefen bis in montane Lagen, Schwerpunkt in submontan–temperaten Bereichen",
        },
        6: {
          title: "zwischen 5 und 7 stehend",
          description: "(d. h. planar bis collin)",
        },
        7: {
          title: "Wärmezeiger",
          description:
            "im nördlichen Mitteleuropa nur in relativ warmen Tieflagen",
        },
        8: {
          title: "zwischen 7 und 9 stehend",
          description: "meist mit submediterranem Schwerpunkt",
        },
        9: {
          title: "extremer Wärmezeiger",
          description:
            "vom Mediterrangebiet aus nur auf wärmste Plätze im südlichen Mitteleuropa übergreifend",
        },
      },
    },
    indicatorK: {
      dataKey: "indicatorK",
      title: "Kontinentalitätszahl",
      titleShort: "K",
      description:
        "Vorkommen im Kontinentalitätsgefälle von der Atlantikküste bis ins Innere Eurasiens, besonders im Hinblick auf die Temperaturschwankungen (großenteils nach den biogeografischen Angaben in der Exkursionsflora von Rothmaler).",
      scaleOfMeasure: "ordinal",
      enum: [...sharedEnum, ...sharedEnumNominal],
      possibleValues: {
        ...sharedPossibleValues,
        1: {
          title: "euozeanisch",
          description: "in Mitteleuropa nur mit wenigen Vorposten",
        },
        2: {
          title: "ozeanisch",
          description:
            "mit Schwerpunkt im Westen einschließlich des westlichen Mitteleuropa",
        },
        3: {
          title: "zwischen 2 und 4 stehend",
          description: "(d. h. in großen Teilen Mitteleuropas)",
        },
        4: {
          title: "subozeanisch",
          description:
            "mit Schwerpunkt in Mitteleuropa, nach Osten ausgreifend",
        },
        5: {
          title: "intermediär",
          description: "schwach subozeanisch bis schwach subkontinental",
        },
        6: {
          title: "subkontinental",
          description:
            "mit Schwerpunkt im östlichen Mittel– und angrenzenden Osteuropa",
        },
        7: {
          title: "zwischen 6 und 8 stehend",
          description:
            "im nördlichen Mitteleuropa nur in relativ warmen Tieflagen",
        },
        8: {
          title: "kontinental",
          description:
            "nur an Sonderstandorten von Osten nach Mitteleuropa übergreifend",
        },
        9: {
          title: "eukontinental",
          description:
            "im westlichen Mitteleuropa fehlend und im östlichen selten",
        },
      },
    },
    indicatorF: {
      dataKey: "indicatorF",
      title: "Feuchtezahl",
      titleShort: "F",
      description:
        "Vorkommen im Gefälle der Bodenfeuchtigkeit vom flachgründig–trockenen Felshang bis zum Sumpfboden sowie vom seichten bis zum tiefen Wasser (nach eigenen Beobachtungen und Angaben in der Exkursionsflora von Oberdorfer).",
      scaleOfMeasure: "ordinal",
      enum: [...sharedEnum, ...sharedEnumNominal, "10", "11", "12"],
      possibleValues: {
        ...sharedPossibleValues,
        1: {
          title: "Starktrockniszeiger",
          description:
            "an oftmals austrocknenden Stellen lebensfähig und auf trockene Böden beschränkt",
        },
        2: {
          title: "zwischen 1 und 3 stehend",
        },
        3: {
          title: "auf feuchten Böden fehlend",
        },
        4: {
          title: "zwischen 3 und 5 stehend",
        },
        5: {
          title: "Frischezeiger",
          description:
            "Schwerpunkt auf mittelfeuchten Böden, auf nassen sowie auf öfter austrocknenden Böden fehlend",
        },
        6: {
          title: "zwischen 5 und 7 stehend",
        },
        7: {
          title: "Feuchtezeiger",
          description:
            "Schwerpunkt auf gut durchfeuchteten, aber nicht nassen Böden",
        },
        8: {
          title: "zwischen 7 und 9 stehend",
        },
        9: {
          title: "Nässezeiger",
          description: "Schwerpunkt auf oft durchnässten (luftarmen) Böden",
        },
        10: {
          title: "Wasserpflanze",
          description:
            "die längere Zeiten auch ohne Wasserbedeckung des Bodens überlebt",
        },
        11: {
          title: "Wasserpflanze",
          description:
            "die unter Wasser wurzelt, aber zumindest zeitweilig mit Blättern über dessen Oberfläche aufragt, oder Schwimmpflanze, die an der Wasseroberfläche flottiert",
        },
        12: {
          title: "Unterwasserpflanze",
          description: "ständig oder fast dauernd untergetaucht",
        },
      },
    },
    indicatorR: {
      dataKey: "indicatorR",
      title: "Reaktionszahl",
      titleShort: "R",
      description:
        "Vorkommen im Gefälle der Bodenazidität und des Kalkgehaltes (nach zahlreichen eigenen Messungen und der umfangreichen Literatur sowie nach den Punktrasterkarten in den Verbreitungsatlanten der mitteleuropäischen Flora).",
      scaleOfMeasure: "ordinal",
      enum: [...sharedEnum, ...sharedEnumNominal],
      possibleValues: {
        ...sharedPossibleValues,
        1: {
          title: "Starksäurezeiger",
          description:
            "niemals auf schwach sauren bis alkalischen Böden vorkommend",
        },
        2: {
          title: "zwischen 1 und 3 stehend",
        },
        3: {
          title: "Säurezeiger",
          description:
            "Schwerpunkt auf sauren Böden, ausnahmsweise bis in den neutralen Bereich",
        },
        4: {
          title: "zwischen 3 und 5 stehend",
        },
        5: {
          title: "Mäßigsäurezeiger",
          description:
            "auf stark sauren wie auf neutralen bis alkalischen Böden selten",
        },
        6: {
          title: "zwischen 5 und 7 stehend",
        },
        7: {
          title: "Schwachsäure– bis Schwachbasenzeiger",
          description: "niemals auf stark sauren Böden",
        },
        8: {
          title: "zwischen 7 und 9 stehend",
          description: "d. h. meist auf Kalk weisend",
        },
        9: {
          title: "Basen– und Kalkzeiger",
          description: "stets auf kalkreichen Böden",
        },
      },
    },
    indicatorN: {
      dataKey: "indicatorN",
      title: "Nährstoffzahl",
      titleShort: "N",
      description:
        "Vorkommen von Gefäßpflanzen und Moosen im Gefälle der Stickstoffversorgung während der Vegetationszeit (nach eigenen Messungen und Angaben in der Literatur, die sich auf die Zeit vor 1970 beziehen, d. h. vor der gesteigerten Stickstoffimmission, sowie nach Düngungsversuchen und Vegetationsvergleichen). (Anmerkung: Andere Klassifikation für Flechten)",
      scaleOfMeasure: "ordinal",
      enum: [...sharedEnum, ...sharedEnumNominal],
      possibleValues: {
        ...sharedPossibleValues,
        1: {
          title: "stickstoffärmst",
          description: "stickstoffärmste Standorte anzeigend",
        },
        2: {
          title: "zwischen 1 und 3 stehend",
        },
        3: {
          title: "stickstoffarm",
          description:
            "an stickstoffarmen Standorten häufiger als an mittelmäßigen und nur ausnahmsweise an reicheren",
        },
        4: {
          title: "zwischen 3 und 5 stehend",
        },
        5: {
          title: "mäßig stickstoffreich",
          description:
            "mäßig stickstoffreiche Standorte anzeigend, an armen und reichen seltener",
        },
        6: {
          title: "zwischen 5 und 7 stehend",
        },
        7: {
          title: "stickstoffreich",
          description:
            "an stickstoffreichen Standorten häufiger als an mittelmäßigen und nur ausnahmsweise an ärmeren",
        },
        8: {
          title: "ausgesprochener Stickstoffzeiger",
        },
        9: {
          title: "übermäßig stickstoffreich",
          description:
            "an übermäßig stickstoffreichen Standorten konzentriert (Viehlägerpflanze, Verschmutzungszeiger)",
        },
      },
    },
    indicatorS: {
      dataKey: "indicatorS",
      title: "Salzzahl",
      titleShort: "S",
      description:
        "Vorkommen im Gefälle der Salz–, insbesondere Chloridkonzentration im Wurzelbereich. (Vorwiegend nach einer Zusammenstellung von Scherfose 1990, in der er eigene Untersuchungen sowie die vorliegende Literatur ausgewertet hat; seine Skalierung von I bis VI wurde in eine 9–skalige umgewandelt. Die eingeklammerten Ziffern bedeuten maximale Chlorid–Ionengehalte der Bodenlösung nach einer brieflichen Zusammenstellung von Scherfose). Bemerkung: Arten mit der Salzzahl 5 oder höher finden sich nur ausnahmsweise auf chloridfreien Boden. Alle übrigen haben eine Amplitude in den chloridfreien (bzw. sehr chloridarmen) Bereich hinein.",
      scaleOfMeasure: "ordinal",
      enum: ["0", ...sharedEnum, ...sharedEnumNominal],
      possibleValues: {
        ...sharedPossibleValues,
        0: {
          title: "nicht salzertragend",
          description:
            "Glykophyt (bei Durchschnittsberechnungen mit zu verwenden!)",
        },
        1: {
          title: "salzertragend",
          description:
            "meist auf salzarmen bis salzfreien Böden, gelegentlich aber auf etwas salzhaltigen Böden vorkommend (0–0,1 % Cl⁻)",
        },
        2: {
          title: "oligohalin (I)",
          description:
            "öfter auf Böden mit sehr geringem Chloridgehalt (0,05–0,3 % Cl⁻)",
        },
        3: {
          title: "β–mesohalin (II)",
          description:
            "meist auf Böden mit geringem Chloridgehalt (0,3–0,5 % Cl⁻)",
        },
        4: {
          title: "α/β–mesohalin (II/III)",
          description:
            "meist auf Böden mit geringem bis mäßigem Chloridgehalt (0,5–0,7 % Cl⁻)",
        },
        5: {
          title: "α–mesohalin (III)",
          description:
            "meist auf Böden mit mäßigem Chloridgehalt (0,7–0,9 % Cl⁻)",
        },
        6: {
          title: "α–meso/polyhalin (III/IV)",
          description:
            "auf Böden mit mäßigem bis hohem Chloridgehalt (0,9–1,2 % Cl⁻)",
        },
        7: {
          title: "polyhalin (IV)",
          description: "auf Böden mit hohem Chloridgehalt (1,2–1,6 % Cl⁻)",
        },
        8: {
          title: "euhalin (IV/V und V)",
          description: "auf Böden mit sehr hohem Chloridgehalt (1,6–2,3 % Cl⁻)",
        },
        9: {
          title: "euhalin bis hypersalin (V/VI)",
          description:
            "auf Böden mit sehr hohem, in Trockenzeiten extremem Salzgehalt (> 2,3 % Cl⁻)",
        },
      },
    },
    lifeForm: {
      dataKey: "lifeForm",
      title: "Lebensform",
      titleShort: "LF",
      description:
        "Lage der Überwinterungsorgane zur Erdoberfläche (nach der Literatur).",
      scaleOfMeasure: "nominal",
      multipleValues: true,
      enum: ["A", "C", "G", "H", "N", "P", "T", "Z", "li", "ep", "hp", "vp"],
      possibleValues: {
        A: {
          title: "Hydrophyt",
          description:
            "aquatisch lebende Pflanze, deren Überwinterungsknospen normalerweise unter Wasser liegen",
        },
        C: {
          title: "krautiger Chamaephyt",
          description:
            "Knospen wie bei Z meist über der Erde und im Schneeschutz überwinternd",
        },
        G: {
          title: "Geophyt",
          description:
            "Überwinterungsknospen unter der Erdoberfläche, meist mit Speicherorganen",
        },
        H: {
          title: "Hemikryptophyt",
          description: "Überwinterungsknospen nahe der Erdoberfläche",
        },
        N: {
          title: "Nanophanerophyt",
          description: "Strauch oder Kleinbaum, meist 0.5–5 m hoch werdend",
        },
        P: {
          title: "Phanerophyt",
          description: "Baum, der mehr als 5 m hoch werden kann",
        },
        T: {
          title: "Therophyt",
          description: "kurzlebig und ungünstige Zeiten als Samen überdauernd",
        },
        Z: {
          title: "holziger Chamaephyt",
          description: "Zwergstrauch, nur selten über 0.5 m hoch werdend",
        },
        li: {
          title: "Liane oder Spreizklimmer",
          description:
            "sich auf andere Pflanzen stützend, aber im Boden wurzelnd",
        },
        ep: {
          title: "Epiphyt",
          description:
            "auf den oberirdischen Organen lebender Pflanzen wachsend (aber in der Regel nicht parasitierend)",
        },
        hp: {
          title: "Halbparasit",
          description:
            "auf lebenden Pflanzen schmarotzend, aber mit grünen Blättern",
        },
        vp: {
          title: "Vollparasit",
          description: "wie hp, aber ohne Blattgrün",
        },
      },
    },
    leafPerennation: {
      dataKey: "leafPerennation",
      title: "Blattausdauer",
      titleShort: "LF_B",
      description:
        "Jahreszeiten, in denen ein Großteil der Blätter grün ist (nach eigenen Beobachtungen und einigen Korrekturen von E. J. Jäger; weitere Korrekturen sehr erwünscht!)",
      scaleOfMeasure: "nominal",
      enum: ["I", "W", "S", "V"],
      possibleValues: {
        I: {
          title: "immergrün",
          description:
            "zu allen Jahreszeiten mit Blättern, die oft länger als 1 Jahr leben",
        },
        W: {
          title: "überwinternd grün",
          description:
            "oft mit grünen Blättern überwinternd, die aber meist im Frühjahr ersetzt werden",
        },
        S: {
          title: "sommergrün",
          description: "nur in der wärmeren Jahreszeit mit grünen Blättern",
        },
        V: {
          title: "vorsommergrün",
          description:
            "vom Vorfrühling bis zum Frühsommer grün, dann aber meist einziehend",
        },
      },
    },
  },
};
