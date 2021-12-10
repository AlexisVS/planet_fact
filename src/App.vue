<template>
  <main class="bg-gray-900">
    <Menu />
    <router-view :key="this.$route.params.planet"/>
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
