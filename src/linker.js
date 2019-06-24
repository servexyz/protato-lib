/*
 ? Should the shell be async ? Since it's separated by a "cd" I assume it's okay
 */
const log = console.log;
import shell from "shelljs";
import chalk from "chalk";
//TODO: Add watcher imports

export async function linker(oLinkerConfig) {
  //TODO: Get { name } from oLinkerConfig.packagesToWatch
  //TODO: Get children directories to `npm link` from oLinkerConfig.directoriesToWatch
  //TODO: Get parent directories to `npm link child` from oLinkerConfig.parentDirectory

  const { name } = require(oLinkerConfig);
  shell.cd();
}
