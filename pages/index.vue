<script setup>
import Filter from './../components/homePage/Filter.vue'
import TypeHouse from './../components/homePage/typeHouse.vue'
import Banner from './../components/homePage/Banner.vue'
import Projects from './../components/homePage/Projects.vue'
</script>
<template>
  <div class="home">
    <h1 class="home__title container">Поиск по всем новостройкам кипра <span>ОТ 100 000$</span></h1>
    <Filter />
    <TypeHouse />
    <Banner />
    <Projects />
  </div>
</template>
<style lang="scss" scoped>
.home {
  padding-top: 9.6rem;
  padding-bottom: 20rem;
  &__title {
    font-family: PlayfairDisplaySC-Regular, sans-serif;
    text-align: center;
    line-height: 100%;
    text-transform: uppercase;
    letter-spacing: -0.1rem;
    span {
      font-family: PlayfairDisplaySC-Italic, sans-serif;
      color: $violet;
    }
  }
}
</style>