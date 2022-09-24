<template>
  <view class="app">
    <view class="swiper">
      <!-- 轮播图区域 -->
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
        <!-- 循环渲染轮播图的 item 项 -->
        <swiper-item v-for="(item, i) in list3" :key="i">
          <view class="swiper-item">
            <!-- 动态绑定图片的 src 属性 -->
            <image src="@/static/datail.png"></image>
          </view>
        </swiper-item>
      </swiper>
    </view>
    <view class="main">
      <!-- 头部 -->
      <view class="title">
        <view class="title-left">
          <view class="title-left-item">
            <view class="">
              <p style='color: red;'>￥16.90</p>
            </view>
            <view
              style="background-color: #F9C47F; width: 240rpx; border-radius: 15rpx;height: 45rpx;margin-left: 30rpx;">
              <view style="font-size: 20rpx;color: #fff; line-height: 45rpx; ">高佣50% 约￥8.45</view>
            </view>
          </view>
          <view style="margin-top: 15rpx;">
            <p style='font-size: 20rpx;color: #707070;font-weight: 700;'>公开佣金40%</p>
          </view>
        </view>
        <view class="title-right">
          <view class="title-right-item">
            <view style="width: 65rpx;text-align: center;">
              <img style='width: 45rpx;height: 55rpx;' src="@/static/zbsk.png" alt="">
              <view style='font-size: 16rpx; color: #707070; font-weight: 700;'>直播手卡</view>
            </view>
            <view style="width: 65rpx;text-align: center; margin-left: 35rpx;">
              <img style='width: 45rpx;height: 55rpx;' src="@/static/cpgg.png" alt="">
              <view style='font-size: 16rpx; color: #707070;font-weight: 700;'>产品规格</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 头部 -->
      <view class="headline">
        <view>
          <p style='font-size: 26rpx;font-weight: 700;'>产品名称xxxxxx</p>
        </view>
        <view class="text">
          <view>
            <p>总销量: 8888</p>
          </view>
          <view style="margin-left: 120rpx;">
            <p>近30天: 30000</p>
          </view>
          <view style="margin-left: 120rpx;">
            <p>1200个达人再带></p>
          </view>
        </view>
      </view>
      <view class="attention">
        <view class="">
          <view class="iconfont icon-fuzhi">
          </view>
        </view>
        <view class="">

        </view>
        <view class="">

        </view>
      </view>
    </view>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        list3: [
          'https://cdn.uviewui.com/uview/swiper/swiper3.png'
        ],
      }
    }
  }
</script>

<style lang="scss">
  .app {
    padding: 5rpx;

    swiper {
      height: 700rpx;

      .swiper-item,
      image {
        width: 100%;
        height: 100%;
        border-radius: 15rpx;
      }
    }

    .main {
      padding: 8rpx;

      .title {
        display: flex;

        margin-top: 20rpx;

        .title-left {
          .title-left-item {
            display: flex;
            text-align: center;
          }
        }

        .title-right {
          .title-right-item {
            display: flex;
            margin-left: 160rpx;
            margin-top: 30rpx;
          }
        }
      }

      .headline {
        .text {
          display: flex;
          font-size: 20rpx;
          color: #707070;
          font-weight: 700;
          margin-top: 15rpx;
        }
      }
    }



  }
</style>
