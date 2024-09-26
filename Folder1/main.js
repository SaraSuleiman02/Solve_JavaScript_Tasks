"use strict";

// // task1-1-part 1
alert("Calculating cash flow ratio (Cash / Current Liabilities)");
let cash = Number(prompt("Enter the cash: "));
let current_liabilities = Number(prompt("Enter the current liabilities: "));
let cash_flow_ratio = cash / current_liabilities;
console.log(cash_flow_ratio, "Cash flow ratio");

// task1-1-part2
alert("Calculating net income (Revenues - Expenses)");
let revenues = Number(prompt("Enter the revenues: "));
let expenses = Number(prompt("Enter the expenses: "));
let net_income = revenues - expenses;
console.log(net_income, "Net income");

// task1-1-part3
alert("Calculating total assets (Liabilities + Equity)");
let liabilities = Number(prompt("Enter the liabilities: "));
let equity = Number(prompt("Enter the equity: "));
let total_assets = liabilities + equity;
console.log(total_assets, "Total Assets");

// task1-1-part4
alert("Calculating net income 2 (Profit * Sales)");
let profit = Number(prompt("Enter the profit: "));
let sales = Number(prompt("Enter the sales: "));
let net_income2 = profit * sales;
console.log(net_income2, "Net income 2");

// task1-1-part5
alert("Calculating average of numbers");
let number_of_number = Number(prompt("Enter the number of numbers you want to enter: "));
let avg = 0;
for (let i = 0 ; i < number_of_number ; i++) {
    let number = Number(prompt("Enter number"+ (i+1) + ": "));
    avg += number;
}

avg /= number_of_number;
console.log(avg, "Average");

// task1-1-part6 
alert("Calculating Discount (price - (price * discount))");
let price = Number(prompt("Enter the price: "));
let discount = Number(prompt("Enter the discount in %: "));

// Convert the discount from percentage to decimal
let discountDecimal = discount / 100;

let DiscountAmount = price * discountDecimal;
let finalPrice = price - DiscountAmount;
console.log(DiscountAmount, "Discount amount");
console.log(finalPrice, "Final price after discount");


// task1-1-part7
let age = Number(prompt("Enter the age: "));
let flag = false;
if (age > 18 && age < 30 ){
    console.log(!flag , "Age part");
} else {
    console.log(flag , "Age part");
}

// task1-1-part8
alert("Calculating Exponential (number1 ^ number2)");
let number1 = Number(prompt("Enter the base number: "));
let number2 = Number(prompt("Enter the exponent: "));

// Calculating the exponential result
let result = Math.pow(number1, number2);
console.log(result, "Exponential result");


// task1-1-part9
alert("Calculating Remainder (number1 % number2)");
let number_1 = Number(prompt("Enter the first number: "));
let number_2 = Number(prompt("Enter the second number: "));
let remainder = number_1 % number_2;
console.log(remainder, "Remainder"); 

//------------------------------------------------
// task1-2-part

console.log(typeof(100));
console.log(typeof(73.9));
console.log(typeof(NaN));
console.log(typeof("Water"));
console.log(typeof(false));
console.log(typeof(9 != 11));
console.log("Orang" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log( "4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log( 1 + true);
console.log("hello" + true);
console.log(typeof(Infinity));
console.log(1 == '1');
console.log(1 === '1');
