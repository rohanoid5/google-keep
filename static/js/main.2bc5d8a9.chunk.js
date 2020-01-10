(this["webpackJsonpgoogle-keep"]=this["webpackJsonpgoogle-keep"]||[]).push([[0],{25:function(e,t,n){e.exports=n(43)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),c=n.n(i),r=(n(30),n(18)),l=n(19),s=n(23),u=n(20),m=n(24),d=(n(31),n(32),n(5)),f=n(2),v=n(4),E=n.n(v),h=(n(37),"DARK_THEME"),p=["#ececec","#880e4f","#4a148c","#1a237e","#1b5e20","#bf360c"],g=["#282c34","#880e4f","#4a148c","#1a237e","#1b5e20","#bf360c"],b=o.a.createContext({theme:"LIGHT_THEME",toggleTheme:function(){}}),N=function(e){var t=e.updateFilter,n=e.value,i=Object(a.useRef)(null),c=Object(a.useState)(n),r=Object(f.a)(c,2),l=r[0],s=r[1],u=function(e){s(e.currentTarget.value)};return Object(a.useEffect)((function(){E.a.getItem("filter",l).then((function(e){e&&(s(e),t(e))}))}),[]),Object(a.useEffect)((function(){t(l),E.a.setItem("filter",l)}),[l,t]),o.a.createElement(b.Consumer,null,(function(e){var n=e.theme;return o.a.createElement("div",{className:n===h?"search-component search-component-dark":"search-component search-component-light"},o.a.createElement("i",{className:n===h?"icon material-icons search-icon":"icon icon-light material-icons search-icon",onClick:function(){return i.current.focus()}},"search"),o.a.createElement("input",{ref:i,placeholder:"Search",className:n===h?"search-input":"search-input search-input-light",type:"text",onChange:u,value:l}),o.a.createElement("i",{className:n===h?"icon material-icons search-icon":"icon icon-light material-icons search-icon",onClick:function(){t(""),s("")}},"close"))}))},O=Object(d.b)((function(e){var t=e.notes,n=e.filter;return{notes:t.filter((function(e){return e.title.toLowerCase().includes(n.noteTitleFilter)||e.body.toLowerCase().includes(n.noteTitleFilter)})),value:n.noteTitleFilter}}),(function(e){return{updateFilter:function(t){e({type:"UPDATE_NOTE_TITLE_FILTER",text:t})}}}))((function(e){return o.a.createElement("div",{style:{width:"80%"}},o.a.createElement(N,e))}));var y=function(e){var t=e.setNavbarCollapse;return o.a.createElement(b.Consumer,null,(function(e){var n=e.toggleTheme,a=e.theme;return o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"navbar-icon"},o.a.createElement("div",{className:a===h?"icon":"icon icon-light",onClick:t},o.a.createElement("i",{className:"material-icons hamburger"},"menu")),o.a.createElement("div",{className:"icon-title"},"Google Keep")),o.a.createElement("div",{className:"search-box"},o.a.createElement(O,null)),o.a.createElement("div",{className:"action-area"},o.a.createElement("div",{className:a===h?"icon":"icon icon-light",onClick:n},o.a.createElement("i",{className:"material-icons hamburger"},a===h?"wb_sunny":"brightness_2"))))}))},C=(n(38),[{title:"Notes",icon:"note"},{title:"Archive",icon:"archive"}]),T=function(e){var t=e.isNavbarCollapased,n=e.selctedIndex,a=e.setSelectedIndex,i=e.theme,c=C.map((function(e,t){var i=e.icon,c=e.title;return o.a.createElement("div",{key:c,className:n===t?"list-item list-item-active":"list-item",onClick:function(){return a(t)}},o.a.createElement("i",{className:"material-icons list-icon"},i),o.a.createElement("div",{className:"list-title"},c))})),r="";return r=t?"navbar navbar-hidden":"navbar","LIGHT_THEME"===i&&(r+=" navbar-light"),o.a.createElement("nav",{className:r},c,o.a.createElement("div",{style:{backgroundColor:"#BBB",height:"1px"}}))},j=n(6),S=(n(39),n(8)),w=n(1),k=n(11),_=n.n(k),x={title:"",body:"",image:"",backgroundColor:"",isArchived:!1,isStarred:!1},A=(n(40),n(41),function(e){var t=e.colors,n=e.selectedIndex,a=e.handleBackgroundColor,i=e.setColorPickerVisibility,c=e.position;return o.a.createElement("div",{className:"color-container",style:Object(S.a)({},c.key,c.value),onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)}},t.map((function(e,t){return o.a.createElement("div",{key:e,className:"color",style:{backgroundColor:"".concat(e),opacity:t===n?.4:1},onClick:function(n){n.stopPropagation(),a(t,e)}},t===n&&o.a.createElement("i",{style:{alignSelf:"center"},className:"material-icons"},"check"))})))}),I=function(e){var t=e.note,n=e.onRemove,i=e.onArchive,c=e.onStar,r=e.onUpdate,l=e.setModalVisibility,s=e.setSelectedNote,u=e.dimensions,m=g.indexOf(t.backgroundColor),d=Object(a.useState)(!1),v=Object(f.a)(d,2),E=v[0],N=v[1],O=Object(a.useState)(!1),y=Object(f.a)(O,2),C=y[0],T=y[1],j=Object(a.useState)(-1===m?0:m),S=Object(f.a)(j,2),k=S[0],_=S[1],x=Object(a.useRef)(null),I=Object(a.useState)(1),L=Object(f.a)(I,2),H=L[0],M=L[1];Object(a.useEffect)((function(){var e=Math.ceil((x.current.querySelector(".note-inner").getBoundingClientRect().height+u.rowGap)/(u.rowHeight+u.rowGap));M(e)}),[u]);var R=function(e){e.stopPropagation(),l(!0),s(t)},P=function(e){e.stopPropagation(),i(t)},G=function(e){e.stopPropagation(),n(t)},U=function(e){e.stopPropagation(),c(t)},F=function(e,n){_(e);var a=Object(w.a)({},t,{backgroundColor:n});r(a)};return o.a.createElement(b.Consumer,null,(function(e){var n=e.theme;return o.a.createElement("div",{ref:x,style:{gridRowEnd:"span ".concat(H)}},o.a.createElement("div",{className:"note-inner",onMouseOver:function(){return N(!0)},onMouseEnter:function(){return N(!0)},onMouseLeave:function(){return N(!1)},onClick:R,style:{position:"relative",backgroundColor:"".concat(t.backgroundColor),color:"LIGHT_THEME"===n&&""===t.backgroundColor?"#000000":"#eeeeee"}},C&&o.a.createElement(A,{colors:n===h?g:p,selectedIndex:k,handleBackgroundColor:F,setColorPickerVisibility:T,position:{key:"right",value:"16px"}}),E&&o.a.createElement("div",{className:n===h?"star-icon-action icon":"star-icon-action icon icon-light",onClick:U},o.a.createElement("i",{className:"material-icons md-18"},t.isStarred?"star":"star_border")),o.a.createElement("div",{className:"note-title"},t.title),o.a.createElement("div",{className:"note-content"},t.body),""!==t.image&&o.a.createElement("div",{className:"note-image-container"},o.a.createElement("img",{className:"note-image",alt:"invalid_img_url",src:t.image})),o.a.createElement("div",{className:"note-actions"},E&&o.a.createElement("div",{className:n===h?"note-action icon":"note-action icon icon-light",onClick:P},o.a.createElement("i",{className:t.isArchived?"material-icons md-18":"material-icons-outlined  md-18"},"archive")),E&&o.a.createElement("div",{className:n===h?"note-action icon":"note-action icon icon-light"},o.a.createElement("i",{className:"material-icons md-18"},"add_photo_alternate")),E&&o.a.createElement("div",{className:n===h?"note-action icon":"note-action icon icon-light",onMouseOver:function(){return T(!0)},onMouseOut:function(){return T(!1)}},o.a.createElement("i",{className:"material-icons md-18"},"color_lens")),E&&o.a.createElement("div",{className:n===h?"note-action icon":"note-action icon icon-light",onClick:G},o.a.createElement("i",{className:"material-icons md-18"},"delete")))))}))},L=function(e){var t=e.notes,n=e.onRemove,i=e.onArchive,c=e.onUpdate,r=e.onStar,l=Object(a.useState)(x),s=Object(f.a)(l,2),u=s[0],m=s[1],d=Object(a.useState)(!1),v=Object(f.a)(d,2),p=v[0],g=v[1],N=Object(a.useState)(!1),O=Object(f.a)(N,2),y=O[0],C=O[1],T=Object(a.useState)({rowHeight:0,rowGap:0}),j=Object(f.a)(T,2),k=j[0],A=j[1],L=Object(a.useRef)(null),H=Object(a.useRef)(null);Object(a.useEffect)((function(){L.current.focus(),_()(L.current),E.a.getItem("selectionInfo").then((function(e){e&&e.modalVisibility&&e.selectedNote&&(g(!0),m(e.selectedNote))})),M()}),[]),Object(a.useEffect)((function(){E.a.setItem("selectionInfo",{modalVisibility:p,selectedNote:u})}),[p,u]),Object(a.useEffect)((function(){t.filter((function(e){return e.isStarred})).length>0&&t.filter((function(e){return!e.isStarred})).length>0?C(!0):C(!1)}),[t]);var M=function(){var e=parseInt(window.getComputedStyle(H.current).getPropertyValue("grid-auto-rows")),t=parseInt(window.getComputedStyle(H.current).getPropertyValue("grid-row-gap"));A({rowGap:t,rowHeight:e})},R=function(e){var t=Object(w.a)({},u,Object(S.a)({},e.currentTarget.name,e.currentTarget.value));m(t),c(t)};return o.a.createElement(b.Consumer,null,(function(e){var a=e.theme;return o.a.createElement("div",null,y&&o.a.createElement("div",{style:{marginBottom:"8px"},className:"note-tag"},"STARRED"),o.a.createElement("div",{className:"notes-grid"},t.filter((function(e){return e.isStarred})).map((function(e){return o.a.createElement(I,{dimensions:k,key:e.id,note:e,onRemove:n,onArchive:i,onStar:r,onUpdate:c,setModalVisibility:g,setSelectedNote:m})})),p),y&&o.a.createElement("div",{style:{marginTop:"16px",marginBottom:"8px"},className:"note-tag"},"OTHERS"),o.a.createElement("div",{ref:H,className:"notes-grid"},t.filter((function(e){return!e.isStarred})).map((function(e){return o.a.createElement(I,{dimensions:k,key:e.id,note:e,onRemove:n,onArchive:i,onStar:r,onUpdate:c,setModalVisibility:g,setSelectedNote:m})})),p),o.a.createElement("div",{className:p?"modale opened":"modale"},o.a.createElement("div",{className:a===h?"modal-dialog":"modal-dialog modal-dialog-light"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("input",{onChange:R,value:u.title,className:a===h?"note-title-input":"note-title-input note-title-input-light",type:"text",name:"title",placeholder:"Title"}),o.a.createElement("textarea",{onChange:R,value:u.body,name:"body",ref:L,rows:1,className:a===h?"note-content-input":"note-content-input note-content-input-light",type:"text",placeholder:"Take a note..."}),o.a.createElement("input",{onChange:R,value:u.image,className:a===h?"note-title-input":"note-title-input note-title-input-light",type:"text",name:"image",placeholder:"Paste your image url here"}),o.a.createElement("button",{className:a===h?"modal-btn note-btn":"modal-btn note-btn note-btn-light",onClick:function(){return g(!1)}},"Close")))))}))},H=n(12),M=n(3),R=n.n(M);window.localforage=E.a;var P=function(){var e;return R.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R.a.awrap(E.a.getItem("notes"));case 2:if(e=t.sent){t.next=6;break}return t.next=6,R.a.awrap(E.a.setItem("notes",[]));case 6:return t.abrupt("return",e||[]);case 7:case"end":return t.stop()}}))},G=function(e){var t,n;return R.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,R.a.awrap(P());case 2:return t=a.sent,n=Object(w.a)({},e,{id:Date.now()}),E.a.setItem("notes",[].concat(Object(H.a)(t),[n])),a.abrupt("return",n);case 6:case"end":return a.stop()}}))},U=function(){return R.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.awrap(P());case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},F=function(e){var t,n;return R.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.id,a.next=3,R.a.awrap(P());case 3:n=a.sent,E.a.setItem("notes",n.filter((function(e){return e.id!==t})));case 5:case"end":return a.stop()}}))},D=function(e){var t;return R.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,R.a.awrap(P());case 2:t=n.sent,E.a.setItem("notes",t.map((function(t){return t.id===e.id?Object(w.a)({},t,{},e):t})));case 4:case"end":return n.stop()}}))},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c={isStarred:o,isArchived:i,title:e,body:t,image:n,backgroundColor:a};return function(e){G(c).then((function(t){e({type:"ADD_NEW_NOTE",note:t})}))}},B=function(e){return function(t,n){D(e).then((function(){t({type:"UPDATE_NOTE",note:e})}))}},W=function(e){var t=Object(w.a)({},e,{isStarred:!e.isStarred});return function(e,n){D(t).then((function(){e({type:"TOGGLE_NOTE",note:t})}))}},J=function(e){var t=Object(w.a)({},e,{isArchived:!e.isArchived});return function(e,n){D(t).then((function(){e({type:"TOGGLE_NOTE",note:t})}))}},K=function(e){return function(t){F(e).then((function(){t({type:"REMOVE_NOTE",id:e.id})}))}},X=Object(d.b)((function(e){var t=e.notes,n=e.filter;return{notes:t.filter((function(e){return!e.isArchived&&(e.title.toLowerCase().includes(n.noteTitleFilter.toLowerCase())||e.body.toLowerCase().includes(n.noteTitleFilter.toLowerCase()))}))}}),(function(e){return{onArchive:function(t){e(J(t))},onRemove:function(t){e(K(t))},onUpdate:function(t){e(B(t))},onStar:function(t){e(W(t))}}}))((function(e){var t=e.notes,n=e.onRemove,a=e.onArchive,i=e.onUpdate,c=e.onStar;return o.a.createElement(L,{notes:t,onRemove:n,onArchive:a,onUpdate:i,onStar:c})})),q=Object(d.b)((function(e){var t=e.notes,n=e.filter;return{notes:t.filter((function(e){return e.isArchived&&(e.title.toLowerCase().includes(n.noteTitleFilter.toLowerCase())||e.body.toLowerCase().includes(n.noteTitleFilter.toLowerCase()))}))}}),(function(e){return{onArchive:function(t){e(J(t))},onRemove:function(t){e(K(t))},onUpdate:function(t){e(B(t))},onStar:function(t){e(W(t))}}}))((function(e){var t=e.notes,n=e.onRemove,a=e.onArchive,i=e.onUpdate,c=e.onStar;return o.a.createElement(L,{notes:t,onRemove:n,onArchive:a,onUpdate:i,onStar:c})})),$=function(e){var t=e.isFocussed,n=e.setFocus,i=e.noteState,c=e.setNoteState,r=e.onSave,l=Object(a.useRef)(null),s=Object(a.useState)(0),u=Object(f.a)(s,2),m=u[0],d=u[1],v=Object(a.useState)(!1),E=Object(f.a)(v,2),N=E[0],O=E[1],y=Object(a.useState)(!1),C=Object(f.a)(y,2),T=C[0],j=C[1];Object(a.useEffect)((function(){l&&l.current&&(l.current.focus(),_()(l.current))}),[]);var k=function(e){c(Object(w.a)({},i,Object(S.a)({},e.target.name,e.target.value)))},x=function(){c((function(e){return Object(w.a)({},e,{isStarred:!e.isStarred})}))},I=function(){c((function(e){return Object(w.a)({},e,{isArchived:!e.isArchived})}))},L=function(e,t){d(e),c((function(e){return Object(w.a)({},e,{backgroundColor:t})}))},H=function(){j((function(e){return!e}))},M=function(){j(!1),c((function(e){return Object(w.a)({},e,{image:""})}))};return t?o.a.createElement(b.Consumer,null,(function(e){var t=e.theme;return o.a.createElement("div",{className:"note-add",style:{position:"relative",backgroundColor:"".concat(t===h?g[m]:p[m])},onClick:function(e){return e.stopPropagation()}},N&&o.a.createElement(A,{colors:t===h?g:p,selectedIndex:m,handleBackgroundColor:L,setColorPickerVisibility:O,position:{key:"left",value:"16px"}}),o.a.createElement("div",{className:"LIGHT_THEME"===t&&0===m?"star-icon icon icon-light":"star-icon icon material-icon-white",onClick:x},o.a.createElement("i",{className:"material-icons"},i.isStarred?"star":"star_border")),o.a.createElement("input",{onChange:k,value:i.title,className:"LIGHT_THEME"===t&&0===m?"note-title-input note-title-input-light":"note-title-input",type:"text",name:"title",placeholder:"Title"}),o.a.createElement("textarea",{onChange:k,value:i.body,name:"body",ref:l,rows:1,className:"LIGHT_THEME"===t&&0===m?"note-content-input note-content-input-light":"note-content-input",type:"text",placeholder:"Take a note..."}),T&&o.a.createElement("input",{onChange:k,value:i.image,className:"LIGHT_THEME"===t&&0===m?"note-title-input note-title-input-light":"note-title-input",type:"text",name:"image",placeholder:"Paste your image url here"}),""!==i.image&&o.a.createElement("div",{className:"note-image-container"},o.a.createElement("div",{className:t===h?"icon note-image-remove":"icon icon-light note-image-remove",onClick:M},o.a.createElement("i",{className:"material-icons"},"clear")),o.a.createElement("img",{className:"note-image",alt:"invalid_img_url",src:i.image})),o.a.createElement("div",{className:"note-add-actions"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{className:"LIGHT_THEME"===t&&0===m?"icon  icon-light":"icon material-icon-white",onClick:I},o.a.createElement("i",{className:i.isArchived?"material-icons":"material-icons-outlined"},"archive")),o.a.createElement("div",{className:"LIGHT_THEME"===t&&0===m?"icon  icon-light":"icon material-icon-white",onClick:H},o.a.createElement("i",{className:i.isArchived?"material-icons":"material-icons-outlined"},"add_photo_alternate")),o.a.createElement("div",{className:"LIGHT_THEME"===t&&0===m?"icon  icon-light":"icon material-icon-white",onMouseOver:function(){return O(!0)},onMouseOut:function(){return O(!1)}},o.a.createElement("i",{className:"material-icons"},"color_lens"))),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("button",{className:"LIGHT_THEME"===t&&0===m?"note-btn note-btn-light":"note-btn",onClick:function(){r(),d(0),j(!1)}},"Close"))))})):o.a.createElement(b.Consumer,null,(function(e){var t=e.theme;return o.a.createElement("div",{style:{display:"flex"},className:"note-add",onClick:function(e){return e.stopPropagation()}},o.a.createElement("div",{className:"note-add-unfocussed",onClick:function(){return n(!0)}},"Take a note"),o.a.createElement("div",{style:{flex:"1",display:"flex"}},o.a.createElement("div",{className:t===h?"icon":"icon icon-light",onClick:function(){n(!0),j(!0)}},o.a.createElement("i",{className:"material-icons"},"add_photo_alternate"))))}))},z=function(e){var t=e.selctedIndex,n=e.addNewNote,i=Object(a.useState)(!1),c=Object(f.a)(i,2),r=c[0],l=c[1],s=Object(a.useState)(x),u=Object(f.a)(s,2),m=u[0],d=u[1],v=function(){var e=m.title,t=m.body,a=m.isStarred,o=m.isArchived,i=m.backgroundColor,c=m.image;""===e&&""===t||(n(e,t,c,i,a,o),d(x)),l(!1)};return o.a.createElement("main",{className:"main",onClick:v},0===t&&o.a.createElement("div",{className:"note-add-container"},o.a.createElement($,{isFocussed:r,setFocus:l,noteState:m,setNoteState:d,onSave:v})),o.a.createElement("div",{className:"notes-container"},function(){switch(t){case 0:return o.a.createElement(X,null);case 1:return o.a.createElement(q,null);default:return null}}()))},Q=Object(d.b)(null,(function(e){return Object(j.b)({addNewNote:V},e)}))((function(e){var t=e.addNewNote,n=e.selctedIndex;return o.a.createElement(z,{addNewNote:t,selctedIndex:n})})),Y=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setNavbarCollapse=function(){return n.setState((function(e){return{isNavbarCollapased:!e.isNavbarCollapased}}))},n.setSelectedIndex=function(e){n.setState((function(t){var n=t.isNavbarCollapased;return{isNavbarCollapased:window.innerWidth<775?!n:n,selctedIndex:e}}))},n.toggleTheme=function(){return n.setState((function(e){return{theme:e.theme===h?"LIGHT_THEME":h}}))},n.state={isNavbarCollapased:window.innerWidth<775,selctedIndex:0,theme:h,toggleTheme:n.toggleTheme},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.selctedIndex,n=e.isNavbarCollapased,a=e.theme;return o.a.createElement(b.Provider,{value:{theme:this.state.theme,toggleTheme:this.state.toggleTheme}},o.a.createElement("div",{className:a===h?"App App-dark":"App App-light"},o.a.createElement(y,{setNavbarCollapse:this.setNavbarCollapse}),o.a.createElement("div",{style:{backgroundColor:"#BBB",height:"1px"}}),o.a.createElement("div",{className:"container"},o.a.createElement(T,{theme:a,selctedIndex:t,setSelectedIndex:this.setSelectedIndex,isNavbarCollapased:n}),o.a.createElement(Q,{selctedIndex:t}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=n(22),ee=Object(j.c)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if("UPDATE_ALL_NOTES"===t.type)return t.notes;if("ADD_NEW_NOTE"===t.type){var n=t.note,a=n.id,o=n.isArchived,i=n.title,c=n.body,r=n.image,l=n.isStarred,s=n.backgroundColor;return[].concat(Object(H.a)(e),[{id:a,isArchived:o,title:i,body:c,image:r,isStarred:l,backgroundColor:s}])}return"REMOVE_NOTE"===t.type?e.filter((function(e){return e.id!==t.id})):"UPDATE_NOTE"===t.type||"TOGGLE_NOTE"===t.type?e.map((function(e){return e.id===t.note.id?Object(w.a)({},t.note):e})):"UPDATE_ALL_AS_ARCHIVE"===t.type?e.map((function(e){return Object(w.a)({},e,{isArchived:!0})})):"UPDATE_ALL_AS_UNARCHIVE"===t.type?e.map((function(e){return Object(w.a)({},e,{isArchived:!1})})):e},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{noteTitleFilter:""},t=arguments.length>1?arguments[1]:void 0;return"UPDATE_NOTE_TITLE_FILTER"===t.type?Object(w.a)({},e,{noteTitleFilter:t.text}):e}}),te={notes:[],filter:{noteTitleFilter:""}},ne=[Z.a],ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,oe=Object(j.e)(ee,te,ae.apply(void 0,[j.a.apply(void 0,ne)].concat([])));oe.dispatch((function(e){U().then((function(t){e({type:"UPDATE_ALL_NOTES",notes:t})}))}));var ie=oe;c.a.render(o.a.createElement(d.a,{store:ie},o.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.2bc5d8a9.chunk.js.map