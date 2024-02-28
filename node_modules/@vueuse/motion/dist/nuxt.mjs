import { defu } from 'defu';
import { defineNuxtModule, createResolver, addPlugin, addImportsDir } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@vueuse/motion",
    configKey: "motion"
  },
  defaults: {},
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    nuxt.options.runtimeConfig.motion = defu(nuxt.options.runtimeConfig?.motion || {}, options);
    addPlugin(resolve("./runtime/templates/motion"));
    addImportsDir(resolve("./runtime/composables"));
    if (!nuxt.options.build.transpile)
      nuxt.options.build.transpile = [];
    const transpileList = ["defu", "@vueuse/motion", "@vueuse/shared", "@vueuse/core"];
    transpileList.forEach((pkgName) => {
      if (!nuxt.options.build.transpile.includes(pkgName))
        nuxt.options.build.transpile.push(pkgName);
    });
  }
});

export { module as default };
