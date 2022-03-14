# Plugins for Floralink

Plugin library for using local databases and APIs as data sources with Floralink Core.

- [Plugins for Floralink](#plugins-for-floralink)
- [General usage](#general-usage)
- [Plugins in this library](#plugins-in-this-library)
  - [Taxon reference data](#taxon-reference-data)
  - [Taxon specific data](#taxon-specific-data)
  - [Occurrence data](#occurrence-data)
- [Developing a local database plugin](#developing-a-local-database-plugin)
  - [File structure](#file-structure)
  - [index.js](#indexjs)

# General usage

```javascript
import * as floralink from "@floralink/core";
import { myplugin } from "@floralink/plugins";

floralink.initializePlugin(myplugin);

// example for taxon reference data
const myTaxonData = floralink.getTaxonDataByID(taxonIDs, "myplugin");
```

# Plugins in this library

## Taxon reference data

| Name                        | Data origin | Data source                                                                                                         |
| --------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| [germansl](./src/germansl/) | local       | [GermanSL](https://germansl.infinitenature.org/) v1.5.1, a taxon reference list for occurrence databases in Germany |

## Taxon specific data

| Name                                             | Data origin | Data source                                             |
| ------------------------------------------------ | ----------- | ------------------------------------------------------- |
| [ellenberg](./src/ellenberg/)                    | local       | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 |
| [fukarekhenker](./src/fukarekhenker/)            | local       | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 |
| [rotelistemv](./src/rotelistemv/) (experimental) | local       | [GermanSL](https://germansl.infinitenature.org/) v1.5.1 |

## Occurrence data

| Name                    | Data origin | Data source                                               |
| ----------------------- | ----------- | --------------------------------------------------------- |
| [werbeo](./src/werbeo/) | API         | [Flora-MV](https://www.flora-mv.de/) (through WerBeo API) |

# Developing a local database plugin

You can derive a JSON database for your plugin from a CSV table by using [Floralink Generator](https://github.com/floralink/generator). Look at the plugins in this library for examples.

Source databases to use with Floralink need to have a taxonomic reference. Floralink uses GermanSL (v1.5.1) and doesn't support other taxonomic reference databases (yet).

## File structure

Basic file structure of a local database plugin:

```
/generation
  /source
  |  |__database.csv
  |  |__LICENSE
  |__mappings.js
database.json
index.js
README.md
```

## index.js

Example index.js ([Ellenberg plugin](./src/ellenberg/index.js)):

```javascript
export default {
  // plugin reference
  pluginType: "taxonspecific",
  name: "ellenberg",
  version: "1991-1",
  taxonReferencePlugin: {
    name: "germansl",
    version: "1.5.1",
  },
  title: "Ökologische Zeigerwerte",
  description:
    "Das ökologische Verhalten gegenüber einem bestimmten Standortfaktor [...]",
  sources: {
    // bibliographic information for citation
    // keys: primary, secondary, description
    primary: {
      citation:
        "Ellenberg, H. (1991): Zeigerwerte der Gefäßpflanzen (ohne Rubus). [...]",
      citationShort: "Ellenberg 1991",
    },
    // ...
  },
  getDatabase: () => database,
  // applicable filters for calculating statistics
  filters: {
    // the key acts as the id of the filter
    "group-s-only": {
      title: "nur Samenpflanzen",
      filterKey: "group",
      filterValue: "S",
      onlyMatching: true,
      default: true,
    },
    // ...
  },
  // properties/fields of the data
  properties: {
    indicatorL: {
      // key of property in JSON file on taxon object
      dataKey: "indicatorL",
      // display title of property
      title: "Lichtzahl",
      // short title for graphs and summary tables
      titleShort: "L",
      // description of the property
      description:
        "Vorkommen in Beziehung zur relativen Beleuchtungsstärke [...]",
      // scale of measure, specifies which statistics to calculate
      scaleOfMeasure: "ordinal",
      // enumeration of the possible value (to force the order)
      enum: [...sharedEnum, ...sharedEnumNominal],
      // object of possible values
      possibleValues: {
        ...sharedPossibleValues,
        1: {
          title: "Tiefschattenpflanze",
          description: "noch bei weniger als 1 % [...]",
        },
        // ...
      },
    },
    //...
  },
};
```
