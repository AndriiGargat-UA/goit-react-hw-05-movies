"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[229],{229:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(689),o=t(87),p=t(390),f=t(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],d=(0,s.useState)("start"),v=(0,a.Z)(d,2),h=v[0],l=v[1],g=(0,s.useState)(null),m=(0,a.Z)(g,2),x=m[0],w=m[1],y=(0,i.TH)();return(0,s.useEffect)((function(){l("pending");var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.wr)();case 3:n=e.sent,c(n),l("resolved"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),l("rejected"),w(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),"pending"===h?(0,f.jsx)("h2",{children:"Loading..."}):"rejected"===h?(0,f.jsxs)("h2",{children:["Sorry, something went wrong: ",x]}):"resolved"===h?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)("ul",{children:t.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"movies/".concat(e.id),state:{from:y},children:e.title})},e.id)}))})]}):void 0}},390:function(e,n,t){t.d(n,{Hx:function(){return h},WK:function(){return l},Y5:function(){return d},wr:function(){return f},xc:function(){return v}});var r=t(861),a=t(757),c=t.n(a),u=t(243),s=t(7),i=t.n(s),o="7eaebca790602b6b3aca45d915bff38d",p="https://api.themoviedb.org/3",f=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/trending/movie/day?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/search/movie?api_key=").concat(o,"&language=en-US&page=1&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();d.PropTypes={movieId:i().string},v.PropTypes={movieId:i().string},h.PropTypes={movieId:i().string},l.PropTypes={query:i().string}}}]);
//# sourceMappingURL=229.aa9a865a.chunk.js.map