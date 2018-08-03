var SuperPoint = /** @class */ (function () {
    //here we are declaring the variables with access modifiers (private, defalut public, protected)
    function SuperPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    SuperPoint.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return SuperPoint;
}());
var something = new SuperPoint(1, 2);
something.draw();
