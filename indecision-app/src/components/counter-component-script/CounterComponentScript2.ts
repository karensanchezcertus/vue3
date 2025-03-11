// LOGCA CON COMPOSABLE FUNCTIONS
import { useCounter } from '@/composables/useCounter';
import {defineComponent } from 'vue';


export default defineComponent({
    props: {
        value: { type: Number, required: true},
    },
    setup(props) {
        const {counter, squareCounter} = useCounter(props.value)
        

        return {
            counter,
            squareCounter
        }
    }
})






// import { ref, computed, defineComponent } from 'vue';


// export default defineComponent({
//     props: {
//         value: { type: Number, required: true},
//         text: {type: String, required: false}
//     },
//     setup(props) {
//         const counter = ref(props.value)
//         const squareCounter = computed(() => counter.value * counter.value );

//         return {
//             counter,
//             squareCounter
//         }
//     }
// })
