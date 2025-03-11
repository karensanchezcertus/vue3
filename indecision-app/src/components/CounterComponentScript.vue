<template>
    <section>
        <h3>counter: {{ counter }}</h3>
        <h3>squeare: {{ squareCounter }}</h3>

        <!-- <h1>{{ text }}</h1> -->
        <div>
            <button @click="counter++">+1</button>
            <button @click="counter--">-1</button>
        </div>
    </section>

</template>

<script lang="ts">
///  LOGICA IMPLEMENTADA CON COMPOSABLE FUNCTIONS   ///
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: { type: Number, required: true},
    },
    setup(props) {
        const {counter, squareCounter } = useCounter(props.value)
        return {
            counter,
            squareCounter
        }
    }
})




//LOGICA NORMAL//
// import { ref, computed, defineComponent } from 'vue';


// export default defineComponent({
//     props: {
//         value: { type: Number, required: true},
//         text: {type: String, required: false}
//     },
    // setup(props) {
    //     const counter = ref(props.value)
    //     const squareCounter = computed(() => counter.value * counter.value );

    //     return {
    //         counter,
    //         squareCounter
    //     }
    // }
// })

</script>

<style scoped>
h1 {
    color: green;
}
</style>