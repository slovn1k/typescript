class SuperPoint {
    x: number;
    y: number;

    //here we have an constructor
    //we have added interogation mark to make the variable optional 
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let something = new SuperPoint();
something.draw();