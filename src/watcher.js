/*
  * Objective
  1. Grab watcher targets & watcher config 
  2. Create chokidar watcher factory of all targets' directories
  2a. Pass watcherConfig.options to chokidar's watcher's options
*/
const log = console.log;
import fs from "fs-extra";
import chalk from "chalk";
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
PTOWatcher.prototype.createWatcher = function createWatcher() {};

function getLinkerConfig(oWatcherConfig) {
  let watcher = new PTOWatcher(oWatcherConfig);
  watcher.getDirectoriesToWatch();
  let dirs = watcher.directoriesToWatch;
  // printMirror({ dirs }, "magenta", "grey");
}

export { PTOWatcher, getLinkerConfig, sampleConfig };

// initWatcher as separate function ?
