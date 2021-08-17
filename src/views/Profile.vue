<template>
  <div>
    <div
      class="
        z-50
        fixed
        top-0
        left-0
        contained
        w-screen
        leading-10
        text-center text-gray-600
        bg-red-100
      "
    >
      我的
    </div>
    <div class="mt-14 m-4">
      <div class="contained bg-red-100 rounded-md">
        <div class="m-2 flex items-center justify-between">
          <div class="flex items-center justify-start">
            <van-image
              class="my-4"
              round
              width="4rem"
              height="4rem"
              :src="avatarUrl"
            />
            <div class="ml-2 text-gray-600">
              <div class="font-semibold">QQB</div>
              <div>ID: weee7343219</div>
            </div>
          </div>
          <p
            class="mdi mdi-chevron-right text-3xl text-center leading-none"
          ></p>
        </div>
      </div>
      <div
        class="text-gray-600 bg-red-100 rounded-md mb-2"
        v-if="true"
        @click="onOrder"
      >
        <div class="title pl-2 pt-2">我的订单</div>
        <hr class="bg-gray-800 m-2" />
        <div class="flex justify-between py-2 px-4">
          <div class="" v-for="(type, index) in orderTypes" :key="index">
            <img class="mx-auto h-8 w-8" :src="orderImages[index]" />
            <div class="text-center">
              {{ type }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4" v-if="true">
        <van-button size="large" round type="success" to="sign" @click="onLogin"
          >登入或注册</van-button
        >
      </div>
    </div>
  </div>
  <tab-bar></tab-bar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import TabBar from '@/components/TabBar.vue'
import { useRouter } from 'vue-router'

import avatarUrl from '@/assets/avatar.jpg'
import clock from '@/assets/icons8-clock-64.png'
import box from '@/assets/icons8-box-64.png'
import trunk from '@/assets/icons8-boot-open-64.png'

export default defineComponent({
  name: 'profile',
  components: {
    TabBar,
  },
  setup() {
    const router = useRouter()

    const state = reactive({
      orderTypes: ['全部订单', '待付款', '待发货'],
      active: 0,
      avatarUrl,
      orderImages: [clock, box, trunk],
    })

    function onOrder() {
      router.push('order-list')
    }

    function onLogin() {
      router.push('sign')
    }

    return {
      ...toRefs(state),
      onOrder,
      onLogin,
    }
  },
})
</script>

<style lang="less" scoped></style>
