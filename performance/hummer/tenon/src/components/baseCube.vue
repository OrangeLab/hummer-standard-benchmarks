<template>
    <text style="width: 34;height: 34;margin: 0 12;background-color: #15d0b4;justify-content: center;text-align: center">{{ index }}</text>
</template>

<script>
export default {
  name: "BaseCube",
  props: {
    index: {
      type: Number,
      default: -1
    }
  }
};
</script>

<style scoped>
</style>
