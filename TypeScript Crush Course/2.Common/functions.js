//type of result
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result is: " + num);
}
//type Function
var combineValues;
combineValues = add;
//callback
function addAndHandler(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
console.log(add(5, 6));
console.log(printResult(add(20, 36)));
console.log(combineValues(28, 34));
addAndHandler(12, 25, function (result) {
    console.log("Result from callback: " + result);
});
//Never type
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError('Some sort of errror', 500);
