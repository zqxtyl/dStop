<template>
  <view>
    <view class="">
      <view class="">
      </view>

      我的出单
    </view>
    <tarbar :current="1"></tarbar>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {


    },
    onLoad() {
      uni.hideTabBar()
    }
  }
</script>

<style lang="less">

</style>
