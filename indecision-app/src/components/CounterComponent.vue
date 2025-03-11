<template>
  <section>
    <h3>counter: {{ counter }}</h3>
    <h3>squeare: {{ squareCounter }}</h3>

    <!-- <h1>{{ text }}</h1> -->
    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
////  LOGICA USANDO COMPOSABLE FUNCTIONS  /////
import { useCounter } from '../composables/useCounter'

interface Props {
  value: number
}
const props = defineProps<Props>()

const {counter, squareCounter} = useCounter(10)






///////    OTRA LOGICA SIN USAR COMPOSABLE FUNCTIONS  ///////
// import { ref, computed } from 'vue'

// const props = defineProps({ value: { type: Number, required: true } })
// const props = defineProps<{value: Number}> ();



// interface Props {
//   value: number
//   text: string
// }
// const props = defineProps<Props>()

// const counter = ref(props.value)
// const squareCounter = computed(() => counter.value * counter.value)
</script>

<style scoped>

@import "./../main.css";
/* De esta manera se pueden aplicar estilos sin tener todas las clases de tailwind dentro del html (ya no se usa la palabra apply sino reference) */ 
/* Funciona siempre y cuando importes el global.css (o main.css en este caso) */
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700 mr-4;
}
</style>
