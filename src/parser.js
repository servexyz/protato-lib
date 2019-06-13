const log = console.log;
import chalk from "chalk";
import { watcher } from "./watcher";
import { linker } from "./linker";

//
export function parser(oConfig, fnLinker = linker) {
  if (isConfigSingular(oConfig)) {
    const { parent: parentPath, children: childrenPaths } = oConfig;
    watcher(parentPath, childrenPaths, fnLinker);
    log(`${chalk.blue("singular path")}: ${parentPath}`);
    log(`${chalk.blue("singular modules")}: ${childrenPaths}`);
  } else {
    Object.values(oConfig.environments).map(env => {
      const { parent: parentPath, children: childrenPaths } = env;
      log(`${chalk.blue("plural path")}: ${parentPath}`);
      log(`${chalk.blue("plural modules")}: ${childrenPaths}`);
    });
  }
}

function isConfigSingular(oConfig) {
  return !oConfig.hasOwnProperty("environments");
}
