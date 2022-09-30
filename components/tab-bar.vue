<template>
  <view class="tarbar">
    <view class=".tarbar-list" :style="{
	                background: tabBar.backgroundColor,
	                color: tabBar.color,
	                'border-top': tabBar.position == 'bottom' ? '1rpx solid ' + tabBar.borderStyle : 0,
	                'border-bottom': tabBar.position == 'top' ? '1rpx solid ' + tabBar.borderStyle : 0
	            }">
      <view class="tarbar-list-ul">
        <view class="tarbar-list-li" v-for="(item, index) in tabBar.list" :key="index" @click.top="setSelected(index)">
          <block>
            <view class="tarbar-list-li-icon">
              <image :src="selected == index ? item.selectedIconPath : item.iconPath" mode=""></image>
            </view>
            <view :style='selected == index?"color:"+tabBar.selectedColor:""' class="tarbar-list-li-name">
              {{ item.text }}
            </view>
          </block>
        </view>
      </view>
    </view>
    <!-- 		<block v-if="isShowMask">
			<release-popup @close-mask="closeMask"></release-popup>
		</block> -->
  </view>
</template>

<script>
  export default {
    name: 'tab-bar',
    data() {
      return {
        tabBar: {
          color: '#999999',
          selectedColor: '#FE7F00',
          borderStyle: 'white',
          backgroundColor: '#fff',
          position: 'bottom',
          list: [{
              "text": "首页",
              "pagePath": "pages/home/home",
              "iconPath": "static/w-sy.png",
              "selectedIconPath": "static/y-sy.png"
            },
            {
              "text": "我的出单",
              "pagePath": "pages/issue/issue",
              "iconPath": "static/w-cd.png",
              "selectedIconPath": "static/y-cd.png"

            },
            {
              "text": "邀请达人",
              "pagePath": "pages/expert/expert",
              "iconPath": "static/w-dr.png",
              "selectedIconPath": "static/y-dr.png"
            },
            {
              "text": "我的",
              "pagePath": "pages/my/my",
              "iconPath": "static/w-my.png",
              "selectedIconPath": "static/y-my.png"
            }
          ]
        },
        selected: this.current //当前激活项
      };
    },
    props: {
      current: {
        type: [Number, String],
        default: 0
      }
    },
    methods: {
      setSelected(index) {
        if (this.selected == index) return
        // this.selected = index
        this.$emit('change', index)
      },
    },
    watch: {
      current: {
        handler(val) { // 
          this.selected = val
          const _this = this
          uni.setNavigationBarTitle({ // 设置顶部bar的标题
            title: _this.tabBar.list[val].text
          })
        },
        immediate: true
      }
    }
  }
</script>

<style>
  .tarbar {
    width: 100%;
    z-index: 9999;
    position: fixed;
  }

  .tarbar-list {
    width: 100%;
    height: 98upx;
    background: #4d586f;
    position: fixed;
    left: 0;
    bottom: 0;
  }

  .tarbar-list-ul {
    width: 100%;
    height: 100%;
    padding: 0upx 60upx;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .tarbar-list-li {
    width: 80upx;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .tarbar-list-li-icon {
    width: 50upx;
    height: 50upx;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .tarbar-list-li-icon image {
    width: 36rpx;
    height: 36rpx;
  }

  .tarbar-list-li-name {
    width: 100%;
    text-align: center;
    line-height: 30upx;
    font-size: 24upx;
    height: 30upx;
  }

  .tarbar-list-li-center {
    width: 100upx;
  }
</style>
