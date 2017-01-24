var people = [];
function initSearch(people)
{
	var userInput = prompt("Choose a number [1 - 6]\n[1] Name \n[2] Descendants \n[3] Next Kin \n[4] Immediate Family Members \n[5] Traits \n[6] Cancel");
	if (userInput != "1" || userInput != "2" || userInput != "3" || userInput != "4" || userInput != "5")
	switch (userInput)
	{
		case "1":
		promptForPersonName(people);
		break;
		case "2":
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
}

function promptForPersonName(people)
{
	var name = initSearchByName(people, prompt("What is the person first name?"), prompt("What is the person last name?"));
	if (name == people.firstName && name == people.lastName)
	{
		return name.charAt(0).toUpperCase() + name.slice(1);
	}
	else
	{
		alert("No name found");
		return undefined;
	}
}

function initSearchByName(fName, LName)
{
	return people.filter(function(person)
	{
		if (person.firstName.toLowerCase() == fName.toLowerCase() && person.lastName.toLowerCase() == LName)
		{
			return true;
		}
		else
		{
			return false;
		}
	});
	return undefined;
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
