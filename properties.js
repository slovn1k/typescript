var SomePoint = /** @class */ (function () {
    function SomePoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    SomePoint.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(SomePoint.prototype, "x", {
        //here we are declaring a property
        get: function () {
            return this._x;
        },
        //here we are setting the X property
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return SomePoint;
}());
var somePoint = new SomePoint(1, 2);
var x = somePoint.x;
somePoint.x = 10;
somePoint.draw();
