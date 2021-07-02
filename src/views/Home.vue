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

export default defineComponent({
  name: 'home',
  components: {
    Swiper,
  },
  setup() {
    const state = reactive({
      swiperList: [
        {
          carouselUrl:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-mate40.png',
          redirectUrl: 'https://juejin.im/book/6844733826191589390',
        },
        {
          carouselUrl:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner1.png',
          redirectUrl: 'https://juejin.im/book/6844733826191589390',
        },
        {
          carouselUrl:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner2.png',
          redirectUrl: 'https://juejin.im/book/6844733826191589390',
        },
      ],
      recommends: [],
      newGoodses: [
        {
          goodsId: 10909,
          goodsName: 'HUAWEI Mate 40 Pro+ 5G 全网通 12G...',
          goodsIntro: '5nm麒麟9000旗舰芯片 | 超感光徕卡电...',
          goodsCoverImg:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png',
          sellingPrice: 7988,
          tag: '跃见非凡',
        },
        {
          goodsId: 10908,
          goodsName: 'HUAWEI Mate 40 Pro 全网通5G手机 8GB...',
          goodsIntro: '5nm麒麟9000旗舰芯片 | 超感光徕卡电...',
          goodsCoverImg:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40-white.png',
          sellingPrice: 6488,
          tag: '跃见非凡',
        },
        {
          goodsId: 10902,
          goodsName: '华为 HUAWEI P40 冰霜银 全网通5G手机',
          goodsIntro: '麒麟990 5G SoC芯片 5000万超感...',
          goodsCoverImg:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/p40-silver.png',
          sellingPrice: 4299,
          tag: '超感知影像',
        },
        {
          goodsId: 10907,
          goodsName: 'HUAWEI Mate 40 Pro 全网通5G手机 8GB...',
          goodsIntro: '5nm麒麟9000旗舰芯片 | 超感光徕卡电...',
          goodsCoverImg:
            'https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40-silver.png',
          sellingPrice: 6488,
          tag: '跃见非凡',
        },
      ],
      categoryList: [
        {
          name: '新蜂超市',
          imgUrl:
            'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
          categoryId: 100001,
        },
        {
          name: '新蜂服饰',
          imgUrl:
            'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
          categoryId: 100003,
        },
        {
          name: '全球购',
          imgUrl:
            'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
          categoryId: 100002,
        },
        {
          name: '新蜂生鲜',
          imgUrl:
            'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
          categoryId: 100004,
        },
        {
          name: '新蜂到家',
          imgUrl:
            'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
          categoryId: 100005,
        },
        {
          name: '充值缴费',
          imgUrl:
            'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
          categoryId: 100006,
        },
        {
          name: '9.9元拼',
          imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
          categoryId: 100007,
        },
        {
          name: '领劵',
          imgUrl:
            'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
          categoryId: 100008,
        },
        {
          name: '省钱',
          imgUrl:
            'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
          categoryId: 100009,
        },
        {
          name: '全部',
          imgUrl:
            'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
          categoryId: 100010,
        },
      ],
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
  background: rgba(194, 194, 194, 0.486);
  left: 0;
  top: 0;
  .wh(100%, 116px);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  .boxSizing();
  font-size: 15px;
  z-index: 10000;
  .deliver-bar {
    flex-basis: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .address {
      flex-basis: 10%;
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
      flex-basis: 60%;
      display: flex;
      .wh(74%, 20px);
      line-height: 20px;
      margin: 10px 0;
      padding: 5px 0;
      justify-content: space-around;
      color: #232326;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      .clock {
        text-align: center;
      }
    }
    .cart {
      text-align: center;
      flex-basis: 10%;
    }
  }
  .search-bar {
    flex-basis: 100%;
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
