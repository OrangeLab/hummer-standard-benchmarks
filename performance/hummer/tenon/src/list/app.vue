<template>
  <view class="page">
    <ex-list class="list" :data="list">
      <template v-slot:item="item">
        <view class="list-item">
          <text class="cube-text">{{ item.index }}</text>
          <text class="cube-text">{{ item.index }}</text>
          <text class="cube-text">{{ item.index }}</text>
          <text class="cube-text">{{ item.index }}</text>
          <text class="cube-text">{{ item.index }}</text>
        </view>
      </template>
    </ex-list>
  </view>
</template>
<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list {
  width: 100%;
  height: 100%;
}
.list-item {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10;
  padding: 10 0;
  background-color: #dcf5f1;
}
.cube-text{
  width: 34;
  height: 34;
  margin: 0 12;
  background-color: #15d0b4;
  text-align:center;
}
</style>

<script>
export default {
  pageConfig: {
    canScroll: false,
  },
  data() {
    return {
      list: new Array(1000),
    };
  },
};
</script>