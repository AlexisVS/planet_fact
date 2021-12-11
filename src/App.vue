<template>
  <main class="bg-gray-900">
    <Menu />
    <router-view :key="this.$route.params.slug + '-' + this.$route.params.info" />
  </main>
</template>

<script>
import Menu from "./components/layout/Menu.vue";
export default {
  name: "App",
  components: { Menu },
  data: () => ({
    //
  }),
};
</script>
