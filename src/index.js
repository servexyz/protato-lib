require("dotenv").config();
import path from "path";
//TODO: Make this relative path entry via init function
import { single, multiple } from "./sample.config";
import { parser } from "./parser";
import { linker } from "./linker";
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
const szConfigFilePath = path.join(__dirname, "sample.config.js");
init(szConfigFilePath, linker);

// log(`multiple`);
// init(multiple, linker);
