// Create a function that reads multiple URLs (can use fetch) and handles errors individually using try...catch.
async function readurls (urls){
    for(let url of urls){
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new error ("Failed");
            }
            else{
                const res = await response.json();
                console.log(res);
            }
        }
        catch(err){
            console.log("Error: ", err);
        }
    }
}

let urls =[
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/users/1",
    "https://wrong-url.com/data"
]

readurls(urls);