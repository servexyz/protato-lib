const log = console.log;
import path from "path";
import chalk from "chalk";

import chokidar from "chokidar";
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

//TODO: Read root dir from process.env
//TODO: Add root dir error handling
//TODO: Ignore any/all node_modules directories (parent & children)

const chokidarOptions = {
  cwd: process.env.configRootDir,
  ignored: ["node_modules/**/*", ".git/**/*"],
  ignoreInitial: true,
  ignorePermissionErrors: true,
  followSymlinks: true
};

export function watcher(szParentPath, szChildrenPaths, fnLinker) {
  log(`${chalk.green("szParentPath")}: ${szParentPath}`);
  log(`${chalk.green("szChildrenPaths")}: ${szChildrenPaths}`);

  var w;
  if (Array.isArray(szChildrenPaths)) {
    // log(`szChildrenPaths is array`);
    w = chokidar.watch(szChildrenPaths[0], { ...chokidarOptions });
    for (let i = 1; i < szChildrenPaths.length; i++) {
      w.add(szChildrenPaths[i]);
    }
  } else {
    // log(`szChildrenPaths is string`);
    w = chokidar.watch(szChildrenPaths, { ...chokidarOptions });
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

//TODO: Use package-json to extract name metadata from package.json
function getChildPackageName(modifiedPackagePath, szChildrenPaths) {
  log(chalk.green("getChildPackageName called"));
  var packageName;
  if (Array.isArray(szChildrenPaths)) {
    log(`yes, it's an array`);
    szChildrenPaths.forEach(childPath => {
      //TODO: Create utility function to abstract this unnecessary repetition
      if (modifiedPackagePath.includes(childPath)) {
        log(`childPath inside plural: ${chalk.red(childPath)}`);
        //TODO: Add handler for if pkgDir returns undefined
        let packageRootDir = pkgDir(modifiedPackagePath);
        let name = getPackageNameFromPackageJson(packageRootDir);
        log(
          `getChildPackageName<${chalk.blue("singular")}>: ${chalk.blue(name)}`
        );
        packageName += name;
      }
    });
  } else {
    //TODO: Create utility function to abstract this unnecessary repetition
    log(`${chalk.yellow("szChildrenPaths")}: ${chalk.blue(szChildrenPaths)}`);
    log(
      `${chalk.yellow("modifiedPackagePath")}: ${chalk.blue(
        modifiedPackagePath
      )}`
    );
    let childPath = szChildrenPaths;
    if (modifiedPackagePath.includes(childPath)) {
      log(`childPath inside singular: ${chalk.red(childPath)}`);
      let packageRootDir = process.env.configRootDir;
      let packagePath = getPackagePathFromChildPath(childPath);
      let packageFullPath = path.join(packageRootDir, packagePath);
      log(`packageFullPath: ${JSON.stringify(packageFullPath, null, 2)}`);
      let name = getPackageNameFromPackageJson(packageFullPath);
      log(
        `getChildPackageName<${chalk.blue("singular")}>: ${chalk.blue(name)}`
      );
      //TODO: Add handler for if pkgDir returns undefined
      packageName = name;
    } else {
      log(`childPath does NOT include modifiedPackagePath`);
    }
  }
  log(`getChildPackageName: ${chalk.green(packageName)}`);
  return packageName;
}

//TODO: Refactor to not include "From..."
function getPackagePathFromChildPath(szChildPath) {
  log(`szChildPath in getPackagePath: ${chalk.blue(szChildPath)}`);
  return path.join(szChildPath, "package.json");
}
function getPackageNameFromPackageJson(szPackagePath) {
  //TODO: What are the requirements for relative path here?
  /*
    szChildrenPaths: sandbox/npm-starter-sample-module
    modifiedPackagePath: sandbox/npm-starter-sample-module/src/index.js

    Since this is being returned, I need to figure out a better way to handle...
    Just use __dirname of config file
  */
  log(`${chalk.green("getPackageNameFromPackageJson")} called`);
  const { name } = require(szPackagePath);
  log(`getPackageName: ${chalk.green(name)}`);
  return name;
}
