const getTheTitles = function(array) {
    let collectArray = [];

    for (let item of array) {
        collectArray.push(item.title);
    };

    return collectArray;

};

// Do not edit below this line
module.exports = getTheTitles;
