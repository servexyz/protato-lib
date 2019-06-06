const log = console.log;
import chalk from "chalk";
import { single, multiple } from "./sample.config";

export function parser(config) {
  log(`${chalk.yellow("config")}: ${JSON.stringify(config, null, 2)}`);
  if (isConfigSingular(config)) {
    log(
      `${chalk.yellow("this config is singular")}: ${JSON.stringify(
        config,
        null,
        2
      )}`
    );
    const [path, modules] = getPathAndModules(config);
    log(`${chalk.blue("singular path")}: ${path}`);
    log(`${chalk.blue("singular modules")}: ${modules}`);
  } else {
    Object.values(config.environments).map(env => {
      // log(`env: ${JSON.stringify(env, null, 2)}`);
      const [path, modules] = getPathAndModules(config);
      log(`${chalk.blue("multiple path")}: ${path}`);
      log(`${chalk.blue("multiple modules")}: ${modules}`);
    });
    log(
      `${chalk.yellow("this config is NOT singular")}: ${JSON.stringify(
        config,
        null,
        2
      )}`
    );
  }
}

// The only reason I have these getters is to make toggling logs cleaner
// Should probably consolidate this into inline destructuring calls in future
// ie. const { path, modules } = config

function getPath(config) {
  const { path } = config;
  // log(`${chalk.blue("config.path")}: ${path}`);
  return path;
}
function getModules(config) {
  const { modules } = config;
  // log(`${chalk.blue("config.modules")}: ${modules}`);
  return modules;
}
function getPathAndModules(config) {
  let path = getPath(config);
  let modules = getModules(modules);
  log(`${chalk.blue("config.path")}: ${path}`);
  log(`${chalk.blue("config.modules")}: ${modules}`);
  return [path, modules];
}
function isConfigSingular(potentiallySingleEnvironment) {
  return !potentiallySingleEnvironment.hasOwnProperty("environments");
}
