/*
  * Objective
  1. Grab watcher targets & watcher config 
  2. Create chokidar watcher factory of all targets' directories
  2a. Pass watcherConfig.options to chokidar's watcher's options
*/
const log = console.log;
import chokidar from "chokidar";
import { printMirror, pathsExistOrThrow, printLine } from "./utilities";
import { linker } from "./linker";

const sampleConfig = {
  parent: {
    dir: "sandbox/node-starter"
  },
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
export function PTOWatcher(oWatcherConfig) {
  pathsExistOrThrow(oWatcherConfig.targets);
  this.parent = oWatcherConfig.parent;
  this.targets = oWatcherConfig.targets;
  this.options = oWatcherConfig.options;
  this.directoriesToWatch = [];
  this.packagesToWatch = [];
  this.linker = undefined;

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
    linker(modifiedChildPath);
  });
};

export function initWatcher(oWatcherConfig) {
  let watcher = new PTOWatcher(oWatcherConfig);
  watcher.getDirectories().createWatcher();
  return watcher;
}

// function setLinker(oWatcherConfig) {
//   let watcher = new PTOWatcher(oWatcherConfig);
//   watcher.getDirectories().createWatcher();
//   const {
//     parent: { dir: parentDirectory }
//   } = watcher;

//   printLine("yellow");
//   printMirror({ oWatcherConfig }, "yellow", "grey");
//   printLine({ color: "yellow", character: "." });
//   printMirror({ parentDirectory }, "yellow", "grey");
//   printLine("yellow");

//   let linker = new PTOLinker(parentDirectory);
//   PTOLinker.prototype.parentDirectory = parentDirectory;
//   printMirror({ linker }, "magenta", "white");
//   return watcher;
// }

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
