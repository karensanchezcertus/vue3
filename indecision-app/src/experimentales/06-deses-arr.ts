
const character = ['Goku','Vegeta','Trunks', 'Goten'];

const [ g,v,t, g2, g3 = 'Yamoshi' ] = character; // desestructurando arreglo character

//arreglo en retornandolo con funcion
const returnArray = () => {
  return [123, 'ABC'] as const; // retornandolo como as const, hace que se les establezca (a los valores) un tipo por default (number y string)
}


const [ numbers, letters ] = returnArray();

// console.log(numbers * 2, letters.toLowerCase()  );