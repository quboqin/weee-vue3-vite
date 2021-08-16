<template>
  <div class="text-center p-2">
    <img class="w-20 mx-auto m-2" :src="item.goodsCoverImg" alt="" />
    <div class="good-desc">
      <div class="text-gray-500 font-medium text-base">
        {{ item.goodsName }}
      </div>
      <div class="text-sm text-yellow-300">¥ {{ item.sellingPrice }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'good',
  props: ['item'],
})
</script>

<style lang="less" scoped></style>
