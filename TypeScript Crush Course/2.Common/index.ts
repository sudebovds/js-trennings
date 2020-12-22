//Core TypeScript types

const num: number = 0;
const str: string = 'String constant';
const bool: boolean = false;
//let obj1: object;
const obj1: object = {
    name: 'Object',
    type: 'Custom type'
}

enum Role {ADMIN, ACCESS_TYPE, AUTHOR}; //enum

let obj2: {
    age: number;
    name: string;
    type: string;
    hobbies: string[];
    access: [number, string]; //tuple
    role: {};
};

obj2 = {
    age: 35,
    name: 'Mit',
    type: 'Idiot',
    hobbies: ['Alcogol', 'Books', 'Boobs'],
    access: [2, 'not allow'],
    role: Role.ADMIN //enum type
}

const access = obj2.role === Role.ADMIN ? console.log(`${obj2.role}`) : console.error('You have no access!');

console.group('Typescript types:');
    console.log(`Number: ${num}.`);
    console.log(`String: ${str}.`);
    console.log(`Boolean: ${bool}.`);
    console.log(typeof(obj1));
    console.log(typeof(obj2));
    console.log(obj1);
    console.log(obj2);
    console.log(obj2.hobbies);
    console.log(typeof(obj2.hobbies));
    console.log(typeof(obj2.role));
    access;
console.groupEnd();

Object.keys(obj2).map((prop, index) => {
    console.log(`${prop}: ${obj2[prop]}. Iteration: ${index}`);
});