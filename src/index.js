const log = console.log;
import path from "path";
import isEmpty from "is-empty";
import fs from "fs-extra";
import { getWatcherConfig } from "./parser";
import { initWatcher } from "./watcher";
import { printLine, printMirror } from "tacker";
import { pathsExistAsync } from "./utilities";
import chalk from "chalk";

export async function init(
  cwd = process.env.configRootDir || process.cwd(),
  oConfigOverride
) {
  let oConfig;
  if (!isEmpty(oConfigOverride)) {
    printLine("cyan");
    printMirror({ oConfigOverride }, "cyan", "grey");
    printLine("cyan");
    oConfig = oConfigOverride;
  } else {
    let protatoPath = path.resolve(cwd, ".protato.json");
    printLine("cyan");
    printMirror({ protatoPath }, "cyan", "grey");
    //TODO: Change to fs.readJsonSync
    // let { config } = require(protatoPath);
    oConfig = await fs.readJson(protatoPath);
    let pathInfo = await pathsExistAsync(
      protatoPath,
      ".protato.json config not found"
    );
    let protatoPathFlag = pathInfo[0];
    printMirror({ protatoPathFlag }, "cyan", "grey");
    printLine("cyan");
  }
  let oWC = getWatcherConfig(oConfig);
  let hWatcher = initWatcher(oWC);
  hWatcher.getDirectories();
}

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

init();
// init(process.cwd(), inlineConfig);
