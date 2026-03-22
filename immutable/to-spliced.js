// const original = [1, 2, 3, 4];
//
// const splicedMutable = original.splice(1, 2, "a", "b");
//
// console.log(splicedMutable); // [2, 3]
// console.log(original);       // [1, "a", "b", 4]
//
// ------------------------------------------------
const original = [1, 2, 3, 4];

const splicedImmutable = original.toSpliced(1, 2, "a", "b");

console.log(splicedImmutable); // [1, "a", "b", 4]
console.log(original);         // [1, 2, 3, 4]