/* .on()    */

// const EventEmitter = require("node:events");

// const myEmitter = new EventEmitter();      //it can create emitter object.

// // Listen for an event
// myEmitter.on("hello", () => {         //on hello say what action will perform on hello event
//     console.log("Hello event received!");
// });

// Trigger the event
// myEmitter.emit("hello");      // it can trigger the event 

//op:- Hello event received!    on:- it can register listner and emit:- it can trigger.




/*   .emit()     */
// myEmitter.emit("hello");
// myEmitter.emit("hello");
// myEmitter.emit("hello");

//op:- Hello event received!  /  Hello event received!   / Hello event received!


/* Example of Real Project */
// const EventEmitter = require("node:events");

// const myEmitter = new EventEmitter();

// myEmitter.on("userRegistered", (user) => {
//     console.log("New user registered!");
//     console.log("Name:", user.name);
//     console.log("Email:", user.email);
// });

// myEmitter.emit("userRegistered", {
//     name: "Rahul",
//     email: "rahul@example.com"
// });

/*op:- New user registered!
Name: Rahul
Email: rahul@example.com
* here .emit():- first argument is event name and second argument is data.
*/






/* .once()  */
// const EventEmitter = require("node:events");

// const myEmitter = new EventEmitter();

// myEmitter.once("welcome", () => {    // .once will remove listener after one time execution.
//     console.log("Welcome! This message appears only once.");
// });

// myEmitter.emit("welcome");
// myEmitter.emit("welcome");
// myEmitter.emit("welcome");
/* op:- Welcome! This message appears only once. */

/* .on():- every time event will occurs it can execute listener.[again & again]
*  .emit():- it can trigger event.[event trigger]
*  .once():- it can execute the listener one time firstly.[one time]*/ 



/* Custom Event Bus :- It is a common announcement system.A single event is announced and interested listners will perform multiple actions. */
const EventEmitter = require("node:events");

const eventBus = new EventEmitter();

// Action 1
eventBus.on("userRegistered", (user) => {
    console.log(`Welcome email prepared for ${user.name}`);
});

// Action 2
eventBus.on("userRegistered", (user) => {
    console.log(`User ${user.name} saved to activity log`);
});

// Action 3
eventBus.on("userRegistered", (user) => {
    console.log(`Notification created for ${user.email}`);
});

// Trigger the business event
eventBus.emit("userRegistered", {
    name: "Aman",
    email: "aman@example.com"
});

/* op:- Welcome email prepared for Aman
User Aman saved to activity log
Notification created for aman@example.com

* userRegistered will emit thr event one time but its 3 listener will execute.
* userRegistered:- it will define event name.
* .on();- on listener will register actions.
* .emit():- it will start all actions.
* 
* */
