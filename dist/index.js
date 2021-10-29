"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fn_1 = require("./fn");
const obj_1 = require("./obj");
(0, fn_1.default)([1, 2, 3, 4]);
(0, obj_1.default)({ name: 'alex', title: 'dev', country: 'EG' });
const any = (data) => {
    console.log(data);
};
any({ name: 'foo', title: 'bar', country: 'any' });
let foo;
foo = 'ss';
console.log(foo);
function sample() {
    return 'ss';
}
