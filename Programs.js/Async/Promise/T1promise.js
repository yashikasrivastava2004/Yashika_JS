// Create a function that returns a Promise resolving after 2 seconds with a message "Hello World". Use async/await to print it
function myfxn(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("hello");
    },2000);
});
}

async function printmsg(){
    let msg = await myfxn();
    console.log(msg);
}

printmsg();