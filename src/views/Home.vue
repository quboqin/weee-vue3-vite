<template>
  <div>
    <header class="home-header wrap">
      <div class="deliver-bar">
        <div class="address">
          <div class="icon"><van-icon name="location" size="1.5rem" /></div>
          <div class="text">
            <div class="city">Folsom</div>
            <div class="post-code">95630</div>
          </div>
        </div>
        <div class="deliver-date">
          <div></div>
          <div>送货日 周四 7/1</div>
          <div class="clock"><van-icon name="clock" size="1rem" /></div>
        </div>
        <div class="cart"><van-icon name="shopping-cart" size="1.5rem" /></div>
      </div>
      <div class="search-bar">
        <van-search
          v-model="value"
          placeholder="请输入要搜索的商品"
          background="#4fc08d00"
          shape="round"
        />
      </div>
    </header>
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
    <div class="good">
      <header class="good-header">新品上线</header>
      <van-skeleton title :row="3" :loading="loading">
        <div class="good-box">
          <div
            class="good-item"
            v-for="item in newGoodses"
            :key="item.goodsId"
            @click="goToDetail(item)"
          >
            <img :src="item.goodsCoverImg" alt="" />
            <div class="good-desc">
              <div class="title">{{ item.goodsName }}</div>
              <div class="price">¥ {{ item.sellingPrice }}</div>
            </div>
          </div>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Swiper from '@/components/Swiper.vue'

import carousel from '../mock/carousel.json'
import category from '../mock/category.json'
import goods from '../mock/goods.json'

export default defineComponent({
  name: 'home',
  components: {
    Swiper,
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
@import '../common/style/mixin';
.home-header {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 110px);
  background: rgba(194, 194, 194, 0.486);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: bottom;
  // align-content: flex-start;
  padding: 0 5px;
  .boxSizing();
  font-size: 15px;
  z-index: 10000;
  .deliver-bar {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .address {
      flex-grow: 3;
      flex-shrink: 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      .icon {
        flex-basis: auto;
      }
      .text {
        flex-basis: auto;
        display: flex;
        flex-flow: column;
        .city {
          font-size: 12px;
          font-weight: 600;
          color: #666;
          line-height: 12px;
          flex-basis: 100%;
        }
        .post-code {
          font-size: 12px;
          font-weight: 600;
          color: #666;
          line-height: 12px;
          flex-basis: 100%;
        }
      }
    }
    .deliver-date {
      flex-grow: 6;
      flex-shrink: 1;
      display: flex;
      .wh(100%, 20px);
      line-height: 20px;
      margin: 5px 5px;
      padding: 5px 0px;
      justify-content: space-around;
      color: #232326;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      .clock {
        text-align: center;
      }
    }
    .cart {
      flex-grow: 1;
      flex-shrink: 0;
      text-align: center;
    }
  }
  .search-bar {
    width: 100%;
  }
}
.category-list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 13px;
  div {
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    img {
      .wh(36px, 36px);
      margin: 13px auto 8px auto;
    }
    span {
      font-size: 12px;
    }
  }
}
.good {
  .good-header {
    background: #f9f9f9;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: @primary;
    font-size: 16px;
    font-weight: 500;
  }
  .good-box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .good-item {
      box-sizing: border-box;
      width: 50%;
      border-bottom: 1px solid #e9e9e9;
      padding: 10px 10px;
      img {
        display: block;
        width: 120px;
        margin: 0 auto;
      }
      .good-desc {
        text-align: center;
        font-size: 14px;
        padding: 10px 0;
        .title {
          color: #222333;
        }
        .price {
          color: @primary;
        }
      }
      &:nth-child(2n + 1) {
        border-right: 1px solid #e9e9e9;
      }
    }
  }
}
</style>
