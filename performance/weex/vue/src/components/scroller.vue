<template>
  <scroller class="scroller">
    <div v-for="(item, index) in aniArr" :key="index">
      <div class="animation-wrapper">
        <BaseCube :index="index"></BaseCube>
        <BaseCube :index="index"></BaseCube>
        <BaseCube :index="index"></BaseCube>
        <BaseCube :index="index"></BaseCube>
        <BaseCube :index="index"></BaseCube>
      </div>
    </div>
  </scroller>
</template>

<script>
import BaseCube from '@/components/baseCube'


export default {
  name: 'scroller',
  components: {
    BaseCube
  },
  data () {
    return {
      aniArr: new Array(500)
    }
  }
}
</script>

<style scoped>
.animation-wrapper {
  flex-direction: row;
  align-items: center;
  margin-top: 20;
  padding: 20 0;
  background-color: #dcf5f1;
  /* flex-wrap: wrap; */
}
</style>
