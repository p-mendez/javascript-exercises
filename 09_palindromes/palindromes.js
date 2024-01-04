const palindromes = function (word) {
    wordsOnly = "";
    for (const char of word) {
        if (char.match(/[a-zA-Z0-9]/))
            wordsOnly += char.toLowerCase();
    }

    if (wordsOnly.length < 2) 
        return true;
    
    let firstLetter = wordsOnly.charAt(0);
    let lastLetter = wordsOnly.slice(-1);

    if (firstLetter == lastLetter)
        return true && palindromes(wordsOnly.substring(1, wordsOnly.length - 1));
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;