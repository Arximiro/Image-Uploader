<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="item active">
      Image Storage
    </router-link>
    
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" class="item">Gallery</router-link>
        <router-link to="/upload" class="item">Upload</router-link>
        <a @click="logout" class="item">Logout</a>
      </div>

      <a v-else class="ui item login" @click="login">Login</a>
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
}

.login:hover {
  background-color: rgb(138, 170, 138) !important;
  transition: all 0.3s !important;
}

a {
  color: white !important;

  &:hover {
    background-color: orange !important;
    transition: all 0.3s !important;
  }
}
</style>
