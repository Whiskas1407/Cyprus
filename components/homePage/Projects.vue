<script setup>
import Item from '../ui/Item.vue'
import Review from '../homePage/Review.vue'
</script>
<template>
  <div class="projects container">
    <div class="projects__text">
      <h2 class="projects__text-title">Лучшие проекты</h2>
      <h4 class="projects__text-subtitle">
        Мы отобрали для вас самые интересные проекты на острове
      </h4>
    </div>
    <div class="projects__items">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
    <Review />
    <button class="projects__button">Смотреть все проекты <img src="/static/icons/plus.svg" alt="plus" /></button>
  </div>
</template>
<style lang="scss" scoped>
.projects {
  padding-top: 13.4rem;
  padding-bottom: 12.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.6rem;
  align-self: stretch;
  &__text {
    display: flex;
    align-items: flex-start;
    gap: 2.4rem;
    align-self: stretch;
    &-title {
      font-family: PlayfairDisplaySC-Regular, sans-serif;
      flex: 1 0 0;
    }
    &-subtitle {
      color: $gray-800;
      line-height: 120%;
      width: 54rem;
    }
  }
  &__items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
  }
  &__button {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 1.2rem;
    background: $blue-300;
    padding: 2.4rem 0;
    color: $violet;
    justify-content: center;
  }
}
</style>