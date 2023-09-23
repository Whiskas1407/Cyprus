<script setup>

</script>
<template>
  <div class="banner">
    <div class="banner__info">
      <h3 class="banner__info-title">Project Name</h3>
      <h3 class="banner__info-price">от $170 000</h3>
      <p class="banner__info-more">
        подробней
        <img src="/static/icons/arrow-right-white.svg" alt="arrow" />
      </p>
    </div>
    <div class="banner__slider">
      <div class="banner__slider-item banner__slider-active"></div>
      <div class="banner__slider-item"></div>
      <div class="banner__slider-item"></div>
      <div class="banner__slider-item"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  display: flex;
  height: 45rem;
  padding: 6.4rem 15.7rem 2.4rem 15.7rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin: 6rem .8rem 0;
  border-radius: 3.2rem;
  background: linear-gradient(180deg, rgba(29, 33, 48, 0.50) 0%, rgba(29, 33, 48, 0.00) 96.14%), url('../../static/photo-banner.jpeg'), lightgray 50% / cover no-repeat;
  background-size: cover;
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
    align-self: stretch;
    &-title {
      font-family: PlayfairDisplay-Regular, sans-serif;
      color: $white;
      font-weight: 400;
    }
    &-price {
      font-family: HelveticaNeueCyr-Roman, sans-serif;
      color: $white;
      font-weight: 550;
    }
    &-more {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1.6rem;
      color: $white;
      img {
        width: .8rem;
      }
    }
  }
  &__slider {
    display: flex;
    align-items: flex-start;
    gap: .8rem;
    &-item {
      width: 6.4rem;
      height: .4rem;
      border-radius: 10rem;
      background-color: $white;
      opacity: .5;
    }
    &-active {
      opacity: 1;
    }
  }
}
</style>