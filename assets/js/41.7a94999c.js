(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{577:function(t,e,i){},634:function(t,e,i){"use strict";i(577)},678:function(t,e,i){"use strict";i.r(e);i(117),i(21),i(78),i(280),i(40),i(9),i(113),i(282);var n=i(533),r=i(39),a=i.n(r),o={name:"tm-sidebar-tree",props:["value","title","tree","level"],data:function(){return{show:null}},mounted:function(){Object(n.find)(this.value,["path",this.$page.path])&&this.$emit("active",this.title)},watch:{$route:function(t,e){Object(n.find)(this.value,["key",t.name])&&this.revealParent(this.title)}},methods:{hide:function(t){var e=this.indexFile(t),i=t.frontmatter&&!1===t.frontmatter.order;return e&&e.frontmatter&&e.frontmatter.parent&&!1===e.frontmatter.parent.order||i},iconCollapsed:function(t){return!(!t.directory||this.iconExpanded(t))||!t.path&&this.show!=t.title&&(t.children||t.directory)},iconExpanded:function(t){return this.show==t.title&&!t.key},iconActive:function(t){return""!==this.$page.path&&(t.path==this.$page.path||t.key==this.$page.key)},outboundLink:function(t){return/^[a-z]+:/i.test(t)},isInternalLink:function(t){return t.path&&!t.directory&&!t.static&&!this.outboundLink(t.path)},isOutboundLink:function(t){return t.path&&this.outboundLink(t.path)||t.static},handleEnter:function(t){this.revealChild(t.title)},componentName:function(t){return this.isInternalLink(t)?"router-link":(this.isOutboundLink(t),"a")},indexFile:function(t){return!!t.children&&Object(n.find)(t.children,(function(t){var e=t.relativePath;return!!e&&(e.toLowerCase().match(/index.md$/i)||e.toLowerCase().match(/readme.md$/i))}))},setHeight:function(t){t.style.setProperty("--max-height",t.scrollHeight+"px")},titleFormatted:function(t){var e=new a.a({html:!0,linkify:!0});return"<div>".concat(e.renderInline(t),"</div>")},titleText:function(t){var e=this.indexFile(t);return t.frontmatter?t.frontmatter.title||t.title:e?e.frontmatter&&e.frontmatter.parent&&e.frontmatter.parent.title?e.frontmatter.parent.title:e.title.match(/readme\.md/i)||e.title.match(/index\.md/i)?t.title:e.title:t.title},revealChild:function(t){this.show=this.show==t?null:t},revealParent:function(t){this.show=t,this.$emit("active",this.title)},directoryChildren:function(t){if(!0===t.directory){var e,i=t.path&&t.path.split("/").filter((function(t){return""!=t}));return(null===(e=i=i.reduce((function(t,e){return Object(n.find)(t.children||t,["title",e])}),this.tree))||void 0===e?void 0:e.children)||[]}return[]},onClick:function(t){this.outboundLink(t.path)||this.revealChild(t.title),this.isInternalLink(t)&&void 0!==this.$gtm&&this.$gtm.trackEvent({category:"navigation",action:t.path,label:t.path})}}},l=(i(634),i(0)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.value,(function(e){return i("div",[t.hide(e)?t._e():i(t.componentName(e),{tag:"component",staticClass:"item",class:[t.level>0&&"item__child",{item__dir:!e.path},e.directory&&"item__directory"],style:{"--vline":t.level<1?"hidden":"visible","--vline-color":!t.iconActive(e)&&!t.iconExpanded(e)||t.iconExpanded(e)?"rgba(0,0,0,0.1)":"var(--color-primary)"},attrs:{to:e.path,target:t.outboundLink(e.path)&&"_blank",rel:t.outboundLink(e.path)&&"noreferrer noopener",href:t.outboundLink(e.path)||e.static?e.path:"#",tag:"a",role:!e.path&&"button"},on:{keydown:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.handleEnter(e)},click:function(i){return t.onClick(e)}},nativeOn:{click:function(i){return t.onClick(e)}}},[t.level<1&&e.directory?i("icon-arrow",{staticClass:"item__icon",class:t.iconCollapsed(e)?"item__icon__collapsed":"item__icon__expanded",attrs:{type:"bottom",fill:t.iconCollapsed(e)?"var(--semi-transparent-color-3)":"var(--color-text-strong)"}}):t._e(),i("div",{class:{item__selected:t.iconActive(e)||t.iconExpanded(e),item__selected__dir:t.iconCollapsed(e),item__selected__alt:t.iconExpanded(e),"tm-link tm-link-external item__external":e.external,item__divider:e.frontmatter&&e.frontmatter.divider},style:{"padding-left":32*t.level+"px","margin-right":t.level>0?"32px":"0px"},domProps:{innerHTML:t._s(t.titleFormatted(t.titleText(e)))}}),t.level>0&&e.frontmatter&&e.frontmatter.tag&&t.$themeConfig.tags&&t.$themeConfig.tags[e.frontmatter.tag]?i("div",{staticClass:"item__child__tag",style:{"--tag-background-color":t.$themeConfig.tags[e.frontmatter.tag].color},attrs:{"tag-content":t.$themeConfig.tags[e.frontmatter.tag].label}}):t._e()],1),(e.children||t.directoryChildren(e),i("div",[i("transition",{attrs:{name:"reveal"},on:{enter:t.setHeight,leave:t.setHeight}},[t.hide(e)?t._e():i("tm-sidebar-tree",{directives:[{name:"show",rawName:"v-show",value:e.title==t.show,expression:"item.title == show"}],attrs:{level:t.level+1,value:e.children||t.directoryChildren(e)||[],title:e.title},on:{active:function(e){return t.revealParent(e)}}})],1)],1))],1)})),0)}),[],!1,null,"687e2a58",null);e.default=c.exports}}]);