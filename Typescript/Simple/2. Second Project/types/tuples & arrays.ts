const tuple: [number, string] = [1, "2"];
const arr = [1, 2, "3", "4", false];
const arr2: (number | string | boolean)[] = [1, 2, "3", "4", false];


for (const elm of arr) {
    console.log(elm)
}

tuple.push("3");
tuple.push("4");
