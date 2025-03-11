/** COMPOSABLE FUNCTIONS */

import { ref, computed } from "vue"
// const counter = ref(10) // este funcionaria como un gestor de estado global en la aplicacion, basado en un composable


export const useCounter =(initialValue:number)=> {
    
    const counter = ref(initialValue)
        // se puede hacer de esta manera o en el return 
    // const squareCounter = computed(() => counter.value * counter.value) 

    return {
        counter,
        // read-only
        squareCounter: computed(()=> counter.value * counter.value)
    }
}