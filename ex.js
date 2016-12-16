//js

function insurance() {
var age = parseInt(prompt("Enter your age: "));
var size = prompt("Enter the car size you want: ");
var numofdays = parseInt(prompt("Enter the number of days you want to rent the car: "));
 // complete the missing program code below:
 var cost1 = 0
 var cost2 = 0
 var sum = 0
if(size == "economy"){
	cost1 = 0
}
else if(size == "medium"){
	cost1 = 10
}
else{
	cost1 = 15
}

if( age < 25) {
	cost2 = 10
}
sum = 50 + cost1 + cost2
sum2 = sum*numofdays
document.write(sum2)


}


//insurance();


function ex() {
var N = parseInt(prompt("Enter an odd integer: "));
// complete the missing program code below:
var sum = 0
for(var i=1; i<=N; i+2) {
sum = sum + 1/i*i;
}

document.write("1+1/3^2+1/5^2+1/7^2+1/9^2+…+1/ " + N + "^2 is " + sum)

}

ex();

function checkoutcome() {
// Read the amount of tea and candy
var teaamount = document.getElementById("tea").value;
var candyamount = document.getElementById("candy").value;
if(teaamount < 5 || candyamount < 5)
{
	document.getElementById("show_outcome").innerHTML = "Bad";

}
// complete the missing program code below
else if(teaamount>= 5 && candyamount>=5){
	document.getElementById("show_outcome").innerHTML = "Good";
}

else if(teaamount * 2 >= candyamount || candyamount * 2 >= teaamount){
	document.getElementById("show_outcome").innerHTML = "Great";
}

}

//checkoutcome();


