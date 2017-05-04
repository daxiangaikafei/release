#!/bin/sh

echo "代码保存到远程git............."

cd /root/webApp

#开始拉取代码
git add .
git commit -m"运维保存数据"
git pull
git push

echo "正在重启服务.........."
#nginx -s reload

#pm2 kill
cd /root/webApp/KoaServer/
pm2 restart process.json

#pm2 start process.json

#pm2  start  /root/webApp/KoaServer/app.js
echo "执行结束！"