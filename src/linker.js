const log = console.log;
import chalk from "chalk";
import path from "path";
import isEmpty from "is-empty";
import pkgDir from "pkg-dir";
import exec from "await-exec";

import { printLine, printMirror } from "./utilities";

const parentCmd = (name, dir) => {
  if (isEmpty(dir)) {
    return `npm link ${name}`;
  } else {
    return `npm link --prefix ${dir} ${name}`;
  }
};
export async function linker(szModifiedFilePath, szParentDirPath) {
  if (!isEmpty(szModifiedFilePath) | !isEmpty(szParentDirPath)) {
    printMirror({ szModifiedFilePath }, "magenta", "grey");
    printMirror({ szParentDirPath }, "magenta", "grey");
    try {
      let modifiedRootDir = await pkgDir(szModifiedFilePath);
      printLine("blue");
      printMirror({ modifiedRootDir }, "magenta", "green");
      let modifiedPkgPath = path.join(modifiedRootDir, "package.json");
      printMirror({ modifiedPkgPath }, "magenta", "green");
      const { name } = require(modifiedPkgPath);
      printMirror({ name }, "blue", "grey");
      printLine("blue");
      await exec(`cd ${modifiedRootDir}`);
      let childData = await exec(`npm link`);
      printLine("green");
      log(`childData: ${JSON.stringify(childData, null, 2)}`);
      printLine("green");

      //TODO: Figure out why linking to protato-lib instead of node-starter
      let parentRootDir = await pkgDir(szParentDirPath);
      printMirror({ parentRootDir }, "magenta", "green");
      await exec(`cd ${parentRootDir}`);
      let parentData = await exec(parentCmd(name));
      printLine("yellow");
      log(`parentData: ${JSON.stringify(parentData, null, 2)}`);
      printLine("yellow");
    } catch (err) {
      log(`${chalk.red("linker")}: \n ${chalk.white(err)}`);
    }
  } else {
    printLine("green");
    log(`parentDirectory not set`);
    printLine("green");
  }
  return this;
}
