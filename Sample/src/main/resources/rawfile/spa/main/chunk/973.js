/*! For license information please see 973.js.LICENSE.txt */
"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[973],{"90973":function(e,t,n){n.r(t),n.d(t,{"default":function(){return h}});var i=n(3799),o=n(32461),s=n(16556),a=n(53202),d=n(28673),c=n(66306),m=n(98612),l=n(955),r=n(47831),u=n(98055),p=n(7325),I=n(69714),f=n(65169);function methodTime(e){return new Promise((function(t){var n=Date.now();e((function(){var e=Date.now()-n;t(e)}))}))}function taroAndNativeMethodTime(e,t,n){var i=methodTime(t),o=methodTime(n);return Promise.all([i,o]).then((function(t){return{"taroTime":t[0],"nativeTime":t[1],"excuteLog":"同步调用".concat(e,"() 耗时：Taro ").concat(t[0]," ms, Native ").concat(t[1],"ms")}}))}function jsFetch(e){var t=new Headers;t.append("Content-Type","application/x-www-form-urlencoded,application/json"),t.append("scene","1001"),t.append("appCode","0"),t.append("thirdKey","UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH"),t.append("cateCode",""),t.append("version","2.2"),t.append("wxsysinfo","eyJicmFuZCI6IkhVQVdFSSIsIm1vZGVsIjoiTk9ILUFOMDAiLCJwaXhlbFJhdGlvIjozLjUsInNjcmVlbldpZHRoIjozODQsInNjcmVlbkhlaWdodCI6NzkyLCJ3aW5kb3dXaWR0aCI6Mzg0LCJ3aW5kb3dIZWlnaHQiOjc5Miwic3RhdHVzQmFySGVpZ2h0IjozOSwibGFuZ3VhZ2UiOiJ6aC1IYW5zIiwidmVyc2lvbiI6IjQuMC4xMC4xMCIsInN5c3RlbSI6Ik9wZW5IYXJtb255LTQuMC4xMC4xMCIsInBsYXRmb3JtIjoiT3Blbkhhcm1vbnkiLCJmb250U2l6ZVNldHRpbmciOjE2LCJTREtWZXJzaW9uIjoiMTAiLCJiZW5jaG1hcmtMZXZlbCI6LTEsImFsYnVtQXV0aG9yaXplZCI6ZmFsc2UsImNhbWVyYUF1dGhvcmaserwefsdgesryhcvbiOmZhbHNlLCJtaWNyb3Bob25lQXV0aG9yaXplZCI6ZmFsc2UsIm5vdGlmaWNhdGlvbkF1dGhvcml6ZWQiOnRydWUsInBob25lQ2FsZW5kYXJBdXRob3JpemVkIjpmYWxzZSwiYmx1ZXRvb3RoRW5hYmxlZCI6dHJ1ZSwibG9jYXRpb25FbmFibGVkIjpmYWxzZSwid2lmaUVuYWJsZerteyrbdfdserytrhbdfgdLCJoZWlnaHQiOjc1MywibGVmdCI6MCwicmlnaHQiOjM4NCwidG9wIjozOSwid2lkdGgiOjM4NH0sImxvY2F0aW9uUmVkdWNlZEFjY3VyYWN5Ijp0cnVlLCJ0aGVtZSI6ImxpZ2h0IiwiaG9zdCI6eyJhcHBJZCI6ImNvbS53dWJhLmxpZmVfQkxQYzZzTlIyNFhpSGFmZExXako4UnErbS9rckNxVXdwV3Bqam1jRGZTRkZKMkNDQlNZTHFOUlBiZmdCeXFlYkl2emw0Q0tKZ2ZQbnBjaTN3VE9leElZPSJ9LCJlbmFibGVEZWJ1ZyI6dHJ1ZSwiZGV2aWNlT3JpZW50YXRpb24iOiJxx3J0cmFpdCJ9"),t.append("listName","bj"),t.append("content-type","application/json"),t.append("idxx","B41CF5FA70F3DD19B1D87389CF045C8A1614CBEE645A9174BDDFDF1265A56129"),t.append("Cookie",'PPU="";idxx=sdfergdshrthfbscaswqr;sessionid=sdddgerhfgjntfyjvzserweagergsderty;'),t.append("accuracy",""),t.append("geo",""),t.append("abtest",""),fetch("http://10.253.108.182:9999/api/pressure/feed?app=sdfwef&lon=&lat=&session=sdfwefwefsgrhrjgjtyjkyukyuksdfxsddr&timestamp=170442018xx28&mediauid=dfghrhgfjyukhmgertdfbvdfhrtyrtdfg&devidmd5=IMEI&utm_source=xxun&spm=u-2h6kyt1yf988m1ww31.wx_mjh_feed_zhaogongzuo&brand=HUAWEI&os=OpenHarmony&model=NOH-AN00&city=bj&cate=pugongjg&slot=lm_list_template&pn=1&ps=10&url=https%3A%2F%2Fwxzzmp.xx.com%2Flist.shtml%3F-15%3D20&sign=3ccfb781037ed655120d63c4b5e5c391&debug=1",{"method":"GET","headers":t}).then((function(e){if(!e.ok)throw new Error("Network response was not ok, status: ".concat(e.status));return e.json()})).then((function(t){e()})).catch((function(e){console.error("Error during fetch operation:",e)}))}var h=function(e){(0,a.Z)(Index,e);var t=(0,d.Z)(Index);function Index(){var e;(0,i.Z)(this,Index);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,c.Z)((0,s.Z)(e),"state",{"syncSingleResult":"","requestSingleResult":"","requestConcurrentResult":"","requestHignConcurrentResult":"","syncResult":"","requestByJsResult":""}),(0,c.Z)((0,s.Z)(e),"syncSingleTest",(function(){Promise.all([methodTime((function(e){(0,r._5)(),e()})),methodTime((function(e){native.getWindowInfo(),e()})),methodTime((function(e){(0,u.b)({"success":function success(){e()},"fail":function fail(){e()},"complete":function complete(){}})})),methodTime((function(e){native.getScreenBrightness({"success":function success(){e()},"fail":function fail(){e()}})}))]).then((function(t){var n=[];n.push("同步调用getWindowInfo() 耗时：Taro ".concat(t[0]," ms, Native ").concat(t[1],"ms")),n.push("异步调用getScreenBrightness() 耗时：Taro ".concat(t[2]," ms, Native ").concat(t[3],"ms")),e.setState({"syncSingleResult":n.join("\n")})}))})),(0,c.Z)((0,s.Z)(e),"syncPressureTest",(function(){Promise.all([taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getWindowInfo",(function(e){(0,r._5)(),e()}),(function(e){native.getWindowInfo(),e()})),taroAndNativeMethodTime("getSystemSetting",(function(e){(0,r.FE)(),e()}),(function(e){native.getSystemSetting(),e()})),taroAndNativeMethodTime("getAppBaseInfo",(function(e){(0,r.K3)(),e()}),(function(e){native.getAppBaseInfo(),e()})),taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getAppAuthorizeSetting",(function(e){(0,r.U_)(),e()}),(function(e){native.getAppAuthorizeSetting(),e()})),taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getWindowInfo",(function(e){(0,r._5)(),e()}),(function(e){native.getWindowInfo(),e()})),taroAndNativeMethodTime("getAppBaseInfo",(function(e){(0,r.K3)(),e()}),(function(e){native.getAppBaseInfo(),e()})),taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getAppAuthorizeSetting",(function(e){(0,r.U_)(),e()}),(function(e){native.getAppAuthorizeSetting(),e()})),taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getWindowInfo",(function(e){(0,r._5)(),e()}),(function(e){native.getWindowInfo(),e()})),taroAndNativeMethodTime("getSystemSetting",(function(e){(0,r.FE)(),e()}),(function(e){native.getSystemSetting(),e()})),taroAndNativeMethodTime("getAppBaseInfo",(function(e){(0,r.K3)(),e()}),(function(e){native.getAppBaseInfo(),e()})),taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getAppAuthorizeSetting",(function(e){(0,r.U_)(),e()}),(function(e){native.getAppAuthorizeSetting(),e()})),taroAndNativeMethodTime("getMenuButtonBoundingClientRect",(function(e){(0,p.z)(),e()}),(function(e){native.getMenuButtonBoundingClientRect(),e()})),taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getWindowInfo",(function(e){(0,r._5)(),e()}),(function(e){native.getWindowInfo(),e()})),taroAndNativeMethodTime("getAppBaseInfo",(function(e){(0,r.K3)(),e()}),(function(e){native.getAppBaseInfo(),e()})),taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getAppAuthorizeSetting",(function(e){(0,r.U_)(),e()}),(function(e){native.getAppAuthorizeSetting(),e()})),taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getWindowInfo",(function(e){(0,r._5)(),e()}),(function(e){native.getWindowInfo(),e()})),taroAndNativeMethodTime("getAppBaseInfo",(function(e){(0,r.K3)(),e()}),(function(e){native.getAppBaseInfo(),e()})),taroAndNativeMethodTime("getSystemInfoSync",(function(e){(0,r.xI)(),e()}),(function(e){native.getSystemInfoSync(),e()})),taroAndNativeMethodTime("getAppAuthorizeSetting",(function(e){(0,r.U_)(),e()}),(function(e){native.getAppAuthorizeSetting(),e()}))]).then((function(t){var n=0,i=0,o=[];o.push("同步方法压测：case构建：冷启动场景，28次同步调用"),t.forEach((function(e){var t=e.taroTime,s=e.nativeTime,a=e.excuteLog;n+=t,i+=s,o.push(a)})),o.push("总计调用 ".concat(t.length,"个方法 \n Taro执行总时间 ").concat(n," ms，Native执行总时间 ").concat(i," ms")),e.setState({"syncResult":o.join("\n")})}))})),(0,c.Z)((0,s.Z)(e),"requestSingleTest",(function(){Promise.all([methodTime((function(e){(0,I.WY)({"url":"http://10.253.108.182:9999/api/pressure/tracklog?wxid=wlfkjwoejfjsdfjowie&uid=slkfjowejfkmofwe&loginUid=undefined&trackURL=%7B%22pagePath%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22refPagePath%22%3A%22%2Fpages%2Fprivacy%2Findex%22%2C%22pageParam%22%3A%22stamp%253DAE%2526%252524taroTimestamp%253D1704420185161%22%2C%22pageType%22%3A%22index%22%2C%22pageName%22%3A%22index%22%2C%22pageInfo%22%3A%22%22%2C%22loadTime%22%3A0%2C%22cateCode%22%3A%22%22%2C%22cate%22%3A%22%22%2C%22xxx_id%22%3A%22%22%2C%22bendiicontype%22%3A%22%22%2C%22currInfoId%22%3A%22%22%2C%22currentCateCode%22%3A%22%22%2C%22scene%22%3A1001%2C%22thirdKey%22%3A%22UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH%22%2C%22area%22%3A%221%22%2C%22openId%22%3A%22B41CF5FA70F3DD19B1D87389CF045C8A1614CBEE645A9174BDDFDF1265A56129%22%2C%22unionId%22%3A%22C8684F4C3107AD7AA8B19B343D75DDF989D120311D18F9F41EB2320F6FFA66BE%22%2C%22pagetype%22%3A%22index%22%2C%22page%22%3A%22%22%2C%22qudao%22%3A%22weixin%22%2C%22url%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22referrer%22%3A%22%2Fpages%2Fprivacy%2Findex%22%2C%22version%22%3A%222.12.12%22%2C%22spm%22%3A%22%22%2C%22utm_source%22%3A%22%22%2C%22launch_source%22%3A%22%22%2C%22from_userid%22%3A%22%22%2C%22hasuserid%22%3A0%7D&v=1.0.0&rand_id=0.9838634192853211&thirdKey=UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH&appCode=0&debug=1","method":"GET","data":{},"header":{"Content-Type":"application/x-www-form-urlencoded,application/json","scene":1001,"appCode":"0","thirdKey":"sklfmowejfklsmfoijwfjlksdmgvioejrgkdmv;ojdspjrlmsdsvklnsoidjfpwk","cateCode":"","version":"2.12.12","wxsysinfo":"eyJicmFuZCI6IkhVQVdFSSIsIm1vZGVsIjoiTk9ILUFOMDAiLCJwaXhlbFJhdGlvIjozLjUsInNjcmVlbldpZHRoIjozODQsInNjcmVlbkhlaWdodCI6NzkyLCJ3aW5kb3dXaWR0aCI6Mzg0LCJ3aW5kb3dIZWlnaHQiOjc5Miwic3RhdHVzQmFySGVpZ2h0IjozOSwibGFuZ3VhZ2UiOiJ6aC1IYW5zIiwidmVyc2lvbiI6I23123113161RlbSI6Ik9wZW5IYXJtb255LTQuMC4xMC4xMCIsInBsYXRmb3JtIjoiT3Blbkhhcm1vbnkiLCJmb250U2l6ZVNldHRpbmciOjE2LCJTREtWZXJzaW9uIjoiMTAiLCJiZW5jaG1hcmtMZXZlbCI6LTEsImFsYnVtQXV0aG9yaXplZCI6ZmFsc2UsImNhbWVyYUF1dGhvcml6ZWQiOmZhbHNlLCJsb2NhdGlvbkF1dGhvcml6ZWQisdfwefsdgv3Bob25lQXV0aG9yaXplZCI6ZmFsgwegfwegwegsdgfkF1dGhvcml6ZWQiOnRydWUsInBob25lQ2FsZW5kYXJBdXRob3JpemVkIjpmYWxzZSwiYmx1ZXRvb3RoRW5hYmxlZCI6dHJ1ZSwqwrqwdasdafsdfgdfghergewvcxbcvxcvhdfydid2lmaUVuYWJsZWQiOnRydWUsInNhZmVBcmVhIjp7ImJvdHRvbSI6NzkyLCJoZWlnaHQiOjc1MywibGVmdCI6MCwicmlnaHQiOjM4NCwidG9wIjozOSwid2lkdGgiOjM4NH0sImxvY2F0aW9uUmVkdWNlZEFjY3VyYWN5Ijp0cnVlLCJ0aGVtZSI6ImxpZ2h0IiwisefkwoejfowfwecHBJZCI6ImNvbS53dWJhLmxpZmVfQkxQYzZzTlIyNFhpSGFmZExXako4UnErbS9rckNxVXdwV3Bqam1jRGZTRkZKMkNDQlNZTHFOUlBiZmdCeXFlYkl2emw0Q0tKZ2ZQbnBjaTN3VE9leElZPSJ9LCJlbmFibGVEZWJ1ZyI6dHJ1ZSwiZGV2aWNlT3JpZW50YXRpb24iOiJxx3J0cmFpdCJ9","listName":"bj"},"fail":function fail(t){console.log("request fail **** ",t),e()},"success":function success(t){console.log("request result ***** ",t.data),e()}})})),methodTime((function(e){native.request({"url":"http://10.253.108.182:9999/api/pressure/tracklog?wxid=wlfkjwoejfjsdfjowie&uid=slkfjowejfkmofwe&loginUid=undefined&trackURL=%7B%22pagePath%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22refPagePath%22%3A%22%2Fpages%2Fprivacy%2Findex%22%2C%22pageParam%22%3A%22stamp%253DAE%2526%252524taroTimestamp%253D1704420185161%22%2C%22pageType%22%3A%22index%22%2C%22pageName%22%3A%22index%22%2C%22pageInfo%22%3A%22%22%2C%22loadTime%22%3A0%2C%22cateCode%22%3A%22%22%2C%22cate%22%3A%22%22%2C%22xxx_id%22%3A%22%22%2C%22bendiicontype%22%3A%22%22%2C%22currInfoId%22%3A%22%22%2C%22currentCateCode%22%3A%22%22%2C%22scene%22%3A1001%2C%22thirdKey%22%3A%22UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH%22%2C%22area%22%3A%221%22%2C%22openId%22%3A%22B41CF5FA70F3DD19B1D87389CF045C8A1614CBEE645A9174BDDFDF1265A56129%22%2C%22unionId%22%3A%22C8684F4C3107AD7AA8B19B343D75DDF989D120311D18F9F41EB2320F6FFA66BE%22%2C%22pagetype%22%3A%22index%22%2C%22page%22%3A%22%22%2C%22qudao%22%3A%22weixin%22%2C%22url%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22referrer%22%3A%22%2Fpages%2Fprivacy%2Findex%22%2C%22version%22%3A%222.12.12%22%2C%22spm%22%3A%22%22%2C%22utm_source%22%3A%22%22%2C%22launch_source%22%3A%22%22%2C%22from_userid%22%3A%22%22%2C%22hasuserid%22%3A0%7D&v=1.0.0&rand_id=0.9838634192853211&thirdKey=UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH&appCode=0&debug=1","method":"GET","data":{},"header":{"Content-Type":"application/x-www-form-urlencoded,application/json","scene":1001,"appCode":"0","thirdKey":"sklfmowejfklsmfoijwfjlksdmgvioejrgkdmv;ojdspjrlmsdsvklnsoidjfpwk","cateCode":"","version":"2.12.12","wxsysinfo":"eyJicmFuZCI6IkhVQVdFSSIsIm1vZGVsIjoiTk9ILUFOMDAiLCJwaXhlbFJhdGlvIjozLjUsInNjcmVlbldpZHRoIjozODQsInNjcmVlbkhlaWdodCI6NzkyLCJ3aW5kb3dXaWR0aCI6Mzg0LCJ3aW5kb3dIZWlnaHQiOjc5Miwic3RhdHVzQmFySGVpZ2h0IjozOSwibGFuZ3VhZ2UiOiJ6aC1IYW5zIiwidmVyc2lvbiI6I23123113161RlbSI6Ik9wZW5IYXJtb255LTQuMC4xMC4xMCIsInBsYXRmb3JtIjoiT3Blbkhhcm1vbnkiLCJmb250U2l6ZVNldHRpbmciOjE2LCJTREtWZXJzaW9uIjoiMTAiLCJiZW5jaG1hcmtMZXZlbCI6LTEsImFsYnVtQXV0aG9yaXplZCI6ZmFsc2UsImNhbWVyYUF1dGhvcml6ZWQiOmZhbHNlLCJsb2NhdGlvbkF1dGhvcml6ZWQisdfwefsdgv3Bob25lQXV0aG9yaXplZCI6ZmFsgwegfwegwegsdgfkF1dGhvcml6ZWQiOnRydWUsInBob25lQ2FsZW5kYXJBdXRob3JpemVkIjpmYWxzZSwiYmx1ZXRvb3RoRW5hYmxlZCI6dHJ1ZSwqwrqwdasdafsdfgdfghergewvcxbcvxcvhdfydid2lmaUVuYWJsZWQiOnRydWUsInNhZmVBcmVhIjp7ImJvdHRvbSI6NzkyLCJoZWlnaHQiOjc1MywibGVmdCI6MCwicmlnaHQiOjM4NCwidG9wIjozOSwid2lkdGgiOjM4NH0sImxvY2F0aW9uUmVkdWNlZEFjY3VyYWN5Ijp0cnVlLCJ0aGVtZSI6ImxpZ2h0IiwisefkwoejfowfwecHBJZCI6ImNvbS53dWJhLmxpZmVfQkxQYzZzTlIyNFhpSGFmZExXako4UnErbS9rckNxVXdwV3Bqam1jRGZTRkZKMkNDQlNZTHFOUlBiZmdCeXFlYkl2emw0Q0tKZ2ZQbnBjaTN3VE9leElZPSJ9LCJlbmFibGVEZWJ1ZyI6dHJ1ZSwiZGV2aWNlT3JpZW50YXRpb24iOiJxx3J0cmFpdCJ9","listName":"bj"},"fail":function fail(t){console.log("request fail **** ",t),e()},"success":function success(t){console.log("request result ***** ",t.data),e()}})})),methodTime((function(e){(0,I.WY)({"url":"http://10.253.108.182:9999/api/pressure/feed?app=sdfwef&lon=&lat=&session=sdfwefwefsgrhrjgjtyjkyukyuksdfxsddr&timestamp=170442018xx28&mediauid=dfghrhgfjyukhmgertdfbvdfhrtyrtdfg&devidmd5=IMEI&utm_source=xxun&spm=u-2h6kyt1yf988m1ww31.wx_mjh_feed_zhaogongzuo&brand=HUAWEI&os=OpenHarmony&model=NOH-AN00&city=bj&cate=pugongjg&slot=lm_list_template&pn=1&ps=10&url=https%3A%2F%2Fwxzzmp.xx.com%2Flist.shtml%3F-15%3D20&sign=3ccfb781037ed655120d63c4b5e5c391&debug=1","method":"GET","data":{},"header":{"Content-Type":"application/x-www-form-urlencoded,application/json","scene":1001,"appCode":"0","thirdKey":"UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH","cateCode":"","version":2.2,"wxsysinfo":"eyJicmFuZCI6IkhVQVdFSSIsIm1vZGVsIjoiTk9ILUFOMDAiLCJwaXhlbFJhdGlvIjozLjUsInNjcmVlbldpZHRoIjozODQsInNjcmVlbkhlaWdodCI6NzkyLCJ3aW5kb3dXaWR0aCI6Mzg0LCJ3aW5kb3dIZWlnaHQiOjc5Miwic3RhdHVzQmFySGVpZ2h0IjozOSwibGFuZ3VhZ2UiOiJ6aC1IYW5zIiwidmVyc2lvbiI6IjQuMC4xMC4xMCIsInN5c3RlbSI6Ik9wZW5IYXJtb255LTQuMC4xMC4xMCIsInBsYXRmb3JtIjoiT3Blbkhhcm1vbnkiLCJmb250U2l6ZVNldHRpbmciOjE2LCJTREtWZXJzaW9uIjoiMTAiLCJiZW5jaG1hcmtMZXZlbCI6LTEsImFsYnVtQXV0aG9yaXplZCI6ZmFsc2UsImNhbWVyYUF1dGhvcmaserwefsdgesryhcvbiOmZhbHNlLCJtaWNyb3Bob25lQXV0aG9yaXplZCI6ZmFsc2UsIm5vdGlmaWNhdGlvbkF1dGhvcml6ZWQiOnRydWUsInBob25lQ2FsZW5kYXJBdXRob3JpemVkIjpmYWxzZSwiYmx1ZXRvb3RoRW5hYmxlZCI6dHJ1ZSwibG9jYXRpb25FbmFibGVkIjpmYWxzZSwid2lmaUVuYWJsZerteyrbdfdserytrhbdfgdLCJoZWlnaHQiOjc1MywibGVmdCI6MCwicmlnaHQiOjM4NCwidG9wIjozOSwid2lkdGgiOjM4NH0sImxvY2F0aW9uUmVkdWNlZEFjY3VyYWN5Ijp0cnVlLCJ0aGVtZSI6ImxpZ2h0IiwiaG9zdCI6eyJhcHBJZCI6ImNvbS53dWJhLmxpZmVfQkxQYzZzTlIyNFhpSGFmZExXako4UnErbS9rckNxVXdwV3Bqam1jRGZTRkZKMkNDQlNZTHFOUlBiZmdCeXFlYkl2emw0Q0tKZ2ZQbnBjaTN3VE9leElZPSJ9LCJlbmFibGVEZWJ1ZyI6dHJ1ZSwiZGV2aWNlT3JpZW50YXRpb24iOiJxx3J0cmFpdCJ9","listName":"bj","content-type":"application/json","idxx":"B41CF5FA70F3DD19B1D87389CF045C8A1614CBEE645A9174BDDFDF1265A56129","Cookie":'PPU="";idxx=sdfergdshrthfbscaswqr;sessionid=sdddgerhfgjntfyjvzserweagergsderty;',"accuracy":"","geo":"","abtest":""},"fail":function fail(t){console.log("request fail **** ",t),e()},"success":function success(t){console.log("request result ***** ",JSON.stringify(t.data)),e()}})})),methodTime((function(e){native.request({"url":"http://10.253.108.182:9999/api/pressure/feed?app=sdfwef&lon=&lat=&session=sdfwefwefsgrhrjgjtyjkyukyuksdfxsddr&timestamp=170442018xx28&mediauid=dfghrhgfjyukhmgertdfbvdfhrtyrtdfg&devidmd5=IMEI&utm_source=xxun&spm=u-2h6kyt1yf988m1ww31.wx_mjh_feed_zhaogongzuo&brand=HUAWEI&os=OpenHarmony&model=NOH-AN00&city=bj&cate=pugongjg&slot=lm_list_template&pn=1&ps=10&url=https%3A%2F%2Fwxzzmp.xx.com%2Flist.shtml%3F-15%3D20&sign=3ccfb781037ed655120d63c4b5e5c391&debug=1","method":"GET","data":{},"header":{"Content-Type":"application/x-www-form-urlencoded,application/json","scene":1001,"appCode":"0","thirdKey":"UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH","cateCode":"","version":2.2,"wxsysinfo":"eyJicmFuZCI6IkhVQVdFSSIsIm1vZGVsIjoiTk9ILUFOMDAiLCJwaXhlbFJhdGlvIjozLjUsInNjcmVlbldpZHRoIjozODQsInNjcmVlbkhlaWdodCI6NzkyLCJ3aW5kb3dXaWR0aCI6Mzg0LCJ3aW5kb3dIZWlnaHQiOjc5Miwic3RhdHVzQmFySGVpZ2h0IjozOSwibGFuZ3VhZ2UiOiJ6aC1IYW5zIiwidmVyc2lvbiI6IjQuMC4xMC4xMCIsInN5c3RlbSI6Ik9wZW5IYXJtb255LTQuMC4xMC4xMCIsInBsYXRmb3JtIjoiT3Blbkhhcm1vbnkiLCJmb250U2l6ZVNldHRpbmciOjE2LCJTREtWZXJzaW9uIjoiMTAiLCJiZW5jaG1hcmtMZXZlbCI6LTEsImFsYnVtQXV0aG9yaXplZCI6ZmFsc2UsImNhbWVyYUF1dGhvcmaserwefsdgesryhcvbiOmZhbHNlLCJtaWNyb3Bob25lQXV0aG9yaXplZCI6ZmFsc2UsIm5vdGlmaWNhdGlvbkF1dGhvcml6ZWQiOnRydWUsInBob25lQ2FsZW5kYXJBdXRob3JpemVkIjpmYWxzZSwiYmx1ZXRvb3RoRW5hYmxlZCI6dHJ1ZSwibG9jYXRpb25FbmFibGVkIjpmYWxzZSwid2lmaUVuYWJsZerteyrbdfdserytrhbdfgdLCJoZWlnaHQiOjc1MywibGVmdCI6MCwicmlnaHQiOjM4NCwidG9wIjozOSwid2lkdGgiOjM4NH0sImxvY2F0aW9uUmVkdWNlZEFjY3VyYWN5Ijp0cnVlLCJ0aGVtZSI6ImxpZ2h0IiwiaG9zdCI6eyJhcHBJZCI6ImNvbS53dWJhLmxpZmVfQkxQYzZzTlIyNFhpSGFmZExXako4UnErbS9rckNxVXdwV3Bqam1jRGZTRkZKMkNDQlNZTHFOUlBiZmdCeXFlYkl2emw0Q0tKZ2ZQbnBjaTN3VE9leElZPSJ9LCJlbmFibGVEZWJ1ZyI6dHJ1ZSwiZGV2aWNlT3JpZW50YXRpb24iOiJxx3J0cmFpdCJ9","listName":"bj","content-type":"application/json","idxx":"B41CF5FA70F3DD19B1D87389CF045C8A1614CBEE645A9174BDDFDF1265A56129","Cookie":'PPU="";idxx=sdfergdshrthfbscaswqr;sessionid=sdddgerhfgjntfyjvzserweagergsderty;',"accuracy":"","geo":"","abtest":""},"fail":function fail(t){console.log("request fail **** ",t),e()},"success":function success(t){console.log("request result ***** ",JSON.stringify(t.data)),e()}})}))]).then((function(t){var n=[];n.push("tracklog请求耗时：Taro ".concat(t[0]," ms, Native ").concat(t[1]," ms")),n.push("Feed请求耗时：Taro ".concat(t[2]," ms, Native ").concat(t[3]," ms")),e.setState({"requestSingleResult":n.join("\n")})}))})),(0,c.Z)((0,s.Z)(e),"requestConcurentTest",(function(){for(var t=Date.now(),n=[],i=1;i<=5;i++)n.push(methodTime((function(e){(0,I.WY)({"url":"http://10.253.108.182:9999/api/pressure/tracklog?wxid=wlfkjwoejfjsdfjowie&uid=slkfjowejfkmofwe&loginUid=undefined&trackURL=%7B%22pagePath%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22refPagePath%22%3A%22%2Fpages%2Fprivacy%2Findex%22%2C%22pageParam%22%3A%22stamp%253DAE%2526%252524taroTimestamp%253D1704420185161%22%2C%22pageType%22%3A%22index%22%2C%22pageName%22%3A%22index%22%2C%22pageInfo%22%3A%22%22%2C%22loadTime%22%3A0%2C%22cateCode%22%3A%22%22%2C%22cate%22%3A%22%22%2C%22xxx_id%22%3A%22%22%2C%22bendiicontype%22%3A%22%22%2C%22currInfoId%22%3A%22%22%2C%22currentCateCode%22%3A%22%22%2C%22scene%22%3A1001%2C%22thirdKey%22%3A%22UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH%22%2C%22area%22%3A%221%22%2C%22openId%22%3A%22B41CF5FA70F3DD19B1D87389CF045C8A1614CBEE645A9174BDDFDF1265A56129%22%2C%22unionId%22%3A%22C8684F4C3107AD7AA8B19B343D75DDF989D120311D18F9F41EB2320F6FFA66BE%22%2C%22pagetype%22%3A%22index%22%2C%22page%22%3A%22%22%2C%22qudao%22%3A%22weixin%22%2C%22url%22%3A%22%2Fpages%2Findex%2Findex%22%2C%22referrer%22%3A%22%2Fpages%2Fprivacy%2Findex%22%2C%22version%22%3A%222.12.12%22%2C%22spm%22%3A%22%22%2C%22utm_source%22%3A%22%22%2C%22launch_source%22%3A%22%22%2C%22from_userid%22%3A%22%22%2C%22hasuserid%22%3A0%7D&v=1.0.0&rand_id=0.9838634192853211&thirdKey=UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH&appCode=0&debug=1","method":"GET","data":{},"header":{"Content-Type":"application/x-www-form-urlencoded,application/json","scene":1001,"appCode":"0","thirdKey":"sklfmowejfklsmfoijwfjlksdmgvioejrgkdmv;ojdspjrlmsdsvklnsoidjfpwk","cateCode":"","version":"2.12.12","wxsysinfo":"eyJicmFuZCI6IkhVQVdFSSIsIm1vZGVsIjoiTk9ILUFOMDAiLCJwaXhlbFJhdGlvIjozLjUsInNjcmVlbldpZHRoIjozODQsInNjcmVlbkhlaWdodCI6NzkyLCJ3aW5kb3dXaWR0aCI6Mzg0LCJ3aW5kb3dIZWlnaHQiOjc5Miwic3RhdHVzQmFySGVpZ2h0IjozOSwibGFuZ3VhZ2UiOiJ6aC1IYW5zIiwidmVyc2lvbiI6I23123113161RlbSI6Ik9wZW5IYXJtb255LTQuMC4xMC4xMCIsInBsYXRmb3JtIjoiT3Blbkhhcm1vbnkiLCJmb250U2l6ZVNldHRpbmciOjE2LCJTREtWZXJzaW9uIjoiMTAiLCJiZW5jaG1hcmtMZXZlbCI6LTEsImFsYnVtQXV0aG9yaXplZCI6ZmFsc2UsImNhbWVyYUF1dGhvcml6ZWQiOmZhbHNlLCJsb2NhdGlvbkF1dGhvcml6ZWQisdfwefsdgv3Bob25lQXV0aG9yaXplZCI6ZmFsgwegfwegwegsdgfkF1dGhvcml6ZWQiOnRydWUsInBob25lQ2FsZW5kYXJBdXRob3JpemVkIjpmYWxzZSwiYmx1ZXRvb3RoRW5hYmxlZCI6dHJ1ZSwqwrqwdasdafsdfgdfghergewvcxbcvxcvhdfydid2lmaUVuYWJsZWQiOnRydWUsInNhZmVBcmVhIjp7ImJvdHRvbSI6NzkyLCJoZWlnaHQiOjc1MywibGVmdCI6MCwicmlnaHQiOjM4NCwidG9wIjozOSwid2lkdGgiOjM4NH0sImxvY2F0aW9uUmVkdWNlZEFjY3VyYWN5Ijp0cnVlLCJ0aGVtZSI6ImxpZ2h0IiwisefkwoejfowfwecHBJZCI6ImNvbS53dWJhLmxpZmVfQkxQYzZzTlIyNFhpSGFmZExXako4UnErbS9rckNxVXdwV3Bqam1jRGZTRkZKMkNDQlNZTHFOUlBiZmdCeXFlYkl2emw0Q0tKZ2ZQbnBjaTN3VE9leElZPSJ9LCJlbmFibGVEZWJ1ZyI6dHJ1ZSwiZGV2aWNlT3JpZW50YXRpb24iOiJxx3J0cmFpdCJ9","listName":"bj"},"fail":function fail(t){console.log("request fail **** ",t),e()},"success":function success(t){console.log("request result ***** ",t.data),e()}})})));Promise.all(n).then((function(n){var i=Date.now()-t,o=[],s=0;n.forEach((function(e,t){o.push("请求".concat(t,"的耗时： ").concat(e," ms")),s+=e})),o.push("并发请求时间：".concat(i,"ms，串行请求时间：").concat(s," ms")),o.push("是否为并行执行：".concat(i<s)),e.setState({"requestConcurrentResult":o.join("\n")})}))})),(0,c.Z)((0,s.Z)(e),"requestHignConcurentTest",(function(){for(var t=Date.now(),n=[],i=1;i<=30;i++)n.push(methodTime((function(e){(0,I.WY)({"url":"http://10.253.108.182:9999/api/pressure/feed?app=sdfwef&lon=&lat=&session=sdfwefwefsgrhrjgjtyjkyukyuksdfxsddr&timestamp=170442018xx28&mediauid=dfghrhgfjyukhmgertdfbvdfhrtyrtdfg&devidmd5=IMEI&utm_source=xxun&spm=u-2h6kyt1yf988m1ww31.wx_mjh_feed_zhaogongzuo&brand=HUAWEI&os=OpenHarmony&model=NOH-AN00&city=bj&cate=pugongjg&slot=lm_list_template&pn=1&ps=10&url=https%3A%2F%2Fwxzzmp.xx.com%2Flist.shtml%3F-15%3D20&sign=3ccfb781037ed655120d63c4b5e5c391&debug=1","method":"GET","data":{},"header":{"Content-Type":"application/x-www-form-urlencoded,application/json","scene":1001,"appCode":"0","thirdKey":"UPYIu5EGmjPu2pQqHOYUaMLk0j4m5tgt9aK1tboYlYeixxkotYfsTvbyRSPNNNjH","cateCode":"","version":2.2,"wxsysinfo":"eyJicmFuZCI6IkhVQVdFSSIsIm1vZGVsIjoiTk9ILUFOMDAiLCJwaXhlbFJhdGlvIjozLjUsInNjcmVlbldpZHRoIjozODQsInNjcmVlbkhlaWdodCI6NzkyLCJ3aW5kb3dXaWR0aCI6Mzg0LCJ3aW5kb3dIZWlnaHQiOjc5Miwic3RhdHVzQmFySGVpZ2h0IjozOSwibGFuZ3VhZ2UiOiJ6aC1IYW5zIiwidmVyc2lvbiI6IjQuMC4xMC4xMCIsInN5c3RlbSI6Ik9wZW5IYXJtb255LTQuMC4xMC4xMCIsInBsYXRmb3JtIjoiT3Blbkhhcm1vbnkiLCJmb250U2l6ZVNldHRpbmciOjE2LCJTREtWZXJzaW9uIjoiMTAiLCJiZW5jaG1hcmtMZXZlbCI6LTEsImFsYnVtQXV0aG9yaXplZCI6ZmFsc2UsImNhbWVyYUF1dGhvcmaserwefsdgesryhcvbiOmZhbHNlLCJtaWNyb3Bob25lQXV0aG9yaXplZCI6ZmFsc2UsIm5vdGlmaWNhdGlvbkF1dGhvcml6ZWQiOnRydWUsInBob25lQ2FsZW5kYXJBdXRob3JpemVkIjpmYWxzZSwiYmx1ZXRvb3RoRW5hYmxlZCI6dHJ1ZSwibG9jYXRpb25FbmFibGVkIjpmYWxzZSwid2lmaUVuYWJsZerteyrbdfdserytrhbdfgdLCJoZWlnaHQiOjc1MywibGVmdCI6MCwicmlnaHQiOjM4NCwidG9wIjozOSwid2lkdGgiOjM4NH0sImxvY2F0aW9uUmVkdWNlZEFjY3VyYWN5Ijp0cnVlLCJ0aGVtZSI6ImxpZ2h0IiwiaG9zdCI6eyJhcHBJZCI6ImNvbS53dWJhLmxpZmVfQkxQYzZzTlIyNFhpSGFmZExXako4UnErbS9rckNxVXdwV3Bqam1jRGZTRkZKMkNDQlNZTHFOUlBiZmdCeXFlYkl2emw0Q0tKZ2ZQbnBjaTN3VE9leElZPSJ9LCJlbmFibGVEZWJ1ZyI6dHJ1ZSwiZGV2aWNlT3JpZW50YXRpb24iOiJxx3J0cmFpdCJ9","listName":"bj","content-type":"application/json","idxx":"B41CF5FA70F3DD19B1D87389CF045C8A1614CBEE645A9174BDDFDF1265A56129","Cookie":'PPU="";idxx=sdfergdshrthfbscaswqr;sessionid=sdddgerhfgjntfyjvzserweagergsderty;',"accuracy":"","geo":"","abtest":""},"fail":function fail(t){console.log("request fail **** ",t),e()},"success":function success(t){console.log("request result ***** ",JSON.stringify(t.data)),e()}})})));Promise.all(n).then((function(n){var i=Date.now()-t,o=[],s=0;n.forEach((function(e,t){o.push("请求".concat(t,"的耗时： ").concat(e," ms")),s+=e})),o.push("并发请求时间：".concat(i,"ms，串行请求时间：").concat(s," ms")),o.push("可能线程数：".concat(s/i)),e.setState({"requestHignConcurrentResult":o.join("\n")})}))})),(0,c.Z)((0,s.Z)(e),"requestByJsTest",(function(){for(var t=Date.now(),n=[],i=1;i<=30;i++)n.push(methodTime((function(e){jsFetch(e)})));Promise.all(n).then((function(n){var i=Date.now()-t,o=[],s=0;n.forEach((function(e,t){o.push("请求".concat(t,"的耗时： ").concat(e," ms")),s+=e})),o.push("并发请求时间：".concat(i,"ms，串行请求时间：").concat(s," ms")),o.push("可能线程数：".concat(s/i)),e.setState({"requestByJsResult":o.join("\n")})}))})),e}return(0,o.Z)(Index,[{"key":"render","value":function render(){var e=this.state,t=e.syncSingleResult,n=e.requestSingleResult,i=e.requestConcurrentResult,o=e.requestHignConcurrentResult,s=e.syncResult,a=e.requestByJsResult;return(0,f.jsxs)(l.View,{"className":"api-page","children":[(0,f.jsx)(l.Text,{"className":"performance_result","children":t.split("\n").map((function(e,t){return(0,f.jsxs)(m.Fragment,{"children":[e,(0,f.jsx)("br",{})]},t)}))}),(0,f.jsx)(l.Button,{"onClick":this.syncSingleTest,"children":"单次通信"}),(0,f.jsx)(l.Text,{"className":"performance_result","children":s.split("\n").map((function(e,t){return(0,f.jsxs)(m.Fragment,{"children":[e,(0,f.jsx)("br",{})]},t)}))}),(0,f.jsx)(l.Button,{"onClick":this.syncPressureTest,"children":"压测：同步调用"}),(0,f.jsx)(l.Text,{"className":"performance_result","children":n.split("\n").map((function(e,t){return(0,f.jsxs)(m.Fragment,{"children":[e,(0,f.jsx)("br",{})]},t)}))}),(0,f.jsx)(l.Button,{"onClick":this.requestSingleTest,"children":"压测：网络请求-单个"}),(0,f.jsx)(l.Text,{"className":"performance_result","children":i.split("\n").map((function(e,t){return(0,f.jsxs)(m.Fragment,{"children":[e,(0,f.jsx)("br",{})]},t)}))}),(0,f.jsx)(l.Button,{"onClick":this.requestConcurentTest,"children":"压测：网络请求-测试并发数"}),(0,f.jsx)(l.Text,{"className":"performance_result","children":o.split("\n").map((function(e,t){return(0,f.jsxs)(m.Fragment,{"children":[e,(0,f.jsx)("br",{})]},t)}))}),(0,f.jsx)(l.Button,{"onClick":this.requestHignConcurentTest,"children":"压测：网络请求-高并发测试"}),(0,f.jsx)(l.Text,{"className":"performance_result","children":a.split("\n").map((function(e,t){return(0,f.jsxs)(m.Fragment,{"children":[e,(0,f.jsx)("br",{})]},t)}))}),(0,f.jsx)(l.Button,{"onClick":this.requestByJsTest,"children":"压测：js侧批量网络请求"})]})}}]),Index}(m.Component)},"55001":function(e,t,n){var i=n(98612),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,n){var i,s={},m=null,l=null;for(i in void 0!==n&&(m=""+n),void 0!==t.key&&(m=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,i)&&!c.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{"$$typeof":o,"type":e,"key":m,"ref":l,"props":s,"_owner":d.current}}t.Fragment=s,t.jsx=q,t.jsxs=q},"65169":function(e,t,n){e.exports=n(55001)}}]);