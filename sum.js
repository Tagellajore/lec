// Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them.
//  If any argument is not a whole number, skip it. 
//  Do support negative numbers though. 
//  If any argument is not a number, output an error message. 
//  We need at least 2 arguments, ouput an error message if not.

//takes in an unlimited number of command line arguments
const args = process.argv.slice(2); // extracting the command line argument
//console.log("args: ", args);
// edge case :i need atleast 2 arguments

if (args.length < 2) {
  //console.log("Please, enter at least 2 arguments");
  // we should stop execution
  //return; // it works but should we use it return a value out of function
  process.exit();
  // (exits function => side effect) 
}

// iterate through the arguments

let total = 0;
for (let arg of args) {
  // parse arguments to find out if they are whole number 
  // arg % 1 === 0 
  const convertedNum = Number(arg);
  // if any argument is not a number , output an error message
  if(isNaN(convertedNum)) {
    console.log("Please, Enter only a number");
    //return;
    process.exit()
  }
if (Number.isInteger(convertedNum)) {

  total += convertedNum;
}
  // add the numbers
  // convert the string to number first


  //console.log("arg: ", arg , typeof arg, "total:", total);
  
}





// print out the result
console.log("Total:" , total)



