// Fetch data from a public API (e.g., https://jsonplaceholder.typicode.com/posts) using fetch() and handle it with async/await.

async function fatchPost(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    let response1 = await response.json();
    console.log(response);
}

fatchPost();

// error handling 
async function fatchPost(){
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if(!response.ok){
        throw new error ("Failed to fetch data");
    }

    const posts = await response.json();
    console.log(posts);
    }
    catch(error){
        console.log("error:", error.message);
        }
}

fatchPost();