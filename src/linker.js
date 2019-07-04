const log = console.log;
import chalk from "chalk";
import path from "path";
// import shell from "shelljs";
import isEmpty from "is-empty";
import pkgDir from "pkg-dir";
import exec from "await-exec";

import { printLine, printMirror } from "./utilities";

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
      const cmd = {
        parent: `npm link ${name}`,
        child: "npm link"
      };
      await exec(`cd ${modifiedRootDir}`);
      let childData = await exec(cmd.child);
      printLine("green");
      log(`childData: ${JSON.stringify(childData, null, 2)}`);
      printLine("green");

      await exec(`cd ${modifiedRootDir}`);
      let parentRootDir = await pkgDir(szParentDirPath);
      await exec(`cd ${parentRootDir}`);
      let parentData = await exec(cmd.parent);
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
