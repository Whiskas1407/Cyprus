<script setup>

</script>
<template>
  <div class="item">
    <div class="item__info">
      <div class="item__info-text">
        <h3 class="item__info-text-title">Project Name</h3>
        <div class="item__info-tabs">
          <p class="item__info-tab">подходит для ВНЖ</p>
          <p class="item__info-tab">уже сдан</p>
          <p class="item__info-tab">застройщик</p>
          <p class="item__info-tab">год сдачи</p>
        </div>
        <h5 class="item__info-text-subtitle">Project Name — описание проекта в несколько строк. </h5>
        <div class="item__info-text-price">
          <h3 class="item__info-text-price-title">от $170 000</h3>
          <p class="item__info-text-price-subtitle">Осталось 14 апартаментов</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  &__info {
    display: flex;
    width: 35rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    &-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.6rem;
      &-title {
        font-family: PlayfairDisplay-Regular, sans-serif;
      }
      &-subtitle {
        font-family: HelveticaNeueCyr-Light, sans-serif;
        color: $gray-800;
      }
      &-price {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .8rem;
        align-self: stretch;
        &-title {
          font-family: HelveticaNeueCyr-Roman, sans-serif;
        }
        &-subtitle {
          color: $gray-800;
          font-family: HelveticaNeueCyr-Light, sans-serif;
        }
      }
    }
    &-tabs {
      display: flex;
      align-items: flex-start;
      align-content: flex-start;
      gap: .4rem;
      align-self: stretch;
      flex-wrap: wrap;
    }
    &-tab {
      display: flex;
      padding: .4rem;
      align-items: flex-start;
      border-radius: .4rem;
      background: $blue-300;
      font-size: 1.2rem;
    }
    &-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__images {
    display: flex;
    align-items: flex-start;
    gap: .8rem;
    flex: 1 0 0;
    &-more {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: .8rem;
      flex: 1 0 0;
    }
  }
}
</style>