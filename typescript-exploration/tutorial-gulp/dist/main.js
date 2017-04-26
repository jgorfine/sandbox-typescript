"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
console.log(hello_1.sayHello("Jen"));
function hello(compiler) {
    console.log("Hello from " + compiler + "!");
}
hello("TypeScript");
