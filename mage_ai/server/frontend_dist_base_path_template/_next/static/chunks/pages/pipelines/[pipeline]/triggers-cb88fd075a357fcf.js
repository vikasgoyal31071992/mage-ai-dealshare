(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4249],{16488:function(e,n,r){"use strict";r.d(n,{IJ:function(){return h},M8:function(){return P},Uc:function(){return j},XM:function(){return Z},_U:function(){return v},eI:function(){return b},gU:function(){return y},lO:function(){return S},ri:function(){return m},tL:function(){return w},vJ:function(){return O},xH:function(){return x}});var t,i=r(82394),o=r(92083),l=r.n(o),u=r(3917),c=r(4383),a=r(30229),d=r(42122),s=r(86735);function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){(0,i.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var v=function(e){return!!e&&!Object.values(a.U5).includes(e)};function h(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var r=n.block_uuid,t=n.completed_at,o=n.started_at,u=n.status,c=null;o&&t&&(c=l()(t).valueOf()-l()(o).valueOf());return f(f({},e),{},(0,i.Z)({},r,{runtime:c,status:u}))}),{})}var g,m=function(e){var n=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:a.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:a.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:a.Xm.API}];return e?n.slice(0,1):n};function x(e){var n=(0,d.gR)(e,[a.gm.INTERVAL,a.gm.TYPE]),r=e[a.gm.INTERVAL];r&&(n["schedule_interval[]"]=encodeURIComponent(r));var t=e[a.gm.TYPE];return t&&(n["schedule_type[]"]=t),n}function b(e){return e?new Date(l()(e).valueOf()):null}function j(e,n){return n?(0,u.XG)(e,n):function(e){if("string"!==typeof e)return e;var n=e.split("+")[0];return l()(b(n)).format(u.Nx)}(e)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(g||(g={}));var w=(t={},(0,i.Z)(t,g.DAY,86400),(0,i.Z)(t,g.HOUR,3600),(0,i.Z)(t,g.MINUTE,60),(0,i.Z)(t,g.SECOND,1),t);function y(e){var n=g.SECOND,r=e;return e%86400===0?(r/=86400,n=g.DAY):e%3600===0?(r/=3600,n=g.HOUR):e%60===0&&(r/=60,n=g.MINUTE),{time:r,unit:n}}function O(e,n){return e*w[n]}function Z(e,n,r){var t,i=l()(e);return i.set("hour",+(null===n||void 0===n?void 0:n.hour)||0),i.set("minute",+(null===n||void 0===n?void 0:n.minute)||0),i.set("second",0),t=i.format(u.TD),null!==r&&void 0!==r&&r.includeSeconds&&(t=t.concat(":00")),null!==r&&void 0!==r&&r.localTimezone&&(t=i.format(u.lE),null!==r&&void 0!==r&&r.convertToUtc&&(t=(0,u.d$)(t,{includeSeconds:null===r||void 0===r?void 0:r.includeSeconds,utcFormat:!0}))),t}function P(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="",t=!0;if(t){var i=(0,c.XF)();n?r="".concat(i,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/api_trigger"):(r="".concat(i,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/pipeline_runs"),null!==e&&void 0!==e&&e.token&&(r="".concat(r,"/").concat(e.token)))}return r}function _(e,n,r){return e.match(/[*,-/]/)?{additionalOffset:0,cronValue:e}:function(e,n,r){var t=r.indexOf(e),i=0;if(n<0)for(var o=0;o>n;o--)0===t?(t=r.length-1,i-=1):t-=1;else if(n>0)for(var l=0;l<n;l++)t===r.length-1?(t=0,i+=1):t+=1;var u="number"===typeof r[t]?r[t]:e;return{additionalOffset:i,cronValue:String(u)}}(+e,n,r)}var I=(0,s.m5)(60),k=(0,s.m5)(24),C=(0,u.Cs)();function S(e,n){if(!e)return e;var r=l()().local().format("Z"),t=r.split(":"),i="-"===r[0],o=3===t[0].length?Number(t[0].slice(1)):Number(t[0]),u=Number(t[1]);(i&&!n||!i&&n)&&(o=-o,u=-u);var c=e.split(" "),a=c[0],d=c[1],s=c[2],p=_(a,u,I),f=_(d,o+p.additionalOffset,k);if(c[0]=p.cronValue,c[1]=f.cronValue,0!==(null===f||void 0===f?void 0:f.additionalOffset)){var v=_(s,f.additionalOffset,C);c[2]=v.cronValue}return c.join(" ")}},38415:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Ce}});var t=r(77837),i=r(75582),o=r(82394),l=r(38860),u=r.n(l),c=r(12691),a=r.n(c),d=r(82684),s=r(69864),p=r(34376),f=r(24138),v=r(15338),h=r(68562),g=r(48670),m=r(55072),x=r(75457),b=r(30229),j=r(93808),w=r(82359),y=r(71610),O=r(71180),Z=r(90299),P=r(55485),_=r(85854),I=r(37899),k=r(65956),C=r(38276),S=r(30160),E=r(44897),T=r(70515),M={uuid:"RUNTIME VARIABLES"},R={uuid:"BOOKMARK VALUES"},N=r(32080),B=r(8916),D=r(81728),A=r(28598);function V(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function U(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?V(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var F="".concat(T.iI,"px ").concat(3*T.iI,"px");var H=function(e){var n=e.initialPipelineSchedulePayload,r=e.onCancel,t=e.onSuccess,i=e.pipeline,l=e.variables,u=(0,d.useState)(null),c=u[0],a=u[1],s=(0,d.useState)(!0),p=s[0],f=s[1],h=(0,d.useState)(l||{}),g=h[0],m=h[1],x=(0,d.useState)(null),j=x[0],w=x[1],V=(0,d.useMemo)((function(){return U(U({},n),{},{name:(0,D.Y6)(),variables:p?(0,B.e7)(U(U({},g),c?(0,o.Z)({},b.PN,c):{})):null})}),[c,n,p,g]),H=(0,d.useMemo)((function(){return null!==i&&void 0!==i&&i.blocks?(0,N.n)(i):null}),[i]),G=(0,d.useMemo)((function(){var e;return H&&(null===(e=Object.keys(H||{}))||void 0===e?void 0:e.length)>=1?[M,R]:null}),[H]);(0,d.useEffect)((function(){(null===G||void 0===G?void 0:G.length)>=1&&!j&&w(null===G||void 0===G?void 0:G[0])}),[j,w,G]);var L=(0,d.useMemo)((function(){return null!==G&&void 0!==G&&G.length?(0,A.jsx)(Z.Z,{onClickTab:function(e){w(e)},selectedTabUUID:null===j||void 0===j?void 0:j.uuid,tabs:G,underlineStyle:!0}):null}),[j,w,G]);return(0,A.jsxs)(k.Z,{noPadding:!0,footer:(0,A.jsxs)(P.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,A.jsx)(O.ZP,{onClick:function(){t({pipeline_schedule:V}),r()},padding:F,primaryAlternate:!0,children:"Run now"}),(0,A.jsx)(C.Z,{mr:1}),(0,A.jsx)(O.ZP,{borderColor:E.Z.background.page,onClick:r,padding:F,secondary:!0,children:"Cancel"})]}),header:(0,A.jsx)(_.Z,{level:5,children:"Run pipeline now"}),maxHeight:"90vh",minWidth:85*T.iI,subtitle:(0,A.jsxs)(A.Fragment,{children:[!(null!==G&&void 0!==G&&G.length)&&(0,A.jsx)(C.Z,{p:T.cd,children:(0,A.jsx)(S.ZP,{default:!0,children:"Creates a new trigger and immediately runs the current pipeline once."})}),(null===G||void 0===G?void 0:G.length)>=1&&L,(0,A.jsx)(v.Z,{light:!0})]}),children:[(!(null!==G&&void 0!==G&&G.length)||M.uuid===(null===j||void 0===j?void 0:j.uuid))&&(0,A.jsxs)(A.Fragment,{children:[(null===G||void 0===G?void 0:G.length)>=1&&(0,A.jsx)(C.Z,{p:T.cd,children:(0,A.jsx)(S.ZP,{default:!0,children:"Creates a new trigger and immediately runs the current pipeline once."})}),(0,A.jsx)(I.Z,{enableVariablesOverwrite:p,originalVariables:l,runtimeVariables:g,setEnableVariablesOverwrite:f,setRuntimeVariables:m})]}),R.uuid===(null===j||void 0===j?void 0:j.uuid)&&(0,A.jsx)(y.Z,{bookmarkValues:c,pipeline:i,setBookmarkValues:a})]})},G=r(97618),L=r(72473),Y=r(25976),X=r(42631),z=r(47041),q=r(91437),Q=Y.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-pu8csx-0"})([""," overflow-y:auto;position:relative;width:100%;z-index:3;border-radius:","px;"," "," "," ",""],z.w5,X.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||E.Z.background).page,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.flex&&"\n    flex: 1;\n  "}),(function(e){return(e.noBorder||e.noBorderRadius)&&"\n    border-radius: 0;\n  "})),W=Y.default.div.withConfig({displayName:"indexstyle__ColumnHeaderRowStyle",componentId:"sc-pu8csx-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;position:sticky;top:0;width:100%;z-index:2;"," "," ",""],X.n_,X.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||E.Z.background).panel,";\n  ")}),(function(e){return!e.noBorder&&"\n    border: 1px solid ".concat((e.theme.interactive||E.Z.interactive).defaultBorder,";\n  ")}),(function(e){return(e.noBorder||e.noBorderRadius)&&"\n    border-radius: 0;\n  "})),J=Y.default.div.withConfig({displayName:"indexstyle__ColumnHeaderCellStyle",componentId:"sc-pu8csx-2"})([""," ",""],(function(e){return!e.small&&"\n    padding: ".concat(1.5*T.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*T.iI,"px;\n  ")})),K=Y.default.div.withConfig({displayName:"indexstyle__RowTitleStyle",componentId:"sc-pu8csx-3"})([""," "," ",""],(function(e){return"\n    background-color: ".concat((e.theme.background||E.Z.background).header,";\n    border: 1px solid ").concat((e.theme.interative||E.Z.interactive).defaultBorder,";\n  ")}),(function(e){return!e.small&&"\n    padding: ".concat(1.5*T.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*T.iI,"px;\n  ")})),$=Y.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-pu8csx-4"})([""," "," "," ",""],(0,q.eR)(),(function(e){return"\n    background-color: ".concat((e.theme.background||E.Z.background).page,";\n    border-top: none;\n    border-bottom: none;\n  ")}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.interactive||E.Z.interactive).defaultBorder,";\n    border-left: 1px solid ").concat((e.theme.interactive||E.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||E.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.finalRow&&!e.noBorderRadius&&"\n    border-bottom-left-radius: ".concat(X.n_,"px;\n    border-bottom-right-radius: ").concat(X.n_,"px;\n  ")})),ee=Y.default.div.withConfig({displayName:"indexstyle__TextStyle",componentId:"sc-pu8csx-5"})(["p{cursor:pointer;}"]),ne=Y.default.div.withConfig({displayName:"indexstyle__RowCellStyle",componentId:"sc-pu8csx-6"})(["width:100%;z-index:0;"," "," "," "," ",""],(function(e){return!e.first&&"\n    border-left: 1px solid ".concat((e.theme.background||E.Z.background).page,";\n  ")}),(function(e){return!e.small&&"\n    padding: ".concat(1.5*T.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*T.iI,"px;\n  ")}),(function(e){return e.textColor&&"\n    & p {\n      color: ".concat(e.textColor,";\n    }\n  ")}),(function(e){return e.vanish&&"\n    border: none;\n    padding: 0 !important;\n    width: 0% !important;\n    height: 100% !important;\n    background-color: ".concat((e.theme.background||E.Z.background).page," !important;\n  ")})),re=r(35185);var te=function(e){var n,r=e.cellIndex,t=e.danger,i=e.flex,o=e.render,l=e.rowGroupIndex,u=e.rowIndex,c=e.selected,a=e.small,s=e.showBackground,p=e.showProgress,f=e.textColor,v=e.value,h=e.vanish,m=(0,d.useState)(!1),x=m[0],b=m[1],j=Array.isArray(v);return n=o?o(v):"function"===typeof v?v({selected:c}):j?(0,A.jsxs)(G.Z,{alignItems:"start",flexDirection:"row",justifyContent:"space-between",children:[(0,A.jsxs)(S.ZP,{small:a,textOverflow:!0,title:v[0],children:[x&&(0,A.jsx)(A.Fragment,{children:"".concat(v[0]," & ").concat(v.length-1," more")}),!x&&(0,A.jsx)(A.Fragment,{children:v.map((function(e){return(0,A.jsx)("div",{children:e},e)}))})]}),(0,A.jsxs)(g.Z,{onClick:function(){return b(!x)},children:[x&&(0,A.jsx)(L.ArrowDown,{muted:!0,size:2*T.iI}),!x&&(0,A.jsx)(L.ArrowRight,{muted:!0,size:2*T.iI})]})]}):p?(0,A.jsx)(P.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,children:(0,A.jsx)(re.Z,{danger:v<80,progress:v})}):(0,A.jsx)(S.ZP,{bold:t,danger:t,small:a,textOverflow:!0,title:v,children:v}),(0,A.jsx)(G.Z,{flex:i,textOverflow:!0,children:(0,A.jsx)(ne,{first:0===r,showBackground:s,small:a,textColor:f,vanish:h,children:!h&&(0,A.jsxs)(A.Fragment,{children:[n," "]})})},"cell-".concat(l,"-").concat(u,"-").concat(r,"-").concat(v))};var ie=function(e){var n=e.columnFlexNumbers,r=e.columnHeaders,t=e.height,i=e.isTextSelectionRequired,o=e.noBorder,l=e.noBorderRadius,u=e.onClickRow,c=e.onHoverRow,a=e.renderRowCellByIndex,s=e.rowGroupData,p=void 0===s?[]:s,f=e.selectedRowIndexes,v=e.small,h=e.flex,m=e.warnings,x=void 0===m?[]:m,b=(0,d.useMemo)((function(){return p.length}),[p]);return(0,A.jsxs)(Q,{flex:h,height:t,noBorder:o,noBorderRadius:l,noScrollbarTrackBackground:!0,children:[(0,A.jsx)(W,{noBorder:o,noBorderRadius:l,children:(0,A.jsx)(P.ZP,{alignItems:"center",children:r.map((function(e,r){var t=e.Icon,i=e.label;return(0,A.jsx)(G.Z,{flex:n[r],children:(0,A.jsx)(J,{first:0===r,small:v,children:(0,A.jsxs)(P.ZP,{alignItems:"center",children:[t&&(0,A.jsx)(L.Check,{}),t&&(0,A.jsx)(C.Z,{mr:1}),(0,A.jsx)(S.ZP,{bold:!0,children:i})]})})},i)}))})}),p&&p.map((function(e,r){var t,d=e.title,s=e.rowData,p=d||r,h=[];d&&(t=(0,A.jsx)(K,{small:v,children:(0,A.jsx)(S.ZP,{bold:!0,children:d})}));var m=null===s||void 0===s?void 0:s.length;return null===s||void 0===s||s.forEach((function(e,t){var d=e.columnTextColors,s=e.columnValues,j=e.danger,w=e.uuid,y=(null===f||void 0===f?void 0:f[0])===r&&(null===f||void 0===f?void 0:f[1])===t,O=[],Z=x.find((function(e){return e.name===s[0]})),_=Z&&(0,D.HD)(s[1])?(0,D.Tz)(s[1]):s[1],I=Z&&Z.compare(_,Z.val);null===s||void 0===s||s.forEach((function(e,i,o){var l=null===a||void 0===a?void 0:a[i],u=d?d[i]:void 0;Array.isArray(e)?O.push((0,A.jsx)(te,{cellIndex:i,flex:n[i],render:l,rowGroupIndex:r,rowIndex:t,selected:y,showBackground:t%2===1,showProgress:e[0],small:v,textColor:u,value:e[1]},i)):"undefined"===typeof e?(O.pop(),i=o.length+1,O.push((0,A.jsx)(te,{cellIndex:i,danger:j,flex:n[i],render:l,rowGroupIndex:r,rowIndex:t,selected:y,showBackground:t%2===1,small:v,textColor:u,value:e,vanish:!0},i))):O.push((0,A.jsx)(te,{cellIndex:i,danger:I||j,flex:n[i],render:l,rowGroupIndex:r,rowIndex:t,selected:y,showBackground:t%2===1,small:v,textColor:u,value:e},i))}));var k=(0,A.jsx)(P.ZP,{textOverflow:!0,children:O});h.push((0,A.jsxs)($,{finalRow:b-1===r&&m-1===t,hasHover:!!c,noBorder:o,noBorderRadius:l,onMouseEnter:function(){return null===c||void 0===c?void 0:c({rowGroupIndex:r,rowIndex:t,uuid:w})},selected:y,children:[u&&(i?(0,A.jsx)(ee,{onClick:function(){return u({rowGroupIndex:r,rowIndex:t,uuid:w})},role:"cell",children:k}):(0,A.jsx)(g.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(){return u({rowGroupIndex:r,rowIndex:t,uuid:w})},preventDefault:!0,children:k})),!u&&k]},"row-group-".concat(p,"-row-").concat(t)))})),(0,A.jsxs)("div",{children:[t,h]},p)}))]})},oe=Y.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1xgfh62-0"})(["display:flex;flex-direction:column;height:","px;border-bottom:1px solid ",";"," "," ",""],(function(e){return e.height}),E.Z.borders.medium,(function(e){return e.includePadding&&"\n    padding: ".concat(T.tr,"px;\n  ")}),(function(e){return e.overflow&&"\n    overflow: auto;\n  "}),z.w5),le=r(79633);var ue=function(e){var n=e.height,r=e.scheduleType,t=e.variables,o=e.variablesOverride,l=[];Object.entries(t).forEach((function(e){var n=(0,i.Z)(e,2),r=n[0],t=n[1],u=null===o||void 0===o?void 0:o[r];l.push({uuid:r,value:(0,B.FS)(u||t)})})),(0,B.JZ)(l,r);var u=Object.keys(t).length;return(0,A.jsx)(oe,{height:n,children:t&&(0,A.jsx)(ie,{columnFlexNumbers:[1,1],columnHeaders:[{label:"Runtime variable (".concat(u,")")},{label:"Value"}],noBorderRadius:!0,rowGroupData:[{rowData:l.map((function(e){var n=e.uuid,r=e.value;return{columnTextColors:[le.Or,void 0],columnValues:[n,r],uuid:n}}))}],small:!0})})},ce=r(4190),ae=r(12717),de=r(85544),se=r(29624),pe=r(35686),fe=r(72191),ve=r(28795),he=r(81066),ge=r(24944),me=r(3917),xe=r(69419),be=r(16488),je=r(86735),we=r(42122),ye=r(50178),Oe=r(72619),Ze=r(70320),Pe=r(89538);function _e(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function Ie(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?_e(Object(r),!0).forEach((function(n){(0,o.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function ke(e){var n=e.pipeline,r=(0,p.useRouter)(),t=(0,ye.Ct)(),l=n.uuid,u=pe.ZP.pipelines.detail(l,{includes_outputs:!1},{revalidateOnFocus:!1}).data,c=(0,d.useMemo)((function(){return(null===u||void 0===u?void 0:u.pipeline)||n}),[null===u||void 0===u?void 0:u.pipeline,n]),j=(0,d.useState)(null),y=j[0],O=j[1],Z=(0,d.useState)(null),P=Z[0],_=Z[1],I=(0,d.useState)(!1),k=I[0],E=I[1],T=pe.ZP.projects.list().data,M=(0,d.useMemo)((function(){var e;return null===T||void 0===T||null===(e=T.projects)||void 0===e?void 0:e[0]}),[T]),R=((0,d.useMemo)((function(){var e;return(0,Ze.hY)(null===M||void 0===M||null===(e=M.features)||void 0===e?void 0:e[w.d.LOCAL_TIMEZONE])}),[null===M||void 0===M?void 0:M.features]),pe.ZP.client_pages.detail("pipeline_schedule:create",{"pipelines[]":[l]},{},{key:"Triggers/Edit/".concat(l)}).data),N=(0,d.useMemo)((function(){return null===R||void 0===R?void 0:R.client_page}),[R]),V=(0,d.useMemo)((function(){var e,n;return null===N||void 0===N||null===(e=N.components)||void 0===e||null===(n=e.find((function(e){return"create_with_interactions_component"===e.uuid})))||void 0===n?void 0:n.enabled}),[N]),U=(0,d.useMemo)((function(){return null===N||void 0===N?void 0:N.disabled}),[N]),F=pe.ZP.variables.pipelines.list(l,{global_only:!0},{revalidateOnFocus:!1}).data,G=null===F||void 0===F?void 0:F.variables,Y=(0,xe.iV)(),X=(0,xe.DQ)(Y,[b.gm.INTERVAL,b.gm.STATUS,b.gm.TAG,b.gm.TYPE]),z=(0,be.xH)(X),q=null!==Y&&void 0!==Y&&Y.page?Y.page:0,Q=pe.ZP.pipeline_schedules.pipelines.list(l,Ie(Ie({},z),{},{_limit:m.Q,_offset:(null!==Y&&void 0!==Y&&Y.page?Y.page:0)*m.Q}),{refreshInterval:7500}),W=Q.data,J=Q.mutate,K=(0,d.useMemo)((function(){return(null===W||void 0===W?void 0:W.pipeline_schedules)||[]}),[W]),$=function(e){return(0,s.Db)(pe.ZP.pipeline_schedules.pipelines.useCreate(l),{onSuccess:function(n){return(0,Oe.wD)(n,{callback:function(n){var r=n.pipeline_schedule.id;null===e||void 0===e||e(r)},onErrorCallback:function(e,n){return O({errors:n,response:e})}})}})},ee=$((function(e){return r.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(null===c||void 0===c?void 0:c.uuid,"/triggers/").concat(e,"/edit"))})),ne=(0,i.Z)(ee,2),re=ne[0],te=ne[1].isLoading,ie=$(J),le=(0,i.Z)(ie,2),_e=le[0],ke=le[1].isLoading,Ce=(0,d.useMemo)((function(){return(0,B.Tt)(G)}),[G]),Se=(0,D.Y6)(),Ee=(0,d.useMemo)((function(){return{name:Se,schedule_interval:b.U5.ONCE,schedule_type:b.Xm.TIME,start_time:(0,me.d$)((new Date).toISOString(),{dayAgo:!0,utcFormat:!0}),status:b.fq.ACTIVE}}),[Se]),Te=(0,Pe.dd)((function(){return(0,A.jsx)(H,{initialPipelineSchedulePayload:Ee,onCancel:Ne,onSuccess:_e,pipeline:c,variables:Ce})}),{},[G,c,Ce],{background:!0,uuid:"run_pipeline_now_popup"}),Me=(0,i.Z)(Te,2),Re=Me[0],Ne=Me[1],Be=(0,d.useState)(),De=Be[0],Ae=Be[1],Ve=(0,d.useMemo)((function(){var e=null===De||void 0===De?void 0:De.variables,n=!(0,we.Qr)(Ce);return function(r){var i=80;if(n){var o=Object.keys(Ce).length;i=46+43*Math.min(5,o)+1}var u=r.height-i;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f.ZP,Ie(Ie({},r),{},{enablePorts:!1,height:u,noStatus:!0})),n&&(0,A.jsx)(ue,{height:i+1,scheduleType:null===De||void 0===De?void 0:De.schedule_type,variables:Ce,variablesOverride:e}),!n&&(0,A.jsxs)(oe,{height:i+1,includePadding:!0,overflow:!0,children:[(0,A.jsx)(S.ZP,{children:"This pipeline has no runtime variables."}),!t&&(0,A.jsxs)(C.Z,{mt:1,children:[(0,A.jsx)(a(),{as:"/pipelines/".concat(l,"/edit?sideview=variables"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,A.jsx)(g.Z,{primary:!0,children:"Click here"})})," ",(0,A.jsx)(S.ZP,{inline:!0,children:"to add variables to this pipeline."})]})]})]})}}),[t,l,null===De||void 0===De?void 0:De.schedule_type,null===De||void 0===De?void 0:De.variables,Ce]),Ue=(0,d.useMemo)((function(){var e;return(null===W||void 0===W||null===(e=W.metadata)||void 0===e?void 0:e.count)||[]}),[W]),Fe=pe.ZP.pipeline_triggers.pipelines.list(l).data,He=(0,d.useMemo)((function(){return(0,je.HK)((null===Fe||void 0===Fe?void 0:Fe.pipeline_triggers)||[],(function(e){return e.name}))}),[Fe]);(0,d.useEffect)((function(){var e=((null===Fe||void 0===Fe?void 0:Fe.pipeline_triggers)||[]).find((function(e){var n=e.settings;return null===n||void 0===n?void 0:n.invalid_schedule_interval}));_(e?{displayMessage:'Schedule interval for Trigger (in code) "'.concat(null===e||void 0===e?void 0:e.name,'"')+" is invalid. Please check your cron expression\u2019s syntax in the pipeline\u2019s triggers.yaml file."}:null)}),[null===Fe||void 0===Fe?void 0:Fe.pipeline_triggers]);var Ge=pe.ZP.tags.list().data,Le=(0,d.useMemo)((function(){return(0,je.YC)((null===Ge||void 0===Ge?void 0:Ge.tags)||[],(function(e){return e.uuid}))}),[Ge]),Ye=pe.ZP.pipeline_interactions.detail(V&&l,{filter_for_permissions:1}).data,Xe=pe.ZP.interactions.pipeline_interactions.list(V&&l).data,ze=pe.ZP.pipelines.detail(V&&l).data,qe=(0,d.useMemo)((function(){return(null===Ye||void 0===Ye?void 0:Ye.pipeline_interaction)||{}}),[Ye]),Qe=((0,d.useMemo)((function(){return(null===Xe||void 0===Xe?void 0:Xe.interactions)||[]}),[Xe]),(0,d.useMemo)((function(){var e;return V&&(null===(e=Object.keys((null===qe||void 0===qe?void 0:qe.blocks)||{}))||void 0===e?void 0:e.length)>=1}),[V,qe])),We=(0,d.useMemo)((function(){return Qe&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(C.Z,{ml:"12px"}),(0,A.jsx)(ge.lZ,{}),(0,A.jsx)(C.Z,{ml:"12px"}),(0,A.jsx)(h.ZP,Ie(Ie({},he.B),{},{Icon:L.Interactions,inline:!0,onClick:function(){return E(!0)},uuid:"Create trigger with no-code",children:"Create trigger with no-code"}))]})}),[Qe,E]),Je=(0,d.useMemo)((function(){return(0,A.jsx)(de.Z,{addButtonProps:!U&&{isLoading:te,label:"New trigger",onClick:function(){return re({pipeline_schedule:{name:(0,D.Y6)()}})}},filterOptions:{frequency:Object.values(b.U5),status:Object.values(b.fq),tag:Le.map((function(e){return e.uuid})),type:Object.values(b.Xm)},filterValueLabelMapping:{status:Object.values(b.fq).reduce((function(e,n){return Ie(Ie({},e),{},(0,o.Z)({},n,(0,D.kC)(n)))}),{}),tag:Le.reduce((function(e,n){var r=n.uuid;return Ie(Ie({},e),{},(0,o.Z)({},r,r))}),{}),type:b.Z4},onClickFilterDefaults:function(){r.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(l,"/triggers"))},query:X,resetPageOnFilterApply:!0,secondaryButtonProps:!U&&{beforeIcon:(0,A.jsx)(L.Once,{size:fe.bL}),disabled:t,isLoading:ke,label:"Run@once",onClick:Re,tooltip:"Creates an @once trigger and runs pipeline immediately"},showDivider:!U,children:We})}),[re,U,te,ke,t,We,l,X,r,Re,Le]),Ke=(0,d.useMemo)((function(){var e=[];return k?e.push.apply(e,[{label:function(){return"Triggers"},onClick:function(){return E(!1)}},{bold:!0,label:function(){return"New trigger"}}]):e.push({label:function(){return"Triggers"}}),e}),[k,E]);return k?(0,A.jsx)(ae.Z,{creatingWithLimitation:!0,errors:y,onCancel:function(){return E(!1)},pipeline:null===ze||void 0===ze?void 0:ze.pipeline,setErrors:O,useCreateScheduleMutation:$}):(0,A.jsx)(x.Z,{breadcrumbs:Ke,buildSidekick:!k&&Ve,errors:y||P,pageName:ve.M.TRIGGERS,pipeline:c,setErrors:O,subheader:!k&&Je,title:function(e){var n=e.name;return"".concat(n," triggers")},uuid:"".concat(ve.M.TRIGGERS,"_").concat(l),children:!k&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(v.Z,{light:!0}),W?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(se.Z,{fetchPipelineSchedules:J,pipeline:c,pipelineSchedules:K,pipelineTriggersByName:He,selectedSchedule:De,setErrors:O,setSelectedSchedule:Ae}),(0,A.jsx)(C.Z,{p:2,children:(0,A.jsx)(m.ZP,{maxPages:9,onUpdate:function(e){var n=Number(e),t=Ie(Ie({},Y),{},{page:n>=0?n:0});r.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(l,"/triggers?").concat((0,xe.uM)(t)))},page:Number(q),totalPages:Math.ceil(Ue/m.Q)})})]}):(0,A.jsx)(C.Z,{m:2,children:(0,A.jsx)(ce.Z,{inverted:!0,large:!0})})]})})}ke.getInitialProps=function(){var e=(0,t.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:r}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var Ce=(0,j.Z)(ke)},40183:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers",function(){return r(38415)}])}},function(e){e.O(0,[9161,7674,26,1557,3782,5544,9624,2717,9774,2888,179],(function(){return n=40183,e(e.s=n);var n}));var n=e.O();_N_E=n}]);