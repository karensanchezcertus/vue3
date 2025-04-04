const numberArray = [1,2,3,4,5,] //as const;

numberArray.push(6)

const numberArray2= [...numberArray]
const numberArray3= numberArray // array original se mutaria si se hace una modificicacion en la copia
const numberArray4: (number|string)[]=[...numberArray]; // de esta manera se le puede agregar strings al array
numberArray2.push(6)

const numberArray5 = numberArray.map(value =>
    value.toFixed
);

console.log({numberArray})
console.log({numberArray, numberArray2})

export {} // asi tamb se puede exportar