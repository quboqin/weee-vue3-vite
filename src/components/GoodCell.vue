<template>
  <div class="good-card">
    <div class="icon">
      <van-image
        class="avatar"
        round
        width="4rem"
        height="4rem"
        :src="avatarUrl"
      />
    </div>
    <div class="info">
      <div>新鲜蟠桃 3 磅</div>
      <div>单价: $22.99 | 数量: 1</div>
    </div>
    <div class="price">$22.99</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import avatarUrl from '@/assets/avatar.jpg'

export default defineComponent({
  name: 'good-cell',
  setup() {
    return {
      avatarUrl,
    }
  },
})
</script>

<style lang="less" scoped>
.good-card {
  width: 100%;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #fffdfd;
  .icon {
    flex: none;
  }
  .info {
    flex: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .price {
    flex: none;
  }
}
</style>
