// const { getAge, getUUID } = require('./plugins');
// const  { buildMakePerson } = require('./js-foundation/05-factory')

// const id = 2;

// getUserById(id, (error, user) => {
    //     if ( error ) {
        //         throw new Error(error)
        //     }
        
        //     console.log(user);
        // })
        
        // const makePerson = buildMakePerson({ getUUID, getAge });
        
        // const obj = {
//     name: 'John',
//     birthdate: '1999-10-11'
// }

// const john = makePerson(obj)

// console.log(john)


const  getPokemonById = require('./js-foundation/06-promises')

const info = getPokemonById(4)
  .then( ( pokemon ) => console.log({ pokemon }))
  .catch( ( err ) => console.log(err))
  .finally( () => console.log('Finalmente'))
