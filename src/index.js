const logProcessErrors = require("log-process-errors");
logProcessErrors();

const log = console.log;
import { getWatcherConfig } from "./parser";
import { initWatcher } from "./watcher";
import { printMirror } from "./utilities";
import userConfig from "../.protato";

let oWC = getWatcherConfig(userConfig);

// printMirror({ oWC }, "green", "white");

//TODO: Define process.env.configRootDir
let w = initWatcher(oWC);
w.getDirectories();
// log("w.parent.dir: ", w.parent.dir);
