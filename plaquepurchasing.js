//THIS PROGRAM IS FOR PURCHASING A PLAQUE.
//THE USER WILL PAY BY LETTER AT A SPECIFIC COST.

//The set cost per letter in the entry.
const cost = 10;
//The entry from the user for the plaque.
let plaqueNameEntered = 'Kyle';
//Variable to store the count of the letters in the enter.
var lengthOfEntry = plaqueNameEntered.length();

//Logging the length of the entry for verification.
console.log(lengthOfEntry);

//Function for calculating the cost of the plaque.
function costByLetter(){
    return cost * lengthOfEntry;
}

//Run the program to validate and see the output.
console.log(`The cost of your plaque will be $${costByLetter()}. You have ${lengthOfEntry} letters at $${cost}.`);