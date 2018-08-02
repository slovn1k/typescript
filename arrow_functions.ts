let log = function(message) {
    console.log(message);
}

//here we have an arrow function
//if the function has only one line we ca not use parantheses
//is the function is long we must use {}
let doLog = (message) => console.log(message);

doLog('Hello world');