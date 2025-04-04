
// Exportaciones individuales se ponen en llaves
// import heroes, { owners } from './data/heroes';



//palabra reservada type en interfaces y tipos
import heroes, { type Owner } from './data/heroes';


export const getHeroById = ( id: number ) => {
  return heroes.find( hero => hero.id === id );
}


// export const getHeroesByOwner = (owner: string ) => {
//   return heroes.filter( hero => hero.owner === owner )
// }

export const getHeroesByOwner = (owner: 'Marvel' | 'DC' ) => {
      return heroes.filter( hero => hero.owner === owner )
    }


// console.log( getHeroesByOwner('Marvel') );