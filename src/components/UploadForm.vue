<template>
  <div class="dropper-container">
    <div class="dropper">
      <input
        type="file"
        @change="uploadImages($event.target.files)"
        multiple
        accept="image/*"
        /> 
        <!-- $event... part finds event object and pulls out the .target.files object -->
        <!-- multiple part sets the ability to allow multiple file selection -->
        <!-- accept part makes it where users can only select image files to upload -->
      <span>Drag files here!</span>
    </div>
  </div>
</template>




<script>
import { mapActions } from "vuex";

export default {
  name: "UploadForm",
  methods: mapActions(["uploadImages"])
};
</script>




<style lang="scss" scoped>
.dropper-container {
  height: 120vh;
}
.dropper {
  height: 30vh;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  margin-top: 10rem;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(68, 63, 63);
  }

  & input {
    height: 30vh;
    width: 100%;
    position: absolute;
    opacity: 0;
  }

  & span {
    font-size: 2rem;
  }
}
</style>

