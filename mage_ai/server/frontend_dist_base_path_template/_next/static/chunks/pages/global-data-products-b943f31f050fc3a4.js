(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3928],{67355:function(e,t,o){"use strict";var u=o(12691),n=o.n(u),l=o(82684),r=o(34376),a=o(8666),d=o(48670),c=o(38276),i=o(4190),s=o(75499),p=o(30160),b=o(35686),f=o(70515),j=o(95924),v=o(28598);t.Z=function(e){var t=e.globalDataProducts,o=e.onClickRow,u=(0,r.useRouter)(),h=b.ZP.global_data_products.list({},{},{pauseFetch:!!t}).data,_=(0,l.useMemo)((function(){return t||(null===h||void 0===h?void 0:h.global_data_products)||[]}),[h,t]);return h||t?h&&0===(null===_||void 0===_?void 0:_.length)?(0,v.jsx)(c.Z,{p:f.cd,children:(0,v.jsx)(p.ZP,{children:"There are currently no global data products registered."})}):(0,v.jsx)(s.Z,{columnFlex:[null,null,null,null],columns:[{uuid:"UUID"},{uuid:"Object type"},{uuid:"Object UUID"},{uuid:"Project"}],onClickRow:function(e){var t=null===_||void 0===_?void 0:_[e];t&&(o?null===o||void 0===o||o(t):u.push("/global-data-products/[...slug]","/global-data-products".concat(null!==t&&void 0!==t&&t.project?"/"+(null===t||void 0===t?void 0:t.project):"","/").concat(null===t||void 0===t?void 0:t.uuid)))},rows:null===_||void 0===_?void 0:_.map((function(e){var t=e.object_type,o=e.object_uuid,l=e.project,r=e.uuid,c={as:null,href:null};return a.b.PIPELINE===t&&(c.as="/pipelines/".concat(o,"/edit"),c.href="/pipelines/[pipeline]/edit"),[(0,v.jsx)(p.ZP,{monospace:!0,children:r},"uuid"),(0,v.jsx)(p.ZP,{default:!0,monospace:!0,children:t},"objectType"),(0,v.jsx)(n(),{as:null===c||void 0===c?void 0:c.as,href:(null===c||void 0===c?void 0:c.href)||"",passHref:!0,children:(0,v.jsx)(d.Z,{default:!0,monospace:!0,onClick:function(e){(0,j.j)(e),u.push(c.href,c.as)},preventDefault:!0,children:o})},"objectUUID"),(0,v.jsx)(p.ZP,{default:!0,monospace:!0,children:l},"project")]})),uuid:"global-data-products"}):(0,v.jsx)(c.Z,{p:f.cd,children:(0,v.jsx)(i.Z,{})})}},252:function(e,t,o){"use strict";o.r(t);var u=o(77837),n=o(38860),l=o.n(n),r=o(82684),a=o(71180),d=o(94629),c=o(19396),i=o(67355),s=o(93808),p=o(38276),b=o(72473),f=o(70515),j=o(69419),v=o(28598);function h(){var e=(0,r.useState)(!1),t=e[0],o=e[1],u=(0,r.useState)(null),n=u[0],l=u[1],s=(0,r.useState)(null),h=s[0],_=s[1],x=(0,j.iV)();return(0,r.useEffect)((function(){var e=x.new,t=x.object_type,u=x.object_uuid;t&&_(t),u&&l(u),o(!!e)}),[x]),(0,v.jsxs)(d.Z,{addProjectBreadcrumbToCustomBreadcrumbs:t,breadcrumbs:t?[{label:function(){return"Global data products"},linkProps:{href:"/global-data-products"}},{bold:!0,label:function(){return"New"}}]:null,title:"Global data products",uuid:"GlobalDataProducts/index",children:[(0,v.jsx)(p.Z,{p:f.cd,children:(0,v.jsx)(a.ZP,{beforeIcon:(0,v.jsx)(b.Add,{size:2.5*f.iI}),inline:!0,linkProps:{as:"/global-data-products?new=1",href:"/global-data-products"},noHoverUnderline:!0,primary:!0,sameColorAsText:!0,children:"New global data product"})}),t&&(0,v.jsx)(c.Z,{globalDataProduct:{object_type:h||null,object_uuid:n},isNew:t}),!t&&(0,v.jsx)(i.Z,{})]})}h.getInitialProps=(0,u.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,s.Z)(h)},42692:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/global-data-products",function(){return o(252)}])}},function(e){e.O(0,[1557,7966,9624,3763,9774,2888,179],(function(){return t=42692,e(e.s=t);var t}));var t=e.O();_N_E=t}]);