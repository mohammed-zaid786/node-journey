/* 1:- Rewrite Promise chains using clean async/await and try/catch blocks. [Promise Chain -> async/await] */
//old method:
function getUser() {
    return Promise.resolve("Rohit Mehra");
}

    // getUser()
    // .then((user) => {
    //     console.log(user);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });//op:- Rohit Mehra

//Modern async/await:
async function main() {
    try{
        const user = await     //await makes the asynchronous code easier to read and catch handles errors.
        getUser();
        console.log(user);
    } catch (error) {
        console.log("Error:", error);
    }
}
main();
//op:- Rohit Mehra
/* .then() -> await
   .catch() -> catch 
   Promise chain -> async function 
   try/catch: to handle rejected Promises or runtime errors cleanly
   async: because is used inside an async func and an async func retunrs a Promise.
   */





/* PRACTICAL EXERCISE 2:
 Execute 3 independent network queries in parallel using Promise.all() and measure total execution time. (Reuest all 3 API together and check how much time it will take.)*/
async function main() {      //use async because we used inside await(await: it wait the result of promise) 
    try {
        console.time("Total Time");      //start timer
        const [users, posts, comments] = await Promise.all([   //here 3 asynchronous operations will will execute them parallely and result will store on [users,posts,comments]
            fetch("https://jsonplaceholder.typicode.com/users")   //user send the request to API and fetch will return promise.
                .then(response => response.json()),             // .then() response from the server so it convert the response into JSON data and response.json() will return promise.
            fetch("https://jsonplaceholder.typicode.com/posts")   //post Api
                .then(response => response.json()),
            fetch("https://jsonplaceholder.typicode.com/comments")  //comments APi
                .then(response => response.json())
        ]);                                      // all three fetch(users,post,comments) are independent so we will use Promise.all
        console.timeEnd("Total Time");       //actual execution time in console.
        console.log("Users:", users.length);     //JSONplaceholder users API has 10 users
        console.log("Posts:", posts.length);   //similarly post has 100 and comments has 500.
        console.log("Comments:", comments.length);
    } catch (error) {
        console.log("Error:", error);
    }
}
main();
/* op:- 
Total Time: 615.934814453125 ms
Total Time: 616.125ms
Users: 10
Posts: 100
Comments: 500 
*/





/* PRACTICAL EXERCISE 3:
Use Promise.allSettled to handle partial failures (even if one of the three operations fails, i still wanr the results of the other operations)*/
async function main() {

    const results = await Promise.allSettled([      //we want to multiple promises result so we can use (Promise.allSettled) even if some promises fail. in this code users and comments are fullfilled while post are rejected.

        Promise.resolve("Users data"),      //successful promised [fullfilled]

        Promise.reject("Posts API failed"),  //failed promise  [rejected]

        Promise.resolve("Comments data")     //again successful [fullfilled]

    ]);

    console.log(results);
}

// main();
//op:-   { status: 'fulfilled', value: 'Users data' },/ { status: 'rejected', reason: 'Posts API failed' },/  { status: 'fulfilled', value: 'Comments data' }  after partial failure it can provided the result.
//users -> success, posts -> failed, comments -> success.



























/* JSONPlaceholder is a freefake fake placeholder REST Api service that is used for learning and practicses 
it will give a fake dummy data fake user data and fake post and fake comments data */