/*
 * @Author: LXK9301
 * @Date: 2020-10-21 17:04:04
 * @Last Modified by: LXK9301
 * @Last Modified time: 2020-11-05 00:35:04
 */
/*
手机尚学季脚本 https://jdsharedresourcescdn.azureedge.net/jdresource/jd_xtg.js
手机尚学季活动地址：https://pro.m.jd.com/mall/active/23yuC2muhsBnv2515p8xLxC3D8Lv/index.html
活动时间：2021年3月15日 00:00:00-2021年3月19日 23:59:59
京豆先到先得！！！！！！！！！！！
出现任务做完没领取的情况，就再运行一次脚本
能做完所有的任务,多账号脚本会自己内部互助
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#手机尚学季
0 0 0 * * * https://jdsharedresourcescdn.azureedge.net/jdresource/jd_xtg.js, tag=手机尚学季, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

================Loon==============
[Script]
cron "0 0 0 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_xtg.js,tag=手机尚学季

===============Surge=================
手机尚学季 = type=cron,cronexp="0 0 0 * * *",wake-system=1,timeout=3600,script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_xtg.js

============小火箭=========
手机尚学季 = type=cron,script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_xtg.js, cronexpr="0 0 0 * * *", timeout=3600, enable=true
 */
const $ = new Env("手机尚学季");
const activeEndTime = "2021/03/19 23:59:59+08:00"; //活动结束时间
const notify = $.isNode() ? require("./sendNotify") : "";
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
!function(n){"use strict";function r(n,r){var t=(65535&n)+(65535&r);return(n>>16)+(r>>16)+(t>>16)<<16|65535&t}function t(n,r){return n<<r|n>>>32-r}function u(n,u,e,o,c,f){return r(t(r(r(u,n),r(o,f)),c),e)}function e(n,r,t,e,o,c,f){return u(r&t|~r&e,n,r,o,c,f)}function o(n,r,t,e,o,c,f){return u(r&e|t&~e,n,r,o,c,f)}function c(n,r,t,e,o,c,f){return u(r^t^e,n,r,o,c,f)}function f(n,r,t,e,o,c,f){return u(t^(r|~e),n,r,o,c,f)}function i(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;var u,i,a,h,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;for(u=0;u<n.length;u+=16)i=l,a=d,h=v,g=C,d=f(d=f(d=f(d=f(d=c(d=c(d=c(d=c(d=o(d=o(d=o(d=o(d=e(d=e(d=e(d=e(d,v=e(v,C=e(C,l=e(l,d,v,C,n[u],7,-680876936),d,v,n[u+1],12,-389564586),l,d,n[u+2],17,606105819),C,l,n[u+3],22,-1044525330),v=e(v,C=e(C,l=e(l,d,v,C,n[u+4],7,-176418897),d,v,n[u+5],12,1200080426),l,d,n[u+6],17,-1473231341),C,l,n[u+7],22,-45705983),v=e(v,C=e(C,l=e(l,d,v,C,n[u+8],7,1770035416),d,v,n[u+9],12,-1958414417),l,d,n[u+10],17,-42063),C,l,n[u+11],22,-1990404162),v=e(v,C=e(C,l=e(l,d,v,C,n[u+12],7,1804603682),d,v,n[u+13],12,-40341101),l,d,n[u+14],17,-1502002290),C,l,n[u+15],22,1236535329),v=o(v,C=o(C,l=o(l,d,v,C,n[u+1],5,-165796510),d,v,n[u+6],9,-1069501632),l,d,n[u+11],14,643717713),C,l,n[u],20,-373897302),v=o(v,C=o(C,l=o(l,d,v,C,n[u+5],5,-701558691),d,v,n[u+10],9,38016083),l,d,n[u+15],14,-660478335),C,l,n[u+4],20,-405537848),v=o(v,C=o(C,l=o(l,d,v,C,n[u+9],5,568446438),d,v,n[u+14],9,-1019803690),l,d,n[u+3],14,-187363961),C,l,n[u+8],20,1163531501),v=o(v,C=o(C,l=o(l,d,v,C,n[u+13],5,-1444681467),d,v,n[u+2],9,-51403784),l,d,n[u+7],14,1735328473),C,l,n[u+12],20,-1926607734),v=c(v,C=c(C,l=c(l,d,v,C,n[u+5],4,-378558),d,v,n[u+8],11,-2022574463),l,d,n[u+11],16,1839030562),C,l,n[u+14],23,-35309556),v=c(v,C=c(C,l=c(l,d,v,C,n[u+1],4,-1530992060),d,v,n[u+4],11,1272893353),l,d,n[u+7],16,-155497632),C,l,n[u+10],23,-1094730640),v=c(v,C=c(C,l=c(l,d,v,C,n[u+13],4,681279174),d,v,n[u],11,-358537222),l,d,n[u+3],16,-722521979),C,l,n[u+6],23,76029189),v=c(v,C=c(C,l=c(l,d,v,C,n[u+9],4,-640364487),d,v,n[u+12],11,-421815835),l,d,n[u+15],16,530742520),C,l,n[u+2],23,-995338651),v=f(v,C=f(C,l=f(l,d,v,C,n[u],6,-198630844),d,v,n[u+7],10,1126891415),l,d,n[u+14],15,-1416354905),C,l,n[u+5],21,-57434055),v=f(v,C=f(C,l=f(l,d,v,C,n[u+12],6,1700485571),d,v,n[u+3],10,-1894986606),l,d,n[u+10],15,-1051523),C,l,n[u+1],21,-2054922799),v=f(v,C=f(C,l=f(l,d,v,C,n[u+8],6,1873313359),d,v,n[u+15],10,-30611744),l,d,n[u+6],15,-1560198380),C,l,n[u+13],21,1309151649),v=f(v,C=f(C,l=f(l,d,v,C,n[u+4],6,-145523070),d,v,n[u+11],10,-1120210379),l,d,n[u+2],15,718787259),C,l,n[u+9],21,-343485551),l=r(l,i),d=r(d,a),v=r(v,h),C=r(C,g);return[l,d,v,C]}function a(n){var r,t="",u=32*n.length;for(r=0;r<u;r+=8)t+=String.fromCharCode(n[r>>5]>>>r%32&255);return t}function h(n){var r,t=[];for(t[(n.length>>2)-1]=void 0,r=0;r<t.length;r+=1)t[r]=0;var u=8*n.length;for(r=0;r<u;r+=8)t[r>>5]|=(255&n.charCodeAt(r/8))<<r%32;return t}function g(n){return a(i(h(n),8*n.length))}function l(n,r){var t,u,e=h(n),o=[],c=[];for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),t=0;t<16;t+=1)o[t]=909522486^e[t],c[t]=1549556828^e[t];return u=i(o.concat(h(r)),512+8*r.length),a(i(c.concat(u),640))}function d(n){var r,t,u="";for(t=0;t<n.length;t+=1)r=n.charCodeAt(t),u+="0123456789abcdef".charAt(r>>>4&15)+"0123456789abcdef".charAt(15&r);return u}function v(n){return unescape(encodeURIComponent(n))}function C(n){return g(v(n))}function A(n){return d(C(n))}function m(n,r){return l(v(n),v(r))}function s(n,r){return d(m(n,r))}function b(n,r,t){return r?t?m(r,n):s(r,n):t?C(n):A(n)}$.md5=b}();
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
    cookie = "";
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else {
  cookiesArr = [
    $.getdata("CookieJD"),
    $.getdata("CookieJD2"),
    ...jsonParse($.getdata("CookiesJD") || "[]").map((item) => item.cookie),
  ].filter((item) => !!item);
}
const starID = ["sanxing", "meizu", "xiaomi", "oppo", "vivo", "sony"];
const shareID = [
  "39440572-136a-4b38-bc13-f767d07406fb",
  "796a8a5e-ef50-4501-a6a6-b7717de022ae",
  "2bc87513-9344-453c-8733-a106bcbbb6a7",
  "f18b535a-d9c0-48c7-9a15-16f674065b64",
  "a778e308-858d-4039-a4f0-15aafbb83181",
  "45f97217-e150-4dc9-baed-054a4e07ae02",
];
$.allShareId = {};
const JD_API_HOST = "https://urvsaggpt.m.jd.com/guardianstar";
!(async () => {
  if (!cookiesArr[0]) {
    $.msg(
        $.name,
        "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取",
        "https://bean.m.jd.com/bean/signIndex.action",
        { "open-url": "https://bean.m.jd.com/bean/signIndex.action" }
    );
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(
          cookie.match(/pt_pin=(.+?);/) && cookie.match(/pt_pin=(.+?);/)[1]
      );
      $.index = i + 1;
      $.beanCount = 0;
      $.jdNum = 0;
      $.isLogin = true;
      $.nickName = "";
      $.shareID = [];
      await TotalBean();
      console.log(
          `\n===============开始【京东账号${$.index}】${
              $.nickName || $.UserName
          }==================\n`
      );
      if (!$.isLogin) {
        $.msg(
            $.name,
            `【提示】cookie已失效`,
            `京东账号${$.index} ${
                $.nickName || $.UserName
            }\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`,
            { "open-url": "https://bean.m.jd.com/bean/signIndex.action" }
        );

        if ($.isNode()) {
          await notify.sendNotify(
              `${$.name}cookie已失效 - ${$.UserName}`,
              `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`
          );
        }
        continue;
      }
      console.log(`一共${starID.length}个${$.name}任务，耗时会很久，请提前知晓`);
      // $.beanCount = beforeTotal && beforeTotal['base'].jdNum;
      for (let index = 0; index < starID.length; index++) {
        $.activeId = starID[index];
        $.j = index;

        await JD_XTG(true);
      }
      console.log(`\n等待8秒后，再去领取奖励\n`);
      // console.log(`做任务之前京豆总计:${$.beanCount}`)
      await $.wait(8000);
      for (let index = 0; index < starID.length; index++) {
        $.activeId = starID[index];
        $.j = index;
        await JD_XTG();
        // await doSupport(shareID[index]);
      }
      $.allShareId[i] = $.shareID;
      // const afterTotal = await TotalBean();
      // $.jdNum = afterTotal['base'].jdNum;
      // await showMsg();
    }
  }
  // console.log($.allShareId);
  for (let v = 0; v < cookiesArr.length; v++) {
    cookie = cookiesArr[v];
    console.log(`自己账号内部互助\n\n`);
    for (let item of Object.keys($.allShareId)) {
      for (let index = 0; index < starID.length; index++) {
        $.activeId = starID[index];
        console.log(`账号${v + 1}去助力 账号${Number(item) + 1} 的${$.activeId}活动的邀请码${$.allShareId[item][index]}\n`)
        await doSupport($.allShareId[item][index]);
      }
    }
    console.log(`如有剩下的机会，助力作者\n\n`);
    for (let index = 0; index < starID.length; index++) {
      $.activeId = starID[index];
      await doSupport(shareID[index]);
    }
  }
})()
    .catch((e) => {
      $.log("", `❌ ${$.name}, 失败! 原因: ${e}!`, "");
    })
    .finally(() => {
      $.done();
    });
async function showMsg() {
  console.log(`\n做任务之前京豆总计:${$.beanCount}`)
  console.log(`做完任务后京豆总计:${$.jdNum}`);
  console.log(`活动活动京豆数量:${$.jdNum - $.beanCount}`);
  let nowTime =
      new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
  if (nowTime > new Date(activeEndTime).getTime()) {
    $.msg($.name, 'xtg', `请删除或禁用此脚本\n如果帮助到您可以点下🌟STAR鼓励我一下,谢谢\n咱江湖再见\nhttps://github.com/LXK9301/jd_scripts`, {"open-url": "https://github.com/LXK9301/jd_scripts"});
    if ($.isNode()) await notify.sendNotify($.name + '活动已结束', `请删除此脚本\n如果帮助到您可以点下🌟STAR鼓励我一下,谢谢\n咱江湖再见\nhttps://github.com/LXK9301/jd_scripts`)
  } else {
    $.msg($.name, `账号${$.index} ${$.nickName || $.UserName}`, `做任务之前京豆总计:${$.beanCount}\n做完任务后京豆总计:${$.jdNum}\n${($.jdNum - $.beanCount) > 0 ? `获得京豆：${$.jdNum - $.beanCount}京豆 🐶(仅供参考)\n` : ''}京豆先到先得\n活动地址点击弹窗跳转后即可查看\n注：如未获得京豆就是已被分完`, {"open-url": "https://pro.m.jd.com/mall/active/23yuC2muhsBnv2515p8xLxC3D8Lv/index.html"})
    //if ($.isNode()) await notify.sendNotify(`${$.name} - 账号${$.index} - ${$.nickName || $.UserName}`, `账号${$.index} ${$.nickName || $.UserName}\n做任务之前京豆总计:${$.beanCount}\n做完任务后京豆总计:${$.jdNum}\n${($.jdNum - $.beanCount) > 0 ? `获得京豆：${$.jdNum - $.beanCount}京豆 🐶(仅供参考)\n` : ''}京豆先到先得\n注：如未获得京豆就是已被分完\n活动结束时间：2020年11月12日 23:59:59\n活动地址：https://pro.m.jd.com/mall/active/23yuC2muhsBnv2515p8xLxC3D8Lv/index.html`)
  }
}
async function JD_XTG(flag = false) {
  await getHomePage();
  if ($.homeData && $.homeData.code === 200) {
    const {
      shopList,
      venueList,
      productList,
      addCart,
      orderSkuList,
      shareId,
    } = $.homeData.data[0];
    if (flag) {
      console.log(`\n===========活动${$.j + 1}-[${starID[$.j]}] 助力码==========\n${shareId}\n`);
      $.shareID.push(shareId);
    }
    for (let item of addCart) {
      console.log(
          `\n任务一：加购[${item["productName"]}]-${
              item["productStatus"] !== 3 ? "" : "已做完"
          }`
      );
      if (item["productStatus"] !== 3) {
        await doTask("cart", item["productId"], item["productStatus"]);
      }
    }
    for (let item of shopList) {
      console.log(`\n任务一：关注${item["shopName"]}`);
      if (item["shopStatus"] === 4) {
        console.log(`入会任务，假入会`);
        await doTask("shop", item["shopId"], 0);
        continue;
      }
      if (item["shopStatus"] === 3) {
        console.log(`此任务已做完，跳过`);
        continue;
      }
      console.log(`shopStatus:::${item["shopStatus"]}`);
      if (item["shopStatus"] !== 3 && item["shopStatus"] !== 4) {
        await doTask("shop", item["shopId"], item["shopStatus"]);
      }
      // if (item['shopStatus'] === 2) {
      //   await doTask('shop', item['shopId'], 2)
      // }
      // if (item['shopStatus'] === 4) {
      //   await doTask('shop', item['shopId'], 4)
      // }
    }
    for (let item1 of venueList) {
      console.log(
          `\n任务二：逛逛[${item1["venueName"]}]-${
              item1["venueStatus"] !== 3 ? "" : "已做完"
          }`
      );
      if (item1["venueStatus"] === 1) {
        await doTask("venue", item1["venueId"], 1);
      }
      if (item1["venueStatus"] === 2) {
        await doTask("venue", item1["venueId"], 2);
      }
    }
    for (let item2 of productList) {
      console.log(
          `\n任务三：逛逛[${item2["productName"]}]-${
              item2["productStatus"] !== 3 ? "" : "已做完"
          }`
      );
      if (item2["productStatus"] === 1) {
        await doTask("product", item2["productId"], 1);
      }
      if (item2["productStatus"] === 2) {
        await doTask("product", item2["productId"], 2);
      }
    }
    //付定金 TODO
    // for (let item3 of orderSkuList) {
    //   await doTask('order', item3['skuId'], 1);
    //   await doTask('order', item3['skuId'], 2);
    //   await doTask('order', item3['skuId'], 3);
    //   await doTask('order', item3['skuId'], 0);
    //
    //   await doTask('order', item3['skuId'], 2);
    //   await doTask('order', item3['skuId'], 1);
    // }
    //console.log(`\n开始抽奖\n`)
    // await getDayPrizeStatus(4, `${$.activeId}#1`, 3);
    // await getDayPrizeStatus(1, `${$.activeId}#2`, 3);
  } else {
    console.log(`京东服务器返回无数据！`);
  }
}
function getHomePage() {
  return new Promise((resolve) => {
    $.get(taskUrl("getHomePage"), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          if (data) {
            $.homeData = JSON.parse(data);
          } else {
            console.log(`京东服务器返回空数据`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function doTask(type, id, status) {
  return new Promise(async (resolve) => {
    $.post(taskPostUrl(type, id, status), (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          console.log(`做任务结果:${data}`);
          data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function doSupport(shareId) {
  let r = Date.now().toString();
  let hi = "352f5149282f44d5aed9061003341bbe";
  let o = hi + r;
  let t = "doSupport";
  let a = `starId=${$.activeId}&shareId=${shareId}`;
  return new Promise(async (resolve) => {
    const options = {
      url: `${JD_API_HOST}/doSupport`,
      body: `starId=${$.activeId}&shareId=${shareId}`,
      headers: {
        Accept: "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        Cookie: cookie,
        Host: "urvsaggpt.m.jd.com",
        Referer: "https://urvsaggpt.m.jd.com/static/index.html",
        sign: za(a, o, t),
        timestamp: r,
        "User-Agent": $.isNode()
            ? process.env.JD_USER_AGENT
                ? process.env.JD_USER_AGENT
                : require("./USER_AGENTS").USER_AGENT
            : $.getdata("JDUA")
                ? $.getdata("JDUA")
                : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
      },
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          // console.log(`\n助力结果:${data}`);
          // data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function TotalBean() {
  return new Promise(async (resolve) => {
    const options = {
      url: `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      headers: {
        Accept: "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        Cookie: cookie,
        Referer: "https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2",
        "User-Agent": $.isNode()
            ? process.env.JD_USER_AGENT
                ? process.env.JD_USER_AGENT
                : require("./USER_AGENTS").USER_AGENT
            : $.getdata("JDUA")
                ? $.getdata("JDUA")
                : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
      },
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data["retcode"] === 13) {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data["retcode"] === 0) {
              $.nickName = (data["base"] && data["base"].nickname) || $.UserName;
            } else {
              $.nickName = $.UserName;
            }
          } else {
            console.log(`京东服务器返回空数据`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    });
  });
}
function getDayPrizeStatus(prizeType, prizeId, status) {
  let r = Date.now().toString();
  let hi = "352f5149282f44d5aed9061003341bbe";
  let o = hi + r;
  let t = "getDayPrizeStatus";
  let a = `starId=${$.activeId}&status=${status}&prizeType=${prizeType}&prizeId=${prizeId}`;
  return new Promise(async (resolve) => {
    const options = {
      url: `${JD_API_HOST}/getDayPrizeStatus`,
      body: `starId=${$.activeId}&status=${status}&prizeType=${prizeType}&prizeId=${prizeId}`,
      headers: {
        Accept: "application/json,text/plain, */*",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        Connection: "keep-alive",
        Cookie: cookie,
        Host: "urvsaggpt.m.jd.com",
        Referer: "https://urvsaggpt.m.jd.com/static/index.html",
        sign: za(a, o, t),
        timestamp: r,
        "User-Agent": $.isNode()
            ? process.env.JD_USER_AGENT
                ? process.env.JD_USER_AGENT
                : require("./USER_AGENTS").USER_AGENT
            : $.getdata("JDUA")
                ? $.getdata("JDUA")
                : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
      },
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          console.log(`抽奖结果:${data}`);
          // data = JSON.parse(data);
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function taskPostUrl(type, id, status) {
  let r = Date.now().toString();
  let hi = "352f5149282f44d5aed9061003341bbe";
  let o = hi + r;
  let t = "doTask";
  let a = `starId=${$.activeId}&type=${type}&id=${id}&status=${status}`;
  return {
    url: `${JD_API_HOST}/doTask`,
    body: `starId=${$.activeId}&type=${type}&id=${id}&status=${status}`,
    headers: {
      Accept: "application/json,text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Connection: "keep-alive",
      Cookie: cookie,
      Host: "urvsaggpt.m.jd.com",
      Referer: "https://urvsaggpt.m.jd.com/static/index.html",
      sign: za(a, o, t),
      timestamp: r,
      "User-Agent": $.isNode()
          ? process.env.JD_USER_AGENT
              ? process.env.JD_USER_AGENT
              : require("./USER_AGENTS").USER_AGENT
          : $.getdata("JDUA")
              ? $.getdata("JDUA")
              : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
    },
  };
}
function jsonParse(str) {
  if (typeof str == "string") {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function taskUrl(function_id) {
  let r = Date.now().toString();
  let hi = "352f5149282f44d5aed9061003341bbe";
  let o = hi + r;
  let t = function_id;
  let a = `t=${r}&starId=${$.activeId}`;
  return {
    url: `${JD_API_HOST}/${function_id}?t=${r}&starId=${$.activeId}`,
    headers: {
      Accept: "application/json,text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Connection: "keep-alive",
      Cookie: cookie,
      Host: "urvsaggpt.m.jd.com",
      Referer: "https://urvsaggpt.m.jd.com/static/index.html",
      sign: za(a, o, t),
      timestamp: r,
      "User-Agent": $.isNode()
          ? process.env.JD_USER_AGENT
              ? process.env.JD_USER_AGENT
              : require("./USER_AGENTS").USER_AGENT
          : $.getdata("JDUA")
              ? $.getdata("JDUA")
              : "jdapp;iPhone;9.2.2;14.2;%E4%BA%AC%E4%B8%9C/9.2.2 CFNetwork/1206 Darwin/20.1.0",
    },
  };
}

// prettier-ignore
function za(t, e, a) {
  var n = "",
      i = a.split("?")[1] || "";
  if (t) {
    if ("string" == typeof t) n = t + i;
    else if ("object" == ka(t)) {
      var s = [];
      for (var r in t) s.push(r + "=" + t[r]);
      n = s.length ? s.join("&") + i : i;
    }
  } else n = i;
  if (n) {
    var o = n.split("&").sort().join("");
    return $.md5(o + e);
  }
  return $.md5(e);
}

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
