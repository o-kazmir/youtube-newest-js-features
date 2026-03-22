// const original = [1, 2, 3, 4];
//
// const reversedMutable = original.reverse();
//
// console.log(reversedMutable); // [4, 3, 2, 1]
// console.log(original);        // [4, 3, 2, 1]

// ------------------------------------------------

const original = [1, 2, 3, 4];

const reversedImmutable = original.toReversed();

console.log(reversedImmutable); // [4, 3, 2, 1]
console.log(original);          // [1, 2, 3, 4]