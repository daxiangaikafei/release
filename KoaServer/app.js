!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(11),r=n(8);class s{constructor(){this.fs=n(13),this.env="production",this.configName="localConfig",this.init=(()=>o(this,void 0,void 0,function*(){let e=yield this.getRedisData();e||(e=JSON.parse(this.fs.readFileSync(i.resolve(__dirname,"./localConfig."+this.env+".json")).toString()),r.default.set(this.configName,JSON.stringify(e))),this.initConfig(e),console.log("config 数据初始化成功"),this.IntervalUpdate(6e4)})),this.initConfig=(e=>{this.config=e;this.error=e.error;this.routes=e.routes;this.ignoreUrls=e.ignoreUrls;this.redis=e.redis;this.cookie=e.cookie;this.SSO=e.SSO;this.weixins=e.weixins}),this.getRedisData=(()=>o(this,void 0,void 0,function*(){let e,t=yield r.default.get(this.configName);return t&&(e=JSON.parse(t)),e})),this.update=(()=>o(this,void 0,void 0,function*(){return yield this.getRedisData()})),this.IntervalUpdate=(e=>{setInterval(()=>o(this,void 0,void 0,function*(){let e=yield this.update();this.initConfig(e),console.log("redis 配置文件已更新")}),e)}),this.setRouterData=((e,t)=>o(this,void 0,void 0,function*(){let n=yield this.getRedisData();n&&(n.routes[e]=t,r.default.set(this.configName,n),this.initConfig(n))}))}}let u=new s;t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0).default.error;class i{constructor(){this.resultCode=0,this.resultMessage="success",this.result={},this.getValue=this.getValue.bind(this)}success(e){return this.resultCode=0,this.resultMessage="success",this.result=e,this.getValue()}error(e,t){return this.resultCode=e,this.resultMessage=o[e]||t,this.getValue()}getValue(){return{code:this.resultCode,message:this.resultMessage,result:this.result}}}t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);n(26);var i=n(27);class r{constructor(e,t=5e3){this.headers={charset:"utf-8",client_version:"1.0",channel:"node"},this.domain=e,this.timeout=t}setDomain(e){this.domain=e}setTimeout(e){this.timeout=e}setHeaders(e={client_version:"1.0",channel:"node"}){this.headers=Object.assign({charset:"utf-8",client_version:"1.0",channel:"node"},e)}setVersion(e){this.headers.client_version=e}getData(e,t={},n="GET",i,r="json",s){"GET"===(n=n.toLocaleUpperCase())&&o.size(t)>0&&(e+="?"+d(t)),i=u(r,Object.assign({},this.headers,i));let f=c(r,t);return a(s||this.timeout,fetch(this.domain+e,{method:n,headers:i,body:"GET"===n?void 0:f}).then(t=>{console.log("fetxhUrl:"+e);return t.json()}).catch(e=>{console.log(e)}))}}const s=n(28),u=function(e,t){return Object.assign({},t,s[e])},c=function(e,t){let n;switch(e){case"json":n=JSON.stringify(t);break;case"form-data":n=new i;for(let e in t)n.append(e,t[e]);break;default:n=t}return n},a=function(e,t){return new Promise((n,o)=>{const i=setTimeout(()=>{o(new Error("promise timeout"))},e);t.then(e=>{clearTimeout(i);n(e)},e=>{clearTimeout(i);o(e)})})},d=function(e,t={":":"=",",":"&"}){let n="";for(var o in e)n+=o+"="+encodeURI(e[o])+"&";return n.substring(-1,n.length-1)};t.default=r},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("moment")},function(e,t){e.exports=require("koa-router")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(8),i=n(7),r=n(1),s=n(4),u=n(0),c=new r.default,a=u.default,d=a.ignoreUrls,f="YYYY-MM-DD hh:mm:ss:SSS",l=(new i.default,a.SSO);class h{constructor(){this.verify=this.verify.bind(this)}setCookie(e,t,n,o){e.cookies.set(t,!0===l?n+o:n,a.cookie)}saveData(e,t){let n={token:e,userId:t,date:s().format(f)};console.log("保存token",JSON.stringify(n));let i=a.redis.tokenKey+":"+(!0===l?t:e);o.default.set(i,JSON.stringify(n)),o.default.expire(i,a.redis.expiration)}saveTokenInfo(e,t,n,i){let r=Object.assign({},n,{token:t,date:s().format(f)}),u=e+":"+(!0===l?i:t);o.default.set(u,JSON.stringify(r)),o.default.expire(u,a.redis.expiration)}getTokenInfo(e){return o.default.get(e)}verifyToken(e){return new Promise((t,n)=>{e||n();this.getTokenInfo(e).then(e=>{e?t(JSON.parse(e)):n()})})}getTokenKey(e){let t=e.originalUrl.split("/")[2];return a.routes[t].tokenKey||a.routes.qbii.tokenKey}getToken(e){let t=e.cookies.get("token")||!1;if(t)return this.getTokenKey(e)+":"+t}verify(e,t){let n=this.getToken(e),{url:o}=e;return o=o.split("?")[0],d[o]?t():n?this.verifyToken(n).then(n=>{e.state.userInfo=n;return t()}).catch(()=>{c.error(200,"登录过期");e.body=c.getValue();return}):(c.error(200,"未登陆"),void(e.body=c.getValue()))}}t.default=h},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(9),i=n(4),r="啊哈你说这个是啥，其实就是Hmac的message，干啥用的？防止你硬解的。";class s{constructor(){}build(e){return o.createHmac("md5",r).update(e+i().format("YYYY-MM-DD hh:mm:ss:SSS")).digest("hex")}decipher(e){}}t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=new(n(19))(n(12).redis);t.default=o},function(e,t){e.exports=require("crypto")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});let i=new(n(29).default)("configInfo");class r{constructor(){}getData(){return o(this,void 0,void 0,function*(){return yield i.getDataAsync()})}getWeiXinInfo(e){return o(this,void 0,void 0,function*(){return(yield this.getData()).weixins[e]||{}})}saveWeiXinInfo(e,t){return o(this,void 0,void 0,function*(){let n=(yield this.getData())||{weixins:{}},o=n.weixins&&n.weixins[e]&&n.weixins||{[e]:{}};for(let n in t)o[e][n]=t[n];let r=Object.assign({},n.weixins,o);return n.weixins=r,i.saveData(n)})}}t.default=r},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(11),i=n(13),r=JSON.parse(i.readFileSync(o.resolve(__dirname,"./sysConfig.production.json")).toString());e.exports=r},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("winston")},function(e,t){e.exports=require("winston-daily-rotate-file")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(2),s=n(17),u=n(6),c=n(7),a=n(10),d=n(0).default.routes.item,f=new r.default(d.domain,d.timeout);f.setDomain(d.domain),f.setTimeout(d.timeout);const l=new c.default,h=new u.default;let p=new s.default("item");t.login=function(e,t){return o(this,void 0,void 0,function*(){let t=new i.default,{code:n}=e.query,o=yield p.userTokenGet(n);if(o&&void 0==o.errcode){let n=yield p.userTokenRefresh(o.refresh_token),i=yield p.userInfoGetByGuanZhu(n.openid),r=yield p.userInfoGet(n.openid,n.access_token);if(void 0==i.errcode&&0===i.subscribe&&r.errcode&&48001===r.errcode)return void(e.body=t.error(201,"此用户未关注,也没有授权，需要跳转到授权界面"));let s=yield g(n.openid,n.access_token);if(s&&n.openid){let{userId:o}={userId:s},i=l.build(o);h.saveTokenInfo(h.getTokenKey(e),i,Object.assign({openid:n.openid,access_token:n.access_token},{userId:o}),o),h.setCookie(e,"token",i,o),e.body=t.success({})}else t.success(r),e.body=t.error(1,"获取用户信息失败");console.log("resultRefresh",n),console.log("userInfo",r)}else e.body=t.error(1,"获取用户信息失败")})};const g=(e,t)=>o(this,void 0,void 0,function*(){let n=yield f.getData("/user/getUserId",{openid:e,access_token:t},"GET");return!(!n||1e3!==n.responseCode)&&n.data});t.getUserInfo=((e,t)=>o(this,void 0,void 0,function*(){let t=new i.default,{openid:n,access_token:o}=e.state.userInfo,r=yield g(n,o);e.body=r?t.success(r):t.error(1,"呵呵 ")})),t.getWeiXinInfo=(()=>o(this,void 0,void 0,function*(){let e=yield f.getData("/config/wxConfig",{},"GET");if(e&&1e3===e.responseCode){let t=new a.default;return t.saveWeiXinInfo("item",{appid:e.data.appID,secret:e.data.appSecret,access_token:e.data.accessToken,jsapi_ticket:e.data.jsapiTicket}),!0}return console.log("获取 有好物的微信配置异常...",e),!1})),t.checkLogin=function(e,t){let n=new i.default;e.body=n.success({})}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(0),r=n(10),s=n(30);i.default.weixins;let u=new r.default;class c{constructor(e){this.key=e}getParams(e,t){return o(this,void 0,void 0,function*(){let n={},{key:o}=this,i=yield u.getWeiXinInfo(o);return e.map(e=>{n[e]=i[e]}),Object.assign({},n,t)})}userTokenGet(e){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/user/token",yield this.getParams(["appid","secret"],{code:e,grant_type:"authorization_code"}))})}userTokenRefresh(e){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/user/tokenRefresh",yield this.getParams(["appid"],{refresh_token:e,grant_type:"refresh_token"}))})}userInfoGet(e,t){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/user/info",yield this.getParams([],{openid:e,access_token:t,lang:"zh_CN"}))})}userInfoGetByGuanZhu(e){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/user/info/guanzhu",yield this.getParams(["access_token"],{openid:e,lang:"zh_CN"}))})}configTokenGet(){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/config/token",yield this.getParams(["appid","secret"],{grant_type:"client_credential"}))})}ticketJsGet(){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/config/jsTicket",yield this.getParams(["access_token"],{type:"jsapi"}))})}menuGet(e){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/menu/get",yield this.getParams([],{access_token:e}))})}verify(e){return o(this,void 0,void 0,function*(){return void 0==(yield this.menuGet(e)).errcode})}}t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).default.init().then(()=>{let e=n(20);console.log("初始化App");e()})},function(e,t){e.exports=require("ioredis")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),i=n(21),r=n(22),s=n(1),u=n(6),c=n(23),a=n(24),d=n(25);let f=()=>{const e=n(12);const t=n(31);const f=n(47);let l=new s.default;let h=new u.default;let p=new i;p.keys=["im a newer secret","你说是啥 就是啥，呵呵哒"];p.use(c.default());p.use(f(r({onerror:function(e,t){t.throw("body parse error",422)}})));p.context.onerror=function(e){null!=e&&(l.error(500,""),this.res.end(JSON.stringify(l.getValue())))};p.use((e,t)=>t().then(()=>{if(200===e.status)return;l.error(e.status,""),e.body=l.getValue(),a.default.error("normal","",e.status)}).catch(t=>{console.error(t);l.error(1e3,"超时");e.body=l.getValue();a.default.error("error","",t)}));p.on("error",e=>a.default.error("server error",e));p.use(h.verify);o.each(t,function(e,t){p.use(e.routes()),p.use(e.allowedMethods())});console.log(e.localServer.port);p.listen(e.localServer.port);d.default()};e.exports=f},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(14);n(15);var r=new i.Logger({transports:[new i.transports.DailyRotateFile({filename:"./log/request",datePattern:"_yyyy-MM-ddTHH.log"})]});const s=(e=200,t="info")=>{switch(parseInt((e/100).toString(),10)){case 5:return"error";case 4:return"warn";default:return t}};t.default=function(){return function(e,t){return o(this,void 0,void 0,function*(){let{request:n}=e,o="",i=Date.now();try{yield t(),o=e.state.useInfo&&e.state.useInfo.userId||""}catch(t){e.status=500,r.error(t.name,"...",{pid:process.pid,uid:process.getuid(),userId:o,error:Object.assign({},t),time:Date.now()-i+"ms"}),e.throw(t.Message,500),console.error(t)}finally{r[s(e.status)]("request","....",{pid:process.pid,uid:process.getuid(),userId:o,req:{header:e.request.header,ip:n.ip,body:n.body,originalUrl:n.originalUrl,method:n.method},time:Date.now()-i+"ms"})}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(14);n(15),process.getuid||(process.getuid=(()=>0));var i=new o.Logger({transports:[new o.transports.Console,new o.transports.DailyRotateFile({filename:"log/request",datePattern:"_yyyy-MM-ddTHH.log"})]});var r={error:function(e,t,n){return n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),i.error(e,t,n)},info:function(e,t,n){return console.log(process),n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),i.info(e,t,n)},warn:function(e,t,n){return n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),i.warn(e,t,n)}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=function(){return o.getWeiXinInfo(),""}},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("isomorphic-form-data")},function(e,t){e.exports={json:{Accept:"application/json","Content-Type":"application/json"},"form-data":{Accept:"application/json"}}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(8);class r{constructor(e){this.key=e,this.init()}init(){return o(this,void 0,void 0,function*(){return this.data=JSON.stringify(yield this.dataGetFromRedis()),this.data})}dataGetFromRedis(){return o(this,void 0,void 0,function*(){return yield i.default.get(this.key)})}getData(){return this.data}saveData(e){return o(this,void 0,void 0,function*(){let t=this;return i.default.set(this.key,JSON.stringify(e)).then((e,n)=>{console.log("xxxx",e,n);return t.init()})})}getDataAsync(){return o(this,void 0,void 0,function*(){return JSON.parse(yield i.default.get(this.key))})}}t.default=r},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(2),r=n(0),s=r.default.routes.weixin,u=(r.default.weixins,new i.default(s.domain,s.timeout));u.setDomain(s.domain),u.setTimeout(s.timeout),t.all=function(e,t){return o(this,void 0,void 0,function*(){e=e.replace(s.prefix,"");let n=s.routes[e],o=n.url,i=yield u.getData(o,t,n.method).catch(e=>({errcode:111111,errmsg:"自定义错误，访问失败!"+JSON.stringify(e)}));return console.log("访问微信结果为",i),i})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=[n(32),n(35),n(37),n(40),n(42)];e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).default.routes.qbii,r=new o;r.prefix(i.prefix);const s=n(33),u=n(34);r.post("/news/isFinishNews",s.isFinishNews);const c=i.routes;for(var a in c)r.all(a,u.all);e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(0).default.routes.qbii,s=new i.default(r.domain,r.timeout);s.setDomain(r.domain),s.setTimeout(r.timeout),t.login=function(e,t){let n=new o.default,{userId:i}=e;return s.getData("/api/user/"+i+"/userId",{},"GET").then(t=>{n.success(t);e.body=n.getValue()})},t.news=function(e,t){let n=new o.default;return console.log("userId:",e.state.userInfo.userId),s.getData("/api/news/getNewsList.html",{},"GET").then(t=>{n.success(t);e.body=n.getValue()})},t.isFinishNews=function(e,t){let n=new o.default;return console.log("userId:",e.state.userInfo.userId),s.getData("/api/news/isFinishNews.html",{},"POST").then(t=>{n.success(t);e.body=n.getValue()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(3),s=n(0).default.routes.qbii,u=new i.default(s.domain,s.timeout);u.setDomain(s.domain),u.setTimeout(s.timeout),t.all=function(e,t){let n=new o.default,{method:i,header:c}=e.request,a=e._matchedRoute,{userId:d}=e,f=("GET"===i?e.request.query:e.request.body||e.request.fields)||{},l=e.params||{};a=a.replace(s.prefix,"");let h=s.routes[a].url;if(h=r.template(h)(Object.assign({},{userId:d},f,l)),console.log("url:"+h),console.dir(f),h)return u.getData(h,f,i).then(t=>{t&&0===t.returnCode?(n.success(t.data),e.body=n.getValue()):t?(n.error(t.returnCode,t.message),e.body=n.getValue()):(n.error(500),e.body=n.getValue())}).catch(e=>{console.log(e)});n.error(404),e.body=n.getValue()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).default.routes.good,r=new o;r.prefix(i.prefix);const s=n(36);r.all("/user/userId",s.login),e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(7),s=n(6),u=n(0),c=(n(4),new r.default,new s.default,u.default.routes.good),a=(u.default.SSO,new i.default(c.domain,c.timeout));a.setDomain(c.domain),a.setTimeout(c.timeout),t.login=function(e,t){let n=new o.default;return console.log("userId:",e.state.userInfo.userId),a.getData("/api/news/getNewsList.html",{},"GET").then(t=>{n.success(t);e.body=n.getValue()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).default.routes.sys,r=new o;r.prefix(i.prefix);const s=n(38);r.all("/account4Client/login",s.login);const u=n(39);r.post("/news/isFinishNews.html",u.isFinishNews),e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(7),s=n(6),u=n(0),c=(n(4),new r.default),a=new s.default,d=u.default.routes.sys,f=u.default.SSO,l=new i.default(d.domain,d.timeout);l.setDomain(d.domain),l.setTimeout(d.timeout),t.login=function(e,t){new o.default;let n=a.getToken(e);return a.verifyToken(n).then(n=>{if(!0!==f)return h(e,t);e.body={responseCode:1e3}}).catch(()=>h(e,t))};const h=function(e,t){let n=e.request.body;console.log("?",n);let i=new o.default;return n.st?l.getData("/api/account4Client/login",n,"POST",{},"form-data").then(t=>{if(1e3===t.responseCode){let n=t.data.userId,o=c.build(t.data.userId);a.saveTokenInfo(a.getTokenKey(e),o,{userId:n},n),a.setCookie(e,"token",o,n),e.body=t}else e.body=t}):(i.error(404),void(e.body=i.getValue()))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(0).default.routes.qbii,s=new i.default(r.domain,r.timeout);s.setDomain(r.domain),s.setTimeout(r.timeout),t.isFinishNews=function(e,t){new o.default;return console.log("userId:",e.state.userInfo.userId),s.getData("/api/news/isFinishNews.html",{},"POST").then(t=>{e.body=t})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).default.routes.item,r=new o;r.prefix(i.prefix);const s=n(16),u=n(41);r.get("/user/checkLogin",s.checkLogin);const c=i.routes;for(var a in c)r.all(a,u.all);r.get("/user/login",s.login),r.get("/user/info",s.getUserInfo),e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(0),s=n(3),u=r.default.routes.item,c=new i.default(u.domain,u.timeout);c.setDomain(u.domain),c.setTimeout(u.timeout),t.all=function(e,t){let n=new o.default,{method:i,header:r}=e.request,a=e._matchedRoute,{userId:d}=e.state.userInfo,f=("GET"===i?e.request.query:e.request.body||e.request.fields)||{},l=e.params||{};a=a.replace(u.prefix,"");let h=u.routes[a].url;if(h=s.template(h)(Object.assign({},{userId:d},f,l)),console.log("url:"+h),h)return c.getData(h,f,i).then(t=>{t&&1e3===t.responseCode?(n.success(t.data),e.body=n.getValue()):t?(n.error(t.responseCode,t.message),e.body=n.getValue()):(n.error(500),e.body=n.getValue())}).catch(e=>{console.log(e)});n.error(404),e.body=n.getValue()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).default.routes.weixin,r=new o;r.prefix(i.prefix);const s=n(43);r.post("/info/:channel",s.setConfig),r.get("/js/info/:channel",s.getJsInfo),e.exports=r},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(44),r=n(10),s=n(1),u=n(45),c=n(46),a=n(17),d=n(3);let f=new r.default,l=new c.default;t.buildJsTicket=((e,t)=>o(this,void 0,void 0,function*(){}));const h=function(e){let t=Object.assign({},e);delete t.secret_node;let n=JSON.stringify(t);return l.encryptMd5Normal(n,"天下第一!!!!")===e.secret_node};t.setConfig=((e,t)=>o(this,void 0,void 0,function*(){let t=new s.default,n=e.request.body,o=e.params,i=u.default(n,{access_token:"",appid:"",jsapi_ticket:"",secret:"",time:"",secret_node:""}),r=yield new a.default(o.channel).ticketJsGet();if(console.log(r),d.isObject(i)&&o.channel){let n=h(i);if(!0!==n)return e.body=t.error(1,"呵呵，你加密错了！"),!1;let r=new a.default(o.channel),s=yield r.verify(i.access_token);if(s){let n=(yield f.getWeiXinInfo(o.channel))||{};f.saveWeiXinInfo(o.channel,Object.assign(n,i)),e.body=t.success({})}else e.body=t.error(1,"呵呵！你配置错了")}else e.body=t.error(1,i.toString())})),t.getJsInfo=((e,t)=>o(this,void 0,void 0,function*(){let t=new s.default,n=e.query,o=e.params,r=u.default(n,{url:""});if(d.isObject(r)&&o.channel){r.url.substr(0,r.url.indexOf("#"));let s=yield f.getWeiXinInfo(o.channel),u=i.default(s.jsapi_ticket,n.url);console.info(u),e.body=t.success(Object.assign(u,{appid:s.appid}))}else e.body=t.error(1,r.toString())}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(9);var i=function(){return Math.random().toString(36).substr(2,15)},r=function(){return parseInt(((new Date).getTime()/1e3).toString())+""},s=function(e){var t=Object.keys(e),n={};(t=t.sort()).forEach(function(t){n[t.toLowerCase()]=e[t]});var o="";for(var i in n)o+="&"+i+"="+n[i];return o=o.substr(1)};t.default=function(e,t){var n={jsapi_ticket:e,nonceStr:i(),timestamp:r(),url:t},u=s(n),c=o.createHash("sha1");return c.update(u),n.signature=c.digest("hex"),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=[],o={},i=!0;for(let r in t)void 0==e[r]?(n.push(r),i=!1):o[r]=e[r];return i?o:n.join(" 不能为空 ,")+" 不能为空"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(9),i=n(4),r="密码加密啦，呵呵哒，ll|~";class s{constructor(){}encrypt(e,t=!1){let n=e+(!0===t?i().format("YYYY-MM-DD hh:mm:ss:SSS"):"");return o.createHmac("md5",r).update(n).digest("hex")}encryptMd5Normal(e,t){console.log("加密内容:"+e),console.log("加密key:"+t);let n=o.createHmac("md5",t).update(e,"utf8").digest("hex");return console.log("加密成啥样:"+n),n}}t.default=s},function(e,t){e.exports=require("koa-convert")}]);