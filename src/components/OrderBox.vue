<template>
  <div class="">
    <div class="flex justify-between">
      <div class="time">到货时间 2021-02-12 星期五</div>
      <div class="s">已完成</div>
    </div>
    <div class="flex justify-start">
      <div class="p-2">
        <van-badge :content="5">
          <van-image width="4rem" height="4rem" :src="avatarUrl" />
        </van-badge>
      </div>
      <div class="p-2">
        <van-badge :content="5">
          <van-image width="4rem" height="4rem" :src="avatarUrl" />
        </van-badge>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="time">订单编号: 12826187</div>
      <div class="s">$49.42</div>
    </div>
    <div class="flex justify-between">
      <div></div>
      <div class="flex">
        <div>
          <van-button size="mini" type="default">查看物流</van-button>
        </div>
        <div>
          <van-button size="mini" type="default">售后</van-button>
        </div>
        <div>
          <van-button size="mini" type="default">再来一单</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import avatarUrl from '@/assets/avatar.jpg'

export default defineComponent({
  setup() {
    return {
      avatarUrl,
    }
  },
})
</script>

<style lang="less" scoped></style>
