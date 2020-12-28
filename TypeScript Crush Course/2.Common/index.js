"use strict";
//Core TypeScript types
var num = 0;
var str = 'String constant';
var bool = false;
//let obj1: object;
var obj1 = {
    name: 'Object',
    type: 'Custom type'
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["ACCESS_TYPE"] = 1] = "ACCESS_TYPE";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; //enum
var obj2;
obj2 = {
    age: 35,
    name: 'Mit',
    type: 'Idiot',
    hobbies: ['Alcogol', 'Books', 'Boobs'],
    access: [2, 'not allow'],
    role: Role.ADMIN //enum type
};
var access = obj2.role === Role.ADMIN ? console.log("" + obj2.role) : console.error('You have no access!');
console.group('Typescript types:');
console.log("Number: " + num + ".");
console.log("String: " + str + ".");
console.log("Boolean: " + bool + ".");
console.log(typeof (obj1));
console.log(typeof (obj2));
console.log(obj1);
console.log(obj2);
console.log(obj2.hobbies);
console.log(typeof (obj2.hobbies));
console.log(typeof (obj2.role));
access;
console.groupEnd();
/*Object.keys(obj2).map((prop, index) => {
    console.log(`${prop}: ${obj2[prop]}. Iteration: ${index}`);
});*/ 
