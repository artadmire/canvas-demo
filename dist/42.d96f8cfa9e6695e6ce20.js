(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"JS/M":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return s});var i=r("ysz4");class s{constructor(){return this instanceof s?this:new s}isCandidateForCollide(e,t){return e.visible&&t.visible&&e!==t}didCollide(e,t){if("circle"===e.type&&"circle"===t.type){let r=e.x,s=e.y,n=e.radius,c=t.x,o=t.y,l=t.radius;return Object(i.a)(r,s,c,o)<=n+l}let r="circle"===e.type?e.getAxes(t):e.getAxes(),s="circle"===t.type?t.getAxes(e):t.getAxes(),n=[...r,...s];for(let r of n){let i=e.getProjection(r),s=t.getProjection(r);if(!i.overlaps(s))return!1}return!0}}}}]);