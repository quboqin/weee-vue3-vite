<template>
  <home-header />
  <swiper :list="swiperList"></swiper>
  <div class="container mx-auto flex flex-row flex-wrap justify-start">
    <div
      v-for="item in categoryList"
      v-bind:key="item.categoryId"
      @click="tips"
      class="flex-none w-1/5 py-1"
    >
      <img class="mx-auto h-12 w-12" :src="item.imgUrl" />
      <p class="text-sm text-center">{{ item.name }}</p>
    </div>
  </div>
  <div class="container mx-auto">
    <header class="text-center bg-gray-300 py-3">新品上线</header>
    <van-skeleton title :row="3" :loading="loading">
      <div class="flex flex-row flex-wrap justify-start">
        <good-box
          v-for="item in newGoodses"
          :key="item.goodsId"
          :item="item"
          @click="goToDetail(item)"
          class="w-1/2"
        >
        </good-box>
      </div>
    </van-skeleton>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import HomeHeader from '@/components/HomeHeader.vue'
import Swiper from '@/components/Swiper.vue'
import GoodBox from '@/components/GoodBox.vue'

import carousel from '../mock/carousel.json'
import category from '../mock/category.json'
import goods from '../mock/goods.json'

export default defineComponent({
  name: 'home',
  components: {
    Swiper,
    HomeHeader,
    GoodBox,
  },
  setup() {
    const state = reactive({
      swiperList: carousel,
      newGoodses: goods,
      categoryList: category,
      loading: false,
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="less" scoped></style>
