interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
  }


export const person: Hero = {
    name: 'batman',
    age: 45,
    codeName: '',
}


///desestructurando el object
const {age, name,codeName, power="No tiene poder"} = person
// console.log({ age, name, power }); //de esta manera se evita poner person.age, person.power etc



interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
  }
  
                       //desestructurando CreateHeroArgs
  const createHero = ({ name, age, codeName, power }: CreateHeroArgs ) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder', // ?? funciona como un ( ? : ) aunque igual se puede usar ||, pero ??, tiene mas consideraciones en valores null, undefined, etc
  })
  
  
  
  console.log(  createHero( person ) );

