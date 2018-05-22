<template>
  <div class="dropper">
    <input type="file" />
    <span>Drag files here!</span>
  </div>
</template>




<script>
export default {
name: 'UploadForm'
}
</script>




<style lang="scss" scoped>
  .dropper {
    height: 30vh;
    border: 2px solid black;
    border-radius: 5px;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #eee;
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

