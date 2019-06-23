/*
  * Objective
  1. Grab watcher targets & watcher config 
  2. Create chokidar watcher factory of all targets' directories
  2a. Pass watcherConfig.options to chokidar's watcher's options
*/
const log = console.log;
import fs from "fs-extra";
import chalk from "chalk";
import { printMirror, pathsExist } from "./utilities";

const sampleConfig = {
  targets: [
    {
      dir: "sandbox/npm-starter-sample-module/src",
      name: "npm-starter-sample-module"
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
  const { targets, options } = oWatcherConfig;
  pathsExist(targets);
}

function getLinkerConfig() {
  log(`k`);
  return;
}

export { PTOWatcher, getLinkerConfig, sampleConfig };

// initWatcher as separate function ?
