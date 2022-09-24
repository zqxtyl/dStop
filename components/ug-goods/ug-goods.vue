<template>
  <view>
    <view class="goods">
      <view class="images">
        <img @click='getGoodsDetail' style='width: 350rpx;height: 350rpx;' src="@/static/cpzt.png" alt="">
      </view>
      <view class="text">
        <view>
          <p style='font-size: 25rpx; font-weight: 700;'>产品名称xxxxxxxx</p>
        </view>
        <view class="text2">
          <view class="text3">
            <view class="box">
              <p style='font-size: 20rpx; color: #fff;'>￥3</p>
              <p style='font-size: 20rpx; color: #fff;'>平台补贴</p>
            </view>
            <view class="box2">
              <p style='font-size: 20rpx; color: #fff;'>3%</p>
              <p style='font-size: 20rpx; color: #fff;'>佣金</p>
            </view>
          </view>
          <view>
          </view>
          <view>
            <view class="rightBox">
              <p style='color: blue; font-size: 20rpx; font-weight: 700;'>剩余：300</p>
            </view>
            <view class="rightBox2">
              <p style='color: #717171; font-size: 20rpx;'>到手价：9.9</p>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    getGoodsDetail
  } from '@/api/home.js'
  export default {
    name: 'ug-goods',
    data() {
      return {

      }
    },
    methods: {
      async getGoodsDetail() {
        const data = await getGoodsDetail()
        console.log(data)
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail'
        })
      }
    }
  }
</script>

<style lang="scss">
  .goods {
    .images {
      width: 350rpx;
      border: 1px solid #ccc;
    }

    .text {
      width: 350rpx;
      border: 1px solid #ccc;
      height: 110rpx;

      .text2 {
        display: flex;

        .text3 {
          display: flex;
        }

        .box {
          text-align: center;
          width: 90rpx;
          height: 55rpx;
          border-radius: 10rpx;
          background-color: #F59A23;
          margin-left: 8rpx;
        }

        .box2 {
          text-align: center;
          width: 90rpx;
          height: 55rpx;
          border-radius: 10rpx;
          background-color: #D9001B;
          margin-left: 6rpx;
        }

        .rightBox {
          margin-left: 30rpx;
        }

        .rightBox2 {
          margin-left: 20rpx;
        }
      }
    }
  }
</style>
