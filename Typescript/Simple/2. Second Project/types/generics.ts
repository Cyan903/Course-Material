// keyof
function push(arr: any[], i: number, item: unknown) {
    arr[i] = item;
}

function merge<T, U>(a: T, b: U) {
    return Object.assign(a, b);
}

function getlen<T extends Array<any>>(a: T) {
    return a.length
}

class Stack<T> {
    private data: T[] = [];

    push(val: T) {
        this.data.push(val);
    }

    print() {
        console.log(this.data);
    }
}


const m = merge({a: 10}, {b: 20});
const z: any[] = [];
const s = new Stack<string>();

s.push("Hello");
s.push("World");
s.print();
push(z, 0, "Hello");

console.log(m.a);
console.log(z);

//////////////////////////////
type ObjectItem = {
    name: string,
    id: number
}

function genObjectItem(name: string, id: number): ObjectItem {
    const item: Partial<ObjectItem> = {};
    // Readonly
    item.name = name;
    item.id = id;

    return item as ObjectItem;
}