(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/goods_detail/goods_detail"],{"0b6c":function(t,n,o){"use strict";(function(t){o("86f8");e(o("66fd"));var n=e(o("4a1d"));function e(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=o,t(n.default)}).call(this,o("543d")["createPage"])},"4a1d":function(t,n,o){"use strict";o.r(n);var e=o("af0a"),u=o("9b3a");for(var i in u)"default"!==i&&function(t){o.d(n,t,(function(){return u[t]}))}(i);o("dbdf");var a,s=o("f0c5"),c=Object(s["a"])(u["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],a);n["default"]=c.exports},"6b65":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=i(o("a34a")),u=o("8f6e");function i(t){return t&&t.__esModule?t:{default:t}}function a(t,n,o,e,u,i,a){try{var s=t[i](a),c=s.value}catch(r){return void o(r)}s.done?n(c):Promise.resolve(c).then(e,u)}function s(t){return function(){var n=this,o=arguments;return new Promise((function(e,u){var i=t.apply(n,o);function s(t){a(i,e,u,s,c,"next",t)}function c(t){a(i,e,u,s,c,"throw",t)}s(void 0)}))}}var c={data:function(){return{attentionShow:!1,show:!1,taskStatus:!1,grade:!0,value:!1,cancelTaskStatus:!1,uploadVideoStatus:!1,copyVideoStatus:!1,list:{},uname:[],imgs:[],linkUrl:""}},methods:{getDeatilList:function(t){var n=this;return s(e.default.mark((function o(){var i,a;return e.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,(0,u.getGoodsDetail)({id:t});case 2:i=o.sent,a=i.data,console.log(a),n.list=a,n.uname=JSON.parse(n.list.skus),n.imgs=JSON.parse(n.list.imgs),n.linkUrl=a.link;case 9:case"end":return o.stop()}}),o)})))()},copyLink:function(){t.setClipboardData({data:this.linkUrl,success:function(){t.showToast({title:"复制成功",duration:2e3,icon:"none"})},fail:function(n){t.showToast({title:"复制失败",duration:2e3,icon:"none"})}})},copyVideoShow:function(){this.copyVideoStatus=!1},onLoad:function(t){this.getDeatilList(t.id)},attentionFn:function(){this.attentionShow=!this.attentionShow},getTask:function(){this.grade?this.taskStatus=!0:this.show=!0},close:function(){this.show=!1},TaskClose:function(){this.cancelTaskStatus=!1},getUpgrade:function(){t.navigateTo({url:"/pages/upgrade/upgrade"})},cancelTask:function(){this.cancelTaskStatus=!0},affirmCancl:function(){t.$u.toast("取消任务成功")},pressError:function(){this.cancelTaskStatus=!1},copyVideo:function(){t.downloadFile({url:"https://yishijie1.oss-cn-beijing.aliyuncs.com/mp4/1.mp4",success:function(n){200===n.statusCode&&t.saveVideoToPhotosAlbum({filePath:n.tempFilePath,success:function(){t.showToast({title:"保存成功",icon:"success"})}})}}),this.copyVideoStatus=!0},noMoreWarn:function(){this.copyVideoStatus=!1},affirmFn:function(){t.$u.toast("确认"),this.copyVideoStatus=!1},uploadVideo:function(){this.uploadVideoStatus=!0},clickFnPasts:function(){t.$u.toast("粘贴成功")},affirmSubmit:function(){t.$u.toast("提交成功"),this.uploadVideoStatus=!1},uploadVideoShow:function(){this.uploadVideoStatus=!1}}};n.default=c}).call(this,o("543d")["default"])},"9b3a":function(t,n,o){"use strict";o.r(n);var e=o("6b65"),u=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=u.a},af0a:function(t,n,o){"use strict";o.d(n,"b",(function(){return u})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}));var e={uLine:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-line/u-line")]).then(o.bind(null,"efe7"))},uPopup:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(o.bind(null,"5b36"))},uRadioGroup:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-radio-group/u-radio-group")]).then(o.bind(null,"6b78"))},uRadio:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uview-ui/components/u-radio/u-radio")]).then(o.bind(null,"0e04"))}},u=function(){var t=this,n=t.$createElement,e=(t._self._c,o("0842")),u=o("a1a2"),i=o("7ca7"),a=t.attentionShow?o("c790"):null,s=t.attentionShow?null:o("f7df"),c=o("1cb8"),r=o("b52a"),l=o("f336"),d=o("5e5e"),f=o("f336"),m=t.taskStatus?null:o("cca5"),p=t.taskStatus?null:o("8fed"),h=t.taskStatus?o("f336"):null,v=t.taskStatus?o("1906"):null,b=o("ff98"),S=o("0f74"),w=o("8fed"),g=o("f336"),k=o("1906"),_=o("f336"),P=o("1906"),V=o("f336"),y=o("1906");t._isMounted||(t.e0=function(n){t.show=!1}),t.$mp.data=Object.assign({},{$root:{m0:e,m1:u,m2:i,m3:a,m4:s,m5:c,m6:r,m7:l,m8:d,m9:f,m10:m,m11:p,m12:h,m13:v,m14:b,m15:S,m16:w,m17:g,m18:k,m19:_,m20:P,m21:V,m22:y}})},i=[]},c711:function(t,n,o){},dbdf:function(t,n,o){"use strict";var e=o("c711"),u=o.n(e);u.a}},[["0b6c","common/runtime","common/vendor"]]]);