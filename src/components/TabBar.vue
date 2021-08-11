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
    <router-link v-for="tab in tabs" :key="tab.to" :to="tab.to" flex flex-col>
      <div>
        <home-icon className="h-1 w-1 text-blue-500" />
      </div>
      <div>
        <span>{{ tab.title }}</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HomeIcon } from '@heroicons/vue/solid'

export default defineComponent({
  name: 'tabbar',
  components: { HomeIcon },
  setup() {
    const tabs = [
      { icon: 'wap-home', to: 'home', title: '首页' },
      { icon: 'cluster', to: 'category', title: '分类' },
      { icon: 'manager', to: 'profile', title: '我的' },
    ]

    return {
      tabs,
    }
  },
})
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #fff2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 5px 0px;
  .tab-bar-item {
    flex: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #1baeae;
    &.router-link-active {
      color: #666;
    }
    i {
      text-align: center;
      font-size: 22px;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>
