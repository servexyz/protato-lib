require("dotenv").config();
const path = require("path");
const chokidar = require("chokidar");
const chalk = require("chalk");

// One-liner for current directory, ignores .dotfiles
// let regexIgnore1 = new RegExp(/(^|[\/\\])\../);
// let regexIgnore2 = new RegExp(/(^|[\/\\])|\b(node_modules)\../);
// let regexIgnore3 = new RegExp(/(^|[\/\\]|\b[^node_modules]\b)\../);
// let regexIgnore4 = new RegExp(/^(?!node_modules).*$/);
// chokidar.watch(`${path.join(__dirname, )}`, { ignored: regexIgnore4 }).on("all", (event, path) => {
//   console.log(event, path);
// });

let dir = "src";
let watchPath = path.join(process.cwd(), dir);
let watchPath2 = __dirname;
function Protato(directoryToWatch) {
  chokidar.watch(directoryToWatch).on("change", path => {
    console.log(chalk.yellow("path"), path);
  });
}

// console.log(`Hello ${process.env.SAMPLE_ENV}! from node-starter`);
console.log(`watchPath: ${watchPath}`);
console.log(`watchPath2: ${watchPath2}`);
