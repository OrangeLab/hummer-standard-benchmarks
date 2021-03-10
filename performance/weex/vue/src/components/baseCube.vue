<template recyclable>
  <div class="opacity-animation-wrapper">
    <text v-if="index>-1" style="text-align:center;">{{index}}</text>
  </div>
</template>

<script>

export default {
  name: 'BaseCube',
  props: {
    index: Number,
    default: -1
  }
}
</script>

<style scoped>
  .opacity-animation-wrapper{
    width: 70;
    height: 70;
    margin: 0 30;
    background-color: #15D0B4;
    justify-content: center;
  }
</style>
