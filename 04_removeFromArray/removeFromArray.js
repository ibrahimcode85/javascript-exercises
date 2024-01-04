const removeFromArray = function() {
    //take all arguments and put them in array. the first element is array.
    const args = Array.from(arguments) 

    //get the array in the first element
    const array = args.slice(0,1);

    //get the exclude item as array
    const removeArray = args.slice(1)
    
    newArray = [];

    for (const item of array[0]) {

        //test if item is to be included
        let excludeItem = removeArray.includes(item);

        if (excludeItem == false) {
            newArray.push(item);
        } else {
            continue
        };
    };

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
