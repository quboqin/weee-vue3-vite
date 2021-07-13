<template>
  <home-header />
  <swiper :list="swiperList"></swiper>
  <div class="category-list">
    <div
      v-for="item in categoryList"
      v-bind:key="item.categoryId"
      @click="tips"
    >
      <img :src="item.imgUrl" />
      <span>{{ item.name }}</span>
    </div>
  </div>
  <div class="good-section">
    <header class="good-header">新品上线</header>
    <van-skeleton title :row="3" :loading="loading">
      <div class="goods">
        <good-box
          v-for="item in newGoodses"
          :key="item.goodsId"
          :item="item"
          @click="goToDetail(item)"
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

<style lang="less" scoped>
.category-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 12px;
  div {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    img {
      width: 36px;
      height: 36px;
      margin: 13px auto 8px auto;
    }
    span {
      font-size: 12px;
    }
  }
}
.good-section {
  .good-header {
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #1baeae;
    font-size: 16px;
    font-weight: 500;
  }
  .goods {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
}
</style>
