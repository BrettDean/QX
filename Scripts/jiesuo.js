//////////////////////////////////////////////
////////////解锁合集，@chxm1023整理/////////////
/////////////////////////////////////////////

[mitm]

hostname= buy.itunes.apple.com, gw.aoscdn.com, apimboom2.globaldelight.net, api-weather.andy.works, www.duitang.com, api.revenuecat.com, spclient.wg.spotify.com, notability.com, user.ftmailbox.cn, *.wallpaperscraft.com, screen-lock.51wnl-cq.com, api.risingfalling.com, api.meiease.cn, pro-status-service-prod.azurewebsites.net, api-sub.meitu.com, server.yoyiapp.com, pan.baidu.com, ap*.intsig.net, mb3admin.com, rich.kuwo.cn, *.kwcdn.kuwo.cn, mobilead.kuwo.cn, musicpay.kuwo.cn, vip1.kuwo.cn, audiobookpay.kuwo.cn, tingshu.kuwo.cn,omp-audiobookpay.lrts.me, iosv2.cjapi.wufan88.com, api-v3.speedtest.cn, *.docer.wps.cn, vipapi.wps.cn, *account.wps.cn, *account.wps.com, app.yiyan.art, biz.caiyunapp.com, api.tidal.com, auth.tidal.com, api.revenuecat.com






[rewrite_local]


# Fileball 解锁高级版
# 下载地址：http://mtw.so/5X5nGK
^https?:\/\/api\.revenuecat\.com\/v\d\/(subscribers/\$RCAnonymousID\%(\w)+|receipts)$ url echo-response text/Json echo-response https://raw.githubusercontent.com/chxm1023/QX/main/Scripts/Fileball.js



# Text Editor 解锁高级功能
# 下载地址：https://t.cn/A6JukiQb
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/TextEditor.js



# Tidal Music 解锁HiFi Plus（美区下载）
# 下载地址：http://t.cn/A662gqIO
^https?:\/\/api\.tidal\.com\/v1\/users\/\d+\/subscription.+ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/TIDALHiFiPlusCrack.js
^https?:\/\/api\.tidal\.com\/v1\/tracks/\d+\/playbackinfopostpaywall.+ url script-analyze-echo-response https://raw.githubusercontent.com/yqc007/QuantumultX/master/TidalHiFiPlusCrack.js



# 彩云天气 解锁VIP权限
# 下载地址：http://mtw.so/6jpmu5
https?:\/\/biz\.caiyunapp\.com\/(membership_rights|v2\/user) url script-response-body  https://raw.githubusercontent.com/hhse/Mul4hong/master/caiyun_svip.js



# 一言 解锁Vip权限
# 下载地址：http://mtw.so/5B2iyp
^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/yiyan.js



# WPS Office 解锁部分功能（国区）
# 下载地址：http://mtw.so/5B2iyf
;^https?:\/\/[a-z-]*account\.wps\.c(n|om)(:\d+|)\/api\/users url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# > WPS解锁稻壳会员
# 下载地址：http://mtw.so/5B2iyf
^https?:\/\/account\.wps\.cn\/api\/v3\/mine\/vips url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPuserCrack.js
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/yqc007/QuantumultX/master/WPSDocerVIPowerCrack.js


# 网速管家 解锁Vip权限
# 下载地址：http://mtw.so/5XqaXq
^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/JB/wsgj.js



# 悟饭 解锁Vip权限
# 下载地址：http://mtw.so/5Io7UC
^http:\/\/iosv2\.cjapi\.wufan88\.com\/user\/.+ url script-response-body https://gjds.vip/QX/pojie/wf.js



# 酷我音乐系列
# 下载地址：http://mtw.so/5tlGDo
#原脚本地址：https://github.com/ddgksf2013/Cuttlefish/raw/master/Rewrite/UnlockVip/Kuwo.conf
# 酷我音乐_AdBlock
^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ url reject
# 酷我音乐_AdBlock
^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
# 酷我音乐_AdBlock
^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/Ad url reject
# 酷我听书_Blockad
https?:\/\/audiobookpay\.kuwo\.cn/a\.p\?op=get_advertright url reject-dict
# 酷我听书_Blockad
https?:\/\/omp-audiobookpay\.lrts\.me\/a\.p\?op=get_advertright url reject-dict
# 酷我听书_PayInfo
https?:\/\/omp-audiobookpay\.lrts\.me\/a\.p$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# 酷我听书_PayInfo
^https?:\/\/audiobookpay\.kuwo\.cn/a\.p url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# 酷我听书_UserInfo
https://tingshu.kuwo.cn/v2/api/user/info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# 酷我听书_UserInfo
https?:\/\/audiobooks\.kuwo\.cn\/v2\/api\/user\/info url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# 酷我听书_UserStatus
https?:\/\/tingshu\.kuwo\.cn\/v2\/api\/pay\/vip\/extraVipStatus url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# 酷我音乐_解锁Vip皮肤设置
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/theme  url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# 酷我音乐_解锁无损下载（先选听无损，再下载无损）
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?newver=\d$ url script-request-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/kuwodl.js
# 酷我音乐_解锁会员
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
# 酷我音乐_解锁NEW会员
^https?:\/\/vip1\.kuwo\.cn\/vip\/enc\/user\/ url script-request-header https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/kuwovip.js
# 酷我音乐_添加已购音乐
^https?:\/\/.*\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=2



# Emby 解锁播放权限
# 下载地址：http://mtw.so/5tw5vk
^https:\/\/mb3admin\.com\/admin\/service(\/registration\/validateDevice|\/appstore\/register|\/registration\/validate|\/registration\/getStatus|\/supporter\/retrievekey) url script-echo-response https://subweb.s3.fr-par.scw.cloud/Script/embycrack.js



# 扫描全能王 解锁黄金会员权限
# 下载地址：http://mtw.so/5tlD88
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/githubdulong/Script/master/CamScanner.js



# 百度网盘 解锁部分SVIP功能
# 下载地址：http://mtw.so/5IhM60
https:\/\/pan\.baidu\.com\/rest\/2\.0\/membership\/user url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/bdcloud.js
# 百度网盘 解锁在线视频倍率/清晰度
https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/BaiduCloud.js



# Fimo-复古胶片相机 解锁Vip权限
# 下载地址：http://mtw.so/5IujwE
^https?:\/\/server\.yoyiapp\.com\/fimo-user\/user$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/fimo.js



# Wink-像修图一样修视频 解锁Vip权限
# 下载地址：http://mtw.so/64mWq1
https?:\/\/api-sub\.meitu\.com\/v\d\/user\/vip_info\.json url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/wink.js



# RNI 解锁高级会员
# 下载地址：http://mtw.so/6rFM99
https://pro-status-service-prod.azurewebsites.net/api/item url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/rf.js



# 图图记账 解锁Vip权限
# 下载地址：http://mtw.so/6jpmAx
https?:\/\/api\.magictouch\.design\/user\/user\/getUserByDevice url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/tutujizhang.js



# Picsart美易图片视频编辑器 解锁Vip权限
# 下载地址：http://mtw.so/5B2iDf
^https?:\/\/api\.meiease\.cn\/shop\/subscription\/validate url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/picsart.js



# 起伏-睡眠/冥想/白噪音 解锁Vip权限
# 下载地址：http://mtw.so/5Iuov2
https?:\/\/api\.risingfalling\.com\/api\/vip\/detail url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/qifu.js



# 布丁锁屏 解锁Vip权限
# 下载地址：http://mtw.so/6rFR6J
https?:\/\/screen-lock\.51wnl-cq\.com\/userApi\/saveUser url script-echo-response https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/budingsuoping.js



# Wallcraft-动态 壁纸解锁永久专业版
# 下载地址：http://t.cn/A6iO7Eht
^https?:\/\/billing-ios\.wallpaperscraft\.com\/verify_receipt\/remove_ads$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/WallCraftFProCrack.js



# FT中文网 解锁Vip权限解
# 下载地址：http://mtw.so/6rFR8b
^https?:\/\/user\.ftmailbox\.cn\/ios-receipt-validation\.php.* url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ftchinese.js



# Symbolab 解锁订阅（需要登录）
# 下载地址：http://mtw.so/5tc7Bk
^https?:\/\/scibug\.com\/appleSubscriptionValidate$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/symbolab.js



# Nicegram 解锁Vip权限
# 下载地址：http://mtw.so/5Iuohu
https?:\/\/restore-access\.indream\.app\/restoreAccess\?id=\d{5,10} url echo-response text/json echo-response https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/nicegram_body.js



# Lake 解锁Vip权限
# 下载地址：http://mtw.so/5WQR0O
https?:\/\/revenuecat\.lakecoloring\.com\/v\d\/(receipts|subscribers) url script-echo-response https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/lakepro.js



# VPN-unlimited 解锁订阅（非国区）
# 下载地址：http://mtw.so/6rFRbJ
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/supervpnpro.js



# 夏时VPN 解锁Vip权限
# 下载地址：http://mtw.so/64MPGN
^https?:\/\/hotspot-unlimited\.com\/addressx2\/ url response-body vip":"1 response-body vip":"0



# Notability 解锁订阅
# 下载地址：http://mtw.so/6bSOy0
https://notability.com/subscriptions url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/notability.js



# Spotify Pro 解锁部分功能，音质不能设置超高
# 下载地址：http://mtw.so/6qFvqC
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/spotify-proto.js



# Scanner Pro 解锁高级Vip权限
# 下载地址：http://mtw.so/6bSOyO
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/scannerpro.js
^https?:\/\/api\.revenuecat\.com\/v\d\/receipts$ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/scannerpro.js



# 堆糖 解锁Vip权限
# 下载地址：http://mtw.so/5Q0BHt
^https?:\/\/www\.duitang\.com\/napi\/vienna\/graphic\/template url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/duitangpro.js



# Not Boring[天气、习惯、计算器、时间] 解锁VIP权限
# 下载地址：http://mtw.so/5WQRny
^https?:\/\/api-weather\.andy\.works\/v\d\/\w{18}$ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/notboring.js



# boom 解锁Vip权限
# 下载地址：http://mtw.so/5WQRnS
^https:\/\/apimboom2\.globaldelight\.net\/itunesreceipt_v2\.php$ url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/boom.js



# 傲软抠图 解锁Vip权限
# 下载地址：http://mtw.so/5twaH6
https?:\/\/gw\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/apowersoft.js
