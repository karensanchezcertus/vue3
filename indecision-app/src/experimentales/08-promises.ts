import type { Hero } from "./data/heroes";
import { getHeroById } from "./07-imp-exp";


console.log('Inicio');
new Promise( ( resolve, reject ) => { // resolve cuando se ejecuta correctamente, el reject cuando algo sale mal
  // console.log('Cuerpo de la promesa'); // mensaje en caso de q se haya ejecutado correctamente
  setTimeout(() => {
    // resolve('Mi amigo cumplió');

    reject('Mi amigo, no cumplió');
  }, 1000);
})
  .then( ( message ) => console.log( message )  ) //la promesa se resuelve de manera exitosa
  .catch( errorMessage => console.log( errorMessage ) ) // catch para manejar la excepcion
  .finally( () => console.log('Fin de la promesa') );
console.log('Fin');





const getHeoByIdAsync = (id: number): Promise<Hero> => { //Esta promesa tiene que regresar una respuesta de tipo Hero, y no en su defecto como Unknown
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const hero = getHeroById(id);
  

        // if(hero) {
        //     resolve(hero)
        // }
        // else {
        //     reject(`Heroe no encontrado con id #${id}`)
        // }
        
        hero ? resolve(hero) : reject(`Héroe no encontrado #${id}`); // Haciendo mas corto la sentencia sin uso de if else
        
      }, 1500);
    });
  };
  
  getHeoByIdAsync(3)
    .then((hero) => console.log("El nombre es", hero.name)) //La promesa, en su defecto devuelve algo de tipo Unknown, para eso se le debe de poner un tipo
    .catch(alert);