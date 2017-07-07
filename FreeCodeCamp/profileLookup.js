

//Setup
var contacts = [{
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
console.log(contacts[3].lastName);
function lookUpProfile(firstName, prop) {
    // Only change code below this line
    
    //  for (var i = 0; i < contacts.length; i++) {
        if (contacts[3].firstName === firstName && contacts[3].hasOwnProperty(prop)) {
            console.log(contacts[3].lastName);

        } else if (contacts[3].firstName !== firstName) {
            console.log("No such contact");
        } else if (contacts[3].hasOwnProperty(prop) === false) {
            console.log("No such property");
        }
    //  }
    // Only change code above this line
}
// Change these values to test your function
lookUpProfile("Kristian", "lastName");