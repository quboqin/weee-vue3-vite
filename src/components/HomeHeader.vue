<template>
  <header class="z-50 fixed left-0 top-0 container text-gray-600 bg-red-100">
    <div class="flex justify-between items-center px-2">
      <div class="py-2 flex justify-start items-center">
        <p class="mdi mdi-map-marker text-3xl text-center leading-none"></p>
        <div>
          <div class="font-semibold leading-none">Folsom</div>
          <div class="leading-none">95630</div>
        </div>
      </div>
      <div
        class="
          flex-auto flex
          justify-center
          items-center
          bg-red-50
          rounded-full
          mx-4
        "
      >
        <div></div>
        <div class="text-center leading-none">送货日 周四 7/1</div>
        <p
          class="
            mdi mdi-chevron-down
            text-2xl
            font-semibold
            text-center
            leading-none
            px-2
          "
        ></p>
      </div>
      <p class="py-2 mdi mdi-cart text-3xl text-center leading-none"></p>
    </div>
    <div class="container mx-auto">
      <van-search
        class="pt-0"
        v-model="value"
        placeholder="请输入要搜索的商品"
        background="#4fc08d00"
        shape="round"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home-header',
})
</script>

<style lang="less" scoped></style>
