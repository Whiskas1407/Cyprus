<script setup>
import Calendar from '../../static/calendar-plus.svg'
import Invest from '../../static/invest-image.svg'
import Passport from '../../static/icons/passport.svg'
import House from '../../static/icons/real-estate.svg'
import AllObject from '../../static/photo-9.png'
import Plus from '../../static/icons/plus-yellow.svg'
const items = [
  {
    id: 1,
    image: Calendar,
    title: 'Готовы к сдаче в 2023',
    background: null
  },
  {
    id: 2,
    image: Invest,
    title: 'Для инвестиций',
    background: null
  },
  {
    id: 3,
    image: Passport,
    title: 'Для ВНЖ',
    background: null
  },
  {
    id: 4,
    image: House,
    title: 'Старт продаж',
    background: null
  },
  {
    id: 5,
    image: Plus,
    title: 'Все объекты',
    background: AllObject
  },
]
</script>
<template>
  <div class="type container">
    <div class="type__item" :style="item.background ? `background-image: url('${item.background}')` : ''" v-for="item of items" :key="item.id">
      <img :src="item.image" alt="image" class="type__item-image" />
      <h5 class="type__item-title" :style="item.background ? 'color: #FFF' : ''">{{ item.title }}</h5>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.type {
  display: flex;
  align-items: flex-start;
  gap: .8rem;
  &__item {
    display: flex;
    padding: 2.4rem 2.4rem 1.6rem 2.4rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 5.6rem;
    flex: 1 0 0;
    border-radius: 1.6rem;
    background: $blue-300;
    img {
      width: 2.4rem;
    }
  }
}
</style>