<script setup>
import Item from '../ui/Item.vue'
</script>
<template>
  <div class="projects container">
    <div class="projects__text">
      <h2 class="projects__text-title">Лучшие проекты</h2>
      <h4 class="projects__text-subtitle">
        Описание секции. Проекты сразу после старта продаж и проекты, завоевавшие сердца людей, попадают на главную страницу.
      </h4>
    </div>
    <div class="projects__items">
      <Item />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.projects {
  padding-top: 12.8rem;
  padding-bottom: 12.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5.4rem;
  align-self: stretch;
  &__text {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
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
    gap: 4rem;
    align-self: stretch;
  }
}
</style>