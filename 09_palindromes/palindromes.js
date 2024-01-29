const palindromes = function (word) {
    let punctuation = /[\.,?!]/g;
    let spaces = / /g;
    let wordReverse = '';

    //cleanup the string to be checked
    wordClean = word.replace(punctuation, '');    // remove punctuation
    wordClean = wordClean.toLowerCase();           // all lower case
    wordClean = wordClean.replace(spaces, '');     // remove spaces

    //construct string in reverse call order
    for (let i= wordClean.length - 1; i >= 0; i--){
        wordReverse = wordReverse + wordClean[i];
    };

    //return true if match with original word
    if (wordReverse === wordClean){
        return true;
    }else{
        return false;
    };

};

// Do not edit below this line
module.exports = palindromes;
