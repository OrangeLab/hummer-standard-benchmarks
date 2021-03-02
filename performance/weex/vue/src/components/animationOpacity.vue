<template recyclable>
  <div class="opacity-animation-wrapper" ref="opacity-animation">
    <text v-if="index>-1" style="text-align:center;">{{index}}</text>
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
const OpacityList = new Map([
  [0, '0'],
  [1, '1']
])

export default {
  name: 'OpacityBackground',
  props: {
    index: Number,
    default: -1
  },
  data () {
    return {
      ref: null,
      nextKey: 0,
      nextOpacity: OpacityList.get(0)
    }
  },
  mounted () {
    this.ref = this.$refs['opacity-animation']
    this.startAnimation()
  },
  methods: {
    startAnimation () {
      let that = this
      animation.transition(
        this.ref,
        {
          styles: {
            opacity: this.nextOpacity
          },
          duration: 1000,
          timingFunction: 'linear',
          needLayout: false,
          delay: 0
        },
        function () {
          that.setNextOpacity()
          that.startAnimation()
        }
      )
    },
    setNextOpacity () {
      this.nextKey = this.nextKey + 1
      this.nextKey = OpacityList.has(this.nextKey) ? this.nextKey : 0
      this.nextOpacity = OpacityList.get(this.nextKey)
    }
  }
}
</script>

<style scoped>
  .opacity-animation-wrapper{
    width: 70;
    height: 70;
    margin: 10;
    background-color: #15D0B4;
  }
</style>
