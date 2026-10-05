// PART 1 SCOPE :- It shows were variable  are availables

// {
//     let name = "zaid";
//     console.log(name);
// }    ------> it working

// {
//     let name = "zaid";
// }
// console.log(name);    ----> it not working because because scope of name outside the block




//PART 2 ARROW FUNCTIONS :- it is most imp on nodejs
/* normal function */
// function add(a, b) {
//     return a + b;
// }
// console.log(add(10, 20));

/* Arrow function same thing */
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(10, 20));
 
// const add = (a, b) =>  a + b; is a short form of 
// const add = (a, b) => {
//     return a + b;
// };

/* Learn Array Function like this */
/* normal :- function add(a, b) {
return a + b;
}

arrow function :- const add = (a, b) => a + b;
formula:- const functionName = (parameters) => result; */




// PART 3 TEMPLATE LITERALS
/* old way:- 
const name = "zaid";
const age = 24;

console.log("My name is " + name + " and my age is " + age); */

// To messy but in modern js

/* const name = "zaid";
const age = 24;

console.log(`My name is ${name} and My age is ${age}` ); */
// we use backtick ( ` ) for literals and inserting a variables use ${variables}




//PART 4 OBJECT

/* Real world user: 
name: zaid
age: 24
city: kanpur      -----> but in js 
*/
/* const user = {
    name: "zaid",
    age: 24,
    city: "kanpur",
};
console.log(user.name);    
console.log(user.age); */




//PART 5 OBJECT SHORTHAND
/* suppose */
// const name = "zaid";
// const age = 24;


/* old style */
// const user = {
//     name: name,
//     age: age
// };


/* Modern Js */
// const user = {
//     name,
//     age
// };


/* Js understand Automatically */
// name: name
// age: age  -----> this is object shorthand




//PART 6 DESTRUCTURING

/* suppose */
// const user = {
//     name: "zaid",
//     age: 24,
//     city: "kanpur"
// };
/* if we  want name  OLD METHOD */
// const name = user.name;
/* AGE */
// const age = user.age;
/* Modern JS */
// const { name, age } = user;
/* bs then ab */
// console.log(name);
// console.log(age);
/* const { name, age } = user;    -----> it is use for modern js 
user object ke andar se name and age nikal ke variables bana do */

//USED IN BACKEND     (IN EXPRESS WE SEE )
/* const { email, password } = req.body;         :- mean retrive email and password from request body so this concept is imp */




//PART 7 ARRAY DESTRUCTING

/* object:
const user = {
    name: "zaid"
};
object destructuring:
const { name } = user;
array:
const numbers = [10, 20, 30];
destructure:
const [first, second, third] = numbers;
then now print:
// console.log(first);      ------> o/p is 10
then:
// console.log(second);          -------> o/p 20   */




// PART 8 REST OPERATORS

/* supoose */
//  const user = {
//     id: 101,
//     name: "zaid",
//     age: 24,
//    city: "kanpur"
// };
// i want id will separtate */
// const { id, ...meta } = user;
/* then */
// console.log(id);   ---> o/p only 101
// console.log(meta);  ---> o/p  name,age,city

// MEMORY TRICK (...META) Means :- everthing will be written there




// PART 9 SPREAD OPERATOR

/* symbol like Rest
( ... )  but use case are different
suppose: 
// const user = {
//     name: "zaid",
//     age: 24,
// };
create a new object:
// const updatedUser = {
//     ...user,
//     age: 25
// };
then
console.log(updatedUser); ----> o/p age 25
console.log(user);      ------> o/p age 24   */