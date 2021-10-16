const logArr = (arr: any[]): void => {
    arr.forEach(console.log);
}

const array: string[] = [1, 2, 3].map(String);

const n: void = null;
let n2: void;
let n3: undefined;

const log: Function = logArr;

log(array);


// more specific way
// function callback(func: (num: string) => number): number {
function callback(func: Function): number {
    const data: number = func("100");

    return data;
}

const val: number = callback((n: string) => Number(n));

console.log(val)