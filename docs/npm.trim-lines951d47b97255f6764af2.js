"use strict";(self.webpackChunkwebpackreact=self.webpackChunkwebpackreact||[]).push([[273],{1436:function(e,t,n){n.d(t,{j:function(){return i}});const c=9,o=32;function i(e){const t=String(e),n=/\r?\n|\r/g;let c=n.exec(t),o=0;const i=[];for(;c;)i.push(r(t.slice(o,c.index),o>0,!0),c[0]),o=c.index+c[0].length,c=n.exec(t);return i.push(r(t.slice(o),o>0,!1)),i.join("")}function r(e,t,n){let i=0,r=e.length;if(t){let t=e.codePointAt(i);for(;t===c||t===o;)i++,t=e.codePointAt(i)}if(n){let t=e.codePointAt(r-1);for(;t===c||t===o;)r--,t=e.codePointAt(r-1)}return r>i?e.slice(i,r):""}}}]);