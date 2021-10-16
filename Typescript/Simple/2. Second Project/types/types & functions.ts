const add = (n1: number, n2: number, ...args: string[]) => {
    for (let str of args) {
        console.log(str);
    }
    
    return n1 + n2;
};

const n1: number = 200.5;
const n2: number = 300.2;
const v: boolean = true;

let str: string = "Hello";
str += " World!";

console.log(str);
console.log(add(n1, n2, "a", "b", 'c'));

function returnType(t: ("num" | "str")) {
    return (t == "num") ? 100 : "100";
}

console.log(returnType("num"));
console.log(returnType("str"));