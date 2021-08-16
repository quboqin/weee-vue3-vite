<template>
  <van-swipe class="home-swipe" :autoplay="3000" indicator-color="#1baeae">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.carouselUrl" alt="" @click="onClick(item.redirectUrl)" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'swiper',
  props: {
    list: Array,
  },
  setup() {
    function onClick(url: string) {
      window.open(url)
    }
    return {
      onClick,
    }
  },
})
</script>

<style lang="less" scoped>
.home-swipe {
  margin: 92px 0 0 0;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
