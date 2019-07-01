const log = console.log;
import chalk from "chalk";
import path from "path";
import shell from "shelljs";
import isEmpty from "is-empty";
import pkgRootDir from "pkg-dir";
import { printLine, printMirror } from "./utilities";

export async function linker(szModifiedFilePath, szParentDirPath) {
  if (!isEmpty(szModifiedFilePath) | !isEmpty(szParentDirPath)) {
    printMirror({ szModifiedFilePath }, "magenta", "grey");
    printMirror({ szParentDirPath }, "magenta", "grey");
    try {
      // TODO: debug why modifiedRootDir is being preserved from previous call
      let modifiedRootDir = await pkgRootDir(szModifiedFilePath);
      printMirror({ modifiedRootDir }, "magenta", "green");

      let modifiedPkgPath = path.join(modifiedRootDir, "package.json");
      printMirror({ modifiedPkgPath }, "magenta", "green");

      const { name } = require(modifiedPkgPath);
      printMirror({ name }, "blue", "grey");

      const cmd = {
        parent: `npm link ${name}`,
        child: "npm link"
      };
      shell.cd(modifiedRootDir);
      const modifiedDirStream = shell.exec(cmd.child, { async: true });
      modifiedDirStream.stdout.on("data", data => {
        printMirror({ data }, "blue", "grey");
      });

      let parentRootDir = await pkgRootDir(szParentDirPath);
      // shell.cd(szParentDirPath);
      shell.cd(parentRootDir);
      const parentDirStream = shell.exec(cmd.parent, { async: true });
      parentDirStream.stdout.on("data", data => {
        printMirror({ data }, "blue", "grey");
      });
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
