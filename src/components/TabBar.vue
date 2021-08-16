<template>
  <div class="fixed bottom-0 left-0 container flex justify-around bg-red-100">
    <router-link
      v-for="tab in tabs"
      :key="tab.to"
      :to="tab.to"
      class="py-1 focus:text-blue-500 text-gray-400 text-center leading-none"
    >
      <p :class="tab.icon" class="text-3xl"></p>
      <span class="block">{{ tab.title }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'tab-bar',
  setup() {
    const tabs = [
      { icon: 'mdi mdi-home', to: 'home', title: '首页' },
      { icon: 'mdi mdi-magnify', to: 'category', title: '分类' },
      { icon: 'mdi mdi-account', to: 'profile', title: '我的' },
    ]

    return {
      tabs,
    }
  },
})
</script>

<style lang="less" scoped></style>
