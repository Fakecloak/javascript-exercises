const findTheOldest = function(people) {
    const currYear =new Date().getFullYear() 

    return people.sort((a,b) => {
        const ageB = (b.yearOfDeath || currYear) - b.yearOfBirth
        const ageA = (a.yearOfDeath || currYear) - a.yearOfBirth 
        return ageB-ageA;
    })[0];
    
};


// Do not edit below this line
module.exports = findTheOldest;
