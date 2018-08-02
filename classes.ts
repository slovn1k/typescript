//here we declare a class
//Class must by with first letter uppercase
class Point {
    //these are class fields(paramethers)
    x: number;
    y: number;

    //functions are class methods
    //the functions can use fields or paramethers by using <this> statement
    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

//here we declare an object of type Point
let point = new Point();
//here we are giving values to the paramethers
point.x = 20;
point.y = 35;
//here we are calling the function from the class
point.draw();