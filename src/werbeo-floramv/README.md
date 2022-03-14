# WerBeo plugin for Floralink

A plugin for retrieving occurrence data from the WerBeo API for use in Floralink. Is currently hardcoded to visit the occurrence data portal Flora-MV.

# Setup on server

You can add the plugin to your project using the [@floralink/plugins](https://www.github.com/floralink/plugins) npm package:

```shell
$ npm install @floralink/plugins
```

Then, in your project:

```javascript
import { werbeo } from "@floralink/plugins";
```

To access all surveys from the WerBeo API you need to pass user credentials (for an enabled account) to the `initializePlugin()` function in Floralink Core.

> In that case, be aware that you are dealing with sensitive data (like exact occurrence positions or mail addresses from users) on your server now.
