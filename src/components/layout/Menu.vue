<template>
  <div
    class="w-full flex justify-between items-center py-4 border-b-1 border-opacity-30 border-white bg-gray-900 absolute top-0 left-0"
  >
    <span class="text-2xl text-white uppercase ml-12">The planets</span>
    <nav class="flex items-center justify-around space-x-6 mr-12">
      <router-link
        v-for="planet in planets"
        :key="planet.slug"
        :to="'/' + planet.slug"
        class="text-gray-300 hover:text-white uppercase font-semibold"
      >{{ planet.name }}</router-link>
    </nav>
  </div>
</template>

<script>
import planets from '../../store'
export default {
  data () {
    return {
      planets: planets.planets,
    }
  }
}
</script>

<style>
.router-link-active,
.router-link-exact-active {
  color: white;
}
</style>