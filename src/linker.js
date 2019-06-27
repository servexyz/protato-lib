const log = console.log;
import chalk from "chalk";
import path from "path";
import shell from "shelljs";
import isEmpty from "is-empty";
import pkgRootDir from "pkg-dir";
import { printLine, printMirror } from "./utilities";

// ? Do I need to
export async function linker(szModifiedFilePath, szParentDirPath) {
  if (!isEmpty(szModifiedFilePath) | !isEmpty(szParentDirPath)) {
    printMirror({ szParentDirPath }, "magenta", "grey");
    try {
      let modifiedRootDir = await pkgRootDir(szModifiedFilePath);
      printMirror({ modifiedRootDir }, "magenta", "green");
      log(`modifiedRootDir: ${JSON.stringify(modifiedRootDir, null, 2)}`);

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
