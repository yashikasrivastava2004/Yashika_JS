//input a char and chcek whether its vowel or consonant

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let ch = prompt("Enter a character: ");

if (
    ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ||
    ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U'
) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

