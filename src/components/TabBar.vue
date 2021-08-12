<template>
  <div
    class="
      fixed
      bottom-0
      left-0
      container
      mx-auto
      flex flex-row
      justify-around
      bg-yellow-100
    "
  >
    <router-link v-for="tab in tabs" :key="tab.to" :to="tab.to" class="py-1">
      <p :class="tab.icon" class="material-icons md-32 text-center"></p>
      <div>
        <span>{{ tab.title }}</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'tabbar',
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
