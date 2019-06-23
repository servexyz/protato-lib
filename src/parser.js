/*
  * Objective
  1. Autodetect user config (ie. ".protato.js")
  2. Transform user config into: [ watchTargets, watchOptions ]
  2a. Do this via: getWatcherConfig
  2ai. Do this via: [getWatchTargets, getWatchOptions]


*/

const log = console.log;
import path from "path";
import chalk from "chalk";
import fs from "fs-extra";
import { printLine, printMirror, pathsExist } from "./utilities";

function PTOParser(config) {
  const { parent, children } = config;
  printLine("yellow");
  log(
    `${chalk.yellow("parent")} and ${chalk.yellow(
      "children"
    )} objects were both found`
  );
  printMirror({ parent }, "yellow", "grey");
  printMirror({ children }, "yellow", "grey");
  printLine("yellow");

  this.watcher = { targets: undefined, options: undefined };
  this.config = config;
  this.config.parent = config.parent;
  this.config.children = config.children;
  return this;
}

PTOParser.prototype.getWatcherTargets = function getWatcherTargets(
  children = this.config.children
) {
  let targets = children.map(oChild => {
    let { dir, src } = oChild;
    let childDirPath = path.join(dir, src);
    let childPackagePath = path.join(dir, "package.json");

    let pathsToCheck = [childDirPath, childPackagePath];
    pathsExist(
      pathsToCheck,
      "getWatcherTargets' directory and package path existence check"
    );
    // (async () => {
    //   try {
    //     await fs.access(childDirPath);
    //     await fs.access(childPackagePath);
    //     printLine("blue");
    //     log(
    //       `${chalk.blue("childDirPath")} and ${chalk.blue(
    //         "childPackagePath"
    //       )} were both found`
    //     );
    //     printMirror({ childDirPath }, "blue", "grey");
    //     printMirror({ childPackagePath }, "blue", "grey");
    //     printLine("blue");
    //   } catch (err) {
    //     throw new Error(
    //       `${chalk.red(
    //         "getWatcherTargets :: childDirPath & childPackagePath existence check"
    //       )} \n ${chalk.grey(err)}`
    //     );
    //   }
    // })();
    return { childDirPath, childPackagePath };
  });
  this.watcher.targets = targets;
  if (this.watcher.targets !== undefined) {
    printLine("yellow");
    log(`${chalk.yellow("watcher targets")} are defined \n`);
    printMirror({ targets }, "yellow", "grey");
    printLine("yellow", null, null, 2);
  } else {
    printLine("red");
    printMirror({ targets }, "red", "white");
    printLine("red");
  }
  return this;
};

//TODO: Replace file checks with utility function
PTOParser.prototype.getWatcherOptions = function getWatcherOptions() {
  let childrenDirectoriesToIgnore = [];

  function getChildNodeModulesPath(szChildTargetPath) {
    let potentialPath = path.join(szChildTargetPath, "node_modules", "**", "*");
    (async () => {
      try {
        await fs.access(potentialPath);
        printLine("green");
        printMirror({ childrenDirectoriesToIgnore }, "green", "grey");
        printLine("green");
      } catch (err) {
        throw new Error(`${chalk.red("getChildNodeModulesPath")}: ${err}`);
      }
    })();
    return potentialPath;
  }

  this.config.children.map(child => {
    const { dir } = child;
    childrenDirectoriesToIgnore.push(getChildNodeModulesPath(dir));
  });

  this.watcher.options = {
    cwd: process.env.configRootDir || process.cwd(),
    ignored: ["node_modules/**/*", ...childrenDirectoriesToIgnore],
    ignoreInitial: true,
    ignorePermissionErrors: true,
    followSymlinks: true
  };

  return this;
};

function getWatcherConfig(oConfig) {
  let parser = new PTOParser(oConfig);

  parser.getWatcherTargets().getWatcherOptions();

  const {
    watcher: { targets, options }
  } = parser;

  printLine("yellow");
  printMirror({ targets }, "yellow", "grey");
  log(
    `${chalk.yellow("options")}: ${chalk.grey(
      JSON.stringify(options, null, 2)
    )}`
  );
  printLine("yellow");
  return {
    targets,
    options
  };
}

export { PTOParser, getWatcherConfig };

//   *******************************************************************
//   * getWatcherConfig Sample Output
//   *******************************************************************
//   const watcherConfig = {
//   "targets": [
//     {
//       "childDirPath": "sandbox/npm-starter-sample-module/src",
//       "childPackagePath": "sandbox/npm-starter-sample-module/package.json"
//     }
//   ],
//   "options": {
//     "cwd": "/Users/alechp/Code/servexyz/protato/.repositories/protato-lib",
//     "ignored": [
//       "node_modules/**/*",
//       "sandbox/npm-starter-sample-module/node_modules/**/*"
//     ],
//     "ignoreInitial": true,
//     "ignorePermissionErrors": true,
//     "followSymlinks": true
//   }
// }
//   *******************************************************************
