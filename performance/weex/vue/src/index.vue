<template>
  <div class="wrapper">
    <div class="button" v-for="(item, index) in pageList" :key="index" @click="jumpPage(item.url)">
      <text class="btn-text">{{item.name}}</text>
    </div>
  </div>
</template>

<script>
var navigator = weex.requireModule('navigator')

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      pageList: [{
        name: '列表基准测试（Scroller）',
        url: 'components/scroller.js'
      }, {
        name: '列表基准测试（List）',
        url: 'components/list.js'
      }, {
        name: '动画基准测试',
        url: 'components/animation.js'
      }, {
        name: '拖拽基准测试',
        url: 'components/drag.js'
      }],
      e: null
    }
  },
  methods: {
    jumpPage (e) {
      var uurl = weex.config.bundleUrl
      var uurls = uurl.split(':')
      var ports = uurls[2]
      ports = ports.split('/')
      var hrefs = uurls[0] + ':' + uurls[1] + ':' + ports[0] + '/'
      navigator.push({
        url: hrefs + 'dist/' + e
      }, event => {
        console.log('callback: ', event)
      })
    }
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
