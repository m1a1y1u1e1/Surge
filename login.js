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
 

 function tieba() {
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