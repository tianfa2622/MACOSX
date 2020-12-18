<template>
  <div id="app">
    <Header></Header>
    <sidebar></sidebar>
    <subject></subject>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Subject from '@/components/Subject.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Header, Subject, Sidebar
  }
}
</script>

<style lang="less">
</style>
