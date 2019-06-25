/*
 ? Should the shell be async ? Since it's separated by a "cd" I assume it's okay
 */
const log = console.log;
import shell from "shelljs";
import isEmpty from "is-empty";
import pkgRootDir from "pkg-dir";
import { printLine, printMirror } from "./utilities";
//TODO: Add watcher imports

export function linker(szModifiedFilePath, szParentDirPath) {
  if (!isEmpty(szModifiedFilePath) | !isEmpty(szParentDirPath)) {
    printMirror({ szParentDirPath }, "magenta", "grey");
    let modifiedRootDir = pkgRootDir(szModifiedFilePath);
    const { name } = require(pkgRootDir(szModifiedFilePath));
    const cmd = {
      parent: `npm link ${name}`,
      child: "npm link"
    };

    shell.cd(modifiedRootDir);
    const modifiedDirStream = shell.exec(cmd.child, { async: true });
    modifiedDirStream.stdout.on("data", data => {
      printMirror({ data }, "blue", "grey");
    });

    shell.cd(szParentDirPath);
    const parentDirStream = shell.exec(cmd.parent, { async: true });
    parentDirStream.stdout.on("data", data => {
      printMirror({ data }, "blue", "grey");
    });
  } else {
    printLine("green");
    log(`parentDirectory not set`);
    printLine("green");
  }
  return this;
}
