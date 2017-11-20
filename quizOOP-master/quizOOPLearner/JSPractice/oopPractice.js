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
////};
//
////person.personData();
//
//
//
//
//
//var ourPeople = [];
//
////NOW TO BUILD OUR CONSTRUCTOR. CONSTRUCTORS NEED FIRST CAPITAL FOR GOOD PRACTICE
//function People(fullName, Location) {
//
//	this.name = fullName;
//	this.city = Location;
//
////	ourPeople.push(this.name);
////	ourPeople.push(this.city);
//	//creates 3 arrays
//	ourPeople.push([this.name, this.city]);
//
//	this.personData =  function() {
//		console.log("My name is " + this.name + " And I live in " + this.city + ".");
//
//		document.getElementById("display").innerHTML += "My name is " + this.name + " And I live in " + this.city + ".";
//	}
//}
//
////this is creating a NEW INSTANCE of the constructor we made
//var Panna = new People("Panna G", "Paris");
//var Peter = new People("Max M", "Tokyo");
//
//
//console.log(ourPeople);
//
//
//


//THIS IS MY JSON JAVASCRIPT DEMO

//var car = {
//
//	"model": "Skoda",
//	"price": 1700,
//	"engine": "Diesel"
//}
//
//console.log(car.model);
//
//var f1Drivers = ["Lewis", "Kimi", "Alonso"]
//
//console.log(f1Drivers[2]);








//var f1 = {
//
//	"data": [
//
//		{
//			"car": "Mercedes",
//			"driver": "Lewis",
//			"wins": 2
//		},
//		{
//			"circuit": "Monaco",
//			"pointSystem": [
//				{
//					"firstPlace": 25,
//					"secondPlace": 18,
//					"thirdPlace": 15
//				}
//			],
//			"teams": 11
//		}
//	]
//}
//
//console.log(f1.data[1].pointSystem[0].thirdPlace);

/*-------------------------------------------

JAVASCRIPT ARRAYS

-------------------------------------------*/










// Creating a new array CONSTRUCTOR

var myList = new Array();
var myList = new Array(10, 2, 4);

//console.log(myList);
//
//document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";

// Creating a new array LITERAL

//var myList = []; //empty array
//var myList = [1, 2, 3, 4];

//console.log(myList);
//
//document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";

// Do not just insert any index number to an array to add an element

//myList[4] = 77; // will add 77 to last element of the array (0-3 are filled, 4 does not yet exist so it works)

//myList[12] = 77; // will create many empty elements between the last existing value in the array (spot 3) and the position in the array this value is being inserted (1, 2, 3, 4, , , , , , , , 77)

//console.log(myList);
//
//document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";

// Arrays are actually just objects in JS

//var myList = [];
//var myList = [1, 2, 3, 4];

//myList["cool"] = "Zlatan is a cool player"; //this creates a 'cool' index for the array instead of number 4 as the index as these are properties. the string is pushed into the array but is not normally visible or callable

//console.log(myList);
//
//document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";

//Adding elements into the array using push()

//var myFamily =["Vick", "Cripps"];
//
//myFamily.push("Hall", "Beeson", 2);
//
//console.log(myFamily);
//
//document.getElementById("display").innerHTML = "<h1>" + myFamily + "</h1>";

//Now let's use the shift() and unshift() methods


//var myBigFamily = ["Dad", "Uncle", "Me"];
//
//myBigFamily.unshift("Dad's GF"); //adds elements at the BEGINNING of the array instead of the end like .push
//myBigFamily.shift(); //removes first element from the array
//
//var count = myBigFamily.length;
//
//console.log(count);
//console.log(myBigFamily);
//
//document.getElementById("display").innerHTML = "<h1>" + myBigFamily + "</h1>";

//If i want to find the index of an element in an array I am going to use the indexOf() method

//var myList = [1, 2, 3, 4, 3].indexOf(3); //returns first INDEX where the indexOF value appears. if it doesn't appear in the array it returns -1
//
//
//console.log(myList);
//
//document.getElementById("display").innerHTML = "<h1>" + myList + "</h1>";

//Slicing an array with the slice() method, that removes elements from the front of the array

//var myGFs = ["Michu", "Doreen", "Wendy", "Lisa", "Caroline", "Urika"];
//
//
//console.log(myGFs.slice(2,3)); //1 number returns the values that come AFTER that index. 2 numbers returns the values BETWEEN those 2 numbers, not including the 1st index mentioned aka 2,3 only returns index 3
//
//document.getElementById("display").innerHTML = "<h1>" + myGFs.slice(2,3); + "</h1>";


//Splice?? this ones messy

//var myGFs = ["Michu", "Doreen", "Wendy", "Lisa", "Caroline", "Urika"];
//
//myGFs.splice(1,2); //from index ONE in the array (doreen here) it removes TWO values from the array (wendy & lisa) leaving the rest(index's 0,3,4,5 are left
//
//document.getElementById("display").innerHTML = "<h1>" + myGFs+ "</h1>";

//JS includes 6 built in methods: forEach(), map(), filter(), some(), every() and finally reduce() - they all have similar syntax structure and most hold 3 paramaters which are (element, index and the array)


//var myList = [1, 2, 3, 4].forEach(function(el, idx, arr) { //executes function to every single element within this array
//
//	var justT = el+10;
//
//	console.log(justT);
//
//	document.getElementById("display").innerHTML += "<h1>" + justT + "</h1>";
//
//});

//var myArray = [10, 20, "hello", {}, 7];
//
//var myFunction = function(item) {
//	console.log("For an element " + item);
//	document.getElementById("display").innerHTML += "<h1>" + item + "</h1>";
//}
//
//myArray.forEach(myFunction);

//The map() creates a new array with the values taken from the result of executing a function on each value in the old array

//var myArray = [1, 2, 3, 4].map(function(el, idx, arr) {
//
////	return el>2; //is multiplying every element by itself
////	return el>2; //will return true/false boolean operation for each value
//
//});
//
//
//	console.log(myArray);
//
//	document.getElementById("display").innerHTML += "<h1>" + myArray + "</h1>";
//


//Some()

//var myArray = [1, 2, 3, 4].some(function(el, idx, arr) {
//
//	return el>2; //will return a SINGLE true/false boolean operator depending on if ANY of the values in the array meet the conditions
//});
//
//
//	console.log(myArray);
//
//	document.getElementById("display").innerHTML = "<h1>" + myArray + "</h1>";



//every()

//var myArray = [1, 2, 3, 4].every(function(el, idx, arr) {
//
//	return el>2; //will return a SINGLE true/false boolean operator depending on if ALL of the values in the array meet the conditions. If any DO NOT it's false
//});
//
//
//	console.log(myArray);
//
//	document.getElementById("display").innerHTML = "<h1>" + myArray + "</h1>";


//reduce()

var myArray = [1, 2, 3, 4].reduce(function(sum, el, idx, arr) {//reduce uses an extra parameter called sum

//	return sum +el;//Adds all the elements in the array
	return sum * el;// multiplies all the elements in the array from LEFT to RIGHT
}, 20); //the 20 here then executes the calculation of the array against this number. e.g. sum adds 20 to the sum of the array. multiply times the multiplied array by 20.


	console.log(myArray);

	document.getElementById("display").innerHTML = "<h1>" + myArray + "</h1>";
