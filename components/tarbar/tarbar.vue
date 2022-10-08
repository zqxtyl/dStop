<!-- 自定义底部栏 -->
<template>
  <view>
    <u-tabbar :value="current?current:0" @change="tabbarChange" :fixed="true" :placeholder="true"
      :safeAreaInsetBottom="true" activeColor="#333333">
      <u-tabbar-item text="首页">
        <image class="images" slot="active-icon" src="@/static/y-sy.png"></image>
        <image class="images" slot="inactive-icon" src="@/static/w-sy.png">
        </image>
      </u-tabbar-item>
      <u-tabbar-item text="我的出单">
        <image class="images" slot="active-icon" src="@/static/y-cd.png"></image>
        <image class="images" slot="inactive-icon" src="@/static/w-cd.png">
        </image>
      </u-tabbar-item>
      <u-tabbar-item text="邀请达人">
        <image class="images" slot="active-icon" src="@/static/y-dr.png"></image>
        <image class="images" slot="inactive-icon" src="@/static/w-dr.png">
        </image>
      </u-tabbar-item>
      <u-tabbar-item text="我的">
        <image class="images" slot="active-icon" src="@/static/y-my.png"></image>
        <image class="images" slot="inactive-icon" src="@/static/w-my.png">
        </image>
      </u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script>
  export default {
    name: 'tarbar',
    props: {
      current: Number
    },
    data() {
      return {
        list: [{
            path: "pages/home/home"
          }, {
            path: "pages/issue/issue"
          },
          {
            path: 'pages/expert/expert'
          },
          {
            path: "pages/my/my"
          }
        ]
      };
    },
    methods: {
      tabbarChange(e) {
        uni.switchTab({
          url: '/' + this.list[e].path
        })
      }
    }
  }
</script>

<style lang="scss">
  .images {
    width: 42rpx;
    height: 42rpx;
  }
</style>
