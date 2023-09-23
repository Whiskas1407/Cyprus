<template>
  <header>
    <div class="header container">
      <img src="/static/logo.svg" alt="logo" class="header__logo" />
      <div class="header__contacts">
        <h5 class="header__contacts-number">+7 (495) 055-95-37</h5>
        <h5 class="header__contacts-number">+7 (495) 055-95-37</h5>
        <img class="header__contacts-icons" src="/static/icons/telegram.svg" alt="tg" />
        <img class="header__contacts-icons" src="/static/icons/whatsapp.svg" alt="ws" />
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  &__logo {
    width: 16rem;
  }
  &__contacts {
    display: flex;
    align-items: center;
    grid-column-gap: .8rem;
    &-number {
      padding: 0 1.2rem;
    }
    &-icons {
      padding: .8rem;
      background-color: $violet;
      border-radius: 50%;
      width: 1.6rem;
    }
  }
}
</style>