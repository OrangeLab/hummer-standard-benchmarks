<template>
  <div class="wrapper">
    <text>current bundleUrl: {{bundleUrl}}</text>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      bundleUrl: null
    }
  },
  mounted () {
    this.bundleUrl = weex.config
  }
}
</script>

<style scoped>
.button{
  height: 48wx;
  background-color: #15D0B4;
  margin-top: 8wx;
  margin-left: 8wx;
  margin-right: 8wx;
  border-radius: 8wx;
}
.btn-text{
  text-align: center;
  color: white;
  font-size: 20wx;
  margin-top: 12wx;
}
</style>
