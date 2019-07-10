const log = console.log;
import path from "path";
import { getWatcherConfig } from "./parser";
import { initWatcher } from "./watcher";
import { printLine, printMirror } from "tacker";
import { pathsExistProm } from "./utilities";

export function init(cwd = process.env.configRootDir || process.cwd()) {
  let protatoPath = path.join(cwd, ".protato.js");
  pathsExistProm([protatoPath], ".protato.js config not found")
    .then(resp => {
      printMirror({ resp }, "magenta", "grey");
      let { config } = require(protatoPath);

      printLine("blue");
      printMirror({ protatoPath }, "blue", "grey");
      printMirror({ config }, "blue", "grey");
      printLine("blue");

      let oWC = getWatcherConfig(config);
      let hWatcher = initWatcher(oWC);
      hWatcher.getDirectories();
    })
    .catch(err => {
      log(`init failed\n ${err}`);
    });
}

init();
