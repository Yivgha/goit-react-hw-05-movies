"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[983],{8500:function(n,t,e){e.d(t,{O:function(){return d}});var r,a,u=e(168),c=e(225),i=e(3504),s=(0,c.Z)(i.rU)(r||(r=(0,u.Z)(["\n  font-size: 20px;\n  color: darkslategray;\n  transition: 0.3s ease-in;\n  &:hover {\n    background: rgb(163, 226, 255);\n    background: linear-gradient(\n      90deg,\n      rgba(163, 226, 255, 0.8281687675070029) 36%,\n      rgba(245, 250, 148, 0.6152836134453781) 69%\n    );\n  }\n"]))),o=c.Z.ul(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),p=e(6871),f=e(184),d=function(n){var t=n.movies,e=(0,p.TH)();return(0,f.jsx)(o,{children:t&&t.map((function(n){var t=n.id,r=n.title;return(0,f.jsx)("li",{children:(0,f.jsx)(s,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},3983:function(n,t,e){e.r(t),e.d(t,{HomePage:function(){return s}});var r=e(885),a=e(2791),u=e(9364),c=e(8500),i=e(184),s=function(){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),e=t[0],s=t[1];return(0,a.useEffect)((function(){(0,u.oV)().then(s)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(c.O,{movies:e})]})}},9364:function(n,t,e){e.d(t,{IT:function(){return p},_c:function(){return h},eH:function(){return m},oV:function(){return s},oy:function(){return d}});var r=e(5861),a=e(4687),u=e.n(a),c=e(4569),i=e.n(c);function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/3/trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/3/search/movie?query=".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/3/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("3/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("3/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}i().defaults.headers["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",i().defaults.baseURL="https://api.themoviedb.org",i().defaults.params={api_key:"8e0288e6c002e9adeca41ab040f8eda1"}}}]);
//# sourceMappingURL=983.de1e7004.chunk.js.map