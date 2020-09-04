<template>
  <div class="home">
    <h1>Profile Index</h1>
    <div id="nav">
      <router-link to="/profile/post">Post</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/saved">Saved</router-link> |
      <router-link to="/profile/tagged">Tagged</router-link>
    </div>
    <router-view />
  </div>

</template>



<script>

export default {
  name: 'Profile',
  components: {
  }
}
</script>

<style scoped></style>
