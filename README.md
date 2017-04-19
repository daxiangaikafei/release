## 发布说明（nodejs 7.5+）
``` bash
# 安装依赖［Node & Npm & Pm2］

curl https://raw.githubusercontent.com/creationix/nvm/v0.13.1/install.sh | bash

source ~/.bash_profile

nvm install v7.8

nvm use v7.8

node install pm2 -g

# 代码拉取

Git库地址：git@github.com:daxiangaikafei/release.git

将代码放在服务器/root/webApp目录下

# 服务开启

pm2 /root/webApp/KoaServer/app/app.js

# nginx配置

location /qbii {
     alias /root/webApp/QBIndex;
     index index.html index.htm;
}

location /api/ {
     proxy_pass http://127.0.0.1:3000;
}

# https证书安装

# 域名

mqbii.qbao.com
