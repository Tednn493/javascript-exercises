const findTheOldest = function(persons) {
    const date = new Date();
    const year= date.getFullYear()
    let age = 0
    let temp=0
    let target = persons[0]
    for (let i=0;i<persons.length;i++){
        if (persons[i].yearOfDeath==undefined){
            temp= year - persons[i].yearOfBirth
        }else{
            temp=persons[i].yearOfDeath-persons[i].yearOfBirth
        }
        if (temp>=age){
            age=temp
            target=persons[i]
        }
    }
    return target
    

    

};

// Do not edit below this line
module.exports = findTheOldest;
