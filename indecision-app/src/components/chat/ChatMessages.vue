<template>
      
      <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
         <!-- Messages go here -->
          <!-- v-bind:message lo que hara es bindear todo el resto de las propierties sin la necesidad de pasar uno por uno al componente -->
          <ChatBubble
          v-for="message in messages"
          :key="message.id"
          v-bind="message"  
          ></ChatBubble>
          <!-- :its-mine="message.itsMine"
          :message="message.message"
          :image="message.image" -->
          
          <!-- <ChatBubble :its-mine="true" message="Hola mundo"></ChatBubble> -->
          <!-- <ChatBubble :its-mine="false" message="no" image="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnZodmtmbW56Znh4NjZkMWt6dXN3YTB4Ym55aTJraWxucWhuNGF5NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j7fGvdCDM4DUjEIjJk/giphy.gif"></ChatBubble> -->
        </div>
      </div>
</template>


<script setup lang="ts">
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import ChatBubble from "./ChatBubble.vue"

interface Props {
  messages: ChatMessage[];
}
defineProps<Props>();
</script>