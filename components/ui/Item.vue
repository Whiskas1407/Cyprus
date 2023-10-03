<script setup>

</script>
<template>
  <div class="item">
    <div class="item__info">
      <div class="item__info-text">
        <h3 class="item__info-text-title">2br villas</h3>
        <div class="item__info-text-pin">
          <img src="/static/icons/pin.svg" alt="pin" />
          <h5>Limmassol, citycente</h5>
        </div>
        <div class="item__info-text-hashtag">
          <img src="/static/icons/hashtag.svg" alt="hashtag" />
          <h5>AR005</h5>
        </div>
        <div class="item__info-tabs">
          <p class="item__info-tab">подходит для ВНЖ</p>
          <p class="item__info-tab">уже сдан</p>
          <p class="item__info-tab">застройщик</p>
          <p class="item__info-tab">год сдачи</p>
        </div>
        <h5 class="item__info-text-subtitle">Project Name — описание проекта в несколько строк. Занимает максимум 3 строчки. Если больше, то текст скрывается за троеточием</h5>
        <div class="item__info-text-price">
          <h3 class="item__info-text-price-title">от $170 000</h3>
          <p class="item__info-text-price-subtitle">Осталось 14 апартаментов</p>
        </div>
        <div class="item__info-text-buttons">
          <button class="item__info-text-send">Оставить заявку</button>
          <nuxt-link to="/" class="item__info-text-project">Страница проекта <img src="/static/icons/arrow-right-blue.svg" alt="arrow" /></nuxt-link>
        </div>
      </div>
    </div>
    <div class="item__images">
      <img src="/static/photo-3.png" alt="photo" class="item__images-first" />
      <div class="item__images-more">
        <img src="/static/photo-3.png" alt="photo" />
        <img src="/static/photo-3.png" alt="photo" />
      </div>
      <h5 class="item__images-count">
        +12
      </h5>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item {
  display: flex;
  align-items: flex-start;
  gap: 2.4rem;
  padding: 3.9rem 0;
  border-bottom: .1rem solid $blue-300;
  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
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
      gap: 1.2rem;
      &-title {
        font-family: PlayfairDisplay-Regular, sans-serif;
        text-transform: uppercase;
      }
      &-subtitle {
        font-family: HelveticaNeueCyr-Light, sans-serif;
        color: $gray-800;
        line-height: 140%;
        letter-spacing: -0.2px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
      }
      &-price {
        padding-top: 2.4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .8rem;
        align-self: stretch;
        &-title {
          font-family: HelveticaNeueCyr-Roman, sans-serif;
          letter-spacing: -0.5px;
        }
        &-subtitle {
          color: $gray-800;
          font-family: HelveticaNeueCyr-Light, sans-serif;
        }
      }
      &-pin {
        display: flex;
        align-items: center;
        gap: .8rem;
        img {
          width: 1.6rem;
        }
        h5 {
          color: $gray-800;
        }
      }
      &-hashtag {
        display: flex;
        align-items: center;
        gap: .8rem;
        img {
          width: 1.6rem;
        }
        h5 {
          color: $violet;
        }
      }
      &-buttons {
        display: flex;
        align-items: center;
        padding-top: .6rem;
        gap: 2.4rem;
      }
      &-send {
        padding: 1.4rem 2.2rem;
        justify-content: center;
        align-items: center;
        display: flex;
        border-radius: 1.2rem;
      }
      &-project {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        color: $violet;
        img {
          width: 1.6rem;
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
    position: relative;
    &-more {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: .8rem;
      flex: 1 0 0;
      img {
        width: 36.7rem;
        height: 15.6rem;
        object-fit: cover;
        border-radius: .8rem;
      }
    }
    &-first {
      width: 36.7rem;
      height: 32rem;
      object-fit: cover;
      border-radius: .8rem;
    }
    &-count {
      position: absolute;
      bottom: .4rem;
      right: .4rem;
      border-radius: .6rem;
      border: .1rem solid rgba(255, 255, 255, 0.10);
      background: $white;
      color: $violet;
      display: flex;
      padding: 0.4rem 0.8rem 0.4rem 0.8rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>