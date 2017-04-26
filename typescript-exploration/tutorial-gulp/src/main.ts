import {sayHello} from "./hello";

console.log(sayHello("Jen"));


function showHello(div: string, name: string) {
    const element = document.getElementById(div);
    element.innerText = sayHello(name);
}
showHello("greeting", "Ted");


function hello(compiler: string) {
    console.log(`Hello from ${compiler}!`);
}
hello("TypeScript");