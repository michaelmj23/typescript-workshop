export const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const squaredNumbers: number[] = numbers.map(
  (number: number): number => number * number
);

console.log('Original numbers:', numbers);
console.log('Squared numbers:', squaredNumbers);
