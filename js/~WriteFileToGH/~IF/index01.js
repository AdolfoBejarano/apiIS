var contacts=[{"firstName":"Akira","lastName":"Laine","number":"0543236543","likes":["Pizza","Coding","Brownie Points"]},{"firstName":"Harry","lastName":"Potter","number":"0994372684","likes":["Hogwarts","Magic","Hagrid"]},{"firstName":"Kristian","lastName":"Vos","number":"unknown","likes":["JavaScript","Gaming","Foxes"]}]

function lookUpProfile(name, prop) 
{

  for (var i = 0; i < contacts.length; i++) 
{

    if (contacts[i].firstName === name) 
{

      if (contacts[i].hasOwnProperty(prop)) 
{
        return contacts[i][prop];
} 
else 
{
        return "No such property";
}
}
}
  return "No such contact";
}

console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Kristian", "likes"));
console.log(lookUpProfile("Made Up Person", "likes"));
console.log(lookUpProfile("Akira", "Made Up Property"));