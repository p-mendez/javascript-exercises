const repeatString = function(str, numTimes) {
    if (numTimes < 0)
        return "ERROR";
    
    let result = "";
    for (i = 0; i < numTimes; i++) {
        result += str;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
