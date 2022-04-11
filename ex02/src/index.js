var myClothes = {
    hat: "Fedora",
    shirt: "Nike",
    shoes: "Converse"
};

function myFunction (myClothes){
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var shoesValue = myClothes.shoes;
    return {hatValue,shirtValue,shoesValue};
}

console.log(myFunction(myClothes));
module.exports = myFunction(myClothes);