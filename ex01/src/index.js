var myPet = {
    species: "Dog",
    name: "Max",
    legs: 4,
    friends: ["Jack", "Ben"]
};

function myFunction(myObj){
    return myPet;
}

console.log(myFunction(myPet));
module.exports = {myPet, myFunction};