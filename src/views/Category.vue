<template>
  <div>
    <header class="category-header">
      <div class="icon"><van-icon name="wap-nav" size="1.5rem" /></div>
      <div class="search-bar">
        <van-search
          v-model="value"
          placeholder="请输入要搜索的商品"
          background="#4fc08d00"
          shape="round"
        />
      </div>
      <div class="cart"><van-icon name="shopping-cart" size="1.5rem" /></div>
    </header>
    <div class="category-body">
      <van-tabs v-model:active="active">
        <van-tab
          v-for="(category, index) in categoryList"
          :title="category.name"
          :key="index"
        >
          <div class="goods">
            <good-box
              v-for="item in newGoodses"
              :key="item.goodsId"
              :item="item"
              @click="goToDetail(item)"
            >
            </good-box>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import GoodBox from '@/components/GoodBox.vue'

import category from '../mock/category.json'
import goods from '../mock/goods.json'

export default defineComponent({
  name: 'category',
  components: {
    GoodBox,
  },
  setup() {
    const state = reactive({
      categoryList: category,
      newGoodses: goods,
      active: 0,
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.category-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 55px;
  background: rgba(194, 194, 194, 0.486);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  .boxSizing();
  font-size: 15px;
  z-index: 10000;
  .icon {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .search-bar {
    flex-grow: 10;
    flex-shrink: 0;
  }
  .cart {
    flex-grow: 1;
    flex-shrink: 0;
    text-align: center;
  }
}
.category-body {
  margin: 55px 0 0 0;
}
.goods {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
