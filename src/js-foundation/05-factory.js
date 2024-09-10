// const { getUUID, getAge } = require('../plugins');

const buildMakePerson = ({ getUUID, getAge }) => {

    return ({name, birthdate}) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
    
}

// const obj = {name: 'John', birthdate: '1999-10-11'};
// const john = buildPerson(obj);

// console.log(john)

module.exports = {
    buildMakePerson,
}