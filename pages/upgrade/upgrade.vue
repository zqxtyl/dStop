<!-- 特权达人 -->
<template>
  <view class="app">
    <!-- 普通用户 -->
    <view v-if="!vipStatus">
      <view class="box">
        <img :src="List.img_advance" alt="">
      </view>
      <view class="footer">
        <view class="footer-button">
          <view>
            <view style="display: flex;align-items: center;">
              <view style="margin-top: 13rpx;margin-left: 120rpx;">
                <p style='text-decoration: line-through;font-size: 23rpx;color: #FFFFFF;'>原价￥{{List.origin_price}}</p>
              </view>
              <view style="font-size: 28rpx;color: #FFFFFF;margin-left: 50rpx;margin-top: 13rpx;">
                <p>活动价￥{{List.now_price}}</p>
              </view>
            </view>
            <view style="display: flex;align-items: center;justify-content: center;margin-top: 8rpx;">
              <p style='color: #FFFFFF;font-size: 35rpx;'>购买年费</p>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 普通用户 -->

    <!-- 特权 -->
    <view v-else>
      <view class="box2">

      </view>
      <view style="display: flex;justify-content: center;align-items: center;">
        <view class="footer2">

        </view>
      </view>
    </view>
    <!-- 特权 -->


  </view>
</template>

<script>
  import {
    getMember,
    dyPic
  } from '@/api/member.js'
  export default {
    data() {
      return {
        vipStatus: false, //会员状态
        List: {}
      }
    },
    methods: {
      async getMember() {
        const {
          data
        } = await getMember()
        this.List = data
      },
      async getDyPic() {
        const {
          data
        } = await dyPic()
        console.log(data)
      }
    },
    onLoad() {
      this.getMember()
      this.getDyPic()
    }
  }
</script>

<style lang="scss">
  .app {
    height: 1400rpx;

    .box {
      width: 745rpx;
      height: 1240rpx;
      background-color: #D8D8D8;
      border: 1px solid #979797;
    }

    .footer {
      width: 750rpx;
      height: 190rpx;
      background-color: #fff;
      margin-top: 45rpx;
      margin-left: 72rpx;

      .footer-button {
        background-color: #EF493A;
        width: 600rpx;
        height: 120rpx;
        border-radius: 60rpx;
      }
    }

    .box2 {
      background-color: #D8D8D8;
      width: 750rpx;
      height: 1100rpx;
    }

    .footer2 {
      width: 710rpx;
      background-color: blue;
      height: 276rpx;
      position: fixed;
      z-index: 9999;
      bottom: 0;
    }
  }
</style>
