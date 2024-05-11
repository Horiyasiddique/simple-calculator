var prompt = require('prompt-sync')();

let x = parseInt(prompt("please enter your first value :  "))
let y = parseInt(prompt("please enter your second value :  "))
let z = prompt("please enter your operator :  ")
if(z == "+"){
    console.log(`${x + y}`)
}
 else if(z == "-"){
    console.log(`${x - y}`)
}
 else if(z == "*"){
    console.log(`${x * y}`)
}
else if(z == "/"){
    console.log(`${x / y}`)
}
 else if(z == "^"){
    console.log(`${x ^ y}`)
}else{
    console.log("please enter a correct operator");
}

export{};