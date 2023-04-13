"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{247:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),o=n(689),i=n(390),p=n(616),f=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],v=(0,s.useState)("start"),d=(0,a.Z)(v,2),l=d[0],h=d[1],g=(0,s.useState)(null),m=(0,a.Z)(g,2),x=m[0],w=m[1],y=(0,o.UO)().movieId;return(0,s.useEffect)((function(){h("pending");var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.xc)(y);case 3:t=e.sent,c(t),console.log(t),h("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),h("rejected"),w(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]),"pending"===l?(0,f.jsx)("h2",{children:"Loading..."}):"rejected"===l?(0,f.jsxs)("h2",{children:["Sorry, something went wrong: ",x]}):"resolved"===l?0===n.length?(0,f.jsx)("p",{children:"Sorry, we don't have any cast for this movie"}):(0,f.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.profile_path,r=e.name,a=e.character;return(0,f.jsxs)("li",{children:[n?(0,f.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200").concat(n),alt:"profile avatar"}):(0,f.jsx)("img",{src:p,alt:"profile avatar"}),(0,f.jsx)("p",{children:r}),(0,f.jsxs)("p",{children:["Character: ",a]})]},t)}))}):void 0}},390:function(e,t,n){n.d(t,{Hx:function(){return l},WK:function(){return h},Y5:function(){return v},wr:function(){return f},xc:function(){return d}});var r=n(861),a=n(757),c=n.n(a),u=n(243),s=n(7),o=n.n(s),i="7eaebca790602b6b3aca45d915bff38d",p="https://api.themoviedb.org/3",f=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/search/movie?api_key=").concat(i,"&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();v.PropTypes={movieId:o().string},d.PropTypes={movieId:o().string},l.PropTypes={movieId:o().string},h.PropTypes={query:o().string}},616:function(e,t,n){e.exports=n.p+"static/media/profile-not-found.b777c96570df46217f26.png"}}]);
//# sourceMappingURL=247.c668ae3a.chunk.js.map