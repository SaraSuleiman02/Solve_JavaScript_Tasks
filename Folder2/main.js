// 1
function findFactorial(number) {
  // Base case: factorial of 0 or 1 is 1
  if (number <= 1) {
    return 1;
  }
  // Recursive case: number * factorial of (number - 1)
  return number * findFactorial(number - 1);
}

const number = 5;
console.log(`Factorial of ${number} is:`, findFactorial(number));

// 2
function printFibonacci(limit) {
  let a = 0;
  let b = 1;

  console.log(a);

  while (b < limit) {
    console.log(b);

    // Calculate the next Fibonacci number (sum pf previous 2 nums)
    const next = a + b;
    a = b;
    b = next;
  }
}

const input = 10;
printFibonacci(input);

// 3
function printPrimes(limit) {
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(num);
    }
  }
}

const input2 = 20;
printPrimes(input2);

// 4
function print2D(arr) {
  let output = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      output += arr[i][j] + " ";
    }
  }

  console.log(output);
}
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
print2D(arr);

// 5
function printReverse(arr2) {
  let output2 = "";
  for (let i = 4; i >= 0; i--) {
    output2 += arr2[i] + " ";
  }

  console.log(output2);
}
const arr2 = [1, 2, 3, 4, 5];
printReverse(arr2);

// ------------------Arrays---------------------------
// 1
function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = combineArrays(array1, array2);

console.log(combinedArray);

// 2
function removeElements(arr, start, end) {
    let part1 = arr.slice(0, start);
    let part2 = arr.slice(end);

    // Combine the two parts
    return part1.concat(part2);
}

const array = [1, 2, 3, 4, 5, 6];
const result = removeElements(array, 2, 4);

console.log(result);

//  3
function modifyArray(arr, indexToRemove) {
    const removedElements = arr.splice(indexToRemove, 1);

    // Return the number of removed elements
    return removedElements.length;
}

const array3 = [1, 2, 3, 4, 5];
const result2 = modifyArray(array, 3);

console.log(result2);
console.log(array3);  


// 4
function iterateArray(arr) {
    let output = '';
    
    for (let element of arr) {
        output += element + ', ';
    }
    console.log(output);
}

// Example usage
const array4 = [1, 2, 3, 4, 5];
iterateArray(array4);

//  5
function printArrayElements(arr) {
    let output = "[";
    arr.forEach(element => output += element + ", ");
    output += "]";
    console.log(output);
    
}

const array5 = [1, 2, 3, 4, 5];
printArrayElements(array5);

// -------------------IF Stmt---------------------------
// 1
function checkPassword (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        count++;
    }

    if (count >= 8) {
        console.log("Your Password is strong");
    }
}

checkPassword("mypassword123");

// 2
function checkPrimaryColor(color) {
    if (color === "red" || color === "green" || color === "blue") {
        console.log("color is a primary color");
    } else {
        console.log("color is not a primary color");
    }
}

checkPrimaryColor("red");

// 3
function checkNegativeNumber(y) {
    if (y < 0) {
        console.log("y is a negative number");
    } else {
        console.log("y is not a negative number");
    }
}

checkNegativeNumber(-5);

// 4
function checkIfArray(list) {
    if (Array.isArray(list)) {
        console.log("It's an array");
    } else {
        console.log("It's not an array");
    }
}


let list = [1, 2, 3]; 
checkIfArray(list);

// -----------------Objects------------------
// 1
let person = {
    name: "Adam",
    age: 25
};

// Add a new property using bracket notation
person["gender"] = "male";
console.log(person);

// 2
const valuesArray = Object.values(person);
console.log(valuesArray);

// 3
const entriesArray = Object.entries(person);
console.log(entriesArray);

// 4
const person2 = {
    name: "Adam",
    age: 25
};

const additionalInfo = {
    gender: "male"
};

const mergedObject = Object.assign({}, person2, additionalInfo);
console.log(mergedObject);

// 5
const person5 = {
    name: "Adam",
    age: 25
};

Object.seal(person5);

person5.gender = "male"; // This will not be added
person5.age = 30; // This will succeed
delete person5.name; // This will not be removed

console.log(person5);

// ------------------Functions-----------------------
// 1
function findSmallest(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return "Array is empty";
    }
    
    // Use Math.min to find the smallest value
    return Math.min(...arr);
}

console.log(findSmallest([30, 45, 60, 7]));

// 2
function AlphabeticalOrder(str) {
    return str.split('').sort().join('');
}

console.log(AlphabeticalOrder('hello'));

// 3
function countWords (str) {
    const words = str.split(" ");
    return words.length;
}

console.log(countWords("hello from codingAcademy!"), "num of words");

// 4
function MultiplyByLength (arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++){
        arr[i] *= length;
    }
    return arr;
}

console.log(MultiplyByLength([4, 2, 5]));

// 5
function doubleChar(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }

    return result;
}

console.log(doubleChar('Coding'));
