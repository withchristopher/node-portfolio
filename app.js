var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
    name: "Lernantino",
    age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';

const printProfileData = (profileDataArr) => {
    console.log(profileDataArr);
}

printProfileData(profileDataArgs);

// Using function expression syntax
const addNums = function(numOne, numTwo) {
    return numOne + numTwo;
};

// Using new arrow function syntax
const addNums = (numOne, numTwo) => {
    return numOne + numTwo;
};

// One parameter, omitting the parentheses
const printProfileData = profileDataArr => {
    console.log(profileDataArr);
};

const addNums = (numOne, numTwo) => numOne + numTwo;

const sum = addNums(5, 3); // add sum