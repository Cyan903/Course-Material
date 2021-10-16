function test(msg: string): void {
    console.log(msg);
}


const test2 = test.bind(null);