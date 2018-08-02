var log = function (message) {
    console.log(message);
};
//here we have an arrow function
var doLog = function (message) { return console.log(message); };
doLog('Hello world');
