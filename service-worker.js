if(!self.define){let e,i={};const c=(c,s)=>(c=new URL(c+".js",s).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const n=e=>c(e,d),f={module:{uri:d},exports:a,require:n};i[d]=Promise.all(s.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"f96f06c0982bf1b16f48c101903a82d9"},{url:"archives/2022/11/index.html",revision:"98976981a36686a9e66a224872128eda"},{url:"archives/2022/index.html",revision:"e2acb778c0b467ad13caaee2eadb8d4f"},{url:"archives/index.html",revision:"e5d7caa9c2446aff8a192b6a813e986f"},{url:"bangumis/index.html",revision:"04fbd1e81826a40e2c055030bc37d989"},{url:"cinemas/index.html",revision:"6af62c456c406df71a03e33c552df5d0"},{url:"comments/index.html",revision:"ea0c41baf60595a5c3d92b2d3657b88f"},{url:"css/custom.css",revision:"38933b901be359d9c3a31f73392120f4"},{url:"css/index.css",revision:"2c9fb0db1cde70dd49741cde6a57de27"},{url:"css/nav_menu.css",revision:"39160b3360ce89e49e1e2c5c46e9e3df"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"701b6b763341b27bd4d3bc3827298bed"},{url:"js/ali_font.js",revision:"53c64d2cbcf5e62c53b69ec3c0a645ca"},{url:"js/main.js",revision:"b28662bf81abe2838d20faf2980f0034"},{url:"js/runtime/runtime.js",revision:"0452ffb2c55d12527ca90b5914e0ffc4"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"58cb9443474ea5d84a1c4ac806c8b4b7"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"live2dw/assets/moc/koharu.2048/texture_00.png",revision:"495eea8d906c2b03abfe3fa9de2f2a8b"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"posts/undefined.html",revision:"ac099945155dca40a44704a3cfdbdd7e"}],{})}));
//# sourceMappingURL=service-worker.js.map
