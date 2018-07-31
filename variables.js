//Declaration of variables
//var makes the variables as global scope
var number = 1;
//let makes the variable as local scope and it is the correct method of declaration
var variable = 1;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i);
}
doSomething();
