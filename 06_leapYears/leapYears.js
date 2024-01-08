const leapYears = function(year) {

    //define initial state
    let div4 = false;
    let div100 = false;
    let div400 = false;

    if (year % 4   === 0) {div4   = true};
    if (year % 100 === 0) {div100 = true};
    if (year % 400 === 0) {div400 = true};


    if (div4){
        if (div100){
            if (div400){
                return true;
            }else{
                return false;
            };
        }else{
            return true;
        };
    }else{
        return false;
    };
};

// Do not edit below this line
module.exports = leapYears;
