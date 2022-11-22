"use strict";
let x = "hello";
let y = "beautiful";
alert(x +" "+ y);
y = "ugly";
alert("not"+" "+y);

//const never changing variable
alert(2*2);
alert(4**(1/2));
//alert(2++);
let a = 2.335;
let b = 5;
alert(a+b);
typeof a;
typeof x;
alert(2 + 2 + '1' );
alert( 6 - '2' );
alert( '6' / '2' );
a = a.toFixed(2);
console.log(a);
console.log(2 + Number('4'));
a ++;
console.log(a);
++ a;
console.log(a++);
console.log(a);

//=== strict equals left and right should be equal in value and data type

// const btn = document.querySelector("button");
// const txt = document.querySelector("p");

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "Start machine") {
//     btn.textContent = "Stop machine";
//     txt.textContent = "The machine has started!";
//   } else {
//     btn.textContent = "Start machine";
//     txt.textContent = "The machine is stopped.";
//   }
// }

let num_1 = 1;
let car = '2';
let numcar = +num_1 + +car;
console.log(4 > 1);
console.log(4 <= 1);

//alert()

alert("this is a alert test message");

//prompt

let x1 = prompt("Enter the Number",0);
alert(x1);

//confirm

let isBoss = confirm("are you sure you want to proceed?");
alert(isBoss);


// ask you name
let yourName = prompt("Enter your name",);
alert(yourName);

// dictionary order comparison
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

//comparison of different types
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( true == 1 ); // true
alert( false == 0 ); // true

// not strict equality
alert( 0 == false ); // true

alert( '' == false ); // true

//strict equality comparison without type conversion
alert( 0 === false ); // false, because the types are different
// strict inequality for comparison
alert( 0 !== false ); // true

//if condition

let year1 = prompt("whats you age",);
if(year1 >= 50 && year1<=100) alert("you old boiiiiiiiiiii");
else if(year1 > 100) alert("you dead mate");
else alert("zoomer babe");

// ternary operator
let accessAllowed = (age > 18) ? true : false;

// Nullish coalescing operator '??'


