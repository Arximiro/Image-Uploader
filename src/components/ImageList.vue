<template>
<div class="image-list-main">
  <div v-if="isLoggedIn" class="image-container">
    <img v-for="img in allImages" :src="img.link" :key="img.id" />
  </div>

  <h1 v-else>Please Log In to Get Started!</h1>
</div>
</template>




<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.fetchImages();
  }
};
</script>




<style lang="scss" scoped>
.image-list-main {
  text-align: center;
  
  & h1 {
    margin-top: 5rem;
    padding-bottom: 100vh;
  }
}
.image-container {
  column-gap: 0;
  column-count: 3;

  & img {
    max-width: 100%;
    padding: 5px;
  }
}
</style>

