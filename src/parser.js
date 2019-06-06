const log = console.log;
import chalk from "chalk";
import { single, multiple } from "./sample.config";

export function parser(config) {
  if (isConfigSingular(config)) {
    const { path, modules } = config;
    //TODO: Add watcher
    //TODO: Add transformation
    log(`${chalk.blue("singular path")}: ${path}`);
    log(`${chalk.blue("singular modules")}: ${modules}`);
  } else {
    Object.values(config.environments).map(env => {
      const { path, modules } = env;
      //TODO: Add watcher
      //TODO: Add transformation
      log(`${chalk.blue("plural path")}: ${path}`);
      log(`${chalk.blue("plural modules")}: ${modules}`);
    });
  }
}
function isConfigSingular(config) {
  return !config.hasOwnProperty("environments");
}
