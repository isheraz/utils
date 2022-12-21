"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classNames = exports.helloWorld = void 0;
const helloWorld = () => {
    return 'hello';
};
exports.helloWorld = helloWorld;
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
exports.classNames = classNames;
