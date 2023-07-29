const reverseString = function(word) {
    reverse = "";
    for (i = word.length; i >= 0; i--)
        reverse += word.charAt(i);
    
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
