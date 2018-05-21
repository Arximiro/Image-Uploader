<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="item active">
      Image Storage
    </a>
    
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <a href="/" class="item">Gallery</a>
        <a href="/" class="item">Upload</a>
        <a href="#" @click="logout" class="item">Logout</a>
      </div>

      <a v-else href="#" class="ui item login" @click="login">Login</a>
    </div>
  </div>
</template>




<script>
import { mapActions, mapGetters } from "vuex"; // Kinda like mapDispatchToProps and mapStateToProps from React.

export default {
  name: "AppHeader",
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(["login", "logout"])
  }
};
</script>




<style lang="scss" scoped>
.horizontal {
  display: flex;

  & a:hover {
    background-color: orange !important;
    transition: all 0.3s !important;
  }
}

.login:hover {
  background-color: rgb(138, 170, 138) !important;
  transition: all 0.3s !important;
}
</style>
