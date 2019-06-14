const log = console.log;
import chokidar from "chokidar";
import chalk from "chalk";
import pkgJson from "package-json";
import pkgDir from "pkg-dir";

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
  log(`about to call ${chalk.blue("handleParentToChildren")}`);
  w.on("change", modifiedChildPath => {
    console.log(chalk.yellow("modifiedChildPath: "), modifiedChildPath);
    //TODO: Substring modifiedChildPath from existing configPaths to pass into fnLinker
    //* This is to ensure that npm linking happens in root scope.
    let childPackageName = getChildPackageName(
      modifiedChildPath,
      szChildrenPaths
    );
    log(`childPackageName: ${chalk.blue(childPackageName)}`);
    fnLinker(szParentPath, modifiedChildPath, childPackageName);

    // w.on("change", path => {
    //   console.log(chalk.yellow("path"), path);
    //   fnLinker(szParentPath, sz);
    // });
  });
}

//TODO: Use pkgDir instead of funky lastIndexOf lookup
//TODO: Use package-json to extract name metadata from package.json
function getChildPackageName(modifiedPackagePath, szChildrenPaths) {
  chalk.green("getChildPackageName called");
  var packageName;
  if (Array.isArray(szChildrenPaths)) {
    szChildrenPaths.forEach(childPath => {
      //TODO: Create utility function to abstract this unnecessary repetition
      if (childPath.includes(modifiedPackagePath)) {
        log(`childPath inside plural: ${chalk.red(childPath)}`);
        packageName = childPath;
      }
    });
  } else {
    //TODO: Create utility function to abstract this unnecessary repetition
    if (szChildrenPaths.includes(modifiedPackagePath)) {
      log(`childPath inside singular: ${chalk.red(szChildrenPaths)}`);
      packageName = szChildrenPaths;
    }
  }
  log(`packageName: ${packageName}`);
  return packageName;
}
