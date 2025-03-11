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

<!-- sin tener que hacer single file component, separando la logica ts en su propio archivo-->
<script lang="ts" src="./CounterComponentScript2.ts"></script><style scoped>
h1 {
    color: green;
}
</style>