// 1.
// Using a for loop 
let evenNumbersFor = "";
for (let i = 2; i <= 50; i += 2) {
    evenNumbersFor += i + ", ";
}
console.log("Even numbers using for loop: " + evenNumbersFor);

// Using a while 
let evenNumbersWhile = "";
let j = 2;
while (j <= 50) {
    evenNumbersWhile += j + ", ";
    j += 2;
}

console.log("Even numbers using while loop: " + evenNumbersWhile);

// 3. 
// Using a while 
let oddNumbersWhile = "";
let u = 1;
while (u <= 50) {
    oddNumbersWhile += u + ", ";
    u += 2;
}

console.log("Odd numbers using while loop: " + oddNumbersWhile);

// 4.
let output = "";
for (let i = 1; i <= 100 ;i++) {
    if (i % 3 === 0) {
        output += "Fizz, ";
    } else if (i % 5 === 0) {
        output += "Buzz, ";
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
        output += "FizzBuzz, ";
    } else {
        output += i + ", ";
    }
}

console.log(output);

// 5.
function FizzBuzz(num) {
    let output = "";
    if (num % 3 === 0) {
        output = "Fizz";
    } else if (num % 5 === 0) {
        output = "Buzz";
    } else if ((num % 3 === 0) && (num % 5 === 0)) {
        output = "FizzBuzz";
    } else {
        output = num;
    }
    return output;
}

console.log(FizzBuzz(1));
console.log(FizzBuzz(15));

// 6.
function FizzBuzz2(num, limit) {
    if (num > limit) return; // Base case: Stop recursion when num exceeds the limit.

    let output = "";
    if (num % 3 === 0 && num % 5 === 0) {
        output = "FizzBuzz";
    } else if (num % 3 === 0) {
        output = "Fizz";
    } else if (num % 5 === 0) {
        output = "Buzz";
    } else {
        output = num;
    }

    console.log(output);
    FizzBuzz2(num + 1, limit);
}

FizzBuzz2(1, 100);

// 7.


// 8. 
function countLetter (input, letter) {
    let count = 0;
    lowerLetter = letter.toLowerCase();
    let lowerCaseStr = input.toLowerCase();
    console.log(lowerCaseStr);
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === lowerLetter){
            count++;
        }
    }
    return count;
}
let str = "Coding Academy by Orange";
console.log(countLetter(str , 'o'));

// 9.
// printing numbers from 1-20
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
// printing odd values from 3- 29
for (let i = 3; i <= 29; i += 2) {
    console.log(i);
}
// printing even numbers from 12- -14
for (let i = 12; i >= -14; i -= 2) {
    console.log(i);
}
// printing numbers that are multiple of 3 from 50 - 20
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//  10. e
let str2 = 'CodingAcademy';
let arr = [7, 500, 'KH404', 'black', 36];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 10. f
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}

// 11
let arr2 = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let evens = [];
let odds = [];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        evens.push(arr2[i]);
    } else {
        odds.push(arr2[i]); 
    }
}

console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);

// 12
const proteins = ['chicken', 'nodels', 'tofu', 'beef', 'fish', 'beans'];
const grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
const vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
const beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
const desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMeals(numMeals) {
    const meals = new Set();
    
    while (meals.size < numMeals) {
        const meal = `${getRandomElement(proteins)}, ${getRandomElement(grains)}, ${getRandomElement(vegetables)}, ${getRandomElement(beverages)}, ${getRandomElement(desserts)}`;
        
        // Add the meal string to the set (used set to prevents duplicates)
        meals.add(meal);
    }
    
    // Convert the set to an array and return the meals
    return Array.from(meals);
}

const numberOfMeals = 5;
const generatedMeals = generateMeals(numberOfMeals);

console.log(`Generated ${numberOfMeals} unique meals:`);
generatedMeals.forEach((meal, index) => {
    console.log(`Meal ${index + 1}: ${meal}`);
});
