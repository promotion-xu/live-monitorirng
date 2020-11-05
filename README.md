## 原理

服务器安装 streamedian 服务器
客户端通过 video 标签播放

## 后台 起一个服务去解析 rtsp 协议，获取 rtsp 数据包之后通过 ws 传输给前端

https://blog.csdn.net/IT_CREATE/article/details/105625858

## 前端 用 streamedian 接受 ws 实时推过来的媒体流，展示在 video 标签上

参考地址：https://github.com/Streamedian/html5_rtsp_player

## 可用的测试地址

rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov
