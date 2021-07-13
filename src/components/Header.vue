<template>
  <header class="header">
    <div class="icon">
      <van-icon name="arrow-left" size="1.5rem" @click="onBack" />
    </div>
    <div class="title">{{ title }}</div>
    <div class="blank"></div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'header',
  props: ['title'],
  setup() {
    const router = useRouter()
    function onBack() {
      router.go(-1)
    }
    return {
      onBack,
    }
  },
})
</script>

<style lang="less" scoped>
.header {
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
  z-index: 1000;
  .icon {
    flex: none;
  }
  .title {
    flex: auto;
    text-align: center;
  }
  .blank {
    flex: none;
    width: 24px;
  }
}
</style>
