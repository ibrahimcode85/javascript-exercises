const findTheOldest = function(array) {
    // calculate age of each person
    let arrayWithAge = array.map((people) => {

        if (people.yearOfDeath){
            age = people.yearOfDeath - people.yearOfBirth;
        }else{
            age = (new Date()).getFullYear() - people.yearOfBirth;
        };
    
        return {'name': people.name, 'age': age};
    });

    // sort by the oldest
    let ageSorted = arrayWithAge.sort((firstPerson, lastPerson) => {
        if(firstPerson.age < lastPerson.age){
            return 1;
        }else{
            return -1;
        };
    });

    // return the first array
    return ageSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
