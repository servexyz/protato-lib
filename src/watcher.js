/*
  * Objective
  1. Grab watcher targets & watcher config 
  2. Create chokidar watcher factory of all targets' directories
  2a. Pass watcherConfig.options to chokidar's watcher's options
*/
const log = console.log;
import fs from "fs-extra";
import chalk from "chalk";
import { printMirror } from "./utilities";
import { fstat } from "fs";

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

function PTOWatcher(oWatcherConfig) {
  const { targets, options } = oWatcherConfig;
  (async () => {
    Object.values(targets).map(async ({ childDirPath, childPackagePath }) => {
      printMirror({ childDirPath }, "magenta", "grey");
      printMirror({ childPackagePath }, "magenta", "grey");
      try {
        await fs.access(childDirPath);
        await fs.access(childPackagePath);
      } catch (err) {
        log(
          `
        ${chalk.red("PTOWatcher failed to initialize properly <fs.access> \n")} 
        Official error: ${chalk.grey(err)}
        `
        );
      }
    });
  })();
}

function getLinkerConfig() {
  log(`k`);
  return;
}

export { PTOWatcher, getLinkerConfig, sampleConfig };

// initWatcher as separate function ?
