webpackJsonp([9,7],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(114),i=o(r),a=n(246),u=o(a),d=n(143),p=o(d),c=n(144),s=o(c),f=n(115),l=o(f);i.default.prototype.$ajax=l.default,i.default.use(u.default);var g=new u.default({routes:p.default});new i.default({router:g,store:s.default}).$mount("#app")},9:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(54),i=o(r),a=n(26),u=o(a),d=n(52),p=o(d),c=n(53),s=o(c);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return new s.default(function(r,a){e=e.toUpperCase(),console.log("send request"+t+";type is:"+e);var d=void 0;if(d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject,"GET"==e){var c="";(0,p.default)(n).forEach(function(e){c+=e+"="+n[e]+"&"}),c=c.substr(0,c.lastIndexOf("&")),t=t+"?"+c,d.open(e,t,o),d.setRequestHeader("Content-type","application/json"),d.send()}else"POST"==e?(d.open(e,t,o),d.setRequestHeader("Content-type","application/json"),d.send((0,u.default)(n))):a("error type");d.onreadystatechange=function(){if(4==d.readyState)if(200==d.status){var e=d.response;"object"!==("undefined"==typeof e?"undefined":(0,i.default)(e))&&(e=JSON.parse(e)),r(e)}else a(d)}})}},10:function(e,t){"use strict";var n={debug:{couponList:"http://192.168.132.44:8081/goods/goodsCoupon/couponList",couponDetail:"http://192.168.132.44:8081/goods/couponDetail",categoryList:"http://192.168.132.44:8081/goods/categoryList",checkLogin:"http://192.168.132.44:8081/goods/user/checkLogin",login:"http://192.168.132.44:8081/goods/user/login",getMyOrder:"http://192.168.132.44:8081/goods/user/order/myorder",submitOrder:"http://192.168.132.44:8081/goods/user/order/submitOrderNo",getUserInfo:"http://192.168.132.44:8081/goods/user/getUserInfo",getAppId:"http://192.168.132.44:8081/goods/appid"},product:{couponList:"/api/item/goodsCoupon/couponList",couponDetail:"/api/item/goodsCoupon/couponDetail",categoryList:"/api/item/goodsCoupon/catogry/all",checkLogin:"/api/item/user/checkLogin",login:"/api/item/user/login",getMyOrder:"/api/item/user/order/myorder",submitOrder:"/api/item/user/order/submitOrderNo",getUserInfo:"/api/item/user/getUserInfo",getAppId:"/api/item/weixin/info"}};e.exports={getApi:function(e,t){var o="product"==e?e:"debug";return n[o][t]}}},18:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.removeStore=t.getStore=t.setStore=void 0;var r=n(26),i=o(r);t.setStore=function(e,t){e&&("string"!=typeof t&&(t=(0,i.default)(t)),window.localStorage.setItem(e,t))},t.getStore=function(e){if(e)return window.localStorage.getItem(e)},t.removeStore=function(e){e&&window.localStorage.removeItem(e)};t.default={getDevice:function(){return navigator.userAgent.match(/Android/i)?2:navigator.userAgent.match(/iPhone|iPad|iPod/i)?1:3}}},33:function(e,t){"use strict";var n={debug:{baseUri:"http://txdy.tunnel.qydev.com/tr3/#login?pageType="},product:{baseUri:"http://txdy.tunnel.qydev.com/tr3/#login?pageType="}};e.exports={getLoginUri:function(e,t){var o="product"==e?e:"debug";return n[o][t]},getAppId:function(){return"wxf83b631bccb522df"}}},98:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(26),i=o(r),a=n(54),u=o(a);!function(){function e(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.src=e,t.appendChild(n)}window.appid="1241132132",window.vn="name",window.vc="1.0.1",window.TDBaseUrl="http://sdk.talkingdata.com/app/h5/v1/websdk",window.TDRequestUrl="http://h5data.talkingdata.net/app/v1",e(TDBaseUrl+"/js/sdk_release.js"),window.JSON&&"object"===("undefined"==typeof JSON?"undefined":(0,u.default)(JSON))||e(TDBaseUrl+"/js/json2.js"),window.TDAPP={},window.TDAPP.onEvent=function(e,t,n){if(arguments.length>0)try{var o={count:1,start:(new Date).getTime()};if(void 0!=e&&(o.id="string"!=typeof e?(0,i.default)(e):e),void 0!=t?o.label="string"!=typeof t?(0,i.default)(t):t:o.label="",void 0!=n){var r=function(e){var t="object"==("undefined"==typeof e?"undefined":(0,u.default)(e))&&"[object object]"==Object.prototype.toString.call(e).toLowerCase()&&!e.length;return t};r(n)?o.params=n:o.params={params:""}}var a="__TD_td-init-event",d=localStorage[a];if(d){var p=JSON.parse(d);return p.push(o),void localStorage.setItem(a,(0,i.default)(p))}localStorage.setItem(a,"["+(0,i.default)(o)+"]")}catch(e){}}}()},133:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(27),i=o(r),a=n(9),u=(o(a),n(18)),d=o(u),p=n(10),c=o(p),s=n(33),f=(o(s),n(98)),l=(o(f),n(25)),g="debug";t.default={name:"goodStuff",data:function(){return{device:""}},methods:(0,i.default)({},(0,l.mapMutations)(["setAppId"])),created:function(){this.device=d.default.getDevice(),3==this.device&&(document.body.innerHTML="");var e=this;e.$ajax.get(c.default.getApi(g,"getAppId"),{}).then(function(t){if(0==t.data.code){var n=t.data.result.appid;e.setAppId({appId:n})}e.$route.path.indexOf("login")==-1&&e.$ajax.get(c.default.getApi(g,"checkLogin"),{}).then(function(t){if(0!=t.data.code){console.log(e.appId);var n=window.location.origin+window.location.pathname+"#/login?pageType="+e.$route.path.split("/")[1];n=encodeURIComponent(n),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+e.appId+"&redirect_uri="+n+"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"}})})},computed:(0,i.default)({},(0,l.mapState)(["appId"]))}},143:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(230),i=o(r),a=function(e){return n.e(1,function(){return e(n(232))})},u=function(e){return n.e(3,function(){return e(n(231))})},d=function(e){return n.e(2,function(){return e(n(235))})},p=function(e){return n.e(4,function(){return e(n(234))})},c=function(e){return n.e(0,function(){return e(n(236))})},s=function(e){return n.e(5,function(){return e(n(237))})},f=function(e){return n.e(6,function(){return e(n(233))})};t.default=[{path:"/",component:i.default,children:[{path:"",component:a},{path:"/home",component:a},{path:"/detail",component:u},{path:"/profile",component:d},{path:"/order",component:p},{path:"/stuff",component:c},{path:"/treasure",component:s},{path:"/login",component:f},{path:"/login:pageType:code",component:f}]}]},144:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(114),i=o(r),a=n(25),u=o(a),d=n(98);o(d);i.default.use(u.default);var p=new u.default.Store({state:{appId:"wx197c21f563166768",isLogin:!1},getters:{},mutations:{buryPoint:function(e,t){var n=t.eventId,o=t.label;TDAPP.onEvent(n,o)},setAppId:function(e,t){var n=t.appId;e.appId=n}}});t.default=p},202:function(e,t){},230:function(e,t,n){n(202);var o=n(1)(n(133),n(238),null,null);e.exports=o.exports},238:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}}});