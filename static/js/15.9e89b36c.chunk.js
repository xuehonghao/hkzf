(this.webpackJsonphkzf=this.webpackJsonphkzf||[]).push([[15],{351:function(e,t,n){},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(52);var r=n(53),a=n.n(r),i=n(74),c=n.n(i),o=n(39),u="https://api-haoke-web.itheima.net",s=c.a.create({baseURL:u});s.interceptors.request.use((function(e){var t=e.url,n=e.headers;return t.startsWith("/user")&&!["/user/registered","/user/login"].includes(t)&&(n.authorization=Object(o.b)()),a.a.loading("\u52a0\u8f7d\u4e2d...",0),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){var t={status:e.data.status,description:e.data.description,data:e.data.body};return a.a.hide(),t}),(function(e){return Promise.reject(e)})),t.b=s},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return l}));var r=n(41),a=n.n(r),i=n(42),c=n(46),o=function(e){localStorage.setItem("token",e)},u=function(){return localStorage.getItem("token")},s=function(){localStorage.removeItem("token")},l=function(){return!!u()},f=function(e){sessionStorage.setItem("currCity",JSON.stringify(e))},d=function(){var e=sessionStorage.getItem("currCity");return e?JSON.parse(e):null},m=function(){var e=Object(i.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d(),e.next=3,new Promise((function(e,t){(new window.BMap.LocalCity).get((function(t){e(t.name)}))}));case 3:if(n=e.sent,t){e.next=8;break}return e.abrupt("return",new Promise(function(){var e=Object(i.a)(a.a.mark((function e(t,r){var i,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.b)(n);case 2:i=e.sent,o=i.status,u=i.data,200===o?(f(u),t(u)):r("error");case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",Promise.resolve(t));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},400:function(e,t,n){"use strict";n.r(t);n(58);var r=n(60),a=n.n(r),i=(n(72),n(73)),c=n.n(i),o=(n(52),n(53)),u=n.n(o),s=n(41),l=n.n(s),f=n(42),d=n(44),m=n(45),p=n(48),h=n(47),y=n(0),v=n.n(y),b=n(46),g=n(39),x=(n(204),n(223)),w=(n(351),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={cityIndex:[],cityList:{},activeIndex:0},e.loadData=Object(f.a)(l.a.mark((function t(){var n,r,a,i,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.a)();case 2:return n=t.sent,r=e.formatCities(n),a=r.cityIndex,i=r.cityList,t.next=6,Object(b.d)();case 6:return c=t.sent,200===n.status&&(a.unshift("hot"),i.hot=c.data),t.next=10,Object(g.a)();case 10:o=t.sent,a.unshift("#"),i["#"]=[o],e.setState({cityIndex:a,cityList:i});case 14:case"end":return t.stop()}}),t)}))),e.formatCities=function(e){var t,n={};return 200!==e.status||(e.data.map((function(e){var t=e.pinyin.slice(0,1);t in n?n[t].push(e):n[t]=[e]})),t=Object.keys(n).sort()),{cityList:n,cityIndex:t}},e.getRowheight=function(t){var n=t.index,r=e.state,a=r.cityIndex;return 36+50*r.cityList[a[n]].length},e.changeCity=function(t){["\u5317\u4eac","\u4e0a\u6d77","\u5e7f\u5dde","\u6df1\u5733"].includes(t.label)?(Object(g.e)(t),e.props.history.goBack()):u.a.info("\u8be5\u57ce\u5e02\u6682\u65e0\u623f\u6e90\u6570\u636e\uff01",2)},e.renderCityIndex=function(){var t=e.state,n=t.cityIndex,r=t.activeIndex;return n.map((function(t,n){return v.a.createElement("li",{key:t,className:"city-index-item",onClick:function(){e.listRef.scrollToRow(n)}},v.a.createElement("span",{className:r===n?"index-active":""},e.formatLetter(t,!0)))}))},e.onRowsRendered=function(t){var n=t.startIndex;e.state.activeIndex!==n&&e.setState({activeIndex:n})},e.rowRenderer=function(t){var n=t.key,r=t.index,a=(t.isScrolling,t.isVisible,t.style);return v.a.createElement("div",{key:n,style:a,className:"city-item"},v.a.createElement("div",{className:"title"},e.formatLetter(e.state.cityIndex[r])),e.state.cityList[e.state.cityIndex[r]].map((function(t,n){return v.a.createElement("div",{className:"name",onClick:function(){e.changeCity(t)},key:n},t.label)})))},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"formatLetter",value:function(e,t){switch(e){case"hot":return t?"\u70ed":"\u70ed\u95e8\u57ce\u5e02";case"#":return t?"\u5f53":"\u5f53\u524d\u57ce\u5e02";default:return e.toUpperCase()}}},{key:"render",value:function(){var e=this;return v.a.createElement("div",{className:"cityList"},v.a.createElement(a.a,{mode:"dark",icon:v.a.createElement(c.a,{type:"left"}),onLeftClick:function(){return e.props.history.goBack()}},"\u57ce\u5e02\u9009\u62e9"),v.a.createElement(x.a,null,(function(t){var n=t.height,r=t.width;return v.a.createElement(x.c,{width:r,height:n,rowCount:e.state.cityIndex.length,rowHeight:e.getRowheight,rowRenderer:e.rowRenderer,scrollToAlignment:"start",onRowsRendered:e.onRowsRendered,ref:function(t){e.listRef=t}})})),v.a.createElement("ul",{className:"city-index"},this.renderCityIndex()))}}]),n}(y.Component));t.default=w},46:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return u}));var r=n(37),a=function(e){return r.b.get("/area/info",{params:{name:e}})},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.b.get("/area/city",{params:{level:e}})},c=function(){return r.b.get("/area/hot")},o=function(e,t){return r.b.get("/area/community",{params:{name:e,id:t}})},u=function(e){return r.b.get("/area/map",{params:{id:e}})}},58:function(e,t,n){"use strict";n(38),n(59)},59:function(e,t,n){},60:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(35)),a=l(n(31)),i=l(n(32)),c=l(n(33)),o=l(n(34)),u=l(n(36)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0));function l(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},d=function(e){function t(){return(0,a.default)(this,t),(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.className,a=e.children,i=e.mode,c=e.icon,o=e.onLeftClick,l=e.leftContent,d=e.rightContent,m=f(e,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return s.createElement("div",(0,r.default)({},m,{className:(0,u.default)(n,t,t+"-"+i)}),s.createElement("div",{className:t+"-left",role:"button",onClick:o},c?s.createElement("span",{className:t+"-left-icon","aria-hidden":"true"},c):null,l),s.createElement("div",{className:t+"-title"},a),s.createElement("div",{className:t+"-right"},d))}}]),t}(s.Component);t.default=d,d.defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}},e.exports=t.default}}]);
//# sourceMappingURL=15.9e89b36c.chunk.js.map