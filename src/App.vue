<template>
<div>
  <AppHeader />
  <router-view></router-view> <!-- This tag tells Vue router, anytime you match a route, take that component and place it right here -->
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
</style>
