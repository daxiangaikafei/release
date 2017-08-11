!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=19)}([function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(9),r=n(11);class s{constructor(){this.fs=n(15),this.env="production",this.configName="localConfig",this.init=(()=>o(this,void 0,void 0,function*(){let e=yield this.getRedisData();e||(e=JSON.parse(this.fs.readFileSync(i.resolve(__dirname,"./localConfig."+this.env+".json")).toString()),r.default.set(this.configName,JSON.stringify(e))),this.initConfig(e),console.log("config 数据初始化成功",e),this.IntervalUpdate(1e4)})),this.initConfig=(e=>{this.config=e,this.error=e.error,this.routes=e.routes,this.ignoreUrls=e.ignoreUrls,this.redis=e.redis,this.cookie=e.cookie,this.SSO=e.SSO,this.weixins=e.weixins,this.gateway=e.gateway}),this.getRedisData=(()=>o(this,void 0,void 0,function*(){let e,t=yield r.default.get(this.configName);return t&&(e=JSON.parse(t)),e})),this.update=(()=>o(this,void 0,void 0,function*(){return yield this.getRedisData()})),this.IntervalUpdate=(e=>{setInterval(()=>o(this,void 0,void 0,function*(){let e=yield this.update();this.initConfig(e),console.log("redis 配置文件已更新")}),e)}),this.setRouterData=((e,t)=>o(this,void 0,void 0,function*(){let n=yield this.getRedisData();n&&(n.routes[e]=t,r.default.set(this.configName,n),this.initConfig(n))}))}}let u=new s;t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(0).default.error;class i{constructor(){this.resultCode=0,this.resultMessage="success",this.result={},this.getValue=this.getValue.bind(this)}success(e,t){return this.resultCode=0,this.resultMessage=t||"success",this.result=e,this.getValue()}error(e,t){return this.resultCode=e,this.resultMessage=o[e]||t,this.getValue()}getValue(){return{code:this.resultCode,message:this.resultMessage,result:this.result}}}t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3);n(26);var i=n(27);const r=n(8);class s{constructor(e,t=5e3){this.headers={charset:"utf-8",client_version:"1.0",channel:"node"},this.domain=e,this.timeout=t}setDomain(e){this.domain=e}setTimeout(e){this.timeout=e}setHeaders(e={client_version:"1.0",channel:"node"}){this.headers=Object.assign({charset:"utf-8",client_version:"1.0",channel:"node"},e)}setVersion(e){this.headers.client_version=e}getData(e,t={},n="GET",i,s="json",u){"GET"===(n=n.toLocaleUpperCase())&&o.size(t)>0&&(e+="?"+l(t)),i=a(s,Object.assign({},this.headers,i));let f=c(s,t);return d(u||this.timeout,fetch(this.domain+e,{method:n,headers:i,body:"GET"===n?void 0:f}).then(t=>(console.log("fetxhUrl:"+e),t.json())).catch(t=>{r.default.error("fetch",JSON.stringify({url:this.domain+e,method:n,headers:i,body:"GET"===n?void 0:f}),t)}))}}const u=n(28),a=function(e,t){return Object.assign({},t,u[e])},c=function(e,t){let n;switch(e){case"json":n=JSON.stringify(t);break;case"form-data":n=new i;for(let e in t)n.append(e,t[e]);break;default:n=t}return n},d=function(e,t){return new Promise((n,o)=>{const i=setTimeout(()=>{o(new Error("promise timeout"))},e);t.then(e=>{clearTimeout(i),n(e)},e=>{clearTimeout(i),o(e)})})},l=function(e,t={":":"=",",":"&"}){let n="";for(var o in e)n+=o+"="+encodeURI(e[o])+"&";return n.substring(-1,n.length-1)};t.default=s},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("koa-router")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(11),r=n(6),s=n(1),u=n(7),a=n(0),c=n(8),d=new s.default,l=a.default,f="YYYY-MM-DD hh:mm:ss:SSS",h=(new r.default,l.SSO);class p{constructor(e=h){this.verify=this.verify.bind(this),this.setCookie=this.setCookie.bind(this),this.saveTokenInfo=this.saveTokenInfo.bind(this),this.SSO=e}setCookie(e,t,n,i){return o(this,void 0,void 0,function*(){e.cookies.set(t,!0===this.SSO?i:n,l.cookie)})}saveTokenInfo(e,t,n,o){let r=Object.assign({},n,{token:t,date:u().format(f)}),s=e+":"+(!0===this.SSO?o:t);i.default.set(s,JSON.stringify(r)),i.default.expire(s,l.redis.expiration)}getTokenInfo(e){return i.default.get(e)}_verifyToken(e){return o(this,void 0,void 0,function*(){let t=yield this.getTokenInfo(e);return t&&JSON.parse(t)||t})}getTokenInfoByKey(e,t){return o(this,void 0,void 0,function*(){let n=yield this.getTokenInfo(this.getTokenKey(t)+":"+e);return JSON.parse(n)||!1})}getTokenKey(e){let t=e.originalUrl.split("/")[2];return l.routes[t]&&l.routes[t].tokenKey||l.routes.qbii.tokenKey}getToken(e){let t=e.cookies.get("token")||!1;if(t)return this.getTokenKey(e)+":"+t}verifyToken(e){return o(this,void 0,void 0,function*(){let t=this.getToken(e);return!!(yield this._verifyToken(t))})}checkIgnoreUrl(e){let t=!1,n=l.ignoreUrls;for(let o in n){let i=o.indexOf("/:");if(i>=0){if(o.substring(0,i)===e.substring(0,i)){t=n[o];break}}else if(o===e){t=n[o];break}}return t}verify(e,t){return o(this,void 0,void 0,function*(){let{url:n}=e;if(n=n.split("?")[0],this.checkIgnoreUrl(n))return t();let o=this.getToken(e);if(o){let n=yield this._verifyToken(o);return n?(e.state.userInfo=n,t()):(d.error(200,"登录过期"),e.body=d.getValue(),void c.default.error("匹配失败","",{cookie:e.cookies.get("token")}))}return d.error(200,"未登陆"),c.default.error("未登录信息","",{cookie:e.cookies.get("token")}),void(e.body=d.getValue())})}}t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(12),i=n(7),r="啊哈你说这个是啥，其实就是Hmac的message，干啥用的？防止你硬解的。";class s{constructor(){}build(e){return o.createHmac("md5",r).update(e+i().format("YYYY-MM-DD hh:mm:ss:SSS")).digest("hex")}decipher(e){}}t.default=s},function(e,t){e.exports=require("moment")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(16),i=n(9);n(17),process.getuid||(process.getuid=(()=>0));var r=new o.Logger({transports:[new o.transports.Console,new o.transports.DailyRotateFile({filename:i.resolve(process.cwd(),"./log/normal"),datePattern:"_yyyy-MM-ddTHH.log"})]});var s={error:function(e,t,n){return n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),r.error(e,t,n)},info:function(e,t,n){return console.log(process),n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),r.info(e,t,n)},warn:function(e,t,n){return n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),r.warn(e,t,n)}};t.default=s},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});let i=new(n(29).default)("configInfo");class r{constructor(){}getData(){return o(this,void 0,void 0,function*(){return yield i.getDataAsync()})}getWeiXinInfo(e){return o(this,void 0,void 0,function*(){return(yield this.getData()).weixins[e]||{}})}saveWeiXinInfo(e,t){return o(this,void 0,void 0,function*(){let n=(yield this.getData())||{weixins:{}},o=n.weixins&&n.weixins[e]&&n.weixins||{[e]:{}};for(let n in t)o[e][n]=t[n];let r=Object.assign({},n.weixins,o);return n.weixins=r,i.saveData(n)})}}t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=new(n(20))(n(14).redis);t.default=o},function(e,t){e.exports=require("crypto")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(0),r=n(10),s=n(30);i.default.weixins;let u=new r.default;class a{constructor(e){this.key=e}getParams(e,t){return o(this,void 0,void 0,function*(){let n={},{key:o}=this,i=yield u.getWeiXinInfo(o);return e.map(e=>{n[e]=i[e]}),Object.assign({},n,t)})}infoGet(){return o(this,void 0,void 0,function*(){let{key:e}=this;return yield u.getWeiXinInfo(e)})}userTokenGet(e){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/user/token",yield this.getParams(["appid","secret"],{code:e,grant_type:"authorization_code"}))})}userTokenRefresh(e){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/user/tokenRefresh",yield this.getParams(["appid"],{refresh_token:e,grant_type:"refresh_token"}))})}userInfoGet(e,t){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/user/info",yield this.getParams([],{openid:e,access_token:t,lang:"zh_CN"}))})}userInfoGetByGuanZhu(e){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/user/info/guanzhu",yield this.getParams(["access_token"],{openid:e,lang:"zh_CN"}))})}configTokenGet(){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/config/token",yield this.getParams(["appid","secret"],{grant_type:"client_credential"}))})}ticketJsGet(){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/config/jsTicket",yield this.getParams(["access_token"],{type:"jsapi"}))})}menuGet(e){return o(this,void 0,void 0,function*(){return s.all("/api/weixin/menu/get",yield this.getParams([],{access_token:e}))})}verify(e){return o(this,void 0,void 0,function*(){return void 0==(yield this.menuGet(e)).errcode})}}t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(9),i=n(15),r=JSON.parse(i.readFileSync(o.resolve(__dirname,"./sysConfig.production.json")).toString());e.exports=r},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("winston")},function(e,t){e.exports=require("winston-daily-rotate-file")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(2),s=n(13),u=n(5),a=n(6),c=n(10),d=n(0),l=n(8),f=d.default.routes.item,h=new r.default(f.domain,f.timeout);h.setDomain(f.domain),h.setTimeout(f.timeout);const p=new a.default,y=new u.default(!0);let g=new s.default("item");t.loginx=function(e,t){return o(this,void 0,void 0,function*(){e.cookies.set("name","tobi",{signed:!0}),e.body={}})},t.login=function(e,n){return o(this,void 0,void 0,function*(){let n=new i.default,{code:o}=e.query;if(yield y.verifyToken(e))return void(e.body=n.success({}));let r=yield g.userTokenGet(o);if(r&&void 0==r.errcode){let o={},i=yield g.userTokenRefresh(r.refresh_token),s=yield y.getTokenInfoByKey(i.openid,e);if(s)return y.setCookie(e,"token",s.token,s.openid),void(e.body=n.success({}));let u=yield g.userInfoGet(i.openid,i.access_token);o=u;let a=yield t.sendUserInfo(i.openid,i.access_token,o);if(a&&i.openid){let{userId:t}={userId:a},o=p.build(t);y.saveTokenInfo(y.getTokenKey(e),o,Object.assign({openid:i.openid,access_token:i.access_token},{userId:t}),i.openid),yield y.setCookie(e,"token",o,i.openid),e.body=n.success({})}else l.default.error("用户登录失败","",{resultRefresh:i,userInfo:a}),n.success(o),e.body=n.error(1,"获取用户信息失败")}else l.default.error("根据code获取微信用户token失败","",{re:r}),e.body=n.error(1,"获取用户信息失败")})},t.sendUserInfo=((e,t,n)=>o(this,void 0,void 0,function*(){let e=yield h.getData("/user/postWxUser",n,"POST");return!(!e||1e3!==e.responseCode)&&e.data})),t.getWXInfo=function(e,t){return o(this,void 0,void 0,function*(){let t=yield g.infoGet(),n=new i.default;e.body=n.success({appid:t.appid})})},t.getWeiXinInfo=(()=>o(this,void 0,void 0,function*(){let e=yield h.getData("/config/wxConfig",{},"GET");if(e&&1e3===e.responseCode){let t=new c.default;return t.saveWeiXinInfo("item",{appid:e.data.appID,secret:e.data.appSecret,access_token:e.data.accessToken,jsapi_ticket:e.data.jsapiTicket}),!0}return console.log("获取 有好物的微信配置异常...",e),!1})),t.checkLogin=function(e,t){let n=new i.default;e.body=n.success({})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).default.init().then(()=>{let e=n(21);console.log("初始化App"),e()})},function(e,t){e.exports=require("ioredis")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),i=n(22),r=n(23),s=n(1),u=n(5),a=n(24),c=n(8),d=n(25),l=n(31),f=n(14),h=n(32),p=n(51);let y=()=>{let e=new s.default,t=new u.default,n=new i;n.keys=["im a newer secret","你说是啥 就是啥，呵呵哒"],n.use(a.default()),n.use(l.default()),n.use(p(r({onerror:function(e,t){t.throw("body parse error",422)}}))),n.context.onerror=function(t){null!=t&&(e.error(500,""),this.res.end(JSON.stringify(e.getValue())))},n.use((t,n)=>n().then(()=>{200!==t.status&&(e.error(t.status,""),t.body=e.getValue(),c.default.error("normal","",t.status))}).catch(n=>{console.error(n),e.error(1e3,"超时"),t.body=e.getValue(),c.default.error("error","",n)})),n.on("error",e=>c.default.error("server error",e)),n.use(t.verify),o.each(h,function(e,t){n.use(e.routes()),n.use(e.allowedMethods())}),console.log(f.localServer.port),n.listen(f.localServer.port),d.default()};e.exports=y},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(16),r=n(9);n(17);var s=new i.Logger({transports:[new i.transports.DailyRotateFile({filename:r.resolve(process.cwd(),"./log/request"),datePattern:"_yyyy-MM-ddTHH.log"})]});const u=(e=200,t="info")=>{switch(parseInt((e/100).toString(),10)){case 5:return"error";case 4:return"warn";default:return t}};t.default=function(){return function(e,t){return o(this,void 0,void 0,function*(){let{request:n}=e,o="",i=Date.now();try{yield t(),o=e.state.useInfo&&e.state.useInfo.userId||""}catch(t){e.status=500,s.error(t.name,"...",{pid:process.pid,uid:process.getuid(),userId:o,error:Object.assign({},t),time:Date.now()-i+"ms"}),e.throw(t.Message,500),console.error(t)}finally{s[u(e.status)]("request","....",{pid:process.pid,uid:process.getuid(),userId:o,req:{header:e.request.header,ip:n.ip,body:n.body,originalUrl:n.originalUrl,method:n.method},time:Date.now()-i+"ms",res:{body:e.response.body}})}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(18);t.default=function(){return o.getWeiXinInfo(),""}},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("isomorphic-form-data")},function(e,t){e.exports={json:{Accept:"application/json","Content-Type":"application/json"},"form-data":{Accept:"application/json"}}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(11);class r{constructor(e){this.key=e,this.init()}init(){return o(this,void 0,void 0,function*(){return this.data=JSON.stringify(yield this.dataGetFromRedis()),this.data})}dataGetFromRedis(){return o(this,void 0,void 0,function*(){return yield i.default.get(this.key)})}getData(){return this.data}saveData(e){return o(this,void 0,void 0,function*(){let t=this;return i.default.set(this.key,JSON.stringify(e)).then((e,n)=>(console.log("xxxx",e,n),t.init()))})}getDataAsync(){return o(this,void 0,void 0,function*(){return JSON.parse(yield i.default.get(this.key))})}}t.default=r},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(2),r=n(0),s=r.default.routes.weixin,u=(r.default.weixins,new i.default(s.domain,s.timeout));u.setDomain(s.domain),u.setTimeout(s.timeout),t.all=function(e,t){return o(this,void 0,void 0,function*(){e=e.replace(s.prefix,"");let n=s.routes[e],o=n.url,i=yield u.getData(o,t,n.method).catch(e=>({errcode:111111,errmsg:"自定义错误，访问失败!"+JSON.stringify(e)}));return console.log("访问微信结果为",i),i})}},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});new(n(1).default);const i=function(e,t){return o(this,void 0,void 0,function*(){yield t()})};t.default=function(){return i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let o=[n(33),n(36),n(38),n(41),n(43),n(46)];e.exports=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),i=n(0).default.routes.qbii;console.log(i);const r=new o;r.prefix(i.prefix);const s=n(34),u=n(35);r.post("/news/isFinishNews",s.isFinishNews);const a=i.routes;for(var c in a)r.all(c,u.all);e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(0).default.routes.qbii,s=new i.default(r.domain,r.timeout);s.setDomain(r.domain),s.setTimeout(r.timeout),t.login=function(e,t){let n=new o.default,{userId:i}=e.state.userInfo;return s.getData("/api/user/"+i+"/userId",{},"GET").then(t=>{n.success(t),e.body=n.getValue()})},t.news=function(e,t){let n=new o.default;return console.log("userId:",e.state.userInfo.userId),s.getData("/api/news/getNewsList.html",{},"GET").then(t=>{n.success(t),e.body=n.getValue()})},t.isFinishNews=function(e,t){let n=new o.default;return console.log("userId:",e.state.userInfo.userId),s.getData("/api/news/isFinishNews.html",{},"POST").then(t=>{n.success(t),e.body=n.getValue()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(3),s=n(0).default.routes.qbii,u=new i.default(s.domain,s.timeout);u.setDomain(s.domain),u.setTimeout(s.timeout),t.all=function(e,t){let n=new o.default,{method:i,header:a}=e.request,c=e._matchedRoute,{userId:d}=e.state.userInfo||{userId:""},l=("GET"===i?e.request.query:e.request.body||e.request.fields)||{},f=e.params||{};c=c.replace(s.prefix,"");let h=s.routes[c].url;if(h=r.template(h)(Object.assign({},{userId:d},l,f)),console.log("url:"+h),console.dir(l),h)return u.getData(h,l,i).then(t=>{t&&0===t.returnCode?(n.success(t.data,t.message),e.body=n.getValue()):t?(n.error(t.returnCode,t.message),e.body=n.getValue()):(n.error(500),e.body=n.getValue())}).catch(e=>{console.log(e)});n.error(404),e.body=n.getValue()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),i=n(0).default.routes.good,r=new o;r.prefix(i.prefix);const s=n(37);r.all("/user/userId",s.login),e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(6),s=n(5),u=n(0),a=(n(7),new r.default,new s.default,u.default.routes.good),c=(u.default.SSO,new i.default(a.domain,a.timeout));c.setDomain(a.domain),c.setTimeout(a.timeout),t.login=function(e,t){let n=new o.default;return console.log("userId:",e.state.userInfo.userId),c.getData("/api/news/getNewsList.html",{},"GET").then(t=>{n.success(t),e.body=n.getValue()})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),i=n(0).default.routes.sys,r=new o;r.prefix(i.prefix);const s=n(39);r.all("/account4Client/login",s.login);const u=n(40);r.post("/news/isFinishNews.html",u.isFinishNews),e.exports=r},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(2),s=n(6),u=n(5),a=n(0),c=(n(7),new s.default),d=new u.default,l=a.default.routes.sys,f=(a.default.SSO,new r.default(l.domain,l.timeout));f.setDomain(l.domain),f.setTimeout(l.timeout),t.login=function(e,t){return o(this,void 0,void 0,function*(){new i.default;if(!(yield d.verifyToken(e)))return h(e,t);e.body={responseCode:1e3}})};const h=function(e,t){let n=e.request.body;console.log("?",n);let o=new i.default;return n.st?f.getData("/api/account4Client/login",n,"POST",{},"form-data").then(t=>{if(1e3===t.responseCode){let{userId:n}=t.data,o=c.build(t.data.userId);d.saveTokenInfo(d.getTokenKey(e),o,{userId:n},n),d.setCookie(e,"token",o,n),t.data.userId=123321,e.body=t}else e.body=t}):(o.error(404),void(e.body=o.getValue()))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(0).default.routes.qbii,s=new i.default(r.domain,r.timeout);s.setDomain(r.domain),s.setTimeout(r.timeout),t.isFinishNews=function(e,t){new o.default;return console.log("userId:",e.state.userInfo.userId),s.getData("/api/news/isFinishNews.html",{},"POST").then(t=>{e.body=t})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),i=n(0).default.routes.item,r=new o;r.prefix(i.prefix);const s=n(18),u=n(42);r.get("/user/checkLogin",s.checkLogin);const a=i.routes;for(var c in a)r.all(c,u.all);r.get("/user/login",s.login),r.get("/weixin/info",s.getWXInfo),e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(0),s=n(3),u=r.default.routes.item,a=new i.default(u.domain,u.timeout);a.setDomain(u.domain),a.setTimeout(u.timeout),t.all=function(e,t){let n=new o.default,{method:i,header:r}=e.request,c=e._matchedRoute,{userId:d}=e.state.userInfo||{userId:""},l=("GET"===i?e.request.query:e.request.body||e.request.fields)||{},f=e.params||{};c=c.replace(u.prefix,"");let h=u.routes[c].url;if(h=s.template(h)(Object.assign({},{userId:d},l,f)),console.log("url:"+h),h)return a.getData(h,l,i).then(t=>{t&&1e3===t.responseCode?(n.success(t.data),e.body=n.getValue()):t?(n.error(t.responseCode,t.message),e.body=n.getValue()):(n.error(500),e.body=n.getValue())}).catch(e=>{console.log(e)});n.error(404),e.body=n.getValue()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),i=n(0).default.routes.itemUC,r=new o;r.prefix(i.prefix);const s=n(44),u=n(45);r.get("/user/checkLogin",s.checkLogin);const a=i.routes;for(var c in a)r.all(c,u.all);r.get("/user/login",s.login),r.get("/weixin/info",s.getWXInfo),e.exports=r},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),r=n(2),s=n(13),u=n(5),a=n(6),c=n(10),d=n(0),l=n(8),f=d.default.routes.itemUC,h=new r.default(f.domain,f.timeout);h.setDomain(f.domain),h.setTimeout(f.timeout);const p=new a.default,y=new u.default(!0);let g=new s.default("item");t.loginx=function(e,t){return o(this,void 0,void 0,function*(){e.cookies.set("name","tobi",{signed:!0}),e.body={}})},t.login=function(e,n){return o(this,void 0,void 0,function*(){let n=new i.default,{code:o}=e.query;if(yield y.verifyToken(e))return void(e.body=n.success({}));let r=yield g.userTokenGet(o);if(r&&void 0==r.errcode){let o={},i=yield g.userTokenRefresh(r.refresh_token),s=yield y.getTokenInfoByKey(i.openid,e);if(s)return y.setCookie(e,"token",s.token,s.openid),void(e.body=n.success({}));let u=yield g.userInfoGet(i.openid,i.access_token);o=u;let a=yield t.sendUserInfo(i.openid,i.access_token,o);if(a&&i.openid){let{userId:t}={userId:a},o=p.build(t);y.saveTokenInfo(y.getTokenKey(e),o,Object.assign({openid:i.openid,access_token:i.access_token},{userId:t}),i.openid),yield y.setCookie(e,"token",o,i.openid),e.body=n.success({})}else l.default.error("用户登录失败","",{resultRefresh:i,userInfo:a}),n.success(o),e.body=n.error(1,"获取用户信息失败")}else l.default.error("根据code获取微信用户token失败","",{re:r}),e.body=n.error(1,"获取用户信息失败")})},t.sendUserInfo=((e,t,n)=>o(this,void 0,void 0,function*(){let e=yield h.getData("/user/postWxUser",n,"POST");return!(!e||1e3!==e.responseCode)&&e.data})),t.getWXInfo=function(e,t){return o(this,void 0,void 0,function*(){let t=yield g.infoGet(),n=new i.default;e.body=n.success({appid:t.appid})})},t.getWeiXinInfo=(()=>o(this,void 0,void 0,function*(){let e=yield h.getData("/config/wxConfig",{},"GET");if(e&&1e3===e.responseCode){let t=new c.default;return t.saveWeiXinInfo("item",{appid:e.data.appID,secret:e.data.appSecret,access_token:e.data.accessToken,jsapi_ticket:e.data.jsapiTicket}),!0}return console.log("获取 有好物的微信配置异常...",e),!1})),t.checkLogin=function(e,t){let n=new i.default;e.body=n.success({})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),i=n(2),r=n(0),s=n(3),u=r.default.routes.itemUC,a=new i.default(u.domain,u.timeout);a.setDomain(u.domain),a.setTimeout(u.timeout),t.all=function(e,t){let n=new o.default,{method:i,header:r}=e.request,c=e._matchedRoute,{userId:d}=e.state.userInfo||{userId:""},l=("GET"===i?e.request.query:e.request.body||e.request.fields)||{},f=e.params||{};c=c.replace(u.prefix,"");let h=u.routes[c].url;if(h=s.template(h)(Object.assign({},{userId:d},l,f)),console.log("url:"+h),h)return a.getData(h,l,i).then(t=>{t&&1e3===t.responseCode?(n.success(t.data),e.body=n.getValue()):t?(n.error(t.responseCode,t.message),e.body=n.getValue()):(n.error(10010,"后台无返回值！！！"),e.body=n.getValue())}).catch(e=>{console.log(e)});n.error(404),e.body=n.getValue()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(4),i=n(0).default.routes.weixin,r=new o;r.prefix(i.prefix);const s=n(47);r.post("/info/:channel",s.setConfig),r.get("/js/info/:channel",s.getJsInfo),e.exports=r},function(e,t,n){"use strict";var o=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function u(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,u)}a((o=o.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const i=n(48),r=n(10),s=n(1),u=n(49),a=n(50),c=n(13),d=n(3);let l=new r.default,f=new a.default;t.buildJsTicket=((e,t)=>o(this,void 0,void 0,function*(){}));const h=function(e){let t=Object.assign({},e);delete t.secret_node;let n=JSON.stringify(t);return f.encryptMd5Normal(n,"天下第一!!!!")===e.secret_node};t.setConfig=((e,t)=>o(this,void 0,void 0,function*(){let t=new s.default,n=e.request.body,o=e.params,i=u.default(n,{access_token:"",appid:"",jsapi_ticket:"",secret:"",time:"",secret_node:""}),r=yield new c.default(o.channel).ticketJsGet();if(console.log(r),d.isObject(i)&&o.channel){let n=h(i);if(!0!==n)return e.body=t.error(1,"呵呵，你加密错了！"),!1;let r=new c.default(o.channel),s=yield r.verify(i.access_token);if(s){let n=(yield l.getWeiXinInfo(o.channel))||{};l.saveWeiXinInfo(o.channel,Object.assign(n,i)),e.body=t.success({})}else e.body=t.error(1,"呵呵！你配置错了")}else e.body=t.error(1,i.toString())})),t.getJsInfo=((e,t)=>o(this,void 0,void 0,function*(){let t=new s.default,n=e.query,o=e.params,r=u.default(n,{url:""});if(d.isObject(r)&&o.channel){r.url.substr(0,r.url.indexOf("#"));let s=yield l.getWeiXinInfo(o.channel),u=i.default(s.jsapi_ticket,n.url);console.info(u),e.body=t.success(Object.assign(u,{appid:s.appid}))}else e.body=t.error(1,r.toString())}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(12);var i=function(){return Math.random().toString(36).substr(2,15)},r=function(){return parseInt(((new Date).getTime()/1e3).toString())+""},s=function(e){var t=Object.keys(e),n={};(t=t.sort()).forEach(function(t){n[t.toLowerCase()]=e[t]});var o="";for(var i in n)o+="&"+i+"="+n[i];return o=o.substr(1)};t.default=function(e,t){var n={jsapi_ticket:e,nonceStr:i(),timestamp:r(),url:t},u=s(n),a=o.createHash("sha1");return a.update(u),n.signature=a.digest("hex"),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=[],o={},i=!0;for(let r in t)void 0==e[r]?(n.push(r),i=!1):o[r]=e[r];return i?o:n.join(" 不能为空 ,")+" 不能为空"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(12),i=n(7),r="密码加密啦，呵呵哒，ll|~";class s{constructor(){}encrypt(e,t=!1){let n=e+(!0===t?i().format("YYYY-MM-DD hh:mm:ss:SSS"):"");return o.createHmac("md5",r).update(n).digest("hex")}encryptMd5Normal(e,t){console.log("加密内容:"+e),console.log("加密key:"+t);let n=o.createHmac("md5",t).update(e,"utf8").digest("hex");return console.log("加密成啥样:"+n),n}}t.default=s},function(e,t){e.exports=require("koa-convert")}]);