// 1.

function checkEligibility(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - yearOfBirth;

  if (age > 30) {
    console.log("You are not eligible. You may join other programs");
  } else if (age > 18 && age < 30) {
    console.log("You are eligible. Start your application");
  } else if (age < 18) {
    console.log("You may join kids program.");
  } else if (age > 60) {
    console.log("You may join seniors' program.");
  }
}

checkEligibility(1990);
checkEligibility(1999);
checkEligibility(1959);
checkEligibility(2010);

// 2.

function switchCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

const result = switchCase("OrAnGe");
console.log(result);

// 3.
function toCamelCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

const result2 = toCamelCase("coding academy by orange");
console.log(result2);

// 4.
function removeElement(arr, element) {
  const index = arr.indexOf(element);

  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// Example usage:
const result3 = removeElement(["Coding", "Academy", "By", "Orange"], "By");
console.log(result3);

//  5.
function evenOrOdd(number) {
  if (number % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

evenOrOdd(12333432);

// 6.
function isNumber(num) {
  return typeof num === "number" && !isNaN(num);
}

console.log(isNumber(42));
console.log(isNumber("42"));

// 7.
function largest(a, b) {
  if (a > b) {
    console.log(a, "is the largest");
  } else {
    console.log(b, "is the larges");
  }
}

largest(10, 2);

//  8.
function checkTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return "Equilateral";
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

const a = 5;
const b = 5;
const c = 5;

console.log(`The triangle is ${checkTriangleType(a, b, c)}.`);

// 9.
function isNumberInRange(number, min, max) {
  return number >= min && number <= max;
}

const numberToCheck = 5;
const minRange = 1;
const maxRange = 10;

if (isNumberInRange(numberToCheck, minRange, maxRange)) {
  console.log("It is within the range.");
} else {
  console.log("It is not within the range");
}

// 10.

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

const yearToCheck = 2024;

if (isLeapYear(yearToCheck)) {
  console.log(`${yearToCheck} is a leap year.`);
} else {
  console.log(`${yearToCheck} is not a leap year.`);
}
