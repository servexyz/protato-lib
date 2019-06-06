import { parser } from "./parser";
import { single, multiple } from "./sample.config";
const log = console.log;

log(`single`);
parser(single);

// log(`multiple`);
parser(multiple);
