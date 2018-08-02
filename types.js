var count = 5;
count = 'a';
//here we are declaring a variable with number type
var a;
a = 1;
a = 'Hello world';
a = true;
//here we declare an array of numbers
var b;
//here we declare a variable named Color of type enum
//enum values have incremented values by default, but it is better to set them by our self
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var BackGroundColor = Color.Blue;
