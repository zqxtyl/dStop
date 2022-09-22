<template>
  <view class="app">
    <view class="title">
      设置密码
    </view>
    <view class="second-level">
      您还未设置登录密码
    </view>
    <view class="form">
      <u--form :model="form" ref="uForm">
        <view class="inputs">
          <u-form-item prop="newPwd">
            <u-input customStyle="form" password fontSize='35' placeholder="密码必须包含字母及数字" border="bottom"
              v-model="form.newPwd">
            </u-input>
          </u-form-item>
        </view>
        <view class="inputs">
          <u-form-item prop="confirmPwd">
            <u-input fontSize='35' password placeholder="再次确认密码" border="bottom" v-model="form.confirmPwd">
            </u-input>
          </u-form-item>
        </view>
      </u--form>
    </view>
    <view class="buttons">
      <u-button @click="submit" shape='circle' color='#808080' size="large" text="确定"></u-button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.newPwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        form: {
          newPwd: '',
          confirmPwd: ''
        },
        rules: {
          newPwd: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 16,
              message: '长度在 6 到 12 个字符',
              trigger: 'blur'
            },
            {
              validator: validatePass,
              trigger: 'blur'
            }
          ],
          confirmPwd: [{
              required: true,
              message: '请确认密码',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 16,
              message: '长度在 6 到 12 个字符',
              trigger: 'blur'
            },
            {
              validator: validatePass2,
              trigger: 'blur',
              required: true
            }
          ]
        }
      }
    },
    onReady() {
      this.$refs.uForm.setRules(this.rules);
    },
    methods: {
      submit() {
        this.$refs.uForm.validate().then(res => {
          uni.$u.toast('设置成功')
          uni.switchTab({
            url: '/pages/home/home'
          })
        }).catch(err => {
          uni.$u.toast('设置失败')
        })
      },
    }
  }
</script>

<style lang="scss">
  .app {
    padding: 15rpx;

    .title {
      font-weight: 700;
      font-size: 50rpx;
      margin-top: 15rpx;
      margin-left: 25rpx;
    }

    .second-level {
      color: #ccc;
      font-size: 25rpx;
      margin-top: 30rpx;
      margin-left: 25rpx;
    }

    .form {
      .inputs {
        margin-top: 35rpx;
        width: 90%;
        margin-left: 25rpx;
      }
    }

    .buttons {
      margin-top: 100rpx;
    }
  }
</style>
