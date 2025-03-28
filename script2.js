let promise1 =  new Promise((resolve, reject) => {
    var myTest = 1;
    let success = (myTest > 0);
    if (success) {
        resolve ("Operation completed successfully.");
       }  else {
        reject("Operation Failed.");
       }   
});

console.log("Let's do something immediately after creating a promise");

promise1.then((message) => {
    console.log(message);

}) .then((message) =>{
    console.log(message + "second message");
})

.catch ((error) => {
    console.log (error);

});


let promise2 = new Promise((resolve, reject) => {
    resolve(1);
})
    promise2.then(result => {
        console.log(result);
        return result * 2;
    }).then(result => {
        console.log(result);
        return result * 3;
    }).then(result => {
        console.log(result);
        return result * 4;
    }).then(result => {
        console.log(result);
    });
let promise =  new Promise((resolve, reject) => {
    let success = false;
    if (success) {
        resolve ("Operation completed successfully.");
       }  else {
        reject("Operation Failed.");
       }   
});
promise.then(result => {
    console.log(result);
}).catch(error =>{
    console.error("Error:", error);
});
console.log("Simulate Data Fetching Using Promise");
console.log("");
function delay(s) {
    return new Promise(resolve => setTimeout(resolve, s));
}
async function executeTask() {
    console.log('Fetching user_profile from server 001: Start....');
    await delay(2000);
    console.log('Task Completed: End');

    console.log('Fetching user_post from server 001: Start....');
    await delay(2000);
    console.log('Task Completed: End');

    console.log('Fetching user_comments server 001: Start....');
    await delay(2000);
    console.log('Task Completed: End');
}
executeTask();
