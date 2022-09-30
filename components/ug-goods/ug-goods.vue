<template>
  <view>
    <view class="goods">
      <view class="images">
        <img @click='getGoodsDetail(list.id)' style='width: 350rpx;height: 350rpx;border-radius: 25rpx;'
          :src="JSON.parse(list.imgs)" alt="">
      </view>
      <view class="text">
        <view>
          <p style='font-size: 25rpx; font-weight: 700;'>{{list.title||"商品名称"}}</p>
        </view>
        <view class="text2">
          <view class="text3">
            <view class="box">
              <p style='font-size: 20rpx; color: #fff;'>￥{{list.price||8}}</p>
              <p style='font-size: 20rpx; color: #fff;'>平台补贴</p>
            </view>
            <view class="box2">
              <p style='font-size: 20rpx; color: #fff;'>{{list.commission_rate||20}}%</p>
              <p style='font-size: 20rpx; color: #fff;'>佣金</p>
            </view>
          </view>
          <view>
          </view>
          <view>
            <view class="rightBox">
              <p style='color: blue; font-size: 20rpx; font-weight: 700;'>剩余：{{list.leftTasks||300}}</p>
            </view>
            <view class="rightBox2">
              <p style='color: #717171; font-size: 20rpx;'>到手价：{{list.price||3}}</p>
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
    onLoad() {
      console.log(list)
    }
  }
</script>

<style lang="scss">
  .goods {
    .images {
      width: 350rpx;
      border-radius: 25rpx;
    }

    .text {
      width: 350rpx;
      height: 110rpx;
      border-radius: 25rpx;
      background-color: #fff;

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
          margin-left: 15rpx;
          width: 150rpx;
        }
      }
    }
  }
</style>
