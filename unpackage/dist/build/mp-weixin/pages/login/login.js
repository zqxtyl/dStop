(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0cc7":function(e,n,t){"use strict";t.r(n);var o=t("6e30"),r=t("7d0b");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("240b");var i,a=t("f0c5"),s=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,"891e24e4",null,!1,o["a"],i);n["default"]=s.exports},"240b":function(e,n,t){"use strict";var o=t("78ac"),r=t.n(o);r.a},5868:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t("a34a")),r=t("292c"),u=t("0f7b");function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,o,r,u,i){try{var a=e[u](i),s=a.value}catch(c){return void t(c)}a.done?n(s):Promise.resolve(s).then(o,r)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(o,r){var u=e.apply(n,t);function i(e){a(u,o,r,i,s,"next",e)}function s(e){a(u,o,r,i,s,"throw",e)}i(void 0)}))}}var c={data:function(){var e=function(e,n,t){""===n?t(new Error("请输入手机号")):t()};return{isActive:0,navList:[{index:0,title:"验证码登录"},{index:1,title:"密码登录"}],form:{phone:"",code:"",value:!0},status:!0,formDate:{phone:"",password:"",value:!0},sum:0,userInfo:{},buttonColor:"#EC6548",tips:"",rules:{phone:[{required:!0,message:"请输入正确格式",pattern:/^(?:(?:\+|00)86)?1[3-9]\d{9}$/,trigger:"blur"},{validator:e,trigger:"blur"}]}}},methods:{change:function(){11==this.form.phone.length&&(this.status=!1)},onChangeButton:function(){this.buttonColor="#0078D7"},checked:function(e){this.isActive=e,this.buttonColor="#808080",this.form={phone:"",code:"",value:!0},this.formDate={phone:"",password:"",value:!0}},codeChange:function(e){this.tips=e},radioChange:function(){this.form.value=!1},radioChangeT:function(){this.formDate.value=!1},getCode:function(){var n=this;return s(o.default.mark((function t(){var u;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.$refs.uCode.canGetCode){t.next=9;break}return e.showLoading({title:"正在获取验证码"}),t.next=4,(0,r.getPhoneCode)({username:n.form.phone,todo:"login"});case 4:u=t.sent,n.userInfo=u,setTimeout((function(){e.hideLoading(),e.$u.toast("验证码已发送"),n.$refs.uCode.start()}),2e3),t.next=10;break;case 9:e.$u.toast("倒计时结束后再发送");case 10:case"end":return t.stop()}}),t)})))()},submit:function(){var n=this;return s(o.default.mark((function t(){var i,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.form.phone&&n.form.code){t.next=3;break}return e.$u.toast("输入不能为空"),t.abrupt("return");case 3:if(!n.form.value){t.next=6;break}return e.$u.toast("请勾选协议"),t.abrupt("return");case 6:return t.next=8,(0,r.goLogin)({username:n.form.phone,smsCode:n.form.code,inviterId:2});case 8:i=t.sent,a=i.data,n.userInfo=a,console.log(a),n.$store.commit("user/getUsrInfo",a),n.$store.commit("user/getToken",a.access_token),(0,u.setStorage)("TOKEN",a.access_token),n.form.code&&!n.userInfo.code&&e.navigateTo({url:"/pages/login/enter-password"}),n.status=!1;case 17:case"end":return t.stop()}}),t)})))()},passwordLogin:function(){var n=this;return s(o.default.mark((function t(){var u;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.formDate.password||n.formDate.phone){t.next=3;break}return e.$u.toast("输入不能为空"),t.abrupt("return");case 3:if(!n.formDate.value){t.next=6;break}return e.$u.toast("请勾选协议"),t.abrupt("return");case 6:return t.next=8,(0,r.pwdLogin)({username:n.formDate.phone,passwd:n.formDate.password});case 8:u=t.sent,n.userInfo=u.data,console.log(u),n.$store.commit("user/getUsrInfo",n.userInfo),n.$store.commit("user/getToken",n.userInfo.access_token),n.formDate.password&&!n.userInfo.code&&e.switchTab({url:"/pages/home/home"});case 14:case"end":return t.stop()}}),t)})))()}},onReady:function(){this.$refs.uForm.setRules(this.rules)},onLoad:function(){e.removeStorageSync("TOKEN")},watch:{form:{handler:function(e,n){11!=e.phone.length||4!=e.code.length||e.value||this.onChangeButton()},deep:!0},formDate:{handler:function(e,n){e.value||11!=e.phone.length||this.onChangeButton()},deep:!0}}};n.default=c}).call(this,t("543d")["default"])},"6e30":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={"u-Form":function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u--form/u--form")]).then(t.bind(null,"49f1"))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,"1cf8"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-input/u-input")]).then(t.bind(null,"e79f"))},uCode:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-code/u-code")]).then(t.bind(null,"8409"))},uButton:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-button/u-button")]).then(t.bind(null,"df77"))},uRadioGroup:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-radio-group/u-radio-group")]).then(t.bind(null,"6b78"))},uRadio:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-radio/u-radio")]).then(t.bind(null,"0e04"))},uForm:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-form/u-form")]).then(t.bind(null,"a651"))}},r=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"78ac":function(e,n,t){},"7d0b":function(e,n,t){"use strict";t.r(n);var o=t("5868"),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=r.a},e9b5:function(e,n,t){"use strict";(function(e){t("86f8");o(t("66fd"));var n=o(t("0cc7"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])}},[["e9b5","common/runtime","common/vendor"]]]);