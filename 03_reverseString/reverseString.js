const reverseString = function(text) {
    let textLength = text.length;
    let textArray = text.split("");
    let textArrayReverse = textArray.reverse();

    let textReverse = '';

    for (const letter of textArrayReverse) {
        textReverse = textReverse + letter;
    };

    return textReverse;

};

// Do not edit below this line
module.exports = reverseString;
