"use strict";
exports.__esModule = true;
var exercies_like_1 = require("./exercies.like");
var component = new exercies_like_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
