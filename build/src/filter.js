"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longWords = exports.words = void 0;
exports.words = [
    'Apple',
    'Banana',
    'Cherry',
    'Starfruit',
    'blueberry',
    'Salmonberry',
    'grape',
    'Pineapple',
    'Pomegranate',
    'Powdermelon',
];
exports.longWords = exports.words.filter((word) => word.length > 5);
console.log('Original words:', exports.words);
console.log('Words with more than 5 letters:', exports.longWords);
