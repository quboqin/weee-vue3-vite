<template>
  <div>
    <div class="fixed top-0 left-0 contained w-screen leading-10 text-center">
      我的
    </div>
    <div class="mt-10 m-4">
      <div class="contained mx-auto bg-gray-200 rounded">
        <div class="m-2 flex flex-row items-center justify-between">
          <div class="flex flex-row items-center justify-start">
            <van-image
              class="mt-4 my-2"
              round
              width="4rem"
              height="4rem"
              :src="avatarUrl"
            />
            <div class="ml-2">
              <div>QQB</div>
              <div>ID: weee7343219</div>
            </div>
          </div>
          <p
            class="mdi mdi-chevron-right text-3xl text-center leading-none"
          ></p>
        </div>
      </div>
      <div class="bg-gray-50 rounded" v-if="true" @click="onClick">
        <div class="title">我的订单</div>
        <div class="flex flex-row justify-between p-2">
          <div class="" v-for="(type, index) in orderTypes" :key="index">
            <img class="mx-auto h-8 w-8" :src="orderImages[index]" />
            <div class="text-center">
              {{ type }}
            </div>
          </div>
        </div>
      </div>
      <div class="" v-if="true">
        <van-button size="large" round type="success" to="sign"
          >登入或注册</van-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

import avatarUrl from '@/assets/avatar.jpg'
import clock from '@/assets/icons8-clock-64.png'
import box from '@/assets/icons8-box-64.png'
import trunk from '@/assets/icons8-boot-open-64.png'

export default defineComponent({
  name: 'profile',
  setup() {
    const router = useRouter()

    const state = reactive({
      orderTypes: ['全部订单', '待付款', '待发货'],
      active: 0,
      avatarUrl,
      orderImages: [clock, box, trunk],
    })

    function onClick() {
      router.push('order-list')
    }

    return {
      ...toRefs(state),
      onClick,
    }
  },
})
</script>

<style lang="less" scoped></style>
