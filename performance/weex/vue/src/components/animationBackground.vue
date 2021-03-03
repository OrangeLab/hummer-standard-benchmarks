<template recyclable>
  <div class="background-animation-wrapper" ref="background-animation">
    <text v-if="index>-1" style="text-align:center;">{{index}}</text>
  </div>
</template>

<script>
const animation = weex.requireModule('animation')
const colorList = new Map([
  [0, '#F1CA19'],
  [1, '#15D0B4']
])

export default {
  name: 'AnimationBackground',
  props: {
    index: Number,
    default: -1
  },
  data () {
    return {
      ref: null,
      nextKey: 0,
      nextColor: colorList.get(0)
    }
  },
  mounted () {
    this.ref = this.$refs['background-animation']
    this.startAnimation()
  },
  methods: {
    startAnimation () {
      let that = this
      animation.transition(
        this.ref,
        {
          styles: {
            backgroundColor: this.nextColor
          },
          duration: 1000,
          timingFunction: 'linear',
          needLayout: false,
          delay: 0
        },
        function () {
          that.setNextColor()
          that.startAnimation()
        }
      )
    },
    setNextColor () {
      this.nextKey = this.nextKey + 1
      this.nextKey = colorList.has(this.nextKey) ? this.nextKey : 0
      this.nextColor = colorList.get(this.nextKey)
    }
  }
}
</script>

<style scoped>
  .background-animation-wrapper{
    width: 70;
    height: 70;
    margin: 10;
    background-color: #15D0B4;
  }
</style>
