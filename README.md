## 发布说明
``` bash
# 安装依赖［Node & Npm & Pm2］

curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash

source ~/.bash_profile

nvm install v7.8

nvm use v7.8

# 代码拉取

Git库地址：git@github.com:daxiangaikafei/release.git

将代码放在服务器/root/webApp目录下

# 服务开启

用supervisor node /root/webApp/KoaServer/app.js

# nginx配置
location /qbii {
     alias /root/webApp/QBIndex;
     index index.html index.htm;
}

location /api/ {
     proxy_pass http://127.0.0.1:3000;
}

location /api/qbii/ {
    proxy_pass http://127.0.0.1:3000/api/qbii/;
}
#3 兼容qbii的旧版本配置  为了最小改动
location /api/static/ {
    proxy_pass http://127.0.0.1:3000/qbii/;
}


# https证书安装

# 域名

mqbii.qbao.com

#KoaServer  集群服务开启
cd /root/webApp/KoaServer/
pm2 start process.json

#KoaServer 配置文件说明

#2 sysConfig.prduction.json
{
    "server": {
        "url": "暂无意义",
        "prot": "暂无意义"
    },
    "localServer": {
        "port": 3000 //本服务开启在哪个端口
    },
    "redis": {
        "port": 6379,  //redis 端口
        "host": "192.168.132.40",//redis 地址
        "family": 4  //ip4
    },
    "qiniu": {
        "ACCESS_KEY": "暂无意义",
        "SECRET_KEY": "暂无意义",
        "Bucket_Name": "暂无意义"
    }
}

#2 localConfig.production.json   
{
    "error": "项目错误提示信息"
    "routes": "路由  详见下面路由"
    "ignoreUrls:"不需要校验的路由",
    "redis": {
        "tokenKey": "保存在redis中的key",  
        "expiration": "redis token保存时间" 
    },
    "cookie": {
        "signed": "是否加密",
        "maxAge": "cookie有效时长",
        "secure": "cookie是否只有https请求下才发送", 
        "httpOnly": "是否只有服务器可以取到cookie，默认为true。" //
        "overwrite": "是否允许重写"  // 
    },
    "SSO": "是否只允许一台机器登录"  
}

#2  路由配置
"routes": {  
		//qbii  项目名
        "qbii": {
            "domain": "http://192.168.131.145:10550",//  访问qbii项目的地址  支持http  https
            "prefix": "/api/qbii",   //前缀
            "timeout": 5000,      //连接超时设置
            "routes": {
                
            }
        },
    },

#3  node集群配置
{
  "apps" : [{
    "script"    : "app.js",  //
    "instances" : 4,      //开启进程数
    "exec_mode" : "cluster", //
    "watch"       : true,    //
    "env": {
      "NODE_ENV": "production"
    }
  }]
}

