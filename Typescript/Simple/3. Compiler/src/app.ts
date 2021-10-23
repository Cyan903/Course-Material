function test(msg: string): (number | void) {
    console.log(msg);

    if (Math.random() >= 0.5) {
        return 10;
    }
}


const test2 = test.bind(null);

