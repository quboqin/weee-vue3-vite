<template>
  <div>
    <header class="profile-header">
      <div class="icon"><van-icon name="chat" size="1.5rem" /></div>
      <div class="title-bar">我的</div>
      <div class="cart"><van-icon name="shopping-cart" size="1.5rem" /></div>
    </header>
    <div class="profile-body">
      <div class="profile-card">
        <div class="profile">
          <van-image
            class="avatar"
            round
            width="4rem"
            height="4rem"
            :src="avatarUrl"
          />
          <div class="name">
            <div>QQB</div>
            <div>ID: weee7343219</div>
          </div>
          <div class="action"><van-icon name="arrow" size="1.5rem" /></div>
        </div>
        <div class="login" v-if="true">
          <van-button size="large" round type="success" to="sign"
            >登入或注册</van-button
          >
        </div>
      </div>
      <div class="my-order"></div>
      <div class="my-action"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import avatarUrl from '@/assets/avatar.jpg'

export default defineComponent({
  name: 'profile',
  setup() {
    return {
      avatarUrl,
    }
  },
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
  z-index: 1000;
  .icon {
    flex: none;
  }
  .text-bar {
    flex: auto;
  }
  .cart {
    flex: none;
  }
}
.profile-body {
  margin: 55px 0px;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  align-content: flex-start;
  background: #fff2f2;
  .profile-card {
    width: 100%;
    border-radius: 5px;
    background: #fffdfd;
    flex-flow: row wrap;
    align-items: center;
    display: flex;
    margin: 10px;
    .profile {
      width: 100%;
      flex-flow: row nowrap;
      align-items: center;
      display: flex;
      .avatar {
        flex: none;
        padding: 10px;
      }
      .name {
        flex: auto;
      }
      .action {
        flex: none;
        text-align: center;
      }
    }
    .login {
      width: 100%;
      text-align: center;
      margin: 10px;
    }
  }
  .my-order {
  }
  .my-action {
  }
}
</style>
