<script setup>
const props = defineProps(['item'])
</script>
<template>
  <div class="select">
    <h5 class="select__title">{{ item.title }}</h5>
    <img class="select__image" src="/static/icons/polygon.svg" alt="polygon" />
  </div>
</template>
<style lang="scss" scoped>
.select {
  display: flex;
  border-radius: 1.2rem;
  border: .1rem solid $blue-400;
  background: $blue-50;
  padding: 2.4rem 1.6rem;
  align-items: center;
  gap: 3.4rem;
  &__image {
    width: 1.2rem;
  }
}
</style>