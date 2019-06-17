require("dotenv").config();
import path from "path";
import chalk from "chalk";
//TODO: Make this relative path entry via init function
import { parser } from "./parser";
import { linker } from "./linker";
import pkgDir from "pkg-dir";
const log = console.log;

function init(szConfigFilePath, fnLinker) {
  let configRootDir = path.dirname(szConfigFilePath);
  log(`configRootDir: ${configRootDir}`);
  process.env.configRootDir = configRootDir;
  parser(szConfigFilePath, fnLinker);
  //TODO: Add __dirname to process.env
}

//? This is only here for testing
log(`single`);
//TODO: use pkgDir to get root pkgDir and use it as basis of finding sampleConfig
//TODO: Revert sandbox loc because of chokidar
pkgDir(__dirname).then(pkgDirPath => {
  log(`${chalk.red("pkgDirPath")}: ${pkgDirPath}`);
  const szConfigFilePath = path.join(pkgDirPath, "sample.config.js");
  log(`${chalk.red("szConfigFilePath")}: ${szConfigFilePath}`);
  init(szConfigFilePath, linker);
});

// log(`multiple`);
// init(multiple, linker);
