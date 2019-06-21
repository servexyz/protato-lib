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

export function printLine(
  szColor,
  nLength = 59,
  cCharacter = "-",
  nLineQty = 1
) {
  //TODO: Add param with size of line
  //TODO: Add param with character used (- = * _ #)
  let line = cCharacter.repeat(nLength);
  let lineColor = getChalkColor(szColor);
  for (let i = 0; i < nLineQty; i++) {
    log(lineColor(line));
  }
  // return lineColor(line)
}
