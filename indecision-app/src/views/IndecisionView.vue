
<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
      <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
        <span>Mi esposa</span>
      </div>
      <!-- Chat messages -->
       <ChatMessages :messages="messages"></ChatMessages>
      <!-- Message box -->
      <MessageBox @send-messages="onMessage($event)"></MessageBox>
    </div>
  </template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

// traer composable useChat
const { messages, onMessage } = useChat();

</script>
