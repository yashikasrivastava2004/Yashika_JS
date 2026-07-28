// import PromptSync from "prompt-sync";
// const prompt = PromptSync();
function simpleInterest (principle,time,rate=2){ //used default rate value : taken rate value as a default parameter
    let formula = (principle*time*rate)/100;
    console.log(formula);
}
simpleInterest(6000,3);