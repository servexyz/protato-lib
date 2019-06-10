require("dotenv").config();
import { single, multiple } from "./sample.config";
import { parser } from "./parser";
import { linker } from "./linker";
const log = console.log;
//1. Watch
//2. Parse
//3. Link

log(`single`);
parser(single, linker);

log(`multiple`);
parser(multiple, linker);
