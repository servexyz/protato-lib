import chalk from "chalk";
import isEmpty from "is-empty";
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
//TODO: Add a printJSONMirror to enable print JSON values (or modify printMirror)
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
    value = Object.values(oVar)[0];
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
