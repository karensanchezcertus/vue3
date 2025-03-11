const { createApp, ref } = Vue;


const app = createApp ({
    // template: `
    //     <h1>{{message}}</h1>
    //     <p>- {{ author }}</p>
    // `,

    setup() {
        const author = ref('another')
        const message = ref('Im batman')

        setTimeout(()=> {
            author.value = 'soy psyduck'
            message.value = 'soy golem'
        }, 1000);

        const changeQuote= () => {
            message.value = 'Hola, soy Golem'
            author.value = 'Pikachu'
        }

        return {
            message,
            author,
            changeQuote
        }
    }
})

app.mount('#myApp')