const promise = new Promise ((resolve, reject) => {
    setTimeout( () => {
        resolve("Success");
    }, 1000);
});

async function getData(){
    const res = await promise;
    console.log(res);
}
getData();

/* fetch("")
    .then(res => res.json())
    .then(data => console.log(data))
 */
async function getUser(){
    const res = await fetch('');
    const user = await res.json();

    const res2 = await fetch(`http://www.example.com/${user.id}`);
    const products = await res2.json();

    console.log(products);
}