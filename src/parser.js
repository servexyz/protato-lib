const log = console.log;
import path from "path";
import chalk from "chalk";
import { printLine, printMirror } from "tacker";

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

    printLine("magenta");
    printMirror({ childDirPath }, "magenta", "grey");
    printMirror({ childPackagePath }, "magenta", "grey");
    printLine("magenta");
    return { childDirPath, childPackagePath };
  });
  this.watcher.targets = targets;
  if (typeof this.watcher.targets !== "undefined") {
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
    if (typeof szChildTargetPath === "undefined") return null;
    let potentialPath = path.join(szChildTargetPath, "node_modules");
    // pathsExistSync(
    //   potentialPath,
    //   "getWatcherOptions -> getChildNodeModulesPath() path check"
    // );
    return potentialPath;
    // if (await pathsExist(potentialPath)) {
    //   return potentialPath;
    // } else {
    //   return false;
    // }
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
