<template>
  <view class="app">
    <view class="swiper">
      <!-- 轮播图区域 -->
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
        <!-- 循环渲染轮播图的 item 项 -->
        <swiper-item v-for="(item, i) in imgs" :key="i">
          <view class="swiper-item">
            <!-- 动态绑定图片的 src 属性 -->
            <image :src="item"></image>
          </view>
        </swiper-item>
      </swiper>
    </view>

    <view class="swiper-shipin">
      <image src="@/static/shipin.png" alt="">
    </view>

    <view class="main">
      <!-- 头部 -->
      <view class="title box">
        <view class="title-left">
          <view class="title-left-item">
            <view class="left">
              <view>￥{{list.price}}</view>
            </view>
            <view class="right">
              <view>高佣{{list.commission_rate}}% 约￥8.45
              </view>
            </view>
          </view>
          <view class="second">
            <view>公开佣金{{list.commission_rate_open}}%</view>
          </view>
        </view>

        <view class="title-right">
          <view class="title-right-item">
            <view>
              <image src="@/static/cpgg.png" alt="">
                <view class="test">产品规格</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 头部 -->
      <view class="headline box">
        <view>
          <view>{{uname[0]}}</view>
        </view>
      </view>
      <view>
        <u-line></u-line>
      </view>
      <view class="attention box">
        <view class="attention-item" @click="copyLink">
          <image src="@/static/fuzhil.png" alt="">
            <text>复制链接</text>
        </view>
        <view class="attention-item" @click="attentionFn">
          <view v-if="attentionShow">
            <view class="attention-item-center">
              <view>
                <image src="@/static/guanzhu.png" alt="">
              </view>
              <view>
                <text>关注</text>
              </view>
            </view>
          </view>
          <view v-else class="attention-item-center">
            <view>
              <image src="@/static/yguanzhu.png" alt="">
            </view>
            <view>
              <text>已关注</text>
            </view>
          </view>
        </view>
        <view class="attention-item">
          <view class="attention-item-right">
            <view>
              <image src="@/static/fenx.png" alt="">
            </view>
            <view>
              <text>分享</text>
            </view>
          </view>
        </view>
      </view>

      <view class="Live box">
        <view class="Live-itme">
          <view class="Live-itme-top">
            <image src="@/static/zhibo.png" alt="">
              <text>直播亮点</text>
          </view>
          <view class="Live-itme-margin">
            <image src="@/static/fuzhi.png" alt="">
          </view>
        </view>
        <view class="Live-itme-text">
          <view>{{list.live_bright}}</view>
        </view>
      </view>

      <view class="product box" :class="taskStatus?'down':''">
        <view class="product-item">
          <view class="product-item-title">
            <image src="@/static/cpmd.png" alt="">
              <text>产品卖点</text>
          </view>
          <view class="product-item-right">
            <image src="@/static/fuzhi.png" alt="">
          </view>
        </view>
        <view class="product-item-bottom">
          <view>{{list.sale_bright}}</view>

        </view>
      </view>
    </view>
    <!-- 未领取 -->
    <view class="footer" v-if="!taskStatus">
      <view class="videoTask">
        <view class="videoTask-item">
          <view class="videoTask-item-title">
            <view class="videoTask-item-left">
              <view>视频任务</view>
            </view>
            <view class="videoTask-item-center">
              <view>
                <image src="@/static/bojin.png" alt="">
              </view>
              <view class="videoTask-item-center-item">
                <view>铂金达人以上</view>
              </view>
            </view>
          </view>
          <view class="videoTask-item-title-right">
            <view>剩余：320</view>
          </view>
        </view>

        <view class="videoTask-center">
          <view>任务要求xxxxx</view>
        </view>
      </view>
      <view class="footer-bottom">
        <view class="footer-bottom-left">
          <image src="@/static/chuang.png" alt="">
            <view>添加橱窗</view>
        </view>
        <view class="footer-bottom-right" @click="getTask">
          <view class="footer-button">
            <view class="footer-button-left">
              <view>+3补贴</view>
            </view>
            <view class="footer-button-right">
              <view>立即领取</view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 未领取 -->
    <!-- 已领取 -->
    <view class="draw" v-else>
      <view class="draw-title">
        <view class="draw-title-left">
          <view>待完成任务</view>
        </view>
        <view class="draw-title-right">
          <image src="@/static/fuzhi.png" alt="">
            <view class="draw-title-right-item">商品链接</view>
        </view>
      </view>

      <view class="draw-title">
        <view class="draw-title-center">任务要求xxx</view>
      </view>

      <view class="commodity">
        <view class="commodity-left">
          <image src="@/static/sp.png" alt="">
        </view>
        <view class="commodity-right">
          <view class="commodity-right-title">
            <view>任务编号：sp15912345678</view>
          </view>
          <view class="commodity-right-center">
            <view class="ommodity-right-center-left">
              <view class="ommodity-right-center-left-box1">
                <view>待上传</view>
              </view>
              <view class="ommodity-right-center-left-box2">
                <view>￥5.28</view>
              </view>
            </view>
            <view class="ommodity-right-center-right">
              <view>11-01 16:24:26 接单</view>
            </view>
          </view>
        </view>
      </view>

      <view class="buttons">
        <view class="buttons-item">
          <button @click="copyVideo" size="mini">复制视频</button>
        </view>
        <view class="buttons-item">
          <button @click="uploadVideo" size="mini">上传视频</button>
        </view>
        <view class="buttons-item-right">
          <button @click="cancelTask" size="mini">取消任务</button>
        </view>
      </view>

      <view class="account ">
        <view class="account-item">
        </view>
        <view class="account-right">
          <view>账号名称</view>
        </view>
      </view>
    </view>
    <!-- 已领取 -->

    <!-- 升级vip -->
    <view class="upgradeVip">
      <u-popup mode='center' :show="show" @close="close" round="10">
        <view class="upgradeVip-item">
          <image src="@/static/djbf.png" alt="">
        </view>
        <view class="upgradeVip-bottom">
          <view class="upgradeVip-bottom-item-left" @click="show=false">
            <view>下次再说</view>
          </view>
          <view class="upgradeVip-bottom-item-right" @click="getUpgrade">
            <view>前往升级</view>
          </view>
        </view>
      </u-popup>
    </view>

    <view class="upgrade-bottom">
      <u-popup safeAreaInsetBottom mode='bottom' :show="show" @close="close">
        <view class="upgrade-bottom-item">
          <view class="upgrade-bottom-item-title">
            <text>选择抖音账号</text>
          </view>
          <view class="upgrade-bottom-item-main">
            <view class="upgrade-bottom-item-main-item">
              <view class="item-center">
              </view>
              <view class="item-center-item">
                <text>账号名称</text>
                <view class="item-center-item-bottom">
                  <image src="@/static/qt.png" alt=""><text>青铜等级</text>
                </view>
              </view>
              <view class="item-footer">
                <u-radio-group v-model="value">
                  <u-radio shape="circle" activeColor="red" size="40"></u-radio>
                </u-radio-group>
              </view>
            </view>
          </view>

          <view class="footer-bottom">
            <view class="footer-bottom-left">
              <image src="@/static/chuang.png" alt="">
                <view>
                  <text>添加橱窗</text>
                </view>
            </view>
            <view class="footer-bottom-right" @click="getTask">
              <view class="footer-button">
                <view class="footer-button-left">
                  <text>+3补贴</text>
                </view>
                <view>
                  <text class="footer-button-right">立即领取</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </u-popup>
    </view>
    <!-- 升级vip -->

    <!-- 取消任务 -->
    <view class="cancel-task">
      <u-popup mode='center' :show="cancelTaskStatus" @close="TaskClose">
        <view class="cancel-task-item">
          <view class="cancel-task-item-title">
            <text>再次确认是否取消任务</text>
          </view>
        </view>
        <view class="cancel-task-bottom">
          <view class="cancel-task-bottom-item" @click="pressError">
            <text>按错了</text>
          </view>
          <view class="cancel-task-right" @click="affirmCancl">
            <text>确认取消</text>
          </view>
        </view>
      </u-popup>
    </view>

    <view class="popup-bottom">
      <u-popup safeAreaInsetBottom mode='bottom' :show="cancelTaskStatus" @close="TaskClose">

        <view class="popup-bottom-item">
          <view class="bottom-item-title">
            <view class="bottom-item-title-item">
              <view>
                <text>待完成任务</text>
              </view>
              <view>
                <view class="bottom-item-title-right">
                  <image src="@/static/fuzhi.png" alt="">
                    <text>商品链接</text>
                </view>
              </view>
            </view>

            <view class="bottom-item-title-center">
              <text>任务要求xxxx</text>
            </view>

            <view class="bottom-item-center">
              <view class="bottom-item-center-item">
                <view>
                  <image src="@/static/sp.png" alt="">
                </view>
                <view class="center-item-left">
                  <view class="center-item-left-item">
                    <text>任务编号： sp18277192810</text>
                  </view>
                  <view class="left-item-bottom">
                    <view class="left-item-bottom-item">
                      <view class="left-item-bottom-item-left">
                        <text>待上传</text>
                      </view>
                      <view class="left-item-bottom-item-right">
                        <text>￥5.28</text>
                      </view>
                    </view>

                    <view class="left-item-bottom-right">
                      <text>11-01 16:24:26 接单</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <view class="bottom-item-bottom">
              <view>
                <button>复制视频</button>
              </view>
              <view>
                <button>上传链接</button>
              </view>
              <view class="bottom-item-bottom-item">
                <button>取消任务</button>
              </view>

            </view>

            <view class="bottom-item-footer">
              <view class="bottom-item-footer-item">
              </view>
              <view class="footer-item-right">
                <text>账号名称</text>
              </view>
            </view>
          </view>
        </view>


      </u-popup>
    </view>
    <!-- 取消任务 -->

    <!-- 上传视频 -->
    <view class="update-video">
      <u-popup mode='center' :show="uploadVideoStatus" @close="uploadVideoShow" round="10">
        <view class="update-video-item">
          <view class="video-title">
            <text>复制已发布的抖音视频分享链接</text>
          </view>
          <view class="video-main">
            <view class="video-main-item">

            </view>
          </view>
          <view class="video-footer">
            <view class="video-footer-top" @click="clickFnPasts">
              <text>点击粘贴视频链接</text>
            </view>
            <view @click="affirmSubmit" class="video-footer-bottom">
              <text>确认提交</text>
            </view>
          </view>
        </view>
      </u-popup>
    </view>



    <view class="popup-bottom">
      <u-popup safeAreaInsetBottom mode='bottom' :show="uploadVideoStatus" @close="uploadVideoShow">

        <view class="popup-bottom-item">
          <view class="bottom-item-title">
            <view class="bottom-item-title-item">
              <view>
                <text>待完成任务</text>
              </view>
              <view>
                <view class="bottom-item-title-right">
                  <image src="@/static/fuzhi.png" alt="">
                    <text>商品链接</text>
                </view>
              </view>
            </view>

            <view class="bottom-item-title-center">
              <text>任务要求xxxx</text>
            </view>

            <view class="bottom-item-center">
              <view class="bottom-item-center-item">
                <view>
                  <image src="@/static/sp.png" alt="">
                </view>
                <view class="center-item-left">
                  <view class="center-item-left-item">
                    <text>任务编号： sp18277192810</text>
                  </view>
                  <view class="left-item-bottom">
                    <view class="left-item-bottom-item">
                      <view class="left-item-bottom-item-left">
                        <text>待上传</text>
                      </view>
                      <view class="left-item-bottom-item-right">
                        <text>￥5.28</text>
                      </view>
                    </view>

                    <view class="left-item-bottom-right">
                      <text>11-01 16:24:26 接单</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <view class="bottom-item-bottom">
              <view>
                <button>复制视频</button>
              </view>
              <view>
                <button>上传链接</button>
              </view>
              <view class="bottom-item-bottom-item">
                <button>取消任务</button>
              </view>

            </view>

            <view class="bottom-item-footer">
              <view class="bottom-item-footer-item">
              </view>
              <view class="footer-item-right">
                <text>账号名称</text>
              </view>
            </view>
          </view>
        </view>
      </u-popup>
    </view>
    <!-- 上传视频 -->

    <!-- 复制视频 -->
    <view class="copy-video">
      <u-popup mode='center' :show="copyVideoStatus" @close="copyVideoShow" round="10">
        <view class="copy-video-item">
          <view class="copy-video-item-top">
            <view class="video-top-box">
            </view>
          </view>
          <view class="copy-video-item-bottom">
            <view class="video-item-bottom-left" @click="noMoreWarn">
              <text>下次不再提醒</text>
            </view>
            <view class="video-item-bottom-right" @click="affirmFn">
              <text>确认</text>
            </view>
          </view>
          <view>

          </view>
        </view>
      </u-popup>
    </view>


    <view class="popup-bottom">
      <u-popup safeAreaInsetBottom mode='bottom' :show="copyVideoStatus" @close="uploadVideoShow">

        <view class="popup-bottom-item">
          <view class="bottom-item-title">
            <view class="bottom-item-title-item">
              <view>
                <text>待完成任务</text>
              </view>
              <view>
                <view class="bottom-item-title-right">
                  <image src="@/static/fuzhi.png" alt="">
                    <text>商品链接</text>
                </view>
              </view>
            </view>

            <view class="bottom-item-title-center">
              <text>任务要求xxxx</text>
            </view>

            <view class="bottom-item-center">
              <view class="bottom-item-center-item">
                <view>
                  <image src="@/static/sp.png" alt="">
                </view>
                <view class="center-item-left">
                  <view class="center-item-left-item">
                    <text>任务编号： sp18277192810</text>
                  </view>
                  <view class="left-item-bottom">
                    <view class="left-item-bottom-item">
                      <view class="left-item-bottom-item-left">
                        <text>待上传</text>
                      </view>
                      <view class="left-item-bottom-item-right">
                        <text>￥5.28</text>
                      </view>
                    </view>

                    <view class="left-item-bottom-right">
                      <text>11-01 16:24:26 接单</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <view class="bottom-item-bottom">
              <view>
                <button>复制视频</button>
              </view>
              <view>
                <button>上传链接</button>
              </view>
              <view class="bottom-item-bottom-item">
                <button>取消任务</button>
              </view>

            </view>

            <view class="bottom-item-footer">
              <view class="bottom-item-footer-item">
              </view>
              <view class="footer-item-right">
                <text>账号名称</text>
              </view>
            </view>
          </view>
        </view>


      </u-popup>
    </view>
    <!-- 复制视频 -->
  </view>
</template>

<script>
  import {
    getGoodsDetail
  } from '@/api/home.js'
  export default {
    data() {
      return {
        attentionShow: false, //是否关注
        show: false, //升级vip弹层
        taskStatus: false, //是否领取
        grade: true, //等级
        value: false, //单选状态
        cancelTaskStatus: false, //取消任务弹层
        uploadVideoStatus: false, //上传
        copyVideoStatus: false, //复制
        list: {},
        uname: [],
        imgs: [],
        linkUrl: '', //复制链接
      }
    },
    methods: {
      async getDeatilList(id) {
        const {
          data
        } = await getGoodsDetail({
          id: id
        })
        console.log(data)
        this.list = data
        this.uname = JSON.parse(this.list.skus)
        this.imgs = JSON.parse(this.list.imgs)
        this.linkUrl = data.link
      },
      copyLink() {
        uni.setClipboardData({
          data: this.linkUrl,
          success: function() {
            uni.showToast({
              title: '复制成功',
              duration: 2000,
              icon: 'none'
            });
          },
          fail: function(err) {
            uni.showToast({
              title: '复制失败',
              duration: 2000,
              icon: 'none'
            });
          }
        });
      },
      copyVideoShow() {
        this.copyVideoStatus = false
      },
      onLoad(options) {
        //当前id
        this.getDeatilList(options.id)
      },
      attentionFn() {
        this.attentionShow = !this.attentionShow
      },
      getTask() {
        if (this.grade) {
          this.taskStatus = true
        } else {
          this.show = true
        }
      },
      close() {
        this.show = false
        // console.log('close');
      },
      TaskClose() {
        this.cancelTaskStatus = false
      },
      getUpgrade() {

        uni.navigateTo({
          url: '/pages/upgrade/upgrade'
        })


      },
      cancelTask() {
        this.cancelTaskStatus = true
      },
      affirmCancl() {
        uni.$u.toast('取消任务成功');
      },
      pressError() {
        this.cancelTaskStatus = false
      },
      copyVideo() {
        uni.downloadFile({
          url: 'https://yishijie1.oss-cn-beijing.aliyuncs.com/mp4/1.mp4',
          success: (res) => {
            const that = this
            if (res.statusCode === 200) {
              // 保存视频到手机相册
              uni.saveVideoToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function() {
                  // 成功提示
                  uni.showToast({
                    title: '保存成功',
                    icon: 'success'
                  })
                }
              })
            }

          }
        })
        this.copyVideoStatus = true
      },
      noMoreWarn() {
        this.copyVideoStatus = false
      },
      affirmFn() {
        uni.$u.toast('确认');
        this.copyVideoStatus = false
      },
      uploadVideo() {
        this.uploadVideoStatus = true
      },
      clickFnPasts() {
        uni.$u.toast('粘贴成功');
      },
      affirmSubmit() {
        uni.$u.toast('提交成功');
        this.uploadVideoStatus = false
      },
      uploadVideoShow() {
        this.uploadVideoStatus = false
      }
    }
  }
</script>

<style lang="scss">
  .app {
    padding: 5rpx;
    background-color: #F5F5F5;

    .swiper {
      position: relative;

      swiper {
        height: 720rpx;

        .swiper-item,
        image {
          width: 100%;
          height: 100%;
          border-radius: 15rpx;
        }
      }
    }

    .swiper-shipin {
      position: absolute;
      top: 665rpx;
      left: 20rpx;

      image {
        width: 46rpx;
        height: 46rpx;
      }
    }

    .main {
      padding: 8rpx;
      margin-bottom: 25rpx;

      .title {
        display: flex;
        background-color: #fff;
        margin-top: 20rpx;

        .title-left {
          margin-left: 15rpx;

          .title-left-item {
            display: flex;
            text-align: center;

            .left {
              color: #E62828;
              font-size: 38rpx;
              font-weight: 700;
              margin-top: 10rpx;
            }

            .right {
              background-color: #FCE8E9;
              width: 260rpx;
              border-radius: 25rpx;
              height: 55rpx;
              margin-left: 30rpx;
              color: #E72E2E;
              margin-top: 10rpx;
              font-size: 25rpx;
              font-weight: 700;
              line-height: 55rpx;
            }
          }

          .second {
            margin-top: 15rpx;
            font-size: 20rpx;
            color: #707070;
          }
        }

        .title-right {
          .title-right-item {
            display: flex;
            margin-left: 160rpx;
            margin-top: 30rpx;
            width: 80rpx;
            text-align: center;
            margin-left: 150rpx;

            image {
              width: 32rpx;
              height: 36rpx;
            }

            .test {
              font-size: 20rpx;
              color: #000000;
            }
          }
        }
      }

      .headline {
        font-size: 30rpx;
        font-weight: 700;
        margin-left: 15rpx;

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
        height: 80rpx;
        margin-bottom: 35rpx;
        background-color: #fff;

        .attention-item {
          margin-left: 15rpx;
          margin-top: 20rpx;
          line-height: 50rpx;
          height: 30rpx;
          line-height: 30rpx;
          display: flex;
          align-items: center;

          image {
            width: 36rpx;
            height: 36rpx;
          }

          text {
            font-size: 25rpx;
            color: #8C8C8C;
            margin-left: 8rpx;
          }

          .attention-item-center {
            display: flex;
            align-items: center;
          }

          .attention-item-right {
            display: flex;
            margin-right: 15rpx;
          }
        }
      }

      .Live {
        padding: 8rpx;
        margin-bottom: 25rpx;

        .Live-itme {
          height: 40rpx;
          margin-left: 15rpx;
          display: flex;
          justify-content: space-between;
          margin-top: 8rpx;

          .Live-itme-top {
            display: flex;

            image {
              width: 35rpx;
              height: 27rpx;
            }

            text {
              font-weight: 700;
              font-size: 25rpx;
              margin-left: 10rpx;
            }
          }


          .Live-itme-margin {
            margin-right: 20rpx;

            image {
              width: 30rpx;
              height: 30rpx;
            }
          }
        }

        .Live-itme-text {
          margin-left: 12rpx;
          font-size: 25rpx;
          margin-top: 15rpx;
          margin-bottom: 20rpx;
        }
      }

      .product {
        padding: 12rpx;


        .product-item {
          display: flex;
          justify-content: space-between;


          .product-item-title {
            display: flex;
            margin-top: 10rpx;
            margin-left: 10rpx;

            image {
              width: 30rpx;
              height: 30rpx;
            }

            text {
              font-size: 25rpx;
              font-weight: 700;
              margin-left: 10rpx;
            }
          }

          .product-item-right {
            margin-right: 20rpx;

            image {
              width: 30rpx;
              height: 30rpx;
            }
          }
        }

        .product-item-bottom {
          margin-left: 8rpx;
          font-size: 25rpx;
          margin-top: 25rpx;
        }
      }
    }

    .footer {
      background-color: #fff;
      box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);

      .videoTask {
        padding: 15rpx;
        margin-left: 15rpx;

        .videoTask-item {
          display: flex;
          justify-content: space-between;

          .videoTask-item-title {
            display: flex;
            align-items: center;

            .videoTask-item-left {
              font-size: 25rpx;
              font-weight: 700;
            }

            .videoTask-item-center {
              display: flex;
              align-items: center;
              margin-left: 15rpx;

              image {
                width: 45rpx;
                height: 45rpx;
              }

              .videoTask-item-center-item {
                margin-left: 8rpx;
                font-size: 20rpx;
                color: #CB8C51;
              }
            }
          }

          .videoTask-item-title-right {
            font-size: 20rpx;
            color: red;
            margin-right: 30rpx;
            margin-top: 10rpx;
          }
        }

        .videoTask-center {
          font-size: 25rpx;
        }
      }

      .footer-bottom {
        display: flex;
        margin-top: 30rpx;

        .footer-bottom-left {
          width: 130rpx;
          height: 120rpx;
          text-align: center;
        }

        .footer-bottom-right {
          margin-left: 20rpx;
          width: 560rpx;
          height: 80rpx;
          border-radius: 40rpx;
          background-color: #E8342E;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
      }
    }

    .draw {
      margin-top: 10rpx;
      background-color: #fff;
      padding: 20rpx;
      z-index: 9999;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.3);

      .draw-title {
        margin-top: 5rpx;
        margin-left: 15rpx;
        margin-right: 15rpx;
        display: flex;
        justify-content: space-between;

        .draw-title-center {
          color: #787878;
          font-size: 23rpx;
          margin-top: 5rpx;
        }

        .draw-title-left {
          color: #4297EB;
          font-weight: 700;
          font-size: 25rpx;
        }

        .draw-title-right {
          display: flex;
          align-items: center;

          image {
            width: 40rpx;
            height: 40rpx;
            margin-right: 20rpx;
          }

          .draw-title-right-item {
            font-size: 25rpx;
            color: #676767;
          }
        }
      }

      .commodity {
        margin-left: 15rpx;
        display: flex;
        margin-top: 25rpx;

        .commodity-left {
          image {
            width: 102rpx;
            height: 102rpx;
          }
        }

        .commodity-right {
          margin-left: 30rpx;
          width: 540rpx;

          .commodity-right-title {
            color: #333333;
            font-size: 25rpx;
            font-weight: 700;
            margin-top: 10rpx;
          }

          .commodity-right-center {
            display: flex;
            justify-content: space-between;
            margin-top: 30rpx;

            .ommodity-right-center-left {
              display: flex;
              text-align: center;

              .ommodity-right-center-left-box1 {
                width: 96rpx;
                height: 30rpx;
                background-color: #EF8325;
                border-radius: 10rpx;
                font-size: 20rpx;
                color: #fff;
              }

              .ommodity-right-center-left-box2 {
                width: 96rpx;
                height: 30rpx;
                background-color: #EF8325;
                border-radius: 10rpx;
                margin-left: 25rpx;
                font-size: 20rpx;
                color: #fff;
              }
            }

            .ommodity-right-center-right {
              font-size: 20rpx;
              color: #676767;
              margin-right: 4rpx;
            }
          }
        }
      }

      .buttons {
        display: flex;
        margin-left: 15rpx;
        justify-content: space-between;

        .buttons-item {
          width: 180rpx;
          height: 56rpx;
          font-size: 25rpx;

          button {
            background-color: #FFFFFF;
            color: #676767;
          }
        }

        .buttons-item-right {
          margin-right: 15rpx;

          button {
            background-color: #FFFFFF;
            color: #676767;
          }
        }
      }

      .account {
        display: flex;
        align-items: center;
        margin-left: 15rpx;
        margin-top: 25rpx;

        .account-item {
          background-color: #707070;
          width: 50rpx;
          height: 50rpx;
          border-radius: 25rpx;
        }

        .account-right {
          margin-left: 20rpx;
          color: #757575;
          font-size: 25rpx;
          font-weight: 700;
        }
      }
    }

    .upgradeVip {
      .upgradeVip-item {
        width: 600rpx;
        height: 260rpx;
        display: flex;
        align-items: center;
        justify-content: center;

        image {
          width: 400rpx;
          height: 248rpx;
          margin-left: 40rpx;
        }
      }

      .upgradeVip-bottom {
        width: 600rpx;
        height: 46rpx;
        display: flex;
        justify-content: space-between;
        padding: 20rpx;

        .upgradeVip-bottom-item-left {
          margin-left: 68rpx;
          font-size: 26rpx;
          color: #888888;
        }

        .upgradeVip-bottom-item-right {
          margin-right: 68rpx;
          font-size: 26rpx;
          color: #D33D34;
        }
      }
    }

    .upgrade-bottom {
      .upgrade-bottom-item {
        width: 750rpx;
        height: 300rpx;
        padding: 20rpx;

        .upgrade-bottom-item-title {
          color: #333333;
          font-size: 25rpx;
          font-weight: 700;
          margin-left: 20rpx;
        }

        .upgrade-bottom-item-main {
          .upgrade-bottom-item-main-item {
            display: flex;
            margin-left: 20rpx;
            margin-top: 30rpx;
            align-content: center;

            .item-center {
              width: 94rpx;
              height: 94rpx;
              border-radius: 47rpx;
              background-color: #D8D8D8;
            }

            .item-center-item {
              margin-left: 25rpx;
              margin-top: 10rpx;

              text {
                color: #333333;
                font-weight: 700;
                font-size: 25rpx;
              }

              .item-center-item-bottom {
                display: flex;
                align-items: center;
                margin-top: 8rpx;

                image {
                  width: 40rpx;
                  height: 36rpx;
                }

                text {
                  color: #888888;
                  font-size: 25rpx;
                  margin-left: 5rpx;
                  font-weight: normal;
                }
              }
            }

            .item-footer {
              margin-left: 380rpx;
              margin-top: 10rpx;
            }
          }
        }

        .footer-bottom {
          display: flex;
          margin-top: 30rpx;

          .footer-bottom-left {
            width: 130rpx;
            height: 120rpx;
            text-align: center;
            font-size: 23rpx;

            image {
              width: 40rpx;
              height: 40rpx;
            }
          }

          .footer-bottom-right {
            margin-left: 20rpx;
            width: 560rpx;
            height: 80rpx;
            border-radius: 40rpx;
            background-color: #E8342E;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;


            .footer-button {
              display: flex;

              .footer-button-left {
                margin-right: 15rpx;
              }

              .footer-button-right {
                margin-left: 15rpx;
              }
            }
          }
        }

      }
    }

    .cancel-task {
      .cancel-task-item {
        width: 640rpx;
        height: 170rpx;

        .cancel-task-item-title {
          display: flex;
          justify-content: center;
          align-items: center;

          text {
            color: #333333;
            font-weight: 700;
            font-size: 26rpx;
            margin-top: 54rpx;
          }
        }
      }

      .cancel-task-bottom {
        display: flex;
        width: 640rpx;
        height: 60rpx;
        justify-content: space-between;

        .cancel-task-bottom-item {
          margin-left: 122rpx;

          text {
            color: #888888;
            font-size: 26rpx;
          }
        }

        .cancel-task-right {
          margin-right: 106rpx;

          text {
            color: #D33D34;
            font-size: 26rpx;
          }
        }
      }
    }

    .popup-bottom {
      .popup-bottom-item {
        width: 750rpx;
        height: 404rpx;
        padding: 20rpx;

        .bottom-item-title {
          padding: 8rpx 16rpx 12rpx 18rpx;

          .bottom-item-title-item {
            display: flex;
            justify-content: space-between;
            font-size: 24rpx;
            color: #4297EB;
            font-weight: 700;

            .bottom-item-title-right {
              display: flex;
              align-items: center;
              margin-right: 44rpx;
              font-size: 24rpx;
              color: #676767;

              image {
                width: 35rpx;
                height: 35rpx;
                margin-right: 18rpx;
              }
            }
          }

          .bottom-item-title-center {
            margin-top: 20rpx;
            font-size: 22rpx;
            color: #676767;
          }

          .bottom-item-center {
            margin-top: 22rpx;

            .bottom-item-center-item {
              display: flex;
              align-items: center;

              image {
                width: 104rpx;
                height: 104rpx;
              }

              .center-item-left {
                margin-left: 26rpx;

                .center-item-left-item {
                  font-size: 22rpx;
                  font-weight: 700;
                  margin-top: 10rpx;
                }

                .left-item-bottom {
                  display: flex;
                  margin-top: 28rpx;

                  .left-item-bottom-item {
                    display: flex;

                    .left-item-bottom-item-left {
                      width: 96rpx;
                      height: 30rpx;
                      background-color: #EF8325;
                      border-radius: 10rpx;
                      font-size: 20rpx;
                      color: #fff;
                      text-align: center;
                    }

                    .left-item-bottom-item-right {
                      width: 96rpx;
                      height: 30rpx;
                      background-color: #EF8325;
                      border-radius: 10rpx;
                      font-size: 20rpx;
                      color: #fff;
                      text-align: center;
                      margin-left: 20rpx;
                    }
                  }

                  .left-item-bottom-right {
                    font-size: 22rpx;
                    color: #676767;
                    margin-left: 116rpx;
                  }
                }
              }
            }
          }

          .bottom-item-bottom {
            display: flex;
            justify-content: space-between;
            margin-top: 20rpx;

            button {
              width: 180rpx;
              height: 56rpx;
              font-size: 22rpx;
              color: #676767;
              background-color: #FFFFFF;
            }

            .bottom-item-bottom-item {
              margin-right: 46rpx;
            }
          }

          .bottom-item-footer {
            display: flex;
            align-items: center;
            margin-top: 34rpx;

            .bottom-item-footer-item {
              width: 52rpx;
              height: 52rpx;
              background-color: #676767;
              border-radius: 51rpx;
            }

            .footer-item-right {
              font-size: 24rpx;
              font-weight: 700;
              color: #676767;
              margin-left: 20rpx;
            }
          }
        }
      }
    }

    .copy-video {
      .copy-video-item {
        width: 640rpx;
        height: 480rpx;

        .copy-video-item-top {
          display: flex;
          align-items: center;
          justify-content: center;

          .video-top-box {
            width: 620rpx;
            background-color: #D8D8D8;
            height: 400rpx;
            border: 1px solid #979797;
            margin-top: 10rpx;
          }
        }

        .copy-video-item-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 15rpx;

          .video-item-bottom-left {
            margin-left: 80rpx;

            text {
              color: #888888;
              font-size: 25rpx;
            }
          }

          .video-item-bottom-right {
            margin-right: 130rpx;

            text {
              color: #D33D34;
              font-size: 25rpx;
            }
          }
        }
      }
    }

    .update-video {
      .update-video-item {
        width: 650rpx;
        height: 480rpx;

        .video-title {
          margin-left: 18rpx;
          margin-top: 15rpx;
          margin-bottom: 15rpx;

          text {
            color: #000000;
            font-weight: 700;
            font-size: 23rpx;
          }
        }

        .video-main {
          display: flex;
          align-items: center;
          justify-content: center;

          .video-main-item {
            width: 550rpx;
            height: 280rpx;
            background-color: #D8D8D8;
            border: 1px solid #676767;
          }
        }

        .video-footer {
          margin-top: 20rpx;

          .video-footer-top {
            display: flex;
            align-items: center;
            justify-content: center;

            text {
              color: #D33D34;
              font-size: 25rpx;
            }
          }

          .video-footer-bottom {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 28rpx;

            text {
              color: #888888;
              font-size: 25rpx;
            }
          }
        }
      }
    }

    .footer-bottom {
      display: flex;
      margin-top: 30rpx;

      .footer-bottom-left {
        width: 130rpx;
        height: 120rpx;
        text-align: center;
        font-size: 23rpx;

        image {
          width: 40rpx;
          height: 40rpx;
        }
      }

      .footer-bottom-right {
        margin-left: 20rpx;
        width: 560rpx;
        height: 80rpx;
        border-radius: 40rpx;
        background-color: #E8342E;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;

        .footer-button {
          display: flex;

          .footer-button-left {
            margin-right: 15rpx;
          }

          .footer-button-right {
            margin-left: 15rpx;
          }
        }
      }
    }

    .down {
      margin-bottom: 390rpx;
    }


    .box {
      background-color: #fff;
      border-radius: 8rpx;
      padding: 8rpx;
    }


  }
</style>
