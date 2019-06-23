import chalk from "chalk";
import isEmpty from "is-empty";
import fs from "fs-extra";
const log = console.log;

export function getChalkColor(szColor) {
  switch (szColor) {
    case "red":
      return chalk.red;
    case "orange":
      return chalk.orange;
    case "yellow":
      return chalk.yellow;
    case "green":
      return chalk.green;
    case "blue":
      return chalk.blue;
    case "magenta":
      return chalk.magenta;
    case "cyan":
      return chalk.cyan;
    case "white":
      return chalk.white;
    case "grey":
      return chalk.grey;
    case "redBright":
      return chalk.redBright;
    case "greenBright":
      return chalk.greenBright;
    case "yellowBright":
      return chalk.yellowBright;
    case "blueBright":
      return chalk.blueBright;
    case "magentaBright":
      return chalk.magentaBright;
    case "cyanBright":
      return chalk.cyanBright;
    case "whiteBright":
      return chalk.whiteBright;
    default:
      return chalk.white;
  }
}

//TODO: Create an enum of available colors (instead of relying on strings)
export function printMirror(
  oVar,
  szKeyColor,
  szValueColor,
  szVarValueOverride
) {
  //? Faster to call keys/values separately or entries?
  let key, value, keyColor, valueColor;
  key = Object.keys(oVar)[0];

  if (isEmpty(szVarValueOverride)) {
    if (typeof Object.values(oVar)[0] == "object") {
      value = JSON.stringify(Object.values(oVar)[0], null, 2);
    } else {
      value = Object.values(oVar)[0];
    }
  } else {
    value = szVarValueOverride;
  }

  keyColor = getChalkColor(szKeyColor);
  valueColor = getChalkColor(szValueColor);
  log(`${keyColor(key)}: ${valueColor(value)}`);
}
/* 
  TODO: Add oLineStyle arg
  printMarquee(
    "blue",
    ["childDirPath", "childPackagePath"],
    "white",
    "were both found"
  );
*/

//? Replace printMarquee with functions below?
//TODO: printAndList
//TODO: printAndOrList
//TODO: printOrList

/*export*/ function printMarquee(
  szActorsColor,
  arrActors,
  szAnnouncementColor,
  szAnnouncement,
  oLineStyle
) {
  /*
  TODO: Replicate
    log(
      `${chalk.blue("childDirPath")} and ${chalk.blue(
        "childPackagePath"
      )} were both found`
    );
  */
  let str;
  let arrColoredActors = [];
  arrActors.map(actor => {
    let chalkColor = getChalkColor(szActorsColor);
    arrColoredActors.push(chalkColor(actor));
  });
  // log(`arrColoredActors: ${JSON.stringify(arrColoredActors, null, 2)}`);
  log(`arrColoredActors: ${arrColoredActors}`);
}

function parseLineOptions(options) {
  let typeFlag;
  if (typeof options === "object") {
    const {
      color = "white",
      length = 59,
      character = "-",
      quantity = 1
    } = options;
    typeFlag = "object";
    return [
      typeFlag,
      {
        color,
        length,
        character,
        quantity
      }
    ];
  } else if (typeof options === "string") {
    typeFlag = "string";
    let color = options;
    return [typeFlag, color];
  }
}

export function printLine(colorOrOptions) {
  let opts = parseLineOptions(colorOrOptions);
  if (opts[0] == "object") {
    var { color, length, character, quantity } = opts[1];
  } else if (opts[0] == "string") {
    color = opts[1];
    length = 59;
    character = "-";
    quantity = 1;
  }
  let line = character.repeat(length);
  let lineColor = getChalkColor(color);
  for (let i = 0; i < quantity; i++) {
    log(lineColor(line));
  }
}

export async function pathsExistOrThrow(
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

  try {
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
        await fs.access(pathToCheck);
      }
    } else if (typeof arrPathsObj == "string") {
      // ? handle checking path of single string
      log(`arrPathsObj is: ${arrPathsObj}`);
      await fs.access(arrPathsObj);
    }
  } catch (err) {
    let message = `
      ${chalk.red(szPreErrorMessage)}\n 
      Official error: ${chalk.grey(err)}
    `;
    throw new Error(message);
  }
}

/* 
? pathsExistOrThrow motivation:
? I kept creating functions like this:

(async () => {
    Object.values(targets).map(async ({ childDirPath, childPackagePath }) => {
      printMirror({ childDirPath }, "magenta", "grey");
      printMirror({ childPackagePath }, "magenta", "grey");
      try {
        await fs.access(childDirPath);
        await fs.access(childPackagePath);
      } catch (err) {
        log(
          `
        ${chalk.red("PTOWatcher failed to initialize properly <fs.access> \n")} 
        Official error: ${chalk.grey(err)}
        `
        );
      }
    });
  })();

*/
