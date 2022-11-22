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


//
let yourName = prompt("Enter your name",);
alert(yourName);