"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = 'eddy', age = 24, gender = 'male';
const sayHI = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
/*
    sayHI(name, age);
    On Javascript, hello eddy, you are 24, you are a undefined.
*/
sayHI(name, age);
sayHI(name, age, gender);
//# sourceMappingURL=index.js.map