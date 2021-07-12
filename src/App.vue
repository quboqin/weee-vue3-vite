<template>
  <router-view />
  <tab-bar></tab-bar>
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
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
