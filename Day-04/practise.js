/* PRACTISE ALLSETTLED */
async function main() {

    const results = await Promise.allSettled([

        Promise.resolve("User API success"),

        Promise.reject("Posts API failed"),

        Promise.resolve("Comments API success")

    ]);

    results.forEach((result, index) => {

        if (result.status === "fulfilled") {

            console.log(
                `Request ${index + 1} success:`,
                result.value
            );

        } else {

            console.log(
                `Request ${index + 1} failed:`,
                result.reason
            );

        }

    });

}

main();
//op:- Request 1 success: User API success/ Request 2 failed: Posts API failed/ Request 3 success: Comments API success



