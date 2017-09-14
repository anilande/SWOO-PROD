webpackJsonp([6],{"./app/components/Faq/Faq.scss":function(e,t,n){var o=n('./node_modules/css-loader/index.js?modules&importLoaders=1&sourceMap!./node_modules/sass-loader/lib/loader.js?{"includePaths":["./node_modules","./node_modules/grommet/node_modules"]}!./node_modules/sass-resources-loader/lib/loader.js?{"resources":["./internals/global_scss/vars.scss","./internals/global_scss/mixins.scss"]}!./app/components/Faq/Faq.scss');"string"==typeof o&&(o=[[e.i,o,""]]);n("./node_modules/style-loader/addStyles.js")(o,{});o.locals&&(e.exports=o.locals)},"./app/components/Faq/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.intl.formatMessage,o=n("./app/components/Faq/Faq.scss"),r={title:t(j.default.metaTitle),desc:t(j.default.metaDescription)};return a(u.default,{className:o.faq,flex:!0,margin:"medium",pad:"small"},void 0,a(E.default,{meta:r}),a(d.default,{align:"start",tag:"h2"},void 0,s.default.createElement(_.FormattedMessage,j.default.header)),a(f.default,{},void 0,a(y.default,{heading:t(j.default.content1),icon:A},void 0,a(b.default,{},void 0,s.default.createElement(_.FormattedMessage,j.default.content1a))),a(y.default,{heading:t(j.default.content2)},void 0,a(b.default,{},void 0,s.default.createElement(_.FormattedMessage,j.default.content2a))),a(y.default,{heading:t(j.default.content3)},void 0,a(b.default,{},void 0,s.default.createElement(_.FormattedMessage,j.default.content3a),w,s.default.createElement(_.FormattedMessage,j.default.content3b),P,s.default.createElement(_.FormattedMessage,j.default.content3c),S,s.default.createElement(_.FormattedMessage,j.default.content3d))),a(y.default,{heading:t(j.default.content4)},void 0,a(b.default,{},void 0,s.default.createElement(_.FormattedMessage,j.default.content4a))),a(y.default,{heading:t(j.default.content5)},void 0,a(b.default,{},void 0,s.default.createElement(_.FormattedMessage,j.default.content5a))),a(y.default,{heading:t(j.default.content6)},void 0,a(b.default,{},void 0,s.default.createElement(_.FormattedMessage,j.default.content6a))),a(y.default,{heading:t(j.default.content7)},void 0,a(b.default,{},void 0,s.default.createElement(_.FormattedMessage,j.default.content7a)))))}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),i=n("./node_modules/react/react.js"),s=o(i),l=n("./node_modules/grommet/components/Box.js"),u=o(l),c=n("./node_modules/grommet/components/Heading.js"),d=o(c),p=n("./node_modules/grommet/components/Accordion.js"),f=o(p),m=n("./node_modules/grommet/components/AccordionPanel.js"),y=o(m),h=n("./node_modules/grommet/components/Paragraph.js"),b=o(h),v=n("./node_modules/grommet/components/icons/base/Down.js"),g=o(v),_=n("./node_modules/react-intl/lib/index.es.js"),T=n("./app/components/Faq/messages.js"),j=o(T),O=n("./app/components/MetaTag/index.js"),E=o(O),A=a(g.default,{}),w=a("br",{}),P=a("br",{}),S=a("br",{});r.contextTypes={intl:s.default.PropTypes.object.isRequired},t.default=(0,_.injectIntl)(r)},"./app/components/Faq/messages.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/react-intl/lib/index.es.js");t.default=(0,o.defineMessages)({metaTitle:{id:"app.components.Privacypolicy.header",defaultMessage:"Swoo Frequently Asked Questions"},metaDescription:{id:"app.components.Privacypolicy.header",defaultMessage:"Looking for something? Browse through FAQs about Swoo to know more about us."},header:{id:"app.components.Privacypolicy.header",defaultMessage:"FAQ"},content1:{id:"app.components.Privacypolicy.content1",defaultMessage:"What is SWOO?"},content1a:{id:"app.components.Privacypolicy.content1a",defaultMessage:"SWOO is the easiest way to broadcast live video from your phone, enabling you to share what’s happening around you — with the whole world or just a few friends — as it happens."},content2:{id:"app.components.Privacypolicy.content2",defaultMessage:"What is a broadcast?"},content2a:{id:"app.components.Privacypolicy.content2a",defaultMessage:"A Swoo broadcast is a live video stream that directly engages viewers. With chat and hearts, they are able to interact in real time. Broadcasts are either public and available on everyone’s global feed (the default setting), or private – which requires the individual selection of each viewer."},content3:{id:"app.components.Privacypolicy.content3",defaultMessage:"How can I start a live broadcast?"},content3a:{id:"app.components.Privacypolicy.content3a",defaultMessage:"1. Once you have created an account, open the Broadcast Tab by tapping the Camera icon at the bottom center of the app."},content3b:{id:"app.components.Privacypolicy.content3b",defaultMessage:"2. Enter a title that describes your broadcast."},content3c:{id:"app.components.Privacypolicy.content3c",defaultMessage:"3. You’ll have the option to manage your location settings, make your broadcast private and/or Tweet your live stream via the three icons above the ‘Start Broadcast’ button."},content3d:{id:"app.components.Privacypolicy.content3d",defaultMessage:"4. Tap ‘Start Broadcast.’"},content4:{id:"app.components.Privacypolicy.content4",defaultMessage:"Are all broadcasts public?"},content4a:{id:"app.components.Privacypolicy.content4a",defaultMessage:"A Swoo broadcast is a live video stream that directly engages viewers. With chat and hearts, they are able to interact in real time. Broadcasts are either public and available on everyone’s global feed (the default setting), or private – which requires the individual selection of each viewer."},content5:{id:"app.components.Privacypolicy.content5",defaultMessage:"How do I make my broadcast private?"},content5a:{id:"app.components.Privacypolicy.content5a",defaultMessage:"A Swoo broadcast is a live video stream that directly engages viewers. With chat and hearts,they are able to interact in real time. Broadcasts are either public and available on everyone’s global feed (the default setting), or private – which requires the individual selection of each viewer."},content6:{id:"app.components.Privacypolicy.content6",defaultMessage:"What is SWOO`s Discovery Tab?"},content6a:{id:"app.components.Privacypolicy.content6a",defaultMessage:"A Swoo broadcast is a live video stream that directly engages viewers. With chat and hearts,they are able to interact in real time. Broadcasts are either public and available on everyone’s global feed (the default setting), or private – which requires the individual selection of each viewer."},content7:{id:"app.components.Privacypolicy.content7",defaultMessage:"How do I find people on SWOO?"},content7a:{id:"app.components.Privacypolicy.content7a",defaultMessage:"A Swoo broadcast is a live video stream that directly engages viewers. With chat and hearts,they are able to interact in real time. Broadcasts are either public and available on everyone’s global feed (the default setting), or private – which requires the individual selection of each viewer."}})},"./app/components/MetaTag/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t={title:"title",desc:"desc",url:document.location.href,site:document.location.host,image:document.location.host+"/favicon.ico"},n=Object.assign(t,e.meta);return a(u.default,{title:n.title,meta:[{name:"title",content:n.title},{name:"description",content:n.desc},{property:"og:title",content:n.title},{property:"og:description",content:n.desc},{property:"og:type",content:"website"},{property:"og:url",content:n.url},{property:"og:image",content:n.image},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:n.site},{name:"twitter:url",content:n.url},{name:"twitter:title",content:n.title},{name:"twitter:description",content:n.desc},{name:"twitter:image",content:n.image},{name:"al:web:url",content:n.site},{name:"al:ios:app_name",content:"Swoo"},{name:"al:ios:app_store_id",content:"1201718019"},{name:"al:ios:url",content:n.site},{name:"al:android:app_name",content:"Swoo"},{name:"al:android:package",content:"com.kryptolabs.android.speakerswire"},{name:"al:android:url",content:n.site}]})}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var s in a)void 0===n[s]&&(n[s]=a[s]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var l=Array(i),u=0;u<i;u++)l[u]=arguments[u+3];n.children=l}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),i=n("./node_modules/react/react.js"),s=o(i),l=n("./node_modules/react-helmet/lib/Helmet.js"),u=o(l),c=n("./node_modules/react-intl/lib/index.es.js");r.contextTypes={intl:s.default.PropTypes.object.isRequired},t.default=(0,c.injectIntl)(r)},'./node_modules/css-loader/index.js?modules&importLoaders=1&sourceMap!./node_modules/sass-loader/lib/loader.js?{"includePaths":["./node_modules","./node_modules/grommet/node_modules"]}!./node_modules/sass-resources-loader/lib/loader.js?{"resources":["./internals/global_scss/vars.scss","./internals/global_scss/mixins.scss"]}!./app/components/Faq/Faq.scss':function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.i,"._3UUdQR9e6ZXceDP5nq0AHk{max-width:1256px;width:80%;margin:20px auto}._3UUdQR9e6ZXceDP5nq0AHk p{max-width:1256px;padding:0 5px}._3UUdQR9e6ZXceDP5nq0AHk li{border-bottom:1px solid #eee}._3UUdQR9e6ZXceDP5nq0AHk li svg{stroke:#333}","",{version:3,sources:["/./app/components/Faq/Faq.scss"],names:[],mappings:"AAAA,yBAAK,iBAAiB,UAAU,gBAAgB,CAAC,2BAAO,iBAAiB,aAAa,CAAC,4BAAQ,4BAA4B,CAAC,gCAAY,WAAW,CAAC",file:"Faq.scss",sourcesContent:[".faq{max-width:1256px;width:80%;margin:20px auto}.faq p{max-width:1256px;padding:0 5px}.faq li{border-bottom:1px solid #eee}.faq li svg{stroke:#333}\n"],sourceRoot:"webpack://"}]),t.locals={faq:"_3UUdQR9e6ZXceDP5nq0AHk"}},"./node_modules/deep-equal/index.js":function(e,t,n){function o(e){return null===e||void 0===e}function r(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function a(e,t,n){var a,c;if(o(e)||o(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=i.call(e),t=i.call(t),u(e,t,n));if(r(e)){if(!r(t))return!1;if(e.length!==t.length)return!1;for(a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}try{var d=s(e),p=s(t)}catch(e){return!1}if(d.length!=p.length)return!1;for(d.sort(),p.sort(),a=d.length-1;a>=0;a--)if(d[a]!=p[a])return!1;for(a=d.length-1;a>=0;a--)if(c=d[a],!u(e[c],t[c],n))return!1;return typeof e==typeof t}var i=Array.prototype.slice,s=n("./node_modules/deep-equal/lib/keys.js"),l=n("./node_modules/deep-equal/lib/is_arguments.js"),u=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:a(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var r="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=r?n:o,t.supported=n,t.unsupported=o},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/grommet/components/Accordion.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/react/react.js"),d=o(c),p=n("./node_modules/prop-types/index.js"),f=o(p),m=n("./node_modules/classnames/index.js"),y=o(m),h=n("./node_modules/grommet/components/List.js"),b=o(h),v=n("./node_modules/grommet/utils/CSSClassnames.js"),g=o(v),_=n("./node_modules/grommet/utils/Props.js"),T=o(_),j=g.default.ACCORDION,O=function(e){function t(e,n){a(this,t);var o=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));o._onPanelChange=o._onPanelChange.bind(o);var r=void 0;return r="number"==typeof o.props.active?[o.props.active]:o.props.active||[],o.state={active:r},o}return s(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){e.active!==this.props.active&&this.setState({active:e.active||[]})}},{key:"_onPanelChange",value:function(e){var t=[].concat(r(this.state.active)),n=this.props,o=n.onActive,a=n.openMulti,i=t.indexOf(e);i>-1?t.splice(i,1):a?t.push(e):t=[e],this.setState({active:t},function(){o&&o(a?t:t[0])})}},{key:"render",value:function(){var e=this,n=this.props,o=n.animate,r=n.className,a=n.children,i=(0,y.default)(j,r),s=d.default.Children.map(a,function(t,n){return d.default.cloneElement(t,{active:e.state.active.indexOf(n)>-1,onChange:function(){e._onPanelChange(n)},animate:o})}),u=T.default.omit(this.props,Object.keys(t.propTypes));return d.default.createElement(b.default,l({role:"tablist",className:i},u),s)}}]),t}(c.Component);O.displayName="Accordion",t.default=O,O.propTypes={active:f.default.oneOfType([f.default.number,f.default.arrayOf(f.default.number)]),animate:f.default.bool,onActive:f.default.func,openMulti:f.default.bool},O.defaultProps={openMulti:!1,animate:!0},e.exports=t.default},"./node_modules/grommet/components/AccordionPanel.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("./node_modules/react/react.js"),c=o(u),d=n("./node_modules/prop-types/index.js"),p=o(d),f=n("./node_modules/classnames/index.js"),m=o(f),y=n("./node_modules/grommet/components/Header.js"),h=o(y),b=n("./node_modules/grommet/components/Button.js"),v=o(b),g=n("./node_modules/grommet/components/ListItem.js"),_=o(g),T=n("./node_modules/grommet/components/icons/base/CaretNext.js"),j=o(T),O=n("./node_modules/grommet/components/Collapsible.js"),E=o(O),A=n("./node_modules/grommet/utils/CSSClassnames.js"),w=o(A),P=n("./node_modules/grommet/utils/Intl.js"),S=o(P),M=w.default.ACCORDION_PANEL,C=function(e){function t(){a(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e._onClickTab=e._onClickTab.bind(e),e}return s(t,e),l(t,[{key:"_onClickTab",value:function(e){var t=this.props.onChange;e&&e.preventDefault(),t()}},{key:"render",value:function(){var e=this.props,t=e.a11yTitle,n=e.active,o=e.animate,a=e.className,i=e.children,s=e.heading,l=e.pad,u=this.context.intl,d=(0,m.default)(M,a,r({},M+"--active",n)),p=S.default.getMessage(u,"Tab Contents",{activeTitle:t||s});return c.default.createElement("div",null,c.default.createElement(_.default,{className:d,direction:"column",pad:"none","aria-expanded":n,"aria-selected":n,role:"tab","aria-label":t||s},c.default.createElement(v.default,{fill:!0,plain:!0,onClick:this._onClickTab},c.default.createElement(h.default,{pad:l,direction:"row",justify:"between",align:"center",responsive:!1,className:M+"__header"},s,c.default.createElement(j.default,{className:M+"__control"})))),c.default.createElement(E.default,{"aria-label":p,role:"tabpanel",active:n,animate:o,pad:l},i))}}]),t}(u.Component);C.displayName="AccordionPanel",t.default=C,C.propTypes={a11yTitle:p.default.string,active:p.default.bool,animate:p.default.bool,heading:p.default.node.isRequired,onChange:p.default.func,pad:h.default.propTypes.pad},C.contextTypes={intl:p.default.object},e.exports=t.default},"./node_modules/grommet/components/Collapsible.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n("./node_modules/react/react.js"),c=o(u),d=n("./node_modules/prop-types/index.js"),p=o(d),f=n("./node_modules/react-dom/index.js"),m=o(f),y=n("./node_modules/react-transition-group/index.js"),h=n("./node_modules/classnames/index.js"),b=o(h),v=n("./node_modules/grommet/components/Box.js"),g=o(v),_=n("./node_modules/grommet/utils/CSSClassnames.js"),T=o(_),j=n("./node_modules/grommet/utils/Props.js"),O=o(j),E=T.default.COLLAPSIBLE,A=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"componentWillEnter",value:function(e){var t=m.default.findDOMNode(this);if(t){var n=t.clientHeight;t.classList.remove("animate"),t.style.height=0,setTimeout(function(){t.classList.add("animate"),t.style.height=n+"px",setTimeout(e,1e3*parseFloat(getComputedStyle(t).transitionDuration))})}}},{key:"componentDidEnter",value:function(){var e=m.default.findDOMNode(this);e.classList.remove("animate"),e.style.height=""}},{key:"componentWillLeave",value:function(e){var t=m.default.findDOMNode(this);if(t){var n=t.clientHeight;t.style.height=n+"px",setTimeout(function(){t.classList.add("animate"),t.style.height=0,setTimeout(e,1e3*parseFloat(getComputedStyle(t).transitionDuration))})}}},{key:"render",value:function(){var e=(0,b.default)(E,this.props.className);return c.default.createElement(g.default,s({},this.props,{className:e}))}}]),t}(u.Component);A.displayName="Collapse";var w=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.animate?y.TransitionGroup:g.default,n=O.default.omit(this.props,Object.keys(t.propTypes));return c.default.createElement(e,{className:E+"__wrapper"},this.props.active&&c.default.createElement(A,n))}}]),t}(u.Component);w.displayName="Collapsible",w.propTypes={active:p.default.bool,animate:p.default.bool},w.defaultProps={animate:!0},t.default=w,e.exports=t.default},"./node_modules/grommet/components/Paragraph.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n("./node_modules/react/react.js"),p=o(d),f=n("./node_modules/prop-types/index.js"),m=o(f),y=n("./node_modules/classnames/index.js"),h=o(y),b=n("./node_modules/grommet/utils/CSSClassnames.js"),v=o(b),g=v.default.PARAGRAPH,_=function(e){function t(){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){var e,t=this.props,n=t.align,o=t.children,i=t.className,s=t.margin,l=t.size,c=t.width,d=a(t,["align","children","className","margin","size","width"]),f=(0,h.default)(g,(e={},r(e,g+"--"+l,l),r(e,g+"--align-"+n,n),r(e,g+"--margin-"+s,s),r(e,g+"--width-"+c,c),e),i);return p.default.createElement("p",u({},d,{className:f}),o)}}]),t}(d.Component);_.displayName="Paragraph",t.default=_,_.propTypes={align:m.default.oneOf(["start","center","end"]),margin:m.default.oneOf(["none","small","medium","large"]),size:m.default.oneOf(["small","medium","large","xlarge"]),width:m.default.oneOf(["small","medium","large"])},e.exports=t.default},"./node_modules/grommet/components/icons/base/CaretNext.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n("./node_modules/react/react.js"),d=o(c),p=n("./node_modules/prop-types/index.js"),f=o(p),m=n("./node_modules/classnames/index.js"),y=o(m),h=n("./node_modules/grommet/utils/CSSClassnames.js"),b=o(h),v=n("./node_modules/grommet/utils/Intl.js"),g=o(v),_=n("./node_modules/grommet/utils/Props.js"),T=o(_),j=b.default.CONTROL_ICON,O=b.default.COLOR_INDEX,E=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),u(t,[{key:"render",value:function(){var e,n=this.props,o=n.className,a=n.colorIndex,i=this.props,s=i.a11yTitle,u=i.size,c=i.responsive,p=this.context.intl,f=(0,y.default)(j,j+"-caret-next",o,(e={},r(e,j+"--"+u,u),r(e,j+"--responsive",c),r(e,O+"-"+a,a),e));s=s||g.default.getMessage(p,"caret-next");var m=T.default.omit(this.props,Object.keys(t.propTypes));return d.default.createElement("svg",l({},m,{version:"1.1",viewBox:"0 0 24 24",width:"24px",height:"24px",role:"img",className:f,"aria-label":s}),d.default.createElement("polygon",{fill:"none",stroke:"#000",strokeWidth:"2",points:"6 2 18 12 6 22"}))}}]),t}(c.Component);E.displayName="Icon",t.default=E,E.contextTypes={intl:f.default.object},E.defaultProps={responsive:!0},E.displayName="CaretNext",E.icon=!0,E.propTypes={a11yTitle:f.default.string,colorIndex:f.default.string,size:f.default.oneOf(["xsmall","small","medium","large","xlarge","huge"]),responsive:f.default.bool},e.exports=t.default},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.__esModule=!0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n("./node_modules/react/react.js"),d=o(c),p=n("./node_modules/react-side-effect/lib/index.js"),f=o(p),m=n("./node_modules/deep-equal/index.js"),y=o(m),h=n("./node_modules/object-assign/index.js"),b=o(h),v=n("./node_modules/react-helmet/lib/HelmetConstants.js"),g=n("./node_modules/react-helmet/lib/PlainComponent.js"),_=o(g),T=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},j=function(e,t){for(var n=e.length-1;n>=0;n--){var o=e[n];if(o[t])return o[t]}return null},O=function(e){var t=j(e,"title"),n=j(e,"titleTemplate");if(n&&t)return n.replace(/%s/g,function(){return t});var o=j(e,"defaultTitle");return t||o||""},E=function(e){return j(e,"onChangeClientState")||function(){}},A=function(e){return e.filter(function(e){return void 0!==e[v.TAG_NAMES.HTML]}).map(function(e){return e[v.TAG_NAMES.HTML]}).reduce(function(e,t){return u({},e,t)},{})},w=function(e,t){return t.filter(function(e){return void 0!==e[v.TAG_NAMES.BASE]}).map(function(e){return e[v.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var o=Object.keys(n),r=0;r<o.length;r++){var a=o[r],i=a.toLowerCase();if(-1!==e.indexOf(i))return t.concat(n)}return t},[])},P=function(e,t,n){var o={};return n.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var r={};n.filter(function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],l=s.toLowerCase();-1===t.indexOf(l)||n===v.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===v.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==v.TAG_PROPERTIES.INNER_HTML&&s!==v.TAG_PROPERTIES.CSS_TEXT||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][u]&&(r[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var a=Object.keys(r),i=0;i<a.length;i++){var s=a[i],l=(0,b.default)({},o[s],r[s]);o[s]=l}return e},[]).reverse()},S=function(e){document.title=e||document.title},M=function(e){for(var t=document.getElementsByTagName("html")[0],n=t.getAttribute("data-react-helmet"),o=n?n.split(","):[],r=[].concat(o),a=Object.keys(e),i=0;i<a.length;i++){var s=a[i],l=e[s]||"";t.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=r.indexOf(s);-1!==u&&r.splice(u,1)}for(var c=r.length-1;c>=0;c--)t.removeAttribute(r[c]);o.length===r.length?t.removeAttribute("data-react-helmet"):t.setAttribute("data-react-helmet",o.join(","))},C=function(e,t){var n=document.head||document.querySelector("head"),o=n.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(o),a=[],i=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var o in t)if(t.hasOwnProperty(o))if("innerHTML"===o)n.innerHTML=t.innerHTML;else if("cssText"===o)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[o]?"":t[o];n.setAttribute(o,s)}n.setAttribute("data-react-helmet","true"),r.some(function(e,t){return i=t,n.isEqualNode(e)})?r.splice(i,1):a.push(n)}),r.forEach(function(e){return e.parentNode.removeChild(e)}),a.forEach(function(e){return n.appendChild(e)}),{oldTags:r,newTags:a}},x=function(e){for(var t=Object.keys(e),n="",o=0;o<t.length;o++){var r=t[o];n+=(void 0!==e[r]?r+'="'+e[r]+'"':""+r)+" "}return n.trim()},N=function(e,t){return"<"+e+' data-react-helmet="true">'+T(t)+"</"+e+">"},R=function(e,t){return t.map(function(t){var n=Object.keys(t).filter(function(e){return!("innerHTML"===e||"cssText"===e)}).map(function(e){return void 0===t[e]?e:e+'="'+T(t[e])+'"'}).join(" ").trim(),o=t.innerHTML||t.cssText||"",r=-1===[v.TAG_NAMES.NOSCRIPT,v.TAG_NAMES.SCRIPT,v.TAG_NAMES.STYLE].indexOf(e);return"<"+e+' data-react-helmet="true" '+n+(r?"/>":">"+o+"</"+e+">")}).join("")},k=function(e,t){return[d.default.createElement(v.TAG_NAMES.TITLE,s({key:t},"data-react-helmet",!0),t)]},I=function(e,t){return t.map(function(t,n){var o=s({key:n},"data-react-helmet",!0);return Object.keys(t).forEach(function(e){var n=v.REACT_TAG_MAP[e]||e;if("innerHTML"===n||"cssText"===n){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),d.default.createElement(e,o)})},L=function(e,t){switch(e){case v.TAG_NAMES.TITLE:return{toComponent:function(){return k(0,t)},toString:function(){return N(e,t)}};case v.TAG_NAMES.HTML:return{toComponent:function(){return t},toString:function(){return x(t)}};default:return{toComponent:function(){return I(e,t)},toString:function(){return R(e,t)}}}},G=function(e){var t=e.htmlAttributes,n=e.title,o=e.baseTag,r=e.metaTags,a=e.linkTags,i=e.scriptTags,s=e.noscriptTags,l=e.styleTags;return{htmlAttributes:L(v.TAG_NAMES.HTML,t),title:L(v.TAG_NAMES.TITLE,n),base:L(v.TAG_NAMES.BASE,o),meta:L(v.TAG_NAMES.META,r),link:L(v.TAG_NAMES.LINK,a),script:L(v.TAG_NAMES.SCRIPT,i),noscript:L(v.TAG_NAMES.NOSCRIPT,s),style:L(v.TAG_NAMES.STYLE,l)}},q=function(e){return{htmlAttributes:A(e),title:O(e),baseTag:w([v.TAG_PROPERTIES.HREF],e),metaTags:P(v.TAG_NAMES.META,[v.TAG_PROPERTIES.NAME,v.TAG_PROPERTIES.CHARSET,v.TAG_PROPERTIES.HTTPEQUIV,v.TAG_PROPERTIES.PROPERTY],e),linkTags:P(v.TAG_NAMES.LINK,[v.TAG_PROPERTIES.REL,v.TAG_PROPERTIES.HREF],e),scriptTags:P(v.TAG_NAMES.SCRIPT,[v.TAG_PROPERTIES.SRC,v.TAG_PROPERTIES.INNER_HTML],e),noscriptTags:P(v.TAG_NAMES.NOSCRIPT,[v.TAG_PROPERTIES.INNER_HTML],e),styleTags:P(v.TAG_NAMES.STYLE,[v.TAG_PROPERTIES.CSS_TEXT],e),onChangeClientState:E(e)}},H=function(e){var t=e.htmlAttributes,n=e.title,o=e.baseTag,r=e.metaTags,a=e.linkTags,i=e.scriptTags,s=e.noscriptTags,l=e.styleTags,u=e.onChangeClientState;M(t),S(n);var c={baseTag:C(v.TAG_NAMES.BASE,o),metaTags:C(v.TAG_NAMES.META,r),linkTags:C(v.TAG_NAMES.LINK,a),scriptTags:C(v.TAG_NAMES.SCRIPT,i),noscriptTags:C(v.TAG_NAMES.NOSCRIPT,s),styleTags:C(v.TAG_NAMES.STYLE,l)},d={},p={};Object.keys(c).forEach(function(e){var t=c[e],n=t.newTags,o=t.oldTags;n.length&&(d[e]=n),o.length&&(p[e]=c[e].oldTags)}),u(e,d,p)},F=(0,f.default)(q,H,G);t.default=function(e){var t=function(t){function n(){return r(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return i(n,t),l(n,[{key:"shouldComponentUpdate",value:function(e){return!(0,y.default)(this.props,e)}},{key:"render",value:function(){return d.default.createElement(e,this.props)}}],[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(d.default.Component);return t.propTypes={htmlAttributes:d.default.PropTypes.object,title:d.default.PropTypes.string,defaultTitle:d.default.PropTypes.string,titleTemplate:d.default.PropTypes.string,base:d.default.PropTypes.object,meta:d.default.PropTypes.arrayOf(d.default.PropTypes.object),link:d.default.PropTypes.arrayOf(d.default.PropTypes.object),script:d.default.PropTypes.arrayOf(d.default.PropTypes.object),noscript:d.default.PropTypes.arrayOf(d.default.PropTypes.object),style:d.default.PropTypes.arrayOf(d.default.PropTypes.object),onChangeClientState:d.default.PropTypes.func},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=G({htmlAttributes:[],title:"",baseTag:[],metaTags:[],linkTags:[],scriptTags:[],noscriptTags:[],styleTags:[]})),t},t}(F(_.default)),e.exports=t.default},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;t.TAG_NAMES={HTML:"htmlAttributes",TITLE:"title",BASE:"base",META:"meta",LINK:"link",SCRIPT:"script",NOSCRIPT:"noscript",STYLE:"style"},t.TAG_PROPERTIES={NAME:"name",CHARSET:"charset",HTTPEQUIV:"http-equiv",REL:"rel",HREF:"href",PROPERTY:"property",SRC:"src",INNER_HTML:"innerHTML",CSS_TEXT:"cssText"},t.REACT_TAG_MAP={charset:"charSet","http-equiv":"httpEquiv"}},"./node_modules/react-helmet/lib/PlainComponent.js":function(e,t,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("./node_modules/react/react.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return null}}]),t}(l.default.Component);t.default=u,e.exports=t.default},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n("./node_modules/react/react.js"),l=o(s),u=n("./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js"),c=o(u),d=n("./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js"),p=o(d);e.exports=function(e,t,n){function o(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function d(){m=e(f.map(function(e){return e.props})),y.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var f=[],m=void 0,y=function(e){function t(){r(this,t),e.apply(this,arguments)}return a(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may ony call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,f=[],e},t.prototype.shouldComponentUpdate=function(e){return!p.default(e,this.props)},t.prototype.componentWillMount=function(){f.push(this),d()},t.prototype.componentDidUpdate=function(){d()},t.prototype.componentWillUnmount=function(){var e=f.indexOf(this);f.splice(e,1),d()},t.prototype.render=function(){return l.default.createElement(u,this.props)},i(t,null,[{key:"displayName",value:"SideEffect("+o(u)+")",enumerable:!0},{key:"canUseDOM",value:c.default.canUseDOM,enumerable:!0}]),t}(s.Component);return y}}},"./node_modules/react-side-effect/node_modules/fbjs/lib/ExecutionEnvironment.js":function(e,t,n){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen,isInWorker:!o};e.exports=r},"./node_modules/react-side-effect/node_modules/fbjs/lib/shallowEqual.js":function(e,t,n){"use strict";function o(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(var a=r.bind(t),i=0;i<n.length;i++)if(!a(n[i])||e[n[i]]!==t[n[i]])return!1;return!0}var r=Object.prototype.hasOwnProperty;e.exports=o}});