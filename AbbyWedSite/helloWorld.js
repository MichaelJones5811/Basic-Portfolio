alert("hello world");


function Player(lastName,position){
	this.lastName = lastName;
	this.position = position;
}
var jones = new Player("Jones","SecondBase");
alert(jones.lastName + " " + jones.position);
alert(jones.position);

function Friend(name, tshirtColor){
	this.name = name;
	this.tshirtColor = tshirtColor;
}
var denny = new Friend("Denny","green");

alert(denny.name);