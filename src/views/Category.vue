<template>
  <div>
    <header
      class="
        fixed
        top-0
        left-0
        container
        mx-auto
        flex flex-row
        justify-between
        items-center
        px-2
      "
    >
      <p
        class="mdi mdi-view-grid-outline text-3xl text-center leading-none"
      ></p>

      <div class="flex-auto">
        <van-search
          v-model="value"
          placeholder="请输入要搜索的商品"
          background="#4fc08d00"
          shape="round"
        />
      </div>
      <p class="mdi mdi-cart text-3xl text-center leading-none"></p>
    </header>
    <div class="mt-10">
      <van-tabs v-model:active="active">
        <van-tab
          v-for="(category, index) in categoryList"
          :title="category.name"
          :key="index"
        >
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

<style lang="less" scoped></style>
