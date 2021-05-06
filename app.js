// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-without-export")


console.log(data);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
