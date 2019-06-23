/*
  * Objective
  1. Grab watcher targets & watcher config 
  2. Create chokidar watcher factory of all targets' directories
  2a. Pass watcherConfig.options to chokidar's watcher's options
*/
const log = console.log;
import fs from "fs-extra";
import chalk from "chalk";
import chokidar from "chokidar";
import { printMirror, pathsExistOrThrow, printLine } from "./utilities";

const sampleConfig = {
  targets: [
    {
      childDirPath: "sandbox/npm-starter-sample-module/src",
      childPackagePath: "sandbox/npm-starter-sample-module/package.json"
    }
  ],
  options: {
    cwd: process.env.configRootDir || process.cwd(),
    ignored: [
      "node_modules",
      "sandbox/npm-starter-sample-module/node_modules",
      "sandbox/npm-starter-sample-module/.git"
    ],
    ignoreInitial: true,
    ignorePermissionErrors: true,
    followSymlinks: true
  }
};

//TODO: Replace file checks with utility function
function PTOWatcher(oWatcherConfig) {
  pathsExistOrThrow(oWatcherConfig.targets);
  this.targets = oWatcherConfig.targets;
  this.options = oWatcherConfig.options;
  this.directoriesToWatch = undefined;
  return this;
}

PTOWatcher.prototype.getDirectoriesToWatch = function getDirectoriesToWatch() {
  let directories = [];
  this.targets.map(({ childDirPath, childPackagePath }) => {
    printLine("blue");
    printMirror({ childDirPath }, "blue", "grey");
    printMirror({ childPackagePath }, "blue", "grey");
    printLine("blue");
    directories.push(childDirPath);
  });
  this.directoriesToWatch = directories;
  return this;
};
PTOWatcher.prototype.createWatcher = function createWatcher() {
  const { directoriesToWatch, options } = this;
  pathsExistOrThrow(directoriesToWatch);
  printMirror({ directoriesToWatch }, "blue", "grey");
  var watcher;
  //TODO: Add a new sample repo to repogen
  //TODO: Create backup config to test whether this works with 2+ directories
  if (directoriesToWatch.length > 0) {
    watcher = chokidar.watch(directoriesToWatch[0], { ...options });
  }
  if (directoriesToWatch.length > 1) {
    for (let i = 1; i < directoriesToWatch.length; i++) {
      watcher.add(directoriesToWatch[i]);
    }
  }
  watcher.on("change", modifiedChildPath => {
    printMirror({ modifiedChildPath }, "green", "grey");
  });
};

function getLinkerConfig(oWatcherConfig) {
  let watcher = new PTOWatcher(oWatcherConfig);
  watcher.getDirectoriesToWatch().createWatcher();
  let dirs = watcher.directoriesToWatch;
  // printMirror({ dirs }, "magenta", "grey");
}

export { PTOWatcher, getLinkerConfig, sampleConfig };

// initWatcher as separate function ?
