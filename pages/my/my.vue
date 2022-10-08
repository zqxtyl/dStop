<!-- 个人中心 -->
<template>
  <view class="app">
    <view class="title">
      <view class="titie-item">
        <view class="title-bottom">
          <view class="title-box">
            <view @click="goVideoTask">
              <view class="title-box-text">视频任务</view>
            </view>
            <view class="title-box-right">
              <view @click="goVideoTask">

                <view>全部订单</view>
              </view>
              <view class="iconfont icon-jiantouyou" style="font-size: 20rpx;margin-left: 8rpx;">
              </view>
            </view>
          </view>
          <view class="title-bottom-item">
            <view @click="goVideoTaskStatus(i)" v-for="(item,i) in videoList" :key="i">
              <image :src="`/static/${item.img}.png`" alt="">
                <view>{{item.name}}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="main">
      <view class="main-top">
        <view class="main-top-title">
          <view>可提现</view>
        </view>

        <view class="main-top-right" @click="accountDetail">
          <text>明细</text>
          <view class="iconfont icon-jiantouyou" style="font-size: 20rpx;margin-left: 8rpx;">
          </view>
        </view>
      </view>
      <view class="main-bottom">
        <view style="margin-left: 20rpx;font-size: 70rpx;">
          <view>5,000.00</view>
        </view>
        <view class="main-bottom-item">
          <view style="display: flex;justify-content: center;align-items: center;">
            <view style='font-size: 28rpx;color: #fff;margin-top: 10rpx;'>转出</view>
          </view>
        </view>
      </view>
    </view>

    <view class="payload">
      <view class="payload-item">
        <view style="display: flex;">
          <img style='width: 46rpx;height: 30rpx;' src="@/static/yl.png" alt="">
          <p style='margin-left: 20rpx;'>****8888</p>
        </view>
        <view style="margin-right: 20rpx;">
          <button
            style="background-color: #FFFFFF;width: 152rpx;height: 64rpx;color: #979797;font-size: 27rpx;font-weight: 700;">管理</button>
        </view>
      </view>
      <view style="margin-top: 20rpx;">
        <u-line></u-line>
      </view>

      <view class="payload-item">
        <view style="display: flex;">
          <img style='width: 40rpx;height: 40rpx;' src="@/static/zfb.png" alt="">
          <p style='margin-left: 20rpx;'>暂无</p>
        </view>
        <view style="margin-right: 20rpx;">
          <button
            style="background-color: #FFFFFF;width: 152rpx;height: 64rpx;color: #979797;font-size: 27rpx;font-weight: 700;">管理</button>
        </view>
      </view>
      <view style="margin-top: 20rpx;">
        <u-line></u-line>
      </view>

      <view class="payload-item">
        <view style="display: flex;">
          <img style='width: 42rpx;height: 36rpx;' src="@/static/wxzf.png" alt="">
          <p style='margin-left: 20rpx;'>当前微信：下次再说</p>
        </view>
        <view style="margin-right: 20rpx;">
          <button
            style="background-color: #FFFFFF;width: 152rpx;height: 64rpx;color: #979797;font-size: 27rpx;font-weight: 700;">管理</button>
        </view>
      </view>
      <view style="margin-top: 20rpx;">
        <u-line></u-line>
      </view>
    </view>
    <!-- 底部 -->
    <view class="footer">
      <view class="footer-item" @click="numberManage">
        <img style='width: 60rpx;height: 60rpx;' src="@/static/zhgl.png" alt="">
        <p style='font-size: 25rpx;margin-top: 10rpx;'>账号管理</p>
      </view>
      <view class="footer-item">
        <img style='width: 60rpx;height: 60rpx;' src="@/static/gzsp.png" alt="">
        <p style='font-size: 25rpx;margin-top: 10rpx;'>关注商品</p>
      </view>
      <view class="footer-item">
        <img style='width: 76rpx;height: 68rpx;' src="@/static/lljl.png" alt="">
        <p style='font-size: 25rpx;margin-top: 10rpx;'>浏览记录</p>
      </view>
      <view class="footer-item" @click="getOfficialService">
        <img style='width: 70rpx;height: 68rpx;' src="@/static/gfkf.png" alt="">
        <p style='font-size: 25rpx;margin-top: 10rpx;'>官方客服</p>
      </view>
    </view>

    <!-- 弹出层 -->
    <view>
      <u-popup :show="show" mode="center" @close="close" @open="open">
        <view>
          <img :src="List.qrCodeImg" alt="">
        </view>
      </u-popup>
    </view>
    <!-- 弹出层 -->
    <tarbar :current="3"></tarbar>
  </view>
</template>

<script>
  import {
    officialService
  } from '@/api/my.js'
  export default {
    data() {
      return {
        videoList: [{
            name: '待上传',
            img: 'dsc',
          },
          {
            name: "待审核",
            img: 'dsh'
          },
          {
            name: '未通过',
            img: 'wtg'
          },
          {
            name: "已完成",
            img: 'ywc'
          }


        ],
        show: false, //客服
        List: []
      };
    },
    methods: {
      numberManage() { //账号管理
        uni.navigateTo({
          url: '/pages/accountNumber/index'
        })
      },
      accountDetail() { //账户明细
        uni.navigateTo({
          url: '/pages/accountDetail/index'
        })
      },
      async getOfficialService() {
        const {
          data
        } = await officialService()
        console.log(data)
        this.List = data
        this.show = true
      },
      goVideoTask() { //视频任务
        uni.navigateTo({
          url: '/pages/videoTask/index'
        })
      },
      goVideoTaskStatus(id) { //跳转当前视频任务
        uni.navigateTo({
          url: `/pages/videoTask/index?id=${id}`
        })
      },
      open() {
        // console.log('open');
      },
      close() {
        this.show = false
        // console.log('close');
      }
    },
    onLoad() {
      uni.hideTabBar()
    }
  }
</script>

<style lang="scss">
  .app {
    background-color: #F5F5F5;
    height: 1500rpx;

    .title {
      width: 750rpx;
      height: 264rpx;
      background-color: #fff;

      .titie-item {
        width: 750rpx;
        height: 50rpx;
        background-color: #fff;
        border-radius: 15rpx;
        position: relative;

        .title-bottom {
          padding: 20rpx;
          width: 750rpx;
          height: 230rpx;
          background-color: #fff;
          position: absolute;
          top: 15rpx;

          .title-box {
            display: flex;
            justify-content: space-between;

            .title-box-text {
              font-weight: 700;
              font-size: 32rpx;
              margin-left: 15rpx;
            }

            .title-box-right {
              display: flex;
              align-items: center;
              margin-right: 50rpx;
              color: #676767;
              font-size: 25rpx;
            }
          }

          .title-bottom-item {
            margin-top: 46rpx;
            display: flex;
            justify-content: space-around;
            text-align: center;
            margin-right: 30rpx;
            font-size: 25rpx;

            image {
              width: 52rpx;
              height: 52rpx;
            }
          }
        }
      }
    }

    .main {
      background-color: #fff;
      margin-top: 45rpx;
      padding: 20rpx;

      .main-top {
        display: flex;
        justify-content: space-between;

        .main-top-title {
          margin-top: 20rpx;
          margin-left: 20rpx;
          font-weight: 700;
          font-size: 30rpx;
        }

        .main-top-right {
          display: flex;
          align-items: center;
          color: #676767;
          margin-right: 15rpx;

          text {}
        }

        .main-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 44rpx;
          align-items: center;

          .main-bottom-item {
            width: 150rpx;
            height: 64rpx;
            background-color: #E62828;
            border-radius: 8rpx;
            margin-right: 10rpx;
          }
        }
      }
    }

    .payload {
      background-color: #fff;
      margin-top: 25rpx;
      padding: 20rpx;

      .payload-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 20rpx;
        margin-top: 15rpx;
      }
    }

    .footer {
      width: 750rpx;
      height: 160rpx;
      background-color: #fff;
      margin-top: 25rpx;
      padding: 20rpx;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .footer-item {
        margin-top: 10rpx;
        text-align: center;
      }
    }

  }
</style>
