/*
  * Objective
  1. Grab watcher targets & watcher config 
*/
import chalk from "chalk";

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
  let packageDir
  (async () => {
    try {
      let 
    } catch (err) {
      log(
        `
        ${chalk.red("PTOWatcher failed to initialize properly. \n")} 
        ${chalk.grey(`Official error: ${err}`)}
        `
      );
    }
  })();
}

PTOWatcher.prototype.getLinkerConfig = function getLinkerConfig() {};

export { PTOWatcher, sampleConfig, initWatcher, getLinkerConfig };
