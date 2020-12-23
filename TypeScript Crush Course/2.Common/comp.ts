const root: any = document.getElementById("root");

const one: string = `<h1>Hello world!</h1>`;

type Combynable = number | string; //Type alias with union type

function combyne(input1: Combynable, input2: Combynable, likeWhat: 'as-number' | 'as-string'){ //literal type
    if(typeof input1 === 'number' && typeof input2 === 'number' && likeWhat === 'as-number'){
        return `${+input1 + +input2} <br> ${likeWhat}`;
    }
    else{
        return input1.toString() + input2.toString() + ' ' + likeWhat;
    }
}

const sum: any = combyne(5, 3, 'as-number');
const concat: any = combyne('5', 3, 'as-string');


function render(root: any, block: any){
    root.innerHTML = block;
}

//render(root, one);
render(root, sum);
//render(root, concat);