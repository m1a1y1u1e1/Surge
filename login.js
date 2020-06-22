const $ = new Env('isite_checkin')
const denglu= 'request=5806e6c0e0854b265679d6dbace08bf99ad456bf63c59a26a009ae908a49314acf5a7fb038391ebaa7698c3b043a48b9fc23a1defc6cdcf2b37ae49a5fa5ba81b2581f82f3f2ab998855b9ae2cc97ee5aa2ed83054e842dbedeb1ef37df5ca19de805df0d6a19a5bb3fb7090979524a21c9df9ce2724e12588b3bb5da82f1d245ed5f3fa679d5094f3722e7d91a92245181971b010f1e888fcaf9a87e43a6df861be0eadb5a0c19e694c769ad6d4ef336379e99a73ca9776d1b9af8aa443a6536f1e9b53929858bcdc1b8f8f04dac648ff4f012e0faf0fbbbc4eea9f950fd853abf93ca85c059fb3b9b137c7b5ea6807a009ae908a49314a988aefb134fe3e09e5c92c5363c0a5dd787ee5528b5673a3734e4f3834a811107bf9c45cd2c2c65d33b9774d8dc084fe9035db129f79c5a16b1835b2b28a21d26fa464d194521ba2266b7116f2d1f7eab43d2a99d4926e0e9035db129f79c5a1f9b3ab5a297f0981734e4f3834a811107bf9c45cd2c2c65d39eb5686796d2320426017b290322cd2116a0ca5a2acbc293d75b2a8c7484b880777d4fd071f7ebc0e1cfdd96b6be5b42c8327a28ecc229c8b5b7cc583acab79e6d7a451b3217fbb99b98caf2c2c801c5c9ca3b68d8e1b11885fbf122e88357624f22e47f587af0bc4ce3f232369621c'
const Latitude=Number(119.695+Math.random()*(0.0001-0.0000001)+0.0000001).toFixed(7)
const longitude=Number(29.099+Math.random()*(0.0001-0.0000001)+0.0000001).toFixed(7)
!(async () => {
  await sign()
  //await zhidao()
  //await showmsg()
  })()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
 

 function sign() {
  return new Promise((resove) => {
    const url = { url: `https://isite.yindatech.com/phone_1.2.6!applogin.action`, headers: {} }
	  url.headers['Host'] ='isite.yindatech.com'
	  url.headers['Content-Type'] ='application/x-www-form-urlencoded'
	  url.headers['Connection'] ='keep-alive'
	  url.headers['Accept'] ='*/*'
	  url.headers['User-Agent'] = 'ProjectForBD/1.63 (iPhone; iOS 13.5; Scale/2.00)'
	  url.headers['Accept-Language'] = 'zh-Hans-US;q=1'
	  url.headers['Accept-Encoding'] = 'gzip, deflate, br'
	  url.body=(denglu)
    $.post(url, async (err, resp, data) => {
      try {
        const _data = JSON.parse(resp)
        // 处理异常
        if (_data.setCookie==null) {
          throw new Error(`登录app失败`)
        }
        // 组装数据
        
      } catch (e) {
        $.logErr(e, resp)
      } finally {
        resove()
      }
    })
  })
}
function Env(t,s){return new class{constructor(t,s){this.name=t,this.data=null,this.dataFile="box.dat",this.logs=[],this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,s),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient}isLoon(){return"undefined"!=typeof $loon}loaddata(){if(!this.isNode)return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s);if(!e&&!i)return{};{const i=e?t:s;try{return JSON.parse(this.fs.readFileSync(i))}catch{return{}}}}}writedata(){if(this.isNode){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),s=this.path.resolve(process.cwd(),this.dataFile),e=this.fs.existsSync(t),i=!e&&this.fs.existsSync(s),h=JSON.stringify(this.data);e?this.fs.writeFileSync(t,h):i?this.fs.writeFileSync(s,h):this.fs.writeFileSync(t,h)}}getdata(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setdata(t,s){return this.isSurge()||this.isLoon()?$persistentStore.write(t,s):this.isQuanX()?$prefs.setValueForKey(t,s):this.isNode()?(this.data=this.loaddata(),this.data[s]=t,this.writedata(),!0):this.data&&this.data[s]||null}get(t,s=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?$httpClient.get(t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status,s(t,e,i))}):this.isQuanX()?$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:h,body:o}=t;s(null,{status:e,statusCode:i,headers:h,body:o},o)},t=>s(t)):this.isNode()&&(this.got=this.got?this.got:require("got"),this.got(t).then(t=>{const{statusCode:e,statusCode:i,headers:h,body:o}=t;s(null,{status:e,statusCode:i,headers:h,body:o},o)},t=>s(t)))}post(t,s=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),delete t.headers["Content-Length"],this.isSurge()||this.isLoon())$httpClient.post(t,(t,e,i)=>{!t&&e&&(e.body=i,e.statusCode=e.status,s(t,e,i))});else if(this.isQuanX())t.method="POST",$task.fetch(t).then(t=>{const{statusCode:e,statusCode:i,headers:h,body:o}=t;s(null,{status:e,statusCode:i,headers:h,body:o},o)},t=>s(t));else if(this.isNode()){this.got=this.got?this.got:require("got");const{url:e,...i}=t;this.got.post(e,i).then(t=>{const{statusCode:e,statusCode:i,headers:h,body:o}=t;s(null,{status:e,statusCode:i,headers:h,body:o},o)},t=>s(t))}}msg(s=t,e="",i="",h){this.isSurge()||this.isLoon()?$notification.post(s,e,i):this.isQuanX()&&$notify(s,e,i),this.logs.push("","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="),this.logs.push(s),e&&this.logs.push(e),i&&this.logs.push(i)}log(...t){t.length>0?this.logs=[...this.logs,...t]:console.log(this.logs.join(this.logSeparator))}logErr(t,s){const e=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();e?$.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):$.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.message)}wait(t){return new Promise(s=>setTimeout(s,t))}done(t=null){const s=(new Date).getTime(),e=(s-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${e} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,s)}
