interface Human {
    readonly type: string;
}

interface Person extends Human {
    readonly name: string;
    age?: number;

    introduction(catchphrase: string): string
}

class Man implements Person {
    readonly type: string = "Human";

    constructor(public name: string, public age: number) {}

    introduction(phrase: string): string {
        return "I am "+phrase;
    }
}

const user: Person = {
    name: "User 1",
    type: "Human",

    introduction(catchphrase: string): string {
        return "Hello!, "+catchphrase;
    }
}

const user2: Man = new Man("name", 1232);
console.log(user2.introduction("Hello"));