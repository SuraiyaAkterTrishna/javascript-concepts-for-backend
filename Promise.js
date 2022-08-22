/**
 * Promise have three states
 * 1. Pending
 * 2. resolved
 * 3. rejected
 */

// Single Promise create 

const myPromise = new Promise((resolve, reject) => {
    const user = { id: 1 };
    if(!user){
        reject("Something went wrong!");
    } else {
        setTimeout( () => {
            resolve("Successfully got the data");
        }, 1000);
    }
});

// Promise consume 
myPromise
    .then(res => console.log("found in then", res))
    .catch(err => console.log("found in catch", err));