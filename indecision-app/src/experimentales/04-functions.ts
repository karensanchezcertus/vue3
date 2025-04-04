// function greetPerson( name: string ) {
//   return `Hola, ${ name }`;
// }
// const greetPerson = (name: string) => {
//   return `Hola, ${ name }`;
// }


//funcion tipo flecha
const getUser2 = (uuid: string) => {
    return {
        uuid,
        name: 'karen',
        lastname: 'sanchez'
    }
}


// en su forma mas corta de hacer esta funcion
const getUser = (uuid: string) => ({
        uuid,
        name: 'karen',
        lastname: 'sanchez'
})


console.log(getUser2('ABC-123'))


const heroes = [
    {
      id: 1,
      name: 'Batman',
    },
    {
      id: 2,
      name: 'Superman',
      power: 'Super fuerza',
    },
  ];
  
  
  const hero = heroes.find( (h) => h.id === 1 );
  
  // hero puede que sea undefined, al igual que power que puede ser un string o undefined, por eso se usa '?' para en caso de que si lo tenga o no
  console.log(hero?.power?.toUpperCase());