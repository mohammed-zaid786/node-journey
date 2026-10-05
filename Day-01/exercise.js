//Refactor ES5 callback loops into arrow functions    QUESTION 1

// convert old js function into modern arrow function
// const numbers = [10, 20, 30, 40];    //if we print every number
// numbers.forEach((number) => {
//     console.log(number);
// });

// o/p -----> 10, 20,30,40


/* In old js we use
numbers.forEach(function(number))
{
console.log(number);
}); 

IN MODERN :-  (number) =>    */




// QUESTION 2   EXTRACT ID AND AGGREGATE REMAINING FIELDS INTO META USING REST

// const payload = {
//     id: 101,
//     name: "virat",
//     email: "viratcem@gmail.com",
//     age: 35
// };

// const { id, ...meta } = payload;     // (...):- it is rest operator that collect the left things

// console.log("ID:", id);
// console.log("Meta:", meta);

// o/p  -----> id and meta data       [  const{ id, ...meta } = payload;  ]




// QUESTION 3 CLONE A USER CONFIGURATION OBJECT AND UPDATE NESTED KEYS USING THE SPREAD OPERATOR WITHOUT MUTATING THE ORIGINAL

// step 1
// const userConfig = {
//     name: "shahrukh",
//     preferences: {
//         theme: "light",
//         language: "english"
//     }
// };
// we can create new configuration (theme-->dark) not changes in original
// original---> light but new object   , theme = dark

// step 2 spread operator  ( ... )  means existing object ki property ko new me copy karo
/* example
const newUser = {
...user
} 
*/


//step 3 copy the outer object
/* 
const updatedConfig = {
...userConfig 
};
in updatedConfig has properties but theme was not change
*/


//step 4 understand nested object
/* preferences is a self object
preferences: {
theme: "light", 
language: "english"
}

so nested object spread:-
preferences: {
...userConfig.preferences 
}

and then theme dark:-
theme: "dark" 
*/

//complete code
// const userConfig = {
//     name: "shahrukh",
//     preferences: {
//         theme: "light",
//         language: "english"
//     }
// };
// const updatedConfig = {
//     ...userConfig,
//     preferences: {
//         ...userConfig.preferences,
//         theme: "dark"
//     }
// };

// console.log("Originals:",  JSON.stringify(userConfig, null, 2));
// console.log("Updated:", JSON.stringify(updatedConfig, null, 2));


//  o/p---> original --> light , updated --> dark