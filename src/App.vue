<script setup>
import { RouterView } from "vue-router";
import MyHeader from "./layout/MyHeader.vue";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  Phone,
  Send,
  SendHorizonalIcon,
  SendIcon,
  YoutubeIcon,
} from "lucide-vue-next";
</script>

<template>
  <MyHeader />
  <RouterView />
  <footer class="p-12 flex justify-center items-center border-t border-zinc-700">
    <div class="w-full flex justify-center items-start gap-10 max-w-5xl">
      <div class="flex-1">
        <h3 class="text-xl font-medium py-3">Contatos</h3>
        <p>
          Nessa seção reuni os links dos meus contatos profissionais para uma
          abordagem mais formal.
        </p>

        <div class="py-6 space-y-1">
          <p class="text-nowrap">
            <Phone
              :stroke-width="2.2"
              :size="18"
              class="inline text-white mr-1"
            />
            (77) 99985-1621
          </p>
          <p class="text-nowrap">
            <MailIcon
              :stroke-width="2.2"
              :size="18"
              class="inline text-white mr-1"
            />
            herbertduarte.santos@gmail.com
          </p>
        </div>
      </div>
      <!-- ------------------------------------- -->
      <div class="flex-1">
        <h3 class="text-xl font-medium py-3">Redes Sociais</h3>
        <p>
          Aqui estão minhas redes sociais. Nelas você poderá conhecer um pouco
          mais sobre mim, minhas rotinas, meus novos projetos e também conteúdos
          de tecnologia e programação.
        </p>

        <div class="py-4 flex gap-2">
          <div>
            <a
              href="https://www.linkedin.com/in/herbert-duarte-8534b71a2/"
              target="_blank"
            >
              <LinkedinIcon
                :stroke-width="2.2"
                :size="32"
                class="pb-1.5 inline"
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/HerbertDuarte" target="_blank">
              <GithubIcon
                :stroke-width="2.2"
                :size="32"
                class="pb-1.5 inline"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/herbert.14_/" target="_blank">
              <InstagramIcon
                :stroke-width="2.2"
                :size="32"
                class="pb-1.5 inline"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.youtube.com/channel/UCT59PMPjgWLvLUzpxYq9tkg"
              target="_blank"
            >
              <YoutubeIcon
                :stroke-width="2.2"
                :size="32"
                class="pb-1.5 inline"
              />
            </a>
          </div>
        </div>
      </div>
      <!-- ------------------------------------- -->
      <div class="flex-1">
        <div class="w-full flex justify-between items-start py-3">
          <h3 class="text-xl font-medium">Fale comigo</h3>
          <button class="bg-zinc-900 rounded-md py-2 px-3 text-white">
            <SendHorizonalIcon :stroke-width="2.2" :size="16" class="inline" />
          </button>
        </div>
        <form class="space-y-4">
          <input
            placeholder="Digite seu email"
            class="w-full rounded-md bg-zinc-900 p-2"
            type="text"
          />
          <textarea
            placeholder="Digite uma mensagem"
            class="w-full resize-none h-32 rounded-md bg-zinc-900 p-2"
          ></textarea>
        </form>
      </div>
    </div>
  </footer>
</template>
