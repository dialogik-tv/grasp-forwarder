(function(e){function t(t){for(var s,r,i=t[0],o=t[1],d=t[2],l=0,b=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&b.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,d||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},c=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/grasp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var u=o;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"19a1":function(e,t,a){},"435d":function(e,t,a){"use strict";a("ec4a")},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id="4678"},5155:function(e){e.exports=JSON.parse('{"words":["hey","hi","hallo","hello","moin","nabend","mahlzeit"],"needles":["guten morgen","guten tag","guten abend","was geht","wie geht","hallo","hello","moin","nabend","mahlzeit"]}')},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23"),n=(a("4de4"),{id:"dashboard"});function c(e,t,a,c,r,i){var o=this,d=Object(s["l"])("settings-panel"),u=Object(s["l"])("chat-list"),l=Object(s["l"])("grasp-list"),b=Object(s["l"])("pick-list"),f=Object(s["l"])("user-list");return Object(s["h"])(),Object(s["d"])(s["a"],null,[Object(s["g"])(d,{filter:r.filter},null,8,["filter"]),Object(s["g"])("div",n,[Object(s["g"])(u,{chat:r.chat,filter:r.filter},null,8,["chat","filter"]),Object(s["g"])(l,{grasp:r.chat,filter:r.filter},null,8,["grasp","filter"]),Object(s["g"])(b,{picks:r.chat,filter:r.filter},null,8,["picks","filter"]),Object(s["g"])(f,{users:r.users,filter:r.filter,onFilterUsername:t[1]||(t[1]=function(e){return o.filter.username=e})},null,8,["users","filter"])])],64)}a("caad"),a("a15b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("841c"),a("2ca0"),a("4c53"),a("ddb0"),a("2b3d");var r=a("5530"),i=a("b85c"),o=a("4095"),d=(a("4b3c"),Object(s["r"])("data-v-70fb7a06"));Object(s["j"])("data-v-70fb7a06");var u={class:"settings"},l=Object(s["f"])(" Mod "),b=Object(s["f"])(" Sub "),f=Object(s["f"])(" VIP ");Object(s["i"])();var j=d((function(e,t,a,n,c,r){return Object(s["h"])(),Object(s["d"])("div",u,[Object(s["p"])(Object(s["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.filterSettings.username=e}),onClick:t[2]||(t[2]=Object(s["q"])((function(e){return c.filterSettings.username=""}),["ctrl"]))},null,512),[[s["o"],c.filterSettings.username]]),Object(s["p"])(Object(s["g"])("input",{type:"checkbox",id:"mod",value:"mod","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.filterSettings.mod=e})},null,512),[[s["n"],c.filterSettings.mod]]),l,Object(s["p"])(Object(s["g"])("input",{type:"checkbox",id:"sub",value:"sub","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.filterSettings.sub=e})},null,512),[[s["n"],c.filterSettings.sub]]),b,Object(s["p"])(Object(s["g"])("input",{type:"checkbox",id:"vip",value:"vip","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.filterSettings.vip=e})},null,512),[[s["n"],c.filterSettings.vip]]),f])})),m={name:"SettingsPanel",data:function(){return{filterSettings:this.filter}},props:{filter:Object}};m.render=j,m.__scopeId="data-v-70fb7a06";var p=m,h=Object(s["r"])("data-v-352ec2b3");Object(s["j"])("data-v-352ec2b3");var g={class:"meta"},v={class:"username"},O={class:"timestamp"},k={class:"body"};Object(s["i"])();var y=h((function(e,t,a,n,c,r){return Object(s["h"])(),Object(s["d"])(s["b"],{id:"chat",class:"box",name:"list",tag:"div","enter-active-class":"animate__animated animate__backInLeft","leave-active-class":"animate__animated animate__backOutRight"},{default:h((function(){return[(Object(s["h"])(!0),Object(s["d"])(s["a"],null,Object(s["k"])(r.filteredChat.reverse(),(function(e){return Object(s["h"])(),Object(s["d"])("div",{key:e,class:["message",{mod:e.tags.badges.moderator,sub:e.tags.badges.subscriber,vip:e.tags.badges.vip}],onClick:function(t){return e.pick=!0}},[Object(s["g"])("div",g,[Object(s["g"])("div",v,Object(s["m"])(e.username),1),Object(s["g"])("div",O,Object(s["m"])(r.moment(e.timestamp)),1)]),Object(s["g"])("div",k,Object(s["m"])(e.message),1)],10,["onClick"])})),128))]})),_:1})})),_=a("c1df"),w=a.n(_),C={name:"ChatList",props:{chat:Array,filter:Object},computed:{filteredChat:function(){var e=this.filter.username;return this.chat.filter((function(t){return t.username.toLowerCase().includes(e.toLowerCase())}))}},methods:{moment:function(e){return w()(e).startOf("minute").fromNow()}}};C.render=y,C.__scopeId="data-v-352ec2b3";var z=C,L=(a("99af"),Object(s["r"])("data-v-6553a043"));Object(s["j"])("data-v-6553a043");var S={class:"meta"},x={class:"username"},P={class:"timestamp"},G={class:"body"};Object(s["i"])();var U=L((function(e,t,a,n,c,r){return Object(s["h"])(),Object(s["d"])(s["b"],{id:"grasp",class:"box",name:"list",tag:"div","enter-active-class":"animate__animated animate__backInDown","leave-active-class":"animate__animated animate__backOutUp"},{default:L((function(){return[(Object(s["h"])(!0),Object(s["d"])(s["a"],null,Object(s["k"])(r.filteredGrasp.reverse(),(function(e){return Object(s["h"])(),Object(s["d"])("div",{key:e,class:["message",{mod:e.grasp.details.mod,sub:e.grasp.details.sub,vip:e.grasp.details.vip,chatcount:!1!==e.grasp.details.chatcount,mention:e.grasp.details.broadcaster,shorty:e.grasp.details.shorty,haystack:e.grasp.details.haystack}],onClick:function(t){return e.pick=!0},title:"\nbc ".concat(e.grasp.details.broadcaster,"\ncc ").concat(e.grasp.details.chatcount,"\nhs ").concat(e.grasp.details.haystack,"\nsh ").concat(e.grasp.details.shorty,"\nmod ").concat(e.grasp.details.mod,"\nsub ").concat(e.grasp.details.sub,"\nvip ").concat(e.grasp.details.vip)},[Object(s["g"])("div",S,[Object(s["g"])("div",x,Object(s["m"])(e.username),1),Object(s["g"])("div",P,Object(s["m"])(r.moment(e.timestamp)),1)]),Object(s["g"])("div",G,Object(s["m"])(e.message),1),!1!==e.grasp.details.chatcount?(Object(s["h"])(),Object(s["d"])("div",{key:0,class:["count","count-".concat(e.grasp.details.chatcount)]},Object(s["m"])(e.grasp.details.chatcount),3)):Object(s["e"])("",!0)],10,["onClick","title"])})),128))]})),_:1})})),I={name:"GraspList",props:{grasp:Array,filter:Object},computed:{filteredGrasp:function(){var e=this.filter;return this.grasp.filter((function(e){return!0===e.grasp.isGrasp})).filter((function(t){return t.username.toLowerCase().includes(e.username.toLowerCase())})).filter((function(t){return!1!==t.grasp.details.broadcaster||!1!==t.grasp.details.chatcount||!1!==t.grasp.details.haystack||!1!==t.grasp.details.shorty||!!(e.mod&&t.grasp.details.mod||e.sub&&t.grasp.details.sub||e.vip&&t.grasp.details.vip)}))}},methods:{moment:function(e){return w()(e).startOf("minute").fromNow()}}};a("ce85");I.render=U,I.__scopeId="data-v-6553a043";var M=I,N=Object(s["r"])("data-v-35bb9912");Object(s["j"])("data-v-35bb9912");var V={class:"meta"},q={class:"username"},A={class:"timestamp"},T={class:"body"};Object(s["i"])();var W=N((function(e,t,a,n,c,r){return Object(s["h"])(),Object(s["d"])(s["b"],{id:"picks",class:"box",name:"list",tag:"div","enter-active-class":"animate__animated animate__backInDown","leave-active-class":"animate__animated animate__backOutUp"},{default:N((function(){return[(Object(s["h"])(!0),Object(s["d"])(s["a"],null,Object(s["k"])(r.filteredPicks.reverse(),(function(e){return Object(s["h"])(),Object(s["d"])("div",{key:e,class:["message",{checked:null===e.pick}],onClick:[Object(s["q"])((function(t){return r.handlePickStatus(e)}),["exact"]),Object(s["q"])((function(t){return e.pick=!1}),["ctrl"])]},[Object(s["g"])("div",V,[Object(s["g"])("div",q,Object(s["m"])(e.username),1),Object(s["g"])("div",A,Object(s["m"])(r.moment(e.timestamp)),1)]),Object(s["g"])("div",T,Object(s["m"])(e.message),1)],10,["onClick"])})),128))]})),_:1})})),D={name:"PickList",props:{picks:Array,filter:Object},computed:{filteredPicks:function(){var e=this.filter;return this.picks.filter((function(e){return e.pick||null===e.pick})).filter((function(t){return t.username.toLowerCase().includes(e.username.toLowerCase())}))}},methods:{moment:function(e){return w()(e).startOf("minute").fromNow()},handlePickStatus:function(e){null===e.pick?e.pick=!0:!0===e.pick&&(e.pick=null)}}};a("435d");D.render=W,D.__scopeId="data-v-35bb9912";var R=D,E=Object(s["r"])("data-v-3e8c8db9");Object(s["j"])("data-v-3e8c8db9");var J={class:"username"},F={class:"chatcount"};Object(s["i"])();var $=E((function(e,t,a,n,c,r){return Object(s["h"])(),Object(s["d"])(s["b"],{id:"users",class:"box",name:"list",tag:"div","enter-active-class":"animate__animated animate__backInRight","leave-active-class":"animate__animated animate__backOutLeft"},{default:E((function(){return[(Object(s["h"])(!0),Object(s["d"])(s["a"],null,Object(s["k"])(r.sortedUsers,(function(t){return Object(s["h"])(),Object(s["d"])("div",{key:t,class:["user",{mod:t.badges.moderator,sub:t.badges.subscriber,vip:t.badges.vip}],onClick:function(a){return e.$emit("filterUsername",t.username)}},[Object(s["g"])("span",J,Object(s["m"])(t.username),1),Object(s["g"])("span",F,Object(s["m"])(t.chatcount),1)],10,["onClick"])})),128))]})),_:1})})),B=(a("07ac"),{name:"UserList",props:{users:Object,filter:Object},emits:{filterUsername:String},computed:{sortedUsers:function(){var e=this.filter.username;return Object.values(this.users).sort((function(e,t){return e.chatcount<t.chatcount?1:e.chatcount>t.chatcount?-1:e.username>t.username?1:e.username<t.username?-1:0})).filter((function(t){return t.username.toLowerCase().includes(e.toLowerCase())}))}}});a("ea45");B.render=$,B.__scopeId="data-v-3e8c8db9";var H=B,K=a("5155"),Q={name:"App",components:{SettingsPanel:p,ChatList:z,GraspList:M,PickList:R,UserList:H},data:function(){return{config:{channel:"dialogikTV"},chat:[],users:{},filter:{username:"",chatcount:!0,mod:!1,sub:!1,vip:!1}}},created:function(){var e=this,t=window.location.search,a=new URLSearchParams(t);a.has("channel")&&(this.config.channel=a.get("channel")),document.title="grasping #".concat(this.config.channel);try{var s=new o["a"]({channel:this.config.channel}),n=s.chat;n.connect().then((function(){n.join(e.config.channel)})),n.on(o["a"].Chat.Events.ALL,this.handleMessage)}catch(c){console.error("Twitch error",c)}},methods:{searchNeedles:function(e){var t,a=e.replace(/[^a-z]/gi,""),s=Object(i["a"])(K.needles);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(a.toLowerCase().includes(n))return!0}}catch(c){s.e(c)}finally{s.f()}return!1},searchWords:function(e){var t,a=e.replace(/[^a-z]/gi,""),s=Object(i["a"])(K.words);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(n==a.toLowerCase())return!0}}catch(c){s.e(c)}finally{s.f()}return!1},handleMessage:function(e){if("PRIVMSG"==e.event&&"undefined"!=typeof e.message&&"undefined"!=typeof e.username&&!e.message.startsWith("!")){var t=["streamlabs","streamelements","stay_hydrated_bot","coebot","moobot","wizebot","nightbot"];if(!t.includes(e.username.toLowerCase())){if(e.username=e.tags.displayName,Object.prototype.hasOwnProperty.call(this.users,e.username))this.users[e.username].chatcount++;else{var a=Object(r["a"])(Object(r["a"])({},e.tags),{},{chatcount:1,added:e.timestamp,username:e.username});this.users[e.username]=a}var s=this.getGrasp(e,this.users[e.username].chatcount);e.grasp=s,e.pick=!1,this.chat.push(e)}}},getGrasp:function(e,t){var a={isGrasp:!1,details:{broadcaster:!1,chatcount:!1,haystack:!1,shorty:!1,mod:!1,sub:!1,vip:!1}};return e.message.startsWith("@")&&!e.message.toLowerCase().startsWith("@".concat(this.config.channel.toLowerCase()))||(e.message.toLowerCase().includes("@".concat(this.config.channel.toLowerCase()))&&(a.details.broadcaster=!0,a.isGrasp=!0),t<3&&(a.details.chatcount=t,a.isGrasp=!0),this.searchWords(e.message)&&(a.details.shorty=!0,a.isGrasp=!0),this.searchNeedles(e.message)&&(a.details.haystack=!0,a.isGrasp=!0),1==e.tags.mod&&(a.details.mod=!0,a.isGrasp=!0),1==e.tags.subscriber&&(a.details.sub=!0,a.isGrasp=!0),1==e.tags.badges.vip&&(a.details.vip=!0,a.isGrasp=!0)),a}}};a("7f17");Q.render=c;var X=Q;Object(s["c"])(X).mount("#app")},"7f17":function(e,t,a){"use strict";a("b11c")},b11c:function(e,t,a){},bed9:function(e,t,a){},ce85:function(e,t,a){"use strict";a("19a1")},ea45:function(e,t,a){"use strict";a("bed9")},ec4a:function(e,t,a){}});
//# sourceMappingURL=app.ce19ba6d.js.map