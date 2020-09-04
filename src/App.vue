<template>
  <div class="App">
    <MasterHeader/>
    <router-view />
  </div>
</template>

<script>
import MasterHeader from '@/components/Header'
export default {
  name: 'App',
  components:{
    MasterHeader
  }
}
</script>

<style scoped></style>
