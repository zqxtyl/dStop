<template>
  <view class="app">
    <view class="tab_nav">
      <view class="navTitle" v-for="(item,index) in navList" :key="index">
        <view :class="{'active':isActive === index}" @click="checked(index)">
          {{item.title}}
        </view>
      </view>
    </view>
    <view class="nav_item" v-if="isActive==0">
      <view class="tabMain">
        <view class="text">未注册的手机号登录成功后将自动注册</view>
        <view class="main">
          <u--form :model='fromDate' ref="uForm">
            <u-form-item prop="phone">
              <view class="inputs">
                <u-input fontSize='35' placeholder="请输入手机号" border="bottom" v-model="fromDate.phone">
                </u-input>
              </view>
            </u-form-item>
            <u-form-item prop="code">
              <!--              <u--input fontSize='35' placeholder="请输入验证码" border="bottom" v-model="fromDate.code" @change="change">
              </u--input> -->
              <view class="u-demo-block">
                <view class="u-demo-block__content">
                  <!-- #ifndef APP-NVUE -->
                  <!-- #endif -->
                  <!-- #ifdef APP-NVUE -->
                  </u--input>
                  <!-- #endif -->
                </view>
                <view class="u-demo-block__content">
                  <!-- #ifndef APP-NVUE -->
                  <u-input fontSize='35' border="bottom" placeholder="请输入验证码" v-model="fromDate.code">
                    <!-- #endif -->
                    <!-- #ifdef APP-NVUE -->
                    <u--input placeholder="后置插槽">
                      <!-- #endif -->
                      <template slot="suffix">
                        <u-code ref="uCode" @change="codeChange" seconds="60" changeText="XS"></u-code>
                        <u-button @tap="getCode" :text="tips" type="text" size="mini">
                        </u-button>
                      </template>
                      <!-- #ifndef APP-NVUE -->
                  </u-input>
                  <!-- #endif -->
                  <!-- #ifdef APP-NVUE -->
                  </u--input>
                  <!-- #endif -->
                </view>
              </view>
            </u-form-item>
            <u-form-item>
              <u-radio-group v-model="value" placement="row">
                <u-radio size="30" labelColor='#CCC' labelSize="25" shape="square" label="已阅读并同意">
                </u-radio>
              </u-radio-group>
            </u-form-item>
          </u--form>
        </view>
        <view class="buttons">
          <u-button @click="submit" shape='circle' color='#808080' size="large" text="登录"></u-button>
        </view>
      </view>
    </view>
    <view class="nav_item" v-if="isActive==1">
      <view class="text">未注册的手机号登录成功后将自动注册</view>
      <view class="main">
        <u--form :model='fromDate'>
          <u-form-item>
            <view class="inputs">
              <u-input fontSize='35' placeholder="请输入手机号" border="bottom" v-model="fromDate.phone">
              </u-input>
            </view>
          </u-form-item>
          <u-form-item>
            <u-input fontSize='35' placeholder="请输入密码" border="bottom" v-model="fromDate.password">
            </u-input>
          </u-form-item>
          <u-form-item>
            <u-radio-group v-model="value" placement="row">
              <u-radio size="30" labelColor='#CCC' labelSize="25" shape="square" label="已阅读并同意">
              </u-radio>
            </u-radio-group>
          </u-form-item>
        </u--form>
      </view>
      <view class="buttons">
        <u-button shape='circle' color='#808080' size="large" text="登录"></u-button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isActive: 0,
        navList: [{
          index: 0,
          title: '验证码登录'
        }, {
          index: 1,
          title: "密码登录"
        }],
        fromDate: {
          phone: '',
          code: "",
          password: ''
        },
        value: false,
        tips: '',
        rules: {
          'phone': [{
            required: true,
            message: '请输入正确格式',
            pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
            trigger: ['change', 'blur']
          }],
          "code": [{
            require: true,
            message: '验证码格式不正确',
            min: 4,
            max: 6,
            trigger: ['change', 'blur']
          }]
        }
      }
    },
    methods: {
      checked(index) {
        this.isActive = index
      },
      codeChange(text) {
        this.tips = text;
      },
      getCode() {
        if (this.$refs.uCode.canGetCode) {
          // 模拟向后端请求验证码
          uni.showLoading({
            title: '正在获取验证码'
          })
          setTimeout(() => {
            uni.hideLoading();
            // 这里此提示会被this.start()方法中的提示覆盖
            uni.$u.toast('验证码已发送');
            // 通知验证码组件内部开始倒计时
            this.$refs.uCode.start();
          }, 2000);
        } else {
          uni.$u.toast('倒计时结束后再发送');
        }
      },
      submit() {
        console.log(123)
        this.$refs.uForm.validate(valid => {
          console.log(valid)
          if (valid) {
            alert('验证成功')
          } else {
            alert('验证失败')
          }
        });
      }

    },
    onReady() {
      this.$refs.uForm.setRules(this.rules);
    }
  }
</script>

<style lang="less" scoped>
  .app {
    background-color: #FEFEFE;

    .tab_nav {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 700;
      padding: 20px;
      width: 500rpx;
      background-color: #FFFFFF;
    }

    .tab_nav .navTitle {
      height: 90rpx;
      line-height: 90rpx;
      width: 100%;
      text-align: center;
      font-size: 32rpx;
      font-family: Alibaba PuHuiTi;
      color: #333;
    }

    .main {
      margin-top: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;

      .inputs {
        width: 600rpx;
      }
    }

    .active {
      position: relative;
      font-weight: 700;
      font-size: 50rpx;
    }

    .text {
      color: #ccc;
      font-size: 25rpx;
      padding-left: 45rpx;
      margin-top: -30rpx;

    }

    .buttons {
      margin-top: 80rpx;
      margin-left: 40rpx;
      width: 90%;
    }

    .active::after {
      content: "";
      position: absolute;
      width: 100rpx;
      height: 4rpx;
      left: 0px;
      right: 0px;
      bottom: 0px;
      margin: auto;
    }
  }
</style>
