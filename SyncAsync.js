const colors = require("colors");

//Start

console.log("Welcome to ACC.");

// setTimeout(() => console.log("I'm excited to teach.".red), 1000);

// callback hell 

setTimeout(() => {
    const user = { id: 1 };
    serTimeout(() => {
        const products = [ {}, {}, {} ];
        setTimeout(() => {
            const prices = [];
        },1000);
     },500);
}, 1000);

console.log("Hope Everything will be fine.");