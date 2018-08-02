var Point = /** @class */ (function () {
    //here we have an constructor
    //we have added interogation mark to make the variable optional 
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.draw();
