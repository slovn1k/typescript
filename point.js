"use strict";
exports.__esModule = true;
// here we are making this module visible
var FinalPoint = /** @class */ (function () {
    function FinalPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    FinalPoint.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    return FinalPoint;
}());
exports.FinalPoint = FinalPoint;
