// Make two API calls sequentially using async/await and print the results.
async function apicalls(){
    try{
    const api1 = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
    const res1 = await api1.json();

    const api2 = await fetch(`https://jsonplaceholder.typicode.com/posts/2`);
    const res2 = await api2.json();

    console.log(res1);
    console.log(res2);
    }
    catch(err){
        console.log(err);
    }
}

apicalls();