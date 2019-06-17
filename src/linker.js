const log = console.log;
import shell from "shelljs";
import chalk from "chalk";
import pkgDir from "pkg-dir";

//TODO: Check/throw err if npm not installed
//TODO: Resolve link target/src being same

/*
TODO: Check to see if package is already linked

? EEXIST: file already exists, symlink '/Users/alechp/Code/servexyz/protato/.repositories/protato-lib/sandbox/.repositories/npm-starter-sample-module' -> '/usr/local/lib/node_modules/npm-starter-sample-module'
? npm ERR! File exists: /Users/alechp/Code/servexyz/protato/.repositories/protato-lib/sandbox/.repositories/npm-starter-sample-module
*/
export async function linker(szParentPath, szChildPath, szChildPackageName) {
  var bLinkChildDirectoryFlag = false;
  try {
    let childPkgDirPath = await pkgDir(szChildPath);
    shell.cd(childPkgDirPath);
    const linkChildDirectory = shell.exec("npm link", { async: true });
    await linkChildDirectory;
    bLinkChildDirectoryFlag = true;
  } catch (err) {
    log(`${chalk.red("linkChildDirectory")}: ${err}`);
    bLinkChildDirectoryFlag = false;
  }
  return new Promise(async (resolve, reject) => {
    if (bLinkChildDirectoryFlag === true) {
      try {
        let parentPkgDirPath = await pkgDir(szParentPath);
        shell.cd(parentPkgDirPath);
        const linkParentDirectory = shell.exec(
          `npm link ${szChildPackageName}`,
          {
            async: true
          }
        );
        resolve(linkParentDirectory);
      } catch (err) {
        log(`${chalk.red("linkChildDirectory")}: ${err}`);
        reject(err);
      }
    } else {
      throw new Error("bLinkChildDirectoryFlag was false; it needs to be true");
    }
  });
}

//TODO: Make sure chokidar ignores node_modules from watch otherwise it will emit all paths recursively
