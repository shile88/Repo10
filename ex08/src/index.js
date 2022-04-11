function myObject(){
    'use strict';
    const MATH_CONSTANTS = {
        E: 2.71828
    };

    Object.freeze(myObject);
    myObject.review = "bad";
    myObject.newProp = "Test";
    console.log(myObject);


    try {
        MATH_CONSTANTS.E = 23;
    } catch(error) {
        console.log(error.message);
    }
    return MATH_CONSTANTS.E;

}

const E = myObject();
module.exports = myObject;
