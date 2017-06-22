!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10),i=n(11);let r=JSON.parse(i.readFileSync(o.resolve(__dirname,"./localConfig.production.json")).toString());e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0).error;class i{constructor(){this.resultCode=0,this.resultMessage="success",this.result={},this.getValue=this.getValue.bind(this)}success(e){return this.resultCode=0,this.resultMessage="success",this.result=e,this.getValue()}error(e,t){return this.resultCode=e,this.resultMessage=o[e]||t,this.getValue()}getValue(){return{code:this.resultCode,message:this.resultMessage,result:this.result}}}t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);n(25);var i=n(26);class r{constructor(e,t=5e3){this.headers={charset:"utf-8",client_version:"1.0",channel:"node"},this.domain=e,this.timeout=t}setDomain(e){this.domain=e}setTimeout(e){this.timeout=e}setHeaders(e={client_version:"1.0",channel:"node"}){this.headers=Object.assign({charset:"utf-8",client_version:"1.0",channel:"node"},e)}setVersion(e){this.headers.client_version=e}getData(e,t={},n="GET",i,r="json",s){"GET"===(n=n.toLocaleUpperCase())&&o.size(t)>0&&(e+="?"+d(t)),i=u(r,Object.assign({},this.headers,i));let f=c(r,t);return a(s||this.timeout,fetch(this.domain+e,{method:n,headers:i,body:"GET"===n?void 0:f}).then(t=>{console.log("fetxhUrl:"+e);return t.json()}).catch(e=>{console.log(e)}))}}const s=n(27),u=function(e,t){return Object.assign({},t,s[e])},c=function(e,t){let n;switch(e){case"json":n=JSON.stringify(t);break;case"form-data":n=new i;for(let e in t)n.append(e,t[e]);break;default:n=t}return n},a=function(e,t){return new Promise((n,o)=>{const i=setTimeout(()=>{o(new Error("promise timeout"))},e);t.then(e=>{clearTimeout(i);n(e)},e=>{clearTimeout(i);o(e)})})},d=function(e,t={":":"=",",":"&"}){let n="";for(var o in e)n+=o+"="+encodeURI(e[o])+"&";return n.substring(-1,n.length-1)};t.default=r},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("moment")},function(e,t){e.exports=require("koa-router")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(12),i=n(7),r=n(1),s=n(4),u=new r.default,c=n(0),a=c.ignoreUrls,d="YYYY-MM-DD hh:mm:ss:SSS",f=(new i.default,c.SSO);class l{constructor(){this.verify=this.verify.bind(this)}setCookie(e,t,n,o){e.cookies.set(t,!0===f?n+o:n,c.cookie)}saveData(e,t){let n={token:e,userId:t,date:s().format(d)};console.log("保存token",JSON.stringify(n));let i=c.redis.tokenKey+":"+(!0===f?t:e);o.default.set(i,JSON.stringify(n)),o.default.expire(i,c.redis.expiration)}saveTokenInfo(e,t,n,i){let r=Object.assign({},n,{token:t,date:s().format(d)}),u=e+":"+(!0===f?i:t);o.default.set(u,JSON.stringify(r)),o.default.expire(u,c.redis.expiration)}getTokenInfo(e){return o.default.get(e)}verifyToken(e){return new Promise((t,n)=>{e||n();this.getTokenInfo(e).then(e=>{e?t(JSON.parse(e)):n()})})}getTokenKey(e){let t=e.originalUrl.split("/")[2];return c.routes[t].tokenKey||c.routes.qbii.tokenKey}getToken(e){let t=e.cookies.get("token")||!1;if(t)return this.getTokenKey(e)+":"+t}verify(e,t){let n=this.getToken(e),{url:o}=e;return o=o.split("?")[0],a[o]?t():n?this.verifyToken(n).then(n=>{e.state.userInfo=n;return t()}).catch(()=>{u.error(200,"登录过期");e.body=u.getValue();return}):(u.error(200,"未登陆"),void(e.body=u.getValue()))}}t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(8),i=n(4),r="啊哈你说这个是啥，其实就是Hmac的message，干啥用的？防止你硬解的。";class s{constructor(){}build(e){return o.createHmac("md5",r).update(e+i().format("YYYY-MM-DD hh:mm:ss:SSS")).digest("hex")}decipher(e){}}t.default=s},function(e,t){e.exports=require("crypto")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});let i=new(n(28).default)("configInfo");class r{constructor(){}getData(){return o(this,void 0,void 0,function*(){return yield i.getDataAsync()})}getWeiXinInfo(e){return o(this,void 0,void 0,function*(){return(yield this.getData()).weixins[e]||{}})}saveWeiXinInfo(e,t){return o(this,void 0,void 0,function*(){let n=(yield this.getData())||{weixins:{}},o=n.weixins&&n.weixins[e]&&n.weixins||{[e]:{}};for(let n in t)o[e][n]=t[n];let r=Object.assign({},n.weixins,o);return n.weixins=r,i.saveData(n)})}}t.default=r},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=new(n(21))(n(13).redis);t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(10),i=n(11),r=JSON.parse(i.readFileSync(o.resolve(__dirname,"./sysConfig.production.json")).toString());e.exports=r},function(e,t){e.exports=require("winston")},function(e,t){e.exports=require("winston-daily-rotate-file")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(2),s=n(17),u=n(6),c=n(7),a=n(9),d=n(0).routes.item,f=new r.default(d.domain,d.timeout);f.setDomain(d.domain),f.setTimeout(d.timeout);const l=new c.default,p=new u.default;let h=new s.default("item");t.login=function(e,t){return o(this,void 0,void 0,function*(){let t=new i.default,{code:n}=e.query,o=yield h.userTokenGet(n);if(o&&void 0==o.errcode){let n=yield h.userTokenRefresh(o.refresh_token),i=yield h.userInfoGet(n.openid,n.access_token),r=yield g(n.openid,n.access_token);if(r&&i.openid&&n.openid){let{userId:o}={userId:r},s=l.build(o);p.saveTokenInfo(p.getTokenKey(e),s,Object.assign({openid:i.openid,access_token:n.access_token},{userId:o}),o),p.setCookie(e,"token",s,o),e.body=t.success({})}else e.body=t.error(1,"获取用户信息失败");console.log("resultRefresh",n),console.log("userInfo",i)}else e.body=t.error(1,"获取用户信息失败")})};const g=(e,t)=>o(this,void 0,void 0,function*(){let t=yield f.getData("/user/getUserId",{openid:e},"GET");return!(!t||1e3!==t.responseCode)&&t.data});t.getUserInfo=((e,t)=>o(this,void 0,void 0,function*(){let t=new i.default,{openid:n,access_token:o}=e.state.userInfo,r=yield g(n,o);e.body=r?t.success(r):t.error(1,"呵呵 ")})),t.getWeiXinInfo=(()=>o(this,void 0,void 0,function*(){let e=yield f.getData("/config/wxConfig",{},"GET");if(e&&1e3===e.responseCode){let t=new a.default;return t.saveWeiXinInfo("item",{appid:e.data.appID,secret:e.data.appSecret,access_token:e.data.accessToken,jsapi_ticket:e.data.jsapiTicket}),!0}return console.log("获取 有好物的微信配置异常...",e),!1})),t.checkLogin=function(e,t){let n=new i.default;e.body=n.success({})}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(9),r=n(29);n(0).weixins;let s=new i.default;class u{constructor(e){this.key=e}getParams(e,t){return o(this,void 0,void 0,function*(){let n={},{key:o}=this,i=yield s.getWeiXinInfo(o);return e.map(e=>{n[e]=i[e]}),Object.assign({},n,t)})}userTokenGet(e){return o(this,void 0,void 0,function*(){return r.all("/api/weixin/user/token",yield this.getParams(["appid","secret"],{code:e,grant_type:"authorization_code"}))})}userTokenRefresh(e){return o(this,void 0,void 0,function*(){return r.all("/api/weixin/user/tokenRefresh",yield this.getParams(["appid"],{refresh_token:e,grant_type:"refresh_token"}))})}userInfoGet(e,t){return o(this,void 0,void 0,function*(){return r.all("/api/weixin/user/info",yield this.getParams([],{openid:e,access_token:t,lang:"zh_CN"}))})}userInfoGetByGuanZhu(e){return o(this,void 0,void 0,function*(){return r.all("/api/weixin/user/info/guanzhu",yield this.getParams(["access_token"],{openid:e,lang:"zh_CN"}))})}configTokenGet(){return o(this,void 0,void 0,function*(){return r.all("/api/weixin/config/token",yield this.getParams(["appid","secret"],{grant_type:"client_credential"}))})}ticketJsGet(){return o(this,void 0,void 0,function*(){return r.all("/api/weixin/config/jsTicket",yield this.getParams(["access_token"],{type:"jsapi"}))})}menuGet(e){return o(this,void 0,void 0,function*(){return r.all("/api/weixin/menu/get",yield this.getParams([],{access_token:e}))})}verify(e){return o(this,void 0,void 0,function*(){return void 0==(yield this.menuGet(e)).errcode})}}t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),i=n(19),r=n(20),s=n(1),u=n(6),c=n(22),a=n(23),d=n(24);console.log(c.default);const f=n(13),l=n(30),p=n(46);let h=new s.default,g=new u.default,y=new i;y.keys=["im a newer secret","你说是啥 就是啥，呵呵哒"],y.use(p(r({onerror:function(e,t){t.throw("body parse error",422)}}))),y.context.onerror=function(e){null!=e&&(h.error(500,""),this.res.end(JSON.stringify(h.getValue())))},y.use((e,t)=>t().then(()=>{if(200===e.status)return;h.error(e.status,""),e.body=h.getValue(),a.default.error("normal","",e.status)}).catch(t=>{console.error(t);h.error(1e3,"超时");e.body=h.getValue();a.default.error("error","",t)})),y.on("error",e=>a.default.error("server error",e)),y.use(g.verify),o.each(l,function(e,t){y.use(e.routes()),y.use(e.allowedMethods())}),y.listen(f.localServer.port),d.default()},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t){e.exports=require("ioredis")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(14);n(15);var r=new i.Logger({transports:[new i.transports.DailyRotateFile({filename:"request",datePattern:"_yyyy-MM-ddTHH.log"})]});const s=(e=200,t="info")=>{switch(parseInt((e/100).toString(),10)){case 5:return"error";case 4:return"warn";default:return t}};t.default=function(){return function(e,t){return o(this,void 0,void 0,function*(){let{request:n}=e,o="",i=Date.now();try{yield t(),o=e.state.useInfo&&e.state.useInfo.userId||""}catch(t){e.status=500,r.error(t.name,"...",{pid:process.pid,uid:process.getuid(),userId:o,error:Object.assign({},t),time:Date.now()-i+"ms"}),e.throw(t.Message,500),console.error(t)}finally{r[s(e.status)]("request","....",{pid:process.pid,uid:process.getuid(),userId:o,req:{header:e.request.header,ip:n.ip,body:n.body,originalUrl:n.originalUrl,method:n.method},time:Date.now()-i+"ms"})}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(14);n(15),process.getuid||(process.getuid=(()=>0));var i=new o.Logger({transports:[new o.transports.Console,new o.transports.DailyRotateFile({filename:"request",datePattern:"_yyyy-MM-ddTHH.log"})]});var r={error:function(e,t,n){return n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),i.error(e,t,n)},info:function(e,t,n){return console.log(process),n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),i.info(e,t,n)},warn:function(e,t,n){return n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),i.warn(e,t,n)}};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16);t.default=function(){return o.getWeiXinInfo(),""}},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("isomorphic-form-data")},function(e,t){e.exports={json:{Accept:"application/json","Content-Type":"application/json"},"form-data":{Accept:"application/json"}}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(12);class r{constructor(e){this.key=e,this.init()}init(){return o(this,void 0,void 0,function*(){return this.data=JSON.stringify(yield this.dataGetFromRedis()),this.data})}dataGetFromRedis(){return o(this,void 0,void 0,function*(){return yield i.default.get(this.key)})}getData(){return this.data}saveData(e){return o(this,void 0,void 0,function*(){let t=this;return i.default.set(this.key,JSON.stringify(e)).then((e,n)=>{console.log("xxxx",e,n);return t.init()})})}getDataAsync(){return o(this,void 0,void 0,function*(){return JSON.parse(yield i.default.get(this.key))})}}t.default=r},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(2),r=n(0).routes.weixin,s=new i.default(r.domain,r.timeout);s.setDomain(r.domain),s.setTimeout(r.timeout),t.all=function(e,t){return o(this,void 0,void 0,function*(){e=e.replace(r.prefix,"");let n=r.routes[e],o=n.url,i=yield s.getData(o,t,n.method).catch(e=>({errcode:111111,errmsg:"自定义错误，访问失败!"+JSON.stringify(e)}));return console.log("访问微信结果为",i),i})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=[n(31),n(34),n(36),n(39),n(41)];e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).routes.qbii,r=new o;r.prefix(i.prefix);const s=n(32),u=n(33);r.post("/news/isFinishNews",s.isFinishNews);const c=i.routes;for(var a in c)r.all(a,u.all);e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(0).routes.qbii,s=new i.default(r.domain,r.timeout);s.setDomain(r.domain),s.setTimeout(r.timeout),t.login=function(e,t){let n=new o.default,{userId:i}=e;return s.getData("/api/user/"+i+"/userId",{},"GET").then(t=>{n.success(t);e.body=n.getValue()})},t.news=function(e,t){let n=new o.default;return console.log("userId:",e.state.userInfo.userId),s.getData("/api/news/getNewsList.html",{},"GET").then(t=>{n.success(t);e.body=n.getValue()})},t.isFinishNews=function(e,t){let n=new o.default;return console.log("userId:",e.state.userInfo.userId),s.getData("/api/news/isFinishNews.html",{},"POST").then(t=>{n.success(t);e.body=n.getValue()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(3),s=n(0).routes.qbii,u=new i.default(s.domain,s.timeout);u.setDomain(s.domain),u.setTimeout(s.timeout),t.all=function(e,t){let n=new o.default,{method:i,header:c}=e.request,a=e._matchedRoute,{userId:d}=e,f=("GET"===i?e.request.query:e.request.body||e.request.fields)||{},l=e.params||{};a=a.replace(s.prefix,"");let p=s.routes[a].url;if(p=r.template(p)(Object.assign({},{userId:d},f,l)),console.log("url:"+p),console.dir(f),p)return u.getData(p,f,i).then(t=>{t&&0===t.returnCode?(n.success(t.data),e.body=n.getValue()):t?(n.error(t.returnCode,t.message),e.body=n.getValue()):(n.error(500),e.body=n.getValue())}).catch(e=>{console.log(e)});n.error(404),e.body=n.getValue()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).routes.good,r=new o;r.prefix(i.prefix);const s=n(35);r.all("/user/userId",s.login),e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(7),s=n(6),u=(n(4),new r.default,new s.default,n(0)),c=u.routes.good,a=(u.SSO,new i.default(c.domain,c.timeout));a.setDomain(c.domain),a.setTimeout(c.timeout),t.login=function(e,t){let n=new o.default;return console.log("userId:",e.state.userInfo.userId),a.getData("/api/news/getNewsList.html",{},"GET").then(t=>{n.success(t);e.body=n.getValue()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).routes.sys,r=new o;r.prefix(i.prefix);const s=n(37);r.all("/account4Client/login",s.login);const u=n(38);r.post("/news/isFinishNews.html",u.isFinishNews),e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(7),s=n(6),u=n(0),c=(n(4),new r.default),a=new s.default,d=u.routes.sys,f=u.SSO,l=new i.default(d.domain,d.timeout);l.setDomain(d.domain),l.setTimeout(d.timeout),t.login=function(e,t){new o.default;let n=a.getToken(e);return a.verifyToken(n).then(n=>{if(!0!==f)return p(e,t);e.body={responseCode:1e3}}).catch(()=>p(e,t))};const p=function(e,t){let n=e.request.body;console.log("?",n);let i=new o.default;return n.st?l.getData("/api/account4Client/login",n,"POST",{},"form-data").then(t=>{if(1e3===t.responseCode){let n=t.data.userId,o=c.build(t.data.userId);a.saveTokenInfo(a.getTokenKey(e),o,{userId:n},n),a.setCookie(e,"token",o,n),e.body=t}else e.body=t}):(i.error(404),void(e.body=i.getValue()))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(0).routes.qbii,s=new i.default(r.domain,r.timeout);s.setDomain(r.domain),s.setTimeout(r.timeout),t.isFinishNews=function(e,t){new o.default;return console.log("userId:",e.state.userInfo.userId),s.getData("/api/news/isFinishNews.html",{},"POST").then(t=>{e.body=t})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).routes.item,r=new o;r.prefix(i.prefix);const s=n(16),u=n(40);r.get("/user/checkLogin",s.checkLogin);const c=i.routes;for(var a in c)r.all(a,u.all);r.get("/user/login",s.login),r.get("/user/info",s.getUserInfo),e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(3),s=n(0).routes.item,u=new i.default(s.domain,s.timeout);u.setDomain(s.domain),u.setTimeout(s.timeout),t.all=function(e,t){let n=new o.default,{method:i,header:c}=e.request,a=e._matchedRoute,{userId:d}=e.state.userInfo,f=("GET"===i?e.request.query:e.request.body||e.request.fields)||{},l=e.params||{};a=a.replace(s.prefix,"");let p=s.routes[a].url;if(p=r.template(p)(Object.assign({},{userId:d},f,l)),console.log("url:"+p),p)return u.getData(p,f,i).then(t=>{t&&1e3===t.responseCode?(n.success(t.data),e.body=n.getValue()):t?(n.error(t.responseCode,t.message),e.body=n.getValue()):(n.error(500),e.body=n.getValue())}).catch(e=>{console.log(e)});n.error(404),e.body=n.getValue()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),i=n(0).routes.weixin,r=new o;r.prefix(i.prefix);const s=n(42);r.post("/info/:channel",s.setConfig),r.get("/js/info/:channel",s.getJsInfo),e.exports=r},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function u(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}c((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(43),r=n(9),s=n(1),u=n(44),c=n(45),a=n(17),d=n(3);let f=new r.default,l=new c.default;t.buildJsTicket=((e,t)=>o(this,void 0,void 0,function*(){}));const p=function(e){let t=Object.assign({},e);delete t.secret_node;let n=JSON.stringify(t);return l.encryptMd5Normal(n,"天下第一!!!!")===e.secret_node};t.setConfig=((e,t)=>o(this,void 0,void 0,function*(){let t=new s.default,n=e.request.body,o=e.params,i=u.default(n,{access_token:"",appid:"",jsapi_ticket:"",secret:"",time:"",secret_node:""}),r=yield new a.default(o.channel).ticketJsGet();if(console.log(r),d.isObject(i)&&o.channel){let n=p(i);if(!0!==n)return e.body=t.error(1,"呵呵，你加密错了！"),!1;let r=new a.default(o.channel),s=yield r.verify(i.access_token);if(s){let n=(yield f.getWeiXinInfo(o.channel))||{};f.saveWeiXinInfo(o.channel,Object.assign(n,i)),e.body=t.success({})}else e.body=t.error(1,"呵呵！你配置错了")}else e.body=t.error(1,i.toString())})),t.getJsInfo=((e,t)=>o(this,void 0,void 0,function*(){let t=new s.default,n=e.query,o=e.params,r=u.default(n,{url:""});if(d.isObject(r)&&o.channel){r.url.substr(0,r.url.indexOf("#"));let s=yield f.getWeiXinInfo(o.channel),u=i.default(s.jsapi_ticket,n.url);console.info(u),e.body=t.success(Object.assign(u,{appid:s.appid}))}else e.body=t.error(1,r.toString())}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(8);var i=function(){return Math.random().toString(36).substr(2,15)},r=function(){return parseInt(((new Date).getTime()/1e3).toString())+""},s=function(e){var t=Object.keys(e),n={};(t=t.sort()).forEach(function(t){n[t.toLowerCase()]=e[t]});var o="";for(var i in n)o+="&"+i+"="+n[i];return o=o.substr(1)};t.default=function(e,t){var n={jsapi_ticket:e,nonceStr:i(),timestamp:r(),url:t},u=s(n),c=o.createHash("sha1");return c.update(u),n.signature=c.digest("hex"),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=[],o={},i=!0;for(let r in t)void 0==e[r]?(n.push(r),i=!1):o[r]=e[r];return i?o:n.join(" 不能为空 ,")+" 不能为空"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(8),i=n(4),r="密码加密啦，呵呵哒，ll|~";class s{constructor(){}encrypt(e,t=!1){let n=e+(!0===t?i().format("YYYY-MM-DD hh:mm:ss:SSS"):"");return o.createHmac("md5",r).update(n).digest("hex")}encryptMd5Normal(e,t){console.log("加密内容:"+e),console.log("加密key:"+t);let n=o.createHmac("md5",t).update(e,"utf8").digest("hex");return console.log("加密成啥样:"+n),n}}t.default=s},function(e,t){e.exports=require("koa-convert")}]);