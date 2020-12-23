//type of result

function add(n1: number, n2: number): number{
    return n1 + n2;
}

function printResult(num: number): void{
    console.log(`Result is: ${num}`);
}

//type Function

let combineValues: (a: number, b: number) => number;

combineValues = add;

//callback

function addAndHandler(n1: number, n2: number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result);
}

console.log(add(5, 6));
console.log(printResult(add(20,36)));
console.log(combineValues(28,34));
addAndHandler(12, 25, (result) => {
    console.log(`Result from callback: ${result}`)
});

//Never type

function generateError(message: string, code: number): never{
    throw {
        message: message,
        errorCode: code
    }
}
generateError('Some sort of errror', 500);