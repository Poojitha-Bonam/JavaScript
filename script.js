// 1. push
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("push:", fruits);

// 2. pop
fruits.pop();
console.log("pop:", fruits);

// 3. shift
let numbers = [10, 20, 30];
numbers.shift();
console.log("shift:", numbers);

// 4. unshift
numbers.unshift(5);
console.log("unshift:", numbers);

// 5. concat
let a = [1, 2], b = [3, 4];
console.log("concat:", a.concat(b));

// 6. slice
let fruits2 = ["apple", "banana", "orange", "grape"];
console.log("slice:", fruits2.slice(1,3));

// 7. splice
fruits2.splice(1,1,"kiwi");
console.log("splice:", fruits2);

// 8. indexOf
console.log("indexOf:", fruits2.indexOf("kiwi"));

// 9. includes
console.log("includes:", fruits2.includes("orange"));

// 10. join
console.log("join:", fruits2.join(" - "));

// 11. reverse
let nums = [1,2,3];
nums.reverse();
console.log("reverse:", nums);

// 12. sort
let fruits3 = ["banana","apple","cherry"];
fruits3.sort();
console.log("sort:", fruits3);

// 13. forEach
nums.forEach(n => console.log("forEach:", n*2));

// 14. map
let squares = nums.map(n => n**2);
console.log("map:", squares);

// 15. filter
let filtered = nums.filter(n => n > 1);
console.log("filter:", filtered);

// 16. reduce
let sum = nums.reduce((a,b) => a+b);
console.log("reduce:", sum);

// 17. find
let found = nums.find(n => n>1);
console.log("find:", found);

// 18. findIndex
let foundIndex = nums.findIndex(n => n>1);
console.log("findIndex:", foundIndex);

// 19. every
console.log("every:", nums.every(n => n>0));

// 20. some
console.log("some:", nums.some(n => n>2));

// 21. flat
let nested = [1,[2,[3,4]]];
console.log("flat:", nested.flat(2));

// 22. fill
let fillArr = [1,2,3,4];
fillArr.fill(0,1,3);
console.log("fill:", fillArr);

// 23. toString
console.log("toString:", nums.toString());

// 24. at
console.log("at:", nums.at(-1));

// 25. from
let str = "hello";
console.log("from:", Array.from(str));

// 26. Sorting strings (default behavior)
fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

numbers = [10, 5, 40, 25];

// Ascending order
numbers.sort((a, b) => a - b);
console.log("Ascending:", numbers); // [5, 10, 25, 40]

// Descending order
numbers.sort((a, b) => b - a);
console.log("Descending:", numbers); // [40, 25, 10, 5]