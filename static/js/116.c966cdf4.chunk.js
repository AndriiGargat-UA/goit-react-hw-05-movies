"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[116],{6116:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,u=t(5861),o=t(9439),i=t(7757),s=t.n(i),p=t(2791),f=t(7689),d=t(4390),v=t(168),l=t(1087),g=t(6444),h=g.ZP.div(r||(r=(0,v.Z)(["\n  padding: 20px;\n"]))),x=g.ZP.h1(a||(a=(0,v.Z)(["\n  font-size: 40px;\n  color: #010d38;\n  margin-bottom: 20px;\n"]))),m=(0,g.ZP)(l.rU)(c||(c=(0,v.Z)(["\n  font-size: 23px;\n  margin-bottom: 8px;\n  text-decoration: none;\n  color: #020c2e;\n  &:hover {\n    color: #fa1919;\n  }\n"]))),w=t(184),y=function(){var n=(0,p.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)("start"),c=(0,o.Z)(a,2),i=c[0],v=c[1],l=(0,p.useState)(null),g=(0,o.Z)(l,2),y=g[0],Z=g[1],k=(0,f.TH)();return(0,p.useEffect)((function(){v("pending");var n=function(){var n=(0,u.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.wr)();case 3:e=n.sent,r(e),v("resolved"),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),v("rejected"),Z(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),"pending"===i?(0,w.jsx)("h2",{children:"Loading..."}):"rejected"===i?(0,w.jsxs)("h2",{children:["Sorry, something went wrong: ",y]}):"resolved"===i?(0,w.jsxs)(h,{children:[" ",(0,w.jsx)(x,{children:"Trending today"}),(0,w.jsx)("ul",{children:t.map((function(n){return(0,w.jsx)("li",{children:(0,w.jsx)(m,{to:"movies/".concat(n.id),state:{from:k},children:n.title})},n.id)}))})]}):void 0}},4390:function(n,e,t){t.d(e,{Hx:function(){return l},WK:function(){return g},Y5:function(){return d},wr:function(){return f},xc:function(){return v}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243),o=t(2007),i=t.n(o),s="7eaebca790602b6b3aca45d915bff38d",p="https://api.themoviedb.org/3",f=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(p,"/search/movie?api_key=").concat(s,"&language=en-US&page=1&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();d.PropTypes={movieId:i().string},v.PropTypes={movieId:i().string},l.PropTypes={movieId:i().string},g.PropTypes={query:i().string}}}]);
//# sourceMappingURL=116.c966cdf4.chunk.js.map