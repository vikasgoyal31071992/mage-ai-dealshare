"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8095],{33795:function(t,e,n){n.d(e,{Vd:function(){return y},ew:function(){return w},zq:function(){return j}});var r=n(82394),o=n(21831),i=n(82684),a=n(25976),c=n(48072),l=n(24903),u=n(98677),d=n(84181),f=n(44897),s=n(79633),h=n(70515),p=n(61896),g=n(81728);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y="__y",b={bottom:h.iI*(3+h.cd),left:h.iI*h.cd,right:h.iI*h.cd,top:h.iI*h.cd};function x(t,e){return Math.max.apply(Math,(0,o.Z)(t.map(e)))}function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t||{},n=e.flat,r=[[s.a$,s.Ej,s.hM,s.ZA,s.$R,s.X_,s.er,s.hl],["#8E73E5","#4F7EFF","#FF5A7A","#56E06B","#FFD64A","#CBA9B2","#4F86FF","#FF6FFB"],["#5338AA","#1E4BCC","#CB1035","#209A3C","#E6AB00","#836970","#0C3BCC","#CB00C6"]];return n?r.reduce((function(t,e){return t.concat(e)}),[]):r.reduce((function(t,e,n){return e.forEach((function(e,n){var r;t[n]||(t[n]=[]),null===(r=t[n])||void 0===r||r.push(e)})),t}),[])}function w(t){var e=t.data,n=t.height,r=t.keyForYData,s=t.large,h=t.margin,v=void 0===h?{}:h,y=t.orientationVertical,w=void 0!==y&&y,O=t.showTooltip,Z=t.width,k=t.yLabelFormat,A=(0,i.useContext)(a.ThemeContext),P=(0,i.useCallback)((function(t){return t[r]}),[r]),S=k;S||(S=function(t){return t.length>20?"".concat(t.substring(0,20),"..."):t});var C=s?p.iD:p.J5,F=m(m({},b),v),D=e.slice(Math.max(0,e.length-50)),M=(0,i.useMemo)((function(){return Object.keys((null===D||void 0===D?void 0:D[0])||{}).filter((function(t){return t!==r}))}),[D,r]),I=j(),L=(0,l.Z)({domain:M,range:[].concat((0,o.Z)(I.map((function(t){return t[0]}))),(0,o.Z)(I.map((function(t){return t[1]}))),(0,o.Z)(I.map((function(t){return t[2]}))))}),T=(0,i.useMemo)((function(){return D.map(P)}),[D,P]),E=(0,u.Z)({domain:T,padding:.1}),B=(0,u.Z)({domain:M,padding:.1}),R=(0,d.Z)({domain:[0,x(D,(function(t){return x(M,(function(e){return Number(t[e])}))}))]}),N={active:(null===A||void 0===A?void 0:A.content.default)||f.Z.content.default,backgroundPrimary:(null===A||void 0===A?void 0:A.chart.backgroundPrimary)||f.Z.chart.backgroundPrimary,backgroundSecondary:(null===A||void 0===A?void 0:A.chart.backgroundSecondary)||f.Z.chart.backgroundSecondary,muted:(null===A||void 0===A?void 0:A.content.muted)||f.Z.content.muted,primary:(null===A||void 0===A?void 0:A.chart.primary)||f.Z.chart.primary,tooltipBackground:(null===A||void 0===A?void 0:A.background.navigation)||f.Z.background.navigation},_=T;w&&(_=D.reduce((function(t,e){return t.concat(M.map((function(t){var n=e[t];return(0,g.HW)(n)?parseInt(String(n)):n})))}),[]));var z=Math.min(Math.max.apply(Math,(0,o.Z)(_.map((function(t){return String(t).length})))),20);F.left+=7*z;var V=Z-(F.left+F.right),J=n-(F.top+F.bottom);w?(E.rangeRound([0,V]),R.rangeRound([J,0])):(E.rangeRound([J,0]),R.rangeRound([0,V])),B.rangeRound([0,E.bandwidth()]);var K=D.map(P).length,Y=0;w||(Y=E(_[K-1]));var X=(0,i.useCallback)((function(t){var e=(0,c.Z)(t)||{x:0,y:0},n=e.x,r=e.y,o=n-F.left,i=r-F.top,a=0;a=w?(o-Y/2)/(V-Y):1-(i-Y/2)/(J-Y);var l=Math.floor(a*K),u=D[l];"undefined"===typeof u&&(u=D[l-1]),w?o>Y&&o<V+F.left-Y&&O({tooltipData:u,tooltipLeft:n,tooltipTop:r}):i>Y&&i<J-Y&&O({tooltipData:u,tooltipLeft:n,tooltipTop:r})}),[D,K,F.left,F.top,w,O,Y,V,J]);return{colorScale:L,colors:N,data:D,fontSize:C,handleTooltip:X,margin:F,tempScale:R,tickValues:_,xKeys:M,xMax:V,y1Scale:B,yLabelFormat:S,yMax:J,yScale:E,ySerialize:P}}},52729:function(t,e,n){n.d(e,{Z:function(){return K}});var r=n(26304),o=n(75582),i=n(21831),a=n(82394),c=n(82684),l=n(26226),u=n(84969),d=n(90948),f=n(65743),s=n(29989),h=n(25976),p=n(61655),g=n(16853),v=n(65376),m=n(48072),y=n(98677),b=n(84181),x=n(55485),j=n(4190),w=n(30160),O=n(94035),Z=n(70987),k=n(79633),A=n(89370),P=n(95363),S=n(61896),C=n(70515),F=n(38469),D=n(15817),M=function(t){return t.toISOString().slice(0,10)},I=function(t){return t.slice(0,10)},L=function(t,e){var n=t.toISOString().slice(0,10),r=e.toISOString().slice(0,10);return"".concat(n,":").concat(r)},T=n(79221),E=n(98684),B=n(3917),R=n(28598),N=["height","loading","selected","width","xAxisLabel","yAxisLabel"];function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){(0,a.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var V={bottom:C.iI,left:3*C.iI,right:0,top:1*C.iI},J=(0,p.Z)((function(t){var e=t.columnType,n=t.data,r=void 0===n?[]:n,a=t.getBarColor,l=t.getXValue,p=t.getYValue,x=t.height,j=t.hideTooltip,O=t.large,N=t.margin,_=void 0===N?{}:N,J=t.muted,K=t.noPadding,Y=t.numberOfXTicks,X=t.renderTooltipContent,q=t.selected,H=t.showAxisLabels,U=t.showTooltip,W=t.showYAxisLabels,$=t.showZeroes,G=t.sortData,Q=t.tooltipData,tt=t.yTooltipFormat,et=t.tooltipLeft,nt=t.tooltipOpen,rt=t.tooltipTop,ot=t.width,it=t.xLabelFormat,at=t.yLabelFormat,ct=O?S.J5:S.VK,lt=(0,c.useCallback)((function(t){return l?l(t):t[0]}),[l]),ut=(0,c.useCallback)((function(t){return p?p(t):t[1]}),[p]),dt=(0,c.useContext)(h.ThemeContext),ft=e===A.RL.DATETIME,st=z(z({},V),_);H&&(st=z(z({},st),{},{left:st.left+C.iI}));var ht=G?G(r):r.sort((function(t,e){return e[1]-t[1]})),pt=ft?r.sort((function(t,e){return new Date(t[0])-new Date(e[0])})).filter((function(t){return!!t[0]})):ht.slice(0,60),gt=ot-(st.left+st.right),vt=x-(st.bottom+st.top),mt=ft?function(t,e){var n,r=t.map((function(t){return new Date(t[0])})).sort((function(t,e){return t-e}));return(0,D.Z)({domain:(n=r,[(0,F.Z)(n[0]),(0,F.Z)(n[n.length-1])]),nice:!0,range:[0,e]})}(pt,gt):null,yt=function(t,e){if(null===e)return{};var n=e.ticks().map((function(t){return t.toISOString()})),r={},o=0,i=1;return t.forEach((function(t){var e=new Date(t[0]),a=t[1],c=n[o],l=n[i];if(c&&l){var u=new Date(c),d=new Date(l),f=L(u,d);if(e>=u&&e<d)r[f]=(r[f]||0)+a;else for(;i<n.length||!r[f];)if(o+=1,i+=1,u=new Date(n[o]),d=new Date(n[i]),f=L(u,d),e>=u&&e<d)return void(r[f]=(r[f]||0)+a)}})),n.reduce((function(t,e,n,r){if(0===n)return t;var o=I(e),i=I(r[n-1]);return t.push("".concat(i,":").concat(o)),t}),[]).forEach((function(t){r[t]=r[t]||0})),r}(pt,mt);pt=mt?Object.entries(yt).sort((function(t,e){return new Date(I(t[0])).getTime()-new Date(I(e[0])).getTime()})):pt;var bt=mt?Math.max.apply(Math,(0,i.Z)(Object.values(yt))):0,xt=pt.reduce((function(t,e){return(0!==ut(e)||ft||$)&&t.push(lt(e)),t}),[]),jt=xt.length,wt=function(t,e,n){return n?.05:t>=30&&e<300?.5:t>=15?.3:t>=5?.1:t>2?.05:2===t?.025:0}(jt,ot,ft),Ot=(0,y.Z)({domain:xt,paddingInner:K?null:wt,range:[0,gt],round:!1}),Zt=(0,b.Z)({domain:[0,Math.max.apply(Math,(0,i.Z)(pt.map(ut)))],range:[vt,0],round:!0}),kt=(0,E.K)(dt),At={active:((null===dt||void 0===dt?void 0:dt.content)||Z.Z.content).active,default:kt[0],muted:((null===dt||void 0===dt?void 0:dt.monotone)||Z.Z.monotone).gray,selected:((null===dt||void 0===dt?void 0:dt.elevation)||Z.Z.elevation).visualizationAccent},Pt=At.default;J?Pt=At.muted:q&&(Pt=At.selected);var St=jt?ft?bt:Math.max.apply(Math,(0,i.Z)(pt.map((function(t){return ut(t)})))):0,Ct=Math.floor(St/6),Ft=[0],Dt=0;if(St>6)for(;Dt<St;)Ft.push(Dt+Ct),Dt+=Ct;else for(;Dt<=St;)Ft.push(Dt+1),Dt+=1;St>9999?st=z(z({},st),{},{left:O?8*C.iI:4.1*C.iI}):St>999&&(st=z(z({},st),{},{left:O?5*C.iI:3.6*C.iI}));var Mt=ft?2.25:0,It=jt<10||e===A.RL.NUMBER||e===A.RL.NUMBER_WITH_DECIMALS||ft||W,Lt=(0,c.useCallback)((function(t){var e,n=(0,m.Z)(t)||{x:0,y:0},r=n.x,i=n.y,a=(r-(H?st.left:0))/gt,c=Math.floor(jt*a),l=pt[c];"undefined"===typeof l&&(l=pt[0]);var u=lt(l);u=(null===(e=u)||void 0===e?void 0:e.length)>15?"".concat(u.slice(0,21)):u;var d=l,f=(0,o.Z)(d,3),s=f[0],h=f[1],p=f[2],g=X?X(h,c,{values:[s,p]}):tt?tt(h,c,{values:[s,p]}):"".concat(u," (").concat(ut(l),")");U({tooltipData:g,tooltipLeft:r,tooltipTop:i})}),[pt,jt,lt,ut,st.left,X,H,U,tt,gt]);return ot<10||!r.length?null:(0,R.jsxs)("div",{children:[(0,R.jsxs)("svg",{height:x+st.bottom*(ft?7.5:3),width:ot,children:[(0,R.jsx)(s.Z,{left:H?st.left:0,top:st.top+Mt,children:pt.reduce((function(t,e){var n=lt(e),r=ut(e);if(0!==r){var o,i=Ot.bandwidth(),c=vt-(null!==(o=Zt(r))&&void 0!==o?o:0),l=Ot(n),u=vt-c;t.push((0,R.jsx)(f.Z,{fill:a?a(e):Pt,height:c,onMouseLeave:function(){return j()},onMouseMove:Lt,onTouchMove:Lt,onTouchStart:Lt,width:i,x:l,y:u},"bar-".concat(n)))}return t}),[])}),H&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(u.Z,{left:st.left,scale:Zt,stroke:At.muted,tickFormat:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return at?at.apply(void 0,[t].concat(n)):(0,T.P5)(t)},tickLabelProps:function(){return{fill:At.active,fontFamily:P.ry,fontSize:ct,textAnchor:"end",transform:"translate(-2,2.5)"}},tickStroke:At.muted,tickValues:Ft,top:st.top+Mt}),(0,R.jsx)(d.Z,{left:st.left,numTicks:ft?void 0:Y||6,orientation:"top",scale:mt||Ot,stroke:At.muted,tickFormat:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return it?it.apply(void 0,[t].concat(n)):(0,B.J_)(t)?M(t):t.toString()},tickLabelProps:function(t){return{fill:It?At.active:"transparent",fontFamily:P.ry,fontSize:ct,textAnchor:"middle",transform:ft?"rotate(-90,".concat(mt(t),",0) translate(-33,10)"):"translate(0, ".concat(3*st.bottom,")")}},tickLineProps:{transform:"translate(0,".concat(C.iI,")")},tickStroke:It?At.muted:"transparent",top:vt+st.top+Mt})]})]}),nt&&Q&&(0,R.jsx)(g.Z,{left:et,style:v.j,top:rt,children:(0,R.jsx)(w.ZP,{color:k.E5,small:!0,children:Q})})]})}));var K=function(t){var e=t.height,n=t.loading,o=t.selected,i=t.width,a=t.xAxisLabel,c=t.yAxisLabel,u=(0,r.Z)(t,N);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)("div",{style:{display:"flex",height:e,marginBottom:C.iI,width:"100%"},children:[c&&(0,R.jsx)(x.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,R.jsx)(O.Z,{children:(0,R.jsx)(w.ZP,{center:!0,muted:!0,small:!0,children:c})})}),(0,R.jsxs)("div",{style:{height:e,width:c?0===i?i:i-28:i},children:[n&&(0,R.jsx)(j.Z,{}),!n&&(0,R.jsx)(l.Z,{children:function(t){var e=t.height,n=t.width;return(0,R.jsx)(J,z(z({},u),{},{height:e,selected:o,width:n}))}})]})]}),a&&(0,R.jsx)("div",{style:{paddingLeft:c?36:0,paddingTop:4},children:(0,R.jsx)(w.ZP,{center:!0,muted:!0,small:!0,children:a})})]})}},87862:function(t,e,n){n.d(e,{Z:function(){return S}});var r=n(26304),o=n(82394),i=n(75582),a=n(26226),c=n(28940),l=n(82684),u=n(29989),d=n(25976),f=n(11684),s=n(24903),h=n(30160),p=n(44897),g=n(95363),v=n(61896),m=n(70515),y=n(33795),b=n(28598),x=["height","width","xAxisLabel"];function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={bottom:0,left:0,right:0,top:0},Z=function(t){var e=t.endAngle;return{endAngle:e>Math.PI?2*Math.PI:0,opacity:0,startAngle:e>Math.PI?2*Math.PI:0}},k=function(t){var e=t.startAngle;return{endAngle:t.endAngle,opacity:1,startAngle:e}};function A(t){var e=t.animate,n=t.arcs,r=t.path,o=t.getKey,a=t.getColor,c=t.onClickDatum,l=t.textColor,u=t.xLabelFormat,d=t.yLabelFormat;return(0,f.useTransition)(n,{enter:k,from:e?Z:k,keys:o,leave:e?Z:k,update:k})((function(t,e,n){var s,h,p,m,y=n.key,x=r.centroid(e),j=(0,i.Z)(x,2),O=j[0],Z=j[1],k=e.endAngle-e.startAngle>=.1,A=u||d?u?u(null===e||void 0===e||null===(s=e.data)||void 0===s?void 0:s[0],null===e||void 0===e||null===(h=e.data)||void 0===h?void 0:h[1],[{index:null===e||void 0===e?void 0:e.index}]):d(null===e||void 0===e||null===(p=e.data)||void 0===p?void 0:p[1],null===e||void 0===e||null===(m=e.data)||void 0===m?void 0:m[0],[{index:null===e||void 0===e?void 0:e.index}]):o(e);return(0,b.jsxs)("g",{children:[(0,b.jsx)(f.animated.path,{d:(0,f.to)([t.startAngle,t.endAngle],(function(t,n){return r(w(w({},e),{},{endAngle:n,startAngle:t}))})),fill:a(e),onClick:function(){return c(e)},onTouchStart:function(){return c(e)}}),k&&(0,b.jsx)(f.animated.g,{style:{opacity:t.opacity},children:(0,b.jsx)("text",{dy:".33em",fill:l,fontFamily:g.ry,fontSize:v.J5,pointerEvents:"none",textAnchor:"middle",x:O,y:Z,children:A})})]},y)}))}function P(t){var e=t.animate,n=void 0===e||e,r=t.data,o=t.getX,i=t.getY,a=t.height,f=t.margin,h=void 0===f?O:f,g=t.textColor,v=t.thickness,x=t.xLabelFormat,j=t.yLabelFormat,Z=t.width,k=(0,l.useState)(null),P=k[0],S=k[1],C=(0,l.useContext)(d.ThemeContext),F=g||(null===C||void 0===C?void 0:C.content.active)||p.Z.content.active;if(Z<10)return null;var D=(0,s.Z)({domain:r.map((function(t){return o(t)})),range:(0,y.zq)({flat:!0})}),M=Z-h.left-h.right,I=a-h.top-h.bottom,L=Math.min(M,I)/2,T=I/2,E=M/2,B=v?Math.min(M,I)/2*v:Math.min(M/4,12*m.iI);return(0,b.jsx)("svg",{height:a,width:Z,children:(0,b.jsx)(u.Z,{left:E+h.left,top:T+h.top,children:(0,b.jsx)(c.Z,{cornerRadius:m.iI/2,data:P?r.filter((function(t){return JSON.stringify(t)===JSON.stringify(P)})):r,innerRadius:Math.max(L-B,12.25),outerRadius:L,padAngle:.005,pieValue:i,children:function(t){return(0,b.jsx)(A,w(w({},t),{},{animate:n,getColor:function(t){var e=t.data;return D(o(e))},getKey:function(t){var e=t.data;return o(e)},onClickDatum:function(t){var e=t.data;return n&&S(P&&JSON.stringify(P)===JSON.stringify(e)?null:e)},textColor:F,xLabelFormat:x,yLabelFormat:j}))}})})})}function S(t){var e=t.height,n=t.width,o=t.xAxisLabel,i=(0,r.Z)(t,x),c={};return"undefined"!==typeof e&&(c.height=e),"undefined"!==typeof n&&(c.width=n),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{style:c,children:(0,b.jsx)(a.Z,{children:function(t){var e=t.width,n=t.height;return(0,b.jsx)(P,w(w({},i),{},{height:n,width:e}))}})}),o&&(0,b.jsx)("div",{style:{paddingTop:4},children:(0,b.jsx)(h.ZP,{center:!0,muted:!0,small:!0,children:o})})]})}},98684:function(t,e,n){n.d(e,{K:function(){return o}});var r=n(70987),o=function(t){var e=t||r.Z,n=e.brand,o=n.earth200,i=n.earth300,a=n.earth400,c=n.energy200,l=n.energy300,u=n.energy400,d=n.fire200,f=n.fire300,s=n.fire400,h=n.water200,p=n.water300,g=n.water400,v=n.wind200,m=n.wind300,y=n.wind400,b=e.chart;return[b.backgroundPrimary,b.backgroundSecondary,b.backgroundTertiary].concat([y,g,s,u,a,m,p,f,l,i,v,h,d,c,o])}},94035:function(t,e,n){var r=n(25976).default.div.withConfig({displayName:"YAxisLabelContainer",componentId:"sc-qwp21x-0"})(["-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);white-space:nowrap;"]);e.Z=r},79221:function(t,e,n){n.d(e,{P5:function(){return r},Vs:function(){return o}});n(81728);function r(t,e){var n=e||{},r=n.maxFractionDigits,o=n.minAmount,i=Intl.NumberFormat("en-US",{maximumFractionDigits:r||2,notation:"compact"});return"number"!==typeof t?t:t>=(o||1e4)?i.format(t):t.toString()}function o(t){var e,n;if("undefined"===typeof t)return 0;var r=null===t||void 0===t||null===(e=t())||void 0===e||null===(n=e.props)||void 0===n?void 0:n.children;return(Array.isArray(r)?r:[r]).join("").length}}}]);