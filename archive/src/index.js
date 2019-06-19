require("dotenv").config();
import path from "path";
import chalk from "chalk";
import { parser } from "./parser";
import { linker } from "./linker";
import pkgDir from "pkg-dir";
const log = console.log;

function init(szConfigFilePath, fnLinker) {
  let configRootDir = path.dirname(szConfigFilePath);
  log(`configRootDir: ${configRootDir}`);
  process.env.configRootDir = configRootDir;
  parser(szConfigFilePath, fnLinker);
}

//? This is only here for testing
log(`single`);
pkgDir(__dirname).then(pkgDirPath => {
  log(`${chalk.red("pkgDirPath")}: ${pkgDirPath}`);
  const szConfigFilePath = path.join(pkgDirPath, "sample.config.js");
  log(`${chalk.red("szConfigFilePath")}: ${szConfigFilePath}`);
  init(szConfigFilePath, linker);
});

// log(`multiple`);
// init(multiple, linker);
