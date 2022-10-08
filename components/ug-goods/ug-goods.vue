<template>
  <view>
    <view class="goods">
      <view class="images">
        <image @click='getGoodsDetail(list.id)' :src="JSON.parse(list.imgs)" alt="">
      </view>
      <view class="text">
        <view>
          <view>{{list.title||"商品名称"}}</view>
        </view>
        <view class="text2">
          <view class="text3">
            <view class="box">
              <view>￥{{list.price||8}}</view>
              <view>平台补贴</view>
            </view>
            <view class="box2">
              <view>{{list.commission_rate||20}}%</view>
              <view>佣金</view>
            </view>
          </view>
          <view>
          </view>
          <view>
            <view class="rightBox">
              <view>剩余：{{list.leftTasks||300}}</view>
            </view>
            <view class="rightBox2">
              <view>到手价：{{list.price||3}}</view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'ug-goods',
    props: {
      list: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {

      }
    },
    methods: {
      async getGoodsDetail(id) {
        uni.navigateTo({
          url: `/subpkg/goods_detail/goods_detail?id=${id}`
        })
      }
    },
    onLoad() {}
  }
</script>

<style lang="scss">
  .goods {
    background-color: #fff;

    .images {
      width: 342rpx;
      border-radius: 15rpx 15rpx 0 0;
      background-color: #fff;

      image {
        width: 342rpx;
        height: 342rpx;
        border-radius: 15rpx;
      }
    }

    .text {
      width: 342rpx;
      height: 110rpx;
      border-radius: 10rpx;
      background-color: #fff;
      font-size: 24rpx;

      .text2 {
        display: flex;

        .text3 {
          display: flex;
        }

        .box {
          text-align: center;
          width: 108rpx;
          height: 62rpx;
          border-radius: 10rpx;
          font-size: 20rpx;
          color: #fff;
          background-color: #FFB700;
          margin-top: 14rpx;
        }

        .box2 {
          text-align: center;
          width: 72rpx;
          height: 62rpx;
          border-radius: 10rpx;
          background-color: #F44333;
          font-size: 20rpx;
          color: #fff;
          margin-left: 10rpx;
          margin-top: 14rpx;
        }

        .rightBox {
          margin-left: 30rpx;
          margin-top: 14rpx;
          color: #D33D34;
          font-size: 20rpx;
          font-weight: 700;
        }

        .rightBox2 {
          margin-left: 10rpx;
          width: 150rpx;
          margin-top: 8rpx;
          color: #888888;
          font-size: 19rpx;
        }
      }
    }
  }
</style>
