//here we are declaring an interface, for making a custom type, interface must start with uppercase letter
interface Point {
    x: number,
    y: number
}

//here we are declaring arrow function with point parameter of type interface(interface is a custom type)
let drawPoint = (point: Point) => {
    console.log(point);
}

//here we are calling a function with interface paramethers
drawPoint({
    x:1, y:2
});