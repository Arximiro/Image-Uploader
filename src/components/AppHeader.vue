<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="item active">
      Image Storage
    </a>
    
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <a href="/" class="item">Gallery</a>
        <a href="/" class="item">Upload</a>
        <a href="/" class="item">Logout</a>
      </div>

      <a v-else href="#" class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>




<script>
import { mapActions, mapGetters } from 'vuex'; // Kinda like mapDispatchToProps and mapStateToProps from React.

export default {
  name: 'AppHeader',
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['login'])
  } 
}
</script>




<style lang="scss" scoped>
  .horizontal {
    display: flex;

    
    & a:hover {
      background-color: orange !important;
      transition: all .3s !important;
    }   
  }
</style>
