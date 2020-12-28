"use strict";
var root = document.getElementById("root");
var one = "<h1>Hello world!</h1>";
function combyne(input1, input2, likeWhat) {
    if (typeof input1 === 'number' && typeof input2 === 'number' && likeWhat === 'as-number') {
        return +input1 + +input2 + " <br> " + likeWhat;
    }
    else {
        return input1.toString() + input2.toString() + ' ' + likeWhat;
    }
}
var sum = combyne(5, 3, 'as-number');
var concat = combyne('5', 3, 'as-string');
function render(root, block) {
    root.innerHTML = block;
}
//render(root, one);
render(root, sum);
//render(root, concat);
