<template>
  <common-header title="订单详情" />
  <div class="order-body">
    <div class="order-status">
      <div>
        <van-image class="box" width="4rem" height="4rem" :src="box" />
      </div>
      <div>
        <div>你的订单已完成</div>
        <div>你的订单已在 2021-02-12 送达</div>
      </div>
    </div>
    <div class="deliver">
      <div>配送信息</div>
      <div class="deliver-card">
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
    <div class="good">
      <div>商品信息</div>
      <div class="good-list">
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

<style lang="less" scoped>
.order-body {
  margin: 55px 0;
  background: #fff2f2;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: flex-start;
  height: 100vh;
  .order-status {
    width: 100%;
    border-radius: 10px;
    margin: 10px;
    background: #fffdfd;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .deliver {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    .deliver-card {
      width: 100%;
      border-radius: 10px;
      margin: 10px;
      background: #fffdfd;
    }
  }
  .good {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    .good-list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      width: 100%;
    }
  }
}
</style>
