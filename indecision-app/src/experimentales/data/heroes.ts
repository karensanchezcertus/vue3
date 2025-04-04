export interface Hero {
    id: number;
    name: string;
    //owner: 'DC'|'Marvel'; // estableciendo valores unicos desde la interfaz
    owner: Owner; // estableciendo un tipo a atributo de interfaz
  }
  
  export type Owner = 'DC' | 'Marvel'; //Haciendo tipo de dato personalizado
  
  
  
  
  const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
  ];
  

  // owner es una exportacion individual
  // heroes es exportacion por defecto (exportacion de todo)
  
  export const owners = ['DC','Marvel'] /*amarrando valores exactos*/ as const /*Evitando que se mute el arreglo de valores unicos estableciendolo como constante*/;
  
  export default heroes;