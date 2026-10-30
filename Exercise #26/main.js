function blockingFunction() {
    const start = Date.now();

    while (Date.now() - start < 2000) {
        // Wait for 2 seconds
    }

    return "Blocking: 2 seconds delay completed!";
}

console.log("Start");

console.log(blockingFunction());

console.log("End");

function nonBlockingFunction(callback) {
    setTimeout(() => {
        callback("Non-Blocking: 2 seconds delay completed!");
    }, 2000);
}

console.log("Start");

nonBlockingFunction((message) => {
    console.log(message);
});

console.log("End");