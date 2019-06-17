const log = console.log;
import shell from "shelljs";
import chalk from "chalk";
import pkgDir from "pkg-dir";

//TODO: Check/throw err if npm not installed
/*
TODO: Check to see if package is already linked
? EEXIST: file already exists, symlink '/Users/alechp/Code/servexyz/protato/.repositories/protato-lib/sandbox/.repositories/npm-starter-sample-module' -> '/usr/local/lib/node_modules/npm-starter-sample-module'
? npm ERR! File exists: /Users/alechp/Code/servexyz/protato/.repositories/protato-lib/sandbox/.repositories/npm-starter-sample-module
*/
export function linker(szParentPath, szChildPath, szChildPackageName) {
  var bLinkChildDirectoryFlag = false;
  try {
    let childPkgDirPath = await pkgDir(szChildPath);
    log(`childPkgDirPath: ${chalk.blue(childPkgDirPath)}`);
    shell.cd(childPkgDirPath);
    shell.exec("npm link", { async: true });
    bLinkChildDirectoryFlag = true;
  } catch (err) {
    log(`${chalk.red("bLinkChildDirectoryFlag set to false")}: ${err}`);
    bLinkChildDirectoryFlag = false;
  }
  return new Promise(async (resolve, reject) => {
    if (bLinkChildDirectoryFlag === true) {
      try {
        let parentPkgDirPath = await pkgDir(szParentPath);
        log(`parentPkgDirPath: ${chalk.blue(parentPkgDirPath)}`);
        shell.cd(parentPkgDirPath);
        const linkParentDirectoryStream = shell.exec(
          `npm link ${szChildPackageName}`,
          {
            async: true
          }
        );
        linkParentDirectoryStream.stdout.on("data", data => {
          log(`data: ${data}`);
          /*
          ? Part of my issue is that there's an extra level of nesting:
          * .repositories/npm-starter-sample-module/node_modules/npm-starter-sample-module
          ? Notice how the second npm-starter-sample-module is nested in node_modules
          ? I'm guessing this occurs because the package name is being appended to the modified path
          TODO: log the directory where shell.cd is occurring
          */
          resolve(data);
        });
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
