"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3752],{44162:function(n,e,t){t.d(e,{HC:function(){return g},Kf:function(){return s},Nk:function(){return f},PY:function(){return p},gE:function(){return h},jv:function(){return b},nz:function(){return v},oh:function(){return d},qn:function(){return a},t1:function(){return m},y9:function(){return k}});var o=t(38626),r=t(23831),i=t(86422),c=t(73942),u=t(49125),l=t(90880),d=68;function a(n,e){var t,o,c=((null===e||void 0===e||null===(t=e.theme)||void 0===t?void 0:t.borders)||r.Z.borders).light,u=((null===e||void 0===e||null===(o=e.theme)||void 0===o?void 0:o.monotone)||r.Z.monotone).grey500,l=e||{},d=l.blockColor,a=l.isSelected,s=l.theme;return a?c=(s||r.Z).content.active:i.tf.TRANSFORMER===n||d===i.Lq.PURPLE?(c=(s||r.Z).accent.purple,u=(s||r.Z).accent.purpleLight):i.tf.DATA_EXPORTER===n||d===i.Lq.YELLOW?(c=(s||r.Z).accent.yellow,u=(s||r.Z).accent.yellowLight):i.tf.DATA_LOADER===n||d===i.Lq.BLUE?(c=(s||r.Z).accent.blue,u=(s||r.Z).accent.blueLight):i.tf.MARKDOWN===n?(c=(s||r.Z).accent.sky,u=(s||r.Z).accent.skyLight):i.tf.SENSOR===n||d===i.Lq.PINK?(c=(s||r.Z).accent.pink,u=(s||r.Z).accent.pinkLight):i.tf.DBT===n?(c=(s||r.Z).accent.dbt,u=(s||r.Z).accent.dbtLight):i.tf.EXTENSION===n||d===i.Lq.TEAL?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).teal,u=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).tealLight):i.tf.CALLBACK===n?(c=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).rose,u=((null===s||void 0===s?void 0:s.accent)||r.Z.accent).roseLight):(i.tf.CONDITIONAL===n||i.tf.SCRATCHPAD===n||d===i.Lq.GREY||i.tf.CUSTOM===n&&!d)&&(c=(s||r.Z).content.default,u=(s||r.Z).accent.contentDefaultTransparent),{accent:c,accentLight:u}}var s=(0,o.css)([""," "," "," "," "," "," ",""],(0,l.eR)(),(function(n){return!n.selected&&!n.hasError&&"\n    border-color: ".concat(a(n.blockType,n).accentLight,";\n  ")}),(function(n){return n.selected&&!n.hasError&&"\n    border-color: ".concat(a(n.blockType,n).accent,";\n  ")}),(function(n){return!n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.accent||r.Z.accent).negativeTransparent,";\n  ")}),(function(n){return n.selected&&n.hasError&&"\n    border-color: ".concat((n.theme.borders||r.Z.borders).danger,";\n  ")}),(function(n){return n.dynamicBlock&&"\n    border-style: dashed !important;\n  "}),(function(n){return n.dynamicChildBlock&&"\n    border-style: dotted !important;\n  "})),f=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-s5rj34-0"})(["border-radius:","px;position:relative;"],c.n_),p=o.default.div.withConfig({displayName:"indexstyle__HiddenBlockContainerStyle",componentId:"sc-s5rj34-1"})([""," border-radius:","px;border-style:",";border-width:","px;",""],s,c.n_,c.M8,c.mP,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n\n    &:hover {\n      border-color: ").concat(a(n.blockType,n).accent,";\n    }\n  ")})),v=o.default.div.withConfig({displayName:"indexstyle__BlockHeaderStyle",componentId:"sc-s5rj34-2"})([""," border-top-left-radius:","px;border-top-right-radius:","px;border-top-style:",";border-top-width:","px;border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding:","px;position:sticky;top:-5px;"," "," ",""],s,c.n_,c.n_,c.M8,c.mP,c.M8,c.mP,c.M8,c.mP,u.iI,(function(n){return"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n  ")}),(function(n){return n.bottomBorder&&"\n    border-bottom: ".concat(c.YF,"px ").concat(c.M8," ").concat((n.theme||r.Z).borders.medium2,";\n  ")}),(function(n){return n.zIndex&&"\n    z-index: ".concat(6+(n.zIndex||0),";\n  ")})),b=o.default.div.withConfig({displayName:"indexstyle__CodeContainerStyle",componentId:"sc-s5rj34-3"})([""," border-left-style:",";border-left-width:","px;border-right-style:",";border-right-width:","px;padding-bottom:","px;padding-top:","px;position:relative;"," "," "," .line-numbers{opacity:0;}&.selected{.line-numbers{opacity:1 !important;}}"],s,c.M8,c.mP,c.M8,c.mP,u.iI,u.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||r.Z.background).codeTextarea,";\n  ")}),(function(n){return n.lightBackground&&"\n    background-color: ".concat((n.theme||r.Z).background.content,";\n  ")}),(function(n){return!n.hasOutput&&"\n    border-bottom-left-radius: ".concat(c.n_,"px;\n    border-bottom-right-radius: ").concat(c.n_,"px;\n    border-bottom-style: ").concat(c.M8,";\n    border-bottom-width: ").concat(c.mP,"px;\n  ")})),h=o.default.div.withConfig({displayName:"indexstyle__BlockDivider",componentId:"sc-s5rj34-4"})(["align-items:center;display:flex;height:","px;justify-content:center;position:relative;z-index:8;bottom:","px;&:hover{"," .block-divider-inner{","}}"],2*u.iI,.5*u.iI,(function(n){return n.additionalZIndex>0&&"\n      z-index: ".concat(8+n.additionalZIndex,";\n    ")}),(function(n){return"\n        background-color: ".concat((n.theme.text||r.Z.text).fileBrowser,";\n      ")})),m=o.default.div.withConfig({displayName:"indexstyle__BlockDividerInner",componentId:"sc-s5rj34-5"})(["height 1px;width:100%;position:absolute;z-index:-1;top:","px;"],1.5*u.iI),k=o.default.div.withConfig({displayName:"indexstyle__CodeHelperStyle",componentId:"sc-s5rj34-6"})(["margin-bottom:","px;padding-bottom:","px;",""],1*u.iI,1*u.iI,(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.borders||r.Z.borders).medium,";\n    padding-left: ").concat(n.normalPadding?u.iI:d,"px;\n  ")})),g=o.default.div.withConfig({displayName:"indexstyle__TimeTrackerStyle",componentId:"sc-s5rj34-7"})(["bottom:","px;left:","px;position:absolute;"],1*u.iI,d)},75968:function(n,e,t){t.d(e,{J8:function(){return v},MS:function(){return b},Ts:function(){return p},_o:function(){return h},eY:function(){return s},fA:function(){return f}});var o=t(82394),r=t(86422),i=t(98781),c=t(90211),u=t(33766),l=t(60701);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s=function(n,e){var t=(null===e||void 0===e?void 0:e.upstream_blocks)||[];return r.iZ.includes(null===n||void 0===n?void 0:n.type)||r.iZ.includes(null===e||void 0===e?void 0:e.type)||r.tf.DATA_LOADER===(null===e||void 0===e?void 0:e.type)&&r.tf.SENSOR!==n.type||t.push(n.uuid),t},f=function(n,e,t){var o=[];return(null===n||void 0===n?void 0:n.type)!==i.qL.STREAMING||r.iZ.includes(null===e||void 0===e?void 0:e.type)||r.iZ.includes(null===t||void 0===t?void 0:t.type)||(o=o.concat((null===e||void 0===e?void 0:e.downstream_blocks)||[])),o},p=function(n,e,t,o){for(var i,u=[],l=e.findIndex((function(e){return e.uuid===n.uuid}));!i&&l>=0;){var d;i=e[l-1],r.tf.SCRATCHPAD===(null===(d=i)||void 0===d?void 0:d.type)&&(i=null),l-=1}return i&&u.push(i.uuid),r.Ut.map((function(e){return{label:function(){return"Convert to ".concat((0,c.wX)(r.V4[e]))},onClick:function(){return o({converted_from_type:e,converted_from_uuid:n.uuid,type:e,upstream_blocks:u})},uuid:"".concat(t,"/convert_to/").concat(e)}}))},v=function(n,e,t,o,i,c){var d=n||{},s=d.configuration,f=d.downstream_blocks,p=d.has_callback,v=d.language,b=d.metadata,h=d.replicated_block,m=d.type,k=d.upstream_blocks,g=d.uuid,y=s||{},O=y.dynamic,A=y.reduce_output,E=r.tf.DBT===m,T=[];if(![r.tf.CALLBACK,r.tf.EXTENSION,r.tf.MARKDOWN].includes(m)){T.push.apply(T,[{label:function(){return E?"Execute and run all upstream blocks":"Execute with all upstream blocks"},onClick:function(){return e({block:n,runUpstream:!0})},uuid:"execute_upstream"},{label:function(){return E?"Execute and run incomplete upstream blocks":"Execute with incomplete upstream blocks"},onClick:function(){return e({block:n,runIncompleteUpstream:!0})},uuid:"execute_incomplete_upstream"}]),E||T.push({label:function(){return"Execute block and run tests"},onClick:function(){return e({block:n,runTests:!0})},uuid:"run_tests"});var C,x,R=c||{},D=R.addNewBlock,S=R.blocksMapping,_=R.fetchFileTree,L=R.fetchPipeline,N=R.savePipelineContent,Z=R.updatePipeline,I=[];if(f.forEach((function(n){var e=null===S||void 0===S?void 0:S[n];e&&e.upstream_blocks.forEach((function(n){var e,t;null!==S&&void 0!==S&&null!==(e=S[n])&&void 0!==e&&null!==(t=e.configuration)&&void 0!==t&&t.dynamic&&I.push(S[n])}))})),E&&r.t6.SQL===v)null!==b&&void 0!==b&&null!==(C=b.dbt)&&void 0!==C&&null!==(x=C.block)&&void 0!==x&&x.snapshot||T.unshift.apply(T,[{label:function(){return"Run model"},onClick:function(){return e({block:n,runSettings:{run_model:!0}})},tooltip:function(){return"Execute command dbt run."},uuid:"run_model"},{label:function(){return"Test model"},onClick:function(){return e({block:n,runSettings:{test_model:!0}})},tooltip:function(){return"Execute command dbt test."},uuid:"test_model"},{label:function(){return"Build model"},onClick:function(){return e({block:n,runSettings:{build_model:!0}})},tooltip:function(){return"Execute command dbt build."},uuid:"build_model"},{label:function(){return"Add upstream models"},onClick:function(){Z({pipeline:{add_upstream_for_block_uuid:null===n||void 0===n?void 0:n.uuid}})},tooltip:function(){return"Add upstream models for this model to the pipeline."},uuid:"add_upstream_models"}]);if(E||!N||!O&&0!==I.length||T.push({label:function(){return O?"Disable block as dynamic":"Set block as dynamic"},onClick:function(){return N({block:a(a({},n),{},{configuration:a(a({},s),{},{dynamic:!O})})})},uuid:"dynamic"}),S)(null===k||void 0===k?void 0:k.find((function(n){var e,t;return null===S||void 0===S||null===(e=S[n])||void 0===e||null===(t=e.configuration)||void 0===t?void 0:t.dynamic})))&&T.push({label:function(){return A?"Don\u2019t reduce output":"Reduce output"},onClick:function(){return N({block:a(a({},n),{},{configuration:a(a({},s),{},{reduce_output:!A})})})},uuid:"reduce_output"});T.push({label:function(){return p?"Remove callback":"Add callback"},onClick:function(){if(p)return N({block:a(a({},n),{},{has_callback:!p})}).then((function(){_(),L()}));(0,u.u7)({sideview:l.cH.CALLBACKS})},uuid:"has_callback"}),E||T.push({disabled:!!h,label:function(){return"Replicate block"},onClick:function(){return D({replicated_block:g})},uuid:"Replicate block"})}return T.push({label:function(){return"Delete block"},onClick:function(){t(n),o(!1)},uuid:"delete_block"}),i?[T.pop()]:T};function b(n){var e=n.tags,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=[],i=t.conditionFailed;return null===e||void 0===e||e.forEach((function(n){r.L8.DBT_SNAPSHOT===n?o.push({description:"This is a dbt snapshot file.",title:(0,c.vg)(r.L8.DBT_SNAPSHOT)}):r.L8.DYNAMIC===n?o.push({description:"This block will create N blocks for each of its downstream blocks.",title:(0,c.vg)(r.L8.DYNAMIC)}):r.L8.DYNAMIC_CHILD===n?o.push({description:"This block is dynamically created by its upstream parent block that is dynamic.",title:(0,c.vg)(r.L8.DYNAMIC_CHILD)}):r.L8.REDUCE_OUTPUT===n?o.push({description:"Reduce output from all dynamically created blocks into a single array output.",title:(0,c.vg)(r.L8.REDUCE_OUTPUT)}):r.L8.REPLICA===n?o.push({description:"This block is a replica of another block in the current pipeline.",title:(0,c.vg)(r.L8.REPLICA)}):r.L8.CONDITION===n?i?o.push({description:"This block condition evaluated as false.",title:"Condition unmet"}):o.push({description:"This block has a condition that will be run before its execution.",title:(0,c.vg)(r.L8.CONDITION)}):o.push({title:n})})),o}function h(n){var e=n.block,t=n.dynamic,o=n.dynamicUpstreamBlock,r=n.hasError,i=(n.reduceOutput,n.reduceOutputUpstreamBlock),c=n.selected,u=o&&!i;return{borderColorShareProps:{blockColor:null===e||void 0===e?void 0:e.color,blockType:null===e||void 0===e?void 0:e.type,dynamicBlock:t,dynamicChildBlock:u,hasError:r,selected:c},tags:b(e)}}},35438:function(n,e,t){t.d(e,{Ai:function(){return c},BT:function(){return l},Jo:function(){return i},X8:function(){return d},bJ:function(){return u},rl:function(){return o}});var o,r=t(86422),i=(t(49125).iI,1e4),c={compact:!0},u={height:10,width:10},l=[r.tf.DATA_EXPORTER,r.tf.SENSOR],d=[r.Lq.GREY,r.Lq.PINK,r.Lq.TEAL,r.Lq.YELLOW];!function(n){n.NORTH="NORTH",n.SOUTH="SOUTH"}(o||(o={}))},73752:function(n,e,t){t.d(e,{Z:function(){return en}});var o=t(21831),r=t(75582),i=t(82394),c=t(26304),u=t(77837),l=t(38860),d=t.n(l),a=t(51774),s=t.n(a),f=t(38626),p=t(4804),v=t(82684),b=t(83455),h=t(86422),m=t(67971),k=t(18283),g=t(16634),y=t(86673),O=t(54283),A=t(19711),E=t(23831),T=t(10503),C=t(35438),x=t(73942),R=t(37391),D=t(49125),S=f.default.div.withConfig({displayName:"indexstyle__GraphContainerStyle",componentId:"sc-bc2ei5-0"})(["div{","}",""],R.w5,(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),_=f.default.div.withConfig({displayName:"indexstyle__NodeStyle",componentId:"sc-bc2ei5-1"})(["border-radius:","px;border:1px solid transparent;min-width:fit-content;"," "," "," "," "," ",""],x.BG,(function(n){return n.selected&&"\n    border-color: ".concat((n.theme.content||E.Z.content).active,";\n  ")}),(function(n){return n.backgroundColor&&"\n    background-color: ".concat(n.backgroundColor,";\n  ")}),(function(n){return(n.isCancelled||n.disabled)&&"\n    // opacity doesn\u2019t work on Safari\n    border-color: ".concat((n.theme.content||E.Z.content).active,";\n    border-style: dashed;\n    cursor: not-allowed;\n  ")}),(function(n){return n.isConditionFailed&&"\n    background-color: ".concat((n.theme.content||E.Z.content).disabled,";\n    cursor: not-allowed;\n  ")}),(function(n){return n.disabled&&"\n    &:hover {\n      cursor: not-allowed;\n    }\n  "}),(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),L=f.default.div.withConfig({displayName:"indexstyle__RuntimeStyle",componentId:"sc-bc2ei5-2"})(["margin-right:","px;padding:12px 4px;height:100%;width:50px;background:rgba(0,0,0,0.2);background-blend-mode:soft-light;"],2*D.iI),N=t(75968),Z=t(44162),I=t(25958),P=t(90211),j=function(n){var e=n/1e3,t=4-Math.floor(e).toString().length,o=(0,P.QV)(e,t>=0?t:0),r="s";return o>1e3&&(o=(0,P.QV)(o/60,0),r="m"),"".concat(o).concat(r)},w=function(n,e){var t=n||{},o=t.id,r=t.side,i=null===e||void 0===e?void 0:e.id;return r===C.rl.NORTH?null===o||void 0===o?void 0:o.endsWith("".concat(i,"-to")):r===C.rl.SOUTH&&(null===o||void 0===o?void 0:o.startsWith(i))},B=t(28598);var M=function(n){var e=n.block,t=n.bodyText,o=n.children,r=n.disabled,i=n.hasFailed,c=n.height,u=n.hideStatus,l=n.isCancelled,d=n.isConditionFailed,a=n.isInProgress,s=n.isQueued,p=n.isSuccessful,b=n.kicker,x=(n.onClick,n.runtime),R=n.selected,S=(n.subtitle,(0,v.useContext)(f.ThemeContext)),P=e.color,w=e.type,M=e.uuid,U=(0,N.MS)(e,{conditionFailed:d}),H=!(a||s||i||p||l||d),K=p&&!(a||s),F=i&&!(a||s),X="";H?X="No status":K?X="Successful execution":F?X="Failed execution":a?X="Currently executiing":l&&(X="Cancelled execution");var q=C.BT.includes(w)||C.X8.includes(P),V=b;return h.tf.DBT!==w||V||(V=(0,I.IU)(e).project),(0,B.jsx)(_,{backgroundColor:(0,Z.qn)(w,{blockColor:P,theme:S}).accent,disabled:r,height:c,isCancelled:l,isConditionFailed:d,selected:R,children:(0,B.jsxs)(m.Z,{alignItems:"center",fullHeight:!0,children:[x&&(0,B.jsx)(L,{backgroundColor:(0,Z.qn)(w,{blockColor:P,theme:S}).accent,children:(0,B.jsx)(m.Z,{justifyContent:"center",children:(0,B.jsx)(A.ZP,{inverted:C.BT.includes(w)||C.X8.includes(P),xsmall:!0,children:j(x)})})}),!x&&(0,B.jsx)(y.Z,{ml:2}),!u&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(m.Z,{alignItems:"center",justifyContent:"center",style:{height:2*D.iI,width:2*D.iI},title:X,children:[a&&(0,B.jsx)(O.Z,{color:(S||E.Z).content.active,small:!0}),K&&(0,B.jsx)(T.Jr,{size:2*D.iI,success:!0}),F&&(0,B.jsx)(T.x8,{danger:!0,size:1.5*D.iI}),H&&(0,B.jsx)(g.Z,{borderSize:1,size:1*D.iI})]}),(0,B.jsx)(y.Z,{ml:1})]}),(0,B.jsxs)(m.Z,{flexDirection:"column",justifyContent:"center",style:{height:"100%",padding:"8px 0"},children:[V&&(0,B.jsx)(A.ZP,{bold:!0,inverted:q,monospace:!0,xsmall:!0,children:V}),t&&(0,B.jsx)(A.ZP,{inverted:q,monospace:!0,small:!0,children:t}),o,(null===U||void 0===U?void 0:U.length)>=1&&(0,B.jsx)(m.Z,{alignItems:"center",children:U.reduce((function(n,e,t){var o=e.title;return t>=1&&n.push((0,B.jsx)("div",{children:"\xa0"},"space-".concat(o))),n.push((0,B.jsx)(k.Z,{inverted:!q,xxsmall:!0,children:o},"badge-".concat(o))),n}),[])})]})]})},M)},U=t(11135),H=t(98781),K=t(82531),F=t(66050),X=t(24224);function q(n){var e=n.uuid,t=n.replicated_block;return t?"".concat(e,":").concat(t):e}var V=t(96510),Y=t(87323),G=["forwardedRef"];function W(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function Q(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?W(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var z=s()((0,u.Z)(d().mark((function n(){var e,o;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2920)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,o=e.Canvas,n.abrupt("return",(function(n){var e=n.forwardedRef,t=(0,c.Z)(n,G);return(0,B.jsx)(o,Q({ref:e},t))}));case 5:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),J=s()((0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2920)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Node);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),$=s()((0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2920)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Edge);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}}),nn=s()((0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([t.e(4434),t.e(5987),t.e(2920)]).then(t.t.bind(t,74529,23));case 2:return e=n.sent,n.abrupt("return",e.Port);case 4:case"end":return n.stop()}}),n)}))),{ssr:!1,loadableGenerated:{webpack:function(){return[74529]}}});var en=function(n){var e=n.blockRefs,t=n.blockStatus,i=n.disabled,c=n.editingBlock,u=n.enablePorts,l=void 0!==u&&u,d=n.fetchPipeline,a=n.height,s=n.heightOffset,k=void 0===s?10*D.iI:s,g=n.noStatus,O=n.onClickNode,E=n.pannable,T=void 0===E||E,x=n.pipeline,R=n.runningBlocks,_=void 0===R?[]:R,L=n.selectedBlock,N=n.setEditingBlock,P=n.setErrors,j=n.setSelectedBlock,G=n.setZoom,W=n.showDynamicBlocks,en=void 0!==W&&W,tn=n.treeRef,on=n.zoomable,rn=void 0===on||on,cn=(0,v.useContext)(f.ThemeContext),un=(0,v.useRef)(null),ln=tn||un,dn=(0,v.useState)([]),an=dn[0],sn=dn[1],fn=(0,v.useState)(!1),pn=fn[0],vn=fn[1],bn=(0,v.useState)(null),hn=bn[0],mn=bn[1],kn=l&&pn,gn=(null===c||void 0===c?void 0:c.upstreamBlocks)||{},yn=gn.block,On=gn.values,An=void 0===On?[]:On,En=(0,v.useMemo)((function(){return An.length}),[An]),Tn=(0,v.useMemo)((function(){var n;return(null===x||void 0===x||null===(n=x.blocks)||void 0===n?void 0:n.filter((function(n){var e=n.type;return!h.iZ.includes(e)})))||[]}),[null===x||void 0===x?void 0:x.blocks]),Cn=((0,X.HK)((0,Y.cU)(Tn,Tn),(function(n){return n.block.uuid})),(0,v.useMemo)((function(){return Tn}),[Tn,en])),xn=(0,v.useMemo)((function(){return(0,X.HK)(Cn,(function(n){return n.uuid}))}),[Cn]),Rn=(0,v.useMemo)((function(){return(0,X.HK)(_,(function(n){return n.uuid}))}),[_]),Dn=(0,b.Db)(K.ZP.blocks.pipelines.useUpdate(null===x||void 0===x?void 0:x.uuid,encodeURIComponent(null===yn||void 0===yn?void 0:yn.uuid)),{onSuccess:function(n){return(0,V.wD)(n,{callback:function(){N({upstreamBlocks:null}),null===d||void 0===d||d()},onErrorCallback:function(n,e){return null===P||void 0===P?void 0:P({errors:e,response:n})}})}}),Sn=(0,r.Z)(Dn,2),_n=Sn[0],Ln=Sn[1].isLoading,Nn=(0,b.Db)((function(n){var e=n.fromBlock,t=n.portSide,o=n.toBlock,r=n.removeDependency,i=o,c=o.upstream_blocks.concat(e.uuid);return r||t!==C.rl.NORTH||(i=e,c=e.upstream_blocks.concat(o.uuid)),K.ZP.blocks.pipelines.useUpdate(null===x||void 0===x?void 0:x.uuid,encodeURIComponent(i.uuid))({block:Q(Q({},i),{},{upstream_blocks:r?o.upstream_blocks.filter((function(n){return n!==e.uuid})):c})})}),{onSuccess:function(n){return(0,V.wD)(n,{callback:function(){null===d||void 0===d||d()},onErrorCallback:function(n,e){return null===P||void 0===P?void 0:P({errors:e,response:n})}})}}),Zn=(0,r.Z)(Nn,1)[0],In=(0,v.useCallback)((function(n){var t=n.type,o=n.uuid;if(null===j||void 0===j||j(n),sn([]),null!==e&&void 0!==e&&e.current){var r,i=e.current["".concat(t,"s/").concat(o,".py")];null===i||void 0===i||null===(r=i.current)||void 0===r||r.scrollIntoView()}}),[e,j]),Pn=(0,v.useCallback)((function(n){sn([]),N((function(e){var t=e.upstreamBlocks.values||[],o=t.findIndex((function(e){var t=e.uuid;return n.uuid===t}));return Q(Q({},e),{},{upstreamBlocks:Q(Q({},e.upstreamBlocks),{},{values:o>=0?(0,X.oM)(t,o):t.concat(n)})})}))}),[N]),jn=(0,v.useMemo)((function(){var n={};return Cn.forEach((function(e){e.upstream_blocks.forEach((function(t){n[t]||(n[t]=[]),n[t].push(e)}))})),n}),[Cn]),wn=(0,v.useCallback)((function(n){var e,t;if(H.qL.INTEGRATION===(null===x||void 0===x?void 0:x.type)&&h.tf.TRANSFORMER!==n.type){var o,r={};if(h.t6.YAML===n.language&&(r=(0,p.Qc)(n.content)),h.tf.DATA_LOADER===n.type)e="".concat(n.uuid,": ").concat(null===(o=r)||void 0===o?void 0:o.source);else if(h.tf.DATA_EXPORTER===n.type){var i;e="".concat(n.uuid,": ").concat(null===(i=r)||void 0===i?void 0:i.destination)}}else if(h.tf.DBT===n.type&&h.t6.SQL===n.language){var c=(0,I.IU)(n);e=c.name,t=c.project}return null!==n&&void 0!==n&&n.replicated_block&&(e=null===n||void 0===n?void 0:n.replicated_block,t=null===n||void 0===n?void 0:n.uuid),e||(e=n.uuid),{displayText:e,kicker:t,subtitle:undefined}}),[x]),Bn=(0,v.useMemo)((function(){var n=[],e=[];return Cn.forEach((function(r){var c,u=wn(r),l=u.displayText,d=u.kicker,a=u.subtitle,s=r.tags,f=void 0===s?[]:s,p=r.upstream_blocks,v=void 0===p?[]:p,b=r.uuid,h=jn[b],m=[];h?m.push.apply(m,(0,o.Z)(h.map((function(n){return Q(Q({},C.bJ),{},{id:"".concat(b,"-").concat(n.uuid,"-from"),side:C.rl.SOUTH})})))):m.push(Q(Q({},C.bJ),{},{id:"".concat(b,"-from"),side:C.rl.SOUTH})),0===v.length&&m.push(Q(Q({},C.bJ),{},{id:"".concat(b,"-to"),side:C.rl.NORTH})),null===v||void 0===v||v.forEach((function(n){m.push(Q(Q({},C.bJ),{},{id:"".concat(n,"-").concat(b,"-to"),side:C.rl.NORTH})),e.push({from:n,fromPort:"".concat(n,"-").concat(b,"-from"),id:"".concat(n,"-").concat(b),to:b,toPort:"".concat(n,"-").concat(b,"-to")})}));var k=37;(null===f||void 0===f?void 0:f.length)>=1&&(k+=1.5*D.iI),d&&(k+=1.5*D.iI),a&&(k+=2*D.iI);var g=l;[d,a].forEach((function(n){n&&n.length>g.length&&(g=n)})),n.push({data:{block:r},height:k,id:b,ports:m,width:g.length*D.KF+(i?0:5*D.iI)+((null===yn||void 0===yn?void 0:yn.uuid)===r.uuid?19*D.KF:0)+(null!==t&&void 0!==t&&null!==(c=t[q(r)])&&void 0!==c&&c.runtime?50:0)})})),{edges:e,nodes:n}}),[null===yn||void 0===yn?void 0:yn.uuid,t,Cn,i,wn,jn]),Mn=Bn.edges,Un=Bn.nodes,Hn=(0,v.useCallback)((function(n){if(g)return{};if(t){var e=t[q(n)]||{},o=e.status,r=e.runtime;return{hasFailed:F.V.FAILED===o,isCancelled:F.V.CANCELLED===o,isConditionFailed:F.V.CONDITION_FAILED===o,isInProgress:F.V.RUNNING===o,isQueued:F.V.INITIAL===o,isSuccessful:F.V.COMPLETED===o,runtime:r}}var i;return{hasFailed:h.DA.FAILED===n.status,isInProgress:Rn[n.uuid],isQueued:Rn[n.uuid]&&(null===(i=_[0])||void 0===i?void 0:i.uuid)!==n.uuid,isSuccessful:h.DA.EXECUTED===n.status}}),[t,g,_,Rn]),Kn=(0,v.useMemo)((function(){var n=0;return a&&(n+=a),k&&(n-=k),Math.max(0,n)}),[a,k]);return(0,B.jsxs)(B.Fragment,{children:[yn&&(0,B.jsxs)(y.Z,{my:3,px:D.cd,children:[(0,B.jsxs)(y.Z,{mb:D.cd,children:[(0,B.jsxs)(A.ZP,{children:["Select parent block(s) for ",(0,B.jsx)(A.ZP,{color:(0,Z.qn)(yn.type,{blockColor:yn.color,theme:cn}).accent,inline:!0,monospace:!0,children:yn.uuid}),":"]}),(0,B.jsx)(y.Z,{mt:1,children:An.map((function(n,e){var t,o,r=n.uuid;return(0,B.jsxs)(A.ZP,{color:(0,Z.qn)(null===(t=xn[r])||void 0===t?void 0:t.type,{blockColor:null===(o=xn[r])||void 0===o?void 0:o.type,theme:cn}).accent,inline:!0,monospace:!0,children:[r,En>=2&&e<=En-2?(0,B.jsx)(A.ZP,{inline:!0,children:",\xa0"}):null]},r)}))})]}),(0,B.jsxs)(m.Z,{alignItems:"center",children:[(0,B.jsx)(U.ZP,{compact:!0,inline:!0,loading:Ln,onClick:function(){return _n({block:Q(Q({},yn),{},{upstream_blocks:An.map((function(n){return n.uuid}))})})},uuid:"DependencyGraph/save_parents",children:"Save dependencies"}),(0,B.jsx)(y.Z,{ml:1}),(0,B.jsx)(U.ZP,{compact:!0,inline:!0,noBackground:!0,onClick:function(){sn([]),N({upstreamBlocks:null})},uuid:"DependencyGraph/cancel_save_parents",children:"Cancel"})]})]}),(0,B.jsx)(S,{height:Kn,onDoubleClick:function(){var n,e;return null===ln||void 0===ln||null===(n=ln.current)||void 0===n||null===(e=n.fitCanvas)||void 0===e?void 0:e.call(n)},children:(0,B.jsx)(z,{arrow:null,disabled:i,edge:function(n){var e,t=xn[n.source];return(0,B.jsx)($,Q(Q({},n),{},{onClick:function(n,e){mn(null),sn([e.id])},onRemove:function(n,e){var t=xn[e.from],o=xn[e.to];Zn({fromBlock:t,removeDependency:!0,toBlock:o}),sn([])},removable:l&&!(null!==c&&void 0!==c&&c.upstreamBlocks),style:{stroke:null===(e=(0,Z.qn)(null===t||void 0===t?void 0:t.type,{blockColor:null===t||void 0===t?void 0:t.color,theme:cn}))||void 0===e?void 0:e.accent}}))},edges:Mn,fit:!0,forwardedRef:ln,maxHeight:C.Jo,maxWidth:C.Jo,maxZoom:1,minZoom:-.7,node:function(n){var e,t,o,r,u,l;return(0,B.jsx)(J,Q(Q({},n),{},{dragType:"port",linkable:!0,onClick:function(n,e){var t=e.data.block;mn(null),(null===yn||void 0===yn?void 0:yn.uuid)===t.uuid||(yn?Pn(t):(null===O||void 0===O||O({block:t}),setTimeout((function(){In(t)}),1)))},onEnter:function(){null!==c&&void 0!==c&&c.upstreamBlocks||vn(!0)},onLeave:function(){return vn(!1)},port:kn&&(null===hn||w(hn,n))?(0,B.jsx)(nn,{onDrag:function(){return vn(!0)},onDragEnd:function(){vn(!1),mn(null)},onDragStart:function(n,e,t){var o=null===t||void 0===t?void 0:t.side;mn({id:null===t||void 0===t?void 0:t.id,side:o})},onEnter:function(){return vn(!0)},rx:10,ry:10,style:{fill:(0,Z.qn)(null===n||void 0===n||null===(e=n.properties)||void 0===e||null===(t=e.data)||void 0===t||null===(o=t.block)||void 0===o?void 0:o.type,{blockColor:null===n||void 0===n||null===(r=n.properties)||void 0===r||null===(u=r.data)||void 0===u||null===(l=u.block)||void 0===l?void 0:l.color,theme:cn}).accent,stroke:"white",strokeWidth:"1px"}}):null,style:{fill:"transparent",stroke:"transparent",strokeWidth:0},children:function(n){var e=n.height,t=n.node.data.block,o=Hn(t),r=wn(t),c=r.displayText,u=r.kicker,l=r.subtitle;return(0,B.jsx)("foreignObject",{height:e,style:{pointerEvents:"none"},width:n.width,x:0,y:0,children:(0,B.jsx)(M,Q({block:t,bodyText:"".concat(c).concat((null===yn||void 0===yn?void 0:yn.uuid)===t.uuid?" (editing)":""),disabled:(null===yn||void 0===yn?void 0:yn.uuid)===t.uuid,height:e,hideStatus:i,kicker:u,selected:yn?!!(0,X.sE)(An,(function(n){return n.uuid===t.uuid})):(null===L||void 0===L?void 0:L.uuid)===t.uuid,subtitle:l},o),t.uuid)})}}))},nodes:Un,onNodeLink:function(n,e,t,o){var r,i=xn[e.id],c=xn[t.id],u=(null===x||void 0===x?void 0:x.type)===H.qL.INTEGRATION&&((null===i||void 0===i?void 0:i.type)===h.tf.DATA_EXPORTER||(null===i||void 0===i?void 0:i.type)===h.tf.DATA_LOADER&&(null===c||void 0===c?void 0:c.type)===h.tf.DATA_EXPORTER);if(!(null!==i&&void 0!==i&&null!==(r=i.upstream_blocks)&&void 0!==r&&r.includes(c.uuid)||e.id===t.id||u)){var l=null===o||void 0===o?void 0:o.side;Zn({fromBlock:i,portSide:l||C.rl.SOUTH,toBlock:c})}},onNodeLinkCheck:function(n,e,t){return!Mn.some((function(n){return n.from===e.id&&n.to===t.id}))},onZoomChange:function(n){return null===G||void 0===G?void 0:G(n)},pannable:T,selections:an,zoomable:rn})})]})}},60701:function(n,e,t){t.d(e,{Qq:function(){return f},Z7:function(){return p},cH:function(){return r},du:function(){return a},fp:function(){return d},j5:function(){return s},uM:function(){return l}});var o,r,i=t(82394),c=t(10503),u=t(24224),l="sideview",d=90;!function(n){n.ADDON_BLOCKS="addon_blocks",n.CALLBACKS="callbacks",n.CHARTS="charts",n.DATA="data",n.EXTENSIONS="power_ups",n.FILE_VERSIONS="file_versions",n.GRAPHS="graphs",n.REPORTS="reports",n.SECRETS="secrets",n.SETTINGS="settings",n.TERMINAL="terminal",n.TREE="tree",n.VARIABLES="variables"}(r||(r={}));r.CALLBACKS,r.CHARTS,r.DATA,r.EXTENSIONS,r.TREE;var a=[r.DATA],s=[{key:r.TREE,label:"Tree"},{buildLabel:function(n){var e=(n.pipeline||{}).widgets,t=void 0===e?[]:e;return(null===t||void 0===t?void 0:t.length)>=1?"Charts (".concat(t.length,")"):"Charts"},key:r.CHARTS},{buildLabel:function(n){var e=n.variables;return(null===e||void 0===e?void 0:e.length)>=1?"Variables (".concat(e.length,")"):"Variables"},key:r.VARIABLES},{buildLabel:function(n){var e=n.secrets;return(null===e||void 0===e?void 0:e.length)>=1?"Secrets (".concat(e.length,")"):"Secrets"},key:r.SECRETS},{buildLabel:function(n){n.pipeline;return"Add-on blocks"},key:r.ADDON_BLOCKS},{buildLabel:function(n){var e=(n.pipeline||{}).extensions,t=void 0===e?{}:e,o=0;return Object.values(t).forEach((function(n){var e=n.blocks;o+=(null===e||void 0===e?void 0:e.length)||0})),o>=1?"Power ups (".concat(o,")"):"Power ups"},key:r.EXTENSIONS},{key:r.DATA,label:"Data"},{key:r.TERMINAL,label:"Terminal"}],f=(0,u.HK)(s,(function(n){return n.key})),p=(o={},(0,i.Z)(o,r.ADDON_BLOCKS,c.EJ),(0,i.Z)(o,r.CALLBACKS,c.AQ),(0,i.Z)(o,r.CHARTS,c.GQ),(0,i.Z)(o,r.DATA,c.iA),(0,i.Z)(o,r.EXTENSIONS,c.Bf),(0,i.Z)(o,r.SECRETS,c.Yo),(0,i.Z)(o,r.SETTINGS,c.Zr),(0,i.Z)(o,r.TERMINAL,c.oI),(0,i.Z)(o,r.TREE,c.mp),(0,i.Z)(o,r.VARIABLES,c.LO),o)},66050:function(n,e,t){var o;t.d(e,{V:function(){return o}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running",n.UPSTREAM_FAILED="upstream_failed",n.CONDITION_FAILED="condition_failed"}(o||(o={}))},86422:function(n,e,t){t.d(e,{$W:function(){return v},DA:function(){return p},HX:function(){return m},J8:function(){return h},L8:function(){return c},Lq:function(){return s},M5:function(){return f},Qj:function(){return k},Ut:function(){return A},V4:function(){return O},VZ:function(){return b},dO:function(){return a},f2:function(){return y},iZ:function(){return g},t6:function(){return u},tf:function(){return d}});var o,r,i,c,u,l=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(c||(c={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(u||(u={}));var d,a=(o={},(0,l.Z)(o,u.MARKDOWN,"MD"),(0,l.Z)(o,u.PYTHON,"PY"),(0,l.Z)(o,u.R,"R"),(0,l.Z)(o,u.SQL,"SQL"),(0,l.Z)(o,u.YAML,"YAML"),o);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(d||(d={}));var s,f=[d.CALLBACK,d.CONDITIONAL,d.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(s||(s={}));var p,v=[d.CHART,d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],b=[d.DATA_EXPORTER,d.DATA_LOADER],h=[d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],m=[d.DATA_EXPORTER,d.DATA_LOADER,d.DBT,d.TRANSFORMER],k=[d.CHART,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN],g=[d.CALLBACK,d.CHART,d.EXTENSION,d.SCRATCHPAD,d.MARKDOWN];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(p||(p={}));var y=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],O=(r={},(0,l.Z)(r,d.CALLBACK,"Callback"),(0,l.Z)(r,d.CUSTOM,"Custom"),(0,l.Z)(r,d.DATA_EXPORTER,"Data exporter"),(0,l.Z)(r,d.DATA_LOADER,"Data loader"),(0,l.Z)(r,d.EXTENSION,"Extension"),(0,l.Z)(r,d.SCRATCHPAD,"Scratchpad"),(0,l.Z)(r,d.SENSOR,"Sensor"),(0,l.Z)(r,d.MARKDOWN,"Markdown"),(0,l.Z)(r,d.TRANSFORMER,"Transformer"),r),A=[d.DATA_LOADER,d.TRANSFORMER,d.DATA_EXPORTER,d.SENSOR];i={},(0,l.Z)(i,d.DATA_EXPORTER,"DE"),(0,l.Z)(i,d.DATA_LOADER,"DL"),(0,l.Z)(i,d.SCRATCHPAD,"SP"),(0,l.Z)(i,d.SENSOR,"SR"),(0,l.Z)(i,d.MARKDOWN,"MD"),(0,l.Z)(i,d.TRANSFORMER,"TF")},18283:function(n,e,t){var o=t(82394),r=t(26304),i=(t(82684),t(38626)),c=t(23831),u=t(73942),l=t(2005),d=t(49125),a=t(31012),s=t(28598),f=["children"];function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function v(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var b=i.default.p.withConfig({displayName:"Badge__BadgeStyle",componentId:"sc-tfqsp0-0"})(["border-radius:","px;display:inline;font-family:",";margin:0;",";"," "," ",";",";"," "," "," "," "," "," ",""],u.BG,l.ry,a.iD,(function(n){return n.small&&"\n    ".concat(a.HC,";\n  ")}),(function(n){return n.xxsmall&&"\n    font-size: ".concat(a.VK,"px;\n    line-height: ").concat(a.VK,"px;\n  ")}),(function(n){return!n.regular&&"\n    padding: 2px 4px;\n  "}),(function(n){return n.regular&&"\n    padding: ".concat(1*d.iI,"px ").concat(1.25*d.iI,"px;\n  ")}),(function(n){return n.noVerticalPadding&&"\n    padding-bottom: 0;\n    padding-top: 0;\n  "}),(function(n){return!n.disabled&&!n.inverted&&"\n    background-color: ".concat((n.theme||c.Z).background.row,";\n    color: ").concat((n.theme||c.Z).content.default,";\n  ")}),(function(n){return!n.disabled&&n.inverted&&"\n    background-color: ".concat((n.theme||c.Z).background.dark,";\n    color: ").concat((n.theme||c.Z).content.inverted,";\n  ")}),(function(n){return n.cyan&&"\n    background-color: ".concat((n.theme||c.Z).accent.cyan,";\n    color: ").concat((n.theme||c.Z).monotone.black,";\n  ")}),(function(n){return n.disabled&&"\n    background-color: ".concat((n.theme||c.Z).feature.disabled,";\n    color: ").concat((n.theme||c.Z).content.disabled,";\n  ")}),(function(n){return n.quantifier&&"\n    border-radius: 34px;\n    line-height: 10px;\n    padding: 4px 6px;\n  "}),(function(n){return n.monospace&&"\n    font-family: ".concat(l.Vp,";\n    word-break: break-all;\n  ")}));e.Z=function(n){var e=n.children,t=(0,r.Z)(n,f);return(0,s.jsx)(b,v(v({},t),{},{children:e}))}},87323:function(n,e,t){t.d(e,{cU:function(){return c}});var o=t(82684),r=t(24224);function i(n,e){return function(n,e,t){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{includeAllNodes:!1},i=(0,r.HK)(t,(function(n){return n.uuid})),c=(o||{}).includeAllNodes,u=[];function l(t){if(t){var o=(t[e]||[]).reduce((function(e,t){return n.uuid===t?e:e.concat(i[t])}),[]);(0===o.length||c&&n.uuid!==t.uuid)&&u.push(t),o.forEach((function(n){l(n)}))}}return l(n),u}(n,"upstream_blocks",e,{includeAllNodes:!0})}function c(n,e){return(0,o.useMemo)((function(){return n.map((function(t){var o=function(n,e){var t=i(n,e),o=t.filter((function(e){var t=e.configuration,o=e.uuid;return(null===t||void 0===t?void 0:t.dynamic)&&o!==(null===n||void 0===n?void 0:n.uuid)})),r=t.filter((function(e){var t=e.configuration,o=e.uuid;return(null===t||void 0===t?void 0:t.reduce_output)&&o!==(null===n||void 0===n?void 0:n.uuid)}));return{dynamicUpstreamBlock:o[0],dynamicUpstreamBlocks:o,reduceOutputUpstreamBlock:r[0],reduceOutputUpstreamBlocks:r}}(t,e),r=o.dynamicUpstreamBlock,c=o.dynamicUpstreamBlocks,u=o.reduceOutputUpstreamBlock,l=o.reduceOutputUpstreamBlocks,d=(t||{}).configuration||{},a=d.dynamic,s=d.reduce_output;return{block:t,blocksToUse:n,dynamic:!!a,dynamicUpstreamBlock:r,dynamicUpstreamBlocks:c,reduceOutput:!!s,reduceOutputUpstreamBlock:u,reduceOutputUpstreamBlocks:l}}))}),[e,null===e||void 0===e?void 0:e.map((function(n){var e=n.configuration;return null===e||void 0===e?void 0:e.dynamic})),null===e||void 0===e?void 0:e.map((function(n){var e=n.configuration;return null===e||void 0===e?void 0:e.reduce_output})),null===e||void 0===e?void 0:e.map((function(n){return n.upstream_blocks}))])}},25958:function(n,e,t){t.d(e,{$1:function(){return i},Dy:function(){return r},IU:function(){return c}});var o=t(17717),r="--full-refresh";function i(n,e){var t,r=null===e||void 0===e?void 0:e.fullPath,i=null===n||void 0===n||null===(t=n.configuration)||void 0===t?void 0:t.file_path;if(r)return null===n||void 0===n?void 0:n.uuid;if(i){var c=i.split(o.sep),u=c[c.length-1].split(".");return u.pop(),u.join(".")}}function c(n){var e,t=null===n||void 0===n||null===(e=n.configuration)||void 0===e?void 0:e.file_path;if(t){var r=t.split(o.sep),i=r[0],c=r[r.length-1].split(".");return c.pop(),{directory:r.slice(1,r.length-1).join(o.sep),filePath:t,name:c.join("."),project:i}}return{filePath:t}}},33766:function(n,e,t){t.d(e,{O2:function(){return s},g_:function(){return p},u7:function(){return f}});var o=t(75582),r=t(82394),i=t(34376),c=t.n(i),u=t(59e3),l=t(24224);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s="_offset";function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.preserveParams,r=e.pushHistory,i=e.replaceParams,l=(0,u.iV)(),d={};t&&t.forEach((function(n){l[n]&&(d[n]=l[n])}));var s,f=i?d:l;s=window.location.pathname;var p=r?c().push:c().replace,v=a(a({},f),n);Object.entries(n).forEach((function(n){var e=(0,o.Z)(n,2),t=e[0],r=e[1];"undefined"!==typeof r&&null!==r||delete v[t]}));var b=(0,u.uM)(v);b.length>=1&&(b="?".concat(b));var h="".concat(s.split("?")[0]).concat(b);return p(c().router.pathname,h,{shallow:!0})}function p(n,e,t){var r=t.addingMultipleValues,i=t.isList,c=t.itemsPerPage,u=t.pushHistory,d=void 0!==u&&u,p=t.resetLimitParams,v=a({},n);r?Object.entries(e).forEach((function(n){var e=(0,o.Z)(n,2),t=e[0],r=e[1];if(Array.isArray(r)){var i="".concat(t,"[]");v[i]=r.map(String)}})):i?Object.entries(e).forEach((function(n){var e=(0,o.Z)(n,2),t=e[0],r=e[1],i=String(r),c="".concat(t,"[]"),u=v[c];u&&Array.isArray(u)?(u=u.map(String)).includes(i)?v[c]=(0,l.Od)(u,(function(n){return n===i})):v[c]=u.concat(i):v[c]=[i]})):v=a(a({},v),e),p&&(v._limit=c||20,v[s]=0),f(v,{pushHistory:d})}}}]);