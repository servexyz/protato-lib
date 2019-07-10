/*const logProcessErrors = require("log-process-errors");*/
/*logProcessErrors();*/
const log = console.log;
import path from "path";
import { getWatcherConfig } from "./parser";
import { initWatcher } from "./watcher";

export function init(cwd = process.env.configRootDir || process.cwd()) {
  let oWC = getWatcherConfig(path.join(cwd, ".protato.js"));
  let hWatcher = initWatcher(oWC);
  hWatcher.getDirectories();
}
