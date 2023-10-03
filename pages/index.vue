<script setup>
import Filter from './../components/homePage/Filter.vue'
import TypeHouse from './../components/homePage/typeHouse.vue'
import Banner from './../components/homePage/Banner.vue'
import Projects from './../components/homePage/Projects.vue'
import Guide from './../components/homePage/Guide.vue'
</script>
<template>
  <div class="home">
    <div class="home__text">
      <h2 class="home__title container">Поиск по всем</h2>
      <h2 class="home__title container">новостройкам <span>кипра</span></h2>
    </div>
    <Filter />
    <TypeHouse />
    <Banner />
    <Projects />
    <div class="container">
      <Guide />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  padding-top: 9.6rem;
  padding-bottom: 20rem;
  &__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__title {
    font-family: PlayfairDisplaySC-Regular, sans-serif;
    text-align: left;
    line-height: 100%;
    text-transform: uppercase;
    letter-spacing: -0.1rem;
    font-size: 8rem;
    &:nth-child(2) {
      margin-left: 16rem;
      white-space: nowrap;
    }
    span {
      font-family: PlayfairDisplaySC-Italic, sans-serif;
      color: $violet;
    }
  }
}
</style>