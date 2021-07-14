<template>
  <common-header title="登入" />
  <div class="content">
    <div class="tabs">
      <div class="section">
        {{ loginMethods[0] }}
      </div>
      <div class="section">
        {{ loginMethods[1] }}
      </div>
    </div>
    <van-cell-group inset>
      <van-field v-model="state.tel" type="tel" label="手机号码" />
      <van-field v-model="state.digit" type="digit" label="验证码">
        <template v-slot:button>
          <van-button round type="danger" size="mini">获取验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="action">
      <van-button round type="primary" size="large">立即登录</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import CommonHeader from '@/components/Header.vue'

export default defineComponent({
  name: 'sign',
  components: {
    CommonHeader,
  },
  setup() {
    const loginMethods = ['手机', '邮箱']
    const state = reactive({
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
    })

    return {
      loginMethods,
      state,
    }
  },
})
</script>

<style lang="less" scoped>
.content {
  margin: 55px 0px;
  height: 100vh;
  background: #fff2f2;
  .tabs {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    .section {
      width: 50%;
      text-align: center;
    }
  }
  .action {
    padding: 15px;
  }
}
</style>
