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
let watchPath = process.cwd();
let watchPath2 = `${path.join(process.cwd(), dir)}`;
let watchPath3 = `${path.join(__dirname, dir)}`;
chokidar.watch(watchPath).on("change", path => {
  console.log(chalk.yellow("path"), path);
});

// console.log(`Hello ${process.env.SAMPLE_ENV}! from node-starter`);
console.log(`watchPath: ${watchPath}`);
console.log(`watchPath2: ${watchPath2}`);
console.log(`watchPath3: ${watchPath3}`);
