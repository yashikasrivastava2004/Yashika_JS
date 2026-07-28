function parseJSONSafe(str) {
    // if (typeof str !== "string") {
    //     throw new TypeError("Entered value must be a string");
    // }
    return JSON.parse(str);
}

let goodJSON = '{"name":"Yashika","age":"31"}';

try {
    let res1 = parseJSONSafe(goodJSON);
    console.log(res1);
} catch (err) {
    console.log(err.name,": ",err.message);
} finally {
    console.log("Attempt finished");
}

let badJSON = '{name:"Yashika",age:"31"}';

try {
    let res2 = parseJSONSafe(badJSON);
    console.log(res2);
} catch (err) {
    console.log(err.name,": ",err.message);
} finally {
    console.log("Attempt finished");
}