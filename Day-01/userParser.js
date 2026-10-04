// Day 1 Mini Project - User Parser

// Step 1: Get JSON input
const input = process.argv[2];

let user;

try {
  user = input
    ? JSON.parse(input)       //JSON string--> JavaScript object
   : {
        id: 101,
        name: "Rahul",
        email: "rahul@gmail.com",
        age: 29,
        city: "Mumbai"
      };
} catch (error) {
  console.log("Invalid JSON input.");
  process.exit(1);
}



// Step 2: Destructure user data
const {
  id,
  name,
  email,
  age = 25,
  city = "Unknown",
  ...meta
} = user;       //user get require values from object and age 25 means if age we not found than it will be use similarly as city.

// Step 3: Validate required fields
const isValidUser = (userName, userEmail) => {
  return Boolean(userName && userEmail);
};           //it is arrow functions it will check name and email will available. if both ara avilable then it will return true otherwise will false.

if (!isValidUser(name, email)) {
  console.log("Error: Name and email are required.");
  process.exit(1);
}

// Step 4: Create a new object using shorthand
const userSummary = {
  id,
  name,
  email,
  age,
  city,
  ...meta
};

// Step 5: Print formatted summary
console.log("\n----- User Summary -----");
console.log(`ID: ${userSummary.id}`);
console.log(`Name: ${userSummary.name}`);
console.log(`Email: ${userSummary.email}`);
console.log(`Age: ${userSummary.age}`);
console.log(`City: ${userSummary.city}`);
console.log("------------------------");