!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(global,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(12),o=n(5);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e,n){var r=n(6);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){t.exports=require("axios")},function(t,e){t.exports=require("qs")},function(t,e,n){var r=n(1),o=n(6),i=n(13),u=n(14);function s(e){var n="function"==typeof Map?new Map:void 0;return t.exports=s=function(t){if(null===t||!i(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return u(t,arguments,r(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},s(e)}t.exports=s},function(t,e){t.exports=require("lodash/get")},function(t,e,n){t.exports=n(15)},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){t.exports=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")}},function(t,e,n){var r=n(6);function o(e,n,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=o=function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i}:t.exports=o=Reflect.construct,o.apply(null,arguments)}t.exports=o},function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"BasicSpreeError",function(){return O}),n.d(r,"ExpandedSpreeError",function(){return E}),n.d(r,"MisconfigurationError",function(){return j}),n.d(r,"NoResponseError",function(){return P}),n.d(r,"SpreeError",function(){return S}),n.d(r,"SpreeSDKError",function(){return R});var o=n(0),i=n.n(o),u=n(4),s=n.n(u),c=n(2),a=n.n(c),f=n(1),p=n.n(f),l=n(3),h=n.n(l);const d="get",v="post";var y=n(7),m=n.n(y),b=n(8),w=n(5),k=n.n(w),x=n(9);let R=function(t){function e(t){var n;return i()(this,e),n=a()(this,p()(e).call(this,t)),Object.setPrototypeOf(k()(n),e.prototype),n}return h()(e,t),e}(n.n(x)()(Error)),S=function(t){function e(t){var n;i()(this,e),n=a()(this,p()(e).call(this,`Spree returned a HTTP ${t.status} error code`)),Object.setPrototypeOf(k()(n),e.prototype),n.name="SpreeError";const r=Object.assign({},t);return Object.defineProperties(r,{config:{enumerable:!1},data:{enumerable:!1},headers:{enumerable:!1},request:{enumerable:!1}}),n.serverResponse=r,n}return h()(e,t),e}(R);var O=function(t){function e(t,n){var r;return i()(this,e),r=a()(this,p()(e).call(this,t)),Object.setPrototypeOf(k()(r),e.prototype),r.name="BasicSpreeError",r.summary=n,r}return h()(e,t),e}(S),_=n(10),g=n.n(_);let E=function(t){function e(t,n,r){var o;return i()(this,e),o=a()(this,p()(e).call(this,t,n)),Object.setPrototypeOf(k()(o),e.prototype),o.name="ExpandedSpreeError",o.errors=Object.keys(r).reduce((t,e)=>{const n=e.split(".");let o=n.shift(),i=t;for(;o;)i[o]||(0===n.length?i[o]=r[e]:i[o]={}),i=i[o],o=n.shift();return t},{}),o}return h()(e,t),s()(e,[{key:"getErrors",value:function(t){return g()(this.errors,t,null)}}]),e}(O),j=function(t){function e(t){var n;return i()(this,e),n=a()(this,p()(e).call(this,`Incorrect request setup: ${t}`)),Object.setPrototypeOf(k()(n),e.prototype),n.name="MisconfigurationError",n}return h()(e,t),e}(R),P=function(t){function e(){var t;return i()(this,e),t=a()(this,p()(e).call(this,"No response received from Spree")),Object.setPrototypeOf(k()(t),e.prototype),t.name="NoResponseError",t}return h()(e,t),e}(R);var C,T={success:t=>(t=>({isSuccess:()=>!0,isFail:()=>!1,success:()=>t,fail:()=>{throw new Error("Cannot call fail() on success.")}}))(t),fail:t=>(t=>({isSuccess:()=>!1,isFail:()=>!0,success:()=>{throw new Error("Cannot call success() on fail.")},fail:()=>t}))(t)};!function(t){t[t.BASIC=0]="BASIC",t[t.FULL=1]="FULL",t[t.LIMITED=2]="LIMITED"}(C||(C={}));var I=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};let L=function(){function t(e){i()(this,t),this.host=e||process.env.SPREE_HOST||"http://localhost:3000/",this.axios=m.a.create({baseURL:this.host,headers:{"Content-Type":"application/json"},paramsSerializer:t=>b.stringify(t,{arrayFormat:"brackets"})})}return s()(t,[{key:"spreeResponse",value:function(t,e,n={},r={}){return I(this,void 0,void 0,function*(){try{let o;const i=this.axios[t],u=this.spreeOrderHeaders(n);return o=t===d||"delete"===t?yield i(e,{params:r,headers:u}):yield i(e,r,{headers:u}),T.success(o.data)}catch(t){return T.fail(this.processError(t))}})}},{key:"classifyError",value:function(t){const{error:e,errors:n}=t.response.data;return"string"==typeof e?"object"==typeof n?C.FULL:C.BASIC:C.LIMITED}},{key:"processError",value:function(t){return t.response?this.processSpreeError(t):t.request?new P:new j(t.message)}},{key:"processSpreeError",value:function(t){const{error:e,errors:n}=t.response.data,r=this.classifyError(t);return r===C.FULL?new E(t.response,e,n):r===C.BASIC?new O(t.response,e):new S(t.response)}},{key:"spreeOrderHeaders",value:function(t){const e={};return t.orderToken&&(e["X-Spree-Order-Token"]=t.orderToken),t.bearerToken&&(e.Authorization=`Bearer ${t.bearerToken}`),e}}]),t}();const M=()=>"api/v2/storefront/products",$=t=>`api/v2/storefront/products/${t}`,F=()=>"api/v2/storefront/taxons",q=t=>`api/v2/storefront/taxons/${t}`,B=()=>"api/v2/storefront/countries",U=t=>`api/v2/storefront/countries/${t}`,D=()=>"api/v2/storefront/cart",A=()=>"api/v2/storefront/cart/add_item",H=t=>`api/v2/storefront/cart/remove_line_item/${t}`,N=()=>"api/v2/storefront/cart/empty",z=()=>"api/v2/storefront/cart/set_quantity",K=()=>"api/v2/storefront/cart/apply_coupon_code",Q=t=>`api/v2/storefront/cart/remove_coupon_code/${t}`,X=()=>"api/v2/storefront/cart/estimate_shipping_rates",G=()=>"api/v2/storefront/checkout",J=()=>"api/v2/storefront/checkout/next",V=()=>"api/v2/storefront/checkout/advance",W=()=>"api/v2/storefront/checkout/complete",Y=()=>"api/v2/storefront/checkout/add_store_credit",Z=()=>"api/v2/storefront/checkout/remove_store_credit",tt=()=>"api/v2/storefront/checkout/payment_methods",et=()=>"api/v2/storefront/checkout/shipping_rates",nt=()=>"spree_oauth/token",rt=()=>"user_account",ot=()=>"api/v2/storefront/account",it=()=>"api/v2/storefront/account/credit_cards",ut=()=>"api/v2/storefront/account/credit_cards/default",st=()=>"api/v2/storefront/account/orders",ct=t=>`api/v2/storefront/account/orders/${t}`,at=t=>`api/v2/storefront/order_status/${t}`;var ft=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};let pt=function(t){function e(){return i()(this,e),a()(this,p()(e).apply(this,arguments))}return h()(e,t),s()(e,[{key:"accountInfo",value:function(t,e={}){return ft(this,void 0,void 0,function*(){return yield this.spreeResponse(d,ot(),t,e)})}},{key:"creditCardsList",value:function(t,e={}){return ft(this,void 0,void 0,function*(){return yield this.spreeResponse(d,it(),t,e)})}},{key:"defaultCreditCard",value:function(t,e={}){return ft(this,void 0,void 0,function*(){return yield this.spreeResponse(d,ut(),t,e)})}},{key:"completedOrdersList",value:function(t,e={}){return ft(this,void 0,void 0,function*(){return yield this.spreeResponse(d,st(),t,e)})}},{key:"completedOrder",value:function(t,e,n={}){return ft(this,void 0,void 0,function*(){return yield this.spreeResponse(d,ct(e),t,n)})}}]),e}(L);var lt=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};let ht=function(t){function e(){return i()(this,e),a()(this,p()(e).apply(this,arguments))}return h()(e,t),s()(e,[{key:"getToken",value:function(t){return lt(this,void 0,void 0,function*(){return yield this.spreeResponse(v,nt(),{},(({username:t,password:e})=>({username:t,password:e,grant_type:"password"}))(t))})}},{key:"refreshToken",value:function(t){return lt(this,void 0,void 0,function*(){return yield this.spreeResponse(v,nt(),{},(({refresh_token:t})=>({refresh_token:t,grant_type:"refresh_token"}))(t))})}},{key:"registerUser",value:function(t){return lt(this,void 0,void 0,function*(){return yield this.spreeResponse(v,rt(),{},(t=>({user:Object.assign({},t)}))(t))})}}]),e}(L);var dt=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};let vt=function(t){function e(){return i()(this,e),a()(this,p()(e).apply(this,arguments))}return h()(e,t),s()(e,[{key:"show",value:function(t,e={}){return dt(this,void 0,void 0,function*(){return yield this.spreeResponse(d,D(),t,e)})}},{key:"create",value:function(t,e={}){return dt(this,void 0,void 0,function*(){return yield this.spreeResponse(v,D(),t,e)})}},{key:"addItem",value:function(t,e){return dt(this,void 0,void 0,function*(){return yield this.spreeResponse(v,A(),t,e)})}},{key:"removeItem",value:function(t,e,n={}){return dt(this,void 0,void 0,function*(){return yield this.spreeResponse("delete",H(e),t,n)})}},{key:"emptyCart",value:function(t,e={}){return dt(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",N(),t,e)})}},{key:"setQuantity",value:function(t,e){return dt(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",z(),t,e)})}},{key:"applyCouponCode",value:function(t,e){return dt(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",K(),t,e)})}},{key:"removeCouponCode",value:function(t,e=null,n={}){return dt(this,void 0,void 0,function*(){let r="";return r=Q(null!==e?e:""),yield this.spreeResponse("delete",r,t,n)})}},{key:"estimateShippingMethods",value:function(t,e){return dt(this,void 0,void 0,function*(){return yield this.spreeResponse(d,X(),t,e)})}}]),e}(L);var yt=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};let mt=function(t){function e(){return i()(this,e),a()(this,p()(e).apply(this,arguments))}return h()(e,t),s()(e,[{key:"orderNext",value:function(t,e={}){return yt(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",J(),t,e)})}},{key:"orderUpdate",value:function(t,e){return yt(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",G(),t,e)})}},{key:"advance",value:function(t,e={}){return yt(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",V(),t,e)})}},{key:"complete",value:function(t,e={}){return yt(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",W(),t,e)})}},{key:"addStoreCredits",value:function(t,e){return yt(this,void 0,void 0,function*(){return yield this.spreeResponse(v,Y(),t,e)})}},{key:"removeStoreCredits",value:function(t,e={}){return yt(this,void 0,void 0,function*(){return yield this.spreeResponse(v,Z(),t,e)})}},{key:"paymentMethods",value:function(t){return yt(this,void 0,void 0,function*(){return yield this.spreeResponse(d,tt(),t)})}},{key:"shippingMethods",value:function(t,e={}){return yt(this,void 0,void 0,function*(){return yield this.spreeResponse(d,et(),t,e)})}}]),e}(L);var bt=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};let wt=function(t){function e(){return i()(this,e),a()(this,p()(e).apply(this,arguments))}return h()(e,t),s()(e,[{key:"list",value:function(){return bt(this,void 0,void 0,function*(){return yield this.spreeResponse(d,B())})}},{key:"show",value:function(t,e={}){return bt(this,void 0,void 0,function*(){return yield this.spreeResponse(d,U(t),{},e)})}}]),e}(L);var kt=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};let xt=function(t){function e(){return i()(this,e),a()(this,p()(e).apply(this,arguments))}return h()(e,t),s()(e,[{key:"status",value:function(t,e={}){return kt(this,void 0,void 0,function*(){return yield this.spreeResponse(d,at(t),{},e)})}}]),e}(L);var Rt=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};let St=function(t){function e(){return i()(this,e),a()(this,p()(e).apply(this,arguments))}return h()(e,t),s()(e,[{key:"list",value:function(t={}){return Rt(this,void 0,void 0,function*(){return yield this.spreeResponse(d,M(),{},t)})}},{key:"show",value:function(t,e={}){return Rt(this,void 0,void 0,function*(){return yield this.spreeResponse(d,$(t),{},e)})}}]),e}(L);var Ot=function(t,e,n,r){return new(n||(n=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(u,s)}c((r=r.apply(t,e||[])).next())})};let _t=function(t){function e(){return i()(this,e),a()(this,p()(e).apply(this,arguments))}return h()(e,t),s()(e,[{key:"list",value:function(t={}){return Ot(this,void 0,void 0,function*(){return yield this.spreeResponse(d,F(),{},t)})}},{key:"show",value:function(t,e={}){return Ot(this,void 0,void 0,function*(){return yield this.spreeResponse(d,q(t),{},e)})}}]),e}(L);var gt=function(){function t(e={}){i()(this,t),this.host=e.host||null,this.addEndpoints()}return s()(t,[{key:"addEndpoints",value:function(){this.account=new pt(this.host),this.authentication=new ht(this.host),this.cart=new vt(this.host),this.checkout=new mt(this.host),this.countries=new wt(this.host),this.order=new xt(this.host),this.products=new St(this.host),this.taxons=new _t(this.host)}}]),t}();n.d(e,"makeClient",function(){return Et}),n.d(e,"Client",function(){return gt}),n.d(e,"Http",function(){return L}),n.d(e,"Result",function(){return T}),n.d(e,"errors",function(){return r});const Et=(t={})=>new gt(t)}])});
//# sourceMappingURL=index.js.map