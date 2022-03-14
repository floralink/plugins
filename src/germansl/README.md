# @floralink/germansl

A Plugin for using GermanSL as a taxon reference database in Floralink.

# Usage

You can add the plugin to your project using the [@floralink/plugins](https://www.github.com/floralink/plugins) npm package:

```shell
$ npm install @floralink/plugins
```

Then, in your project:

```javascript
import { germansl } from "@floralink/plugins";
```

# Data source

The plugin's database is generated from GermanSL (version 1.5.1), specifically the `germansl.sqlite` file.

## Citation

> Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253. [Online version (in German)](https://germansl.infinitenature.org/pdf/Jansen,%20Dengler%20-%20Tuexenia%2028.pdf)

## Data generation

The SQLite database is converted to CSV via the [SQLite command line shell](https://sqlite.org/cli.html):

```shell
sqlite> .open germansl.sqlite
sqlite> .headers on
sqlite> .mode csv
sqlite> .output germansl.csv
sqlite> SELECT * FROM GermanSL;
sqlite> .quit
```

The generated CSV is then mapped to JSON with [@floralink/generator](https://www.github.com/floralink/generator) and a custom descriptive `mapping.js` module.

```shell
$ npx floralinkgen -i germansl.csv
```
