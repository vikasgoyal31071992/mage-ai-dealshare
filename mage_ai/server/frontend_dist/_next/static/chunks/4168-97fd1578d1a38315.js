"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4168],{74168:function(t,e,n){var r=n(26304),i=n(21831),o=n(82394),a=n(82684),l=n(26226),s=n(25976),c=n(90948),d=n(84969),u=n(65743),h=n(85587),p=n(79487),f=n(52136),m=n(67778),x=n(29989),y=n(17066),v=n(84482),g=n(76771),k=n(98889),j=n(65376),Z=n(61655),b=n(97745),w=n(48072),L=n(10103),M=n(84791),O=n(84181),P=n(24903),F=n(55485),T=n(30160),C=n(94035),E=n(44897),S=n(8454),I=n(79633),A=n(95363),D=n(61896),N=n(70515),B=n(86735),W=n(79221),X=n(3917),Y=n(98684),_=n(28598),J=["areaBetweenLines","data","events","height","lineLegendNames","margin","width","xAxisLabel","xLabelFormat","yAxisLabel","yLabelFormat"];function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(Object(n),!0).forEach((function(e){(0,o.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z=q(q({},j.j),{},{backgroundColor:E.Z.background.muted,border:"none"}),G=(0,Z.Z)((function(t){var e=t.areaBetweenLines,n=t.data,r=t.events,o=void 0!==r&&r,l=t.getX,Z=t.getY,F=t.getYScaleValues,C=t.gridProps,J=void 0===C?{}:C,V=t.height,G=t.hideGridX,R=t.timeSeries,U=t.hideGridY,H=t.hideTooltip,K=t.increasedXTicks,Q=t.lineLegendNames,$=t.margin,tt=t.noCurve,et=t.numYTicks,nt=t.renderXTooltipContent,rt=t.renderYTooltipContent,it=t.showTooltip,ot=t.thickStroke,at=t.thickness,lt=t.tooltipData,st=t.tooltipLeft,ct=void 0===st?0:st,dt=t.tooltipTop,ut=void 0===dt?[]:dt,ht=t.width,pt=t.xLabelFormat,ft=t.xLabelRotate,mt=void 0===ft||ft,xt=t.yLabelFormat,yt=(0,a.useContext)(s.ThemeContext),vt=(0,a.useCallback)((function(t){return l?l(t):(0,X.U9)(null===t||void 0===t?void 0:t.x)}),[l]),gt=(0,a.useCallback)((function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Z?Z(t):null===t||void 0===t||null===(e=t.y)||void 0===e?void 0:e[n]}),[Z]),kt=E.Z.monotone.gray,jt=E.Z.brand.wind200,Zt=E.Z.content.muted,bt=E.Z.monotone.gray,wt=n.map((function(t){var e=Number(vt(t));return R?(0,X.U9)(e):e})),Lt=at||(ot?2:1),Mt=ht-($.left+$.right),Ot=V-$.top-$.bottom,Pt=Mt/2,Ft=Lt/2,Tt=Lt/2,Ct=0===n.length?0:Math.max.apply(Math,(0,i.Z)(n.map((function(t){var e=t.y;return(null===e||void 0===e?void 0:e.length)||0})))),Et=null;Et=R?(0,M.Z)({domain:[Math.min.apply(Math,(0,i.Z)(wt)),Math.max.apply(Math,(0,i.Z)(wt))],range:[0,Mt]}):(0,O.Z)({domain:[Math.min.apply(Math,(0,i.Z)(wt)),Math.max.apply(Math,(0,i.Z)(wt))],range:[0,Mt]});var St=Math.min.apply(Math,(0,i.Z)(n.map((function(t){var e=t.y;return Math.min.apply(Math,(0,i.Z)(F?F(e):e||[]))})))),It=Math.max.apply(Math,(0,i.Z)(n.map((function(t){var e=t.y;return Math.max.apply(Math,(0,i.Z)(F?F(e):e||[]))})))),At=(0,a.useMemo)((function(){return(0,O.Z)({domain:[St,It],nice:!0,range:[Ot,0]})}),[Ot,It,St]),Dt=ht>520?K?20:10:K?10:5,Nt=(0,Y.K)(yt),Bt=Zt,Wt=Nt.map((function(t){return{stroke:t}})),Xt=(0,P.Z)({domain:Q||[],range:Wt.map((function(t){return t.stroke}))}),Yt=(0,a.useCallback)((function(t){var e=((0,w.Z)(t)||{x:0}).x,r=Et.invert(e-$.left),i=(0,B.ry)(wt,(function(t){return r>=t})),o=n[i-1],a=n[i],l=o;a&&(r-vt(o)>vt(a)-r?l=a:(l=o,i-=1));var s=(0,L.range)(0,Ct).map((function(t){return At(gt(l,t))})),c=s.some((function(t){return"undefined"===typeof t}));(gt(l)||F&&!c)&&it({tooltipData:q(q({},l),{},{index:i}),tooltipLeft:e,tooltipTop:s})}),[n,vt,gt,F,$,Ct,it,Et,wt,At]),_t={};return tt||(_t.curve=b.ZP),ht<10?(0,_.jsx)("div",{}):(0,_.jsxs)(_.Fragment,{children:[Q&&(0,_.jsx)("div",{style:{marginLeft:null===$||void 0===$?void 0:$.left},children:(0,_.jsx)(y.Z,{labelFormat:function(t){return t},scale:Xt,children:function(t){return(0,_.jsx)("div",{style:{display:"flex",flexDirection:S.qs.ROW},children:t.map((function(t,e){return(0,_.jsxs)(v.Z,{margin:"0 5px",onClick:function(){o&&alert("clicked: ".concat(JSON.stringify(t)))},children:[(0,_.jsx)("svg",{height:15,width:15,children:(0,_.jsx)("rect",{fill:t.value,height:15,width:15})}),(0,_.jsx)(g.Z,{align:"left",margin:"0 0 0 4px",children:(0,_.jsx)(T.ZP,{small:!0,children:t.text})})]},"legend-quantile-".concat(e))}))})}})}),(0,_.jsxs)("svg",{height:V,width:ht,children:[!e&&(0,_.jsx)(u.Z,{fill:"transparent",height:V,onMouseLeave:function(){return H()},onMouseMove:Yt,onTouchMove:Yt,onTouchStart:Yt,rx:14,width:ht-($.left+$.right),x:$.left,y:0}),(0,_.jsxs)(x.Z,{left:$.left,top:$.top,children:[!G&&(0,_.jsx)(f.Z,q({height:Ot,pointerEvents:"none",scale:Et,stroke:kt,strokeDasharray:"3,3",strokeOpacity:.4,width:Mt},J)),!U&&(0,_.jsx)(m.Z,q({height:Ot,pointerEvents:"none",scale:At,stroke:kt,strokeDasharray:"3,3",strokeOpacity:.4,width:Mt},J)),(0,_.jsx)("line",{stroke:kt,x1:Mt,x2:Mt,y1:0,y2:Ot}),(0,_.jsx)(c.Z,{numTicks:Dt,scale:Et,stroke:Bt,tickFormat:pt,tickLabelProps:function(t){return{fill:Zt,fontFamily:A.ry,fontSize:D.J5,textAnchor:"middle",transform:mt&&"rotate(-45, ".concat(Et(t),", 0) translate(-32, 4)")}},tickStroke:Bt,top:Ot}),(0,_.jsx)(d.Z,{hideTicks:!0,numTicks:et,scale:At,stroke:Bt,tickFormat:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return xt?xt.apply(void 0,[t].concat(n)):(0,W.P5)(t)},tickLabelProps:function(t){return{dx:String(t).length>4?3:0,fill:Zt,fontFamily:A.ry,fontSize:D.J5,textAnchor:"end",transform:"translate(0,2.5)"}},tickStroke:Bt}),e&&e.map((function(t){var e=t[0],r=t[1];return(0,a.createElement)(k.Z,q(q({},_t),{},{aboveAreaProps:{fill:E.Z.brand.earth400,fillOpacity:.3},belowAreaProps:{fill:jt,fillOpacity:.2},clipAboveTo:0,clipBelowTo:Ot,data:n,id:"".concat(Math.random()),key:"".concat(e,"-").concat(r),x:function(t){return Et(vt(t))},y0:function(t){return At("undefined"===typeof r?St:gt(t,r))},y1:function(t){return At(gt(t,e))}}))})),(0,L.range)(0,Ct).map((function(t){return(0,a.createElement)(h.Z,q(q({},_t),{},{data:n.filter((function(t){return void 0!=t.y})),key:t,pointerEvents:"none",strokeWidth:Lt,x:function(t){Et(vt(t));var e=Mt-Tt;return(0,O.Z)({range:[Ft,e],domain:Et.domain()})(vt(t))},y:function(e){return At(e.y&&(t>=e.y.length?St:gt(e,t)))}},Wt[t]))}))]}),lt&&(0,_.jsxs)("g",{children:[(0,_.jsx)(p.Z,{from:{x:ct,y:$.top},pointerEvents:"none",stroke:I.Ej,strokeDasharray:"5,2",strokeWidth:1,to:{x:ct,y:Ot+$.top}}),ut.map((function(t,e){return(0,_.jsx)("circle",{cx:ct,cy:t+1+$.top,fill:Wt[e].stroke,fillOpacity:.1,pointerEvents:"none",r:4,stroke:bt,strokeOpacity:.1,strokeWidth:1},e)})),ut.map((function(t,e){return(0,_.jsx)("circle",{cx:ct,cy:t+$.top,fill:Wt[e].stroke,pointerEvents:"none",r:4,stroke:Wt[e].stroke,strokeWidth:2},e)}))]})]}),lt&&(0,_.jsxs)("div",{children:[ut.map((function(t,e){var n=gt(lt,e);return e>=1&&Math.abs(ut[e-1]-t)<5*N.iI&&(t+=3*N.iI),(0,_.jsxs)(j.Z,{left:ct>Pt?ct-(0,W.Vs)(rt?function(){return rt(gt(lt),e,lt)}:void 0)*N.iI:ct+N.iI,style:z,top:t-2*N.iI,children:[rt&&rt(gt(lt),e,lt),!rt&&(0,_.jsxs)(T.ZP,{center:!0,small:!0,children:[n.toFixed?n.toFixed(3):n," ",null===Q||void 0===Q?void 0:Q[e]]})]},e)})),(0,_.jsxs)(j.Z,{left:ct>Pt?ct-4*(0,W.Vs)(nt?function(){return nt(vt(lt),null===lt||void 0===lt?void 0:lt.index,lt)}:void 0):ct,style:q(q({},z),{},{transform:"translateX(-65%)"}),top:Ot+$.top,children:[nt&&nt(vt(lt),null===lt||void 0===lt?void 0:lt.index,lt),!nt&&(0,_.jsx)(T.ZP,{center:!0,small:!0,children:vt(lt).toFixed(3)})]})]})]})}));e.Z=function(t){var e=t.areaBetweenLines,n=t.data,i=(t.events,t.height),o=t.lineLegendNames,a=t.margin,s=void 0===a?{}:a,c=t.width,d=t.xAxisLabel,u=t.xLabelFormat,h=t.yAxisLabel,p=t.yLabelFormat,f=(0,r.Z)(t,J),m=q(q({},{bottom:3*N.iI,left:5*N.iI,right:3*N.iI,top:3*N.iI}),s);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{style:{display:"flex",height:i,marginBottom:N.iI,width:"100%"},children:[h&&(0,_.jsx)(F.ZP,{alignItems:"center",fullHeight:!0,justifyContent:"center",width:28,children:(0,_.jsx)(C.Z,{children:(0,_.jsx)(T.ZP,{center:!0,muted:!0,small:!0,children:h})})}),(0,_.jsx)("div",{style:{height:i,width:"undefined"===typeof c?"100%":c},children:(0,_.jsx)(l.Z,{children:function(t){var r=t.width,i=t.height;return(0,_.jsx)(G,q(q({},f),{},{areaBetweenLines:e,data:n,height:i,lineLegendNames:o,margin:m,width:r,xLabelFormat:u,yLabelFormat:p}))}})})]}),d&&(0,_.jsx)("div",{style:{paddingLeft:h?36:0,paddingTop:4},children:(0,_.jsx)(T.ZP,{center:!0,muted:!0,small:!0,children:d})})]})}}}]);