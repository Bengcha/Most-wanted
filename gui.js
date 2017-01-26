function initSearch(people)
{
	var userInput = prompt("Choose a number [1 - 6]\n[1] Name \n[2] Descendants \n[3] Next Kin \n[4] Immediate Family Members \n[5] Traits \n[6] Cancel");
	if (userInput != "1" || userInput != "2" || userInput != "3" || userInput != "4" || userInput != "5")
	switch (userInput)
	{
		case "1":
		var fName = prompt("What is the person first name?");
		var lName = prompt("What is the person last name?");
		var result = displayPersonInformation(people, initSearchByName(people, fName, lName));
		break;
		case "2":
		var fName = prompt("What is the person first name?");
		var lName = prompt("What is the person last name?");
		var result = getDescendant(people, initSearchByName(people, fName, lName, personId(people)));
		break;
		case "3":
		break;
		case "4":
		break;
		case "5":
		break;
		case "6":
		alert("Search Terminated")
		break;
		default:
		alert("Input was invalid");
		break;
	}
	alert(result)
}

function initSearchByName(people, fName, lName)
{
	return people.filter(function(person)
	{
		if(person.firstName.toLowerCase() == fName.toLowerCase() && person.lastName.toLowerCase() == lName.toLowerCase())
		{
			return true;
		}
		else
		{
			return false;
		}
	});
}

function displayPersonInformation(people)
{
	var person = people[0];
	var personInformation = 
	"Id Number: " + person.id +
	"\nFirst Name: " + person.firstName +
	"\nLast Name: " + person.lastName +
	"\nGender: " + person.gender +
	"\nDate of Birth: " + person.dob +
	"\nHeight: " + person.height +
	"\nWeight: " + person.weight +
	"\nEyes Color: " + person.eyeColor +
	"\nOccupation: " + person.occupation +
	"\nParents:" + person.paretns +
	"\nCurrent Spouse: " + person.currentSpouse;

	return personInformation;
}

function personId(people)
{
	var personId = people.id;
	return personId;
}

function getDescendant(people, personId)
{
	var person = people[0];
	return people.filter(function(descendants)
	{
		if (descendants.parents == person.id)
		{
			person.firstName + person.lastName;
			return true;
		}
		else
		{
			return false;
		}
	});
}

function initSearchByTraits(){
	;
}
function displayResults(){
	;
}
function isNumeric() {
	;
}
function getAge(){
	;
}
function getHeight(){
	;
}
function getWeight(){
	;
}
function getEye(){
	;
}
function getOccupation(){
	;
}