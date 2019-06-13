const log = console.log;
import shell from "shelljs";
import chalk from "chalk";
//TODO: Check/throw err if npm not installed
export async function linker(szParentPath, szChildPath, szChildPackageName) {
  const bLinkChildDirectoryFlag = false;
  try {
    shell.cd(szChildPath);
    const linkChildDirectory = shell.exec("npm link", { async: true });
    await linkChildDirectory();
    bLinkChildDirectoryFlag = true;
  } catch (err) {
    log(`${chalk.red("linkChildDirectory")}: ${err}`);
    bLinkChildDirectoryFlag = false;
  }
  return new Promise(async (resolve, reject) => {
    if (bLinkChildDirectoryFlag === true) {
      try {
        shell.cd(szParentPath);
        const linkParentDirectory = shell.exec(
          `npm link ${szChildPackageName}`,
          {
            async: true
          }
        );
        resolve(await linkParentDirectory());
      } catch (err) {
        log(`${chalk.red("linkChildDirectory")}: ${err}`);
        reject(err);
      }
    } else {
      throw new Error("bLinkChildDirectoryFlag was false; it needs to be true");
    }
  });
}
