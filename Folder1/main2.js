let str = "Welcome to Orange";

// 1.1 Output: WELCOME TO ORANGE
let upperStr = str.toUpperCase();
console.log(upperStr);

// 1.2 Output: TO
let subStr = str.substring(8, 10);
console.log(subStr); 

// 1.3. Output: Hello from Orange
let newStr = str.replace("Welcome to", "Hello from");
console.log(newStr); 

// 1.4. Output: welcome to orange
let lowerStr = str.toLowerCase();
console.log(lowerStr); 

// 1.5. Output: 17 (length of the string)
let strLength = str.length;
console.log(strLength); 

// Additional requirement from prompt ("Orange Restricted Orange Restricted")
let repeatedStr = "Orange Restricted ".repeat(2).trim();
console.log(repeatedStr); 

// 1.6. Output: Welcome to “Orange”
let quoteStr = 'Welcome to "Orange"';
console.log(quoteStr); 

// 1.7. Output: Welcome to Orange Jordan
let addedStr = str.concat(" Jordan");
console.log(addedStr);


// ----------------------------------------------------
// Part 2
function replace (str) {
    let letter = str[0];
    let result = letter;

    for (let i = 1; i < str.length ; i++) {
        if (str[i] === letter) {
            result += '*';
        } else {
            result += str[i];
        }
    }

    return result;
}

let word = prompt("Enter the word: ");
let output = replace(word);
console.log(output, "Replace output");