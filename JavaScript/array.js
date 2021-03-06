'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π','π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end (λ€μ μΆκ°)
fruits.push('π','π');
console.log(fruits);

// pop: remove an item from the end (λ€μ μ­μ )
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging (μμ μΆκ°)
fruits.unshift('π','π');
console.log(fruits);

// shift: remove an item from the benigging (λ€μ μΆκ°)
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push (popκ³Ό pushκ° ν¨μ¬ λΉ λ₯΄λ€.)
// splice: remove on item by index position
fruits.push('π','π','π');
console.log(fruits);
fruits.splice(1, 1); // μ§μ°κ³ μ νλ μΈλ±μ€ κ°μ μ§μ νμ§ μμΌλ©΄ μμ μΈλ±μ€ κ°λΆν° λκΉμ§ μ§μ΄λ€.
console.log(fruits);
fruits.splice(1, 1, 'π','π'); // μ§μμ§ μλ¦¬μ μ μμ μΆκ°
console.log(fruits);

// combine two arrays
const fruits2 = ['π','π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π'));
console.log(fruits.indexOf('π₯₯')); // ν΄λΉνλ κ°μ΄ μμ κ²½μ° '-1' μΆλ ₯

// includes
console.log(fruits.includes('π'));
console.log(fruits.includes('π₯₯'));

// lastIndexOf
console.clear();
fruits.push('π')
console.log(fruits);
console.log(fruits.indexOf('π'));
console.log(fruits.lastIndexOf('π'));

