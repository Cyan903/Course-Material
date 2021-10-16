var add = function (n1, n2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var str_1 = args_1[_a];
        console.log(str_1);
    }
    return n1 + n2;
};
var n1 = 200.5;
var n2 = 300.2;
var v = true;
var str = "Hello";
str += " World!";
console.log(str);
console.log(add(n1, n2, "a", "b", 'c'));
var p = {
    name: "aa",
    b: 22
};
var pmore = {
    name: "aa",
    c: false,
    b: 22
};
var pmoremore = {
    a: [1, 2, 3],
    b: "hello",
    c: {
        a: "aaa",
        b: 200
    }
};
console.log(pmoremore, pmore, p);
var arr = [1, 2, "3", "4", false];
var arr2 = [1, 2, "3", "4", false];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var elm = arr_1[_i];
    console.log(elm);
}
var tuple = [1, "2"];
// pushing is allowed
tuple.push("3");
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 2] = "ADMIN";
    Roles[Roles["USER"] = -1] = "USER";
    Roles[Roles["USER_SAFE"] = 0] = "USER_SAFE";
})(Roles || (Roles = {}));
console.log(Roles);
console.log(Roles.ADMIN);
console.log(Roles["USER_SAFE"]);
console.log(typeof Roles["USER_SAFE"]);
