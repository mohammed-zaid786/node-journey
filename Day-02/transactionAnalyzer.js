// Create Transactions Data
const transactions = [
  { id: 1, customer: "Sam", amount: 1200, status: "completed" },
  { id: 2, customer: "Rahul", amount: 2500, status: "completed" },
  { id: 3, customer: "Aman", amount: 800, status: "pending" },
  { id: 4, customer: "Sara", amount: 3200, status: "completed" },
  { id: 5, customer: "Sam", amount: 1800, status: "completed" },

  { id: 6, customer: "Rahul", amount: 4500, status: "pending" },
  { id: 7, customer: "Aman", amount: 900, status: "completed" },
  { id: 8, customer: "Sara", amount: 7000, status: "completed" },
  { id: 9, customer: "Sam", amount: 1500, status: "pending" },
  { id: 10, customer: "Rahul", amount: 2200, status: "completed" },

  { id: 11, customer: "Aman", amount: 1100, status: "completed" },
  { id: 12, customer: "Sara", amount: 2800, status: "pending" },
  { id: 13, customer: "Sam", amount: 5000, status: "completed" },
  { id: 14, customer: "Rahul", amount: 1300, status: "completed" },
  { id: 15, customer: "Aman", amount: 600, status: "pending" },

  { id: 16, customer: "Sara", amount: 3500, status: "completed" },
  { id: 17, customer: "Sam", amount: 2100, status: "completed" },
  { id: 18, customer: "Rahul", amount: 6000, status: "completed" },
  { id: 19, customer: "Aman", amount: 750, status: "completed" },
  { id: 20, customer: "Sara", amount: 4200, status: "completed" },

  { id: 21, customer: "Sam", amount: 9000, status: "completed" },
  { id: 22, customer: "Rahul", amount: 1600, status: "pending" },
  { id: 23, customer: "Aman", amount: 950, status: "completed" },
  { id: 24, customer: "Sara", amount: 5500, status: "completed" },
  { id: 25, customer: "Sam", amount: 3000, status: "completed" }
];
/* firstly i created an array containing 25 financial transactions records. Each record has an id, customer, amount and status. */


//I used filter() to get all pending transactions without modifying the original array.
const pendingTransactions = transactions.filter( transactions => transactions.status === "pending");
console.log("Pending Transactions:");
console.log(pendingTransactions);//op:- pending transactions


//I used reduce() to calculate the gross revenue. it adds the total amount of everycompleted transactions.
const grossRevenue = transactions.reduce((total, transaction) => {
  if (transaction.status === "completed") {
    return total + transaction.amount;
  }

  return total;
}, 0);

console.log("Gross Revenue:", grossRevenue);//op:- its showa gross revenue


//I used map() to transform each transaction into a client-safe object. The original data remains unchanged.
const clientData = transactions.map(transaction => ({
  id: transaction.id,
  customer: transaction.customer,
  amount: transaction.amount,
  status: transaction.status
}));

console.log("Client Safe Data:");
console.log(clientData);//op:- client safe data(i am selecting only the fields that are safe to send to the client)


//I considered transactions above 5000 as anomalies and used filter() to identify them.
const anomalies = transactions.filter(
  transaction => transaction.amount > 5000
);

console.log("Anomalies:");
console.log(anomalies);//i defined an anomaly as a transaction above 5k . so filter() returns those transactions.


//find() returns the first matching elements, while filter() returns all matching elements.
const transaction = transactions.find(
  transaction => transaction.id === 10
);

console.log("Transaction with ID 10:");
console.log(transaction);//op:- to search for the transaction with id 10.  it will return the first matching object.


// some() returns true if atleast one transactions matches the condition.
const hasPending = transactions.some(
  transaction => transaction.status === "pending"
);

console.log("Has Pending Transaction:", hasPending); //op:- true


//every() returns true only whwn all transactions satisfy the condition.
const allAmountsPositive = transactions.every(
  transaction => transaction.amount > 0
);

console.log("All amounts positive:", allAmountsPositive);// op:- all amt is +ive


// I used reduce() to group transactions customer-wise and calculate the total spending of each customers.
const customerSpending = transactions.reduce((result, transaction) => {
  if (transaction.status === "completed") {
    if (!result[transaction.customer]) {
      result[transaction.customer] = 0;
    }

    result[transaction.customer] += transaction.amount;
  }

  return result;
}, {});

console.log("Customer Spending:");
console.log(customerSpending);//op:- customer spending


//To find highest amount in customer spending
const topSpender = Object.entries(customerSpending).reduce( // object.entries convert object into array
  (top, current) => {
    if (current[1] > top[1]) {
      return current;
    }

    return top;
  }
);

console.log("Top Spender:", topSpender);// find the highest spender


//JSON.stringify convert js data a JSON string, and JSON.parse convert it back into a JS object
const jsonData = JSON.stringify(transactions); // JavaScript object into JSON string

console.log("JSON Data:");
console.log(jsonData);

const originalData = JSON.parse(jsonData);     // JSON string into JavaScript Object

console.log("Parsed Data:");
console.log(originalData);