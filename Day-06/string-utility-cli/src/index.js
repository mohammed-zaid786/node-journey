import {
  toUpperCase,
  toLowerCase,
  reverse
} from "./formatter.js";     //import formatter.js we write export func on formatter.js is to be import on it.

import { validateInput } from "./validator.js";  // Get validate input func from validators.js 

const args = process.argv.slice(2);   // //command line interface it provide argument

const command = args[0];             
const value = args.slice(1).join(" ");

if (!validateInput(value)) {
  console.log("Please provide a valid string.");
  process.exit(1);    //validattion: it will check if i/o is value then it will continue the program otherwise it print (please provide a valid string)& .exit(1) will stop the program.
  
}

switch (command) {
  case "upper":
    console.log(toUpperCase(value));
    break;

  case "lower":
    console.log(toLowerCase(value));
    break;

  case "reverse":
    console.log(reverse(value));
    break;

  default:
    console.log("Available commands: upper, lower, reverse");
}