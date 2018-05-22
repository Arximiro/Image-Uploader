<template>
  <div>
    <img v-for="img in allImages" :src="img.link" :key="img.id" />
  </div>
</template>




<script>
import { mapActions, mapGetters } from 'vuex';

export default {
name: 'ImageList',
computed: mapGetters(['allImages']),
methods: mapActions(['fetchImages']),
created() {
  this.fetchImages();
}
}
</script>




<style lang="scss" scoped>

</style>

