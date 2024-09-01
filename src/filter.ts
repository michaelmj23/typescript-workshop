export const words: string[] = [
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

export const longWords: string[] = words.filter(
  (word: string): boolean => word.length > 5
);

console.log('Original words:', words);
console.log('Words with more than 5 letters:', longWords);
