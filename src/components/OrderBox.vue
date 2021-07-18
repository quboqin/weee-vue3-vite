<template>
  <div class="box">
    <div class="status">
      <div class="time">到货时间 2021-02-12 星期五</div>
      <div class="s">已完成</div>
    </div>
    <div class="items">
      <div class="avatar">
        <van-badge :content="5">
          <van-image width="4rem" height="4rem" :src="avatarUrl" />
        </van-badge>
      </div>
      <div class="avatar">
        <van-badge :content="5">
          <van-image width="4rem" height="4rem" :src="avatarUrl" />
        </van-badge>
      </div>
    </div>
    <div class="price">
      <div class="time">订单编号: 12826187</div>
      <div class="s">$49.42</div>
    </div>
    <div class="actions">
      <div>
        <van-button size="mini" type="default">查看物流</van-button>
      </div>
      <div>
        <van-button size="mini" type="default">售后</van-button>
      </div>
      <div>
        <van-button size="mini" type="default">再来一单</van-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import avatarUrl from '@/assets/avatar.jpg'

export default defineComponent({
  setup() {
    return {
      avatarUrl,
    }
  },
})
</script>

<style lang="less" scoped>
.box {
  margin: 10px;
  border-radius: 5px;
  background: #fffdfd;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  .status {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 5px;
    .time {
    }
    .s {
    }
  }
  .items {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    .avatar {
      padding: 5px 10px;
      border-radius: 10px;
    }
  }
  .price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 5px;
  }
  .actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: nowrap;
    div {
      padding: 0px 5px;
    }
  }
}
</style>
