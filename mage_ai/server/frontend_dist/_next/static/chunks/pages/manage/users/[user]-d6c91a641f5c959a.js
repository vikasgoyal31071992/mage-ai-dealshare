(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4496],{20103:function(e,r,n){"use strict";n.d(r,{L6:function(){return o},HF:function(){return s}});var t,u=n(81132);!function(e){e.MAIN="main",e.STANDALONE="standalone",e.SUB="sub"}(t||(t={}));var o,i=n(10503);function s(e,r,n){var s=e.owner,a=e.roles,c=[{Icon:i.Vz,id:o.WORKSPACES,isSelected:function(){return o.WORKSPACES===n},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}];return(s||a===u.No.ADMIN)&&c.push({Icon:i.NO,id:o.USERS,isSelected:function(){return o.USERS===n},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),r==t.MAIN&&c.push({Icon:i.Zr,id:o.SETTINGS,isSelected:function(){return o.SETTINGS===n},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),c}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(o||(o={}))},3849:function(e,r,n){"use strict";var t=n(82684),u=n(1210),o=n(82531),i=n(49125),s=n(20103),a=n(9736),c=n(28598);r.Z=function(e){var r=e.before,n=e.breadcrumbs,l=void 0===n?[]:n,d=e.children,v=e.errors,f=e.pageName,p=e.subheaderChildren,m=o.ZP.statuses.list().data,b=(0,t.useMemo)((function(){var e,r;return null===m||void 0===m||null===(e=m.statuses)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.project_type}),[m]),h=(0,a.PR)()||{};return(0,c.jsx)(u.Z,{before:r,beforeWidth:r?50*i.iI:0,breadcrumbs:l,errors:v,navigationItems:(0,s.HF)(h,b,f),subheaderChildren:p,title:"Workspaces",uuid:"workspaces/index",children:d})}},82702:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return x}});var t=n(77837),u=n(38860),o=n.n(u),i=n(82684),s=n(34376),a=n(41788),c=n(86673),l=n(20582),d=n(75582),v=n(21831),f=n(82394),p=n(21764),m=n(83455),b=n(60328),h=n(55378),S=n(87815),O=n(19711),g=n(82531),w=n(24224),P=n(96510),_=n(28598);function j(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function Z(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?j(Object(n),!0).forEach((function(r){(0,f.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var k=function(e){var r=e.fetchUser,n=e.user,t=e.workspaces,u=(0,i.useState)(),o=u[0],s=u[1];(0,i.useEffect)((function(){n&&s(n)}),[n]);var a=null===t||void 0===t?void 0:t.map((function(e){return e.project_uuid})),l=g.ZP.roles.list({entity:"project",entity_ids:a},{},{}),j=l.data,k=(l.mutate,(0,i.useMemo)((function(){var e=(null===j||void 0===j?void 0:j.roles)||[];return null===e||void 0===e?void 0:e.reduce((function(e,r){var n=r.permissions[0].entity_id,t=e[n]||[];return Z(Z({},e),{},(0,f.Z)({},n,[].concat((0,v.Z)(t),[r])))}),{})}),[j])),y=(0,i.useMemo)((function(){var e=o||n,r=null===e||void 0===e?void 0:e.roles_new;return null===r||void 0===r?void 0:r.reduce((function(e,r){var n,t,u=null===r||void 0===r||null===(n=r.permissions)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.entity_id;return Z(Z({},e),{},(0,f.Z)({},u,r))}),{})}),[o,n]),E=(0,m.Db)(g.ZP.users.useUpdate(null===n||void 0===n?void 0:n.id),{onSuccess:function(e){return(0,P.wD)(e,{callback:function(e){var n=e.user;p.Am.success("User roles successfully saved.",{position:p.Am.POSITION.BOTTOM_RIGHT,toastId:"user-update-success-".concat(n.id)}),r()},onErrorCallback:function(e){var r=e.error,n=r.errors,t=r.exception,u=r.message,o=r.type;p.Am.error((null===n||void 0===n?void 0:n.error)||t||u,{position:p.Am.POSITION.BOTTOM_RIGHT,toastId:o})}})}}),I=(0,d.Z)(E,2),N=I[0],T=I[1].isLoading;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(S.Z,{columnFlex:[1,1],columns:[{uuid:"Workspace"},{uuid:"Role"}],rows:null===t||void 0===t?void 0:t.map((function(e){var r=e.name,n=e.project_uuid,t=(null===k||void 0===k?void 0:k[n])||[],u=null===y||void 0===y?void 0:y[n];return[(0,_.jsx)(O.ZP,{bold:!0,children:r},"name"),(0,_.jsx)(h.Z,{onChange:function(e){var r=(0,w.sE)(t,(function(r){return r.id==e.target.value}));r&&s((function(e){var n,t=(null===e||void 0===e||null===(n=e.roles_new)||void 0===n?void 0:n.filter((function(e){return e.id!=(null===r||void 0===r?void 0:r.id)})))||[],u={roles_new:[].concat((0,v.Z)(t),[r])};return Z(Z({},e),u)}))},placeholder:"No access",primary:!0,setContentOnMount:!0,value:null===u||void 0===u?void 0:u.id,children:t.map((function(e){var r=e.id,n=e.name;return(0,_.jsx)("option",{value:r,children:n},n)}))},"project_role")]}))}),(0,_.jsx)(c.Z,{p:2,children:(0,_.jsx)(b.Z,{loading:T,onClick:function(){var e,r=Z(Z({},o),{},{roles_new:null===o||void 0===o||null===(e=o.roles_new)||void 0===e?void 0:e.map((function(e){return e.id}))});N({user:r})},primary:!0,children:"Update roles"})})]})},y=n(3849),E=n(49125),I=n(63153),N=n(20103);function T(e){var r=e.user,n=(0,s.useRouter)(),t=(0,i.useState)(null),u=t[0],o=t[1],a=null===r||void 0===r?void 0:r.id,d=g.ZP.users.detail(a),v=d.data,f=d.mutate,p=g.ZP.statuses.list().data,m=(0,i.useMemo)((function(){var e,r;return null===p||void 0===p||null===(e=p.statuses)||void 0===e||null===(r=e[0])||void 0===r?void 0:r.instance_type}),[p]),b=(0,i.useMemo)((function(){return null===v||void 0===v?void 0:v.user}),[v]);(0,i.useEffect)((function(){(0,P.bB)(v,o)}),[v]);var h=g.ZP.workspaces.list({cluster_type:m,user_id:a},{refreshInterval:5e3,revalidateOnFocus:!0}).data,S=(0,i.useMemo)((function(){return(0,_.jsx)(c.Z,{p:E.cd,children:(0,_.jsx)(l.Z,{hideFields:[I.s7],onDeleteSuccess:function(){return n.push("/manage/users")},onSaveSuccess:f,showDelete:!0,title:"Edit user",user:b})})}),[f,n,b]),O=(0,i.useMemo)((function(){return null===h||void 0===h?void 0:h.workspaces}),[h]);return(0,_.jsx)(y.Z,{before:S,breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{label:function(){return"Users"},linkProps:{as:"/manage/users",href:"/manage/users"}},{bold:!0,label:function(){return(null===b||void 0===b?void 0:b.username)||"User"}}],errors:u,pageName:N.L6.USERS,children:(0,_.jsx)(k,{fetchUser:f,user:b,workspaces:O})})}T.getInitialProps=function(){var e=(0,t.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.query.user,e.abrupt("return",{user:{id:n}});case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();var x=(0,a.Z)(T)},11976:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users/[user]",function(){return n(82702)}])}},function(e){e.O(0,[844,7607,1424,1005,7815,3883,9774,2888,179],(function(){return r=11976,e(e.s=r);var r}));var r=e.O();_N_E=r}]);