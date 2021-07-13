<template>
  <div class="good-item">
    <img :src="item.goodsCoverImg" alt="" />
    <div class="good-desc">
      <div class="title">{{ item.goodsName }}</div>
      <div class="price">¥ {{ item.sellingPrice }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'good',
  props: ['item'],
})
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.good-item {
  box-sizing: border-box;
  width: 50%;
  border-bottom: 1px solid #e9e9e9;
  padding: 10px 10px;
  img {
    display: block;
    width: 120px;
    margin: 0 auto;
  }
  .good-desc {
    text-align: center;
    font-size: 14px;
    padding: 10px 0;
    .title {
      color: #222333;
    }
    .price {
      color: #1baeae;
    }
  }
  &:nth-child(2n + 1) {
    border-right: 1px solid #e9e9e9;
  }
}
</style>
