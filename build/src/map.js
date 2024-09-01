"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squaredNumbers = exports.numbers = void 0;
exports.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
exports.squaredNumbers = exports.numbers.map((number) => number * number);
console.log('Original numbers:', exports.numbers);
console.log('Squared numbers:', exports.squaredNumbers);
