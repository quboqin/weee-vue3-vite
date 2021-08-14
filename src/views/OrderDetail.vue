<template>
  <common-header title="订单详情" />
  <div class="mt-10 m-4">
    <div class="flex justify-start">
      <div>
        <van-image class="box" width="4rem" height="4rem" :src="box" />
      </div>
      <div>
        <div>你的订单已完成</div>
        <div>你的订单已在 2021-02-12 送达</div>
      </div>
    </div>
    <div class="">
      <div>配送信息</div>
      <div class="bg-gray-100 rounded p-3">
        <div class="time">
          <div>送货时间</div>
          <div>2021-02-12 星期五 3:00 PM - 9:00 PM</div>
        </div>
        <div class="address">
          <div>送货地址</div>
          <div>180, Folsom, CA, 95630 US</div>
        </div>
      </div>
    </div>
    <div class="">
      <div>商品信息</div>
      <div class="">
        <good-cell />
        <good-cell />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CommonHeader from '@/components/Header.vue'
import GoodCell from '@/components/GoodCell.vue'

import box from '@/assets/icons8-box-64.png'

export default defineComponent({
  name: 'order-detail',
  components: {
    CommonHeader,
    GoodCell,
  },
  setup() {
    return {
      box,
    }
  },
})
</script>

<style lang="less" scoped></style>
