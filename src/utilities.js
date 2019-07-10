import chalk from "chalk";
import fs from "fs-extra";
const log = console.log;

export function pathsExistProm(arrPathsObj, szPreErrorMessage) {
  return new Promise(async (resolve, reject) => {
    try {
      if (Array.isArray(arrPathsObj)) {
        arrPathsObj.map(async pathToCheck => {
          await fs.access(pathToCheck);
        });
        resolve([true, ...arrPathsObj]);
      } else {
        await fs.access(arrPathsObj);
        resolve([true, arrPathsObj]);
      }
    } catch (err) {
      reject(`${chalk.red(szPreErrorMessage)}: \n ${chalk.grey(err)}`);
    }
  });
}
export async function pathsExistSync(
  arrPathsObj,
  szPreErrorMessage = "Path did not exist"
) {
  //TODO: Consider adding a return value (or prom) so it can be caught inline
  //TODO: Consider adding option to include printLine & printMirrors for success cases
  //TODO: Convert below into unit test (should pass)
  // let rightPath = [
  //   {
  //     dir: "sandbox/npm-starter-sample-module/src",
  //     name: "npm-starter-sample-module"
  //   }
  // ];
  // pathsExistOrThrow(targets, "PTOWatcher failed to initialize properly <fs.access>");
  //TODO: Convert below code into unit test (ie. should throw error)
  // let wrongPathString = "foo"
  // let wrongPathArray = [
  //   {
  //     foo: "bar"
  //   }
  // ];
  // pathsExistOrThrow(wrongPathArray, "PTOWatcher failed to initialize properly <fs.access>");
  // pathsExistOrThrow(wrongPathString, "PTOWatcher failed to initialize properly <fs.access>");

  if (Array.isArray(arrPathsObj)) {
    let arrFilePaths = arrPathsObj.flatMap(mTarget => {
      if (typeof mTarget == "object") {
        // * handle array of objects
        // * (ie. default case; used for testing watcherConfig's "targets" array)

        return Object.values(mTarget).map(pathToCheck => {
          return pathToCheck;
        });
      } else {
        // * handle array of strings
        // * (ie. manually defined arrays with file paths)

        return mTarget;
      }
    });
    for (let pathToCheck of arrFilePaths) {
      // ? Now iterate over the flattened map of paths (all should be strings)
      try {
        await fs.access(pathToCheck);
      } catch (err) {
        log(
          `${chalk.red("Array of paths failed")} ${printLine(
            "red"
          )} ${chalk.red(szPreErrorMessage)} \n ${chalk.grey(err)}`
        );
      }
    }
  } else if (typeof arrPathsObj == "string") {
    // ? handle checking path of single string
    try {
      await fs.access(arrPathsObj);
    } catch (err) {
      printLine("red");
      //TODO: Add a getLine() utility so that I can include in the middle of a log without needing to log inside of a log (which doesn't process stdout in proper order)
      log(
        `${chalk.red("Single string failed")} \n${chalk.red(
          szPreErrorMessage
        )} \n ${chalk.grey(err)}`
      );
      printLine("red");
    }
  }
}
