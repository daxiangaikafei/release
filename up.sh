#!/bin/sh

echo "正在重新加载环境变量"
source ~/.bash_profile

echo "代码获取............."

cd /root/webApp

#开始拉取代码
git pull
#pm2 start process.json

#pm2  start  /root/webApp/KoaServer/app.js
echo "执行结束！"