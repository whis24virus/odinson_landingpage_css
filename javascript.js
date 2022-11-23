"use strict";
// let x = "hello";
// let y = "beautiful";
// alert(x +" "+ y);
// y = "ugly";
// alert("not"+" "+y);

// //const never changing variable
// alert(2*2);
// alert(4**(1/2));
// //alert(2++);
// let a = 2.335;
// let b = 5;
// alert(a+b);
// typeof a;
// typeof x;
// alert(2 + 2 + '1' );
// alert( 6 - '2' );
// alert( '6' / '2' );
// a = a.toFixed(2);
// console.log(a);
// console.log(2 + Number('4'));
// a ++;
// console.log(a);
// ++ a;
// console.log(a++);
// console.log(a);

// //=== strict equals left and right should be equal in value and data type

// // const btn = document.querySelector("button");
// // const txt = document.querySelector("p");

// // btn.addEventListener("click", updateBtn);

// // function updateBtn() {
// //   if (btn.textContent === "Start machine") {
// //     btn.textContent = "Stop machine";
// //     txt.textContent = "The machine has started!";
// //   } else {
// //     btn.textContent = "Start machine";
// //     txt.textContent = "The machine is stopped.";
// //   }
// // }

// let num_1 = 1;
// let car = '2';
// let numcar = +num_1 + +car;
// console.log(4 > 1);
// console.log(4 <= 1);

// //alert()

// alert("this is a alert test message");

// //prompt

// let x1 = prompt("Enter the Number",0);
// alert(x1);

// //confirm

// let isBoss = confirm("are you sure you want to proceed?");
// alert(isBoss);


// // ask you name
// let yourName = prompt("Enter your name",);
// alert(yourName);

// // dictionary order comparison
// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true

// //comparison of different types
// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1

// alert( true == 1 ); // true
// alert( false == 0 ); // true

// // not strict equality
// alert( 0 == false ); // true

// alert( '' == false ); // true

// //strict equality comparison without type conversion
// alert( 0 === false ); // false, because the types are different
// // strict inequality for comparison
// alert( 0 !== false ); // true

// //if condition

// let year1 = prompt("whats you age",);
// if(year1 >= 50 && year1<=100) alert("you old boiiiiiiiiiii");
// else if(year1 > 100) alert("you dead mate");
// else alert("zoomer babe");

// // ternary operator
// let age = 22;
// let accessAllowed = (age > 18) ? true : false;

// // Nullish coalescing operator '??' 
// //a ?? b
// // if a is defined, then a,
// // if a isn’t defined, then b.
// let user;

// alert(user ?? "Anonymous"); // Anonymous (user is undefined)

// //while loop 

// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//   alert( i );
//   i++;
// }

// //for loop for (begin; condition; step) {
//   // ... loop body ...}

// for (let i = 0; i < 50; i++) { // shows 0, then 1, then 2
//     alert(i);
//     if(i >= 2) continue;
//     i ++;
//     if(i == 15) break;
//   }

//   // break from all loops using label

//   outer: for (let i = 0; i < 3; i++) { //label

//     for (let j = 0; j < 3; j++) {
  
//       let input = prompt(`Value at coords (${i},${j})`, '');
  
//       // if an empty string or canceled, then break out of both loops
//       if (!input) break outer; // (*)
  
//       // do something with the value...
//     }
//   }
  
//   alert('Done!');
  
  
  
//   // switch case

//   let aSwitch = prompt("enter a number for switch case",);
//   switch(+aSwitch){
//     case 3:
//     alert("too small");
//     break;
//     case 4:
//         alert("perfecto");
//         break;
//     default:
//         alert("yo yo maa");
//         break;
//   }


//   //functions
//   let vName = prompt("Enter you name",);
//   function helloMessage(name){
//     alert(`Hello Visitor ${name}!`);
//   }
//   helloMessage(vName);



//   function showMessage(from, text= helloMessage(vName)) {//default value

//     from = '*' + from + '*'; // make "from" look nicer
  
//     alert( from + ': ' + text );
//   }
  
//   let from = "Ann";
  
//   showMessage(from, "Hello"); // *Ann*: Hello
  
//   // the value of "from" is the same, the function modified a local copy
//   alert( from ); 


//   // check number is prime or not
//   function isPrime(num = prompt("Enter your number",)){
//     let count = 0;
//     num = +num;
//     for(let i = 1; i <= num; i ++){
//         if(num % i == 0) count ++;
//     }
//     if(count == 2) alert(`${num} is a prime number`);
//     else alert(`${num} is not a prime number`);

//   }
//   isPrime();

//   //function expression


//   let sayHi = function(){
//     alert("hello");
//     return 'hello boy';
//   };
//   alert(`${sayHi}`);
//   let sayHello = sayHi;
//   alert(sayHello());
  


  // callback function

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);


  //function declared inside a function call || anonymous function call

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  summ(2,3);

  let summ = function(a, b){ // unusabel before this line
    alert(2 + 3);
  }
  