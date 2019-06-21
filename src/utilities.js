import chalk from "chalk";

export function printLine(szColor) {
  let line = "---------------------------------------------";
  let fn = undefined;
  switch (szColor) {
    case "red":
      fn = chalk.red;
      return;
    case "orange":
      fn = chalk.orange;
      return;
    case "yellow":
      fn = chalk.yellow;
      return;
    case "green":
      fn = chalk.green;
      return;
    case "blue":
      fn = chalk.blue;
      return;
  }
  log(`going to print line:`);
  log(fn(line));
}
