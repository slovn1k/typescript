//here we declare a class
var Point = /** @class */ (function () {
    function Point() {
    }
    //functions are class methods
    //the functions can use fields or paramethers by using <this> statement
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.x = 20;
point.y = 35;
point.draw();
