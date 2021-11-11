function Log(query: string, str: string): Function {
    return function() {
        const elm = document.querySelector(query) as HTMLElement;
        elm.innerHTML = str;
    };
}

function print(val: string): Function {
    return function() {
        console.log(val);
    }
}

// change name to equal "Changed"
function overrideConstructor() {
    return function<T extends { new(..._: any[]) : {name: string}}>(oldConstructor: T) {
        return class extends oldConstructor {
            constructor(..._: any[]) {
                super();
                console.log("changing...");
                this.name = "Changed";
            }            
        }
    }
}


@Log("h2", "World")
@overrideConstructor()
class Item {
    public name: string = "not changed";

    constructor() {
        console.log(this.name);
    }

    @print("constructor")
    who() {}

    am(@print("arg") arg: string) {
        alert(arg);
    }

};

const item = new Item();

item.who();
item.am("I");

console.log(item.name)