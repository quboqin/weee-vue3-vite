<template>
  <div class="tab-bar">
    <router-link
      v-for="tab in tabs"
      :key="tab.to"
      class="tab-bar-item"
      :to="tab.to"
    >
      <van-icon :name="tab.icon" />
      <span>{{ tab.title }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'tabbar',
  setup() {
    const tabs = [
      { icon: 'wap-home', to: 'home', title: '首页' },
      { icon: 'cluster', to: 'category', title: '分类' },
      { icon: 'friends', to: 'social', title: '社区' },
      { icon: 'manager', to: 'profile', title: '我' },
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
