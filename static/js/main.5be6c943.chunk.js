(this["webpackJsonpjetbrains-plugins-repositories"]=this["webpackJsonpjetbrains-plugins-repositories"]||[]).push([[0],{114:function(e,t,n){e.exports=n(214)},214:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=(n(213),n(112)),l=n(48),u=(n(76),n(31)),s=n(102),d=(n(128),n(74)),m=n(103),f=n.n(m),p=n(113),b=n(12),g=n(106),h=n.n(g),j=function(e){var t=e.plugin,n=t.branch,a=t.extensions,i=t.repository;return r.a.createElement("div",null,r.a.createElement("strong",null,"Available extensions:"),r.a.createElement("ul",null,Object(b.toPairs)(a).map((function(e){var t=Object(l.a)(e,2),a=t[0],c=t[1];return r.a.createElement("li",{key:a},a,":",r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("a",{href:"https://github.com/".concat(i,"/blob/").concat(n,"/").concat(e)},e))}))))}))))};function E(){var e=Object(s.a)(["\n  width: 100%;\n"]);return E=function(){return e},e}var O=Object(p.a)(u.a)(E()),x=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([]),s=Object(l.a)(c,2),m=s[0],p=s[1];Object(a.useEffect)((function(){h.a.get("https://raw.githubusercontent.com/hsz/jetbrains-plugins-repositories-list/master/data.json").then((function(e){i(e.data)}))}),[]);var g,E=Object(a.useCallback)((function(e){p(e)}),[]),x=Object(b.flatten)(n.reduce((function(e,t){return e.concat(Object(b.keys)(t.extensions))}),[])),y=n.filter((function(e){return Object(b.isEmpty)(Object(b.difference)(m,Object(b.keys)(e.extensions)))}));return r.a.createElement(o.a,{columns:(g=n,[{title:"Name",dataIndex:"name",render:function(e,t){return r.a.createElement("a",{href:"https://plugins.jetbrains.com/plugin/".concat(t.id)},e)}},{title:"Repository",dataIndex:"repository",render:function(e){return r.a.createElement("a",{href:"https://github.com/".concat(e)},e)}},{title:"Downloads",dataIndex:"downloads",render:function(e){return"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g," ")},align:"right"},{title:"Last updated",dataIndex:"lastUpdateDate",render:function(e){return r.a.createElement(f.a,{date:e})}},{title:"Extensions",dataIndex:"extensions",render:function(e){return r.a.createElement(d.a,null,Object(b.keys)(e).length)},align:"center"},{title:"Tags",dataIndex:"tags",render:function(e){return e.map((function(e){return r.a.createElement(d.a,{key:e.id},e.name)}))},filters:Object(b.sortBy)(Object(b.uniqBy)(Object(b.flatten)(g.map((function(e){return e.tags}))).map((function(e){var t=e.name,n=e.id;return{text:t,value:"".concat(n)}})),"text"),"text"),onFilter:function(e,t){return void 0!==t.tags.find((function(t){return t.id===+e}))}}]),dataSource:y,expandable:{expandedRowRender:function(e){return r.a.createElement(j,{plugin:e})},rowExpandable:function(e){return!Object(b.isEmpty)(e.extensions)}},loading:Object(b.isEmpty)(n),rowKey:"id",title:function(){return r.a.createElement(O,{allowClear:!0,mode:"multiple",placeholder:"Please select extensions",size:"large",onChange:E},x.map((function(e){return r.a.createElement(u.a.Option,{key:e,value:e},e)})))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[114,1,2]]]);
//# sourceMappingURL=main.5be6c943.chunk.js.map