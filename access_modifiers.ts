class SuperPoint {

    //here we are declaring the variables with access modifiers (private, defalut public, protected)
    constructor(private x?: number, private y?: number) {}

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let something = new SuperPoint(1, 2);
something.draw();