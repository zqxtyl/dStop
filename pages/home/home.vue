<template>
  <view class="app">
    <view class="swiper">
      <!-- 轮播图区域 -->
      <swiper indicator-color='#CCCCCC' :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"
        :circular="true" indicator-active-color='#fff'>
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
        <img style='width: 220rpx;height: 160rpx; ' src="@/static/dq-qt.png" alt="">
      </view>
      <view class="mian-item">
        <img style='width: 220rpx;height: 160rpx; ' src="@/static/xszd.png" alt="">
      </view>
      <view class="mian-item">
        <img style='width: 220rpx;height: 160rpx;' src="@/static/jjdr.png" alt="">
      </view>
    </view>
    <view class="goods">
      <u-tabs keyName="title" :current="current" @change="changeOption" :list="categoryList" lineWidth="30"
        lineColor="#fff" :activeStyle="{
            color: '#000000',
            fontWeight: 700,
            transform: 'scale(1.08)'
        }" :inactiveStyle="{
            color: '#000000',
            fontSize:'28rpx',
            transform: 'scale(1)'
        }" itemStyle="padding-left: 15rpx; padding-right: 15rpx; height: 60rpx;">
        <view class=".dropdown" slot="right" style="padding-left: 4rpx;" @tap="show = true">
          <u-icon name="arrow-down-fill" size="40" bold></u-icon>
        </view>
      </u-tabs>
      <view class="u-list-item" v-if="current==0">
        <view class="">
          <view>
            <view class="tab">
              <view v-for="(item,index) in screen.list" class="tab-item">
                <text class="tab-txt" :class="screen.currentIndex===index?'blue':'black'"
                  @click="toggleclass(index)">{{item.name}}</text>
                <view class="icon" v-if="item.name!=='综合筛选'">
                  <view class="iconfont icon-Down;" :class="item.status===1?'black':'gray'"></view>
                  <view class="iconfont icon-up" :class="item.status===2?'black':'gray'"></view>
                </view>
              </view>

            </view>
          </view>
        </view>
        <ug-goods :list='products'></ug-goods>
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
    </view>
    <!-- 弹层 -->
    <view class="">
      <u-popup :show="show" mode="center" @close="close" @open="open">
        <view v-for="(item,i) in screen.list" :key="i" style="width: 750rpx;display: felx;text-align: center;">
          <view :class="i==current?'blue':'black'" @click="changeTabs(i)"
            style="background-color: #ccc;width: 180rpx;border-radius: 15rpx;margin: 5rpx;">
            {{item.name}}
          </view>
        </view>
      </u-popup>
    </view>

  </view>
</template>

<script>
  import {
    getHome
  } from '@/api/home.js'
  import ugGoods from '@/components/ug-goods/ug-goods.vue'
  export default {
    components: {
      ugGoods
    },
    data() {
      return {
        homeList: {},
        products: [],
        sorts: {},
        list3: [
          'https://cdn.uviewui.com/uview/swiper/swiper3.png',
          'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          'https://cdn.uviewui.com/uview/swiper/swiper1.png',
        ],
        categoryList: [],
        current: 0,
        show: false,
        screen: {
          currentIndex: 0,
          list: [{
              name: '综合筛选',
              status: 0,
            },
            {
              name: "销量排序",
              status: 0,
              key: 'all'
            },
            {
              name: "佣金排序",
              status: 0,
              key: 'sale_count'
            },
            {
              name: "售价排序",
              status: 0,
              key: 'min_price'
            },
          ],
        }
      };
    },
    methods: {
      goToDescription() {
        uni.navigateTo({
          url: `/subpkg/goods_detail/goods_detail`
        })
      },
      changeOption(e) {
        this.current = e.index
      },
      changeTabs(i) {
        this.current = i
        this.show = false
      },
      toggleclass(index) {
        //命名一下当前active的标签index
        let chooseindex = this.screen.currentIndex
        //获取一下当前active的标签
        let choose = this.screen.list[chooseindex]
        //判定点击的标签是不是当前active的标签
        if (index === this.screen.currentIndex) {
          //是的话修改标签的status属性
          choose.status = choose.status === 1 ? 2 : 1
        } else {
          //如果点击标签不是当前active标签
          //初始化标签的status属性
          choose.status = 0
          //让点击标签成为当前active标签
          this.screen.currentIndex = index
          //修改active标签的status属性
          this.screen.list[index].status = 1
        }
      },
      async getHomeList() {
        const
          data = await getHome()
        this.homeList = data.data
        this.products = data.data.products
        this.categoryList = data.data.cates
        this.sorts = data.sorts
        console.log(data)
      },
      close() {
        this.show = false
        // console.log('close');
      },
      open(e) {
        // console.log('open', e)
      },
      change(e) {
        // console.log('change', e)
      },
      //筛选点击
      tabClick(index) {
        if (this.filterIndex === index && index !== 2) {
          return;
        }
        this.filterIndex = index;
        if (index === 2) {
          this.priceOrder = this.priceOrder === 1 ? 2 : 1;
        } else {
          this.priceOrder = 0;
        }
        uni.pageScrollTo({
          duration: 300,
          scrollTop: 0
        })
        this.loadData('refresh', 1);
        uni.showLoading({
          title: '正在加载'
        })
      },
    },
    onLoad() {
      this.getHomeList()
    },
    onShow() {
      this.getHomeList()
    }
  }
</script>

<style lang="scss">
  .app {
    padding: 15rpx;

    swiper {
      height: 386rpx;

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

    .goods {
      background-color: #F5F5F5;
    }


    //阿里图标库找的图标
    /* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */

    .iconfont {
      font-family: "iconfont" !important;
      font-size: 32rpx;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 14rpx;
      color: lightgray;
    }

    .icon-jiangxu:before {
      content: "\e6cc";
    }

    .icon-shengxu:before {
      content: "\e6cf";
    }

    //切换颜色备用的css
    .black {
      color: black;
    }

    .blue {
      color: blue;
    }

    .gray {
      color: lightgray;
    }

    //备用内容到此

    .tab {
      width: 100%;
      height: 88rpx;
      display: flex;
      justify-content: center;
    }

    .tab-item {
      display: inline-flex;
      width: 20%;
      height: 88rpx;
      margin: 0 20rpx;
      font-size: 25rpx
    }

    .tab-txt {
      line-height: 88rpx;
    }

    .icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

  }
</style>
