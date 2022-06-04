let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;
console.log("Case 1. Mark's BMI is higher than John's: " + markHigherBMI);