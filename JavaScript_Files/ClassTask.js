// Create an object represents you
//  have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)

let std = {
    firstName : "Sara",
    lastName : "Sleman",
    age : 22,
    dob : "17/4/2002",
    favoriteFood : ["Masala", "Fasolye", "Shimp" ],
    favoriteMovie : [
        "The Gallows",
        "Me before You",
        "The Grudge",
        "Conjuring",
        "Bounty Hunter"
    ]
}

console.log(std);

//-----------------------------------
// I made an array of objects
const persons = [
    { firstName: "Sara", lastName: "Sleman", age: 22 },
    { firstName: "Razan", lastName: "Hroub", age: 23 },
    { firstName: "Dania", lastName: "Mhmd", age: 21 },
    { firstName: "Mayar", lastName: "Sleman", age: 15 },
    { firstName: "Nouha", lastName: "Yaseen", age: 47 }
  ];
  
// here i used map that iterates in the persons array
  function firstName(persons) {
    return persons.map(person => person.firstName);
  }
  
  console.log(firstName(persons)); 
  