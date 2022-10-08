(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tarbar/tarbar"],{"5b5e":function(e,t,n){"use strict";n.r(t);var a=n("dee3"),u=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=u.a},ab06:function(e,t,n){"use strict";n.r(t);var a=n("e6b8"),u=n("5b5e");for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);var o,i=n("f0c5"),c=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=c.exports},dee3:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"tarbar",props:{current:Number},data:function(){return{list:[{path:"pages/home/home"},{path:"pages/issue/issue"},{path:"pages/expert/expert"},{path:"pages/my/my"}]}},methods:{tabbarChange:function(t){e.switchTab({url:"/"+this.list[t].path})}}};t.default=n}).call(this,n("543d")["default"])},e6b8:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uTabbar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tabbar/u-tabbar")]).then(n.bind(null,"ddad"))},uTabbarItem:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-tabbar-item/u-tabbar-item")]).then(n.bind(null,"e0ae"))}},u=function(){var e=this,t=e.$createElement;e._self._c},r=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tarbar/tarbar-create-component',
    {
        'components/tarbar/tarbar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ab06"))
        })
    },
    [['components/tarbar/tarbar-create-component']]
]);
