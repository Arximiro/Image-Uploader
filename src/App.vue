<template>
<div class="main">
  <AppHeader />
  <div class="ui container">
    <router-view></router-view> <!-- This tag tells Vue router, anytime you match a route, take that component and place it right here -->
  </div>
</div>
</template>




<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader
  }
};
</script>




<style lang="scss" scoped>
  .main {
    background-color: black;
  }
</style>
