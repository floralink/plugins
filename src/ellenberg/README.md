# Floralink Ellenberg plugin

A plugin for using the N, F and T status described by Fukarek & Henker (2006) in Floralink.

# Usage

You can add the plugin to your project using the [@floralink/plugins](https://www.github.com/floralink/plugins) npm package:

```shell
$ npm install @floralink/plugins
```

Then, in your project:

```javascript
import { ellenberg } from "@floralink/plugins";
```

# Data source

The plugin's database is generated from GermanSL (version 1.5.1), specifically the `ecodbase.dbf` file.

## Citation

> Jansen, F. & Dengler, J. (2008): GermanSL - eine universelle taxonomische Referenzliste für Vegetationsdatenbanken. Tuexenia 28: 239–253. [Online version (in German)](https://germansl.infinitenature.org/pdf/Jansen,%20Dengler%20-%20Tuexenia%2028.pdf)

## Data generation

The original dBASE (.dbf) file was pre-processed by saving it as an semicolon-delimited CSV with LibreOffice (v7.2.2.2).

The CSV file is then mapped to JSON with [@floralink/generator](https://www.github.com/floralink/generator) and a custom descriptive `mapping.js` module.

```shell
$ npx floralinkgen -i ecodbase.csv -d ";"
```

## Please note

If the value for an indicator is "x" or "?", this specified in an extra comment field and the value is set as "0".
However, this pattern seems to be inconsistent.

In case

- there is a "0" as field value,
- there is nothing else specified in the comment field
- and "0" is not a possible enumeration of that field (that's the case for the salt indicator)

`the mapping.js` module converts that to an "x", since this seems to be the right case.

If all entries for the indicator values are set as "0" (this seems to be the case when there are no indicator values described for that taxon), the entry will be omitted. (IMPLEMENT THIS!)
