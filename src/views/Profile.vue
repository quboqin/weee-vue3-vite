<template>
  <div>
    <header class="profile-header">
      <div class="icon"><van-icon name="chat" size="1.5rem" /></div>
      <div class="title-bar">我的</div>
      <div class="cart"><van-icon name="shopping-cart" size="1.5rem" /></div>
    </header>
    <div class="profile-body">
      <div class="my-profile">
        <van-image
          class="avatar"
          round
          width="4rem"
          height="4rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="name">
          <div>QQB</div>
          <div>ID: weee7343219</div>
        </div>
        <div class="action"><van-icon name="share" size="1.5rem" /></div>
      </div>
      <div class="my-order"></div>
      <div class="my-action"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'profile',
})
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.profile-header {
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
  .boxSizing();
  font-size: 15px;
  z-index: 10000;
  .icon {
    flex-grow: 0;
    flex-shrink: 0;
  }
  .text-bar {
    flex-grow: 10;
    flex-shrink: 0;
  }
  .cart {
    flex-grow: 0;
    flex-shrink: 0;
    text-align: center;
  }
}
.profile-body {
  margin: 55px 0px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: flex-start;
  .my-profile {
    width: 100%;
    border-radius: 5px;
    background: rgba(247, 194, 194, 0.486);
    flex-flow: row nowrap;
    align-items: center;
    display: flex;
    margin: 10px;
    .avatar {
      flex-grow: 0;
      flex-shrink: 0;
      padding: 10px;
    }
    .name {
      flex-grow: 10;
      flex-shrink: 0;
    }
    .action {
      flex-grow: 1;
      flex-shrink: 0;
      text-align: center;
    }
  }
  .my-order {
  }
  .my-action {
  }
}
</style>
