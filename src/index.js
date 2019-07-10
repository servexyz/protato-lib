const log = console.log;
import path from "path";
import { getWatcherConfig } from "./parser";
import { initWatcher } from "./watcher";
import { printLine, printMirror } from "tacker";

export function init(cwd = process.env.configRootDir || process.cwd()) {
  let protatoPath = path.join(cwd, ".protato.js");
  let { config } = require(protatoPath);

  printLine("blue");
  printMirror({ protatoPath }, "blue", "grey");
  printMirror({ config }, "blue", "grey");
  printLine("blue");

  let oWC = getWatcherConfig(config);
  let hWatcher = initWatcher(oWC);
  hWatcher.getDirectories();
}

// init();
