import {sayHello} from "./hello";

console.log(sayHello("Jen"));

function hello(compiler: string) {
    console.log(`Hello from ${compiler}!`);
}
hello("TypeScript");