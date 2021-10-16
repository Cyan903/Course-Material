// alias
type Item = object;
type ReturnFunc = ("num" | "str");
type User = { name: string; age: number } | string;

// function returnType(t: ("num" | "str")) {
//     return (t == "num") ? 100 : "100";
// }

function returnType(t: ReturnFunc): (string | number) {
    return (t == "num") ? 100 : "100";
}

console.log(returnType("num"));
console.log(returnType("str"));

const u1: User = {
    name: "aaa",
    age: 111
}

const u2: User = "bbb";

console.log(u1, u2);