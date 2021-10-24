"use strict";
class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.type = "Human";
    }
    introduction(phrase) {
        return "I am " + phrase;
    }
}
const user = {
    name: "User 1",
    type: "Human",
    introduction(catchphrase) {
        return "Hello!, " + catchphrase;
    }
};
const user2 = new Man("name", 1232);
console.log(user2.introduction("Hello"));
