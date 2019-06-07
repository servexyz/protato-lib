const log = console.log;
import chalk from "chalk";
import { single, multiple } from "./sample.config";
import watcher from "./watcher";
import generator from "./generator";

export function parser(oConfig, fnGenerator) {
  if (isConfigSingular(oConfig)) {
    const { path, modules } = oConfig;

    //TODO: Add watcher
    watcher(path, generator);
    //TODO: Add transformation
    log(`${chalk.blue("singular path")}: ${path}`);
    log(`${chalk.blue("singular modules")}: ${modules}`);
  } else {
    Object.values(oConfig.environments).map(env => {
      const { path, modules } = env;
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
