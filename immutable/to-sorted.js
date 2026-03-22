// const original = [3, 1, 4, 2];
//
// const sortedMutable = original.sort((a, b) => a - b);
//
// console.log(sortedMutable); // [1, 2, 3, 4]
// console.log(original);      // [1, 2, 3, 4]

// ------------------------------------------------
const original = [3, 1, 4, 2];

const sortedImmutable = original.toSorted((a, b) => a - b);

console.log(sortedImmutable); // [1, 2, 3, 4]
console.log(original);        // [3, 1, 4, 2]