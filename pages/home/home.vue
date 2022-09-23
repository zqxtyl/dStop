<template>
  <view class="app">
    <view class="swiper">
      <!-- 轮播图区域 -->
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
        <!-- 循环渲染轮播图的 item 项 -->
        <swiper-item v-for="(item, i) in list3" :key="i">
          <view class="swiper-item">
            <!-- 动态绑定图片的 src 属性 -->
            <image :src="item" @click="goToDescription"></image>
          </view>
        </swiper-item>
      </swiper>

    </view>
    <view class="main">
      <view class="mian-item">
        <img style='width: 210rpx;height: 150rpx; border-radius: 15rpx;' src="@/static/sqdj.png" alt="">
      </view>
      <view class="mian-item">
        <img style='width: 210rpx;height: 150rpx; border-radius: 15rpx;' src="@/static/xszd.png" alt="">
      </view>
      <view class="mian-item">
        <img style='width: 210rpx;height: 150rpx; border-radius: 15rpx;' src="@/static/jjdr.png" alt="">
      </view>
    </view>
    <view class="goods">
      <u-tabs :current="current" @change="changeOption" :list="list1" lineWidth="30" lineColor="#fff" :activeStyle="{
            color: '#F59A23',
            fontWeight: 700,
            transform: 'scale(1.08)'
        }" :inactiveStyle="{
            color: '#000000',
            fontWeight: 700,
            transform: 'scale(1)'
        }" itemStyle="padding-left: 15rpx; padding-right: 15rpx; height: 60rpx;">
        <view slot="right" style="padding-left: 4rpx;" @tap="show = true">
          <u-icon name="arrow-down-fill" size="40" bold></u-icon>
        </view>
      </u-tabs>
      <view class="u-list-item" v-if="current==0">
        品质优选
        <ug-goods></ug-goods>
      </view>
      <view class="u-list-item" v-if="current==1">
        视频饮料
      </view>
      <view class="u-list-item" v-if="current==2">
        智能家居
      </view>
      <view class="u-list-item" v-if="current==3">
        母婴用品
      </view>
      <view class="u-list-item" v-if="current==4">
        服饰内衣
      </view>
      <!-- 弹出层 -->
      <view>
        <u-popup :show="show" @close="close" @open="open">
          <view>
            <text>出淤泥而不染，濯清涟而不妖</text>
          </view>
        </u-popup>
      </view>
      <!-- 弹出层 -->
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list3: [
          'https://cdn.uviewui.com/uview/swiper/swiper3.png',
          'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        ],
        list1: [{
            name: '品质优选'
          },
          {
            name: '视频饮料',
          }, {
            name: '智能家居',
          }, {
            name: '母婴用品'
          },
          {
            name: '服饰内衣'
          }
        ],
        current: 0,
        show: false
      };
    },
    methods: {
      getPush() {
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail'
        })
      },
      goToDescription() {
        uni.navigateTo({
          url: '/subpkg/goods_detail/goods_detail'
        })
      },
      changeOption(e) {
        this.current = e.index
      },
      close() {
        this.show = false
        // console.log('close');
      },
      open() {

      }
    }
  }
</script>

<style lang="scss">
  .app {
    padding: 15rpx;

    swiper {
      height: 330rpx;

      .swiper-item,
      image {
        width: 100%;
        height: 100%;
        border-radius: 15rpx;
      }
    }

    .main {
      display: flex;
      justify-content: space-between;
      margin-top: 25rpx;

      .mian-item {}
    }
  }
</style>
