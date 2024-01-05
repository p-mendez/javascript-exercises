const findTheOldest = function(arr) {
    let sortedArray =  arr.sort((a, b) => {
        let currentYear = new Date().getFullYear();
        let aAge = (a.yearOfDeath ?? currentYear) - a.yearOfBirth;
        let bAge = (b.yearOfDeath ?? currentYear) - b.yearOfBirth;
        return aAge - bAge;
    });
    return sortedArray[sortedArray.length - 1];
}

// Do not edit below this line
module.exports = findTheOldest;
