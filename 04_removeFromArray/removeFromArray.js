
/* Returns an array with elements removed. 
 */ 
const removeFromArray = function(arr, ...removeList) {
    let newArray = arr;
    for (const remove of removeList) {
        arr = removeSingleElement(arr, remove);
    }
    return arr;
};

const removeSingleElement = function(arr, elementToRemove) {
    newArray = [];
    for (const element of arr) {
        if (element === elementToRemove)
            continue;
        newArray.push(element);
    }

    return newArray;
}




// Do not edit below this line
module.exports = removeFromArray;
