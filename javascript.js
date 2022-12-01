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
  


//   // callback function

//   function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);


//   //function declared inside a function call || anonymous function call

//   function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

//   summ(2,3);

//   let summ = function(a, b){ // unusabel before this line
//     alert(2 + 3);
//   }



  // arrow functions  basics let func = (arg1, arg2, ..., argN) => expression;


//   let sumn = (name, age) => alert(`Your name is ${name} and your age is ${age}`);
//   let double = n => n * 2; // single argument
//   alert(double(3))
//   sumn("Keshav",15);
//   let sayHi = () => alert("hello"); // if no argument
//   sayHi();

//   // dynamic function creation using arrow function
//   let age = prompt("your age?",);

//   let welcome = (age < 18)? ()=>alert('hello') : () =>alert('greeting');

//   welcome();
// //

// let ask = (question, yes, no) => confirm(question)? yes() : no();
// ask("do you agree?",() => alert("You agreed."), () => alert("you canceled execution."));

// //object 
// let person = {
//   firstName: "jon",
//   lastName: 'don',
//   address: {
//     buildingNo: "44",
//     city:"chandigarh",
//     country:"india"
//   }
// };
// console.log(person.firstName, person.address.buildingNo);
// console.log(person['lastName'], person['address']['city']);
// let aff = 8;
// console.log(""+aff+"helloss");


// person.firstName = "don";
// person.lastName = "jon";

// console.log(person['firstName'], person['lastName']);
// person.age = 18;
// delete person.address.buildingNo;
// console.log('city' in person.address);
// let member = person;
// let ccc = person.address;
// console.log(member.firstName, member.lastName, ccc.city);


// // arrays

// let score = new Array(10);
// let runs = score;

// let arr1 = [20];

// console.log(score.length, runs.length, arr1.length, arr1[0]);

// let a = prompt("Enter a number to add to the end of the array",);
// arr1.push(+a); // add at the end of an array

// arr1.pop(); // remove array element from the end;


// a = prompt("Enter a number to add at the start of the array",);
// arr1.unshift(+a);  // add at the beginning of array


// arr1.shift(); // remove array element from the beginning



// arr1.indexOf(1); // find index of element;

// for(let key in member){
//   if(member.key === 'address'){
    
//     for(let adds in key){
//       console.log("hello");
//       console.log(member.key.adds);
//     }
//   }
//   console.log(member[key]);
// }

// argument object in function

// function argAdd(){
//   let sum = '';
//   for(let i = 0; i < arguments.length; i++){
//     sum += arguments[i];
//   }
//   console.log(sum);
// }

// argAdd(5,6,7,4,3,6,4,23,345,346,6);

// // storing functions
// let argfunc = argAdd;
// let sumstr = argfunc('2','44');

// function compareBy(propertyName) {
//   return function (a, b) {
//     let x = a[propertyName],
//       y = b[propertyName];

//     if (x > y) {
//       return 1;
//     } else if (x < y) {
//       return -1;
//     } else {
//       return 0;
//     }
//   };
// }

// let products = [
//   {name: 'iPhone', price: 900},
//   {name: 'Samsung Galaxy', price: 850},
//   {name: 'Sony Xperia', price: 700}
// ];

// console.table(products);

// products.sort(compareBy('price'));
//  console.table(products);

// //pass functions as arguments and parameters
//  function cmToIn(length) {
//   return length / 2.54;
// }

// function inToCm(length) {
//   return length * 2.54;
// }

// function convert(fn, length) {
//   return fn(length);
// }

// let inches = convert(cmToIn, 10);
// console.log(inches);

// // anonymous function



// //anon functionassigned 
// // let show = function() {
// //   console.log('Anonymous function');
// // };

// let show = () => console.log("Anonymous function"); // simplified arrowfunction

// show();


// //anon function as arguments
// // setTimeout(function() {
// //   console.log('Execute later after 1 second')
// // });

// setTimeout(() => console.log("Execute later after 1 second"));


// // imediatly invokin a function

// // (function() {
// //   console.log('IIFE');
// // })();

// (() => {
//   console.log("IIFE");
// })();


// (function(x, y){
//   console.log(x+y);
// })(products[1]['price'], products[2]['price']);


// // recursivefunction


// function recA (x){
//   let y = x + 1;
// if(x == 11){
//   console.log(x);
// }
// else recA(y);
// }

// recA(0);



///object An object is a collection of key/value pairs or properties. When the value is a function, the property becomes a method. Typically, you use methods to describe the object behaviors.


let person = {
  firstName: 'keshav',
  lastName: 'Mehta',
  greet(){console.log("yo yo ma" + " " + this.firstName)},
}
person.greet();

person.greet = () => {console.log("yo ma"+" "+this.lastName)
};

person.greet();

//create objects with constructor

function Cars(name, power, type){
  this.name = name;
  this.power = power;
  this.type = type;
}

let audi = new Cars('r8','770','supercar');
console.log(audi['name']);
let lamborghini = new Cars('aventador','1000','hypercar');
console.log(lamborghini['name']);
audi.classs = () => {
  console.log(audi['name']+" "+audi['power']+" "+audi['type']);
}
audi.classs();






//constructor function to create and object
function Truck(brand) {
  this.brand = brand;
  // this.getName = () => {
  //   console.log(`${this.brand} is amazing`);
  // }
}

let volvo = new Truck('vx4');
console.log(volvo['brand'] );

Truck.prototype.getName = function() {
  return this.brand;
};
console.log(volvo.toString());
console.log(volvo.getName());
let scania = new Truck("gm2");
console.log(scania.getName());

Truck.prototype.setName = function(name){
  this.brand = name;
}

volvo.setName("xc80");
console.log(volvo.getName());

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// function fun(){
//   for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//   }
// }
// fun();


// // never do this 

// person.__proto__.getName = function(){
//   return this.firstName;
// }
// console.log(person.getName());


function Bikes(name, type){
  this.name = name;
  this.type = type;
}


let ducati = new Bikes("monster","street");

Bikes.prototype.getName = function(){
  console.log(this.name);
};
Bikes.prototype.getType = function(){
  console.log(this.type);
};

ducati.__proto__.__proto__ = volvo;

let {name: brand} = ducati;
console.log(brand);