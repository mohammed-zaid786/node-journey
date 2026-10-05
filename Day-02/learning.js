/* functional array processing & immutable data transformation  
suppose we have a user:-

const user = [
{ name: "Rahul", age:25 },
{ name: "Ramesh", age:30 },
{ name: "Suresh", age:35 }
];

question we have:- all names and age Greater than 30, total age, find rahul, is there any age 25+ and find all are adults
in javascript bar bar for loop ke bajay we have use map, filter, reduce, find, some, every methods . original data were not changes unnecessarily its called immutable.
*/



/* what is Array */
// const numbers = [10, 20, 30, 40, 50];  // where 10 is index 0, 20 is index 1, 30 is index 2, 40 is index 3, 50 is index 4
// console.log(numbers[0]); //10 js start from index 0
// console.log(numbers[2]); // it give 30


/* ARRAY OF OBJECT */
// const user = [
//     {
//         id: 1,
//         name: "Rahul",
//         age: 25
//     },
//     {
//         id: 2,
//         name: "Ramesh",
//         age: 30
//     },
//     {
//         id: 3,
//         name: "Suresh",
//         age: 35
//     }
// ];       // mostly this type of data we get from api or database




// STEP 1:- BASIC IDEA OF FUNCTIONAL PROGRAMMING
/* suppose */
// const users = [
//     { name: "Rahul", age: 25 },
//     { name: "Ramesh", age: 30 },
// ];        //modify the original data
// users[0].age = 26; // it modify the original data first rahul age 25 to 26 it is a problem ki agar kisi aur data ko 25  chahiye tha thn problem so modern js old data--> change old data directly




// STEP 2:- map():- every item will transform and return a new array
/* example:- */
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2); // it will return a new array
// console.log(doubled);

/* structure of map() */
// array.map(item => {
//     return something;
// });  example:-
// const numbers = [10, 20, 30];
// const result = numbers.map(num => 
// {
//     return num + 5;
// });
// console.log(result); // it will return a new array [15, 25, 35] original data not changed

//example 2:-
// const users = [
//     {name: "raju", age:16 },
//     {name: "bheem", age: 20 },
//     {name: "kichak", age: 22},
// ];  // only name then type this 
// const names = users.map(user => user.name);
// console.log(names); // it wwill give only name map will not change the original data.
/* map is designed to transform every element and return a new array. if i only want to perform an action without creating a transformed array, then use forEach() method. */




// STEP 3:- filter():- it will return a new array with all elements that pass the test implemented by the provided function. it will not change the original data
//example 
// const numbers = [10, 20, 30, 40, 50]; // we want greater than 20
// const result = numbers.filter(num => num > 20); // it will return a new array
// console.log(result); // it will give [30, 40, 50] original data not changed select the item on the basis of condition is called filter. 

//example 2:-
// const users = [
//     { name: "Rahul", age: 25 },
//     { name: "Ramesh", age: 30 },
//     { name: "Suresh", age: 35 }
// ];
// const adults = users.filter(user => user.age > 28); // it will return a new array
// console.log(adults);// it will gave the name ramesh and suresh with age

/* map() :- transformation of every item and filter():- selection of items based on condition. both will return a new array and original data not changed. */




// STEP 4:- reduce():- it will return a single value based on the provided function. it will not change the original data
// example:-
// const numbers = [10, 20, 30, 40, 50]; // we want to find the sum of all numbers
// const total = numbers.reduce((sum, num) => { return sum + num; }, 0); // it will return a single value
// console.log(total); // it will give 150 original data not changed

/* reduce has two things ACCUMULATOR and CURRENT VALUE. accumulator is the value that is returned by the previous iteration and current value is the value of the current iteration. */
// reduce((sum, num)) => ...) so sum is the total and num is current item and Reduce  that convert multiple values in a final result.so it is very useful in backend function reduce().




// STEP 5:- find()
// const users = [
//     {id: 1, name: "Bheem" },
//     {id: 2, name: "Raju" },
//     {id: 3, name: "Indrverma" }
// ];      //so we get user id 2
// const user = users.find(user => user.id === 2);
// console.log(user);// o/p--> id 2 name raju  it golden rule first matching item = find if it not present it show undefined
// find:- first matching object and filter:- all matching matching object




// STEP 6:- some()
// const numbers = [10, 20, 30, 40];  //atleast one condition is satisfy
// const result = numbers.some(num => num > 35);
// console.log(result);// it shows () true ) 40>35

// const users = [
//     { name: "Nobita", age: 17 },
//     { name: "Suneo", age: 25 }
// ];
// const hasAdult = users.some(user => user.age >= 18);
// console.log(hasAdult);// it shows   true




// STEP 7:- every():- it satisfy all condition
// const numbers = [10, 20, 30, 40]; // all condition is satisfy
// const result = numbers.every(num => num > 5);
// console.log(result); // it shows true

/* every() :- it will satisfy all condition and some() :- atleast one condition is satisfy. */
/* map() :- transformation of every item and filter():- selection of items based on condition.
reduce() :- combine all items into a single value and find() :- first matching item and some() :- atleast one condition is satisfy and every() :- it satisfy all condition. */





// STEP 8:-  Immutability:- it means original data not changed. if we want to change the original data then we have to create a new array or object. so that we can keep the original data safe. it is very useful in functional programming.
// const user = {
//     name: "Rahul",
//     age: 25
// };
// user.age = 26; // it modify the original data first rahul age 25 to 26 it is a problem ki agar kisi aur data ko 25  chahiye tha thn problem so modern js old data--> change old data directly
//that is mutation of original data. 

// Immutability were not change directly instead of that we create a new object or array and return it. 
// const user = {
//     name: "Rahul",
//     age: 22
// };
// const updatedUser = { ...user, age: 25 }; // it will create a new object with the updated age and original data not changed
/* user.age than still 22 and updatedUser.age than 25. so original data not changed. it is called immutability.it is very imp in react */




//STEP 9:-  shallow copy
// const user = {  //it adv but imp suppose
//     name: "Rahul",
//     address: {
//         city: "Delhi",
//     }
// };
// const copy = { ...user }; // it will create a shallow copy of the user object but the address object is still a reference to the original address object. so if we change the city in the copy object, it will also change the city in the original user object.
// copy.address.city = "Mumbai"; // it will change the city in the original user object as well it effect on nested data also. 


//STEP 10:- deep copy:- in deep nested object were independently copy the data and original data not changed. 
/* const copy =
structuredClone(user); // it will create a deep copy of the user object and original data not changed.  */
//structuredClone() is a built-in method in JavaScript that creates a deep copy of an object or array. 
// const original = {
//     name: "Rahul",
//     address: {
//         city: "kanpur",
//     }
// };
// const copy = structuredClone(original); // it will create a deep copy of the original object and original data not changed.
// copy.address.city = "Lucknow"; // it will change the city in the copy object only and original data not changed.
// console.log(original.address.city); // it will give kanpur because deep clone were created.




// STEP 11:-  JSON.stringify():- javaScript object notation it is common format in API and database. 
// const user = {   //example
//     name: "Utkarsh",
//     age: 25,
// };  //create json string

// const jsonData = JSON.stringify(user); 
// console.log(jsonData); // it will give {"name":"Utkarsh","age":25}  it is a string format of the object. notice object is converted into string format. it is very useful in API and database.


// // JSON.parse():- it will convert the string format into object format.
// const data = JSON.parse(jsonData); // it will convert the string format into object format.
// console.log(data.name); // it will give Utkarsh because it is converted into object format.

/* js object--> json.stringfy()--> json string.
json string--> json.parse()--> js object. */


// /* old technique */
// const copy = JSON.parse(JSON.stringify(original)); // it is used in simple data structure but in modern js  structuredClone() is generally better choice for deep cloning  support data types.