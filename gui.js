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
        SearchForNextKin(people,firstName, lastName);
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
  }
  );
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

function getSpouse(person, people)
{
  var spouse = people.filter(function (family)
  {
    return family.currentSpouse === person.id;
  });
  return spouse;
}

function getChildren(person, people)
{
  var childrenList = people.filter(function (family)
  {
    return family.parents.includes(person.id);
  });
  return childrenList;
}

function getGrandChildren(person, people)
{
  var list = [];
  var grandChildren = getChildren(person, people);
  for(var children in grandChildren)
  {
    var grandChild = getChildren(children, people);
    list.push(...grandChild);
  }
  return list;
}

function getNieceNephew(person, people)
{
  var list = [];
  var sibling = getSibling(person, people);
  for(var family in sibling)
  {
    var nephewNiece = getChildren(family, people);
    list.push(...nephewNiece);
  }
  return list;
}

function getAuntsAndUncles(person, people)
{
  var list = [];
  var parents = getParents(person, people);
  for(var parent in parents)
  {
    var auntUncle = getSibling(parent, people);
    list.push(...auntUncle);
  }
  return list;
}

function getGreatGrandChildren(person, people)
{
  var list = [];
  var grandChildren = getGrandChildren(person, people);
  for(var children in grandChildren)
  {
    var greatGrandChildren = getChildren(children, people);
    list.push(...greatGrandChildren);
  }
  return list;
}

function getGrandParents(person, people)
{
  var list = [];
  var getparent = getParents(person, people);
  for(var parents in getparent)
  {
    var getGrandParent = getParents(parents, people);
    list.push(...getGrandParent);
  }
  return list;
}

function getGreatGrandParents(person, people)
{
  var list =[];
    var parents = getGrandParents(person, people);
    for(var parent in parents)
    {
      var greatGrandParents = getParents(parent, people);
      list.push(...greatGrandParents);
    }
  return list;
}

function SearchForNextKin(people, firstName, lastName)
{
  return people.filter(function (person)
  {
    if (person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase())
    {
      var kin = getNextOfKin(person, people);
      if (kin !== undefined)
      {
        displayNameOnly(getNextOfKin(person, people));
        return true;
      }
      else
      {
        alert("This person have no next of kin");
      }
    }
    else
    {
      return false;
    }
  });
}

function getNextOfKin(person, people)
{
  var arrayOfKins = [];
  arrayOfKins.push(getSpouse(person, people)[0]);
  if(arrayOfKins[0] === undefined)
  {
    arrayOfKins.splice(0, 1);
    arrayOfKins.push(getChildren(person, people)[0]);
  }
  if(arrayOfKins[0] === undefined)
  {
    arrayOfKins.splice(0, 1);
    arrayOfKins.push(getParents(person, people)[0]);
  }
  if(arrayOfKins[0] === undefined)
  {
    arrayOfKins.splice(0, 1);
    arrayOfKins.push(getSibling(person, people)[0]);
  }
  if(arrayOfKins[0] === undefined)
  {
    arrayOfKins.splice(0, 1);
    arrayOfKins.push(getGrandChildren(person, people)[0]);
  }
  if(arrayOfKins[0] === undefined)
  {
    arrayOfKins.splice(0, 1);
    arrayOfKins.push(getGrandParents(person, people)[0]);
  }
  if(arrayOfKins[0] === undefined)
  {
    arrayOfKins.splice(0, 1);
    arrayOfKins.push(getNieceNephew(person, people)[0]);
  }
  if(arrayOfKins[0] === undefined)
  {
    arrayOfKins.splice(0, 1);
    arrayOfKins.push(getAuntsAndUncles(person, people)[0]);
  }
  if(arrayOfKins[0] === undefined)
   {
    arrayOfKins.splice(0, 1);
    arrayOfKins.push(getGreatGrandChildren(person, people)[0]);
  }
  if(arrayOfKins[0] === undefined)
  {
    arrayOfKins.splice(0, 1);
    arrayOfKins.push(getGreatGrandParents(person, people)[0]);
  }

  return arrayOfKins;
}
