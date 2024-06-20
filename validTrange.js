const input = require("readline-sync");
let side1 = Number(input.question("enter the side1 >>> "));
let side2 = Number(input.question("enter the side1 >>> "));
let side3 = Number(input.question("enter the side1 >>> "));
if(side1+side2 > side3 && side2  < side1+side3 && side3 < side1+side2){
    console.log("yes");
}
else {
    console.log("no");
}

