class SomePoint {

    //by the convention it is better tu declare the paramether with _ symbol before
    constructor(private _x?: number, private _y?: number) {}

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    //here we are declaring a property
    get x() {
        return this._x;
    }

    //here we are setting the X property
    set x(value) {
        if(value < 0)
            throw new Error('Value cannot be less than 0');

        this._x = value;            
    }
}

let somePoint = new SomePoint(1, 2);
let x = somePoint.x;
somePoint.x = 10;
somePoint.draw();