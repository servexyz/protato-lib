const log = console.log;
import chalk from "chalk";
import watcher from "./watcher";
import linker from "./linker";

export function parser(oConfig, fnLinker = linker) {
  if (isConfigSingular(oConfig)) {
    const { parent: parentPath, child: childPaths } = oConfig;

    //TODO: Add watcher
    watcher(parentPath, childPaths, fnLinker);
    log(`${chalk.blue("singular path")}: ${parentPath}`);
    log(`${chalk.blue("singular modules")}: ${childPaths}`);
  } else {
    Object.values(oConfig.environments).map(env => {
      // const { path, modules } = env;
      const { parent: parentPath, child: childPaths } = env;
      //TODO: Add watcher
      //TODO: Add transformation
      log(`${chalk.blue("plural path")}: ${parentPath}`);
      log(`${chalk.blue("plural modules")}: ${childPaths}`);
    });
  }
}
function isConfigSingular(oConfig) {
  return !oConfig.hasOwnProperty("environments");
}
