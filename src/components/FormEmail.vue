<script setup>
import { SendHorizonalIcon } from 'lucide-vue-next';
import { ref } from 'vue';
const message = ref('');
</script>
<template>
  <form class="flex-1 w-full relative">
    <!-- <div
      v-if="loading"
      class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
    >
      <div
        class="border-[6px] border-purple-500 border-t-purple-900 rounded-full h-10 w-10 animate-spin"
      />
    </div> -->
    <div class="w-full flex justify-between items-center pt-1.5 pb-3">
      <h3 class="text-xl font-medium">Fale comigo</h3>
      <a
        target="_blank"
        :href="`https://api.whatsapp.com/send?phone=5577999851621&text=${message}`"
        class="bg-zinc-900 rounded-md py-1.5 px-3 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <SendHorizonalIcon :stroke-width="2.2" :size="16" class="inline" />
      </a>
    </div>
    <div class="space-y-4">
      <!-- <input
        type="email"
        name="email"
        required
        placeholder="Digite seu email"
        class="w-full rounded-md bg-zinc-900 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
      /> -->
      <textarea
        type="text"
        name="content"
        v-model="message"
        required
        placeholder="Digite uma mensagem"
        class="w-full resize-none h-40 rounded-md bg-zinc-900 p-2 disabled:opacity-50 disabled:cursor-not-allowed"
      ></textarea>
    </div>
  </form>
</template>
// import FormData from "form-data"; // const DOMAIN =
"sandbox1eaa04f7e56849aa888cdab947e0ab85.mailgun.org"; // const API_KEY =
"b3835468af792a8138ab5cda7484c5a2-4c955d28-4e40de33"; // const endpoint =
`https://api.mailgun.net/v3/${DOMAIN}/messages`; // const form = ref({ // email:
"", // content: "", // }); // const loading = ref(false); // async function
handleSubmit(e) { // e.preventDefault(); // const formData = new FormData(); //
formData.append("from", form.value.email); // formData.append("to",
"herbertduarte.santos@gmail.com"); // formData.append("subject", "Mensagem do
Portifólio"); // formData.append("text", form.value.content); // try { //
loading.value = true; // const reponse = await fetch(endpoint, { // method:
"POST", // headers: { // Authorization: `Basic ${btoa(`api:${API_KEY}`)}`, // },
// body: formData, // }); // console.log(await reponse.json()); // } catch
(error) { // console.log(error); // } // loading.value = false; // }
