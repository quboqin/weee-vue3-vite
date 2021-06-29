<template>
  <div id="root">
    <router-view />
    <tab-bar></tab-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TabBar from '@/components/TabBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    TabBar,
  },
})
</script>

<style>
#root {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
