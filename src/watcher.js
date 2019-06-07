require("dotenv").config();
// import path from "path";
import chokidar from "chokidar";
import chalk from "chalk";

// One-liner for current directory, ignores .dotfiles
// let regexIgnore1 = new RegExp(/(^|[\/\\])\../);
// let regexIgnore2 = new RegExp(/(^|[\/\\])|\b(node_modules)\../);
// let regexIgnore3 = new RegExp(/(^|[\/\\]|\b[^node_modules]\b)\../);
// let regexIgnore4 = new RegExp(/^(?!node_modules).*$/);

// chokidar.watch(`${path.join(__dirname, )}`, { ignored: regexIgnore4 }).on("all", (event, path) => {
//   console.log(event, path);
// });

// let dir = "src";
// let watchPath = path.join(process.cwd(), dir);
// let watchPath2 = __dirname;

export function watcher(szDirectoryToWatch, fnGenerator) {
  chokidar.watch(szDirectoryToWatch).on("change", path => {
    console.log(chalk.yellow("path"), path);
    fnGenerator();
  });
}

// console.log(`Hello ${process.env.SAMPLE_ENV}! from node-starter`);
// console.log(`watchPath: ${watchPath}`);
// console.log(`watchPath2: ${watchPath2}`);
