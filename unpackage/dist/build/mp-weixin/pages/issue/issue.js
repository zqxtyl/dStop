(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/issue/issue"],{"0e75":function(t,e,n){"use strict";n.r(e);var o=n("f992"),i=n("75ff");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);var a,s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports},"4a6e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{saveVideo:function(){t.downloadFile({url:"https://yishijie1.oss-cn-beijing.aliyuncs.com/mp4/1.mp4",success:function(e){200===e.statusCode&&t.saveVideoToPhotosAlbum({filePath:e.tempFilePath,success:function(){t.showToast({title:"保存成功",icon:"success"})}})}})},uploadVideo:function(){t.showToast({title:"下载中",icon:"loading"}),t.downloadFile({url:"https://yishijie1.oss-cn-beijing.aliyuncs.com/mp4/1.mp4",success:function(e){200===e.statusCode?(t.saveVideoToPhotosAlbum({filePath:e.tempFilePath}),t.hideLoading(),t.showToast({title:"下载成功",icon:"success"})):t.showToast({title:"资源格式错误，请联系管理员"})},fail:function(e){t.hideLoading(),t.showToast({title:"下载失败"})}})}},onLoad:function(){t.hideTabBar()}};e.default=n}).call(this,n("543d")["default"])},"628d":function(t,e,n){"use strict";(function(t){n("86f8");o(n("66fd"));var e=o(n("0e75"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},"75ff":function(t,e,n){"use strict";n.r(e);var o=n("4a6e"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=i.a},f992:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var o={tarbar:function(){return n.e("components/tarbar/tarbar").then(n.bind(null,"ab06"))}},i=function(){var t=this,e=t.$createElement;t._self._c},u=[]}},[["628d","common/runtime","common/vendor"]]]);