/*
  * Objective
  1. Autodetect user config (ie. ".protato.js")
  2. Transform user config into: [ watchTargets, watchOptions ]
  2a. Do this via: getWatcherConfig
  2ai. Do this via: [getWatchTargets, getWatchOptions]

  * Sample Output
  {
    watch: [
      {
        dir: "sandbox/npm-starter-sample-module/src",
        name: "npm-starter-sample-module"
      },
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
    ]
  }
*/

import path from "path";
import chalk from "chalk";
import fs from "fs-extra";

function PTOParser(config) {
  const { parent, children } = config;
  log(`${chalk.yellow("parent")}: ${parent}`);
  log(`${chalk.yellow("children")}: ${JSON.stringify(children, null, 2)}`);
  this.parent = config.parent;
  this.children = config.children;
}
PTOParser.prototype.getWatcherTargets = getWatcherTargets;
PTOParser.prototype.getWatcherOptions = getWatcherOptions;

function getWatcherTargets(children) {
  //? Do I need to worry about cwd here?
  return children.map(oChild => {
    let { dir, src } = oChild;
    let childDirPath = path.join(dir, src);
    let childPackagePath = path.join(childDirPath, "package.json");
    const { name } = require(rootDirectory);
  });
}
function getWatcherOptions(childrenIgnoredDirectories) {}

export { PTOParser as parser };
