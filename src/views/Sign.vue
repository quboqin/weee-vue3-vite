<template>
  <common-header title="登入" />
  <div class="mt-14 m-4">
    <div class="flex justify-center py-3 text-center text-gray-500">
      <div class="mx-4">
        {{ loginMethods[0] }}
      </div>
      <div class="mx-4">
        {{ loginMethods[1] }}
      </div>
    </div>

    <van-cell-group class="dym_collapse">
      <van-field v-model="state.tel" type="tel" label="手机号码" />
      <van-field v-model="state.digit" type="digit" label="验证码">
        <template v-slot:button>
          <van-button round type="danger" size="mini" class="px-2"
            >获取验证码</van-button
          >
        </template>
      </van-field>
    </van-cell-group>

    <div class="mt-4">
      <van-button round type="success" size="large">立即登录</van-button>
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
.dym_collapse {
  /deep/ .van-cell {
    background-color: #f1f1f1;
    border-radius: 0.375rem;
  }
  /deep/ .van-collapse-item__content {
    background-color: #f1f1f1;
  }
}
</style>
