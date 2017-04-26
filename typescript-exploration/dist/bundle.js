(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name + ".";
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
console.log(hello_1.sayHello("Jen"));
function showHello(div, name) {
    var element = document.getElementById(div);
    element.innerText = hello_1.sayHello(name);
}
showHello("greeting", "Ted");
function hello(compiler) {
    console.log("Hello from " + compiler + "!");
}
hello("TypeScript");

},{"./hello":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVsbG8udHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQXlCLElBQVk7SUFDakMsTUFBTSxDQUFDLGdCQUFjLElBQUksTUFBRyxDQUFDO0FBQ2pDLENBQUM7QUFGRCw0QkFFQzs7Ozs7QUNGRCxpQ0FBaUM7QUFFakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFHN0IsbUJBQW1CLEdBQVcsRUFBRSxJQUFZO0lBQ3hDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsT0FBTyxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFDRCxTQUFTLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRzdCLGVBQWUsUUFBZ0I7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxRQUFRLE1BQUcsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFDRCxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBgSGVsbG8gZnJvbSAke25hbWV9LmA7XG59IiwiaW1wb3J0IHtzYXlIZWxsb30gZnJvbSBcIi4vaGVsbG9cIjtcblxuY29uc29sZS5sb2coc2F5SGVsbG8oXCJKZW5cIikpO1xuXG5cbmZ1bmN0aW9uIHNob3dIZWxsbyhkaXY6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdik7XG4gICAgZWxlbWVudC5pbm5lclRleHQgPSBzYXlIZWxsbyhuYW1lKTtcbn1cbnNob3dIZWxsbyhcImdyZWV0aW5nXCIsIFwiVGVkXCIpO1xuXG5cbmZ1bmN0aW9uIGhlbGxvKGNvbXBpbGVyOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhgSGVsbG8gZnJvbSAke2NvbXBpbGVyfSFgKTtcbn1cbmhlbGxvKFwiVHlwZVNjcmlwdFwiKTsiXX0=
