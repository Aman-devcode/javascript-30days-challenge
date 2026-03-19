//  Day 1 Project – Age Calculator Webpage
// let birthday=prompt("Enter your Birthday in Years");
// let age=2026-birthday;
// console.log("your Age is here" + age);

function CalculateAge(){
let birthday = document.getElementById("birthday").value;
let age = 2026 - birthday;
document.getElementById("result").innerText = "Your age is " + age;
}
