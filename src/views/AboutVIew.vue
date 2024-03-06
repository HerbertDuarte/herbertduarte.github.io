<script setup>
import ViewTitle from '@/components/ViewTitle.vue';
import { Download, UserRoundPlusIcon } from 'lucide-vue-next';
</script>
<template>
  <section id="about">
    <ViewTitle> Sobre mim </ViewTitle>

    <p class="py-10 leading-8">
      <UserRoundPlusIcon
        :stroke-width="2.2"
        :size="32"
        class="inline text-purple-500 pb-1.5"
      />
      Eu me chamo <span class="text-purple-500">Herbert Duarte</span>, sou
      baiano, tenho 21 anos e resido atualmente no município de Vitória da
      Conquista - BA. Sou um entusiasta da tecnologia, apaixonado por exatas e
      estudante de programação. Estou matriculado no curso de Bacharelado em
      <span class="text-purple-500">Sistemas de Informação</span> no Instituto
      Federal de Educação, Ciência e Tecnologia da Bahia (IFBA).
    </p>

    <div class="flex flex-col gap-8 justify-center items-center">
      <img
        class="w-80 aspect-square object-cover bg-purple-500 rounded-full rounded-bl-[40rem] shadow-md shadow-purple-500/50"
        src="/herbert.png"
        alt="Foto de perfil de Herbert Duarte"
      />
      <a href="/public/donwloads/Currículo-Herbert_Duarte.pdf" download class="flex items-center gap-1.5 hover:text-purple-500 group mt-5 pr-2">
        <Download class="text-purple-500 pb-0.5 "/>
        <p class="group-hover:underline">
          Donwload CV
        </p>
      </a>
    </div>
  </section>
</template>
