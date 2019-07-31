import chokidar from "chokidar";
import { printLine, printMirror } from "tacker";
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

export function PTOWatcher(oWatcherConfig) {
  printMirror({ oWatcherConfig }, "blue", "grey");
  this.parent = oWatcherConfig.parent;
  this.targets = oWatcherConfig.targets;
  this.options = oWatcherConfig.options;
  this.directoriesToWatch = [];
  this.packagesToWatch = [];

  return this;
}

PTOWatcher.prototype.getDirectories = function getDirectories() {
  let { targets } = this;
  printLine("blue");
  targets.map(({ childDirPath, childPackagePath }) => {
    printMirror({ childDirPath }, "blue", "grey");
    printMirror({ childPackagePath }, "blue", "grey");
    this.directoriesToWatch.push(childDirPath);
    this.packagesToWatch.push(childPackagePath);
  });
  printLine("blue");
  return this;
};

PTOWatcher.prototype.createWatcher = function createWatcher() {
  const { directoriesToWatch, options } = this;
  printMirror({ directoriesToWatch }, "blue", "grey");
  var watcher;
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
    linker(modifiedChildPath, this.parent.dir);
  });
};

export function initWatcher(oWatcherConfig) {
  let watcher = new PTOWatcher(oWatcherConfig);
  watcher.getDirectories().createWatcher();
  return watcher;
}
