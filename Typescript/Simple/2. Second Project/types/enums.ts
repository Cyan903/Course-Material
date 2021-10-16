enum Roles {
    ADMIN = 2,
    USER = -1,
    USER_SAFE
}

console.log(Roles)
console.log(Roles.ADMIN)
console.log(Roles["USER_SAFE"])
console.log(typeof Roles["USER_SAFE"])