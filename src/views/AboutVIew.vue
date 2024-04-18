<script setup>
import ViewTitle from '@/components/ViewTitle.vue';
import { Download, UserRoundPlusIcon } from 'lucide-vue-next';
</script>
<template>
  <section id="about">
    <ViewTitle> Sobre mim </ViewTitle>

    <p class="py-10 leading-8">
      <UserRoundPlusIcon :stroke-width="2.2" :size="32" class="inline text-primary pb-1.5" />
      Eu me chamo <span class="text-primary">Herbert Duarte</span>, sou
      baiano, tenho 21 anos e resido atualmente no município de Vitória da
      Conquista - BA. Sou um entusiasta da tecnologia, apaixonado por exatas e
      estudante de programação. Estou matriculado no curso de Bacharelado em
      <span class="text-primary">Sistemas de Informação</span> no Instituto
      Federal de Educação, Ciência e Tecnologia da Bahia (IFBA).
    </p>

    <div class="flex flex-col gap-8 justify-center items-center">
      <img
        class="w-80 aspect-square object-cover bg-primary rounded-full rounded-bl-[40rem] shadow-md shadow-primary/50"
        src="/herbert.png" alt="Foto de perfil de Herbert Duarte" />
      <a href="/donwloads/cv-herbert-duarte.pdf" download="Currículo Herbert Duarte.pdf"
        class="flex items-center gap-1.5 hover:text-primary group mt-5 pr-2">
        <Download class="text-primary pb-0.5 " />
        <p class="group-hover:underline">
          Donwload CV
        </p>
      </a>
    </div>
  </section>
</template>
