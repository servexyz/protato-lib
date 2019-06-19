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

const log = console.log;
import path from "path";
import chalk from "chalk";
import fs from "fs-extra";

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
  // this.parent = config.parent;
  // this.children = config.children;
  this.getWatcherTargets(config.children);
}

PTOParser.prototype.getWatcherTargets = function getWatcherTargets(children) {
  //? Do I need to worry about cwd here?
  return children.map(oChild => {
    let { dir, src } = oChild;
    let childDirPath = path.join(dir, src);
    let childPackagePath = path.join(childDirPath, "package.json");
    (async () => {
      try {
        await fs.ensureDir(childDirPath);
        await fs.ensureFile(childPackagePath);
        log(
          `${chalk.blue(
            "-----------------------------------------------------------"
          )} `
        );
        log(
          `${chalk.blue("childDirPath")} and ${chalk.blue(
            "childPackagePath"
          )} were both found`
        );
        log(
          `${chalk.blue(
            "-----------------------------------------------------------"
          )} `
        );
        log(`${chalk.blue("childDirPath")}: ${chalk.grey(childDirPath)}`);
        log(
          `${chalk.blue("childPackagePath")}: ${chalk.grey(childPackagePath)}`
        );
      } catch (err) {
        throw new Error(
          `${chalk.red("childDirPath")} or ${chalk.red(
            "childPackagePath"
          )} were not found. \n ${chalk.grey(err)}`
        );
      }
    })();
  });
};
PTOParser.prototype.getWatcherOptions = function getWatcherOptions(
  childrenIgnoredDirectories
) {
  log(`placeholder`);
};

export { PTOParser };
