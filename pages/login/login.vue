<template>
  <view class="app">
    <view class="tab_nav">
      <view class="navTitle" v-for="(item,index) in navList" :key="index">
        <view :class="{'active':isActive === index}" @click="checked(index)">
          {{item.title}}
        </view>
      </view>
    </view>
    <!-- 验证码登录 -->
    <view class="nav_item" v-if="isActive==0">
      <view>
        <view class="tabMain">
          <view class="text">未注册的手机号登录成功后将自动注册</view>
          <view class="main">
            <u--form :model="form" ref="uForm">
              <u-form-item prop="phone">
                <view class="inputs">
                  <u-input @change='change' fontSize='35' placeholder="请输入手机号" border="bottom" v-model="form.phone">
                  </u-input>
                </view>
              </u-form-item>
              <u-form-item prop="code">
                <view class="u-demo-block">
                  <view class="u-demo-block__content">
                    </u--input>
                  </view>
                  <view class="u-demo-block__content">
                    <u-input fontSize='35' border="bottom" placeholder="请输入验证码" v-model="form.code">

                      <!-- #ifdef APP-NVUE -->
                      <u--input placeholder="后置插槽">
                        <!-- #endif -->
                        <template slot="suffix">
                          <u-code ref="uCode" @change="codeChange" seconds="60" changeText="XS"></u-code>
                          <u-button :disabled="status" @click="getCode" :text="tips" type="text" size="mini">
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
                <u-radio-group v-model="form.value" placement="row">
                  <u-radio size="35" @change="radioChange" labelColor='#CCC' labelSize="25" shape="square"
                    label="已阅读并同意">
                  </u-radio>
                </u-radio-group>
              </u-form-item>
            </u--form>
          </view>
          <view class="buttons">
            <u-button @click="submit" shape='circle' :color='buttonColor' size="large" text="登录"></u-button>
          </view>
        </view>
      </view>
    </view>
    <!-- 验证码登录 -->
    <!-- 密码登录 -->
    <view class="nav_item" v-if="isActive==1">
      <view>
        <view class="text">未注册的手机号登录成功后将自动注册</view>
        <view class="main">
          <u-form :model='formDate' ref="uForm">
            <u-form-item prop="phone">
              <view class="inputs">
                <u-input fontSize='35' maxlength="11" placeholder="请输入手机号" border="bottom" v-model="formDate.phone">
                </u-input>
              </view>
            </u-form-item>
            <u-form-item prop="password">
              <u-input fontSize='35' placeholder="请输入密码" border="bottom" v-model="formDate.password">
              </u-input>
            </u-form-item>
            <u-form-item>
              <u-radio-group v-model="formDate.value" placement="row">
                <u-radio @change="radioChangeT" size="35" labelColor='#CCC' labelSize="25" shape="square"
                  label="已阅读并同意">
                </u-radio>
              </u-radio-group>
            </u-form-item>
          </u-form>
        </view>
      </view>
      <view class="buttons">
        <u-button shape='circle' @click="passwordLogin" :color='buttonColor' size="large" text="登录"></u-button>
      </view>
      <!-- 密码登录 -->
    </view>
  </view>
</template>

<script>
  import {
    getPhoneCode,
    refreshToken,
    goLogin,
    pwdLogin
  } from '@/api/user.js'
  import {
    setStorage
  } from '@/utils/location.js'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          callback();
        }
      };
      return {
        isActive: 0,
        navList: [{
          index: 0,
          title: '验证码登录'
        }, {
          index: 1,
          title: "密码登录"
        }],
        form: {
          phone: '',
          code: '',
          value: true,
        },
        status: true, //发送验证码状态
        formDate: {
          phone: '',
          password: '',
          value: true
        },
        sum: 0,
        userInfo: {},
        buttonColor: '#EC6548',
        tips: '',
        rules: {
          'phone': [{
              required: true,
              message: '请输入正确格式',
              pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
              trigger: 'blur'
            },
            {
              validator: validatePass,
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      change() {
        if (this.form.phone.length == 11) {
          this.status = false
        }
      },
      onChangeButton() {
        this.buttonColor = '#0078D7'
      },
      checked(index) {
        this.isActive = index
        this.buttonColor = '#808080'
        this.form = {
            phone: '',
            code: '',
            value: true
          },
          this.formDate = {
            phone: '',
            password: '',
            value: true
          }
      },
      codeChange(text) {
        this.tips = text;
      },
      radioChange() {
        this.form.value = false
      },
      radioChangeT() {
        this.formDate.value = false
      },
      async getCode() {
        if (this.$refs.uCode.canGetCode) {
          // 模拟向后端请求验证码

          uni.showLoading({
            title: '正在获取验证码'
          })
          const data = await getPhoneCode({
            username: this.form.phone,
            todo: 'login'
          })
          this.userInfo = data
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
      async submit() {
        if (!this.form.phone || !this.form.code) {
          uni.$u.toast('输入不能为空')
          return
        }
        if (this.form.value) {
          uni.$u.toast('请勾选协议')
          return
        }
        const {
          data
        } = await goLogin({
          username: this.form.phone,
          smsCode: this.form.code,
          inviterId: 2
        })
        this.userInfo = data
        console.log(data)
        this.$store.commit('user/getUsrInfo', data)
        this.$store.commit('user/getToken', data.access_token)
        setStorage('TOKEN', data.access_token)
        if (this.form.code && !this.userInfo.code) {
          uni.navigateTo({
            url: '/pages/login/enter-password'
          })
        }
        // this.$refs.uForm.validate().then(async res => {
        //   uni.$u.toast('验证成功')
        //   } else {
        //     uni.$u.toast('验证码不能为空')
        //   }
        // }).catch(errors => {
        //   uni.$u.toast('验证失败')
        // })
        this.status = false
      },
      async passwordLogin() {
        if (!this.formDate.password && !this.formDate.phone) {
          uni.$u.toast('输入不能为空')
          return
        }
        if (this.formDate.value) {
          uni.$u.toast('请勾选协议')
          return
        }
        const data = await pwdLogin(({
          username: this.formDate.phone,
          passwd: this.formDate.password
        }))
        this.userInfo = data.data
        console.log(data)
        this.$store.commit('user/getUsrInfo', this.userInfo)
        this.$store.commit('user/getToken', this.userInfo.access_token)
        if (this.formDate.password && !this.userInfo.code) {
          uni.switchTab({
            url: '/pages/home/home'
          })
        }
      }

    },
    onReady() {
      this.$refs.uForm.setRules(this.rules);
    },
    onLoad() {
      uni.removeStorageSync('TOKEN')
    },

    watch: {
      form: {
        handler(newValue, oldValue) {
          if (newValue.phone.length == 11 && newValue.code.length == 4 && !newValue.value) {
            this.onChangeButton()
          }
        },
        deep: true
      },
      formDate: {
        handler(newValue, oldValue) {
          if (!newValue.value && newValue.phone.length == 11) {
            this.onChangeButton()
          }
        },
        deep: true
      }
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
      padding: 36px;
      width: 550rpx;
      background-color: #FFFFFF;
    }

    .tab_nav .navTitle {
      height: 90rpx;
      line-height: 90rpx;
      width: 100%;
      text-align: center;
      font-size: 40rpx;
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
      font-size: 55rpx;
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
