require("dotenv").config();
import chokidar from "chokidar";

// One-liner for current directory, ignores .dotfiles
let regexIgnore1 = new RegExp(/(^|[\/\\])\../);
let regexIgnore2 = new RegExp(/(^|[\/\\])|\b(node_modules)\../);
let regexIgnore3 = new RegExp(/(^|[\/\\]|\b[^node_modules]\b)\../);
let regexIgnore4 = new RegExp(/^(?!node_modules).*$/);
chokidar.watch(".", { ignored: regexIgnore4 }).on("all", (event, path) => {
  console.log(event, path);
});

console.log(`Hello ${process.env.SAMPLE_ENV}! from node-starter`);
