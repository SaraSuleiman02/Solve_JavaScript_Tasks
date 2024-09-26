// 4.1

// 1. splitting a word into an array
function stringToArray(str) {
  return str.split(" ");
}

let str = prompt("Enter a sentence: ");
let result = stringToArray(str);
console.log(result);

// 2. covering digits
function hideNumber(phoneNumber) {
  let phoneStr = phoneNumber.toString();
  let hiddenPart = "*".repeat(7);

  // Extract the last 3 digits
  let visiblePart = phoneStr.slice(-3);
  return hiddenPart + visiblePart;
}

let input = Number(prompt("Enter a phone number"));
let output = hideNumber(input);
console.log(output);

// 3. covering email
function hideEmail(email) {
  let emailStr = email.toString();
  // Split the email into two parts: the username and the domain
  let [username, domain] = emailStr.split("@");
  let hiddenUsername = username.slice(0, 6) + "…";
  return hiddenUsername + "@" + domain;
}

let emailInput = prompt("Enter an email: ");

// Sample Output
let emailOutput = hideEmail(emailInput);
console.log(emailOutput);

// 4. Capitalize
function capitalizeFirstLetter(str) {
  let strStr = str.toString();
  let words = strStr.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}

let capStr = prompt("Enter a sentence: ");
let capResult = capitalizeFirstLetter(capStr);
console.log(capResult);

// 6.  Flip a number
function reverseNumber (number) {
    // convert to string then split to an array, reverse it and finalli join it again in one string
    let flip = number.toString().split("").reverse().join("");
    return parseInt(flip);
}

let number = prompt("Enter a Number: ");
let numResult = reverseNumber(number);
console.log(numResult);

// 7. swap
function swap1 (a, b) {
    let temp = a;
    a =b;
    b = temp;
    console.log(a, "a value");
    console.log(b, "b value");
}

swap1(3,4);

function swap2 (a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, "a value");
    console.log(b, "b value");
}
swap2(3,4);

function swap3 (a, b) {
    [a, b] = [b, a];
    console.log(a, "a value");
    console.log(b, "b value");
}
swap3(3,4);

// 8. Remove character
function removeCharacterAtIndex(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
  }

let result1 = removeCharacterAtIndex("Orange", 3);
console.log(result1);

// 9. Merge 
function mergeStrings (str, str2) {
    strAfter = str.slice(1, str.length);
    str2After = str2.slice(1, str2.length);

    console.log(strAfter.concat(str2After));
}

mergeStrings("lora", "inge");

// 10
function firstLetter (letter, word) {
    for (let i = 0 ; i < word.length ; i++) {
        if (word[i] == letter){
            return true;
        }
    }
    return false;
}

console.log(firstLetter("o" , "orange"));

// 11.
function splitWord (str) {
    let word = str.split(" ");
    console.log(word);
}

splitWord ("Coding Avademy By Orange");

// 12.
function reorderAlphabitically (str) {
    return str.toLowerCase().split('').sort().join('');
}

console.log(reorderAlphabitically("Orange"));
