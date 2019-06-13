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

//TODO: Create chokidar factory to programmatically add new ".add" chain for each children module
//TODO: Ignore any/all node_modules directories (parent & children)
export function watcher(szParentPath, szChildrenPaths, fnLinker) {
  log(`${chalk.green("szParentPath")}: ${szParentPath}`);
  log(`${chalk.green("szChildrenPaths")}: ${szChildrenPaths}`);

  var w;
  if (Array.isArray(szChildrenPaths)) {
    log(`szChildrenPaths is array`);
    w = chokidar.watch(szChildrenPaths[0]);
    for (let i = 1; i < szChildrenPaths.length; i++) {
      w.add(szChildrenPaths[i]);
    }
  } else {
    log(`szChildrenPaths is string`);
    w = chokidar.watch(szChildrenPaths);
  }
  handleParentToChildren(w, szParentPath, szChildrenPaths);
  // w.on("change", path => {
  //   console.log(chalk.yellow("path"), path);
  //   fnLinker(szParentPath, sz);
  // });
}
function handleParentToChildren(hWatcher, szParentPath, szChildrenPaths) {
  hWatcher.on("change", modifiedChildPath => {
    console.log(chalk.yellow("modifiedChildPath: "), modifiedChildPath);
    //TODO: Substring modifiedChildPath from existing configPaths to pass into fnLinker
    //* This is to ensure that npm linking happens in root scope.
    let childPackageName = getChildPackageName(
      modifiedChildPath,
      szChildrenPaths
    );
    fnLinker(szParentPath, modifiedChildPath, childPackageName);
  });
}
function getChildPackageName(modifiedPackagePath, szChildrenPaths) {
  if (Array.isArray(szChildrenPaths)) {
    //
  } else {
    //
  }
}
// console.log(`Hello ${process.env.SAMPLE_ENV}! from node-starter`);
// console.log(`watchPath: ${watchPath}`);
// console.log(`watchPath2: ${watchPath2}`);
