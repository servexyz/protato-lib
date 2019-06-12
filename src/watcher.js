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

//TODO: Create chokidar factory to programmatically add new ".add" chain for each child module
//TODO: Ignore any/all node_modules directories (parent & children)
export function watcher(szParentPath, szChildPaths, fnLinker) {
  log(`${chalk.green("szParentPath")}: ${szParentPath}`);
  log(`${chalk.green("szChildPaths")}: ${szChildPaths}`);
  var w;
  if (Array.isArray(szChildPaths)) {
    log(`szChildPaths is array`);
    w = chokidar.watch(szChildPaths[0]);
    for (let i = 1; i < szChildPaths.length; i++) {
      w.add(szChildPaths[i]);
    }
  } else {
    log(`szChildPaths is string`);
    w = chokidar.watch(szChildPaths);
  }
  const w = chokidar.watch();
  szChildPaths.forEach(cps => {
    w.add(cps);
  });
  // chokidar.watch(szChildDirectoryToWatch).on("change", path => {
  //   console.log(chalk.yellow("path"), path);
  //   fnLinker();
  // });
  w.on("change", path => {
    console.log(chalk.yellow("path"), path);
    // fnLinker(szParentPath);
  });
}

// console.log(`Hello ${process.env.SAMPLE_ENV}! from node-starter`);
// console.log(`watchPath: ${watchPath}`);
// console.log(`watchPath2: ${watchPath2}`);
