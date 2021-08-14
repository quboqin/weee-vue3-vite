<template>
  <header
    class="
      contained
      w-screen
      leading-10
      text-center
      fixed
      top-0
      left-0
      flex flex-row
      justify-between
    "
  >
    <p class="mdi mdi-chevron-left text-3xl" @click="onBack"></p>
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

<style lang="less" scoped></style>
