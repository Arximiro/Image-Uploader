<template>
<div>
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
.image-container {
  column-gap: 0;
  column-count: 3;

  & img {
    max-width: 100%;
    padding: 5px;
  }
}
</style>

