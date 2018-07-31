//Declaration of variables
//var makes the variables as global scope
var number = 1;
//let makes the variable as local scope and it is the correct method of declaration
let variable = 1;

function doSomething() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally: " + i);
}

doSomething();