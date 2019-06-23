import { getWatcherConfig } from "./parser";
import { getLinkerConfig, PTOWatcher } from "./watcher";
import { printMirror } from "./utilities";
import userConfig from "../.protato";

let oWC = getWatcherConfig(userConfig);

printMirror({ oWC }, "green", "white");

PTOWatcher(oWC);
// let oLC = getLinkerConfig(oWC);

// printMirror({ oLC }, "blue", "white");
