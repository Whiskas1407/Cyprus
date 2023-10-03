<template>
  <header>
    <div class="header container">
      <img src="/static/logo.svg" alt="logo" class="header__logo" />
      <div class="header__contacts">
        <div class="header__contacts-number">
          <img class="header__contacts-number-country" src="/static/icons/ru.svg" alt="ru" />
          <h5 class="header__contacts-number-text">+7 (495) 055-95-37</h5>
          <img class="header__contacts-number-arrow" src="/static/icons/down.svg" alt="down" />
        </div>
        <div class="header__contacts-language">
          <h5 class="header__contacts-language-item header__contacts-language-item-active">ru</h5>
          <h5 class="header__contacts-language-item">eng</h5>
        </div>
        <div class="header__contacts-currency">
          <p class="header__contacts-currency-value">RUB ₽</p>
          <img class="header__contacts-currency-arrow" src="/static/icons/down.svg" alt="down" />
        </div>
        <div class="header__contacts-social">
          <img class="header__contacts-icons" src="/static/icons/telegram.svg" alt="tg" />
          <img class="header__contacts-icons" src="/static/icons/whatsapp.svg" alt="ws" />
        </div>
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
  border-bottom: .1rem solid $blue-300;
  background: rgba(255, 255, 255, 0.90);
  backdrop-filter: blur(1rem);
  &__logo {
    width: 16rem;
  }
  &__contacts {
    display: flex;
    align-items: center;
    grid-column-gap: 1.6rem;
    &-social {
      display: flex;
      align-items: center;
      gap: .8rem;
    }
    &-number {
      display: flex;
      padding: .8rem 1.2rem;
      align-items: center;
      gap: 1rem;
      &-country {
        width: 2.2rem;
      }
      &-text {
      }
      &-arrow {
        width: 1.2rem;
      }
    }
    &-language {
      display: flex;
      padding: .8rem 1.2rem;
      align-items: center;
      &-item {
        color: $gray-700;
        &:first-child {
          border-right: .2rem solid $blue-400;
          padding-right: .6rem;
        }
        &:nth-child(2) {
          padding-left: .6rem;
        }
        &-active {
          color: $violet;
        }
      }
    }
    &-currency {
      display: flex;
      padding: .8rem 1.2rem;
      align-items: center;
      gap: .4rem;
      &-value {
      }
      &-arrow {
        width: 1.2rem;
      }
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