const log = console.log;
import chalk from "chalk";
import watcher from "./watcher";

export function parser(oConfig, fnLinker) {
  if (isConfigSingular(oConfig)) {
    // const { path, modules } = oConfig;
    const { parent: parentPath, children: childrenPath } = oConfig;

    //TODO: Add watcher
    // watcher(path, fnLinker);
    //TODO: Add transformation
    log(`${chalk.blue("singular path")}: ${path}`);
    log(`${chalk.blue("singular modules")}: ${modules}`);
  } else {
    Object.values(oConfig.environments).map(env => {
      // const { path, modules } = env;
      const { parent: parentPath, children: childrenPath } = env;
      //TODO: Add watcher
      //TODO: Add transformation
      log(`${chalk.blue("plural path")}: ${path}`);
      log(`${chalk.blue("plural modules")}: ${modules}`);
    });
  }
}
function isConfigSingular(oConfig) {
  return !oConfig.hasOwnProperty("environments");
}
