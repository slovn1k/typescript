// here we are making this module visible
export class FinalPoint {
    constructor(private _x?: number, private _y?: number){

    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
}