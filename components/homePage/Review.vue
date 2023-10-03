<script setup></script>
<template>
  <div class="review">
    <div class="review__block">
      <img src="/static/review.png" alt="review" class="review__image" />
      <div class="review__text">
        <h3 class="review__text-title">Обзоры объектов — в нашем Telegram</h3>
        <h5 class="review__text-subtitle">Подписывайтесь и узнайте больше о лучших объектах для жизни и инвестиций</h5>
      </div>
    </div>
    <button class="review__button">Подписаться</button>
  </div>
</template>
<style lang="scss" scoped>
.review {
  width: 95%;
  border-radius: 1.6rem;
  border: .1rem solid $blue-300;
  background: $blue-50;
  display: flex;
  padding: 2.4rem;
  align-items: center;
  gap: 2.4rem;
  justify-content: space-between;
  &__block {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  &__image {
    width: 18rem;
  }
  &__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    &-title {
      letter-spacing: -0.5px;
    }
    &-subtitle {
      letter-spacing: -0.2px;
    }
  }
  &__button {
    padding: 1.6rem 2.4rem;
    border-radius: 1.2rem;
    border: .1rem solid $border-button;
    background: none;
    color: $border-button;
  }
}
</style>