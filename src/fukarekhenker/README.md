# Floralink plugin for NFT status

A plugin for using the N, F and T status described by Fukarek & Henker (2006) in Floralink.

# Usage

You can add the plugin to your project using the [@floralink/plugins](https://www.github.com/floralink/plugins) npm package:

```shell
$ npm install @floralink/plugins
```

Then, in your project:

```javascript
import { fukarekhenker } from "@floralink/plugins";
```

# Data source

The plugin's database is generated from GermanSL (version 1.5.1), specifically the `RL-MV.csv` file. GermanSL is licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/).

> Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253. [Online version (in German)](https://germansl.infinitenature.org/pdf/Jansen,%20Dengler%20-%20Tuexenia%2028.pdf)

The data in GermanSL stems from Fukarek & Henker 2006:

> Fukarek, F.; Henker, H. (2006): Flora von Mecklenburg-Vorpommern: Farn- und Blütenpflanzen. Weissdorn-Verlag: Jena.

The original CSV file is mapped to JSON with [@floralink/generator](https://www.github.com/floralink/generator) and a custom descriptive `mapping.js` module.

```shell
$ npx flgen -i source/RL-MV.csv -o ../database.json -d ";"
```
