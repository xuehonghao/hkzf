/*! For license information please see 2.3bb29c55.chunk.js.LICENSE.txt */
(this.webpackJsonphkzf=this.webpackJsonphkzf||[]).push([[2],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(n(35)),o=d(n(44)),r=d(n(31)),s=d(n(32)),a=d(n(33)),l=d(n(34)),u=d(n(36)),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function d(t){return t&&t.__esModule?t:{default:t}}var p=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&(n[i[o]]=t[i[o]])}return n},h=function(t){function e(){return(0,r.default)(this,e),(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,l.default)(e,t),(0,s.default)(e,[{key:"render",value:function(){var t,e=this.props,n=e.direction,r=e.wrap,s=e.justify,a=e.align,l=e.alignContent,d=e.className,h=e.children,f=e.prefixCls,g=e.style,v=p(e,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),y=(0,u.default)(f,d,(t={},(0,o.default)(t,f+"-dir-row","row"===n),(0,o.default)(t,f+"-dir-row-reverse","row-reverse"===n),(0,o.default)(t,f+"-dir-column","column"===n),(0,o.default)(t,f+"-dir-column-reverse","column-reverse"===n),(0,o.default)(t,f+"-nowrap","nowrap"===r),(0,o.default)(t,f+"-wrap","wrap"===r),(0,o.default)(t,f+"-wrap-reverse","wrap-reverse"===r),(0,o.default)(t,f+"-justify-start","start"===s),(0,o.default)(t,f+"-justify-end","end"===s),(0,o.default)(t,f+"-justify-center","center"===s),(0,o.default)(t,f+"-justify-between","between"===s),(0,o.default)(t,f+"-justify-around","around"===s),(0,o.default)(t,f+"-align-start","start"===a),(0,o.default)(t,f+"-align-center","center"===a),(0,o.default)(t,f+"-align-end","end"===a),(0,o.default)(t,f+"-align-baseline","baseline"===a),(0,o.default)(t,f+"-align-stretch","stretch"===a),(0,o.default)(t,f+"-align-content-start","start"===l),(0,o.default)(t,f+"-align-content-end","end"===l),(0,o.default)(t,f+"-align-content-center","center"===l),(0,o.default)(t,f+"-align-content-between","between"===l),(0,o.default)(t,f+"-align-content-around","around"===l),(0,o.default)(t,f+"-align-content-stretch","stretch"===l),t));return c.createElement("div",(0,i.default)({className:y,style:g},v),h)}}]),e}(c.Component);e.default=h,h.defaultProps={prefixCls:"am-flexbox",align:"center"},t.exports=e.default},101:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=c(n(35)),o=c(n(31)),r=c(n(32)),s=c(n(33)),a=c(n(34)),l=c(n(36)),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function c(t){return t&&t.__esModule?t:{default:t}}var d=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&(n[i[o]]=t[i[o]])}return n},p=function(t){function e(){return(0,o.default)(this,e),(0,s.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,a.default)(e,t),(0,r.default)(e,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.className,o=t.prefixCls,r=t.style,s=d(t,["children","className","prefixCls","style"]),a=(0,l.default)(o+"-item",n);return u.createElement("div",(0,i.default)({className:a,style:r},s),e)}}]),e}(u.Component);e.default=p,p.defaultProps={prefixCls:"am-flexbox"},t.exports=e.default},114:function(t,e,n){"use strict";n(38),n(332)},115:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=p(n(44)),o=p(n(35)),r=p(n(31)),s=p(n(32)),a=p(n(33)),l=p(n(34)),u=p(n(36)),c=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),d=p(n(403));function p(t){return t&&t.__esModule?t:{default:t}}var h=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&(n[i[o]]=t[i[o]])}return n},f=function(t){function e(t){(0,r.default)(this,e);var n=(0,a.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onChange=function(t){n.setState({selectedIndex:t},(function(){n.props.afterChange&&n.props.afterChange(t)}))},n.state={selectedIndex:n.props.selectedIndex},n}return(0,l.default)(e,t),(0,s.default)(e,[{key:"render",value:function(){var t=this.props,e=t.infinite,n=t.selectedIndex,r=t.beforeChange,s=(t.afterChange,t.dots),a=h(t,["infinite","selectedIndex","beforeChange","afterChange","dots"]),l=a.prefixCls,p=a.dotActiveStyle,f=a.dotStyle,g=a.className,v=a.vertical,y=(0,o.default)({},a,{wrapAround:e,slideIndex:n,beforeSlide:r}),S=[];s&&(S=[{component:function(t){for(var e=t.slideCount,n=t.slidesToScroll,o=t.currentSlide,r=[],s=0;s<e;s+=n)r.push(s);var a=r.map((function(t){var e=(0,u.default)(l+"-wrap-dot",(0,i.default)({},l+"-wrap-dot-active",t===o)),n=t===o?p:f;return c.createElement("div",{className:e,key:t},c.createElement("span",{style:n}))}));return c.createElement("div",{className:l+"-wrap"},a)},position:"BottomCenter"}]);var m=(0,u.default)(l,g,(0,i.default)({},l+"-vertical",v));return c.createElement(d.default,(0,o.default)({},y,{className:m,decorators:S,afterSlide:this.onChange}))}}]),e}(c.Component);e.default=f,f.defaultProps={prefixCls:"am-carousel",dots:!0,arrows:!1,autoplay:!1,infinite:!1,cellAlign:"center",selectedIndex:0,dotStyle:{},dotActiveStyle:{}},t.exports=e.default},332:function(t,e,n){},333:function(t,e,n){var i;!function(){"use strict";var o=!("undefined"===typeof window||!window.document||!window.document.createElement),r={canUseDOM:o,canUseWorkers:"undefined"!==typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(i=function(){return r}.call(e,n,e,t))||(t.exports=i)}()},334:function(t,e,n){(function(e){for(var i=n(335),o="undefined"===typeof window?e:window,r=["moz","webkit"],s="AnimationFrame",a=o["request"+s],l=o["cancel"+s]||o["cancelRequest"+s],u=0;!a&&u<r.length;u++)a=o[r[u]+"Request"+s],l=o[r[u]+"Cancel"+s]||o[r[u]+"CancelRequest"+s];if(!a||!l){var c=0,d=0,p=[];a=function(t){if(0===p.length){var e=i(),n=Math.max(0,1e3/60-(e-c));c=n+e,setTimeout((function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return p.push({handle:++d,callback:t,cancelled:!1}),d},l=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return a.call(o,t)},t.exports.cancel=function(){l.apply(o,arguments)},t.exports.polyfill=function(t){t||(t=o),t.requestAnimationFrame=a,t.cancelAnimationFrame=l}}).call(this,n(17))},335:function(t,e,n){(function(e){(function(){var n,i,o,r,s,a;"undefined"!==typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!==typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-s)/1e6},i=e.hrtime,r=(n=function(){var t;return 1e9*(t=i())[0]+t[1]})(),a=1e9*e.uptime(),s=r-a):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,n(199))},403:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var i=n(35),o=n.n(i),r=n(31),s=n.n(r),a=n(32),l=n.n(a),u=n(33),c=n.n(u),d=n(34),p=n.n(d),h=n(0),f=n.n(h),g=[{component:function(t){function e(){s()(this,e);var t=c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.previousSlide()},t}return p()(e,t),l()(e,[{key:"render",value:function(){return f.a.createElement("button",{style:this.getButtonStyles(0===this.props.currentSlide&&!this.props.wrapAround),onClick:this.handleClick},"PREV")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(f.a.Component),position:"CenterLeft"},{component:function(t){function e(){s()(this,e);var t=c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.nextSlide&&t.props.nextSlide()},t}return p()(e,t),l()(e,[{key:"render",value:function(){return f.a.createElement("button",{style:this.getButtonStyles(this.props.currentSlide+this.props.slidesToScroll>=this.props.slideCount&&!this.props.wrapAround),onClick:this.handleClick},"NEXT")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(f.a.Component),position:"CenterRight"},{component:function(t){function e(){return s()(this,e),c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return p()(e,t),l()(e,[{key:"render",value:function(){var t=this,e=this.getIndexes(this.props.slideCount,this.props.slidesToScroll);return f.a.createElement("ul",{style:this.getListStyles()},e.map((function(e){return f.a.createElement("li",{style:t.getListItemStyles(),key:e},f.a.createElement("button",{style:t.getButtonStyles(t.props.currentSlide===e),onClick:t.props.goToSlide&&t.props.goToSlide.bind(null,e)},"\u2022"))})))}},{key:"getIndexes",value:function(t,e){for(var n=[],i=0;i<t;i+=e)n.push(i);return n}},{key:"getListStyles",value:function(){return{position:"relative",margin:0,top:-10,padding:0}}},{key:"getListItemStyles",value:function(){return{listStyleType:"none",display:"inline-block"}}},{key:"getButtonStyles",value:function(t){return{border:0,background:"transparent",color:"black",cursor:"pointer",padding:10,outline:0,fontSize:24,opacity:t?1:.5}}}]),e}(f.a.Component),position:"BottomCenter"}],v=n(333),y=n.n(v),S=n(334),m=n.n(S);var b={ADDITIVE:"ADDITIVE",DESTRUCTIVE:"DESTRUCTIVE"},w=function(t,e,n){null!==t&&"undefined"!==typeof t&&(t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n)},T=function(t,e,n){null!==t&&"undefined"!==typeof t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null)},k=function(t){function e(t){s()(this,e);var n=c()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._rafCb=function(){var t=n.state;if(0!==t.tweenQueue.length){for(var e=Date.now(),i=[],o=0;o<t.tweenQueue.length;o++){var r=t.tweenQueue[o],s=r.initTime,a=r.config;e-s<a.duration?i.push(r):a.onEnd&&a.onEnd()}-1!==n._rafID&&(n.setState({tweenQueue:i}),n._rafID=m()(n._rafCb))}},n.handleClick=function(t){!0===n.clickSafe&&(t.preventDefault(),t.stopPropagation(),t.nativeEvent&&t.nativeEvent.stopPropagation())},n.autoplayIterator=function(){if(n.props.wrapAround)return n.nextSlide();n.state.currentSlide!==n.state.slideCount-n.state.slidesToShow?n.nextSlide():n.stopAutoplay()},n.goToSlide=function(t){var e=n.props,i=e.beforeSlide,o=e.afterSlide;if(t>=f.a.Children.count(n.props.children)||t<0){if(!n.props.wrapAround)return;if(t>=f.a.Children.count(n.props.children))return i(n.state.currentSlide,0),n.setState({currentSlide:0},(function(){n.animateSlide(null,null,n.getTargetLeft(null,t),(function(){n.animateSlide(null,.01),o(0),n.resetAutoplay(),n.setExternalData()}))}));var r=f.a.Children.count(n.props.children)-n.state.slidesToScroll;return i(n.state.currentSlide,r),n.setState({currentSlide:r},(function(){n.animateSlide(null,null,n.getTargetLeft(null,t),(function(){n.animateSlide(null,.01),o(r),n.resetAutoplay(),n.setExternalData()}))}))}i(n.state.currentSlide,t),n.setState({currentSlide:t},(function(){n.animateSlide(),n.props.afterSlide(t),n.resetAutoplay(),n.setExternalData()}))},n.nextSlide=function(){var t=f.a.Children.count(n.props.children),e=n.props.slidesToShow;if("auto"===n.props.slidesToScroll&&(e=n.state.slidesToScroll),!(n.state.currentSlide>=t-e)||n.props.wrapAround)if(n.props.wrapAround)n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);else{if(1!==n.props.slideWidth)return n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);n.goToSlide(Math.min(n.state.currentSlide+n.state.slidesToScroll,t-e))}},n.previousSlide=function(){n.state.currentSlide<=0&&!n.props.wrapAround||(n.props.wrapAround?n.goToSlide(n.state.currentSlide-n.state.slidesToScroll):n.goToSlide(Math.max(0,n.state.currentSlide-n.state.slidesToScroll)))},n.onResize=function(){n.setDimensions()},n.onReadyStateChange=function(){n.setDimensions()},n.state={currentSlide:n.props.slideIndex,dragging:!1,frameWidth:0,left:0,slideCount:0,slidesToScroll:n.props.slidesToScroll,slideWidth:0,top:0,tweenQueue:[]},n.touchObject={},n.clickSafe=!0,n}return p()(e,t),l()(e,[{key:"componentWillMount",value:function(){this.setInitialDimensions()}},{key:"componentDidMount",value:function(){this.setDimensions(),this.bindEvents(),this.setExternalData(),this.props.autoplay&&this.startAutoplay()}},{key:"componentWillReceiveProps",value:function(t){this.setState({slideCount:t.children.length}),this.setDimensions(t),this.props.slideIndex!==t.slideIndex&&t.slideIndex!==this.state.currentSlide&&this.goToSlide(t.slideIndex),this.props.autoplay!==t.autoplay&&(t.autoplay?this.startAutoplay():this.stopAutoplay())}},{key:"componentWillUnmount",value:function(){this.unbindEvents(),this.stopAutoplay(),m.a.cancel(this._rafID),this._rafID=-1}},{key:"tweenState",value:function(t,e){var n=this,i=e.easing,o=e.duration,r=e.delay,s=e.beginValue,a=e.endValue,l=e.onEnd,u=e.stackBehavior;this.setState((function(e){var c=e,d=void 0,p=void 0;if("string"===typeof t)d=t,p=t;else{for(var h=0;h<t.length-1;h++)c=c[t[h]];d=t[t.length-1],p=t.join("|")}var f={easing:i,duration:null==o?300:o,delay:null==r?0:r,beginValue:null==s?c[d]:s,endValue:a,onEnd:l,stackBehavior:u||"ADDITIVE"},g=e.tweenQueue;return f.stackBehavior===b.DESTRUCTIVE&&(g=e.tweenQueue.filter((function(t){return t.pathHash!==p}))),g.push({pathHash:p,config:f,initTime:Date.now()+f.delay}),c[d]=f.endValue,1===g.length&&(n._rafID=m()(n._rafCb)),{tweenQueue:g}}))}},{key:"getTweeningValue",value:function(t){var e=this.state,n=void 0,i=void 0;if("string"===typeof t)n=e[t],i=t;else{n=e;for(var o=0;o<t.length;o++)n=n[t[o]];i=t.join("|")}for(var r=Date.now(),s=0;s<e.tweenQueue.length;s++){var a=e.tweenQueue[s],l=a.pathHash,u=a.initTime,c=a.config;if(l===i){var d=r-u>c.duration?c.duration:Math.max(0,r-u);n+=(0===c.duration?c.endValue:c.easing(d,c.beginValue,c.endValue,c.duration))-c.endValue}}return n}},{key:"render",value:function(){var t=this,e=f.a.Children.count(this.props.children)>1?this.formatChildren(this.props.children):this.props.children;return f.a.createElement("div",{className:["slider",this.props.className||""].join(" "),ref:"slider",style:o()({},this.getSliderStyles(),this.props.style)},f.a.createElement("div",o()({className:"slider-frame",ref:"frame",style:this.getFrameStyles()},this.getTouchEvents(),this.getMouseEvents(),{onClick:this.handleClick}),f.a.createElement("ul",{className:"slider-list",ref:"list",style:this.getListStyles()},e)),this.props.decorators?this.props.decorators.map((function(e,n){return f.a.createElement("div",{style:o()({},t.getDecoratorStyles(e.position),e.style||{}),className:"slider-decorator-"+n,key:n},f.a.createElement(e.component,{currentSlide:t.state.currentSlide,slideCount:t.state.slideCount,frameWidth:t.state.frameWidth,slideWidth:t.state.slideWidth,slidesToScroll:t.state.slidesToScroll,cellSpacing:t.props.cellSpacing,slidesToShow:t.props.slidesToShow,wrapAround:t.props.wrapAround,nextSlide:t.nextSlide,previousSlide:t.previousSlide,goToSlide:t.goToSlide}))})):null,f.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:this.getStyleTagStyles()}}))}},{key:"getTouchEvents",value:function(){var t=this;return!1===this.props.swiping?null:{onTouchStart:function(e){t.touchObject={startX:e.touches[0].pageX,startY:e.touches[0].pageY},t.handleMouseOver()},onTouchMove:function(e){var n=t.swipeDirection(t.touchObject.startX,e.touches[0].pageX,t.touchObject.startY,e.touches[0].pageY);0!==n&&e.preventDefault();var i=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.touches[0].pageY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.touches[0].pageX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.touches[0].pageX,endY:e.touches[0].pageY,length:i,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})},onTouchEnd:function(e){t.handleSwipe(e),t.handleMouseOut()},onTouchCancel:function(e){t.handleSwipe(e)}}}},{key:"getMouseEvents",value:function(){var t=this;return!1===this.props.dragging?null:{onMouseOver:function(){t.handleMouseOver()},onMouseOut:function(){t.handleMouseOut()},onMouseDown:function(e){t.touchObject={startX:e.clientX,startY:e.clientY},t.setState({dragging:!0})},onMouseMove:function(e){if(t.state.dragging){var n=t.swipeDirection(t.touchObject.startX,e.clientX,t.touchObject.startY,e.clientY);0!==n&&e.preventDefault();var i=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.clientY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.clientX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.clientX,endY:e.clientY,length:i,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})}},onMouseUp:function(e){t.state.dragging&&t.handleSwipe(e)},onMouseLeave:function(e){t.state.dragging&&t.handleSwipe(e)}}}},{key:"handleMouseOver",value:function(){this.props.autoplay&&(this.autoplayPaused=!0,this.stopAutoplay())}},{key:"handleMouseOut",value:function(){this.props.autoplay&&this.autoplayPaused&&(this.startAutoplay(),this.autoplayPaused=null)}},{key:"handleSwipe",value:function(t){"undefined"!==typeof this.touchObject.length&&this.touchObject.length>44?this.clickSafe=!0:this.clickSafe=!1;var e=this.props,n=e.slidesToShow,i=e.slidesToScroll,o=e.swipeSpeed;"auto"===i&&(n=this.state.slidesToScroll),f.a.Children.count(this.props.children)>1&&this.touchObject.length>this.state.slideWidth/n/o?1===this.touchObject.direction?this.state.currentSlide>=f.a.Children.count(this.props.children)-n&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.nextSlide():-1===this.touchObject.direction&&(this.state.currentSlide<=0&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.previousSlide()):this.goToSlide(this.state.currentSlide),this.touchObject={},this.setState({dragging:!1})}},{key:"swipeDirection",value:function(t,e,n,i){var o=t-e,r=n-i,s=Math.atan2(r,o),a=Math.round(180*s/Math.PI);return a<0&&(a=360-Math.abs(a)),a<=45&&a>=0||a<=360&&a>=315?1:a>=135&&a<=225?-1:!0===this.props.vertical?a>=35&&a<=135?1:-1:0}},{key:"startAutoplay",value:function(){f.a.Children.count(this.props.children)<=1||(this.autoplayID=setInterval(this.autoplayIterator,this.props.autoplayInterval))}},{key:"resetAutoplay",value:function(){this.props.resetAutoplay&&this.props.autoplay&&!this.autoplayPaused&&(this.stopAutoplay(),this.startAutoplay())}},{key:"stopAutoplay",value:function(){this.autoplayID&&clearInterval(this.autoplayID)}},{key:"animateSlide",value:function(t,e,n,i){this.tweenState(this.props.vertical?"top":"left",{easing:t||this.props.easing,duration:e||this.props.speed,endValue:n||this.getTargetLeft(),delay:null,beginValue:null,onEnd:i||null,stackBehavior:b})}},{key:"getTargetLeft",value:function(t,e){var n=void 0,i=e||this.state.currentSlide,o=this.props.cellSpacing;switch(this.props.cellAlign){case"left":n=0,n-=o*i;break;case"center":n=(this.state.frameWidth-this.state.slideWidth)/2,n-=o*i;break;case"right":n=this.state.frameWidth-this.state.slideWidth,n-=o*i}var r=this.state.slideWidth*i;return this.state.currentSlide>0&&i+this.state.slidesToScroll>=this.state.slideCount&&1!==this.props.slideWidth&&!this.props.wrapAround&&"auto"===this.props.slidesToScroll&&(r=this.state.slideWidth*this.state.slideCount-this.state.frameWidth,n=0,n-=o*(this.state.slideCount-1)),-1*(r-(n-=t||0))}},{key:"bindEvents",value:function(){y.a.canUseDOM&&(w(window,"resize",this.onResize),w(document,"readystatechange",this.onReadyStateChange))}},{key:"unbindEvents",value:function(){y.a.canUseDOM&&(T(window,"resize",this.onResize),T(document,"readystatechange",this.onReadyStateChange))}},{key:"formatChildren",value:function(t){var e=this,n=this.props.vertical?this.getTweeningValue("top"):this.getTweeningValue("left");return f.a.Children.map(t,(function(t,i){return f.a.createElement("li",{className:"slider-slide",style:e.getSlideStyles(i,n),key:i},t)}))}},{key:"setInitialDimensions",value:function(){var t=this,e=this.props,n=e.vertical,i=e.initialSlideHeight,o=e.initialSlideWidth,r=e.slidesToShow,s=e.cellSpacing,a=e.children,l=n?i||0:o||0,u=i?i*r:0,c=u+s*(r-1);this.setState({slideHeight:u,frameWidth:n?c:"100%",slideCount:f.a.Children.count(a),slideWidth:l},(function(){t.setLeft(),t.setExternalData()}))}},{key:"setDimensions",value:function(t){var e,n,i=this,o=void 0,r=void 0,s=(t=t||this.props).slidesToScroll,a=this.refs.frame,l=a.childNodes[0].childNodes[0];l?(l.style.height="auto",o=this.props.vertical?l.offsetHeight*t.slidesToShow:l.offsetHeight):o=100,r="number"!==typeof t.slideWidth?parseInt(t.slideWidth,10):t.vertical?o/t.slidesToShow*t.slideWidth:a.offsetWidth/t.slidesToShow*t.slideWidth,t.vertical||(r-=t.cellSpacing*((100-100/t.slidesToShow)/100)),n=o+t.cellSpacing*(t.slidesToShow-1),e=t.vertical?n:a.offsetWidth,"auto"===t.slidesToScroll&&(s=Math.floor(e/(r+t.cellSpacing))),this.setState({slideHeight:o,frameWidth:e,slideWidth:r,slidesToScroll:s,left:t.vertical?0:this.getTargetLeft(),top:t.vertical?this.getTargetLeft():0},(function(){i.setLeft()}))}},{key:"setLeft",value:function(){this.setState({left:this.props.vertical?0:this.getTargetLeft(),top:this.props.vertical?this.getTargetLeft():0})}},{key:"setExternalData",value:function(){this.props.data&&this.props.data()}},{key:"getListStyles",value:function(){var t=this.state.slideWidth*f.a.Children.count(this.props.children),e=this.props.cellSpacing,n=e*f.a.Children.count(this.props.children),i="translate3d("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px, 0)";return{transform:i,WebkitTransform:i,msTransform:"translate("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px)",position:"relative",display:"block",margin:this.props.vertical?e/2*-1+"px 0px":"0px "+e/2*-1+"px",padding:0,height:this.props.vertical?t+n:this.state.slideHeight,width:this.props.vertical?"auto":t+n,cursor:!0===this.state.dragging?"pointer":"inherit",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getFrameStyles",value:function(){return{position:"relative",display:"block",overflow:this.props.frameOverflow,height:this.props.vertical?this.state.frameWidth||"initial":"auto",margin:this.props.framePadding,padding:0,transform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",msTransform:"translate(0, 0)",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getSlideStyles",value:function(t,e){var n=this.getSlideTargetPosition(t,e),i=this.props.cellSpacing;return{position:"absolute",left:this.props.vertical?0:n,top:this.props.vertical?n:0,display:this.props.vertical?"block":"inline-block",listStyleType:"none",verticalAlign:"top",width:this.props.vertical?"100%":this.state.slideWidth,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",marginLeft:this.props.vertical?"auto":i/2,marginRight:this.props.vertical?"auto":i/2,marginTop:this.props.vertical?i/2:"auto",marginBottom:this.props.vertical?i/2:"auto"}}},{key:"getSlideTargetPosition",value:function(t,e){var n=this.state.frameWidth/this.state.slideWidth,i=(this.state.slideWidth+this.props.cellSpacing)*t,o=(this.state.slideWidth+this.props.cellSpacing)*n*-1;if(this.props.wrapAround){var r=Math.ceil(e/this.state.slideWidth);if(this.state.slideCount-r<=t)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount-t)*-1;var s=Math.ceil((Math.abs(e)-Math.abs(o))/this.state.slideWidth);if(1!==this.state.slideWidth&&(s=Math.ceil((Math.abs(e)-this.state.slideWidth)/this.state.slideWidth)),t<=s-1)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount+t)}return i}},{key:"getSliderStyles",value:function(){return{position:"relative",display:"block",width:this.props.width,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",visibility:this.state.slideWidth?"visible":"hidden"}}},{key:"getStyleTagStyles",value:function(){return".slider-slide > img {width: 100%; display: block;}"}},{key:"getDecoratorStyles",value:function(t){switch(t){case"TopLeft":return{position:"absolute",top:0,left:0};case"TopCenter":return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case"TopRight":return{position:"absolute",top:0,right:0};case"CenterLeft":return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"CenterCenter":return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"};case"CenterRight":return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"BottomLeft":return{position:"absolute",bottom:0,left:0};case"BottomCenter":return{position:"absolute",bottom:0,width:"100%",textAlign:"center"};case"BottomRight":return{position:"absolute",bottom:0,right:0};default:return{position:"absolute",top:0,left:0}}}}]),e}(f.a.Component);k.defaultProps={afterSlide:function(){},autoplay:!1,resetAutoplay:!0,swipeSpeed:12,autoplayInterval:3e3,beforeSlide:function(){},cellAlign:"left",cellSpacing:0,data:function(){},decorators:g,dragging:!0,easing:function(t,e,n,i){return(n-e)*Math.sqrt(1-(t=t/i-1)*t)+e},edgeEasing:function(t,e,n,i){return(n-e)*t/i+e},framePadding:"0px",frameOverflow:"hidden",slideIndex:0,slidesToScroll:1,slidesToShow:1,slideWidth:1,speed:500,swiping:!0,vertical:!1,width:"100%",wrapAround:!1,style:{}};var O=k},55:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return S}));var i=n(35),o=n.n(i),r=n(31),s=n.n(r),a=n(32),l=n.n(a),u=n(33),c=n.n(u),d=n(34),p=n.n(d),h=n(0),f=n.n(h),g=n(36),v=n.n(g),y=function(t){function e(){s()(this,e);var t=c()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.state={active:!1},t.onTouchStart=function(e){t.triggerEvent("TouchStart",!0,e)},t.onTouchMove=function(e){t.triggerEvent("TouchMove",!1,e)},t.onTouchEnd=function(e){t.triggerEvent("TouchEnd",!1,e)},t.onTouchCancel=function(e){t.triggerEvent("TouchCancel",!1,e)},t.onMouseDown=function(e){t.triggerEvent("MouseDown",!0,e)},t.onMouseUp=function(e){t.triggerEvent("MouseUp",!1,e)},t.onMouseLeave=function(e){t.triggerEvent("MouseLeave",!1,e)},t}return p()(e,t),l()(e,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(t,e,n){var i="on"+t,o=this.props.children;o.props[i]&&o.props[i](n),e!==this.state.active&&this.setState({active:e})}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.disabled,i=t.activeClassName,r=t.activeStyle,s=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},a=f.a.Children.only(e);if(!n&&this.state.active){var l=a.props,u=l.style,c=l.className;return!1!==r&&(r&&(u=o()({},u,r)),c=v()(c,i)),f.a.cloneElement(a,o()({className:c,style:u},s))}return f.a.cloneElement(a,s)}}]),e}(f.a.Component),S=y;y.defaultProps={disabled:!1}},62:function(t,e,n){"use strict";n(38),n(99)},63:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(100)),o=r(n(101));function r(t){return t&&t.__esModule?t:{default:t}}i.default.Item=o.default,e.default=i.default,t.exports=e.default},99:function(t,e,n){}}]);
//# sourceMappingURL=2.3bb29c55.chunk.js.map