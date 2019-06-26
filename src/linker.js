const log = console.log;
import chalk from "chalk";
import path from "path";
import shell from "shelljs";
import isEmpty from "is-empty";
import pkgRootDir from "pkg-dir";
import { printLine, printMirror } from "./utilities";
//TODO: Add watcher imports

export async function linker(szModifiedFilePath, szParentDirPath) {
  if (!isEmpty(szModifiedFilePath) | !isEmpty(szParentDirPath)) {
    try {
      let modifiedRootDir = await pkgRootDir(szModifiedFilePath);
      let parentRootDir = await pkgRootDir(szParentDirPath);

      printLine("yellow");
      printMirror({ szParentDirPath }, "yellow", "grey");
      printMirror({ szModifiedFilePath }, "yellow", "grey");
      printLine({ color: "yellow", character: "." });
      printMirror({ parentRootDir }, "yellow", "grey");
      printMirror({ modifiedRootDir }, "yellow", "grey");
      printLine("yellow");

      const { name } = require(path.join(modifiedRootDir, "package.json"));

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
