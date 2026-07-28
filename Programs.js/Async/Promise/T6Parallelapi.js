// Make the same two API calls in parallel using Promise.all() and await the results.
async function parallelapi (){
    try{
        const [api1, api2] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/1`),
        fetch(`https://jsonplaceholder.typicode.com/posts/2`)
    ]);

    const [res1, res2] = await Promise.all([
        api1.json(),
        api2.json()
    ]);

    console.log(res1, res2);
}
    catch(err){-
        console.log(err);
    }
}

parallelapi();
