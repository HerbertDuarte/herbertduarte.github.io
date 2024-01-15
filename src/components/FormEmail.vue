<script setup>
import { SendHorizonalIcon } from "lucide-vue-next";
import { ref } from "vue";
import FormData from "form-data";

const DOMAIN = "sandbox1eaa04f7e56849aa888cdab947e0ab85.mailgun.org";
const API_KEY = "b3835468af792a8138ab5cda7484c5a2-4c955d28-4e40de33";
const endpoint = `https://api.mailgun.net/v3/${DOMAIN}/messages`;

const form = ref({
  email: "",
  content: "",
});

async function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("from", form.value.email);
  formData.append("to", "herbertduarte.santos@gmail.com");
  formData.append("subject", "Mensagem do Portifólio");
  formData.append("text", form.value.content);

  try {
    const reponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`api:${API_KEY}`)}`,
      },
      body: formData,
    });

    console.log(reponse);
  } catch (error) {
   console.log(error);
  }
}
</script>
<template>
  <form @submit="handleSubmit" class="flex-1 w-full">
    <div class="w-full flex justify-between items-start py-3">
      <h3 class="text-xl font-medium">Fale comigo</h3>
      <button type="submit" class="bg-zinc-900 rounded-md py-2 px-3 text-white">
        <SendHorizonalIcon :stroke-width="2.2" :size="16" class="inline" />
      </button>
    </div>
    <div class="space-y-4">
      <input
        type="email"
        v-model="form.email"
        name="email"
        required
        placeholder="Digite seu email"
        class="w-full rounded-md bg-zinc-900 p-2"
      />
      <textarea
        type="text"
        v-model="form.content"
        name="content"
        required
        placeholder="Digite uma mensagem"
        class="w-full resize-none h-32 rounded-md bg-zinc-900 p-2"
      ></textarea>
    </div>
  </form>
</template>
