<template>
  <div class="tab-bar van-hairline--top">
    <ul class="tab-list">
      <router-link
        v-for="tab in tabs"
        :key="tab.to"
        class="tab-list-item active"
        :to="tab.to"
      >
        <van-icon :name="tab.icon" />
        <span>{{ tab.title }}</span>
      </router-link>
    </ul>
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
@import '../common/style/mixin';
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  z-index: 1000;
  background: #fff;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  .tab-list {
    width: 100%;
    .fj();
    flex-direction: row;
    padding: 0;
    .tab-list-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      text-align: center;
      color: #666;
      &.router-link-active {
        color: @primary;
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
}
</style>
