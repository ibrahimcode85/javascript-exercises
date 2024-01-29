const fibonacci = function(index) {
    //initialize first two fibonacci number
    let numArray = [1, 1]; 

    // convert to number
    let indexNumber = Number(index);

    // create fibonacci array number (for 3rd index onwards)
    if (indexNumber >2){
        for (let num = 3; num <= indexNumber; num++ ){
            let numFirst = numArray[num - 2];       // first preceding number
            let numSecond = numArray[num - 3];      // second preceding number
            let numCurrent = numFirst + numSecond;  // current fibonacci number
    
            numArray.push(numCurrent)
        };
    };
    
    // return the current fibonacci number
    if (indexNumber == 0){
        return 0;
    } else if (indexNumber <0){
        return 'OOPS';
    }else{
        return numArray[indexNumber - 1];
    };
    
};

// Do not edit below this line
module.exports = fibonacci;
