type Admin = {
    id: number;
    privileges: string[];
};

type User = {
    name: string;
    age: number;
};

type Player = Admin & User;
type errorType = {
    [prop: number]: string
}

const user: Player = {
    id: 0,
    privileges: ["a"],
    name: "aaa",
    age: 1
}

const item: errorType = {
    2: "Hello"
}

console.log(
    (document.querySelector("#inp") as HTMLInputElement).placeholder
);

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: (number | string), b: (number | string)) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }

    return "" + a+b;
}

console.log(add(2, 2));
console.log(null ?? "is null");