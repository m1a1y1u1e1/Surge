#!name=Some useful Scripts
#!desc=合集
#!system=ios
[Script]
#百度贴吧cookie=type=http-request,pattern=^https?:\/\/tieba\.baidu\.com\/?.?,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/tieba/tieba.cookie.js
百度贴吧签到=type=cron,cronexp=0 0 0 * * ?,wake-system=1,time=180,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/tieba/tieba.js
腾讯视频cookie=type=http-request,pattern=^https:\/\/access.video.qq.com\/user\/auth_refresh,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/videoqq/videoqq.cookie.js
腾讯视频签到=type=cron,cronexp=0 2 0 * * ?,wake-system=1,time=180,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/videoqq/videoqq.js
顺丰速运cookie= type=http-request, pattern=^https:\/\/ccsp-egmas.sf-express.com\/cx-app-member\/member\/app\/user\/universalSign,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.cookie.js,requires-body=true
顺丰速运签到=type=cron,cronexp=0 1 0 * * ?,wake-system=1,time=180,script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/sfexpress/sfexpress.js
京东多合一签到 = type=cron,cronexp=5 0 0 * * ?,wake-system=1,timeout=60,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js,script-update-interval=300
获取京东Cookie = type=http-request,pattern=https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js
adguard订阅 = type=http-response,pattern=https://mobile-api.adguard.com/api/1.0/ios_validate_receipt,requires-body=1,max-size=0,script-path=adguard.js
main.js = requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js,type=http-response,pattern=^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig)
#main.js = requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js,type=http-request,pattern=^http://.+/amdc/mobileDispatch
#main.js = requires-body=1,script-path=https://service.2ti.st/QuanX/Script/jd_tb_price/main.js,type=http-response,pattern=^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail
小米运动 = type=cron,cronexp=0 7 20 * * ?,wake-system=1,timeout=3600,script-path=xmSports_new.js
小米运动获取Token = type=http-response,pattern=^https:\/\/account-cn2\.huami\.com\/v2\/client\/login, requires-body=1, max-size=0, script-path=xmSports_new.js
#tbopener.js = type=http-response,pattern=^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi,script-path=https://raw.githubusercontent.com/HotKids/Rules/master/Script/weixin110.js
#百度网盘会员=type=http-response,pattern=^https:\/\/pan\.baidu\.com\/rest\/\d\.\d\/membership\/user requires-body=1,max-size=0,script-path=baidu_yunpan.js
[Map Local]
https://sg-account.wps.com/api/users/268035544/overview data="Wps_Vip.json"
[MITM]
hostname = %APPEND% tieba.baidu.com,access.video.qq.com,ccsp-egmas.sf-express.com,mobile-api.adguard.com,sg-account.wps.com,account-cn2.huami.com,acs.taobao.com,trade-acs.m.taobao.com,api.m.jd.com
