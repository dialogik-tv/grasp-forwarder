(function(e){function t(t){for(var a,r,i=t[0],o=t[1],l=t[2],d=0,b=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&b.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,i=1;i<s.length;i++){var o=s[i];0!==n[o]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},c=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/grasp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},3543:function(e,t,s){"use strict";s("74ad")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=c,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("7a23"),n=(s("4de4"),{id:"dashboard"});function c(e,t,s,c,r,i){var o=this,l=Object(a["l"])("settings-panel"),u=Object(a["l"])("chat-list"),d=Object(a["l"])("grasp-list"),b=Object(a["l"])("pick-list"),f=Object(a["l"])("user-list");return Object(a["h"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(l,{filter:r.filter,onLock:t[1]||(t[1]=function(e){return r.filter.locked=e})},null,8,["filter"]),Object(a["g"])("div",n,[Object(a["g"])(u,{chat:r.chat,filter:r.filter,visible:r.visible.chat,class:"message-list"},null,8,["chat","filter","visible"]),Object(a["g"])(d,{grasp:r.chat,filter:r.filter,class:"message-list"},null,8,["grasp","filter"]),Object(a["g"])(b,{picks:r.chat,filter:r.filter,class:"message-list"},null,8,["picks","filter"])]),Object(a["g"])(f,{users:r.users,filter:r.filter,visible:r.visible.users,onFilterUsername:t[2]||(t[2]=function(e){return o.filter.username=e})},null,8,["users","filter","visible"])],64)}s("99af"),s("caad"),s("c975"),s("a15b"),s("d3b7"),s("ac1f"),s("2532"),s("3ca3"),s("5319"),s("841c"),s("1276"),s("2ca0"),s("4c53"),s("ddb0"),s("2b3d");var r=s("5530"),i=s("b85c"),o=s("4095"),l=(s("4b3c"),Object(a["r"])("data-v-19e9e94c"));Object(a["j"])("data-v-19e9e94c");var u={id:"settings"},d={class:"checkbox-group"},b={class:"checkbox-holder chatcount",title:"Shift + C"},f=Object(a["g"])("label",{for:"chatcount"},"Count",-1),h={class:"checkbox-group"},j={class:"checkbox-holder mod",title:"Shift + M"},m=Object(a["g"])("label",{for:"mod"},"Mod",-1),g={class:"checkbox-holder sub",title:"Shift + S"},p=Object(a["g"])("label",{for:"sub"},"Sub",-1),v={class:"checkbox-holder vip",title:"Shift + V"},O=Object(a["g"])("label",{for:"vip"},"VIP",-1),k={class:"checkbox-group"},y={class:"checkbox-holder mention",title:"Keyboard 'M'"},w=Object(a["g"])("label",{for:"mention"},"@mention",-1),x={class:"checkbox-group"},_={class:"checkbox-holder haystack",title:"Shift + H"},S=Object(a["g"])("label",{for:"haystack"},"Haystack",-1),C={class:"checkbox-holder haystack",title:"Keyboard 'H'"},L=Object(a["g"])("label",{for:"shorty"},"Shorties",-1),z=Object(a["g"])("div",null,[Object(a["g"])("a",{target:"_blank",href:"https://github.com/dialogik-tv/grasp#grasp-the-grasp-out-of-your-twitch-chat"},"Help")],-1);Object(a["i"])();var U=l((function(e,t,s,n,c,r){return Object(a["h"])(),Object(a["e"])("div",u,[Object(a["g"])("div",null,[Object(a["p"])(Object(a["g"])("input",{id:"input-search-username","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.filterSettings.username=e}),onClick:t[2]||(t[2]=Object(a["q"])((function(e){return c.filterSettings.username=""}),["ctrl"])),onFocus:t[3]||(t[3]=function(t){return e.$emit("lock",!0)}),onFocusout:t[4]||(t[4]=function(t){return e.$emit("lock",!1)}),placeholder:"Username"},null,544),[[a["o"],c.filterSettings.username]]),Object(a["g"])("span",d,[Object(a["g"])("span",b,[Object(a["p"])(Object(a["g"])("input",{type:"checkbox",id:"chatcount",value:"chatcount","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.filterSettings.chatcount=e})},null,512),[[a["n"],c.filterSettings.chatcount]]),f])]),Object(a["g"])("span",h,[Object(a["g"])("span",j,[Object(a["p"])(Object(a["g"])("input",{type:"checkbox",id:"mod",value:"mod","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.filterSettings.mod=e})},null,512),[[a["n"],c.filterSettings.mod]]),m]),Object(a["g"])("span",g,[Object(a["p"])(Object(a["g"])("input",{type:"checkbox",id:"sub",value:"sub","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.filterSettings.sub=e})},null,512),[[a["n"],c.filterSettings.sub]]),p]),Object(a["g"])("span",v,[Object(a["p"])(Object(a["g"])("input",{type:"checkbox",id:"vip",value:"vip","onUpdate:modelValue":t[8]||(t[8]=function(e){return c.filterSettings.vip=e})},null,512),[[a["n"],c.filterSettings.vip]]),O])]),Object(a["g"])("span",k,[Object(a["g"])("span",y,[Object(a["p"])(Object(a["g"])("input",{type:"checkbox",id:"mention",value:"mention","onUpdate:modelValue":t[9]||(t[9]=function(e){return c.filterSettings.mention=e})},null,512),[[a["n"],c.filterSettings.mention]]),w])]),Object(a["g"])("span",x,[Object(a["g"])("span",_,[Object(a["p"])(Object(a["g"])("input",{type:"checkbox",id:"haystack",value:"haystack","onUpdate:modelValue":t[10]||(t[10]=function(e){return c.filterSettings.haystack=e})},null,512),[[a["n"],c.filterSettings.haystack]]),S]),Object(a["g"])("span",C,[Object(a["p"])(Object(a["g"])("input",{type:"checkbox",id:"shorty",value:"shorty","onUpdate:modelValue":t[11]||(t[11]=function(e){return c.filterSettings.shorty=e})},null,512),[[a["n"],c.filterSettings.shorty]]),L])])]),z])})),P={name:"SettingsPanel",data:function(){return{filterSettings:this.filter}},props:{filter:Object},created:function(){window.addEventListener("keyup",(function(e){if(!e.defaultPrevented){switch(e.key){case"U":console.log(this);break;default:return}e.preventDefault()}}),!0)}};s("d437");P.render=U,P.__scopeId="data-v-19e9e94c";var M=P,G=Object(a["r"])("data-v-cc5c0d3a");Object(a["j"])("data-v-cc5c0d3a");var I={class:"meta"},D={class:"username"},V={class:"timestamp"};Object(a["i"])();var T=G((function(e,t,s,n,c,r){var i=Object(a["l"])("chat-message");return Object(a["h"])(),Object(a["e"])(a["b"],{name:"list-holder"},{default:G((function(){return[s.visible?(Object(a["h"])(),Object(a["e"])(a["c"],{key:0,id:"chat",class:"box",name:"list",tag:"div"},{default:G((function(){return[(Object(a["h"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(r.filteredChat,(function(e){return Object(a["h"])(),Object(a["e"])("div",{key:e,class:["message",{mod:e.tags.badges.moderator,sub:e.tags.badges.subscriber,vip:e.tags.badges.vip,read:e.read,redemption:e.grasp.details.redemption}],onClick:[Object(a["q"])((function(t){return e.read=!e.read}),["exact"]),Object(a["q"])((function(t){return e.pick=!0}),["alt"])]},[Object(a["g"])("div",I,[Object(a["g"])("div",D,Object(a["m"])(e.username),1),Object(a["g"])("div",V,Object(a["m"])(r.moment(e.timestamp)),1)]),Object(a["g"])(i,{message:e.message,emotes:e.tags.emotes},null,8,["message","emotes"])],10,["onClick"])})),128))]})),_:1})):Object(a["f"])("",!0)]})),_:1})})),q=(s("fb6a"),s("c1df")),E=s.n(q);function N(e,t,s,n,c,r){return Object(a["h"])(),Object(a["e"])("div",{innerHTML:r.formatEmotes(s.message,s.emotes),class:["body",{"emote-sm":s.emotes.length>5||s.message.length>60}]},null,10,["innerHTML"])}s("4d63"),s("25f0");var H={name:"ChatMessage",props:{message:String,emotes:Object},methods:{formatEmotes:function(e,t){var s,a="",n="",c=[],r=Object(i["a"])(t);try{for(r.s();!(s=r.n()).done;){var o=s.value;a=e.substring(o.start,o.end+1),a in c||(n='<img class="emoticon" src="http://static-cdn.jtvnw.net/emoticons/v1/'.concat(o.id,'/3.0">'),c[a]=n)}}catch(b){r.e(b)}finally{r.f()}try{var l=null;for(var u in c){var d=u.replace(/\\|\^|\$|\.|\||\?|\*|\+|\(|\)|\[|\]|\{|\}/g,(function(e){return"\\"+e}));l=new RegExp(d,"g"),e=e.replace(l,c[u])}}catch(f){console.error("Error transforming emote code to image",f)}return e}}};s("892f");H.render=N;var R=H,A={name:"ChatList",components:{ChatMessage:R},props:{visible:Boolean,chat:Array,filter:Object},computed:{filteredChat:function(){var e=this.filter.username;return e?this.chat.filter((function(t){return t.username.toLowerCase().includes(e.toLowerCase())})):this.chat.slice(0,100)}},methods:{moment:function(e){return E()(e).startOf("minute").fromNow()}}};A.render=T,A.__scopeId="data-v-cc5c0d3a";var F=A,$=Object(a["r"])("data-v-5f60f7d4");Object(a["j"])("data-v-5f60f7d4");var K={class:"meta"},W={class:"username"},B={class:"timestamp"},J={key:0,class:"count"};Object(a["i"])();var X=$((function(e,t,s,n,c,r){var i=Object(a["l"])("chat-message");return Object(a["h"])(),Object(a["e"])(a["c"],{id:"grasp",class:"box",name:"list",tag:"div"},{default:$((function(){return[(Object(a["h"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(r.filteredGrasp,(function(e){return Object(a["h"])(),Object(a["e"])("div",{key:e,class:["message",{mod:e.grasp.details.mod,sub:e.grasp.details.sub,vip:e.grasp.details.vip,chatcount:!1!==e.grasp.details.chatcount,first:1===e.grasp.details.chatcount,second:2===e.grasp.details.chatcount,mention:e.grasp.details.mention,shorty:e.grasp.details.shorty,haystack:e.grasp.details.haystack||e.grasp.details.shorty,read:e.read,redemption:e.grasp.details.redemption}],onClick:[Object(a["q"])((function(t){return e.read=!e.read}),["exact"]),Object(a["q"])((function(t){return e.pick=!0}),["alt"])],title:r.createTitle(e)},[Object(a["g"])("div",K,[Object(a["g"])("div",W,Object(a["m"])(e.username),1),Object(a["g"])("div",B,Object(a["m"])(r.moment(e.timestamp)),1)]),Object(a["g"])(i,{message:e.message,emotes:e.tags.emotes},null,8,["message","emotes"]),e.grasp.details.chatcount>0?(Object(a["h"])(),Object(a["e"])("div",J,Object(a["m"])(e.grasp.details.chatcount),1)):Object(a["f"])("",!0)],10,["onClick","title"])})),128))]})),_:1})})),Q={name:"GraspList",components:{ChatMessage:R},props:{grasp:Array,filter:Object},computed:{filteredGrasp:function(){var e=this.filter,t=this.grasp.filter((function(t){return!!(e.mention&&t.grasp.details.mention||e.mod&&t.grasp.details.mod||e.sub&&t.grasp.details.sub||e.vip&&t.grasp.details.vip||e.chatcount&&t.grasp.details.chatcount>0||e.haystack&&t.grasp.details.haystack||e.shorty&&t.grasp.details.shorty||t.grasp.details.redemption)}));return e.username&&t.filter((function(t){return t.username.toLowerCase().includes(e.username.toLowerCase())})),t}},methods:{moment:function(e){return E()(e).startOf("minute").fromNow()},createTitle:function(e){var t="";if(e.grasp.details.mention&&(t+="- Mention@\n"),1===e.grasp.details.chatcount&&(t+="- First message\n"),2===e.grasp.details.chatcount&&(t+="- Second message\n"),e.grasp.details.haystack&&(t+="- Needle found in haystack\n"),e.grasp.details.mod&&(t+="- User is a mod\n"),e.grasp.details.sub&&(t+="- User is a sub\n"),e.grasp.details.vip&&(t+="- User is a vip\n"),t)return"Reasons for grasp:\n\n"+t}}};s("3543");Q.render=X,Q.__scopeId="data-v-5f60f7d4";var Y=Q,Z=Object(a["r"])("data-v-44bfd694");Object(a["j"])("data-v-44bfd694");var ee={class:"meta"},te={class:"username"},se={class:"timestamp"};Object(a["i"])();var ae=Z((function(e,t,s,n,c,r){var i=Object(a["l"])("chat-message");return Object(a["h"])(),Object(a["e"])(a["c"],{id:"picks",class:"box",name:"list",tag:"div"},{default:Z((function(){return[(Object(a["h"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(r.filteredPicks,(function(e){return Object(a["h"])(),Object(a["e"])("div",{key:e,class:["message",{read:e.read}],onClick:[Object(a["q"])((function(t){return e.read=!e.read}),["exact"]),Object(a["q"])((function(t){return e.pick=!1}),["ctrl"])]},[Object(a["g"])("div",ee,[Object(a["g"])("div",te,Object(a["m"])(e.username),1),Object(a["g"])("div",se,Object(a["m"])(r.moment(e.timestamp)),1)]),Object(a["g"])(i,{message:e.message,emotes:e.tags.emotes},null,8,["message","emotes"])],10,["onClick"])})),128))]})),_:1})})),ne={name:"PickList",components:{ChatMessage:R},props:{picks:Array,filter:Object},computed:{filteredPicks:function(){var e=this.filter;return this.picks.filter((function(t){return!0===t.pick&&t.username.toLowerCase().includes(e.username.toLowerCase())}))}},methods:{moment:function(e){return E()(e).startOf("minute").fromNow()}}};ne.render=ae,ne.__scopeId="data-v-44bfd694";var ce=ne,re=Object(a["r"])("data-v-baf48bb0");Object(a["j"])("data-v-baf48bb0");var ie={class:"username"},oe={class:"chatcount"};Object(a["i"])();var le=re((function(e,t,s,n,c,r){return Object(a["h"])(),Object(a["e"])(a["b"],{name:"list-holder","enter-active-class":"animate__animated animate__slideInRight","leave-active-class":"animate__animated animate__slideOutRight"},{default:re((function(){return[s.visible?(Object(a["h"])(),Object(a["e"])(a["c"],{key:0,id:"users",class:"box",name:"list",tag:"div","enter-active-class":"animate__animated animate__zoomIn","leave-active-class":"animate__animated animate__zoomOut"},{default:re((function(){return[(Object(a["h"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(r.sortedUsers,(function(t){return Object(a["h"])(),Object(a["e"])("div",{key:t,class:["user",{mod:t.badges.moderator,sub:t.badges.subscriber,vip:t.badges.vip}],onClick:function(s){return e.$emit("filterUsername",t.username)}},[Object(a["g"])("span",ie,Object(a["m"])(t.username),1),Object(a["g"])("span",oe,Object(a["m"])(t.chatcount),1)],10,["onClick"])})),128))]})),_:1})):Object(a["f"])("",!0)]})),_:1})})),ue=(s("07ac"),{name:"UserList",props:{visible:Boolean,users:Object,filter:Object},emits:{filterUsername:String},computed:{sortedUsers:function(){var e=this.filter.username;return Object.values(this.users).sort((function(e,t){return e.chatcount<t.chatcount?1:e.chatcount>t.chatcount?-1:e.username>t.username?1:e.username<t.username?-1:0})).filter((function(t){return t.username.toLowerCase().includes(e.toLowerCase())}))}}});s("b710");ue.render=le,ue.__scopeId="data-v-baf48bb0";var de=ue,be={name:"App",components:{SettingsPanel:M,ChatList:F,GraspList:Y,PickList:ce,UserList:de},data:function(){return{config:{channel:"dialogikTV"},chat:[],users:{},visible:{chat:!0,users:!1},filter:{username:"",locked:!1,mention:!0,chatcount:!0,mod:!1,sub:!1,vip:!1,haystack:!0,shorty:!0},langs:[],langData:{shorties:[],needles:[]}}},created:function(){var e=this,t=window.location.search,s=new URLSearchParams(t);if(s.has("channel")&&(this.config.channel=s.get("channel")),s.has("lang")){var a,n=["de","en","fr","es","it"],c=s.get("lang").split("|"),r=Object(i["a"])(c);try{for(r.s();!(a=r.n()).done;){var l=a.value;n.indexOf(l)>-1&&this.langs.indexOf(l)<0?this.langs.push(l):n.indexOf(l)<0&&alert("Language [".concat(l.toUpperCase(),"] not supported. Skipping!"))}}catch(g){r.e(g)}finally{r.f()}}this.langs.length<1&&this.langs.push("de");var u,d=Object(i["a"])(this.langs);try{for(d.s();!(u=d.n()).done;){var b=u.value;fetch("https://raw.githubusercontent.com/dialogik-tv/grasp-lang/master/lang/lang.".concat(b,".json")).then((function(e){return e.json()})).then((function(t){e.langData.shorties=e.langData.shorties.concat(t.shorties.filter((function(t){return e.langData.shorties.indexOf(t)<0}))),e.langData.needles=e.langData.needles.concat(t.needles.filter((function(t){return e.langData.shorties.indexOf(t)<0})))}))}}catch(g){d.e(g)}finally{d.f()}document.title="grasping #".concat(this.config.channel);var f=this.filter,h=this.visible;window.addEventListener("keyup",(function(e){if(!0!==f.locked&&!e.defaultPrevented){switch(e.key){case"x":e.altKey?(f.chatcount=!0,f.mention=!0,f.haystack=!0,f.shorty=!0,f.mod=!1,f.sub=!1,f.vip=!1):(f.username="",f.chatcount=!1,f.mention=!1,f.mod=!1,f.sub=!1,f.vip=!1,f.haystack=!1,f.shorty=!1);break;case"X":f.chatcount=!0,f.mention=!0,f.mod=!0,f.sub=!0,f.vip=!0,f.haystack=!0,f.shorty=!0;break;case"C":f.chatcount=!f.chatcount;break;case"m":f.mention=!f.mention;break;case"M":f.mod=!f.mod;break;case"S":f.sub=!f.sub;break;case"V":f.vip=!f.vip;break;case"H":f.haystack=!f.haystack;break;case"h":f.shorty=!f.shorty;break;case"c":h.chat=!h.chat;break;case"u":h.users=!h.users;break;default:return}e.preventDefault()}}),!0);try{var j=new o["a"]({channel:this.config.channel}),m=j.chat;m.connect().then((function(){m.join(e.config.channel)})).catch((function(e){console.error("Twitch error in Promise",e)})),m.on(o["a"].Chat.Events.ALL,this.handleMessage)}catch(p){console.error("Twitch error",p)}},methods:{searchNeedles:function(e){var t,s=Object(i["a"])(this.langData.needles);try{for(s.s();!(t=s.n()).done;){var a=t.value;if(e.includes(a))return!0}}catch(n){s.e(n)}finally{s.f()}return!1},searchShorties:function(e){var t,s=e.replace(/[^a-z]/gi,"").toLowerCase(),a=Object(i["a"])(this.langData.shorties);try{for(a.s();!(t=a.n()).done;){var n=t.value;if(n==s)return!0}}catch(c){a.e(c)}finally{a.f()}return!1},handleMessage:function(e){if("PRIVMSG"==e.event&&"undefined"!=typeof e.message&&"undefined"!=typeof e.username&&!e.message.startsWith("!")){var t=["streamlabs","streamelements","stay_hydrated_bot","coebot","moobot","wizebot","nightbot"];if(!t.includes(e.username.toLowerCase())){if(e.username=e.tags.username=e.tags.displayName,Object.prototype.hasOwnProperty.call(this.users,e.tags.userId))this.users[e.tags.userId].chatcount++;else{var s=Object(r["a"])(Object(r["a"])({},e.tags),{},{chatcount:1});this.users[e.tags.userId]=s}var a=this.getGrasp(e,this.users[e.tags.userId].chatcount);e.grasp=a,e.pick=!1,e.read=!1,this.chat.unshift(e)}}},getGrasp:function(e,t){var s={isGrasp:!1,details:{mention:!1,chatcount:!1,haystack:!1,shorty:!1,mod:!1,sub:!1,vip:!1,redemption:!1}};return e.message.startsWith("@")&&!e.message.toLowerCase().startsWith("@".concat(this.config.channel.toLowerCase()))||(e.message.toLowerCase().includes("@".concat(this.config.channel.toLowerCase()))&&(s.details.mention=!0,s.isGrasp=!0),t<3&&(s.details.chatcount=t,s.isGrasp=!0),this.searchShorties(e.message)&&(s.details.shorty=!0,s.isGrasp=!0),this.searchNeedles(e.message)&&(s.details.haystack=!0,s.isGrasp=!0),1==e.tags.mod&&(s.details.mod=!0,s.isGrasp=!0),1==e.tags.subscriber&&(s.details.sub=!0,s.isGrasp=!0),1==e.tags.badges.vip&&(s.details.vip=!0,s.isGrasp=!0),e.tags.customRewardId&&(s.details.redemption=!0,s.isGrasp=!0)),s}}};s("75f6");be.render=c;var fe=be;Object(a["d"])(fe).mount("#app")},"74ad":function(e,t,s){},"75f6":function(e,t,s){"use strict";s("afbe")},8498:function(e,t,s){},8633:function(e,t,s){},"892f":function(e,t,s){"use strict";s("8498")},9348:function(e,t,s){},afbe:function(e,t,s){},b710:function(e,t,s){"use strict";s("8633")},d437:function(e,t,s){"use strict";s("9348")}});
//# sourceMappingURL=app.9425e1f9.js.map