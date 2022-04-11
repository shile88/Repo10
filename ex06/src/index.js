var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};

function myFunction(name, value){
    lion[name] = value;
    return lion;
}

console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;
