function initSearch(people)
{
    var input = prompt("[1] Search for person \n[2] Search for descendant \n[3] Search for immediate family members \n[4] Search for next Kin \n[5] Search for person by traits \n[6]Exit");
    var firstName = getFirstName();
    var lastName = getLastName();
    switch (input)
    {
        case "1":
        initSearchByName(people, firstName, lastName);
        break;
        case "2":
        SearchForDescendant(people, firstName, lastName);
        break;
        case "3":
        SearchForImmediateFamily(people, firstName, lastName);
        break;
        case "4":
        alert("Under Construction");
        break;
        case "5":
        alert("Under Construction");
        break;
        case "6":
        alert("Search Terminated");
        break;
        default:
        alert("Please choose a valid option");
        initSearch();
        break;
    }
}

function displayPersonData(person)
{
    alert(
        "First Name: " + person.firstName +
        "\nLast Name: " + person.lastName +
        "\nGender: " + person.gender +
        "\nDate of Birth: " + person.dob +
        "\nAge: " +
        "\nHeight: " + person.height +
        "\nWeight: " + person.weight +
        "\nEyes Color: " + person.eyeColor +
        "\nOccupation: " + person.occupation +
        "\nParents: " + person.parents +
        "\nSpouse: " + person.currentSpouse);
}

function displayNameOnly(people)
{
    var nameString = [];
    for(var i = 0; i < people.length; i++)
    {
        var name = people[i].firstName + " " + people[i].lastName;
        nameString.push(name);
    }
    var fullName = nameString.join("\n");
    alert(fullName);
}

function getFirstName()
{
    var firstName = prompt("Enter the person First Name");
    return firstName;
}
function getLastName()
{
    var lastName = prompt("Enter the person Last Name");
    return lastName;
}

function initSearchByName(people, firstName, lastName)
{
  return people.filter(function (person)
  {
    if (person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase())
    {
        displayPersonData(person);
        return true;
    }
    else
    {
      return false;
    }
  }
  );
}

function SearchForDescendant(people, firstName, lastName)
{
  return people.filter(function (person)
  {
    if (person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase())
    {
      displayDescendant(person, people);
      return true;
    }
  else
    {
      return false;
    }
  });
}

function displayDescendant(person, people)
{
    var descendants = getDescendants(person, people);
    displayNameOnly(descendants);
}

function getDescendants(person, people,counter=-1, list=[])
{
    if(person !== undefined)
    {
        var descendants = people.filter(function (descendant)
        {
            return descendant.parents.includes(person.id);
        });
        list.push(...descendants);

        counter++;
        getDescendants(list[counter], people, counter, list);
    }
    return list;
}

function SearchForImmediateFamily(people, firstName, lastName)
{
  return people.filter(function (person)
        {
            if (person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase())
            {
              getImmediateFamily(person, people);
                return true;
            }
            else
            {
                return false;
            }
        });
}

function getImmediateFamily(person, people)
{
    var familyMembers = getFamilyMemebers(person, people);
    displayNameOnly(familyMembers);
}

function getFamilyMemebers(person, people)
{
    var parents = getParents(person, people);
    var siblings = getSibling(person, people);
    var spouse = getSpouse(person, people);
    var children = getChildren(person, people);
    var familyMember = [];

    familyMember.push(...parents);
    familyMember.push(...siblings);
    familyMember.push(...spouse);
    familyMember.push(...children);

    return familyMember;
}

function getParents(person, people)
{
    var parents = people.filter(function (family)
    {
        return person.parents.includes(family.id);
    });
    return parents;
}

function getSibling(person, people)
{
    var sibling = people.filter(function(family)
    {
        return family.parents.includes(person.parents);
    });
    return sibling;
}

function getSpouse(person, people){
    var spouse = people.filter(function (family)
    {
        return family.currentSpouse === person.id;
    });
    return spouse;
}
function getChildren(person, people){
    var childrenList = people.filter(function (family)
    {
        return family.parents.includes(person.id);
    });
    return childrenList;
}

function SearchForNextKin(people)
{
    if(isNaN(firstName) === true && isNaN(lastName) === true)
    {
        var searchPerson = people.filter(function (person)
        {
            if (person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase())
            {
                return true;
            }
            else
            {
                return false;
            }
        });
        if(searchPerson.length === 1)
        {
            getImmediateFamily(searchPerson[0], data);
        }
        else
        {

            alert("No Name Found");
        }
    }
    else
    {
        alert("No name Found");
        initSearch(people);
    }
}
