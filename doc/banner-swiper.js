"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),BannerSwiper=function(){function e(n,t){_classCallCheck(this,e),this.container=document.querySelector(n),this.wrapper=document.querySelector(n).querySelectorAll(".banner-wrapper .banner-slide"),this.pagination=null,this.timer_auto=null,this.option=Object.assign({current:0,ctrl_btn:!0,auto_play:!0,times:3e3},t)}return _createClass(e,[{key:"addDirection",value:function(){var e=this;if(this.option.ctrl_btn){var n=document.createElement("div");n.className="banner-direction",n.innerHTML='\n    <span class=\'prev\'>\n      <svg>\n      <path  fill="#fff" d="M7,54.9l16.3-16.3L7,22.4c-0.5-0.5-0.5-1.4,0-1.9c0.5-0.5,1.4-0.5,1.9,0l17,17c0.3,0.3,0.4,0.7,0.4,1.1\n          c0.1,0.4-0.1,0.8-0.4,1.1l-17,17c-0.5,0.5-1.4,0.5-1.9,0C6.5,56.3,6.5,55.5,7,54.9L7,54.9z"/>\n      </svg>\n    </span>\n    <span class=\'next\'>\n      <svg>\n      <path  fill="#fff" d="M7,54.9l16.3-16.3L7,22.4c-0.5-0.5-0.5-1.4,0-1.9c0.5-0.5,1.4-0.5,1.9,0l17,17c0.3,0.3,0.4,0.7,0.4,1.1\n          c0.1,0.4-0.1,0.8-0.4,1.1l-17,17c-0.5,0.5-1.4,0.5-1.9,0C6.5,56.3,6.5,55.5,7,54.9L7,54.9z"/>\n      </svg>\n    </span>\n    ',this.container.appendChild(n),this.container.querySelector(".banner-direction .prev").addEventListener("click",function(){e.updateIndex(!0,-1)}),this.container.querySelector(".banner-direction .next").addEventListener("click",function(){e.updateIndex(!0,1)})}}},{key:"addPagination",value:function(){var e=this,n=document.createElement("ul");n.className="banner-pagination";for(var t=0;t<this.container.querySelectorAll(".banner-slide").length;t++){var i=document.createElement("li");i.index=t,n.appendChild(i)}this.pagination=n.querySelectorAll("li"),this.container.appendChild(n),this.container.querySelector(".banner-pagination").addEventListener("click",function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n||window.event,t=n.target||n.srcElement;"li"==t.nodeName.toLowerCase()&&e.updateIndex(!1,t.index)})}},{key:"autoPlay",value:function(){var e=this;this.option.auto_play&&(clearInterval(this.timer_auto),this.timer_auto=setInterval(function(){e.updateIndex(!0,1)},this.option.times))}},{key:"updateIndex",value:function(e,n){switch(e){case!0:1===n?this.option.current=this.option.current<this.wrapper.length-1?this.option.current+1:0:this.option.current=this.option.current>0?this.option.current-1:this.wrapper.length-1;break;case!1:this.option.current=n}this.showSlider()}},{key:"showSlider",value:function(){var e=this;this.container.querySelectorAll(".banner-slide").forEach(function(n,t){e.option.current==t?(n.className="banner-slide slide-active",e.pagination[t].className="active"):(n.className="banner-slide",e.pagination[t].className="")})}},{key:"mouse",value:function(){var e=this;this.container.addEventListener("mouseover",function(){clearInterval(e.timer_auto)}),this.container.addEventListener("mouseout",function(){e.autoPlay()})}},{key:"init",value:function(){this.addDirection(),this.addPagination(),this.showSlider(),this.autoPlay(),this.mouse()}}]),e}();