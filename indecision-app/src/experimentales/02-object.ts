export const person = {
    lastname: 'stark',
    age: 44,
    address: {
        city:'Oregon',
        zip:72334,
        lat:35.08473,
        lng:34.67677
    }
};

const person2 = structuredClone(person)// haciendo clon del primer object sin modificar al otro
const person3 = {...person} // spread modifica al original
person3.address.city = 'New york'

person2.lastname = 'Sanchez'
person2.address.city = 'Los Angeles'

console.log({person})
console.log(person2)
console.log({person3})