<script setup>
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  Phone,
  YoutubeIcon,
} from 'lucide-vue-next';
import FormEmail from '@/components/FormEmail.vue';
</script>
<template>
  <footer id="footer" class="flex justify-center items-center border-t border-main-smooth">
    <div class="w-full flex lg:flex-row flex-col justify-center items-start gap-12 lg:gap-10 max-w-5xl py-3">
      <div class="flex-1">
        <h3 class="text-xl font-medium py-3">Contatos</h3>
        <p>
          Nessa seção reuni os links dos meus contatos profissionais para uma
          abordagem mais formal.
        </p>

        <div class="py-6 space-y-1">
          <p class="text-nowrap">
            <Phone :stroke-width="2.2" :size="18" class="inline text-letter mr-1" />
            (77) 99985-1621
          </p>
          <p class="text-nowrap">
            <MailIcon :stroke-width="2.2" :size="18" class="inline text-letter mr-1" />
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
            <a href="https://www.linkedin.com/in/herbert-duarte-8534b71a2/" target="_blank">
              <LinkedinIcon :stroke-width="2.2" :size="32" class="pb-1.5 inline" />
            </a>
          </div>
          <div>
            <a href="https://github.com/HerbertDuarte" target="_blank">
              <GithubIcon :stroke-width="2.2" :size="32" class="pb-1.5 inline" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/herbert.14_/" target="_blank">
              <InstagramIcon :stroke-width="2.2" :size="32" class="pb-1.5 inline" />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCT59PMPjgWLvLUzpxYq9tkg" target="_blank">
              <YoutubeIcon :stroke-width="2.2" :size="32" class="pb-1.5 inline" />
            </a>
          </div>
        </div>
      </div>
      <!-- ------------------------------------- -->
      <FormEmail />
    </div>
  </footer>
</template>
