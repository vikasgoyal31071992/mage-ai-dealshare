(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8170],{81334:function(e,n,t){"use strict";t.d(n,{Z:function(){return w}});var i=t(82394),r=t(82684),o=t(27277),u=t(31882),l=t(38276),c=t(48381),s=t(30160),a=t(17488),d=t(25976),p=t(44897),f=t(42631),v=t(47041),g=t(70515),h=d.default.div.withConfig({displayName:"indexstyle__DropdownStyle",componentId:"sc-suwkha-0"})([""," border-radius:","px;max-height:","px;overflow:auto;position:absolute;width:100%;z-index:1;"," ",""],v.w5,f.BG,40*g.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||p.Z.background).popup,";\n    box-shadow: ").concat((e.theme.shadow||p.Z.shadow).popup,";\n  ")}),(function(e){return e.topOffset&&"\n    top: ".concat(e.topOffset-.5*g.iI,"px;\n  ")})),m=d.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-suwkha-1"})(["padding:","px;position:relative;z-index:2;&:hover{cursor:pointer;}",""],.5*g.iI,(function(e){return e.highlighted&&"\n    background-color: ".concat((e.theme.interactive||p.Z.interactive).hoverBackground,";\n  ")})),y=t(39643),b=t(95924),_=t(86735),j=t(44688),x=t(28598);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=function(e){var n,t=e.removeTag,i=e.selectTag,d=e.selectedTags,p=void 0===d?[]:d,f=e.tags,v=void 0===f?[]:f,g=e.uuid,O=(0,r.useRef)(null),w=(0,r.useState)(!1),P=w[0],k=w[1],C=(0,r.useState)(null),S=C[0],E=C[1],N=(0,r.useMemo)((function(){return(0,_.YC)(v||[],"uuid")}),[v]),T=(0,r.useMemo)((function(){return null===N||void 0===N?void 0:N.map((function(e){return{itemObject:e,searchQueries:[e.uuid],value:e.uuid}}))}),[N]),D=(0,r.useMemo)((function(){return(null===S||void 0===S?void 0:S.length)>=1?T.concat({itemObject:{uuid:S},searchQueries:[S],value:"Add tag: ".concat(S)}):T}),[T,S]),R=(0,j.y)(),M=R.registerOnKeyDown,I=R.unregisterOnKeyDown;return(0,r.useEffect)((function(){return function(){return I(g)}}),[I,g]),null===M||void 0===M||M(g,(function(e,n){var t;P&&n[y.vP]&&(k(!1),null===O||void 0===O||null===(t=O.current)||void 0===t||t.blur())}),[P,O]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{onClickTag:t,tags:p}),(0,x.jsxs)(l.Z,{mt:1,style:{position:"relative"},children:[(0,x.jsx)(a.Z,{onBlur:function(){return setTimeout((function(){return k(!1)}),150)},onChange:function(e){return E(e.target.value)},onFocus:function(){return k(!0)},ref:O,value:S||""}),(0,x.jsx)(h,{topOffset:null===O||void 0===O||null===(n=O.current)||void 0===n?void 0:n.getBoundingClientRect().height,children:(0,x.jsx)(o.Z,{eventProperties:{eventParameters:{item_type:"tag"}},itemGroups:[{items:P?D:[],renderItem:function(e,n){var t=e.value;return(0,x.jsx)(m,Z(Z({},n),{},{onClick:function(e){var t;(0,b.j)(e),null===n||void 0===n||null===(t=n.onClick)||void 0===t||t.call(n,e)},children:(0,x.jsx)(u.Z,{small:!0,children:(0,x.jsx)(s.ZP,{children:t})})}))}}],onSelectItem:function(e){var n=e.itemObject;null===i||void 0===i||i(n),E(null)},searchQuery:S,uuid:g})})]})]})}},68781:function(e,n,t){"use strict";var i;t.d(n,{R:function(){return r}}),function(e){e.AZURE_CONTAINER_INSTANCE="azure_container_instance",e.ECS="ecs",e.GCP_CLOUD_RUN="gcp_cloud_run",e.K8S="k8s",e.LOCAL_PYTHON="local_python",e.PYSPARK="pyspark"}(i||(i={}));var r=[i.AZURE_CONTAINER_INSTANCE,i.ECS,i.GCP_CLOUD_RUN,i.K8S,i.LOCAL_PYTHON,i.PYSPARK]},37003:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return K}});var i=t(77837),r=t(75582),o=t(82394),u=t(38860),l=t.n(u),c=t(82684),s=t(34376),a=t(75457),d=t(93808),p=t(71180),f=t(70652),v=t(55485),g=t(85854),h=t(48670),m=t(44085),y=t(88543),b=t(38276),_=t(81334),j=t(30160),x=t(17488),O=t(35686),Z=t(98464),w=t(77417),P=t(68781),k=t(78419),C=t(70515),S=t(53808),E=t(42122),N=t(81728),T=t(86735),D=t(28598);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var I=function(e){var n,t,i,r,u,l,s,a=e.isPipelineUpdating,d=e.pipeline,R=e.updatePipeline,I=(0,w.Z)().project,A=(0,c.useRef)(null),U=(0,c.useRef)(null),H=null===d||void 0===d?void 0:d.uuid,F=(0,c.useMemo)((function(){return(null===d||void 0===d?void 0:d.blocks)||[]}),[d]),L=(0,c.useState)(!1),G=L[0],K=L[1],Y=(0,c.useState)(!1),z=Y[0],B=Y[1],W=(0,c.useState)(null),Q=W[0],X=W[1],q=(0,Z.Z)(d);(0,c.useEffect)((function(){(0,E.Xy)(d,q)||X(d)}),[d,q]);var J=(0,c.useCallback)((function(e){K(!0),X(e)}),[]),$="".concat(k.g6,"_").concat(H),V=(0,c.useState)({}),ee=V[0],ne=V[1],te="".concat(k.vF,"_").concat(H),ie=(0,c.useState)(!1),re=ie[0],oe=ie[1],ue=(0,c.useCallback)((function(e){ne((function(n){var t=e(n);return(0,S.t8)($,JSON.stringify(t)),t}))}),[$,ne]),le=(0,c.useCallback)((function(e){oe((function(n){var t=e(n);return(0,S.t8)(te,t),t}))}),[te,oe]);(0,c.useEffect)((function(){var e=(0,S.U2)($);e&&(0,N.Pb)(e)&&ne(JSON.parse(e))}),[$,ne]),(0,c.useEffect)((function(){var e=(0,S.U2)(te);e&&oe(e)}),[te,oe]);var ce=(0,c.useMemo)((function(){return null===Q||void 0===Q?void 0:Q.executor_type}),[Q]);(0,c.useEffect)((function(){z||!ce||P.R.find((function(e){return e===ce}))||B(!0)}),[z,ce]);var se=(0,c.useMemo)((function(){return(null===F||void 0===F?void 0:F.filter((function(e){var n=e.uuid;return!(null===ee||void 0===ee||!ee[n])}))).length===F.length}),[F,ee]),ae=(0,c.useMemo)((function(){return!(null!==F&&void 0!==F&&F.length)}),[F]),de=(0,c.useMemo)((function(){return(null===Q||void 0===Q?void 0:Q.tags)||[]}),[Q]),pe=O.ZP.tags.list().data,fe=(0,c.useMemo)((function(){return((null===pe||void 0===pe?void 0:pe.tags)||[]).filter((function(e){var n=e.uuid;return!de.includes(n)}))}),[pe,de]),ve=(0,c.useMemo)((function(){var e;return null===I||void 0===I||null===(e=I.pipelines)||void 0===e?void 0:e.settings}),[I]),ge=(0,c.useMemo)((function(){var e,n,t;return(null===ve||void 0===ve||null===(e=ve.triggers)||void 0===e?void 0:e.save_in_code_automatically)&&"undefined"===typeof(null===Q||void 0===Q||null===(n=Q.settings)||void 0===n||null===(t=n.triggers)||void 0===t?void 0:t.save_in_code_automatically)}),[Q,ve]);return(0,D.jsxs)(b.Z,{p:C.cd,children:[(0,D.jsxs)(y.Z,{title:"Details",children:[(0,D.jsx)(y.S,{invalid:G&&!(null!==Q&&void 0!==Q&&Q.name),textInput:{onChange:function(e){return J((function(n){return M(M({},n),{},{name:e.target.value})}))},value:null===Q||void 0===Q?void 0:Q.name},title:"Pipeline name"}),(0,D.jsx)(y.S,{textInput:{onChange:function(e){return J((function(n){return M(M({},n),{},{description:e.target.value})}))},placeholder:"Enter description...",value:(null===Q||void 0===Q?void 0:Q.description)||""},title:"Pipeline description"}),(0,D.jsx)(y.S,{description:"When enabled, this setting allows sharing of objects and memory space across blocks within a single pipeline.",title:"Run pipeline in a single process",toggleSwitch:{checked:!(null===Q||void 0===Q||!Q.run_pipeline_in_one_process),onCheck:function(e){return J((function(n){return M(M({},n),{},{run_pipeline_in_one_process:e(null===n||void 0===n?void 0:n.run_pipeline_in_one_process)})}))}}}),(0,D.jsx)(y.S,{description:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(j.ZP,{muted:!0,small:!0,children:"Every time a trigger is created or updated in this pipeline, it\u2019ll be automatically be persisted it in code."}),(null===ve||void 0===ve||null===(n=ve.triggers)||void 0===n?void 0:n.save_in_code_automatically)&&(0,D.jsx)(j.ZP,{small:!0,warning:!0,children:"This settings is enabled at the project level. Changing the value here will only affect this pipeline."})]}),title:"Save triggers in code automatically",toggleSwitch:{checked:ge||!(null===Q||void 0===Q||null===(t=Q.settings)||void 0===t||null===(i=t.triggers)||void 0===i||!i.save_in_code_automatically),onCheck:function(e){return J((function(n){var t,i,r;return M(M({},n),{},{settings:M(M({},null===n||void 0===n?void 0:n.settings),{},{triggers:M(M({},null===n||void 0===n||null===(t=n.settings)||void 0===t?void 0:t.triggers),{},{save_in_code_automatically:e(ge||(null===n||void 0===n||null===(i=n.settings)||void 0===i||null===(r=i.triggers)||void 0===r?void 0:r.save_in_code_automatically))})})})}))}}})]}),(0,D.jsxs)(b.Z,{mt:C.HN,children:[(0,D.jsx)(g.Z,{children:"Executor type"}),(0,D.jsxs)(j.ZP,{muted:!0,children:["For more information on this setting, please read the ",(0,D.jsx)(h.Z,{href:"https://docs.mage.ai/production/configuring-production-settings/compute-resource#2-set-executor-type-and-customize-the-compute-resource-of-the-mage-executor",openNewWindow:!0,children:"documentation"}),"."]}),(0,D.jsxs)(b.Z,{mt:1,children:[!z&&(0,D.jsx)(m.Z,{label:"Executor type",onChange:function(e){return J((function(n){return M(M({},n),{},{executor_type:e.target.value})}))},primary:!0,ref:A,value:(null===Q||void 0===Q?void 0:Q.executor_type)||"",children:P.R.map((function(e){return(0,D.jsx)("option",{value:e,children:e},e)}))}),z&&(0,D.jsx)(x.Z,{label:"Executor type",monospace:!0,onChange:function(e){return J((function(n){return M(M({},n),{},{executor_type:e.target.value})}))},ref:U,setContentOnMount:!0,value:(null===Q||void 0===Q?void 0:Q.executor_type)||""}),(0,D.jsx)(b.Z,{mt:1,children:(0,D.jsx)(h.Z,{muted:!0,onClick:function(){z?(J((function(e){return M(M({},e),{},{executor_type:null===d||void 0===d?void 0:d.executor_type})})),setTimeout((function(){var e;return null===A||void 0===A||null===(e=A.current)||void 0===e?void 0:e.focus()}),1)):setTimeout((function(){var e;return null===U||void 0===U||null===(e=U.current)||void 0===e?void 0:e.focus()}),1),B(!z)},preventDefault:!0,small:!0,children:z?"Select a preset executor type":"Enter a custom executor type"})})]})]}),(0,D.jsxs)(b.Z,{mt:C.HN,children:[(0,D.jsx)(g.Z,{children:"Retry configuration"}),(0,D.jsxs)(j.ZP,{muted:!0,children:["For more information on this setting, please read the ",(0,D.jsx)(h.Z,{href:"https://docs.mage.ai/orchestration/pipeline-runs/retrying-block-runs",openNewWindow:!0,children:"documentation"}),"."]}),(0,D.jsx)(b.Z,{mt:1,children:(0,D.jsxs)(v.ZP,{children:[(0,D.jsx)(x.Z,{label:"Retries",monospace:!0,onChange:function(e){return J((function(n){return M(M({},n),{},{retry_config:M(M({},null===n||void 0===n?void 0:n.retry_config),{},{retries:"undefined"!==typeof e.target.value&&null!==e.target.value?Number(e.target.value):e.target.value})})}))},setContentOnMount:!0,type:"number",value:(null===Q||void 0===Q||null===(r=Q.retry_config)||void 0===r?void 0:r.retries)||""}),(0,D.jsx)(b.Z,{mr:1}),(0,D.jsx)(x.Z,{label:"Delay",monospace:!0,onChange:function(e){return J((function(n){return M(M({},n),{},{retry_config:M(M({},null===n||void 0===n?void 0:n.retry_config),{},{delay:"undefined"!==typeof e.target.value&&null!==e.target.value?Number(e.target.value):e.target.value})})}))},setContentOnMount:!0,type:"number",value:(null===Q||void 0===Q||null===(u=Q.retry_config)||void 0===u?void 0:u.delay)||""}),(0,D.jsx)(b.Z,{mr:1}),(0,D.jsx)(x.Z,{label:"Max delay",monospace:!0,onChange:function(e){return J((function(n){return M(M({},n),{},{retry_config:M(M({},null===n||void 0===n?void 0:n.retry_config),{},{max_delay:"undefined"!==typeof e.target.value&&null!==e.target.value?Number(e.target.value):e.target.value})})}))},setContentOnMount:!0,type:"number",value:(null===Q||void 0===Q||null===(l=Q.retry_config)||void 0===l?void 0:l.max_delay)||""}),(0,D.jsx)(b.Z,{mr:1}),(0,D.jsx)(f.Z,{checked:!(null===Q||void 0===Q||null===(s=Q.retry_config)||void 0===s||!s.exponential_backoff),label:"Exponential backoff",onClick:function(){return J((function(e){var n;return M(M({},e),{},{retry_config:M(M({},null===e||void 0===e?void 0:e.retry_config),{},{exponential_backoff:!(null!==e&&void 0!==e&&null!==(n=e.retry_config)&&void 0!==n&&n.exponential_backoff)})})}))}})]})})]}),(0,D.jsxs)(b.Z,{mt:C.HN,children:[(0,D.jsx)(g.Z,{children:"Tags"}),(0,D.jsx)(b.Z,{mt:1,children:(0,D.jsx)(_.Z,{removeTag:function(e){J((function(n){return M(M({},n),{},{tags:de.filter((function(n){return n!==e.uuid}))})}))},selectTag:function(e){J((function(n){return M(M({},n),{},{tags:(0,T.$C)(e.uuid,de,(function(n){return n===e.uuid}))})}))},selectedTags:null===de||void 0===de?void 0:de.map((function(e){return{uuid:e}})),tags:fe,uuid:"TagsAutocompleteInputField-".concat(null===d||void 0===d?void 0:d.uuid)})})]}),(0,D.jsx)(b.Z,{mt:C.HN,children:(0,D.jsx)(v.ZP,{children:(0,D.jsx)(p.ZP,{disabled:!G,loading:a,onClick:function(){return R({description:null===Q||void 0===Q?void 0:Q.description,executor_type:null===Q||void 0===Q?void 0:Q.executor_type,name:null===Q||void 0===Q?void 0:Q.name,retry_config:null===Q||void 0===Q?void 0:Q.retry_config,run_pipeline_in_one_process:null===Q||void 0===Q?void 0:Q.run_pipeline_in_one_process,settings:null===Q||void 0===Q?void 0:Q.settings,tags:null===Q||void 0===Q?void 0:Q.tags}).then((function(){return K(!1)}))},primary:!0,children:"Save pipeline settings"})})}),(0,D.jsx)(b.Z,{mt:C.HN,children:(0,D.jsx)(f.Z,{checked:se&&!ae,disabled:ae,label:"Hide all blocks in notebook",onClick:function(){return ue((function(){return se?{}:null===F||void 0===F?void 0:F.reduce((function(e,n){var t=n.uuid;return M(M({},e),{},(0,o.Z)({},t,!0))}),{})}))}})}),(0,D.jsx)(b.Z,{mt:C.Mq,children:(0,D.jsx)(f.Z,{checked:re,label:"When running a block while editing a pipeline, output the block messages to the logs",onClick:function(){return le((function(e){return!e}))}})})]})},A=t(28795),U=t(69864),H=t(72619);function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function G(e){var n=e.pipeline,t=(0,s.useRouter)(),i=(0,c.useState)(null),o=i[0],u=i[1],l=null===n||void 0===n?void 0:n.uuid,d=O.ZP.pipelines.detail(l).data,p=L(L({},null===d||void 0===d?void 0:d.pipeline),n),f=(0,U.Db)(O.ZP.pipelines.useUpdate(l,{update_content:!0}),{onSuccess:function(e){return(0,H.wD)(e,{callback:function(e){if(null!==e&&void 0!==e&&e.pipeline){var n=e.pipeline.uuid;l!==n&&(window.location.href="".concat(t.basePath,"/pipelines/").concat(n,"/settings"))}},onErrorCallback:function(e,n){return u({errors:n,response:e})}})}}),v=(0,r.Z)(f,2),g=v[0],h=v[1].isLoading;return(0,D.jsx)(a.Z,{breadcrumbs:[{label:function(){return"Settings"}}],errors:o,pageName:A.M.SETTINGS,pipeline:p,setErrors:u,title:function(e){var n=e.name;return"".concat(n," settings")},uuid:"".concat(A.M.SETTINGS,"_").concat(l),children:p&&(0,D.jsx)(I,{isPipelineUpdating:h,pipeline:p,updatePipeline:function(e){return g({pipeline:e})}})})}G.getInitialProps=function(){var e=(0,i.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var K=(0,d.Z)(G)},59606:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/settings",function(){return t(37003)}])},80022:function(e,n,t){"use strict";function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return i}})},15544:function(e,n,t){"use strict";function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}t.d(n,{Z:function(){return i}})},13692:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(61049);function r(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,i.Z)(e,n)}},93189:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var i=t(12539),r=t(80022);function o(e,n){if(n&&("object"===i(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(e)}}},function(e){e.O(0,[1557,3782,9774,2888,179],(function(){return n=59606,e(e.s=n);var n}));var n=e.O();_N_E=n}]);