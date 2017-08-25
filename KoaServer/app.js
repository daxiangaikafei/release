!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=20)}([function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(3),r=n(6);class s{constructor(){this.fs=n(12),this.env="production",this.configName="localConfig",this.init=(()=>i(this,void 0,void 0,function*(){let e=yield this.getRedisData();e=JSON.parse(this.fs.readFileSync(o.resolve(__dirname,"./localConfig."+this.env+".json")).toString()),r.default.set(this.configName,JSON.stringify(e)),this.initConfig(e),console.log("config 数据初始化成功",e),this.IntervalUpdate(1e4)})),this.initConfig=(e=>{this.config=e,this.error=e.error,this.routes=e.routes,this.ignoreUrls=e.ignoreUrls,this.redis=e.redis,this.cookie=e.cookie,this.SSO=e.SSO,this.weixins=e.weixins,this.gateway=e.gateway}),this.getRedisData=(()=>i(this,void 0,void 0,function*(){let e,t=yield r.default.get(this.configName);return t&&(e=JSON.parse(t)),e})),this.update=(()=>i(this,void 0,void 0,function*(){return yield this.getRedisData()})),this.IntervalUpdate=(e=>{setInterval(()=>i(this,void 0,void 0,function*(){let e=yield this.update();this.initConfig(e),console.log("redis 配置文件已更新")}),e)}),this.setRouterData=((e,t)=>i(this,void 0,void 0,function*(){let n=yield this.getRedisData();n&&(n.routes[e]=t,r.default.set(this.configName,n),this.initConfig(n))}))}}let u=new s;t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(0).default.error;class o{constructor(){this.resultCode=0,this.resultMessage="success",this.result={},this.getValue=this.getValue.bind(this)}success(e,t="success"){return this.resultCode=0,this.resultMessage=t,this.result=e,this.getValue()}error(e=1,t){return this.resultCode=e,this.resultMessage=i[e]||t,this.getValue()}setError(e){return this.resultCode=e.code,this.resultMessage=e.message,this.result=void 0,this.getValue()}getValue(){return{code:this.resultCode,message:this.resultMessage,result:this.result}}}t.default=o},function(e,t){e.exports=require("lodash")},function(e,t){e.exports=require("path")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(15),o=n(3);n(16),process.getuid||(process.getuid=(()=>0));var r=new i.Logger({transports:[new i.transports.Console,new i.transports.DailyRotateFile({filename:o.resolve(process.cwd(),"./log/normal"),datePattern:"_yyyy-MM-ddTHH.log"})]});var s={error:function(e,t,n){return n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),r.error(e,t,n)},info:function(e,t,n){return console.log(process),n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),r.info(e,t,n)},warn:function(e,t,n){return n=Object.assign({},n,{pid:process.pid,uid:process.getuid()}),r.warn(e,t,n)}};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(2);n(27);var o=n(28);const r=n(4);class s{constructor(e,t=5e3){this.headers={charset:"utf-8",client_version:"1.0",channel:"node"},this.domain=e,this.timeout=t}setDomain(e){this.domain=e}setTimeout(e){this.timeout=e}setHeaders(e={client_version:"1.0",channel:"node"}){this.headers=Object.assign({charset:"utf-8",client_version:"1.0",channel:"node"},e)}setVersion(e){this.headers.client_version=e}getData(e,t={},n="GET",o,s="json",u){"GET"===(n=n.toLocaleUpperCase())&&i.size(t)>0&&(e+="?"+d(t)),o=a(s,Object.assign({},this.headers,o));let f=c(s,t);return l(u||this.timeout,fetch(this.domain+e,{method:n,headers:o,body:"GET"===n?void 0:f}).then(t=>(console.log("fetxhUrl:"+e),t.json())).catch(t=>{r.default.error("fetch",JSON.stringify({url:this.domain+e,method:n,headers:o,body:"GET"===n?void 0:f}),t)}))}}const u=n(29),a=function(e,t){return Object.assign({},t,u[e])},c=function(e,t){let n;switch(e){case"json":n=JSON.stringify(t);break;case"form-data":n=new o;for(let e in t)n.append(e,t[e]);break;default:n=t}return n},l=function(e,t){return new Promise((n,i)=>{const o=setTimeout(()=>{i(new Error("promise timeout"))},e);t.then(e=>{clearTimeout(o),n(e)},e=>{clearTimeout(o),i(e)})})},d=function(e,t={":":"=",",":"&"}){let n="";for(var i in e)n+=i+"="+encodeURI(e[i])+"&";return n.substring(-1,n.length-1)};t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=new(n(21))(n(11).redis);t.default=i},function(e,t){e.exports=require("crypto")},function(e,t){e.exports=require("moment")},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});let o=new(n(30).default)("configInfo");class r{constructor(){}getData(){return i(this,void 0,void 0,function*(){return yield o.getDataAsync()})}getWeiXinInfo(e){return i(this,void 0,void 0,function*(){return(yield this.getData()).weixins[e]||{}})}saveWeiXinInfo(e,t){return i(this,void 0,void 0,function*(){let n=(yield this.getData())||{weixins:{}},i=n.weixins&&n.weixins[e]&&n.weixins||{[e]:{}};for(let n in t)i[e][n]=t[n];let r=Object.assign({},n.weixins,i);return n.weixins=r,o.saveData(n)})}}t.default=r},function(e,t){e.exports=require("koa-router")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(3),o=n(12),r=JSON.parse(o.readFileSync(i.resolve(__dirname,"./sysConfig.production.json")).toString());e.exports=r},function(e,t){e.exports=require("fs")},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(6),r=n(14),s=n(1),u=n(8),a=n(0),c=n(4),l=new s.default,d=a.default,f="YYYY-MM-DD hh:mm:ss:SSS",h=(new r.default,d.SSO);class p{constructor(e=h){this.verify=this.verify.bind(this),this.setCookie=this.setCookie.bind(this),this.saveTokenInfo=this.saveTokenInfo.bind(this),this.SSO=e}setCookie(e,t,n,o){return i(this,void 0,void 0,function*(){e.cookies.set(t,!0===this.SSO?o:n,d.cookie)})}saveTokenInfo(e,t,n,i){let r=Object.assign({},n,{token:t,date:u().format(f)}),s=e+":"+(!0===this.SSO?i:t);o.default.set(s,JSON.stringify(r)),o.default.expire(s,d.redis.expiration)}getTokenInfo(e){return o.default.get(e)}_verifyToken(e){return i(this,void 0,void 0,function*(){let t=yield this.getTokenInfo(e);return t&&JSON.parse(t)||t})}getTokenInfoByKey(e,t){return i(this,void 0,void 0,function*(){let n=yield this.getTokenInfo(this.getTokenKey(t)+":"+e);return JSON.parse(n)||!1})}getTokenKey(e){let t=e.originalUrl.split("/")[2];return d.routes[t]&&d.routes[t].tokenKey||d.routes.qbii.tokenKey}getToken(e){let t=e.cookies.get("token")||e.request.headers.token;if(t)return this.getTokenKey(e)+":"+t}verifyToken(e){return i(this,void 0,void 0,function*(){let t=this.getToken(e);return!!(yield this._verifyToken(t))})}checkIgnoreUrl(e){let t=!1,n=d.ignoreUrls;for(let i in n){let o=i.indexOf("/:");if(o>=0){if(i.substring(0,o)===e.substring(0,o)){t=n[i];break}}else if(i===e){t=n[i];break}}return t}verify(e,t){return i(this,void 0,void 0,function*(){let{url:n}=e;if(n=n.split("?")[0],this.checkIgnoreUrl(n))return t();let i=this.getToken(e);if(i){let n=yield this._verifyToken(i);return n?(e.state.userInfo=n,t()):(l.error(200,"登录过期"),e.body=l.getValue(),void c.default.error("匹配失败","",{cookie:e.cookies.get("token")}))}return l.error(200,"未登陆"),c.default.error("未登录信息","",{cookie:e.cookies.get("token")}),void(e.body=l.getValue())})}}t.default=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(7),o=n(8),r="啊哈你说这个是啥，其实就是Hmac的message，干啥用的？防止你硬解的。";class s{constructor(){}build(e){return i.createHmac("md5",r).update(e+o().format("YYYY-MM-DD hh:mm:ss:SSS")).digest("hex")}decipher(e){}}t.default=s},function(e,t){e.exports=require("winston")},function(e,t){e.exports=require("winston-daily-rotate-file")},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(5),s=n(18),u=n(13),a=n(14),c=n(9),l=n(0),d=n(4),f=l.default.routes.item,h=new r.default(f.domain,f.timeout);h.setDomain(f.domain),h.setTimeout(f.timeout);const p=new a.default,y=new u.default(!0);let g=new s.default("item");t.loginx=function(e,t){return i(this,void 0,void 0,function*(){e.cookies.set("name","tobi",{signed:!0}),e.body={}})},t.login=function(e,n){return i(this,void 0,void 0,function*(){let n=new o.default,{code:i}=e.query;if(yield y.verifyToken(e))return void(e.body=n.success({}));let r=yield g.userTokenGet(i);if(r&&void 0==r.errcode){let i={},o=yield g.userTokenRefresh(r.refresh_token),s=yield y.getTokenInfoByKey(o.openid,e);if(s)return y.setCookie(e,"token",s.token,s.openid),void(e.body=n.success({}));let u=yield g.userInfoGet(o.openid,o.access_token);i=u;let a=yield t.sendUserInfo(o.openid,o.access_token,i);if(a&&o.openid){let{userId:t}={userId:a},i=p.build(t);y.saveTokenInfo(y.getTokenKey(e),i,Object.assign({openid:o.openid,access_token:o.access_token},{userId:t}),o.openid),yield y.setCookie(e,"token",i,o.openid),e.body=n.success({token:i})}else d.default.error("用户登录失败","",{resultRefresh:o,userInfo:a}),n.success(i),e.body=n.error(1,"获取用户信息失败")}else d.default.error("根据code获取微信用户token失败","",{re:r}),e.body=n.error(1,"获取用户信息失败")})},t.sendUserInfo=((e,t,n)=>i(this,void 0,void 0,function*(){let e=yield h.getData("/user/postWxUser",n,"POST");return!(!e||1e3!==e.responseCode)&&e.data})),t.getWXInfo=function(e,t){return i(this,void 0,void 0,function*(){let t=yield g.infoGet(),n=new o.default;e.body=n.success({appid:t.appid})})},t.getWeiXinInfo=(()=>i(this,void 0,void 0,function*(){let e=yield h.getData("/config/wxConfig",{},"GET");if(e&&1e3===e.responseCode){let t=new c.default;return t.saveWeiXinInfo("item",{appid:e.data.appID,secret:e.data.appSecret,access_token:e.data.accessToken,jsapi_ticket:e.data.jsapiTicket}),!0}return console.log("获取 有好物的微信配置异常...",e),!1})),t.checkLogin=function(e,t){let n=new o.default;e.body=n.success({})}},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(0),r=n(9),s=n(31);o.default.weixins;let u=new r.default;class a{constructor(e){this.key=e}getParams(e,t){return i(this,void 0,void 0,function*(){let n={},{key:i}=this,o=yield u.getWeiXinInfo(i);return e.map(e=>{n[e]=o[e]}),Object.assign({},n,t)})}infoGet(){return i(this,void 0,void 0,function*(){let{key:e}=this;return yield u.getWeiXinInfo(e)})}userTokenGet(e){return i(this,void 0,void 0,function*(){return s.all("/api/weixin/user/token",yield this.getParams(["appid","secret"],{code:e,grant_type:"authorization_code"}))})}userTokenRefresh(e){return i(this,void 0,void 0,function*(){return s.all("/api/weixin/user/tokenRefresh",yield this.getParams(["appid"],{refresh_token:e,grant_type:"refresh_token"}))})}userInfoGet(e,t){return i(this,void 0,void 0,function*(){return s.all("/api/weixin/user/info",yield this.getParams([],{openid:e,access_token:t,lang:"zh_CN"}))})}userInfoGetByGuanZhu(e){return i(this,void 0,void 0,function*(){return s.all("/api/weixin/user/info/guanzhu",yield this.getParams(["access_token"],{openid:e,lang:"zh_CN"}))})}configTokenGet(){return i(this,void 0,void 0,function*(){return s.all("/api/weixin/config/token",yield this.getParams(["appid","secret"],{grant_type:"client_credential"}))})}ticketJsGet(){return i(this,void 0,void 0,function*(){return s.all("/api/weixin/config/jsTicket",yield this.getParams(["access_token"],{type:"jsapi"}))})}menuGet(e){return i(this,void 0,void 0,function*(){return s.all("/api/weixin/menu/get",yield this.getParams([],{access_token:e}))})}verify(e){return i(this,void 0,void 0,function*(){return void 0==(yield this.menuGet(e)).errcode})}}t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class i{constructor(e){this.code=1,this.message="",this.whoami=e,this.getValue=this.getValue.bind(this)}set(e,t){return this.code=e,this.message=t,this.getValue()}getValue(){return{code:this.code,message:this.message,whoami:this.whoami}}}t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(0).default.init().then(()=>{let e=n(22);console.log("初始化App"),e()})},function(e,t){e.exports=require("ioredis")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(2),o=n(23),r=n(24),s=n(1),u=n(13),a=n(25),c=n(4),l=n(26),d=n(32),f=n(11),h=n(33),p=n(44);let y=()=>{let e=new s.default,t=new u.default,n=new o;n.keys=["im a newer secret","你说是啥 就是啥，呵呵哒"],n.use(a.default()),n.use(d.default()),n.use(p(r({onerror:function(e,t){t.throw("body parse error",422)}}))),n.context.onerror=function(t){null!=t&&(e.error(500,""),this.res.end(JSON.stringify(e.getValue())))},n.use((t,n)=>n().then(()=>{200!==t.status&&(e.error(t.status,""),t.body=e.getValue(),c.default.error("normal","",t.status))}).catch(n=>{console.error(n),e.error(1e3,"超时"),t.body=e.getValue(),c.default.error("error","",n)})),n.on("error",e=>c.default.error("server error",e)),n.use(t.verify),i.each(h,function(e,t){n.use(e.routes()),n.use(e.allowedMethods())}),console.log(f.localServer.port),n.listen(f.localServer.port),l.default()};e.exports=y},function(e,t){e.exports=require("koa")},function(e,t){e.exports=require("koa-bodyparser")},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(15),r=n(3);n(16);var s=new o.Logger({transports:[new o.transports.DailyRotateFile({filename:r.resolve(process.cwd(),"./log/request"),datePattern:"_yyyy-MM-ddTHH.log"})]});const u=(e=200,t="info")=>{switch(parseInt((e/100).toString(),10)){case 5:return"error";case 4:return"warn";default:return t}};t.default=function(){return function(e,t){return i(this,void 0,void 0,function*(){let{request:n}=e,i="",o=Date.now();try{yield t(),i=e.state.useInfo&&e.state.useInfo.userId||""}catch(t){e.status=500,s.error(t.name,"...",{pid:process.pid,uid:process.getuid(),userId:i,error:Object.assign({},t),time:Date.now()-o+"ms"}),e.throw(t.Message,500),console.error(t)}finally{s[u(e.status)]("request","....",{pid:process.pid,uid:process.getuid(),userId:i,req:{header:e.request.header,ip:n.ip,body:n.body,originalUrl:n.originalUrl,method:n.method},time:Date.now()-o+"ms",res:{body:e.response.body}})}})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(17);t.default=function(){return i.getWeiXinInfo(),""}},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("isomorphic-form-data")},function(e,t){e.exports={json:{Accept:"application/json","Content-Type":"application/json"},"form-data":{Accept:"application/json"}}},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(6);class r{constructor(e){this.key=e,this.init()}init(){return i(this,void 0,void 0,function*(){return this.data=JSON.stringify(yield this.dataGetFromRedis()),this.data})}dataGetFromRedis(){return i(this,void 0,void 0,function*(){return yield o.default.get(this.key)})}getData(){return this.data}saveData(e){return i(this,void 0,void 0,function*(){let t=this;return o.default.set(this.key,JSON.stringify(e)).then((e,n)=>(console.log("xxxx",e,n),t.init()))})}getDataAsync(){return i(this,void 0,void 0,function*(){return JSON.parse(yield o.default.get(this.key))})}}t.default=r},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),r=n(0),s=r.default.routes.weixin,u=(r.default.weixins,new o.default(s.domain,s.timeout));u.setDomain(s.domain),u.setTimeout(s.timeout),t.all=function(e,t){return i(this,void 0,void 0,function*(){e=e.replace(s.prefix,"");let n=s.routes[e],i=n.url,o=yield u.getData(i,t,n.method).catch(e=>({errcode:111111,errmsg:"自定义错误，访问失败!"+JSON.stringify(e)}));return console.log("访问微信结果为",o),o})}},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});new(n(1).default);const o=function(e,t){return i(this,void 0,void 0,function*(){yield t()})};t.default=function(){return o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=n(34),o=n(36),r=[...n(41).default,i,o];e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(10),o=n(0).default.routes.item,r=new i;r.prefix(o.prefix);const s=n(17);r.get("/user/checkLogin",s.checkLogin),r.get("/user/login",s.login),r.get("/weixin/info",s.getWXInfo);const u=n(35);r.post("/wx/qiniu/upload",u.wxUpImage),e.exports=r},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1),r=n(5),s=n(0).default.routes.item.routes[2],u=new r.default(s.domain,s.timeout);console.log("domai",JSON.stringify(s)),t.wxUpImage=((e,t)=>i(this,void 0,void 0,function*(){let t=new o.default,n=e.request.body;n.prefix=e.state.userInfo.userId;let i=yield u.getData("/wx/qiniu/upload",n,"POST");return i&&1e3===i.responseCode?e.body=t.success(i.data):e.body=t.error(1,i.message||"错误，请稍后的重试！"),!1}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(10),o=n(0).default.routes.weixin,r=new i;r.prefix(o.prefix);const s=n(37);r.post("/info/:channel",s.setConfig),r.get("/js/info/:channel",s.getJsInfo),e.exports=r},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(38),r=n(9),s=n(1),u=n(39),a=n(40),c=n(18),l=n(2);let d=new r.default,f=new a.default;t.buildJsTicket=((e,t)=>i(this,void 0,void 0,function*(){}));const h=function(e){let t=Object.assign({},e);delete t.secret_node;let n=JSON.stringify(t);return f.encryptMd5Normal(n,"天下第一!!!!")===e.secret_node};t.setConfig=((e,t)=>i(this,void 0,void 0,function*(){let t=new s.default,n=e.request.body,i=e.params,o=u.default(n,{access_token:"",appid:"",jsapi_ticket:"",secret:"",time:"",secret_node:""}),r=yield new c.default(i.channel).ticketJsGet();if(console.log(r),l.isObject(o)&&i.channel){let n=h(o);if(!0!==n)return e.body=t.error(1,"呵呵，你加密错了！"),!1;let r=new c.default(i.channel),s=yield r.verify(o.access_token);if(s){let n=(yield d.getWeiXinInfo(i.channel))||{};d.saveWeiXinInfo(i.channel,Object.assign(n,o)),e.body=t.success({})}else e.body=t.error(1,"呵呵！你配置错了")}else e.body=t.error(1,o.toString())})),t.getJsInfo=((e,t)=>i(this,void 0,void 0,function*(){let t=new s.default,n=e.query,i=e.params,r=u.default(n,{url:""});if(l.isObject(r)&&i.channel){r.url.substr(0,r.url.indexOf("#"));let s=yield d.getWeiXinInfo(i.channel),u=o.default(s.jsapi_ticket,n.url);console.info(u),e.body=t.success(Object.assign(u,{appid:s.appid}))}else e.body=t.error(1,r.toString())}))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(7);var o=function(){return Math.random().toString(36).substr(2,15)},r=function(){return parseInt(((new Date).getTime()/1e3).toString())+""},s=function(e){var t=Object.keys(e),n={};(t=t.sort()).forEach(function(t){n[t.toLowerCase()]=e[t]});var i="";for(var o in n)i+="&"+o+"="+n[o];return i=i.substr(1)};t.default=function(e,t){var n={jsapi_ticket:e,nonceStr:o(),timestamp:r(),url:t},u=s(n),a=i.createHash("sha1");return a.update(u),n.signature=a.digest("hex"),n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=[],i={},o=!0;for(let r in t)void 0==e[r]?(n.push(r),o=!1):i[r]=e[r];return o?i:n.join(" 不能为空 ,")+" 不能为空"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(7),o=n(8),r="密码加密啦，呵呵哒，ll|~";class s{constructor(){}encrypt(e,t=!1){let n=e+(!0===t?o().format("YYYY-MM-DD hh:mm:ss:SSS"):"");return i.createHmac("md5",r).update(n).digest("hex")}encryptMd5Normal(e,t){console.log("加密内容:"+e),console.log("加密key:"+t);let n=i.createHmac("md5",t).update(e,"utf8").digest("hex");return console.log("加密成啥样:"+n),n}}t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(42);t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const i=n(1),o=n(0),r=n(10),s=n(2),u=n(43),a=new(n(19).default)("common/all"),c=o.default.routes,l=e=>{let t=new r,{routes:n,prefix:i,domain:o,timeout:s,rightTemplate:u}=e;t.prefix(i);for(var a in n){let{method:e}=n[a];console.log(".......",o+a),e=e||"all";let r=d.createFetch(i,o,s,n,u);t[e.toLocaleLowerCase()](a,r)}return t},d=(()=>{let e={};return{createFetch:(t,n,o,r,s={code:{key:"responseCode",value:1e3},result:{key:"data"},message:{key:"message"}})=>{if(e[n])return e[n];{let c=new u.default(t,n,o,r),{code:l,result:d,message:f}=s;return e[n]=function(e,t){let n=new i.default;return c.normal(e,t).then(t=>{t&&t[l.key]&&t[l.key]===l.value?e.body=n.success(t[d.key]):e.body=n.error(t[l.key],t[f.key])}).catch(t=>{a.set(1,t.message),e.body=n.setError(a)})},e[n]}}}})();t.default=function(){let e=[];for(var t in c){let{routes:n}=c[t];s.isArray(n)?n.forEach(n=>{e.push(l(Object.assign({},c[t],n)))}):e.push(l(c[t]))}return e}()},function(e,t,n){"use strict";var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function u(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,u)}a((i=i.apply(e,t||[])).next())})};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2),r=n(5),s=new(n(19).default)("library/help/all");class u{constructor(e,t,n=5e3,i){this.config={prefix:e,domain:t,timeout:n,routes:i},this.fetch=new r.default(t,n)}normal(e,t){return i(this,void 0,void 0,function*(){let{method:t,header:n}=e.request,i=e._matchedRoute,{userId:r}=e.state.userInfo||{userId:""},u=e.params||{},a=("GET"===t?e.request.query:e.request.body||e.request.fields)||{};i=i.replace(this.config.prefix,"");let c=this.config.routes[i].url;if(c=o.template(c)(Object.assign({},{userId:r},a,u)),console.log("url:"+c),console.dir(a),c)return this.fetch.getData(c,a,t);throw s.set(404,"不见了呢")})}}t.default=u},function(e,t){e.exports=require("koa-convert")}]);