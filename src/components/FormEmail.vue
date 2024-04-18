<script setup>
import { SendHorizonalIcon } from 'lucide-vue-next';
import { ref } from 'vue';
const message = ref('');
</script>
<template>
  <form class="flex-1 w-full relative">
  
    <div class="w-full flex justify-between items-center pt-1.5 pb-3">
      <h3 class="text-xl font-medium">Fale comigo</h3>
      <a target="_blank" :href="`https://api.whatsapp.com/send?phone=5577999851621&text=${message}`"
        class="bg-zinc-900 rounded-md py-1.5 px-3 text-white disabled:opacity-50 disabled:cursor-not-allowed">
        <SendHorizonalIcon :stroke-width="2.2" :size="16" class="inline" />
      </a>
    </div>
    <div class="space-y-4">

      <textarea type="text" name="content" v-model="message" required placeholder="Digite uma mensagem"
        class="w-full resize-none h-40 rounded-md bg-zinc-900 p-2 disabled:opacity-50 disabled:cursor-not-allowed"></textarea>
    </div>
  </form>
</template>