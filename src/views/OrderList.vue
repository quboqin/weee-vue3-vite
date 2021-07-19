<template>
  <common-header title="我的订单" />
  <div class="order-body">
    <van-tabs v-model:active="active">
      <van-tab v-for="(type, index) in orderTypes" :title="type" :key="index">
        <div class="orders">
          <order-box @click="onClick"></order-box>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

import CommonHeader from '@/components/Header.vue'
import OrderBox from '@/components/OrderBox.vue'

export default defineComponent({
  name: 'order-list',
  components: {
    CommonHeader,
    OrderBox,
  },
  setup() {
    const state = reactive({
      orderTypes: ['全部订单', '待付款', '待发货'],
      active: 0,
    })

    const router = useRouter()

    function onClick() {
      router.push('order-detail')
    }

    return {
      ...toRefs(state),
      onClick,
    }
  },
})
</script>

<style lang="less" scoped>
.order-body {
  margin: 55px 0 0 0;
  background: #fff2f2;
  height: 100vh;
}
.orders {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
</style>
