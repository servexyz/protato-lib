const log = console.log;
import chalk from "chalk";
import path from "path";
import isEmpty from "is-empty";
import pkgDir from "pkg-dir";
import exec from "await-exec";

import { printLine, printMirror } from "./utilities";

//TODO: Try using yalc instead
//TODO: Check to see whether yalc installed globally. If not, install. If install fails, throw err & explain

export async function linker(szModifiedFilePath, szParentDirPath) {
  if (!isEmpty(szModifiedFilePath) | !isEmpty(szParentDirPath)) {
    printMirror({ szModifiedFilePath }, "magenta", "grey");
    printMirror({ szParentDirPath }, "magenta", "grey");
    let childData, parentData, childModuleName;
    try {
      let modifiedRootDir = await pkgDir(szModifiedFilePath);
      printLine("blue");
      printMirror({ modifiedRootDir }, "magenta", "green");
      let modifiedPkgPath = path.join(modifiedRootDir, "package.json");
      printMirror({ modifiedPkgPath }, "magenta", "green");
      const { name } = require(modifiedPkgPath);
      childModuleName = name;
      printMirror({ childModuleName }, "blue", "grey");
      printLine("blue");
      childData = await exec(`cd ${modifiedRootDir} && yalc publish`);
      printLine("green");
      log(`childData: ${JSON.stringify(childData, null, 2)}`);
      printLine("green");
    } catch (err) {
      log(`${chalk.red("'yalc publish' failed")}\n${chalk.grey(err)}`);
    }

    try {
      let parentRootDir = await pkgDir(szParentDirPath);
      printMirror({ parentRootDir }, "magenta", "green");
      parentData = await exec(
        `cd ${parentRootDir} && yalc link ${childModuleName}`
      );
      printLine("yellow");
      log(`parentData: ${JSON.stringify(parentData, null, 2)}`);
      printLine("yellow");
    } catch (err) {
      log(
        `${chalk.red(
          `yalc add ${childModuleName} in ${chalk.yellow(parentRootDir)} failed`
        )}\n${chalk.grey(err)}`
      );
    }
  } else {
    printLine("green");
    log(`parentDirectory not set`);
    printLine("green");
  }
  return this;
}
