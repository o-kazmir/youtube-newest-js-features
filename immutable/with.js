const original = [10, 20, 30];

const updated = [...original];
updated[1] = 99;

console.log(updated);  // [10, 99, 30]
console.log(original); // [10, 20, 30]

// ------------------------------------------------
const original = [10, 20, 30];

const updatedImmutable = original.with(1, 99);

console.log(updatedImmutable); // [10, 99, 30]
console.log(original);         // [10, 20, 30]