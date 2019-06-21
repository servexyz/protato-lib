import chalk from "chalk";
const log = console.log;

/*
TODO: Create function to "reflect" value 
TODO: Param: color
TODO: Param: text 
*/

/*
const myFirstName = 'John'
Object.keys({myFirstName})[0]

returns "myFirstName"
*/

export function printLine(szColor) {
  //TODO: Add param with size of line
  //TODO: Add param with character used (- = * _ #)
  let line = "---------------------------------------------";
  let fn = undefined;
  switch (szColor) {
    case "red":
      fn = chalk.red;
      break;
    case "orange":
      fn = chalk.orange;
      break;
    case "yellow":
      fn = chalk.yellow;
      break;
    case "green":
      fn = chalk.green;
      break;
    case "blue":
      fn = chalk.blue;
      break;
    default:
      fn = chalk.white;
      break;
  }
  log(fn(line));
}
