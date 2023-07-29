const sumAll = function(num1, num2) {
    for (number of arguments)
        if (number < 0)
            return "ERROR";
        if (typeof number != "number")
            return "ERROR";
    let sum = 0;

    // put in ascending order, if necessary
    if (isDescending(num1, num2)){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }

    return sum;
};

function isDescending(num1, num2) {
    return num1 > num2;
}

// Do not edit below this line
module.exports = sumAll;
