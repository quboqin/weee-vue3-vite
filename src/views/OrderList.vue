<template>
  <common-header title="我的订单" />
  <div class="mt-14 m-4">
    <van-tabs v-model:active="active">
      <van-tab v-for="(type, index) in orderTypes" :title="type" :key="index">
        <div class="p-3 mt-3 bg-red-100 rounded-md" @click="onClick">
          <order-box></order-box>
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

<style lang="less" scoped></style>
