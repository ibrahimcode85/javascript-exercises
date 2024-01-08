const sumAll = function(start, end) {
    
    //only number datatype
    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }
    
    //only positive number
    if (start < 0 || end < 0) {
        return 'ERROR';
    };

    if (start > end){
        startSum = end;
        endSum = start;

    } else {
        startSum = start;
        endSum  = end;
    }

    sumNum = 0;

    for (let num = startSum; num <= endSum; num++ ) {
        sumNum = sumNum + num;
    };

    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
