<script setup>
import Select from './../ui/SelectFilter.vue'

let filters = [
  {
    id: 1,
    title: 'Тип жилья'
  },
  {
    id: 2,
    title: 'Регион'
  },
  {
    id: 3,
    title: 'Количество комнат'
  },
  {
    id: 4,
    title: 'Бюджет'
  },
]
</script>
<template>
  <div class="container">
    <div class="filter">
      <div class="filter__select">
        <Select v-for="filter of filters" :key="filter.id" :item="filter" />
      </div>
      <button class="filter__search">
        Искать
        <img src="/static/icons/loupe.svg" alt="search" />
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .filter {
    margin: 6rem 0;
    padding: 1.6rem;
    border-radius: 1.6rem;
    border: .1rem solid $blue-300;
    box-shadow: 0 1rem 3rem 0 rgba(86, 103, 234, 0.20);
    display: flex;
    align-items: center;
    grid-column-gap: .8rem;
    &__select {
      display: flex;
      align-items: flex-start;
      gap: .8rem;
      flex: 10 0 0;
    }
    &__search {
      display: flex;
      align-items: center;
      width: 9.3rem;
      justify-content: center;
      padding: 2.1rem 3.2rem;
      gap: 1rem;
      flex: 1 0 0;
      img {
        width: 2.4rem;
      }
    }
  }
</style>