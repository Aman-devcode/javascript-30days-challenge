function generateTable(){

let num = document.getElementById("number").value;

if(num === ""){
document.getElementById("result").innerText = "Please enter a number";
return;
}

num = Number(num);

let output = "";

for(let i = 1; i <= 10; i++){
output += num + " x " + i + " = " + (num * i) + "<br>";
}

document.getElementById("result").innerHTML = output;

}