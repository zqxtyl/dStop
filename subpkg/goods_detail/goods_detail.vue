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
      <img style='width: 46rpx; height: 46rpx;' src="@/static/shipin.png" alt="">
    </view>

    <view class="main">
      <!-- 头部 -->
      <view class="title box">
        <view class="title-left">
          <view class="title-left-item">
            <view class="">
              <p style='color: #E62828; font-size: 38rpx;font-weight: 700;margin-top: 10rpx;'>￥{{list.price}}</p>
            </view>
            <view
              style="background-color: #FCE8E9; width: 260rpx; border-radius: 25rpx;height: 55rpx;margin-left: 30rpx; color: #E72E2E;margin-top: 10rpx;">
              <view style="font-size: 25rpx;font-weight: 700; line-height: 55rpx; ">高佣{{list.commission_rate}}% 约￥8.45
              </view>
            </view>
          </view>
          <view style="margin-top: 15rpx;">
            <p style='font-size: 20rpx;color: #707070;'>公开佣金{{list.commission_rate_open}}%</p>
          </view>
        </view>

        <view class="title-right">
          <view class="title-right-item">
            <view style="width: 80rpx;text-align: center; margin-left: 30rpx;">
              <img style='width: 32rpx;height: 36rpx;' src="@/static/cpgg.png" alt="">
              <view style='font-size: 20rpx; color: #000000 ;'>产品规格</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 头部 -->
      <view class="headline box">
        <view>
          <p style='font-size: 30rpx;font-weight: 700;margin-left: 15rpx;'>{{uname[0]}}</p>
        </view>
      </view>
      <view class="">
        <u-line></u-line>
      </view>
      <view class="attention box" @click="copyLink">
        <view class="attention-item">
          <img style=' width: 36rpx; height: 36rpx;' src="@/static/fuzhil.png" alt="">
          <span style='font-size: 25rpx;color: #8C8C8C;margin-left: 8rpx;'>复制链接</span>
        </view>
        <view class="attention-item" @click="attentionFn">
          <view v-if="attentionShow">
            <view style="display: flex;align-items: center;">
              <view>
                <img style='width: 35rpx;height: 35rpx;' src="@/static/guanzhu.png" alt="">
              </view>
              <view>
                <span style='font-size: 25rpx; color: #8C8C8C;margin-left: 8rpx;'>关注</span>
              </view>
            </view>
          </view>
          <view v-else style="display: flex;align-items: center;">
            <view>
              <img src="@/static/yguanzhu.png" style='width: 36rpx;height: 36rpx;' alt="">
            </view>
            <view>
              <span style='font-size: 25rpx; color: #8C8C8C;margin-left: 8rpx;'>已关注</span>
            </view>
          </view>
        </view>
        <view class="attention-item">
          <view style="display: flex;margin-right: 15rpx;">
            <view>
              <img style='width: 35rpx;height: 35rpx;margin-right: 8rpx;' src="@/static/fenx.png" alt="">
            </view>
            <view>
              <span style='font-size: 25rpx; color: #8C8C8C;'>分享</span>
            </view>
          </view>
        </view>
      </view>

      <view class="Live box">
        <view class="Live-itme">
          <view style="display: flex;">
            <img style='width: 35rpx;height: 27rpx;' src="@/static/zhibo.png" alt="">
            <span style='font-weight: 700; font-size: 25rpx;margin-left: 10rpx;'>直播亮点</span>
          </view>
          <view style="margin-right: 20rpx;">
            <img style='width: 30rpx;height: 30rpx;' src="@/static/fuzhi.png" alt="">
          </view>
        </view>
        <view class="Live-itme-text">
          <p>{{list.live_bright}}</p>
        </view>
      </view>

      <view class="product box" :class="taskStatus?'down':''">
        <view class="product-item">
          <view class="product-item-title">
            <img style='width: 30rpx; height: 30rpx;' src="@/static/cpmd.png" alt="">
            <span style='font-size: 25rpx;font-weight: 700;margin-left: 10rpx;'>产品卖点</span>
          </view>
          <view style="margin-right: 20rpx;">
            <img style='width: 30rpx;height: 30rpx;' src="@/static/fuzhi.png" alt="">
          </view>
        </view>
        <view style="margin-left: 8rpx;">
          <p style='font-size: 25rpx;margin-top: 25rpx;'>{{list.sale_bright}}</p>

        </view>
      </view>
    </view>
    <!-- 未领取 -->
    <view class="footer" v-if="!taskStatus">
      <view class="videoTask">
        <view class="videoTask-item">
          <view class="videoTask-item-title">
            <view>
              <p style='font-size: 25rpx;font-weight: 700;'>视频任务</p>
            </view>
            <view style="display: flex;align-items: center;">
              <view style="margin-left: 15rpx;">
                <img style="width: 45rpx;height: 45rpx;" src="@/static/bojin.png" alt="">
              </view>
              <view style="margin-left: 8rpx;">
                <p style='font-size: 20rpx;color: #CB8C51;'>铂金达人以上</p>
              </view>
            </view>
          </view>
          <view>
            <p style='font-size: 20rpx; color: red;margin-right: 30rpx;margin-top: 10rpx;'>剩余：320</p>
          </view>
        </view>
        <view class="">
          <p style='font-size: 25rpx;'>任务要求xxxxx</p>
        </view>
      </view>
      <view class="footer-bottom">
        <view style="text-align: center;" class="footer-bottom-left">
          <img style='width: 40rpx; height: 40rpx;' src="@/static/chuang.png" alt="">
          <p style='font-size: 23rpx;'>添加橱窗</p>
        </view>
        <view class="footer-bottom-right" @click="getTask">
          <view style="display: flex;">
            <view>
              <p style='margin-right: 15rpx;'>+3补贴</p>
            </view>
            <view>
              <p style='margin-left: 15rpx;'>立即领取</p>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 未领取 -->
    <!-- 已领取 -->
    <view class="draw" v-else>
      <view class="draw-title">
        <view>
          <p style='color: #4297EB;font-weight: 700;font-size: 25rpx;'>待完成任务</p>
        </view>
        <view style="display: flex;align-items: center;">
          <img style='width: 40rpx;height: 40rpx;margin-right: 20rpx;' src="@/static/fuzhi.png" alt="">
          <p style='font-size: 25rpx; color: #676767;'>商品链接</p>
        </view>
      </view>

      <view class="draw-title">
        <p style='color: #787878;font-size: 23rpx;margin-top: 5rpx;'>任务要求xxx</p>
      </view>

      <view class="commodity">
        <view class="commodity-left">
          <img style='width: 102rpx;height: 102rpx;' src="@/static/sp.png" alt="">
        </view>
        <view class="commodity-right">
          <view>
            <p style='color: #333333 ;font-size: 25rpx;font-weight: 700;margin-top: 10rpx;'>任务编号：sp15912345678</p>
          </view>
          <view style="display: flex;justify-content: space-between;margin-top: 30rpx;">
            <view style="display: flex;text-align: center;">
              <view style="width: 96rpx;height: 30rpx;background-color: #EF8325;border-radius: 10rpx;">
                <p style='font-size: 20rpx;color: #fff;'>待上传</p>
              </view>
              <view
                style="width: 96rpx;height: 30rpx;background-color: #EF8325;border-radius: 10rpx;margin-left: 25rpx;">
                <p style='font-size: 20rpx;color: #fff;'>￥5.28</p>
              </view>
            </view>
            <view>
              <p style='font-size: 20rpx;color: #676767 ;margin-right: 4rpx;'>11-01 16:24:26 接单</p>
            </view>
          </view>
        </view>
      </view>

      <view class="buttons">
        <view class="buttons-item">
          <button @click="copyVideo" size="mini" style="background-color: #FFFFFF;color: #676767;">复制视频</button>
        </view>
        <view>
          <button @click="uploadVideo" size="mini" style="background-color: #FFFFFF;color: #676767;">上传视频</button>
        </view>
        <view>
          <button @click="cancelTask" size="mini"
            style="background-color: #FFFFFF;color: #676767;margin-right: 15rpx;">取消任务</button>
        </view>
      </view>

      <view class="account ">
        <view class="account-item">
        </view>
        <view style="margin-left: 20rpx;">
          <p style='color: #757575 ;font-size: 25rpx;font-weight: 700;'>账号名称</p>
        </view>
      </view>
    </view>
    <!-- 已领取 -->

    <!-- 升级vip -->
    <view>
      <u-popup mode='center' :show="show" @close="close" round="10">
        <view style="width: 600rpx;height: 260rpx;display: flex;align-items: center;justify-content: center;">
          <img style='width: 400rpx;height: 248rpx;margin-left: 40rpx;' src="@/static/djbf.png" alt="">
        </view>
        <view style="width: 600rpx; height: 46rpx;display: flex;justify-content: space-between;padding: 20rpx;">
          <view style="margin-left:68rpx ;" @click="show=false">
            <p style='font-size: 26rpx; color: #888888 ;'>下次再说</p>
          </view>
          <view style="margin-right: 68rpx;" @click="getUpgrade">
            <p style='font-size: 26rpx; color: #D33D34  ;'>前往升级</p>
          </view>
        </view>
      </u-popup>
    </view>

    <view>
      <u-popup safeAreaInsetBottom mode='bottom' :show="show" @close="close">
        <view style="width: 750rpx; height: 300rpx; padding: 20rpx;">
          <view style="margin-left: 20rpx;">
            <p style='color: #333333; font-size: 25rpx;font-weight: 700;'>选择抖音账号</p>
          </view>
          <view>
            <view style="display: flex; margin-left: 20rpx;margin-top: 30rpx;align-content: center;">
              <view style="width: 94rpx; height: 94rpx;border-radius: 47rpx;background-color: #D8D8D8;">
              </view>
              <view style="margin-left: 25rpx;margin-top: 10rpx;">
                <p style='color: #333333;font-weight: 700;font-size: 25rpx;'>账号名称</p>
                <view style="display: flex;align-items: center;margin-top: 8rpx;">
                  <img style='width: 40rpx;height: 36rpx;' src="@/static/qt.png" alt=""><span
                    style='color: #888888 ;font-size: 25rpx;margin-left: 5rpx;'>青铜等级</span>
                </view>
              </view>
              <view style="margin-left: 380rpx;margin-top: 10rpx;">
                <u-radio-group v-model="value">
                  <u-radio shape="circle" activeColor="red" size="40"></u-radio>
                </u-radio-group>
              </view>
            </view>
          </view>

          <view class="footer-bottom" style="margin-top: 50rpx;">
            <view style="text-align: center;" class="footer-bottom-left">
              <img style='width: 40rpx; height: 40rpx;' src="@/static/chuang.png" alt="">
              <p style='font-size: 23rpx;'>添加橱窗</p>
            </view>
            <view class="footer-bottom-right" @click="getTask">
              <view style="display: flex;">
                <view>
                  <p style='margin-right: 15rpx;'>+3补贴</p>
                </view>
                <view>
                  <p style='margin-left: 15rpx;'>立即领取</p>
                </view>
              </view>
            </view>
          </view>
        </view>
      </u-popup>
    </view>
    <!-- 升级vip -->

    <!-- 取消任务 -->
    <view>
      <u-popup mode='center' :show="cancelTaskStatus" @close="TaskClose">
        <view style="width: 640rpx;height: 170rpx;">
          <view style="display: flex;justify-content: center;align-items: center;">
            <p style='color: #333333 ;font-weight: 700;font-size: 26rpx;margin-top: 54rpx;'>再次确认是否取消任务</p>
          </view>
        </view>
        <view style="display: flex;width: 640rpx;height: 60rpx;justify-content: space-between;">
          <view style="margin-left: 122rpx;" @click="pressError">
            <p style='color: #888888;font-size: 26rpx;'>按错了</p>
          </view>
          <view style="margin-right: 106rpx;" @click="affirmCancl">
            <p style='color: #D33D34;font-size: 26rpx;'>确认取消</p>
          </view>
        </view>
      </u-popup>
    </view>

    <view>
      <u-popup safeAreaInsetBottom mode='bottom' :show="cancelTaskStatus" @close="TaskClose">

        <view style="width: 750rpx; height: 404rpx; padding: 20rpx;">
          <view style="padding: 8rpx 16rpx; 12rpx 18rpx">
            <view
              style="display: flex;justify-content: space-between;font-size: 24rpx;color: #4297EB ;font-weight: 700;">
              <view>
                <p>待完成任务</p>
              </view>
              <view>
                <view style="display: flex;align-items: center;margin-right: 44rpx;font-size: 24rpx;color: #676767  ;">
                  <img style='width: 35rpx;height: 35rpx;margin-right: 18rpx;' src="@/static/fuzhi.png" alt="">
                  <p>商品链接</p>
                </view>
              </view>
            </view>

            <view style="margin-top: 20rpx;font-size: 22rpx;color: #676767 ;">
              <p>任务要求xxxx</p>
            </view>

            <view style="margin-top: 22rpx;">
              <view style="display: flex;align-items: center;">
                <view>
                  <img style='width: 104rpx;height: 104rpx;' src="@/static/sp.png" alt="">
                </view>
                <view style="margin-left: 26rpx;">
                  <view style="font-size: 22rpx;font-weight: 700;margin-top: 10rpx;">
                    <p>任务编号： sp18277192810</p>
                  </view>
                  <view style="display: flex;margin-top: 28rpx;">
                    <view style="display: flex;">
                      <view
                        style="width: 96rpx;height: 30rpx;background-color: #EF8325 ;border-radius: 10rpx;font-size: 20rpx;color: #fff;text-align: center;">
                        <p>待上传</p>
                      </view>
                      <view
                        style="width: 96rpx;height: 30rpx;background-color: #EF8325 ;border-radius: 10rpx;font-size: 20rpx;color: #fff;text-align: center;margin-left: 20rpx;">
                        <p>￥5.28</p>
                      </view>
                    </view>

                    <view style="font-size: 22rpx;color: #676767;margin-left: 116rpx;">
                      <p>11-01 16:24:26 接单</p>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <view style="display: flex;justify-content: space-between;margin-top: 20rpx;">
              <view>
                <button
                  style="width: 180rpx;height: 56rpx;font-size: 22rpx;color: #676767 ;background-color: #FFFFFF;">复制视频</button>
              </view>
              <view>
                <button
                  style="width: 180rpx;height: 56rpx;font-size: 22rpx;color: #676767 ;background-color: #FFFFFF;">上传链接</button>
              </view>
              <view style="margin-right: 46rpx;">
                <button
                  style="width: 180rpx;height: 56rpx;font-size: 22rpx;color: #676767 ;background-color: #FFFFFF;">取消任务</button>
              </view>

            </view>

            <view style="display: flex;align-items: center;margin-top: 34rpx;">
              <view style="width: 52rpx;height: 52rpx;background-color: #676767;border-radius: 51rpx;">

              </view>
              <view style="font-size: 24rpx;font-weight: 700; color: #676767;margin-left: 20rpx;">
                <p>账号名称</p>
              </view>
            </view>
          </view>
        </view>


      </u-popup>
    </view>
    <!-- 取消任务 -->

    <!-- 上传视频 -->
    <view>
      <u-popup mode='center' :show="uploadVideoStatus" @close="uploadVideoShow" round="10">
        <view style="width: 650rpx;height: 480rpx;">
          <view style="margin-left: 18rpx;margin-top: 15rpx;margin-bottom: 15rpx;">
            <p style='color: #000000 ;font-weight: 700;font-size: 23rpx;'>复制已发布的抖音视频分享链接</p>
          </view>
          <view style="display: flex;align-items: center;justify-content: center;">
            <view style="width: 550rpx;height: 280rpx;background-color: #D8D8D8;border: 1px solid #676767;">

            </view>
          </view>
          <view style="margin-top: 20rpx;">
            <view style="display: flex;align-items: center;justify-content: center;" @click="clickFnPasts">
              <p style='color: #D33D34 ;font-size: 25rpx;'>点击粘贴视频链接</p>
            </view>
            <view @click="affirmSubmit"
              style="display: flex;align-items: center;justify-content: center;margin-top: 28rpx;">
              <p style='color: #888888 ;font-size: 25rpx;'>确认提交</p>
            </view>
          </view>
        </view>
      </u-popup>
    </view>

    <view>
      <u-popup safeAreaInsetBottom mode='bottom' :show="uploadVideoStatus" @close="uploadVideoShow">

        <view style="width: 750rpx; height: 404rpx; padding: 20rpx;">
          <view style="padding: 8rpx 16rpx; 12rpx 18rpx">
            <view
              style="display: flex;justify-content: space-between;font-size: 24rpx;color: #4297EB ;font-weight: 700;">
              <view>
                <p>待完成任务</p>
              </view>
              <view>
                <view style="display: flex;align-items: center;margin-right: 44rpx;font-size: 24rpx;color: #676767  ;">
                  <img style='width: 35rpx;height: 35rpx;margin-right: 18rpx;' src="@/static/fuzhi.png" alt="">
                  <p>商品链接</p>
                </view>
              </view>
            </view>

            <view style="margin-top: 20rpx;font-size: 22rpx;color: #676767 ;">
              <p>任务要求xxxx</p>
            </view>

            <view style="margin-top: 22rpx;">
              <view style="display: flex;align-items: center;">
                <view>
                  <img style='width: 104rpx;height: 104rpx;' src="@/static/sp.png" alt="">
                </view>
                <view style="margin-left: 26rpx;">
                  <view style="font-size: 22rpx;font-weight: 700;margin-top: 10rpx;">
                    <p>任务编号： sp18277192810</p>
                  </view>
                  <view style="display: flex;margin-top: 28rpx;">
                    <view style="display: flex;">
                      <view
                        style="width: 96rpx;height: 30rpx;background-color: #EF8325 ;border-radius: 10rpx;font-size: 20rpx;color: #fff;text-align: center;">
                        <p>待上传</p>
                      </view>
                      <view
                        style="width: 96rpx;height: 30rpx;background-color: #EF8325 ;border-radius: 10rpx;font-size: 20rpx;color: #fff;text-align: center;margin-left: 20rpx;">
                        <p>￥5.28</p>
                      </view>
                    </view>

                    <view style="font-size: 22rpx;color: #676767;margin-left: 116rpx;">
                      <p>11-01 16:24:26 接单</p>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <view style="display: flex;justify-content: space-between;margin-top: 20rpx;">
              <view>
                <button
                  style="width: 180rpx;height: 56rpx;font-size: 22rpx;color: #676767 ;background-color: #FFFFFF;">复制视频</button>
              </view>
              <view>
                <button
                  style="width: 180rpx;height: 56rpx;font-size: 22rpx;color: #676767 ;background-color: #FFFFFF;">上传链接</button>
              </view>
              <view style="margin-right: 46rpx;">
                <button
                  style="width: 180rpx;height: 56rpx;font-size: 22rpx;color: #676767 ;background-color: #FFFFFF;">取消任务</button>
              </view>

            </view>

            <view style="display: flex;align-items: center;margin-top: 34rpx;">
              <view style="width: 52rpx;height: 52rpx;background-color: #676767;border-radius: 51rpx;">

              </view>
              <view style="font-size: 24rpx;font-weight: 700; color: #676767;margin-left: 20rpx;">
                <p>账号名称</p>
              </view>
            </view>
          </view>
        </view>


      </u-popup>
    </view>
    <!-- 上传视频 -->

    <!-- 复制视频 -->
    <view>
      <u-popup mode='center' :show="copyVideoStatus" @close="copyVideoShow" round="10">
        <view style="width: 640rpx;height: 480rpx;">
          <view style="display: flex;align-items: center;justify-content: center;">
            <view
              style="width: 620rpx;background-color: #D8D8D8;height: 400rpx;border: 1px solid #979797;margin-top: 10rpx;">
            </view>
          </view>
          <view style="display: flex;justify-content: space-between;margin-top: 15rpx;">
            <view style="margin-left: 80rpx;" @click="noMoreWarn">
              <p style='color: #888888 ;font-size: 25rpx;'>下次不再提醒</p>
            </view>
            <view style="margin-right: 130rpx;" @click="affirmFn">
              <p style='color: #D33D34 ;font-size: 25rpx;'>确认</p>
            </view>
          </view>
          <view>

          </view>
        </view>
      </u-popup>
    </view>

    <view>
      <u-popup safeAreaInsetBottom mode='bottom' :show="copyVideoStatus" @close="uploadVideoShow">
        <view style="width: 750rpx; height: 404rpx; padding: 20rpx;">
          <view style="padding: 8rpx 16rpx; 12rpx 18rpx">
            <view
              style="display: flex;justify-content: space-between;font-size: 24rpx;color: #4297EB ;font-weight: 700;">
              <view>
                <p>待完成任务</p>
              </view>
              <view>
                <view style="display: flex;align-items: center;margin-right: 44rpx;font-size: 24rpx;color: #676767  ;">
                  <img style='width: 35rpx;height: 35rpx;margin-right: 18rpx;' src="@/static/fuzhi.png" alt="">
                  <p>商品链接</p>
                </view>
              </view>
            </view>

            <view style="margin-top: 20rpx;font-size: 22rpx;color: #676767 ;">
              <p>任务要求xxxx</p>
            </view>

            <view style="margin-top: 22rpx;">
              <view style="display: flex;align-items: center;">
                <view>
                  <img style='width: 104rpx;height: 104rpx;' src="@/static/sp.png" alt="">
                </view>
                <view style="margin-left: 26rpx;">
                  <view style="font-size: 22rpx;font-weight: 700;margin-top: 10rpx;">
                    <p>任务编号： sp18277192810</p>
                  </view>
                  <view style="display: flex;margin-top: 28rpx;">
                    <view style="display: flex;">
                      <view
                        style="width: 96rpx;height: 30rpx;background-color: #EF8325 ;border-radius: 10rpx;font-size: 20rpx;color: #fff;text-align: center;">
                        <p>待上传</p>
                      </view>
                      <view
                        style="width: 96rpx;height: 30rpx;background-color: #EF8325 ;border-radius: 10rpx;font-size: 20rpx;color: #fff;text-align: center;margin-left: 20rpx;">
                        <p>￥5.28</p>
                      </view>
                    </view>

                    <view style="font-size: 22rpx;color: #676767;margin-left: 116rpx;">
                      <p>11-01 16:24:26 接单</p>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <view style="display: flex;justify-content: space-between;margin-top: 20rpx;">
              <view>
                <button
                  style="width: 180rpx;height: 56rpx;font-size: 22rpx;color: #676767 ;background-color: #FFFFFF;">复制视频</button>
              </view>
              <view>
                <button
                  style="width: 180rpx;height: 56rpx;font-size: 22rpx;color: #676767 ;background-color: #FFFFFF;">上传链接</button>
              </view>
              <view style="margin-right: 46rpx;">
                <button
                  style="width: 180rpx;height: 56rpx;font-size: 22rpx;color: #676767 ;background-color: #FFFFFF;">取消任务</button>
              </view>

            </view>

            <view style="display: flex;align-items: center;margin-top: 34rpx;">
              <view style="width: 52rpx;height: 52rpx;background-color: #676767;border-radius: 51rpx;">

              </view>
              <view style="font-size: 24rpx;font-weight: 700; color: #676767;margin-left: 20rpx;">
                <p>账号名称</p>
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
        attentionShow: false,
        show: false,
        taskStatus: false, //是否领取
        grade: true, //等级
        value: false,
        cancelTaskStatus: false,
        uploadVideoStatus: false,
        copyVideoStatus: false,
        list: {},
        uname: [],
        imgs: [],
        linkUrl: ''
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

          }
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
          }
        }
      }

      .footer-bottom {
        display: flex;
        margin-top: 30rpx;

        .footer-bottom-left {
          width: 130rpx;
          height: 120rpx;
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
      }

      .commodity {
        margin-left: 15rpx;
        display: flex;
        margin-top: 25rpx;

        .commodity-left {}

        .commodity-right {
          margin-left: 30rpx;
          width: 540rpx;
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
      }
    }

    .footer-bottom {
      display: flex;
      margin-top: 30rpx;

      .footer-bottom-left {
        width: 130rpx;
        height: 120rpx;
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
