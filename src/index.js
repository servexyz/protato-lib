import { getWatcherConfig } from "./parser";
import { printMirror } from "./utilities";
import config from "../.protato";

let obj = getWatcherConfig(config);

printMirror({ obj }, "green", "white");
