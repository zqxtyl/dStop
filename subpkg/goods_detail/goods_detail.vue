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
      <u-line color="black" length="100%"></u-line>
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
            <view style="width: 65rpx;text-align: center; margin-left: 85rpx;">
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
      </view>

      <view class="attention">
        <view class="attention-item">
          <view class="iconfont icon-fuzhi" style="font-size: 40rpx;">
            <span style='font-size: 25rpx;'>复制链接</span>
          </view>
        </view>
        <view class="attention-item" @click="attentionFn">
          <view v-if="attentionShow" class="iconfont icon-wujiaoxingkong" style="font-size: 40rpx;">
            <span style='font-size: 25rpx;'>关注</span>
          </view>
          <view class="iconfont icon-wujiaoxing-" v-else style="font-size: 40rpx;">
            <span style='font-size: 25rpx;'>已关注</span>
          </view>
        </view>
        <view class="attention-item">
          <view class="iconfont icon-fenxiang" style="font-size: 40rpx;margin-right: 15rpx;">
            <span style='font-size: 25rpx;'>分享</span>
          </view>
        </view>
      </view>
      <view>
        <u-line color="black" length="100%"></u-line>
      </view>
      <view style="margin-top: 25rpx;">
        <u-line color="black" length="100%"></u-line>
      </view>
      <view class="Live">
        <view class="Live-itme">
          <view style="display: flex;">
            <view class="Live-itme-shipin iconfont icon-zhibo" style="font-size: 40rpx;">
            </view>
            <span style='font-weight: 700; font-size: 25rpx;margin-left: 8rpx;'>直播亮点</span>
          </view>
          <view class="iconfont icon-fuzhi1">
          </view>
        </view>
        <view class="Live-itme-text">
          <p>16.9元买一送一</p>
        </view>
      </view>
      <view style="margin-top: 10rpx;">
        <u-line color="black" length="100%"></u-line>
      </view>
      <view style="margin-top: 25rpx;">
        <u-line color="black" length="100%"></u-line>
      </view>
      <view class="product">
        <view class="product-item">
          <view class="product-item-title">
            <view class="iconfont icon-biaoqian">
            </view>
            <span style='font-size: 25rpx;font-weight: 700;'>产品卖点</span>
          </view>
          <view class="iconfont icon-fuzhi1">
          </view>
        </view>
        <view class="">
          <p style='font-size: 25rpx;margin-top: 25rpx;'>1、配聊表都是常见的食物材料或医疗材料：糖，雪梨片粉，薄荷、胖大海、罗汉果、金银花、甘草、高良姜等。</p>
          <p style='font-size: 25rpx;margin-top: 25rpx;'>2、无防腐剂，无视频添加剂，0脂肪。吃的放心。</p>
        </view>
      </view>
      <view style="margin-top: 10rpx;">
        <u-line color="black" length="100%"></u-line>
      </view>
      <view style="margin-top: 25rpx;">
        <u-line color="black" length="100%"></u-line>
      </view>
      <view class="videoTask">
        <view class="videoTask-item">
          <view class="videoTask-item-title">
            <view>
              <p style='font-size: 28rpx;font-weight: 700;'>视频任务</p>
            </view>
            <view style="margin-left: 15rpx;">
              <img style="width: 45rpx;height: 45rpx;" src="@/static/vip.png" alt="">
            </view>
            <view style="margin-left: 8rpx;">
              <p style='font-size: 20rpx;margin-top: 8rpx;color: blue;'>白金达人以上</p>
            </view>
          </view>
          <view>
            <p style='font-size: 20rpx; color: red;'>剩余：320</p>
          </view>
        </view>
        <view class="">
          <p style='font-size: 25rpx;'>任务要求xxxxx</p>
        </view>
      </view>
    </view>

    <view class="footer">
      <view class="footer-left">
        <img style='width: 90rpx;height: 80rpx;' src="@/static/chuang.png" alt="">
        <p style='font-size: 25rpx;'>添加橱窗</p>
      </view>
      <view class="footer-right">
        <view class="footer-right-button">
          <view style="margin-top: 5rpx;">
            <p>￥3补贴</p>
            <p>立即领取</p>
          </view>
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
        attentionShow: false
      }
    },
    methods: {
      attentionFn() {
        this.attentionShow = !this.attentionShow
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
      margin-bottom: 100rpx;

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

      .attention {
        display: flex;
        justify-content: space-between;
        height: 50rpx;
        margin-bottom: 35rpx;

        .attention-item {
          margin-left: 15rpx;
          margin-top: 30rpx;
          line-height: 50rpx;
        }
      }

      .Live {
        padding: 5rpx;

        .Live-itme {
          height: 40rpx;
          margin-left: 15rpx;
          display: flex;
          justify-content: space-between;
        }

        .Live-itme-text {
          margin-left: 12rpx;
          font-size: 25rpx;
          margin-top: 15rpx;
          margin-bottom: 20rpx;
        }
      }

      .product {
        padding: 8rpx;

        .product-item {
          display: flex;
          justify-content: space-between;

          .product-item-title {
            display: flex;
          }
        }
      }

      .videoTask {
        padding: 8rpx;

        .videoTask-item {
          display: flex;
          justify-content: space-between;

          .videoTask-item-title {
            display: flex;
          }
        }
      }
    }

    .footer {
      display: flex;
      padding: 8rpx;

      .footer-left {
        width: 240rpx;
        text-align: center;
      }

      .footer-right {
        margin-top: 15rpx;
        width: 450rpx;
        background-color: #0000FF;
        height: 100rpx;
        text-align: center;

        .footer-right-button {
          color: #fff;
        }
      }
    }



  }
</style>
