<template>
  <header class="sign-header">
    <div class="icon"><van-icon name="arrow-left" size="1.5rem" /></div>
    <div class="title">登录</div>
    <div class="blank"></div>
  </header>
  <van-tabs class="tab-body"></van-tabs>
  <div class="split"></div>
  <div class="others"></div>
  <div class="switch"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
})
</script>

<style lang="less" scoped>
.sign-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 55px;
  background: rgba(194, 194, 194, 0.486);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  z-index: 10000;
  .icon {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .title {
    flex-grow: 10;
    flex-shrink: 0;
    text-align: center;
  }
  .blank {
    width: 53px;
  }
}
.tab-body {
  margin: 55px 0 0 0;
}
</style>
