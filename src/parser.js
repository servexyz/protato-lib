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
import { printLine, printMirror, pathsExistSync } from "./utilities";

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

  this.watcher = { targets: undefined, options: undefined, parent };
  this.config = config;
  this.config.children = config.children;
  return this;
}

PTOParser.prototype.getWatcherTargets = function getWatcherTargets(
  children = this.config.children
) {
  let targets = children.map(oChild => {
    let { dir, src } = oChild;
    let rootDir = process.env.configRootDir || process.cwd();
    let childDirPath = path.join(rootDir, dir, src);
    let childPackagePath = path.join(rootDir, dir, "package.json");
    let pathsToCheck = [childDirPath, childPackagePath];

    pathsExistSync(
      pathsToCheck,
      "getWatcherTargets' directory and package path check"
    );
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

PTOParser.prototype.getWatcherOptions = function getWatcherOptions() {
  let childrenDirectoriesToIgnore = [];

  function getChildNodeModulesPath(szChildTargetPath) {
    let potentialPath = path.join(szChildTargetPath, "node_modules");
    pathsExistSync(
      potentialPath,
      "getWatcherOptions -> getChildNodeModulesPath() path check"
    );
    return potentialPath;
  }

  printLine("green");
  this.config.children.map(child => {
    const { dir } = child;
    printMirror({ dir }, "green", "grey");

    childrenDirectoriesToIgnore.push(getChildNodeModulesPath(dir));
  });

  printLine({ character: ".", color: "green" });
  printMirror({ childrenDirectoriesToIgnore }, "green", "grey");
  printLine("green");

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
    watcher: { targets, options, parent }
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
    parent,
    targets,
    options
  };
}

export { PTOParser, getWatcherConfig };
