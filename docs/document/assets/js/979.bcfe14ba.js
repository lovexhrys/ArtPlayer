"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[979,514],{6979:function(e,a,n){var r=n(7294),c=n(4184),t=n.n(c),s=n(6775),l=n(2263),u=n(8084);a.Z=function(e){var a=(0,r.useRef)(!1),c=(0,r.useRef)(null),h=(0,s.k6)(),o=(0,l.Z)().siteConfig,i=(void 0===o?{}:o).baseUrl,d=(0,u.usePluginData)("docusaurus-lunr-search"),f=function(){a.current||(Promise.all([fetch(""+i+d.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+i+d.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([n.e(878),n.e(245)]).then(n.bind(n,4130)),Promise.all([n.e(532),n.e(343)]).then(n.bind(n,3343))]).then((function(e){var a=e[0],n=e[1],r=e[2].default;0!==a.length&&function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var r=i+n.url;document.createElement("a").href=r,h.push(r)}})}(a,n,r)})),a.current=!0)},p=(0,r.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:t()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:t()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:p,onBlur:p,ref:c}))}}}]);