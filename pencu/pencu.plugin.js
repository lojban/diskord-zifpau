//META{"name":"pencu"}*//


var camxes=function(){function l(l){return'"'+l.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E-\x1F\x80-\uFFFF]/g,escape)+'"'}var n={parse:function(n,u){function r(l){pl>hl||(hl>pl&&(pl=hl,yl=[]),yl.push(l))}function t(){var l="uenzi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,s,a;if(s=hl,a=hl,u=il(),u=null!==u?u:"",null!==u){for(r=[],t=e();null!==t;)r.push(t),t=e();null!==r?u=[u,r]:(u=null,hl=a)}else u=null,hl=a;return null!==u&&(u=function(l,n){return xl(n)}(s,u[1])),null===u&&(hl=s),Al[l]={nextPos:hl,result:u},u}function e(){var l="any_word@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e;return t=hl,e=hl,u=s(),null!==u?(r=il(),r=null!==r?r:"",null!==r?u=[u,r]:(u=null,hl=e)):(u=null,hl=e),null!==u&&(u=function(l,n){return n}(t,u[0])),null===u&&(hl=t),Al[l]={nextPos:hl,result:u},u}function s(){var l="jbovla@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,i,x,P,h,_,p;return u=a(),null===u&&(P=hl,u=c(),null!==u&&(u=function(l,n){return["cmavo",vl(n)]}(P,u)),null===u&&(hl=P),null===u&&(P=hl,u=o(),null!==u&&(u=function(l,n){return["gismu",vl(n)]}(P,u)),null===u&&(hl=P),null===u&&(P=hl,h=hl,_=hl,_l++,u=o(),_l--,null===u?u="":(u=null,hl=_),null!==u?(_=hl,_l++,r=f(),_l--,null===r?r="":(r=null,hl=_),null!==r?(_=hl,_l++,t=c(),_l--,null===t?t="":(t=null,hl=_),null!==t?(_=hl,_l++,p=hl,e=z(),null!==e?(s=al(),null!==s?(i=R(),null!==i?(x=q(),null!==x?e=[e,s,i,x]:(e=null,hl=p)):(e=null,hl=p)):(e=null,hl=p)):(e=null,hl=p),_l--,null===e?e="":(e=null,hl=_),null!==e?(s=v(),null!==s?u=[u,r,t,e,s]:(u=null,hl=h)):(u=null,hl=h)):(u=null,hl=h)):(u=null,hl=h)):(u=null,hl=h),null!==u&&(u=function(l,n){return["lujvo",vl(n)]}(P,u)),null===u&&(hl=P),null===u&&(P=hl,u=f(),null!==u&&(u=function(l,n){return["fu'ivla",vl(n)]}(P,u)),null===u&&(hl=P))))),Al[l]={nextPos:hl,result:u},u}function a(){var l="cmevla@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a;if(e=hl,s=hl,a=hl,_l++,u=_(),_l--,null!==u?(u="",hl=a):u=null,null!==u){for(r=[],t=B();null!==t;)r.push(t),t=B();null!==r?(a=hl,_l++,t=il(),_l--,null!==t?(t="",hl=a):t=null,null!==t?u=[u,r,t]:(u=null,hl=s)):(u=null,hl=s)}else u=null,hl=s;return null===u&&(u=_()),null!==u&&(u=function(l,n){return["cmevla",vl(n)]}(e,u)),null===u&&(hl=e),Al[l]={nextPos:hl,result:u},u}function o(){var l="gismu@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o;return a=hl,u=S(),null!==u?(o=hl,_l++,r=O(),_l--,null!==r?(r="",hl=o):r=null,null!==r?(o=hl,_l++,t=M(),_l--,null!==t?(t="",hl=o):t=null,null!==t?(e=K(),null!==e?(o=hl,_l++,s=ol(),_l--,null!==s?(s="",hl=o):s=null,null!==s?u=[u,r,t,e,s]:(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a),Al[l]={nextPos:hl,result:u},u}function i(){var l="fuhivla_trim@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o;if(a=hl,u=h(),null!==u)if(r=I(),null!==r)if(o=hl,_l++,t=O(),_l--,null!==t?(t="",hl=o):t=null,null!==t){for(e=[],s=J();null!==s;)e.push(s),s=J();null!==e?u=[u,r,t,e]:(u=null,hl=a)}else u=null,hl=a;else u=null,hl=a;else u=null,hl=a;return Al[l]={nextPos:hl,result:u},u}function f(){var l="fuhivla@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t;return t=hl,u=i(),null!==u?(r=M(),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t),Al[l]={nextPos:hl,result:u},u}function c(){var l="cmavo@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,o,i,f,c,x,P,h;if(c=hl,x=hl,_l++,u=a(),_l--,null===u?u="":(u=null,hl=x),null!==u)if(x=hl,_l++,P=hl,r=b(),null!==r?(h=hl,_l++,t=O(),_l--,null===t?t="":(t=null,hl=h),null!==t?(e=R(),null!==e?(s=al(),s=null!==s?s:"",null!==s?(o=v(),null!==o?r=[r,t,e,s,o]:(r=null,hl=P)):(r=null,hl=P)):(r=null,hl=P)):(r=null,hl=P)):(r=null,hl=P),null===r&&(P=hl,r=b(),null!==r?(h=hl,_l++,t=O(),_l--,null!==t?(t="",hl=h):t=null,null!==t?(e=R(),null!==e?(s=j(),null!==s?r=[r,t,e,s]:(r=null,hl=P)):(r=null,hl=P)):(r=null,hl=P)):(r=null,hl=P)),_l--,null===r?r="":(r=null,hl=x),null!==r){if(x=hl,P=hl,_l++,t=al(),_l--,null===t?t="":(t=null,hl=P),null!==t){if(P=hl,_l++,h=hl,e=W(),null!==e){if(o=W(),null!==o)for(s=[];null!==o;)s.push(o),o=W();else s=null;null!==s?e=[e,s]:(e=null,hl=h)}else e=null,hl=h;if(_l--,null===e?e="":(e=null,hl=P),null!==e)if(s=q(),null!==s){for(o=[],P=hl,i=D(),null!==i?(f=al(),null!==f?i=[i,f]:(i=null,hl=P)):(i=null,hl=P);null!==i;)o.push(i),P=hl,i=D(),null!==i?(f=al(),null!==f?i=[i,f]:(i=null,hl=P)):(i=null,hl=P);null!==o?(i=D(),null!==i?t=[t,e,s,o,i]:(t=null,hl=x)):(t=null,hl=x)}else t=null,hl=x;else t=null,hl=x}else t=null,hl=x;if(null===t)if(e=R(),null!==e)for(t=[];null!==e;)t.push(e),e=R();else t=null;null!==t?(x=hl,_l++,e=ol(),_l--,null!==e?(e="",hl=x):e=null,null!==e?u=[u,r,t,e]:(u=null,hl=c)):(u=null,hl=c)}else u=null,hl=c;else u=null,hl=c;return Al[l]={nextPos:hl,result:u},u}function v(){var l="lujvo_core@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,c;for(s=hl,u=[],a=hl,r=C(),null===r&&(r=y(),null===r&&(r=g(),null===r&&(o=hl,i=hl,_l++,r=x(),_l--,null===r?r="":(r=null,hl=i),null!==r?(t=m(),null!==t?(i=hl,_l++,e=x(),_l--,null===e?e="":(e=null,hl=i),null!==e?r=[r,t,e]:(r=null,hl=o)):(r=null,hl=o)):(r=null,hl=o)))),null!==r&&(r=function(l,n){return[vl(n),"-"]}(a,r)),null===r&&(hl=a);null!==r;)u.push(r),a=hl,r=C(),null===r&&(r=y(),null===r&&(r=g(),null===r&&(o=hl,i=hl,_l++,r=x(),_l--,null===r?r="":(r=null,hl=i),null!==r?(t=m(),null!==t?(i=hl,_l++,e=x(),_l--,null===e?e="":(e=null,hl=i),null!==e?r=[r,t,e]:(r=null,hl=o)):(r=null,hl=o)):(r=null,hl=o)))),null!==r&&(r=function(l,n){return[vl(n),"-"]}(a,r)),null===r&&(hl=a);return null!==u?(a=hl,r=f(),null===r&&(r=w()),null!==r&&(r=function(l,n){return[vl(n)]}(a,r)),null===r&&(hl=a),null===r&&(a=hl,o=hl,r=d(),null===r&&(r=p(),null===r&&(r=A(),null===r&&(i=hl,r=k(),null!==r?(c=hl,_l++,t=O(),_l--,null!==t?(t="",hl=c):t=null,null!==t?r=[r,t]:(r=null,hl=i)):(r=null,hl=i)))),null!==r?(t=j(),null!==t?r=[r,t]:(r=null,hl=o)):(r=null,hl=o),null!==r&&(r=function(l,n,u){return[vl(n),"-",vl(u)]}(a,r[0],r[1])),null===r&&(hl=a)),null!==r?u=[u,r]:(u=null,hl=s)):(u=null,hl=s),Al[l]={nextPos:hl,result:u},u}function x(){var l="any_fuhivla_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u;return u=f(),null===u&&(u=y(),null===u&&(u=p())),Al[l]={nextPos:hl,result:u},u}function P(){var l="rafsi_string@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f;for(a=hl,u=[],r=m();null!==r;)u.push(r),r=m();return null!==u?(r=w(),null===r&&(o=hl,r=k(),null!==r?(i=hl,_l++,t=O(),_l--,null!==t?(t="",hl=i):t=null,null!==t?(i=hl,_l++,e=R(),_l--,null===e?e="":(e=null,hl=i),null!==e?(s=j(),null!==s?r=[r,t,e,s]:(r=null,hl=o)):(r=null,hl=o)):(r=null,hl=o)):(r=null,hl=o),null===r&&(r=g(),null===r&&(r=A(),null===r&&(o=hl,i=hl,r=k(),null!==r?(f=hl,_l++,t=O(),_l--,null!==t?(t="",hl=f):t=null,null!==t?(f=hl,_l++,e=R(),_l--,null===e?e="":(e=null,hl=f),null!==e?r=[r,t,e]:(r=null,hl=i)):(r=null,hl=i)):(r=null,hl=i),r=null!==r?r:"",null!==r?(t=T(),null!==t?(e=R(),null!==e?r=[r,t,e]:(r=null,hl=o)):(r=null,hl=o)):(r=null,hl=o),null===r&&(r=C(),null===r&&(r=d())))))),null!==r?u=[u,r]:(u=null,hl=a)):(u=null,hl=a),Al[l]={nextPos:hl,result:u},u}function h(){var l="fuhivla_head@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f,v,x;if(i=hl,f=hl,_l++,u=P(),_l--,null===u?u="":(u=null,hl=f),null!==u)if(f=hl,_l++,r=c(),_l--,null===r?r="":(r=null,hl=f),null!==r)if(f=hl,_l++,v=hl,x=hl,_l++,t=P(),_l--,null===t?t="":(t=null,hl=x),null!==t?(e=W(),null!==e?(s=P(),null!==s?t=[t,e,s]:(t=null,hl=v)):(t=null,hl=v)):(t=null,hl=v),_l--,null===t?t="":(t=null,hl=f),null!==t)if(f=hl,_l++,e=al(),_l--,null===e?e="":(e=null,hl=f),null!==e)if(f=hl,_l++,s=q(),_l--,null!==s?(s="",hl=f):s=null,null!==s){for(a=[],o=E();null!==o;)a.push(o),o=E();null!==a?u=[u,r,t,e,s,a]:(u=null,hl=i)}else u=null,hl=i;else u=null,hl=i;else u=null,hl=i;else u=null,hl=i;else u=null,hl=i;return Al[l]={nextPos:hl,result:u},u}function _(){var l="zifcme@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o;if(s=hl,a=hl,_l++,u=al(),_l--,null===u?u="":(u=null,hl=a),null!==u){for(r=[],t=D(),null===t&&(t=G(),null===t&&(t=al(),null===t&&(a=hl,t=W(),null!==t?(o=hl,_l++,e=il(),_l--,null===e?e="":(e=null,hl=o),null!==e?t=[t,e]:(t=null,hl=a)):(t=null,hl=a))));null!==t;)r.push(t),t=D(),null===t&&(t=G(),null===t&&(t=al(),null===t&&(a=hl,t=W(),null!==t?(o=hl,_l++,e=il(),_l--,null===e?e="":(e=null,hl=o),null!==e?t=[t,e]:(t=null,hl=a)):(t=null,hl=a))));null!==r?(t=W(),null!==t?(a=hl,_l++,e=il(),_l--,null!==e?(e="",hl=a):e=null,null!==e?u=[u,r,t,e]:(u=null,hl=s)):(u=null,hl=s)):(u=null,hl=s)}else u=null,hl=s;return Al[l]={nextPos:hl,result:u},u}function p(){var l="stressed_fuhivla_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a;return e=hl,s=hl,u=i(),null!==u?(r=al(),null!==r?(t=R(),null!==t?u=[u,r,t]:(u=null,hl=s)):(u=null,hl=s)):(u=null,hl=s),null!==u&&(u=function(l,n){return[vl(n),""]}(e,u[0])),null===u&&(hl=e),null===u&&(e=hl,s=hl,a=hl,u=i(),null!==u?(r=q(),null!==r?u=[u,r]:(u=null,hl=a)):(u=null,hl=a),null!==u?(r=R(),null!==r?u=[u,r]:(u=null,hl=s)):(u=null,hl=s),null!==u&&(u=function(l,n){return[vl(n),""]}(e,u[0])),null===u&&(hl=e)),Al[l]={nextPos:hl,result:u},u}function y(){var l="fuhivla_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o;return e=hl,s=hl,a=hl,o=hl,_l++,u=E(),_l--,null!==u?(u="",hl=o):u=null,null!==u?(r=h(),null!==r?(t=q(),null!==t?u=[u,r,t]:(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a),null!==u?(r=R(),null!==r?(t=al(),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,hl=s)):(u=null,hl=s)):(u=null,hl=s),null!==u&&(u=function(l,n){return[vl(n),""]}(e,u[0])),null===u&&(hl=e),Al[l]={nextPos:hl,result:u},u}function A(){var l="stressed_y_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a;return e=hl,s=hl,u=S(),null===u&&(u=b()),null!==u?(a=hl,_l++,r=O(),_l--,null!==r?(r="",hl=a):r=null,null!==r?(t=R(),null!==t?u=[u,r,t]:(u=null,hl=s)):(u=null,hl=s)):(u=null,hl=s),null!==u&&(u=function(l,n){return[vl(n),""]}(e,u[0])),null===u&&(hl=e),Al[l]={nextPos:hl,result:u},u}function g(){var l="y_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o;return s=hl,a=hl,u=S(),null===u&&(u=b()),null!==u?(o=hl,_l++,r=O(),_l--,null===r?r="":(r=null,hl=o),null!==r?(t=R(),null!==t?(e=al(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a),null!==u&&(u=function(l,n){return[vl(n),""]}(s,u[0])),null===u&&(hl=s),Al[l]={nextPos:hl,result:u},u}function m(){var l="y_less_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o,i,f,c;return f=hl,c=hl,_l++,u=g(),_l--,null===u?u="":(u=null,hl=c),null!==u?(c=hl,_l++,r=A(),_l--,null===r?r="":(r=null,hl=c),null!==r?(c=hl,_l++,t=C(),_l--,null===t?t="":(t=null,hl=c),null!==t?(c=hl,_l++,e=d(),_l--,null===e?e="":(e=null,hl=c),null!==e?(s=k(),null!==s?(c=hl,_l++,a=O(),_l--,null===a?a="":(a=null,hl=c),null!==a?(c=hl,_l++,o=R(),_l--,null===o?o="":(o=null,hl=c),null!==o?(c=hl,_l++,i=al(),_l--,null===i?i="":(i=null,hl=c),null!==i?u=[u,r,t,e,s,a,o,i]:(u=null,hl=f)):(u=null,hl=f)):(u=null,hl=f)):(u=null,hl=f)):(u=null,hl=f)):(u=null,hl=f)):(u=null,hl=f)):(u=null,hl=f),Al[l]={nextPos:hl,result:u},u}function d(){var l="stressed_hy_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o;return s=hl,a=hl,o=hl,u=S(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,hl=o)):(u=null,hl=o),null===u&&(u=k()),null!==u?(o=hl,_l++,r=O(),_l--,null!==r?(r="",hl=o):r=null,null!==r?(t=al(),null!==t?(e=R(),null!==e?u=[u,r,t,e]:(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a),null!==u&&(u=function(l,n){return[vl(n),""]}(s,u[0])),null===u&&(hl=s),Al[l]={nextPos:hl,result:u},u}function C(){var l="hy_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return a=hl,o=hl,i=hl,u=S(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,hl=i)):(u=null,hl=i),null===u&&(u=k()),null!==u?(i=hl,_l++,r=O(),_l--,null===r?r="":(r=null,hl=i),null!==r?(t=al(),null!==t?(e=R(),null!==e?(s=al(),s=null!==s?s:"",null!==s?u=[u,r,t,e,s]:(u=null,hl=o)):(u=null,hl=o)):(u=null,hl=o)):(u=null,hl=o)):(u=null,hl=o),null!==u&&(u=function(l,n){return[vl(n),""]}(a,u[0])),null===u&&(hl=a),Al[l]={nextPos:hl,result:u},u}function b(){var l="CVC@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t;return t=hl,u=F(),null!==u?(r=W(),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t),Al[l]={nextPos:hl,result:u},u}function V(){var l="CVC_CCV@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u;return u=b(),null===u&&(u=z()),Al[l]={nextPos:hl,result:u},u}function z(){var l="ini_vwl@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t;return t=hl,u=T(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t),Al[l]={nextPos:hl,result:u},u}function k(){var l="CVC_CCV_CVV@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return u=V(),null===u&&(a=hl,u=W(),null!==u?(o=hl,r=K(),null!==r?(i=hl,_l++,t=O(),_l--,null===t?t="":(t=null,hl=i),null!==t?(e=al(),null!==e?(s=K(),null!==s?r=[r,t,e,s]:(r=null,hl=o)):(r=null,hl=o)):(r=null,hl=o)):(r=null,hl=o),null===r&&(r=H()),null!==r?(o=hl,t=ll(),null!==t?(i=hl,_l++,e=W(),_l--,null!==e?(e="",hl=i):e=null,null!==e?t=[t,e]:(t=null,hl=o)):(t=null,hl=o),null===t&&(o=hl,t=$(),null!==t?(i=hl,_l++,e=ll(),_l--,null!==e?(e="",hl=i):e=null,null!==e?t=[t,e]:(t=null,hl=o)):(t=null,hl=o)),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a)),Al[l]={nextPos:hl,result:u},u}function w(){var l="gismu_CVV_final_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,i,f;return u=o(),null===u&&(i=hl,u=F(),null!==u?(f=hl,_l++,r=O(),_l--,null!==r?(r="",hl=f):r=null,null!==r?(t=al(),null!==t?(f=hl,_l++,e=M(),_l--,null!==e?(e="",hl=f):e=null,null!==e?(s=K(),null!==s?(f=hl,_l++,a=ol(),_l--,null!==a?(a="",hl=f):a=null,null!==a?u=[u,r,t,e,s,a]:(u=null,hl=i)):(u=null,hl=i)):(u=null,hl=i)):(u=null,hl=i)):(u=null,hl=i)):(u=null,hl=i)),Al[l]={nextPos:hl,result:u},u}function j(){var l="short_final_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s;return e=hl,s=hl,_l++,u=M(),_l--,null!==u?(u="",hl=s):u=null,null!==u?(s=hl,r=W(),null!==r?(t=H(),null!==t?r=[r,t]:(r=null,hl=s)):(r=null,hl=s),null===r&&(r=z()),null!==r?(s=hl,_l++,t=ol(),_l--,null!==t?(t="",hl=s):t=null,null!==t?u=[u,r,t]:(u=null,hl=e)):(u=null,hl=e)):(u=null,hl=e),Al[l]={nextPos:hl,result:u},u}function E(){var l="unstressed_syllable@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e;return t=hl,u=I(),null!==u?(e=hl,_l++,r=O(),_l--,null===r?r="":(r=null,hl=e),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t),null===u&&(u=J()),Al[l]={nextPos:hl,result:u},u}function S(){var l="long_rafsi@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t;return t=hl,u=V(),null!==u?(r=W(),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t),Al[l]={nextPos:hl,result:u},u}function F(){var l="CV@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t;return t=hl,u=W(),null!==u?(r=K(),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t),Al[l]={nextPos:hl,result:u},u}function M(){var l="final_syllable@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,o,i;return o=hl,u=q(),null!==u?(i=hl,_l++,r=R(),_l--,null===r?r="":(r=null,hl=i),null!==r?(t=D(),null!==t?(i=hl,_l++,e=a(),_l--,null===e?e="":(e=null,hl=i),null!==e?(i=hl,_l++,s=ol(),_l--,null!==s?(s="",hl=i):s=null,null!==s?u=[u,r,t,e,s]:(u=null,hl=o)):(u=null,hl=o)):(u=null,hl=o)):(u=null,hl=o)):(u=null,hl=o),Al[l]={nextPos:hl,result:u},u}function O(){var l="stress@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a;for(a=hl,u=[],r=W(),null===r&&(r=G());null!==r;)u.push(r),r=W(),null===r&&(r=G());return null!==u?(r=al(),r=null!==r?r:"",null!==r?(t=R(),t=null!==t?t:"",null!==t?(e=I(),null!==e?(s=il(),null!==s?u=[u,r,t,e,s]:(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a)):(u=null,hl=a),Al[l]={nextPos:hl,result:u},u}function B(){var l="any_syllable@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s;return t=hl,e=hl,_l++,s=hl,u=q(),null!==u?(r=R(),null!==r?u=[u,r]:(u=null,hl=s)):(u=null,hl=s),_l--,null===u?u="":(u=null,hl=e),null!==u?(r=I(),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t),null===u&&(u=J()),Al[l]={nextPos:hl,result:u},u}function I(){var l="slaka@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a;return s=hl,u=q(),null!==u?(a=hl,_l++,r=R(),_l--,null===r?r="":(r=null,hl=a),null!==r?(t=D(),null!==t?(e=N(),e=null!==e?e:"",null!==e?u=[u,r,t,e]:(u=null,hl=s)):(u=null,hl=s)):(u=null,hl=s)):(u=null,hl=s),Al[l]={nextPos:hl,result:u},u}function J(){var l="consonantal_syllable@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s;return e=hl,u=W(),null!==u?(s=hl,_l++,r=X(),_l--,null!==r?(r="",hl=s):r=null,null!==r?(t=N(),null!==t?u=[u,r,t]:(u=null,hl=e)):(u=null,hl=e)):(u=null,hl=e),Al[l]={nextPos:hl,result:u},u}function N(){var l="coda@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s;return e=hl,s=hl,_l++,u=B(),_l--,null===u?u="":(u=null,hl=s),null!==u?(r=W(),null!==r?(s=hl,_l++,t=B(),_l--,null!==t?(t="",hl=s):t=null,null!==t?u=[u,r,t]:(u=null,hl=e)):(u=null,hl=e)):(u=null,hl=e),null===u&&(e=hl,u=X(),u=null!==u?u:"",null!==u?(r=W(),r=null!==r?r:"",null!==r?(s=hl,_l++,t=il(),_l--,null!==t?(t="",hl=s):t=null,null!==t?u=[u,r,t]:(u=null,hl=e)):(u=null,hl=e)):(u=null,hl=e)),Al[l]={nextPos:hl,result:u},u}function q(){var l="onset@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a,o,i;return u=al(),null===u&&(u=G(),null===u&&(e=hl,u=U(),null===u&&(s=hl,a=hl,u=tl(),null!==u?(o=hl,_l++,r=el(),_l--,null===r?r="":(r=null,hl=o),null!==r?u=[u,r]:(u=null,hl=a)):(u=null,hl=a),null===u&&(a=hl,u=rl(),null!==u?(o=hl,_l++,r=$(),null===r&&(r=Y(),null===r&&(r=ll())),_l--,null===r?r="":(r=null,hl=o),null!==r?u=[u,r]:(u=null,hl=a)):(u=null,hl=a)),u=null!==u?u:"",null!==u?(r=nl(),null===r&&(a=hl,r=sl(),null===r&&(r=ul(),null===r&&(o=hl,r=$(),null!==r?(i=hl,_l++,t=ll(),_l--,null===t?t="":(t=null,hl=i),null!==t?r=[r,t]:(r=null,hl=o)):(r=null,hl=o))),null!==r?(o=hl,_l++,t=Y(),_l--,null===t?t="":(t=null,hl=o),null!==t?r=[r,t]:(r=null,hl=a)):(r=null,hl=a),null===r&&(r=Z())),r=null!==r?r:"",null!==r?(t=Y(),null===t&&(t=ll()),t=null!==t?t:"",null!==t?u=[u,r,t]:(u=null,hl=s)):(u=null,hl=s)):(u=null,hl=s)),null!==u?(s=hl,_l++,r=W(),_l--,null===r?r="":(r=null,hl=s),null!==r?(s=hl,_l++,t=G(),_l--,null===t?t="":(t=null,hl=s),null!==t?u=[u,r,t]:(u=null,hl=e)):(u=null,hl=e)):(u=null,hl=e))),Al[l]={nextPos:hl,result:u},u}function D(){var l="nucleus@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e;return u=K(),null===u&&(u=H(),null===u&&(t=hl,u=R(),null!==u?(e=hl,_l++,r=D(),_l--,null===r?r="":(r=null,hl=e),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t))),Al[l]={nextPos:hl,result:u},u}function G(){var l="glide@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s;return e=hl,u=L(),null===u&&(u=Q()),null!==u?(s=hl,_l++,r=D(),_l--,null!==r?(r="",hl=s):r=null,null!==r?(s=hl,_l++,t=G(),_l--,null===t?t="":(t=null,hl=s),null!==t?u=[u,r,t]:(u=null,hl=e)):(u=null,hl=e)):(u=null,hl=e),Al[l]={nextPos:hl,result:u},u}function H(){var l="re_zei_karsna@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a,o,i;return a=hl,o=hl,/^[a]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[a]")),null!==t?(e=Q(),null!==e?(i=hl,_l++,s=Q(),_l--,null===s?s="":(s=null,hl=i),null!==s?t=[t,e,s]:(t=null,hl=o)):(t=null,hl=o)):(t=null,hl=o),null===t&&(o=hl,/^[aeo]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[aeo]")),null!==t?(e=L(),null!==e?(i=hl,_l++,s=L(),_l--,null===s?s="":(s=null,hl=i),null!==s?t=[t,e,s]:(t=null,hl=o)):(t=null,hl=o)):(t=null,hl=o)),null!==t?(o=hl,_l++,e=D(),_l--,null===e?e="":(e=null,hl=o),null!==e?t=[t,e]:(t=null,hl=a)):(t=null,hl=a),Al[l]={nextPos:hl,result:t},t}function K(){var l="pa_zei_karsna@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[aeiou]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[aeiou]")),null!==t?(a=hl,_l++,e=D(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function L(){var l="i@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t;return/^[i]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[i]")),Al[l]={nextPos:hl,result:t},t}function Q(){var l="u@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t;return/^[u]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[u]")),Al[l]={nextPos:hl,result:t},t}function R(){var l="y@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a,o,i,f;return a=hl,/^[y]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[y]")),null!==t?(o=hl,_l++,i=hl,f=hl,_l++,e=R(),_l--,null===e?e="":(e=null,hl=f),null!==e?(s=D(),null!==s?e=[e,s]:(e=null,hl=i)):(e=null,hl=i),_l--,null===e?e="":(e=null,hl=o),null!==e?t=[t,e]:(t=null,hl=a)):(t=null,hl=a),Al[l]={nextPos:hl,result:t},t}function T(){var l="initial_pair@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e,s,a;return s=hl,a=hl,_l++,u=q(),_l--,null!==u?(u="",hl=a):u=null,null!==u?(r=W(),null!==r?(t=W(),null!==t?(a=hl,_l++,e=W(),_l--,null===e?e="":(e=null,hl=a),null!==e?u=[u,r,t,e]:(u=null,hl=s)):(u=null,hl=s)):(u=null,hl=s)):(u=null,hl=s),Al[l]={nextPos:hl,result:u},u}function U(){var l="affricate@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t;return t=hl,u=sl(),null!==u?(r=tl(),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t),null===u&&(t=hl,u=ul(),null!==u?(r=rl(),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t)),Al[l]={nextPos:hl,result:u},u}function W(){var l="zunsna@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u;return u=nl(),null===u&&(u=ul(),null===u&&(u=rl(),null===u&&(u=tl(),null===u&&(u=sl(),null===u&&(u=X()))))),Al[l]={nextPos:hl,result:u},u}function X(){var l="syllabic@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u;return u=Y(),null===u&&(u=Z(),null===u&&(u=$(),null===u&&(u=ll()))),Al[l]={nextPos:hl,result:u},u}function Y(){var l="l@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[l]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[l]")),null!==t?(a=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function Z(){var l="m@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[m]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[m]")),null!==t?(a=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function $(){var l="n@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a,o;return a=hl,/^[n]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[n]")),null!==t?(o=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=o),null!==e?(o=hl,_l++,s=U(),_l--,null===s?s="":(s=null,hl=o),null!==s?t=[t,e,s]:(t=null,hl=a)):(t=null,hl=a)):(t=null,hl=a),Al[l]={nextPos:hl,result:t},t}function ll(){var l="r@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[r]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[r]")),null!==t?(a=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function nl(){var l="pfbgvkx@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[pfbgvkx]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[pfbgvkx]")),null!==t?(a=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function ul(){var l="d@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[d]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[d]")),null!==t?(a=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function rl(){var l="jz@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[jz]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[jz]")),null!==t?(a=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function tl(){var l="cs@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[cs]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[cs]")),null!==t?(a=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function el(){var l="x@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[x]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[x]")),null!==t?(a=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function sl(){var l="t@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[t]/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[t]")),null!==t?(a=hl,_l++,e=G(),_l--,null===e?e="":(e=null,hl=a),null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function al(){var l="h@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s,a;return s=hl,/^[']/.test(n.charAt(hl))?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("[']")),null!==t?(a=hl,_l++,e=D(),_l--,null!==e?(e="",hl=a):e=null,null!==e?t=[t,e]:(t=null,hl=s)):(t=null,hl=s),Al[l]={nextPos:hl,result:t},t}function ol(){var l="post_word@"+hl,n=Al[l];if(n)return hl=n.nextPos,n.result;var u,r,t,e;return u=il(),null===u&&(t=hl,e=hl,_l++,u=D(),_l--,null===u?u="":(u=null,hl=e),null!==u?(r=s(),null!==r?u=[u,r]:(u=null,hl=t)):(u=null,hl=t)),Al[l]={nextPos:hl,result:u},u}function il(){var l="pause@"+hl,u=Al[l];if(u)return hl=u.nextPos,u.result;var t,e,s;if(/^[.\t\n\r?! ]/.test(n.charAt(hl))?(e=n.charAt(hl),hl++):(e=null,0===_l&&r("[.\\t\\n\\r?! ]")),null!==e)for(t=[];null!==e;)t.push(e),/^[.\t\n\r?! ]/.test(n.charAt(hl))?(e=n.charAt(hl),hl++):(e=null,0===_l&&r("[.\\t\\n\\r?! ]"));else t=null;return null===t&&(s=hl,_l++,n.length>hl?(t=n.charAt(hl),hl++):(t=null,0===_l&&r("any character")),_l--,null===t?t="":(t=null,hl=s)),Al[l]={nextPos:hl,result:t},t}function fl(l){l.sort();for(var n=null,u=[],r=0;r<l.length;r++)l[r]!==n&&(u.push(l[r]),n=l[r]);return u}function cl(){for(var l=1,u=1,r=!1,t=0;t<Math.max(hl,pl);t++){var e=n.charAt(t);"\n"===e?(r||l++,u=1,r=!1):"\r"===e||"\u2028"===e||"\u2029"===e?(l++,u=1,r=!0):(u++,r=!1)}return{line:l,column:u}}function vl(l){if("string"==typeof l)return l;var n="";for(var u in l)n+=vl(l[u]);return n}function xl(l){if("string"==typeof l)return l;var n=[];for(var u in l)n.push(xl(l[u]));return n}var Pl={uenzi:t,any_word:e,jbovla:s,cmevla:a,gismu:o,fuhivla_trim:i,fuhivla:f,cmavo:c,lujvo_core:v,any_fuhivla_rafsi:x,rafsi_string:P,fuhivla_head:h,zifcme:_,stressed_fuhivla_rafsi:p,fuhivla_rafsi:y,stressed_y_rafsi:A,y_rafsi:g,y_less_rafsi:m,stressed_hy_rafsi:d,hy_rafsi:C,CVC:b,CVC_CCV:V,ini_vwl:z,CVC_CCV_CVV:k,gismu_CVV_final_rafsi:w,short_final_rafsi:j,unstressed_syllable:E,long_rafsi:S,CV:F,final_syllable:M,stress:O,any_syllable:B,slaka:I,consonantal_syllable:J,coda:N,onset:q,nucleus:D,glide:G,re_zei_karsna:H,pa_zei_karsna:K,i:L,u:Q,y:R,initial_pair:T,affricate:U,zunsna:W,syllabic:X,l:Y,m:Z,n:$,r:ll,pfbgvkx:nl,d:ul,jz:rl,cs:tl,x:el,t:sl,h:al,post_word:ol,pause:il};if(void 0!==u){if(void 0===Pl[u])throw new Error("Invalid rule name: "+l(u)+".")}else u="uenzi";var hl=0,_l=0,pl=0,yl=[],Al={},gl=Pl[u]();if(null===gl||hl!==n.length){var ml=Math.max(hl,pl),dl=ml<n.length?n.charAt(ml):null,Cl=cl();throw new this.SyntaxError(fl(yl),dl,ml,Cl.line,Cl.column)}return gl},toSource:function(){return this._source}};return n.SyntaxError=function(n,u,r,t,e){function s(n,u){var r,t;switch(n.length){case 0:r="end of input";break;case 1:r=n[0];break;default:r=n.slice(0,n.length-1).join(", ")+" or "+n[n.length-1]}return t=u?l(u):"end of input","Expected "+r+" but "+t+" found."}this.name="SyntaxError",this.expected=n,this.found=u,this.message=s(n,u),this.offset=r,this.line=t,this.column=e},n.SyntaxError.prototype=Error.prototype,n}();


var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': '&quot;',
  "'": '&#39;',
  "/": '&#x2F;'
};

function escapeHtml(string) {
  return String(string).replace(/[&<>"'\/]/g, function (s) {
    return entityMap[s];
  });
}

var pencu = function () {};

(function () {
    "use strict";

    pencu.prototype.getName = function () {
        return "Pencu for Discord";
    };

    pencu.prototype.getDescription = function () {
        return "Lojban hover definitions for Discord";
    };

    pencu.prototype.getVersion = function () {
        return "0.0.1";
    };

    pencu.prototype.getAuthor = function () {
        return "cadgu'a";
    };

    pencu.prototype.getSettingsPanel = function () {
        return "";
    };

    pencu.prototype.load = function () {
        $.getScript(
            "https://rawgit.com/lojban/diskord-zifpau/master/pencu/definitions.js",
            function() {
                $.getScript(
                    "https://rawgit.com/lojban/diskord-zifpau/master/pencu/lumci.js",
                    function() {
                        fixDefinitions(definitions);
                    }
                )
            });

        initJQueryPlugins($);
    };

    pencu.prototype.unload = function () {};

    pencu.prototype.stop = function () {
        // Swap every emote back to its original text
        $(".pencu-atki").each(function() {
            var gismu = $(this);
            gismu.replaceWith(document.createTextNode(gismu.attr("alt")));
        });
        console.log("la pemcu ku sisti");
    };

    function makeSelpehu (valsi) {
        var cleaned = valsi.replace(/[^\w']/g, '');
        var selpehu = $("<a>", {
            href: "http://vlasisku.lojban.org/vlasisku/" + cleaned,
            class: "pemcu-atki",
            target: "_blank",
            title: getDefinition(cleaned),
            text: valsi,
        }).prop('outerHTML');
        return selpehu.toString();
    };

    function makeVinpa (pencu, content) {
        // Create and insert tooltip
        var vinpa = $("<div>")
            .append(content)
            .addClass("tooltip tooltip-top tooltip-normal");

        return vinpa;

    }

    function positionVinpa(pencu, vinpa) {
        // Position the tooltip
        var position = pencu.offset();
        position.top -= vinpa.height() + 20;
        position.left += pencu.width()/2 - vinpa.width()/2 - 10;
        vinpa.offset(position);
    }

    function initJQueryPlugins($) {
        $.fn.setupVinpa = function () {
            // find children with a title attribute
            return this.find("[title]").each(function () {
                // grab the title
                var title = $(this).attr("title");
                // add marker class and remove title
                $(this).addClass("pencu-vinpa").removeAttr("title");
                $(this).on("mouseover.pencu-vinpa", function () {
                    var vinpa = makeVinpa($(this), title);
                    $(".tooltips").append(vinpa);
                    positionVinpa($(this), vinpa);
                    // Set a handler to destroy the tooltip
                    $(this).on("mouseout.pencu-vinpa", function () {
                        // remove this handler
                        $(this).off("mouseout.pencu-vinpa");
                        vinpa.remove();
                    });
                });
            });
        };
    }

    // Helper function for finding all elements matching selector affected by a mutation
    function mutationFind(mutation, selector) {
        var target = $(mutation.target), addedNodes = $(mutation.addedNodes);
        var mutated = target.add(addedNodes).filter(selector);
        var descendants = addedNodes.find(selector);
        var ancestors = target.parents(selector);
        return mutated.add(descendants).add(ancestors);
    }

    // Helper function for finding all elements matching selector removed by a mutation
    function mutationFindRemoved(mutation, selector) {
        var removedNodes = $(mutation.removedNodes);
        var mutated = removedNodes.filter(selector);
        var descendants = removedNodes.find(selector);
        return mutated.add(descendants);
    }

    pencu.prototype.start = function () {
        console.log("la pemcu ku tolsti")
    };

    function updateToken(tokens, i, token) {
        try {
            // parse a token into lojban
            var parse = camxes.parse(token.replace(/[^\w'\.]/g, ''));
            // bail if no parse possible
            if (parse.length === 0) { return; }

            var parts = []; // each token may contain multiple adjacent valsi
            for (var k=0; k<parse.length; k++) {
                var selmaho = parse[k][0];
                // don't handle cmevla or fu'ivla
                if (selmaho == "cmevla") {
                    throw selmaho;
                }
                if (selmaho == "fu'ivla") {
                    throw selmaho;
                }
                var valsi = parse[k][1];
                console.log("Valsi: " + valsi);
                parts.push(makeSelpehu(valsi));
            }
            var result = parts.join("");
            tokens[i] = result;
        } catch (err) {
            tokens[i] = escapeHtml(tokens[i]);
        }
    };

    pencu.prototype.observer = function (e) {
        var messages = mutationFind(e, ".message-content").not(":has(.pemcu-atki)");
        if (messages.length == 0) {
            messages = mutationFind(e, ".message-text").not(":has(.pemcu-atki)");
        }
        messages.each(function() {
            // dont update this message again
            $(this).addClass("pemcu-atki");
            // skip empty messagesa
            var text = $(this).text();
            if ($.trim(text) == '') {
                return;
            }
            // split the message on whitespace into tokens
            var tokens = text.split(/(\S+)/g)
            // bail if there are no tokens
            if (tokens == null) {
                return;
            }
            // update each token
            $.each(tokens, function(i, e) { updateToken(tokens, i, e); });
            // update message with new tokens
            $(this).html(tokens.join(""));
        });
        messages.setupVinpa();

    };

})();
