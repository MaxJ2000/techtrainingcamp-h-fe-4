(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],m=0,f=[];m<o.length;m++)r=o[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("8a23"),n=a.n(i);n.a},"0418":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{staticClass:"font-weight-medium",attrs:{height:"100px",absolute:"","min-width":"100%",color:"#00d3b4"}},[a("v-spacer"),a("v-toolbar-title",{attrs:{center:""}},[a("h3",[t._t("default")],2)]),a("v-spacer")],1)},n=[],s={},r=s,o=(a("0fa4"),a("2877")),l=a("6544"),c=a.n(l),u=a("2fa4"),m=a("71d9"),f=a("2a7f"),d=Object(o["a"])(r,i,n,!1,null,"4cbcf8ec",null);e["a"]=d.exports;c()(d,{VSpacer:u["a"],VToolbar:m["a"],VToolbarTitle:f["a"]})},"08a3":function(t,e,a){"use strict";var i=a("59ca"),n=a.n(i);n.a},"0f69":function(t,e,a){"use strict";var i=a("4add"),n=a.n(i);n.a},"0fa4":function(t,e,a){"use strict";var i=a("c6b3"),n=a.n(i);n.a},2761:function(t,e,a){t.exports=a.p+"img/witch.df83dbf5.jpg"},"38fa":function(t,e,a){},"3db0":function(t,e,a){t.exports=a.p+"img/wolfes.27ddb3af.jpg"},"4add":function(t,e,a){},"4fb3":function(t,e,a){t.exports=a.p+"img/hunter.d2204ad8.jpg"},"51bf":function(t,e,a){"use strict";var i=a("38fa"),n=a.n(i);n.a},"521e":function(t,e,a){t.exports=a.p+"img/village.5c0a5310.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"app"}},[a("router-view",{staticClass:"font"}),a("Footer")],1)])},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:"",color:"#007fff"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — ByteDanceWolfKill ")])],1)},o=[],l={data:function(){return{}}},c=l,u=a("2877"),m=a("6544"),f=a.n(m),d=a("62ad"),h=a("553a"),p=Object(u["a"])(c,r,o,!1,null,"67b63391",null),g=p.exports;f()(p,{VCol:d["a"],VFooter:h["a"]});var v={name:"App",data:function(){return{}},components:{Footer:g}},S=v,y=(a("034f"),a("7496")),b=Object(u["a"])(S,n,s,!1,null,null,null),I=b.exports;f()(b,{VApp:y["a"]});a("d3b7");var _=a("8c4f"),k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("Header",[t._v("我是上帝")]),i("v-container",{attrs:{fluid:""}},[i("div",{staticClass:"rm"},[t._v(" 房间号： "),i("span",[t._v(t._s(t.getRoomId))])]),i("div",{staticClass:"cb"},[i("v-slider",{staticClass:"mt-4",attrs:{label:"狼人: "+t.valueWolf,min:"1",max:"4"},model:{value:t.valueWolf,callback:function(e){t.valueWolf=e},expression:"valueWolf"}}),i("v-slider",{staticClass:"mb-0",attrs:{label:"村民: "+t.valueVillage,min:"1",max:"4"},model:{value:t.valueVillage,callback:function(e){t.valueVillage=e},expression:"valueVillage"}})],1),i("v-row",{attrs:{justify:"center"}},[i("v-col",{attrs:{cols:"9"}},[i("v-combobox",{attrs:{items:t.items,label:"可选神职",hint:"witch - 女巫 hunter - 猎人 prophet - 预言家",placeholder:"请选择所需要的神职",multiple:"",chips:""},model:{value:t.godList,callback:function(e){t.godList=e},expression:"godList"}})],1)],1),i("v-row",{staticClass:"mb-5",attrs:{justify:"center"}},[i("v-chip-group",{attrs:{mandatory:"","active-class":"primary--text","center-active":""},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}},[i("v-chip",{key:"TB"},[t._v("屠边")]),i("v-chip",{key:"TC"},[t._v("屠城")])],1)],1),i("div",[i("v-btn",{staticClass:"btn1",attrs:{depressed:"",large:"",color:"primary",to:"/wait"},nativeOn:{click:function(e){return t.init(e)}}},[t._v("创建房间")])],1),i("img",{attrs:{alt:"WolfKill logo",src:a("ba14")}})],1)],1)},C=[],w=a("0418"),O={name:"Home",data:function(){return{godList:[],items:["witch","hunter","prophet"],tags:["屠边","屠城"],valueVillage:void 0,valueWolf:void 0,mode:1}},methods:{create:function(){this.$store.dispatch("gameInit/createRoom")},radiochange:function(){0===this.mode?this.$store.state.gameInit.killSideOrAll=1:this.$store.state.gameInit.killSideOrAll=0},init:function(){this.$store.state.gameInit.deitiesList=this.godList,this.radiochange(),this.$store.dispatch("gameInit/initRoom",{roomID:this.$store.state.gameInit.roomID,wolfNum:this.$store.state.gameInit.wolfNum,villagerNum:this.$store.state.gameInit.villagerNum,deitiesList:this.$store.state.gameInit.deitiesList,killSideOrAll:this.$store.state.gameInit.killSideOrAll})},getValueWolf:function(t){this.$store.commit("gameInit/getValueWolf",t)},getValueVillage:function(t){this.$store.commit("gameInit/getValueVillage",t)}},components:{Header:w["a"]},watch:{valueVillage:function(t){this.getValueVillage(t)},valueWolf:function(t){this.getValueWolf(t)}},computed:{getRoomId:function(){return console.log(this.$store.state.gameInit.roomID),this.$store.state.gameInit.roomID}},mounted:function(){this.$store.dispatch("gameInit/createRoom"),this.$store.state.gameInit.deitiesList=[]}},$=O,N=(a("d675"),a("8336")),D=a("cc20"),V=a("ef9a"),x=a("2b5d"),A=a("a523"),j=a("0fd9"),B=a("ba0d"),T=Object(u["a"])($,k,C,!1,null,"4baee118",null),P=T.exports;f()(T,{VBtn:N["a"],VChip:D["a"],VChipGroup:V["a"],VCol:d["a"],VCombobox:x["a"],VContainer:A["a"],VRow:j["a"],VSlider:B["a"]});var R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("Header",[t._v("字节跳动狼人杀")]),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-0",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("img",{attrs:{alt:"WolfKill logo",src:a("ba14")}})])],1),i("div",{staticClass:"row"},[i("div",{staticClass:"mb"},[i("v-btn",{staticClass:"btn1",attrs:{depressed:"","x-large":"",fab:"",height:"150px",width:"150px",color:"primary",to:"/home"}},[t._v(" 我是 "),i("br"),t._v("上帝 ")])],1),i("div",[i("v-btn",{staticClass:"btn1 right",attrs:{depressed:"","x-large":"",height:"150px",width:"150px",fab:"",color:"success",to:"/about"}},[t._v(" 我是 "),i("br"),t._v("玩家 ")])],1)]),i("div",{attrs:{id:"rule"}},[i("Dialogs")],1)],1)],1)},G=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-btn",{staticClass:"btn1",attrs:{color:"primary",dark:"",absolute:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v("游戏规则说明")]),a("v-dialog",{attrs:{"max-width":"490"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("p",{staticClass:"ma-auto"},[t._v("狼人杀游戏规则")])]),a("v-card-text",{attrs:{left:""}},[t._v(" 1.规则概述两个阵营：狼人 vs 好人（好人=平民+神）两个游戏环节：黑天 and 白天 （黑天狼人杀人，白天所有人投票让心目中狼人出局）好人胜利条件：让所有狼人出局 （投票出局、神发动技能）狼人胜利条件：让所有平民出局 or 让所有神出局（杀死、投票投死） "),a("br"),t._v("2.各身份技能简述狼人在黑天杀死一个人女巫有一瓶解药，黑天狼人杀人时，可以救人有一瓶毒药，黑天可以毒死一个人（同一晚，不能同时用两瓶药。女巫不能自救）猎人死后可以开枪带走你心目中的狼人（被女巫毒死时，不能开枪） "),a("br"),t._v("3.游戏流程 "),a("br"),t._v("Step1：各玩家拿到身份 "),a("br"),t._v("Step2：进入第一个黑夜，狼人杀人，女巫救人/毒人，预言家验人，告知猎人开枪状态 "),a("br"),t._v("Step3：进入第一个白天，竞选警长，警长有1.5票 "),a("br"),t._v("Step4：所有人发言，然后投票选出一个人出局 "),a("br"),t._v("Step5：不停地重复黑夜-白天，直到某一阵营获胜 "),a("v-spacer")],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])],1)],1)],1)],1)},L=[],W={name:"Dialogs",data:function(){return{dialog:!1}}},H=W,K=(a("0f69"),a("b0af")),M=a("99d9"),F=a("169a"),U=a("2fa4"),J=Object(u["a"])(H,E,L,!1,null,"3790f5d8",null),X=J.exports;f()(J,{VBtn:N["a"],VCard:K["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VDialog:F["a"],VRow:j["a"],VSpacer:U["a"]});var q={name:"HelloWorld",components:{Dialogs:X,Header:w["a"]},methods:{}},Y=q,z=(a("08a3"),Object(u["a"])(Y,R,G,!1,null,"d46b87ac",null)),Q=z.exports;f()(z,{VBtn:N["a"],VCol:d["a"],VContainer:A["a"],VRow:j["a"]});var Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"player"},[i("Header",[t._v("游戏中")]),i("v-container",{attrs:{fluid:""}},[i("div",{staticClass:"two"},[i("div",{staticClass:"day"},[i("span",[t._v("第"+t._s(this.$store.state.gameStatus.dayCount+1)+"天")])]),i("div",[t._v(" 当前阶段： "),i("span",[t._v(t._s(t.stages()))])]),i("div",[t._v(" 当前状态： "),i("span",[t._v(t._s(t.status()))])])]),i("div",{staticClass:"one"},[i("div",{staticClass:"text-center"},[i("v-btn",{attrs:{rounded:"",absolute:"",left:"",color:"#00eed4",dark:""}},[t._v("状态刷新")])],1),i("div",{staticClass:"text-center"},[i("v-btn",{attrs:{rounded:"",absolute:"",right:"",color:"#00eed4",dark:""}},[t._v("查看技能")])],1)]),i("v-row",{attrs:{justify:"center"}},[i("v-btn",{attrs:{color:"primary",dark:"",fab:"","x-large":"",absolute:"",top:"",left:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}},nativeOn:{click:function(e){return t.watch(e)}}},[t._v("身份")]),i("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("您当前的身份是")]),i("v-card-text",[this.srcimg[0]?i("img",{attrs:{alt:"Identity",src:a("3db0")}}):t._e(),this.srcimg[1]?i("img",{attrs:{alt:"Identity",src:a("94b1")}}):t._e(),this.srcimg[2]?i("img",{attrs:{alt:"Identity",src:a("521e")}}):t._e(),this.srcimg[3]?i("img",{attrs:{alt:"Identity",src:a("2761")}}):t._e(),this.srcimg[4]?i("img",{attrs:{alt:"Identity",src:a("4fb3")}}):t._e()]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])],1)],1)],1)],1)],1)],1)},tt=[],et=(a("b0c0"),{data:function(){return{dialog:!1,timer:"",statu:["游戏中","被狼人刀","被投票出局","被毒杀","被猎杀"],stage:["夜晚","宣告昨夜情况","发言阶段","投票阶段"],srcimg:[!1,!1,!1,!1,!1]}},components:{Header:w["a"]},methods:{update:function(){this.$store.dispatch("gameStatus/updateStatus",{roomID:this.$store.state.gameInit.roomID,name:this.$store.state.gameInit.name})},watch:function(){"wolf"===this.$store.state.gameStatus.playerInf[0].identity?this.srcimg[0]=!0:"prophet"===this.$store.state.gameStatus.playerInf[0].identity?this.srcimg[1]=!0:"villager"===this.$store.state.gameStatus.playerInf[0].identity?this.srcimg[2]=!0:"witch"===this.$store.state.gameStatus.playerInf[0].identity?this.srcimg[3]=!0:"hunter"===this.$store.state.gameStatus.playerInf[0].identity&&(this.srcimg[4]=!0)},status:function(){return 1===this.$store.state.gameStatus.playerInf[0].isAlive?this.statu[0]:-1===this.$store.state.gameStatus.playerInf[0].isAlive?this.statu[1]:-2===this.$store.state.gameStatus.playerInf[0].isAlive?this.statu[2]:-3===this.$store.state.gameStatus.playerInf[0].isAlive?this.statu[3]:-4===this.$store.state.gameStatus.playerInf[0].isAlive?this.statu[4]:void 0},stages:function(){if(1===this.$store.state.gameStatus.activeState[0]){if(0===this.$store.state.gameStatus.activeState[1])return this.stage[1];if(1===this.$store.state.gameStatus.activeState[1])return this.stage[2];if(2===this.$store.state.gameStatus.activeState[1])return this.stage[3]}else if(0===this.$store.state.gameStatus.activeState[0])return this.stage[0]}},computed:{isStart:function(){return this.$store.state.gameStatus.isStart},isAbort:function(){return this.$store.state.gameStatus.isAbort}},mounted:function(){this.update(),this.timer=setInterval(this.update,1e3)},beforeDestroy:function(){clearInterval(this.timer)},watch:{isStart:function(t){t||(this.$store.dispatch("ranking/updateRankings"),this.$router.push("result"))},isAbort:function(t){t&&this.$router.push("result")}}}),at=et,it=(a("672b"),Object(u["a"])(at,Z,tt,!1,null,"1da65d56",null)),nt=it.exports;f()(it,{VBtn:N["a"],VCard:K["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VContainer:A["a"],VDialog:F["a"],VRow:j["a"],VSpacer:U["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result"},[a("Header",[t._v("[游戏结果页]")]),a("h4",[t._v("当前局赢家:")]),t._l(t.winner,(function(e,i){return a("div",{key:"winner"+i,staticClass:"three"},[t._v(t._s(e))])})),a("h4",[t._v("其余玩家:")]),t._l(t.loser,(function(e,i){return a("div",{key:"loser"+i,staticClass:"three"},[t._v(t._s(e))])})),a("v-row",{attrs:{justify:"center"}},[a("v-btn",{attrs:{color:"primary",dark:"",absolute:"",right:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},[t._v("排行榜")]),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("p",{staticClass:"ma-auto"},[t._v("[排行榜]")])]),a("v-card-text",t._l(t.ranking,(function(e,i){return a("div",{key:"ranking"+i},[t._v(t._s(e))])})),0),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])],1)],1)],1)],1),a("v-btn",{staticClass:"btn1",attrs:{depressed:"",large:"",color:"primary",to:"/wait"},nativeOn:{click:function(e){return t.restartGame(e)}}},[t._v("重新开始")])],2)},rt=[],ot=a("b85c"),lt={data:function(){return{dialog:!1}},computed:{name:function(){return this.$store.state.gameInit.name},isAbort:function(){return this.$store.state.gameStatus.isAbort},winGroup:function(){return this.$store.state.ranking.winGroup},loseGroup:function(){return this.$store.state.ranking.loseGroup},rankings:function(){return this.$store.state.ranking.rankings},winner:function(){var t,e=[],a=Object(ot["a"])(this.winGroup);try{for(a.s();!(t=a.n()).done;){var i=t.value;e.push(i.name+" - "+i.identity)}}catch(n){a.e(n)}finally{a.f()}return e},loser:function(){var t,e=[],a=Object(ot["a"])(this.loseGroup);try{for(a.s();!(t=a.n()).done;){var i=t.value;e.push(i.name+" - "+i.identity)}}catch(n){a.e(n)}finally{a.f()}return e},ranking:function(){var t,e=[],a=Object(ot["a"])(this.rankings);try{for(a.s();!(t=a.n()).done;){var i=t.value;e.push(i.name+"  赢"+ +i.winTimes+"局")}}catch(n){a.e(n)}finally{a.f()}return e}},mounted:function(){"_God"!==this.$store.state.gameInit.name?this.$store.dispatch("ranking/updateRankings"):this.$store.dispatch("ranking/sortedList")},methods:{restartGame:function(){this.$store.state.gameInit.currentPlayerNum=0,"_God"===this.name?this.$store.dispatch("gameInit/startGame"):this.$store.dispatch("gameInit/joinRoom",{roomID:this.$store.state.gameInit.roomID,name:this.$store.state.gameInit.name})}},components:{Header:w["a"]}},ct=lt,ut=(a("51bf"),Object(u["a"])(ct,st,rt,!1,null,"3d617f2e",null)),mt=ut.exports;f()(ut,{VBtn:N["a"],VCard:K["a"],VCardActions:M["a"],VCardText:M["b"],VCardTitle:M["c"],VDialog:F["a"],VRow:j["a"],VSpacer:U["a"]});var ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column align-center"},[a("Header",[t._v(t._s(t.titleContent))]),a("div",{staticClass:"day"},[a("span",[t._v("第"+t._s(this.$store.state.gameStatus.dayCount+1)+"天")])]),a("List",{attrs:{eachStatus:t.printStatus,isChecked:t.isChecked,change:t.change}}),a("Button",{attrs:{msg:"下一步"},nativeOn:{click:function(e){return t.nextStep(e)}}}),a("Button",{attrs:{msg:"强行结束"},nativeOn:{click:function(e){return t.abort(e)}}})],1)},dt=[],ht=(a("cb29"),a("7db0"),a("a434"),a("ddb0"),a("3835")),pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"lighten-5 ma-auto"},t._l(t.eachStatus,(function(e,i){return a("v-row",{key:i,staticClass:"mb-0",attrs:{"no-gutters":""}},t._l(e,(function(e,n){return a("v-col",{key:e+t.isChecked[i],attrs:{cols:0===n?8:4}},[1===n&&t.canBeChecked(e)?[a("v-card",{class:["pa-2",t.isChecked[i]?"red accent-2":""],attrs:{transition:"scale-transition",outlined:"",tile:""},on:{click:function(){t.change(i)}}},[t._v(t._s(e))])]:t._e(),1!==n||t.canBeChecked(e)?t._e():[a("v-card",{class:["pa-2"],attrs:{color:"blue-grey lighten-4\n",outlined:"",tile:""}},[t._v(t._s(e))])],1!==n?[a("v-card",{class:["pa-2"],attrs:{outlined:"",tile:""}},[t._v(t._s(e))])]:t._e()],2)})),1)})),1)},gt=[],vt={name:"List",props:{eachStatus:Array,isChecked:Array,change:Function},computed:{},data:function(){return{}},methods:{reload:function(){this.$forceUpdate()},canBeChecked:function(t){return"死亡"!==t&&"解药不可用"!==t&&"毒药不可用"!==t}}},St=vt,yt=Object(u["a"])(St,pt,gt,!1,null,null,null),bt=yt.exports;f()(yt,{VCard:K["a"],VCol:d["a"],VContainer:A["a"],VRow:j["a"]});var It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{rounded:"",left:"",color:"#00eed4"}},[t._v(t._s(t.msg))])},_t=[],kt={name:"Button",props:{msg:String}},Ct=kt,wt=Object(u["a"])(Ct,It,_t,!1,null,null,null),Ot=wt.exports;f()(wt,{VBtn:N["a"]});var $t={name:"Status",components:{List:bt,Button:Ot,Header:w["a"]},data:function(){return{isChecked:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],titleFullDataBase:[["夜晚：狼人行动","夜晚：女巫解药","夜晚：女巫毒药","夜晚：预言家查验","夜晚：猎人状态"],["白天：昨日情况","白天：玩家发言","白天：投票放逐"]],statusFullDataBase:[["狼人击杀","女巫复活","女巫毒杀","预言家查验","猎人状态"],["存活","存活","投票放逐"]],status2Action:{"狼人击杀":"markKnife","女巫复活":"markCure","女巫毒杀":"markPoison","投票放逐":"voteOut"}}},computed:{canHunterShoot:function(){return this.$store.getters["gameStatus/canHunterShoot"]},hunter:function(){var t=this.$store.state.gameStatus.playerInf.find((function(t){return"hunter"===t.identity}));return t},hunterShoot:function(){return this.$store.state.gameStatus.hunterShoot},isShooting:function(){if(!this.hunterShoot){if(!this.hunter)return!1;if(this.hunter.isAlive<0&&this.canHunterShoot)return!0}return!1},isStart:function(){return this.$store.state.gameStatus.isStart},dayCount:function(){return this.$store.state.gameStatus.dayCount},activeState:function(){return this.$store.state.gameStatus.activeState},personalInf:function(){return this.$store.state.gameStatus.playerInf},deitiesList:function(){return this.$store.state.gameInit.deitiesList},titleDataBase:function(){var t=[[],[]];return t[0].push(this.titleFullDataBase[0][0]),this.deitiesList.find((function(t){return"witch"===t}))&&(t[0].push(this.titleFullDataBase[0][1]),t[0].push(this.titleFullDataBase[0][2])),this.deitiesList.find((function(t){return"prophet"===t}))&&t[0].push(this.titleFullDataBase[0][3]),this.deitiesList.find((function(t){return"hunter"===t}))&&t[0].push(this.titleFullDataBase[0][4]),t[1]=this.titleFullDataBase[1],t},statusDataBase:function(){var t=[[],[]];return t[0].push(this.statusFullDataBase[0][0]),this.deitiesList.find((function(t){return"witch"===t}))&&(t[0].push(this.statusFullDataBase[0][1]),t[0].push(this.statusFullDataBase[0][2])),this.deitiesList.find((function(t){return"prophet"===t}))&&t[0].push(this.statusFullDataBase[0][3]),this.deitiesList.find((function(t){return"hunter"===t}))&&t[0].push(this.statusFullDataBase[0][4]),t[1]=this.statusFullDataBase[1],t},statusContent:function(){return this.isShooting?"猎人射杀":0===this.activeState[0]?this.statusDataBase[0][this.activeState[1]]:this.statusDataBase[1][this.activeState[1]]},titleContent:function(){return this.isShooting?"白日：猎人开枪":0===this.activeState[0]?this.titleDataBase[0][this.activeState[1]]:this.titleDataBase[1][this.activeState[1]]},isCuring:function(){return"夜晚：女巫解药"===this.titleContent?1:0},isPosion:function(){return"夜晚：女巫毒药"===this.titleContent?1:0},printStatus:function(){var t=[];if(this.isShooting){var e,a=Object(ot["a"])(this.personalInf);try{for(a.s();!(e=a.n()).done;){var i=e.value,n=[];n.push(i.name+"是"+i.identity),i.isAlive>0?n.push(this.statusContent):n.push("死亡")}}catch(h){a.e(h)}finally{a.f()}}if(0===this.activeState[0]){var s,r=Object(ot["a"])(this.personalInf);try{for(r.s();!(s=r.n()).done;){var o=s.value,l=[];if("夜晚：猎人状态"===this.titleContent||this.isCuring||this.isPosion)if(this.isCuring){var c=this.personalInf[this.$store.state.gameStatus.waitingState.killedByKnife];console.log(c),c&&c.name===o.name&&(l.push(o.name+"被狼击杀"),this.$store.state.gameStatus.waitingState.savedByCured<-1?l.push("解药不可用"):l.push(this.statusContent))}else this.isPosion?(l.push(o.name+"是"+o.identity),this.$store.state.gameStatus.waitingState.killedByPoison<-1?l.push("毒药不可用"):o.isAlive>0?l.push(this.statusContent):l.push("死亡")):"hunter"===o.identity&&(l.push(o.name+"是"+o.identity),this.$store.getters["gameStatus/canHunterShoot"]&&!this.$store.state.gameStatus.hunterShoot?l.push("可以射击"):l.push("不可射击"));else l.push(o.name+"是"+o.identity),o.isAlive>0?l.push(this.statusContent):l.push("死亡");t.push(l)}}catch(h){r.e(h)}finally{r.f()}}else{var u,m=Object(ot["a"])(this.personalInf);try{for(m.s();!(u=m.n()).done;){var f=u.value,d=[];d.push(f.name+"是"+f.identity),f.isAlive>0?d.push(this.statusContent):d.push("死亡"),t.push(d)}}catch(h){m.e(h)}finally{m.f()}}return t}},methods:{reload:function(){this.$forceUpdate()},change:function(t){var e=this;setTimeout((function(){var a=1-e.isChecked[t];e.isChecked.fill(0),e.isChecked.splice(t,1,a)}),100)},checkedKey:function(){var t,e=Object(ot["a"])(this.isChecked.entries());try{for(e.s();!(t=e.n()).done;){var a=Object(ht["a"])(t.value,2),i=a[0],n=a[1];if(n)return i}}catch(s){e.e(s)}finally{e.f()}},nextStep:function(){var t=this.checkedKey();if(console.log("key"+t),void 0!==t||"狼人击杀"!==this.statusContent){this.isShooting&&this.$store.dispatch("gameStatus/shootOut",t);var e=this.status2Action[this.statusContent];console.log(e),e&&void 0!==t&&this.$store.dispatch("gameStatus/"+e,t),this.isChecked=[0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.$store.dispatch("gameStatus/nextStep")}},abort:function(){this.$store.dispatch("gameStatus/abort"),this.$router.push("result")}},mounted:function(){this.$store.dispatch("gameInit/startGame")},watch:{isStart:function(t){t||this.$router.push("result")}}},Nt=$t,Dt=(a("8fb3"),Object(u["a"])(Nt,ft,dt,!1,null,"83c12bd4",null)),Vt=Dt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex flex-column align-center"},[i("Header",[t._v("等待开始")]),i("div",{staticClass:"rm"},[t._v(" 房间号： "),i("span",[t._v(t._s(this.$store.state.gameInit.roomID))])]),i("img",{attrs:{alt:"WolfKill logo",src:a("6a0c")}}),i("Circular",{attrs:{progress:t.rate}}),i("div",{staticClass:"circular"},[t._v(" 已进入玩家:"+t._s(this.$store.state.gameInit.currentPlayerNum)+" / "+t._s(this.$store.state.gameInit.playerNum)+" ")]),this.$store.state.gameInit.currentPlayerNum===this.$store.state.gameInit.playerNum&&"_God"===this.$store.state.gameInit.name?i("v-btn",{staticClass:"btn1",attrs:{depressed:"",large:"",rounded:"",absolute:"",bottom:"",color:"primary",to:"/status"}},[t._v("开始游戏")]):t._e()],1)},At=[],jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-progress-linear",{attrs:{"buffer-value":t.progress,stream:"",height:"10px",color:"#00eed4"}})},Bt=[],Tt=(a("a9e3"),{name:"Circular",props:{progress:Number}}),Pt=Tt,Rt=a("8e36"),Gt=Object(u["a"])(Pt,jt,Bt,!1,null,null,null),Et=Gt.exports;f()(Gt,{VProgressLinear:Rt["a"]});var Lt={name:"wait",components:{Circular:Et,Header:w["a"]},data:function(){return{timer:""}},computed:{rate:function(){return this.$store.state.gameInit.currentPlayerNum/this.$store.state.gameInit.playerNum*100}},methods:{update:function(){this.$store.dispatch("gameInit/updateCurrNum",{roomID:this.$store.state.gameInit.roomID}),this.$store.state.gameStatus.isStart&&"_God"!==this.$store.state.gameInit.name&&this.$router.push("player")}},mounted:function(){this.timer=setInterval(this.update,1e3)},beforeDestroy:function(){clearInterval(this.timer)}},Wt=Lt,Ht=(a("ce5e"),Object(u["a"])(Wt,xt,At,!1,null,"5fae1e2b",null)),Kt=Ht.exports;f()(Ht,{VBtn:N["a"]});var Mt=a("f820");i["a"].use(_["a"]);var Ft,Ut,Jt,Xt=[{path:"/",name:"HelloWorld",component:Q},{path:"/createroom",name:"CreateRoom",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}},{path:"/home",name:"Home",component:P},{path:"/player",name:"Player",component:nt},{path:"/result",name:"Result",component:mt},{path:"/status",name:"Status",component:Vt},{path:"/wait",name:"Wait",component:Kt},{path:"/about",name:"About",component:Mt["default"]}],qt=new _["a"]({routes:Xt}),Yt=qt,zt=a("2f62"),Qt=a("ade3"),Zt=a("bc3a"),te=a.n(Zt),ee="CREATE_ROOM",ae="INIT_ROOM",ie="JOIN_ROOM",ne="UPDATE_CURR_NUM",se="INIT_GAME",re="UPDATE_STATUS",oe="NEXT_STEP",le="GAME_OVER",ce="MARK_KNIFE",ue="MARK_POISON",me="MARK_CURE",fe="SHOOT_OUT",de="VOTE_OUT",he="CHECK_EVENTS",pe="WOLF_WIN",ge="KIND_WIN",ve="UPDATE_RANKINGS",Se="SORT_LIST",ye={roomID:"",isGod:!1,wolfNum:0,villagerNum:0,deitiesList:[],playerNum:0,currentPlayerNum:0,killSideOrAll:!0,name:""},be=function(){return{ableToCreate:function(t){return t.wolfNum+t.villagerNum+t.deitiesList.length>6},ableToStart:function(t){return t.currentPlayerNum==t.playerNum}}},Ie=(Ft={},Object(Qt["a"])(Ft,ee,(function(t,e){t.roomID=e,t.isGod=!0,t.name="_God",console.log(t.roomID)})),Object(Qt["a"])(Ft,ae,(function(t,e){var a=e.wolfNum,i=e.villagerNum,n=e.deitiesList,s=e.killSideOrAll;t.wolfNum=a,t.villagerNum=i,t.deitiesList=n,t.playerNum=t.wolfNum+t.villagerNum+t.deitiesList.length,t.killSideOrAll=s})),Object(Qt["a"])(Ft,ie,(function(t,e){var a=e.roomID,i=e.currentPlayerNum,n=e.playerNum,s=e.name;t.roomID=a,t.currentPlayerNum=i,t.playerNum=n,t.name=s})),Object(Qt["a"])(Ft,"getValueWolf",(function(t,e){t.wolfNum=e})),Object(Qt["a"])(Ft,"getValueVillage",(function(t,e){t.villagerNum=e})),Object(Qt["a"])(Ft,ne,(function(t,e){var a=e.currentPlayerNum;t.currentPlayerNum=a})),Ft),_e={createRoom:function(t){te.a.get("https://afe5o5.fn.thelarkcloud.com/createRoom").then((function(e){return console.log(e),t.commit("CREATE_ROOM",e.data.roomID),!0})).catch((function(t){return console.log(t),!1}))},initRoom:function(t,e){console.log(e),te.a.post("https://afe5o5.fn.thelarkcloud.com/iniRoom",{roomID:e.roomID,wolfNum:e.wolfNum,villagerNum:e.villagerNum,deitiesList:e.deitiesList,killSideOrAll:e.killSideOrAll,playerNum:parseInt(e.wolfNum)+parseInt(e.villagerNum)+parseInt(e.deitiesList.length)}).then((function(a){return console.log(a),t.commit("INIT_ROOM",{wolfNum:parseInt(e.wolfNum),villagerNum:parseInt(e.villagerNum),deitiesList:e.deitiesList,killSideOrAll:e.killSideOrAll}),!0})).catch((function(t){return console.log(t),!1}))},joinRoom:function(t,e){console.log(e),te.a.post("https://afe5o5.fn.thelarkcloud.com/joinRoom",{roomID:e.roomID,name:e.name}).then((function(a){return t.commit("JOIN_ROOM",{roomID:a.data.roomState.roomID,currentPlayerNum:a.data.roomState.currentPlayerNum,playerNum:a.data.roomState.playerNum,name:e.name}),console.log(a),!0})).catch((function(t){return console.log(t),!1}))},startGame:function(t){te.a.post("https://afe5o5.fn.thelarkcloud.com/startGame",{roomID:t.state.roomID}).then((function(e){console.log("bro this is my response",e),t.dispatch("gameStatus/initGame",e.data.gameState,{root:!0})})).catch((function(t){console.log(t)}))},updateCurrNum:function(t,e){console.log("roomID",e),te.a.post("https://afe5o5.fn.thelarkcloud.com/joinRoom",{roomID:e.roomID}).then((function(e){return console.log(e.data.roomState.currentPlayerNum),t.rootState.gameStatus.isStart=e.data.isStart,t.commit("UPDATE_CURR_NUM",{currentPlayerNum:e.data.roomState.currentPlayerNum}),!0})).catch((function(t){return console.log(t),!1}))}},ke={namespaced:!0,state:ye,getters:be,actions:_e,mutations:Ie},Ce=(a("c740"),{playerInf:[],restNum:{restWolves:0,restVillagers:0,restDeities:0},dayCount:0,activeState:[0,0],waitingState:{killedByKnife:-1,killedByPoison:-1,savedByCured:-1},isStart:!1,hunterShoot:!1,isAbort:!1}),we={canHunterShoot:function(t){var e=t.playerInf.findIndex((function(t){return"hunter"===t.identity}));return t.waitingState.killedByPoison!==e&&-100!==t.waitingState.killedByPoison},canHeDie:function(t){return t.waitingState.killedByKnife!=t.waitingState.savedByCured},endGame:function(t,e,a){if(0==t.restNum.restWolves)return 1;if(a.gameInit.killSideOrAll){if(0==t.restNum.restVillagers||0==t.restNum.restDeities)return 2}else if(0==t.restNum.restVillagers&&0==t.restNum.restDeities)return 2;return t.isStart?0:3}},Oe=(Ut={},Object(Qt["a"])(Ut,se,(function(t,e){t.playerInf=e.playerInf,t.restNum=e.restNum,t.dayCount=e.dayCount,t.activeState=e.activeState,t.isStart=!0,t.hunterShoot=!1})),Object(Qt["a"])(Ut,ce,(function(t,e){return console.log(t),console.log(e),t.playerInf[e].isAlive>0&&(t.waitingState.killedByKnife=e,!0)})),Object(Qt["a"])(Ut,ue,(function(t,e){return t.playerInf[e].isAlive>0&&t.waitingState.killedByPoison>-2&&(t.waitingState.killedByPoison=e,!0)})),Object(Qt["a"])(Ut,me,(function(t){var e=t.waitingState.killedByKnife;return t.playerInf[e].isAlive>0&&t.waitingState.savedByCured>-2&&(t.waitingState.savedByCured=e,!0)})),Object(Qt["a"])(Ut,fe,(function(t,e){if(t.playerInf[e].isAlive>0){var a=t.playerInf[e];return a.isAlive=-4,"villager"==a.identity?t.restNum.restVillagers--:"wolf"==a.identity?t.restNum.restWolves--:t.restNum.restDeities--,t.hunterShoot=!0,!0}return!1})),Object(Qt["a"])(Ut,de,(function(t,e){if(t.playerInf[e].isAlive>0){var a=t.playerInf[e];return a.isAlive=-2,"villager"==a.identity?t.restNum.restVillagers--:"wolf"==a.identity?t.restNum.restWolves--:t.restNum.restDeities--,a.identity,!0}return!1})),Object(Qt["a"])(Ut,re,(function(t,e){t.playerInf=e.playerInf,t.isStart=e.isStart,t.dayCount=e.dayCount,t.activeState=e.activeState})),Object(Qt["a"])(Ut,oe,(function(t,e){console.log("I am here!");var a,i=t.activeState,n=3,s=3,r=1,o=Object(ot["a"])(e);try{for(o.s();!(a=o.n()).done;){var l=a.value;"prophet"===l?r++:"witch"==l?(r++,r++):("guard"==l||"hunter"==l)&&r++}}catch(c){o.e(c)}finally{o.f()}console.log("nightNum"+r),console.log(r),console.log(t.activeState),0===t.dayCount?0===i[0]?i[1]+1<r?t.activeState.splice(1,1,t.activeState[1]+1):(t.activeState.splice(1,1,0),t.activeState.splice(0,1,1)):i[1]+1<s?t.activeState.splice(1,1,t.activeState[1]+1):(t.activeState.splice(1,1,0),t.activeState.splice(0,1,0)):0===i[0]?i[1]+1<r?t.activeState.splice(1,1,t.activeState[1]+1):(t.activeState.splice(1,1,0),t.activeState.splice(0,1,1)):i[1]+1<n?t.activeState.splice(1,1,t.activeState[1]+1):(t.activeState.splice(1,1,0),t.activeState.splice(0,1,0))})),Object(Qt["a"])(Ut,he,(function(t,e){var a,i=1,n=Object(ot["a"])(e.deitiesList);try{for(n.s();!(a=n.n()).done;){var s=a.value;"prophet"==s?i++:"witch"==s?(i++,i++):("guard"==s||"hunter"==s)&&i++}}catch(l){n.e(l)}finally{n.f()}if(console.log("nightNum"+i),1===t.activeState[0]&&0==t.activeState[1]){if(e.canHeDie){var r=t.playerInf[t.waitingState.killedByKnife];console.log("diedPlayer",r),r.isAlive=-1,"villager"==r.identity?t.restNum.restVillagers--:"wolf"==r.identity?t.restNum.restWolves--:t.restNum.restDeities--}else t.waitingState.savedByCured=-2;if(-1!==t.waitingState.killedByPoison){var o=t.playerInf[t.waitingState.killedByPoison];o.isAlive=-3,"villager"==o.identity?t.restNum.restVillagers--:"wolf"==o.identity?t.restNum.restWolves--:t.restNum.restDeities--,"hunter"==t.playerInf[t.waitingState.killedByPoison].identity?t.waitingState.killedByPoison=-100:t.waitingState.killedByPoison=-2}t.waitingState={killedByKnife:-1,killedByPoison:Math.min(-1,t.waitingState.killedByPoison),savedByCured:Math.min(-1,t.waitingState.savedByCured)}}else 0==t.activeState[0]&&0==t.activeState[1]&&t.dayCount++})),Object(Qt["a"])(Ut,le,(function(t){t.isStart=!1})),Ut),$e={initGame:function(t,e){console.log(e),t.commit("INIT_GAME",e),t.rootState.ranking.rankings=e.rankings},markPoison:function(t,e){t.commit("MARK_POISON",e)},markKnife:function(t,e){t.commit("MARK_KNIFE",e)},markCure:function(t,e){t.commit("MARK_CURE",e)},shootOut:function(t,e){t.commit("SHOOT_OUT",e)},voteOut:function(t,e){t.commit("VOTE_OUT",e)},nextStep:function(t){console.log("sss"),t.commit("NEXT_STEP",t.rootState.gameInit.deitiesList),t.commit("CHECK_EVENTS",{canHeDie:t.getters.canHeDie,canHunterShoot:t.getters.canHunterShoot,deitiesList:t.rootState.gameInit.deitiesList});var e=t.getters.endGame;if(e){if(0===t.rootState.ranking.rankings.length){var a,i=Object(ot["a"])(t.state.playerInf);try{for(i.s();!(a=i.n()).done;){var n=a.value;t.rootState.ranking.rankings.push({name:n.name,winTimes:0})}}catch(s){i.e(s)}finally{i.f()}}t.dispatch("ranking/seperWinAndLose",{flag:e,playerInf:t.state.playerInf},{root:!0}),t.commit("GAME_OVER")}te.a.post("https://afe5o5.fn.thelarkcloud.com/changeState",{playerInf:t.state.playerInf,isStart:t.state.isStart,dayCount:t.state.dayCount,activeState:t.state.activeState,waitingState:t.state.waitingState,roomID:t.rootState.gameInit.roomID,isAbort:t.state.isAbort}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},abort:function(t){t.state.isAbort=!0,te.a.post("https://afe5o5.fn.thelarkcloud.com/changeState",{playerInf:t.state.playerInf,isStart:t.state.isStart,dayCount:t.state.dayCount,activeState:t.state.activeState,waitingState:t.state.waitingState,roomID:t.rootState.gameInit.roomID,isAbort:t.state.isAbort}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},updateStatus:function(t,e){te.a.post("https://afe5o5.fn.thelarkcloud.com/getState",{roomID:e.roomID,name:e.name}).then((function(e){return t.commit("UPDATE_STATUS",{isStart:e.data.gameState.isStart,playerInf:e.data.gameState.playerInf,dayCount:e.data.gameState.dayCount,activeState:e.data.gameState.activeState}),console.log(e),!0})).catch((function(t){return console.log(t),!1}))},abortGame:function(t){t.commit("GAME_OVER"),t.dispatch("gameInit/startGame",{root:!0})}},Ne={namespaced:!0,state:Ce,getters:we,actions:$e,mutations:Oe},De={rankings:[],winGroup:[],loseGroup:[]},Ve={},xe=(Jt={},Object(Qt["a"])(Jt,Se,(function(t){t.rankings=t.rankings.sort((function(t,e){return e.winTimes-t.winTimes}))})),Object(Qt["a"])(Jt,pe,(function(t,e){var a,i=[],n=[],s=Object(ot["a"])(e);try{var r=function(){var e=a.value;"wolf"==e.identity?(i.push({name:e.name,identity:e.identity}),t.rankings.find((function(t){return t.name==e.name})).winTimes++):n.push({name:e.name,identity:e.identity})};for(s.s();!(a=s.n()).done;)r()}catch(o){s.e(o)}finally{s.f()}console.log("winGroup",i),t.winGroup=i,t.loseGroup=n})),Object(Qt["a"])(Jt,ge,(function(t,e){var a,i=[],n=[],s=Object(ot["a"])(e);try{var r=function(){var e=a.value;"wolf"==e.identity?n.push({name:e.name,identity:e.identity}):(i.push({name:e.name,identity:e.identity}),t.rankings.find((function(t){return t.name==e.name})).winTimes++)};for(s.s();!(a=s.n()).done;)r()}catch(o){s.e(o)}finally{s.f()}t.winGroup=i,t.loseGroup=n})),Object(Qt["a"])(Jt,ve,(function(t,e){t.rankings=e.rankings,t.winGroup=e.winGroup,t.loseGroup=e.loseGroup})),Jt),Ae={sortedList:function(t){t.commit("SORT_LIST")},seperWinAndLose:function(t,e){2==e.flag?t.dispatch("wolfWin",e.playerInf):1==e.flag&&t.dispatch("kindWin",e.playerInf)},wolfWin:function(t,e){t.commit("WOLF_WIN",e),console.log(t.state),te.a.post("https://afe5o5.fn.thelarkcloud.com/setRank",{roomID:t.rootState.gameInit.roomID,rankings:t.state.rankings,winGroup:t.state.winGroup,loseGroup:t.state.loseGroup}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},kindWin:function(t,e){t.commit("KIND_WIN",e),console.log(t.state),te.a.post("https://afe5o5.fn.thelarkcloud.com/setRank",{roomID:t.rootState.gameInit.roomID,rankings:t.state.rankings,winGroup:t.state.winGroup,loseGroup:t.state.loseGroup}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},updateRankings:function(t){console.log("roomID",t.rootState.gameInit.roomID),te.a.post("https://afe5o5.fn.thelarkcloud.com/getRank",{roomID:t.rootState.gameInit.roomID}).then((function(e){return console.log(e),t.commit("UPDATE_RANKINGS",e.data),!0})).catch((function(t){return console.log(t),!1}))}},je={namespaced:!0,state:De,getters:Ve,actions:Ae,mutations:xe},Be=a("0e44");i["a"].use(zt["a"]);var Te=new zt["a"].Store({modules:{gameInit:ke,gameStatus:Ne,ranking:je},plugins:[Object(Be["a"])({storage:window.sessionStorage})]}),Pe=a("f309");i["a"].use(Pe["a"]);var Re=new Pe["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:Yt,store:Te,vuetify:Re,render:function(t){return t(I)}}).$mount("#app")},"59ca":function(t,e,a){},"5e01":function(t,e,a){},"672b":function(t,e,a){"use strict";var i=a("fae6"),n=a.n(i);n.a},"6a0c":function(t,e,a){t.exports=a.p+"img/nv.7b78aab2.jpg"},"8a23":function(t,e,a){},"8fb3":function(t,e,a){"use strict";var i=a("a0b4"),n=a.n(i);n.a},"94b1":function(t,e,a){t.exports=a.p+"img/prophet.e25a5bb3.jpg"},a0b4:function(t,e,a){},ba14:function(t,e,a){t.exports=a.p+"img/wolf1.19da7e2a.jpg"},c6b3:function(t,e,a){},ce5e:function(t,e,a){"use strict";var i=a("de7c"),n=a.n(i);n.a},d675:function(t,e,a){"use strict";var i=a("5e01"),n=a.n(i);n.a},de7c:function(t,e,a){},f4cf:function(t,e,a){},f805:function(t,e,a){"use strict";var i=a("f4cf"),n=a.n(i);n.a},f820:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("Header",[t._v("我是玩家")]),i("v-container",{attrs:{fluid:""}},[i("div",{staticClass:"rm"},[t._v(" 注意哟！ "),i("span",[t._v("认识新朋友从不尬聊开始")])]),i("div",{staticClass:"ip"},[i("v-text-field",{attrs:{label:"玩家名",rules:t.rules,"hide-details":"auto",hint:"请输入昵称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("v-text-field",{attrs:{label:"房间号",hint:"请输入房间号"},model:{value:t.roomID,callback:function(e){t.roomID=e},expression:"roomID"}})],1),i("div",[i("v-btn",{staticClass:"btn1",attrs:{depressed:"","x-large":"",color:"primary",to:"/wait"},nativeOn:{click:function(e){return t.join(e)}}},[t._v("加入房间")])],1),i("img",{attrs:{alt:"WolfKill logo",src:a("ba14")}})])],1)},n=[],s=(a("b0c0"),a("0418")),r={components:{Header:s["a"]},data:function(){return{name:name,roomID:"",rules:[function(t){return!!t||"Required."},function(t){return t&&t.length>=3||"Min 3 characters"}]}},methods:{join:function(){this.$store.dispatch("gameInit/joinRoom",{roomID:this.roomID,name:this.name})}}},o=r,l=(a("f805"),a("2877")),c=a("6544"),u=a.n(c),m=a("8336"),f=a("a523"),d=a("8654"),h=Object(l["a"])(o,i,n,!1,null,"14399a04",null);e["default"]=h.exports;u()(h,{VBtn:m["a"],VContainer:f["a"],VTextField:d["a"]})},fae6:function(t,e,a){}});
//# sourceMappingURL=app.b023190f.js.map