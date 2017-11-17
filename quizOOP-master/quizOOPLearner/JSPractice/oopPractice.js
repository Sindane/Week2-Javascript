//THIS IS MY OOP PRACTICE JS FILE

//// this is a standard function. name and city are PARAMETERS of the function
//function personDetails(name, city) {
//
//	console.log("My name is " + name + " And I live in " + city + ".")
//
//	document.getElementById("display").innerHTML = "My name is " + name + " And I live in " + city + ".";
//}
//// max and meopham here are arguments that are being used to call a function
//personDetails("Max","Meopham");

//TIME TO MAKE AN OBJECT TO STRUCTURE OUR DATA

////this is an EMPTY ARRAY
//var person = [];

// this is an object
//var person = {
//
//	name: "Max",
//	city: "Meopham",
//
//	personData: function () {
//		console.log("My name is " + person.name + " And I live in " + person.city + ".");
//
//		document.getElementById("display").innerHTML = "My name is " + person.name + " And I live in " + person.city + ".";
//	}
//};

//person.personData();





var ourPeople = [];

//NOW TO BUILD OUR CONSTRUCTOR. CONSTRUCTORS NEED FIRST CAPITAL FOR GOOD PRACTICE
function People(fullName, Location) {

	this.name = fullName;
	this.city = Location;

//	ourPeople.push(this.name);
//	ourPeople.push(this.city);
	//creates 3 arrays
	ourPeople.push([this.name, this.city]);

	this.personData =  function() {
		console.log("My name is " + this.name + " And I live in " + this.city + ".");

		document.getElementById("display").innerHTML += "My name is " + this.name + " And I live in " + this.city + ".";
	}
}

//this is creating a NEW INSTANCE of the constructor we made
var Panna = new People("Panna G", "Paris");
var Peter = new People("Max M", "Tokyo");


console.log(ourPeople);








