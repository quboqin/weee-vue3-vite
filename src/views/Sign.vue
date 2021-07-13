<template>
  <common-header title="登入" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CommonHeader from '@/components/Header.vue'

export default defineComponent({
  name: 'sign',
  components: {
    CommonHeader,
  },
})
</script>

<style lang="less" scoped></style>
