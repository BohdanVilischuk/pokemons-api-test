(this.webpackJsonppokego=this.webpackJsonppokego||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(16),i=n.n(c),l=(n(23),n(18)),o=n(3),r=(n(24),n(0)),m=function(){return Object(r.jsx)("h1",{className:"title",children:"Pokedex"})},j="https://pokeapi.co/api/v2/pokemon/",d=n(17),u=n.n(d),p=function(e){var t=e.src,n=e.alt,s=e.className;return Object(r.jsx)("picture",{className:s,children:Object(r.jsx)("img",{src:t,alt:n})})},b=function(e){var t=e.type;return Object(r.jsx)("div",{className:"pokemon-type ".concat(t),children:t})},v=function(e){var t=e.name,n=e.image,s=e.type,a=e.id,c=e.stats,i=e.pokemonHandler,l=e.weight,o=e.moves;return Object(r.jsxs)("div",{className:"pokemon-box",onClick:function(){return i(t,a,c,l,o,n,s)},children:[Object(r.jsx)(p,{src:n,alt:"pokemon"}),Object(r.jsx)("div",{className:"box-content",children:Object(r.jsx)("h4",{children:t})}),Object(r.jsx)("div",{className:"pokemon-types",children:s.map((function(e,t){return Object(r.jsx)(b,{type:e},t)}))})]})},h=function(e){var t=e.stats,n=e.name,s=e.id,a=e.weight,c=e.moves,i=e.type,l=e.image,o=e.closeBox;return Object(r.jsx)("div",{className:n?"pokemon-preview":"preview-hidden",children:Object(r.jsxs)("div",{className:"single-pokemon__wrapper",children:[Object(r.jsx)("div",{onClick:o,className:"close"}),Object(r.jsx)(p,{src:l,alt:"single-pokemon",className:"single-pokemon__image"}),Object(r.jsxs)("div",{className:"single-pokemon__header",children:[Object(r.jsx)("h4",{className:"single-pokemon__title",children:n}),Object(r.jsxs)("span",{className:"single-pokemon__id",children:["##",s]})]}),Object(r.jsxs)("div",{className:"single-pokemon__types",children:[Object(r.jsx)("h4",{children:"Types:"}),i.map((function(e,t){return Object(r.jsx)(b,{type:e},2.1*t)}))]}),t&&Object(r.jsxs)("div",{className:"single-pokemon__content",children:[Object(r.jsxs)("div",{className:"single-pokemon__ability-group",children:[Object(r.jsx)("div",{className:"single-pokemon__ability-name",children:t&&t.name.map((function(e,t){return Object(r.jsxs)("div",{className:"single-pokemon__item",children:[e,":"]},2.223*t)}))}),Object(r.jsx)("div",{className:"single-pokemon__ability-value",children:t&&t.value.map((function(e,t){return Object(r.jsx)("div",{className:"single-pokemon__item",children:e},1.256*t)}))})]}),Object(r.jsxs)("div",{className:"single-pokemon__ability-group",children:[Object(r.jsx)("div",{className:"single-pokemon__item",children:"Weight:"}),Object(r.jsx)("div",{className:"single-pokemon__item",children:a})]}),Object(r.jsxs)("div",{className:"single-pokemon__ability-group",children:[Object(r.jsx)("div",{className:"single-pokemon__item",children:"Total moves:"}),Object(r.jsx)("div",{className:"single-pokemon__item",children:c.length})]})]})]})})},O=function(e){var t=e.select,n=e.selects,s=e.handleChange;return Object(r.jsx)("div",{className:"pokemon-filter",children:Object(r.jsx)("select",{onChange:s,value:t.value,children:n&&n.map((function(e,t){var n=e.label,s=e.value;return Object(r.jsx)("option",{value:s,children:n},t)}))})})},g=function(e){var t=e.loadMore;return Object(r.jsx)("div",{className:"load-more",onClick:t,children:"Load more"})},x=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(null),i=Object(o.a)(c,2),d=i[0],p=i[1],b=Object(s.useState)({value:"all"}),x=Object(o.a)(b,2),f=x[0],k=x[1],_=Object(s.useState)(12),N=Object(o.a)(_,2),y=N[0],w=N[1],C=Object(s.useState)(!0),S=Object(o.a)(C,2),B=S[0],F=S[1],P=[].concat([{id:0,label:"all",value:"all"}],Object(l.a)(n.map((function(e,t){var n=e.type;return{id:t+1,label:n[0],value:n[0]}})).filter((function(e,t,n){return t===n.findIndex((function(t){return t.value===e.value&&t.label===e.label}))}))));Object(s.useEffect)((function(){!function(e,t){for(var n=[],s=1;s<=e;s++){var a=j+s;n.push(u.a.get(a).then((function(e){return e.data})))}Promise.all(n).then((function(e){var n=e.map((function(e){return{name:e.name,image:e.sprites.front_default,type:e.types.map((function(e){return e.type.name})).join(" ").split(" "),id:e.id,weight:e.weight,height:e.height,moves:e.moves,stats:{name:e.stats.map((function(e){return e.stat.name})),value:e.stats.map((function(e){return e.base_stat}))}}}));t(n)}))}(y,a)}),[y]);var T=function(e,t,n,s,a,c,i){F(!0),p({name:e,id:t,stats:n,weight:s,moves:a,image:c,type:i})},I="all"===f.value?n:n.filter((function(e){return e.type[0].includes(f.value)}));return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{}),Object(r.jsx)(O,{selects:P,select:f,handleChange:function(e){k({value:e.target.value})}}),Object(r.jsxs)("div",{className:"pokemons",children:[Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("div",{className:"all-pokemons",children:I&&I.map((function(e,t){var n=e.type,s=e.image,a=e.name,c=e.weight,i=e.id,l=e.stats,o=e.moves;return Object(r.jsx)(v,{pokemonHandler:T,image:s,type:n,name:a,weight:c,id:i,moves:o,stats:l},t)}))}),Object(r.jsx)(g,{loadMore:function(){w((function(e){return e+12}))}})]}),Object(r.jsx)("div",{className:"pokemon-preview__container",children:d&&B&&Object(r.jsx)(h,{closeBox:function(){F(!1)},weight:d.weight,name:d.name,id:d.id,moves:d.moves,stats:d.stats,image:d.image,type:d.type})})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.ff5762d4.chunk.js.map