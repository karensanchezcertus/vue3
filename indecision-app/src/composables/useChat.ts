import type { ChatMessage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no.response";
import { ref } from "vue";

export const useChat= () => {

    const messages = ref<ChatMessage[]>([]);
    // const messages = ref<ChatMessage[]>([
    //     {
    //       id: new Date().getTime()+1,
    //       message: 'Hola Mundo',
    //       itsMine:true
    //     },
    //     {
    //       id: new Date().getTime()+1,
    //       message: 'Quieres ir por unos tacos??',
    //       itsMine:true
    //     },
    //     {
    //       id: new Date().getTime()+1,
    //       message: 'No',
    //       itsMine:false,
    //       image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZodmtmbW56Znh4NjZkMWt6dXN3YTB4Ym55aTJraWxucWhuNGF5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j7fGvdCDM4DUjEIjJk/giphy.gif'
    //     },
    //   ]);
      
    const getHerResponse= async() => {
        const resp = await fetch('https://yesno.wtf/api')
        const data = (await resp.json()) as YesNoResponse;

        return data
    }
      const onMessage = async (text:string)=> {
        if(text.length=== 0) return
        messages.value.push({
          id: new Date().getTime(),
          itsMine: false,
          message: text
        })

        //evaluar si termina en signo de interrogacion
        if (!text.endsWith('?')) return;
        const {answer, image} = await getHerResponse()
        messages.value.push({
            id: new Date().getTime(),
            itsMine:false,
            message: answer
        })
      }


    return {
        // propierties
        messages,

        //Methods 
        onMessage
    }

}