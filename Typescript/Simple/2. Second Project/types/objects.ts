const p: object = {
    name: "aa",
    b: 22
}

const pmore: {
    name: string;
    b: number;
    c: boolean;
} = {
    name: "aa",
    c: false,
    b: 22
}

const pmoremore: {
    a: number[]
    b: string
    c: {
        a: string
        b: number
    }
} = {
    a: [1, 2, 3],
    b: "hello",
    c: {
        a: "aaa",
        b: 200
    }
}

console.log(pmoremore, pmore, p);