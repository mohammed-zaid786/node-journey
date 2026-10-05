function task(name, time) {     
    return new Promise((resolve) => {    
        setTimeout(() => {        

            resolve(name + " completed");
        }, time);
    });
}

function failedTask(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(name + " failed");
        }, time);
    });
}


async function processOrder() {

    try {

        console.log(" Order processing started...\n");

        // Run independent tasks together
        const results = await Promise.all([
            task("Kitchen", 2000),
            task("Packing", 1500),
            task("Payment", 1000)
        ]);

        console.log(results);

    } catch (error) {

        console.log("Order failed:", error);

    } finally {

        console.log("\nOrder processing finished.");

    }
}


processOrder();
/* output:- [ 'Kitchen completed', 'Packing completed', 'Payment completed' ] / Order processing finished. */




/* ADD Promise.allSettled():-  */
// Promise.allSettled()
async function checkOrderTasks() {

    console.log("\nChecking all order tasks...\n");

    const results = await Promise.allSettled([
        task("Kitchen", 2000),
        failedTask("Packing", 1500),
        task("Payment", 1000)
    ]);

    console.log("Promise.allSettled result:");
    console.log(results);
}

checkOrderTasks();
/*op:- Promise.allSettled result:
[
  { status: 'fulfilled', value: 'Kitchen completed' },
  { status: 'rejected', reason: 'Packing failed' },
  { status: 'fulfilled', value: 'Payment completed' }
] */




/* ADD    Promise.race():  */
// Promise.race()
async function chooseDeliveryPartner() {

    console.log("\nChoosing fastest delivery partner...\n");

    const result = await Promise.race([    //promise.race() returns the first promise that settles
        task("Delivery Partner A", 3000),
        task("Delivery Partner B", 1000)
    ]);

    console.log("Promise.race winner:");
    console.log(result);
}

chooseDeliveryPartner();
/* op:- 
Choosing fastest delivery partner...

Promise.race winner:
Delivery Partner B completed
*/

// Day 4 Mini Project: orderManager
