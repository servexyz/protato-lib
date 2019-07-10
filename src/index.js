const log = console.log;
import path from "path";
import isEmpty from "is-empty";
import { getWatcherConfig } from "./parser";
import { initWatcher } from "./watcher";
import { printLine, printMirror } from "tacker";
import { pathsExistAsync } from "./utilities";

export function init(cwd = process.env.configRootDir || process.cwd(), config) {
  let oConfig;
  if (!isEmpty(config)) {
    oConfig = config;
    printLine("green");
    printMirror({ oConfig }, "green", "grey");
    printLine("green");
  } else {
    let protatoPath = path.join(cwd, ".protato.js");
    let { config } = require(protatoPath);
    oConfig = config;
    pathsExistAsync(protatoPath, ".protato.js config not found")
      .then(resp => {
        printMirror({ resp }, "magenta", "grey");
        let { config } = require(protatoPath);

        printLine("blue");
        printMirror({ protatoPath }, "blue", "grey");
        printMirror({ config }, "blue", "grey");
        printLine("blue");
      })
      .catch(err => {
        log(`init failed\n ${err}`);
      });
  }
  let oWC = getWatcherConfig(oConfig);
  let hWatcher = initWatcher(oWC);
  hWatcher.getDirectories();
}

// init();
const inlineConfig = {
  parent: {
    dir: "sandbox/node-starter"
  },
  children: [
    {
      dir: "sandbox/npm-starter-sample-module",
      src: "src"
    },
    {
      dir: "sandbox/library-genesis",
      src: "src"
    }
  ]
};

// init();
// init(process.cwd(), inlineConfig);
