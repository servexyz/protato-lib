const log = console.log;
import chokidar from "chokidar";
import chalk from "chalk";
//TODO: Move linker callback to watcher

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

export function watcher(szChildDirectoryToWatch, fnLinker) {
  chokidar.watch(szChildDirectoryToWatch).on("change", path => {
    console.log(chalk.yellow("path"), path);
    fnLinker();
  });
}

// console.log(`Hello ${process.env.SAMPLE_ENV}! from node-starter`);
// console.log(`watchPath: ${watchPath}`);
// console.log(`watchPath2: ${watchPath2}`);
