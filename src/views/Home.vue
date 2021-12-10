<template>
  <div
    class="min-h-screen w-full bg-gray-900 overflow-hidden"
    :style="{ backgroundImage: 'url(' + require('@/assets/background-stars.svg') + ')' }"
  >
    <div class="w-6/12 mx-auto text-white min-h-screen flex items-center justify-between">
      <img class="w-6/12" :src="require('@/assets/' + getPlanet.images.planet)" alt />
      <div class="w-4/12 flex flex-col">
        <h1 class="text-5xl font-bold">{{ getPlanet.name }}</h1>
        <p class="text-sm text-justify my-7">{{ getPlanet.infos[0].content }}</p>
        <!-- Wikipedia -->
        <div class="flex items-center text-gray-500 space-x-2 mb-8">
          <span>Source :</span>
          <a :href="getPlanet.infos[0].source" class="font-bold underline">Wikipedia</a>
          <img :src="require('@/assets/icon-source.svg')" alt />
        </div>
        <!-- Buttons -->
        <button
          v-for="(info, index) in getPlanet.infos"
          :key="getPlanet.name + '-' + info.name"
          :class="'w-full bg-transparent py-2 flex items-center justify-start border border-opacity-40 transition duration-1000 border-solid border-white my-2 ' + 'hover:bg-' + getPlanet.color + '-400'"
        >
          <span class="text-gray-600 font-bold mx-6">0{{ index }}</span>
          <span class="font-bold text-white uppercase">{{ info.name }}</span>
        </button>
        <div class="bg-yellow-400 hover:bg-yellow-400"></div>
      </div>
    </div>
  </div>
</template>

<script>
import planets from "../store"
export default {
  name: 'Home',
  data () {
    return {
      planets: planets.planets
    }
  },
  computed: {
    getPlanet () {
      return this.planets.find(e => e.slug == this.$route.params.slug)
    },
  }

}
</script>
