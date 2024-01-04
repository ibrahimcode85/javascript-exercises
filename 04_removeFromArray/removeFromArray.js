const removeFromArray = function(array, removeItem) {
    newArray = [];

    for (const item of array) {
        if (item !== removeItem) {
            newArray.push(item);
        } else {
            continue
        };
    };

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
