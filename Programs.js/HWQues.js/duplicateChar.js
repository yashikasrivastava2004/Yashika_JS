import PromptSync from "prompt-sync";
const prompt = PromptSync();

let str = prompt("Enter a string: ");

for (let i = 0; i < str.charAt; i++) {

    let count = 1;
    if (str[i] === '*') {
        continue;
    }

    for (let j = i + 1; j < str.length; j++) {

        if (str[i] === str[j]) {
            count++;

            str = str.substring(0, j) + '*' + str.substring(j + 1);
        }
    }

    if (count > 1) {
        console.log(str[i] + " : " + count);
    }
}