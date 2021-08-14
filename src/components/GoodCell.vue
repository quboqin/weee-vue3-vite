<template>
  <div class="flex justify-between items-center">
    <div class="flex justify-start items-center">
      <div class="icon">
        <van-image
          class="p-2"
          round
          width="4rem"
          height="4rem"
          :src="avatarUrl"
        />
      </div>
      <div class="pl-3">
        <div>新鲜蟠桃 3 磅</div>
        <div>单价: $22.99 | 数量: 1</div>
      </div>
    </div>
    <div class="price">$22.99</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import avatarUrl from '@/assets/avatar.jpg'

export default defineComponent({
  name: 'good-cell',
  setup() {
    return {
      avatarUrl,
    }
  },
})
</script>

<style lang="less" scoped></style>
