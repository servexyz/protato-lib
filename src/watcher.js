/*
  * Objective
  1. Grab watcher targets & watcher config 
  2. Create chokidar watcher factory of all targets' directories
  2a. Pass watcherConfig.options to chokidar's watcher's options
*/
const log = console.log;
import chalk from "chalk";
import chokidar from "chokidar";
import { printMirror, pathsExistOrThrow, printLine } from "./utilities";

const sampleConfig = {
  parent: "sandbox/node-starter",
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
  this.parent = oWatcherConfig.parent;
  this.targets = oWatcherConfig.targets;
  this.options = oWatcherConfig.options;
  this.directoriesToWatch = [];
  this.packagesToWatch = [];
  return this;
}

PTOWatcher.prototype.getDirectories = function getDirectories() {
  let { targets } = this;
  targets.map(({ childDirPath, childPackagePath }) => {
    printLine("blue");
    printMirror({ childDirPath }, "blue", "grey");
    printMirror({ childPackagePath }, "blue", "grey");
    printLine("blue");
    this.directoriesToWatch.push(childDirPath);
    this.packagesToWatch.push(childPackagePath);
  });
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
    //TODO: Call linker function here
  });
};

function getLinkerConfig(oWatcherConfig) {
  let watcher = new PTOWatcher(oWatcherConfig);
  watcher.getDirectories().createWatcher();
  const {
    directoriesToWatch,
    packagesToWatch,
    parent,
    parent: { dir: parentDirectory }
  } = watcher;
  printLine("yellow");
  printMirror({ oWatcherConfig }, "yellow", "grey");
  printLine({ color: "yellow", character: "." });
  printMirror({ parent }, "yellow", "grey");
  printMirror({ parentDirectory }, "yellow", "grey");
  printMirror({ directoriesToWatch }, "yellow", "grey");
  printMirror({ packagesToWatch }, "yellow", "grey");
  printLine("yellow");
  return {
    parentDirectory,
    directoriesToWatch,
    packagesToWatch
  };
}

/*
  ? Does it make sense to have a Hydrate function besides getLinkerConfig?
  ? Idea being that you can call watcher.getDirectories() & return those
  TODO: Create hydrate linker config function
  TODO: Create helper function for watcher.getDirectories (get, set and return)
  *  1. watcher.getDirectories().createWatcher()
  *  2. inject same "watcher" instance into sub-function (to preserve this state)
  *  3. watcher.hydrateLinkerConfig()  
  ? Call order might be something like:
  ? watcher.on("change", path => { linker(path, resp => { resp ? hydrateLinkerConfig() : throw})
*/

export { PTOWatcher, getLinkerConfig };
