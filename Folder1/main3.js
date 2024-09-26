"use strict";

// 3.1 Orange Array
// let arr = ["Coding", "Academy", "By", "Orange"];

// // Output: ["Coding", "Academy", "By", "Orange", "Jordan"]
// let arr1 = [...arr, "Jordan"];
// console.log(arr1);

// // Output: ["Coding", "Academy"]
// let arr2 = arr.slice(0, 2);
// console.log(arr2);

// // Output: ["Welcome", "To", "Coding", "Academy", "By", "Orange"]
// let arr3 = ["Welcome", "To", ...arr];
// console.log(arr3);

// // Output: ["Academy", "By", "Orange"]
// let arr4 = arr.slice(1);
// console.log(arr4);

// // Output: "Coding Academy By Orange"
// let str = arr.join(" ");
// console.log(str);

// // Output: ["Coding", "Academy", "By", "Orange"]
// let arr5 = arr;
// console.log(arr5);

// // Output: ["Coding", "Orange"]
// let arr6 = [arr[0], arr[arr.length-1]];
// console.log(arr6);

//-------------------------------------
// 3.2 
let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// a. Remove the last item from the vegetable array.
vegetables.pop();
console.log(vegetables);

// b. Remove the first item from the fruit array.
fruit.shift();
console.log(fruit);

// c. Find the index of "orange."
let orangeIndex = fruit.indexOf("orange");
console.log(orangeIndex); 

// d. Add that number (index of "orange") to the end of the fruit array.
fruit.push(orangeIndex);
console.log(fruit);

// e. Find the length of the vegetable array.
var vegetableLength = vegetables.length;
console.log(vegetableLength);

// f. Add that number (length of vegetable array) to the end of the vegetable array.
vegetables.push(vegetableLength);
console.log(vegetables); 

// g. Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
console.log(food);

// h. Remove 2 elements from your new array starting at index 4.
food.splice(4, 2);
console.log(food); 

// i. Reverse your array.
food.reverse();
console.log(food);

// j. Turn the array into a string.
var foodString = food.join(", ");
console.log(foodString);