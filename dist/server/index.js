!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(global,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(12),o=n(5);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t,n){var r=n(6);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("qs")},function(e,t,n){var r=n(1),o=n(6),i=n(13),u=n(14);function s(t){var n="function"==typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return u(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},s(t)}e.exports=s},function(e,t){e.exports=require("lodash/get")},function(e,t,n){e.exports=n(15)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},function(e,t,n){var r=n(6);function o(t,n,i){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=o=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i}:e.exports=o=Reflect.construct,o.apply(null,arguments)}e.exports=o},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"BasicSpreeError",function(){return _}),n.d(r,"ExpandedSpreeError",function(){return E}),n.d(r,"MisconfigurationError",function(){return P}),n.d(r,"NoResponseError",function(){return j}),n.d(r,"SpreeError",function(){return S}),n.d(r,"SpreeSDKError",function(){return R});var o=n(0),i=n.n(o),u=n(4),s=n.n(u),c=n(2),a=n.n(c),f=n(1),p=n.n(f),l=n(3),d=n.n(l);const h="get",v="post";var y=n(7),w=n.n(y),m=n(8),b=n(5),k=n.n(b),x=n(9);let R=function(e){function t(e){var n;return i()(this,t),n=a()(this,p()(t).call(this,e)),Object.setPrototypeOf(k()(n),t.prototype),n}return d()(t,e),t}(n.n(x)()(Error)),S=function(e){function t(e){var n;i()(this,t),n=a()(this,p()(t).call(this,`Spree returned a HTTP ${e.status} error code`)),Object.setPrototypeOf(k()(n),t.prototype),n.name="SpreeError";const r=Object.assign({},e);return Object.defineProperties(r,{config:{enumerable:!1},data:{enumerable:!1},headers:{enumerable:!1},request:{enumerable:!1}}),n.serverResponse=r,n}return d()(t,e),t}(R);var _=function(e){function t(e,n){var r;return i()(this,t),r=a()(this,p()(t).call(this,e)),Object.setPrototypeOf(k()(r),t.prototype),r.name="BasicSpreeError",r.summary=n,r}return d()(t,e),t}(S),O=n(10),g=n.n(O);let E=function(e){function t(e,n,r){var o;return i()(this,t),o=a()(this,p()(t).call(this,e,n)),Object.setPrototypeOf(k()(o),t.prototype),o.name="ExpandedSpreeError",o.errors=Object.keys(r).reduce((e,t)=>{const n=t.split(".");let o=n.shift(),i=e;for(;o;)i[o]||(0===n.length?i[o]=r[t]:i[o]={}),i=i[o],o=n.shift();return e},{}),o}return d()(t,e),s()(t,[{key:"getErrors",value:function(e){return g()(this.errors,e,null)}}]),t}(_),P=function(e){function t(e){var n;return i()(this,t),n=a()(this,p()(t).call(this,`Incorrect request setup: ${e}`)),Object.setPrototypeOf(k()(n),t.prototype),n.name="MisconfigurationError",n}return d()(t,e),t}(R),j=function(e){function t(){var e;return i()(this,t),e=a()(this,p()(t).call(this,"No response received from Spree")),Object.setPrototypeOf(k()(e),t.prototype),e.name="NoResponseError",e}return d()(t,e),t}(R);var C,T={success:e=>(e=>({isSuccess:()=>!0,isFail:()=>!1,success:()=>e,fail:()=>{throw new Error("Cannot call fail() on success.")}}))(e),fail:e=>(e=>({isSuccess:()=>!1,isFail:()=>!0,success:()=>{throw new Error("Cannot call success() on fail.")},fail:()=>e}))(e)};!function(e){e[e.BASIC=0]="BASIC",e[e.FULL=1]="FULL",e[e.LIMITED=2]="LIMITED"}(C||(C={}));var I=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let L=function(){function e(t){i()(this,e),this.host=t||process.env.SPREE_HOST||"http://localhost:3000/",this.axios=w.a.create({baseURL:this.host,headers:{"Content-Type":"application/json"},paramsSerializer:e=>m.stringify(e,{arrayFormat:"brackets"})})}return s()(e,[{key:"spreeResponse",value:function(e,t,n={},r={}){return I(this,void 0,void 0,function*(){try{let o;const i=this.axios[e],u=this.spreeOrderHeaders(n);return o=e===h||"delete"===e?yield i(t,{params:r,headers:u}):yield i(t,r,{headers:u}),T.success(o.data)}catch(e){return T.fail(this.processError(e))}})}},{key:"classifyError",value:function(e){const{error:t,errors:n}=e.response.data;return"string"==typeof t?"object"==typeof n?C.FULL:C.BASIC:C.LIMITED}},{key:"processError",value:function(e){return e.response?this.processSpreeError(e):e.request?new j:new P(e.message)}},{key:"processSpreeError",value:function(e){const{error:t,errors:n}=e.response.data,r=this.classifyError(e);return r===C.FULL?new E(e.response,t,n):r===C.BASIC?new _(e.response,t):new S(e.response)}},{key:"spreeOrderHeaders",value:function(e){const t={};return e.orderToken&&(t["X-Spree-Order-Token"]=e.orderToken),e.bearerToken&&(t.Authorization=`Bearer ${e.bearerToken}`),t}}]),e}();const M=()=>"api/v2/storefront/products",$=e=>`api/v2/storefront/products/${e}`,F=()=>"api/v2/storefront/taxons",q=e=>`api/v2/storefront/taxons/${e}`,U=()=>"api/v2/storefront/countries",B=e=>`api/v2/storefront/countries/${e}`,A=()=>"api/v2/storefront/cart",D=()=>"api/v2/storefront/cart/add_item",H=e=>`api/v2/storefront/cart/remove_line_item/${e}`,N=()=>"api/v2/storefront/cart/empty",z=()=>"api/v2/storefront/cart/set_quantity",K=()=>"api/v2/storefront/cart/apply_coupon_code",Q=e=>`api/v2/storefront/cart/remove_coupon_code/${e}`,X=()=>"api/v2/storefront/cart/estimate_shipping_rates",G=()=>"api/v2/storefront/checkout",J=()=>"api/v2/storefront/checkout/next",V=()=>"api/v2/storefront/checkout/advance",W=()=>"api/v2/storefront/checkout/complete",Y=()=>"api/v2/storefront/checkout/add_store_credit",Z=()=>"api/v2/storefront/checkout/remove_store_credit",ee=()=>"api/v2/storefront/checkout/payment_methods",te=()=>"api/v2/storefront/checkout/shipping_rates",ne=()=>"spree_oauth/token",re=()=>"user_account",oe=()=>"api/v2/storefront/account",ie=()=>"api/v2/storefront/account/credit_cards",ue=()=>"api/v2/storefront/account/credit_cards/default",se=()=>"api/v2/storefront/account/orders",ce=e=>`api/v2/storefront/account/orders/${e}`,ae=e=>`api/v2/storefront/order_status/${e}`,fe=()=>"password/forgot",pe=()=>"password/reset",le=()=>"password/update",de=()=>"api/v2/storefront/account/edit",he=()=>"addresses",ve=()=>"api/v1/braintree_client_token",ye=()=>"api/v2/storefront/account/downloads";var we=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let me=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"accountInfo",value:function(e,t={}){return we(this,void 0,void 0,function*(){return yield this.spreeResponse(h,oe(),e,t)})}},{key:"creditCardsList",value:function(e,t={}){return we(this,void 0,void 0,function*(){return yield this.spreeResponse(h,ie(),e,t)})}},{key:"defaultCreditCard",value:function(e,t={}){return we(this,void 0,void 0,function*(){return yield this.spreeResponse(h,ue(),e,t)})}},{key:"completedOrdersList",value:function(e,t={}){return we(this,void 0,void 0,function*(){return yield this.spreeResponse(h,se(),e,t)})}},{key:"completedOrder",value:function(e,t,n={}){return we(this,void 0,void 0,function*(){return yield this.spreeResponse(h,ce(t),e,n)})}},{key:"accountInfoUpdate",value:function(e,t={}){return we(this,void 0,void 0,function*(){return yield this.spreeResponse(v,de(),e,t)})}},{key:"downloads",value:function(e,t={}){return we(this,void 0,void 0,function*(){return yield this.spreeResponse(h,ye(),e,t)})}}]),t}(L);const be=e=>({address:Object.assign({},e)});var ke=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let xe=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"get",value:function(e){return ke(this,void 0,void 0,function*(){return yield this.spreeResponse(h,he(),e)})}},{key:"add",value:function(e,t){return ke(this,void 0,void 0,function*(){return yield this.spreeResponse(v,he(),e,be(t))})}},{key:"update",value:function(e,t){return ke(this,void 0,void 0,function*(){return yield this.spreeResponse("put",he(),e,be(t))})}}]),t}(L);var Re=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let Se=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"getToken",value:function(e){return Re(this,void 0,void 0,function*(){return yield this.spreeResponse(v,ne(),{},(({username:e,password:t})=>({username:e,password:t,grant_type:"password"}))(e))})}},{key:"refreshToken",value:function(e){return Re(this,void 0,void 0,function*(){return yield this.spreeResponse(v,ne(),{},(({refresh_token:e})=>({refresh_token:e,grant_type:"refresh_token"}))(e))})}},{key:"registerUser",value:function(e){return Re(this,void 0,void 0,function*(){return yield this.spreeResponse(v,re(),{},(e=>({user:Object.assign({},e)}))(e))})}},{key:"forgotPassword",value:function(e){return Re(this,void 0,void 0,function*(){return yield this.spreeResponse(v,fe(),{},e)})}},{key:"resetPassword",value:function(e){return Re(this,void 0,void 0,function*(){return yield this.spreeResponse(v,pe(),{},e)})}},{key:"updatePassword",value:function(e,t){return Re(this,void 0,void 0,function*(){return yield this.spreeResponse("put",le(),e,t)})}},{key:"deleteAccount",value:function(e){return Re(this,void 0,void 0,function*(){return yield this.spreeResponse("delete",re(),e,{})})}}]),t}(L);var _e=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let Oe=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"getClientToken",value:function(e,t){return _e(this,void 0,void 0,function*(){return yield this.spreeResponse(v,ve(),e,t)})}}]),t}(L);var ge=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let Ee=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"show",value:function(e,t={}){return ge(this,void 0,void 0,function*(){return yield this.spreeResponse(h,A(),e,t)})}},{key:"create",value:function(e,t={}){return ge(this,void 0,void 0,function*(){return yield this.spreeResponse(v,A(),e,t)})}},{key:"addItem",value:function(e,t){return ge(this,void 0,void 0,function*(){return yield this.spreeResponse(v,D(),e,t)})}},{key:"removeItem",value:function(e,t,n={}){return ge(this,void 0,void 0,function*(){return yield this.spreeResponse("delete",H(t),e,n)})}},{key:"emptyCart",value:function(e,t={}){return ge(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",N(),e,t)})}},{key:"setQuantity",value:function(e,t){return ge(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",z(),e,t)})}},{key:"applyCouponCode",value:function(e,t){return ge(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",K(),e,t)})}},{key:"removeCouponCode",value:function(e,t=null,n={}){return ge(this,void 0,void 0,function*(){let r="";return r=Q(null!==t?t:""),yield this.spreeResponse("delete",r,e,n)})}},{key:"estimateShippingMethods",value:function(e,t){return ge(this,void 0,void 0,function*(){return yield this.spreeResponse(h,X(),e,t)})}}]),t}(L);var Pe=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let je=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"orderNext",value:function(e,t={}){return Pe(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",J(),e,t)})}},{key:"orderUpdate",value:function(e,t){return Pe(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",G(),e,t)})}},{key:"advance",value:function(e,t={}){return Pe(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",V(),e,t)})}},{key:"complete",value:function(e,t={}){return Pe(this,void 0,void 0,function*(){return yield this.spreeResponse("patch",W(),e,t)})}},{key:"addStoreCredits",value:function(e,t){return Pe(this,void 0,void 0,function*(){return yield this.spreeResponse(v,Y(),e,t)})}},{key:"removeStoreCredits",value:function(e,t={}){return Pe(this,void 0,void 0,function*(){return yield this.spreeResponse(v,Z(),e,t)})}},{key:"paymentMethods",value:function(e){return Pe(this,void 0,void 0,function*(){return yield this.spreeResponse(h,ee(),e)})}},{key:"shippingMethods",value:function(e,t={}){return Pe(this,void 0,void 0,function*(){return yield this.spreeResponse(h,te(),e,t)})}}]),t}(L);var Ce=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let Te=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"list",value:function(){return Ce(this,void 0,void 0,function*(){return yield this.spreeResponse(h,U())})}},{key:"show",value:function(e,t={}){return Ce(this,void 0,void 0,function*(){return yield this.spreeResponse(h,B(e),{},t)})}}]),t}(L);var Ie=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let Le=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"status",value:function(e,t={}){return Ie(this,void 0,void 0,function*(){return yield this.spreeResponse(h,ae(e),{},t)})}}]),t}(L);var Me=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let $e=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"list",value:function(e={}){return Me(this,void 0,void 0,function*(){return yield this.spreeResponse(h,M(),{},e)})}},{key:"show",value:function(e,t={}){return Me(this,void 0,void 0,function*(){return yield this.spreeResponse(h,$(e),{},t)})}}]),t}(L);var Fe=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,s)}c((r=r.apply(e,t||[])).next())})};let qe=function(e){function t(){return i()(this,t),a()(this,p()(t).apply(this,arguments))}return d()(t,e),s()(t,[{key:"list",value:function(e={}){return Fe(this,void 0,void 0,function*(){return yield this.spreeResponse(h,F(),{},e)})}},{key:"show",value:function(e,t={}){return Fe(this,void 0,void 0,function*(){return yield this.spreeResponse(h,q(e),{},t)})}}]),t}(L);var Ue=function(){function e(t={}){i()(this,e),this.host=t.host||null,this.addEndpoints()}return s()(e,[{key:"addEndpoints",value:function(){this.account=new me(this.host),this.authentication=new Se(this.host),this.cart=new Ee(this.host),this.checkout=new je(this.host),this.countries=new Te(this.host),this.order=new Le(this.host),this.products=new $e(this.host),this.taxons=new qe(this.host),this.address=new xe(this.host),this.braintree=new Oe(this.host)}}]),e}();n.d(t,"makeClient",function(){return Be}),n.d(t,"Client",function(){return Ue}),n.d(t,"Http",function(){return L}),n.d(t,"Result",function(){return T}),n.d(t,"errors",function(){return r});const Be=(e={})=>new Ue(e)}])});
//# sourceMappingURL=index.js.map