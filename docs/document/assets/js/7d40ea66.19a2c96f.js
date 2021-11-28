"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[575],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2948:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],s={title:"\u7b2c\u4e09\u65b9\u5e93",sidebar_position:7,slug:"/zh-cn/libraries"},i=void 0,u={unversionedId:"zh-cn/Libraries",id:"zh-cn/Libraries",isDocsHomePage:!1,title:"\u7b2c\u4e09\u65b9\u5e93",description:"flv.js",source:"@site/docs/zh-cn/Libraries.md",sourceDirName:"zh-cn",slug:"/zh-cn/libraries",permalink:"/document/zh-cn/libraries",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u7b2c\u4e09\u65b9\u5e93",sidebar_position:7,slug:"/zh-cn/libraries"},sidebar:"zh-cn",previous:{title:"\u5b9e\u4f8b\u4e8b\u4ef6",permalink:"/document/zh-cn/events"},next:{title:"\u5728\u63a7\u5236\u680f\u6dfb\u52a0\u5217\u8868",permalink:"/document/zh-cn/Questions/Create selector in the controls"}},c=[{value:"flv.js",id:"flvjs",children:[],level:2},{value:"hls.js",id:"hlsjs",children:[],level:2},{value:"dash.js",id:"dashjs",children:[],level:2},{value:"shaka-player",id:"shaka-player",children:[],level:2},{value:"webtorrent",id:"webtorrent",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"flvjs"},"flv.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u9875: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Bilibili/flv.js"},"https://github.com/Bilibili/flv.js"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://cdn.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.min.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: '/assets/sample/video.flv',\n    customType: {\n        flv: function (video, url) {\n            const flvPlayer = flvjs.createPlayer({\n                type: 'flv',\n                url: url,\n            });\n            flvPlayer.attachMediaElement(video);\n            flvPlayer.load();\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"hlsjs"},"hls.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u9875: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/video-dev/hls.js"},"https://github.com/video-dev/hls.js"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://cdn.jsdelivr.net/npm/hls.js@1.1.1/dist/hls.min.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',\n    customType: {\n        m3u8: function (video, url) {\n            var hls = new Hls();\n            hls.loadSource(url);\n            hls.attachMedia(video);\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"dashjs"},"dash.js"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u9875: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Dash-Industry-Forum/dash.js"},"https://github.com/Dash-Industry-Forum/dash.js"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://cdn.jsdelivr.net/npm/dashjs@4.1.0/dist/dash.all.debug.min.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: 'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd',\n    customType: {\n        mpd: function (video, url) {\n            var player = dashjs.MediaPlayer().create();\n            player.initialize(video, url, true);\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"shaka-player"},"shaka-player"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u9875: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/google/shaka-player"},"https://github.com/google/shaka-player"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://cdn.jsdelivr.net/npm/shaka-player@3.2.1/dist/shaka-player.compiled.min.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url: '//storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd',\n    customType: {\n        mpd: function (video, url) {\n            shaka.polyfill.installAll();\n            var player = new shaka.Player(video);\n            player.load(url);\n        },\n    },\n});\n")),(0,l.kt)("h2",{id:"webtorrent"},"webtorrent"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u9875: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/webtorrent/webtorrent"},"https://github.com/webtorrent/webtorrent"))),(0,l.kt)("div",{className:"run-code","data-libs":"https://cdn.jsdelivr.net/npm/webtorrent@1.5.8/webtorrent.min.js"},"\u25b6 Run Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var art = new Artplayer({\n    container: '.artplayer-app',\n    autoplay: true,\n    url:\n        'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d&dn=sintel.mp4&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&tr=wss%3A%2F%2Ftracker.webtorrent.io&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel-1024-surround.mp4',\n    type: 'torrent',\n    customType: {\n        torrent: function (video, url, art) {\n            var client = new WebTorrent();\n            art.loading.show = true;\n            client.add(url, function (torrent) {\n                var file = torrent.files[0];\n                file.renderTo(video, {\n                    autoplay: true,\n                });\n            });\n        },\n    },\n});\n\nart.on('ready', () => {\n    art.template.$video.controls = false;\n});\n")))}d.isMDXComponent=!0}}]);