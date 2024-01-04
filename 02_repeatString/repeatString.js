const repeatString = function(text,n_repeat) {
    let textConcat = '';

    if (n_repeat < 0) {return 'ERROR'};
    
    for (let i = 0; i < n_repeat; i++) {
        textConcat = textConcat + text;
    };

    return textConcat
};

// Do not edit below this line
module.exports = repeatString;
