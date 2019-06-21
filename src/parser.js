/*
  * Objective
  1. Autodetect user config (ie. ".protato.js")
  2. Transform user config into: [ watchTargets, watchOptions ]
  2a. Do this via: getWatcherConfig
  2ai. Do this via: [getWatchTargets, getWatchOptions]

* Sample Output 
  const watcherConfig = {
    targets: [
      {
        dir: "sandbox/npm-starter-sample-module/src",
        name: "npm-starter-sample-module"
      }
    ],
    options: {
      cwd: process.env.configRootDir,
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
*/

const log = console.log;
import path from "path";
import chalk from "chalk";
import fs from "fs-extra";
import { printLine, printMirror } from "./utilities";

function PTOParser(config) {
  const { parent, children } = config;
  log(
    `${chalk.yellow(
      "-----------------------------------------------------------"
    )} `
  );
  log(
    `${chalk.yellow("parent")} and ${chalk.yellow(
      "children"
    )} objects were both found`
  );
  log(
    `${chalk.yellow(
      "-----------------------------------------------------------"
    )} `
  );
  log(`${chalk.yellow("parent")}: ${JSON.stringify(parent, null, 2)}`);
  log(`${chalk.yellow("children")}: ${JSON.stringify(children, null, 2)}`);
  this.watcher = { targets: undefined, options: undefined };
  this.config = config;
  this.parent = config.parent;
  this.children = config.children;
  return this;
  // this.getWatcherTargets(config.children);
}

PTOParser.prototype.getWatcherTargets = function getWatcherTargets(
  children = this.children
) {
  let targets = children.map(oChild => {
    let { dir, src } = oChild;
    let childDirPath = path.join(dir, src);
    let childPackagePath = path.join(childDirPath, "package.json");
    (async () => {
      try {
        await fs.ensureDir(childDirPath);
        await fs.ensureFile(childPackagePath);

        printLine("blue", 59, "-");
        log(
          `${chalk.blue("childDirPath")} and ${chalk.blue(
            "childPackagePath"
          )} were both found`
        );
        printMirror({ childDirPath }, "yellow", "grey");
        log(
          `${chalk.blue("childPackagePath")}: ${chalk.grey(childPackagePath)}`
        );
      } catch (err) {
        throw new Error(
          `${chalk.red(
            "getWatcherTargets :: childDirPath & childPackagePath existence check"
          )} \n ${chalk.grey(err)}`
        );
      }
    })();
    return childDirPath;
  });
  this.watcher.targets = targets;
  if (this.watcher.targets !== undefined) {
    log(
      `${chalk.yellow(
        "-----------------------------------------------------------"
      )}`
    );
    log(`${chalk.yellow("watcher targets")} are defined `);
    log(
      `${chalk.yellow(
        "-----------------------------------------------------------"
      )}`
    );
    log(`${chalk.yellow("this.watcher.targets")}: ${this.watcher.targets}`);
  } else {
    log(
      `${chalk.red(
        "-----------------------------------------------------------"
      )}`
    );
    log(
      `${chalk.yellow("this.watcher.targets")}: ${chalk.red(
        this.watcher.targets
      )}`
    );
    log(
      `${chalk.red(
        "-----------------------------------------------------------"
      )}`
    );
  }
  return this;
};
PTOParser.prototype.getWatcherOptions = function getWatcherOptions() {
  /*
  TODO: derive children's node_module directories via this.watcher.targets
  TODO: set this.watcher.options = {}
  {
    options: {
        cwd: process.env.configRootDir,
        ignored: [
          "node_modules",
          "sandbox/npm-starter-sample-module/node_modules",
          "sandbox/npm-starter-sample-module/.git"
        ],
        ignoreInitial: true,
        ignorePermissionErrors: true,
        followSymlinks: true
      }
    } 
  }
*/
  let options = {};
  return this;
};

function getWatcherConfig(oConfig) {
  let parser = new PTOParser(oConfig);
  parser.getWatcherTargets().getWatcherOptions();
}

export { PTOParser, getWatcherConfig };
