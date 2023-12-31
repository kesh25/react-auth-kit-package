/*! react-auth-kit v2.12.7 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("js-cookie"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["exports","react","js-cookie","react-router-dom"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ReactAuthKit={},e.React,e.Cookies,e.ReactRouterDOM)}(this,(function(e,t,r,n){"use strict";function o(e){var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var i=o(t),a=i.createContext(null),s=a.Consumer,u=function(e,t){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},u(e,t)};
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview Auth Context
     * @copyright Arkadip Bhattacharya 2020
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var h=function(){return h=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var c,f=function(){function e(e,t,r,n,o){this.authStorageType=t,this.authStorageName=e,this.authTimeStorageName="".concat(e,"_storage"),this.stateStorageName="".concat(e,"_state"),this.refreshTokenName=r,this.cookieDomain=n,this.cookieSecure=o,this.authStorageTypeName="".concat(this.authStorageName,"_type"),this.isUsingRefreshToken=!!this.refreshTokenName,this.refreshTokenTimeName=this.refreshTokenName?"".concat(this.refreshTokenName,"_time"):null}return e.prototype.initialToken=function(){return"cookie"===this.authStorageType?this.initialCookieToken_():this.initialLSToken_()},e.prototype.initialCookieToken_=function(){var e=r.get(this.authStorageName),t=r.get(this.authStorageTypeName),n=r.get(this.authTimeStorageName),o=r.get(this.stateStorageName),i=this.isUsingRefreshToken&&null!=this.refreshTokenName?r.get(this.refreshTokenName):null,a=this.isUsingRefreshToken&&null!=this.refreshTokenTimeName?r.get(this.refreshTokenTimeName):null;return this.checkTokenExist(e,t,n,o,i,a)},e.prototype.initialLSToken_=function(){var e=localStorage.getItem(this.authStorageName),t=localStorage.getItem(this.authStorageTypeName),r=localStorage.getItem(this.authTimeStorageName),n=localStorage.getItem(this.stateStorageName),o=this.isUsingRefreshToken&&null!=this.refreshTokenName?localStorage.getItem(this.refreshTokenName):null,i=this.isUsingRefreshToken&&null!=this.refreshTokenTimeName?localStorage.getItem(this.refreshTokenTimeName):null;return this.checkTokenExist(e,t,r,n,o,i)},e.prototype.checkTokenExist=function(e,t,r,n,o,i){if(!(e&&t&&r&&n))return{auth:null,refresh:null,userState:null,isUsingRefreshToken:this.isUsingRefreshToken,isSignIn:!1};var a=new Date(r);try{var s={auth:{token:e,type:t,expiresAt:a},userState:JSON.parse(n),isSignIn:!0,isUsingRefreshToken:this.isUsingRefreshToken,refresh:void 0};if(this.isUsingRefreshToken&&o&&i){var u=new Date(i);return h(h({},s),{refresh:{token:o,expiresAt:u}})}return h(h({},s),{refresh:null})}catch(e){return{auth:null,refresh:null,userState:null,isUsingRefreshToken:this.isUsingRefreshToken,isSignIn:!1}}},e.prototype.syncTokens=function(e){e.auth?this.isUsingRefreshToken&&e.refresh?this.setToken(e.auth.token,e.auth.type,e.refresh.token,e.refresh.expiresAt,e.auth.expiresAt,e.userState):this.setToken(e.auth.token,e.auth.type,null,null,e.auth.expiresAt,e.userState):this.removeToken()},e.prototype.setToken=function(e,t,r,n,o,i){"cookie"===this.authStorageType?this.setCookieToken_(e,t,r,o,n,i):this.setLSToken_(e,t,r,o,n,i)},e.prototype.setCookieToken_=function(e,t,n,o,i,a){r.set(this.authStorageName,e,{expires:o,domain:this.cookieDomain,secure:this.cookieSecure}),r.set(this.authStorageTypeName,t,{expires:o,domain:this.cookieDomain,secure:this.cookieSecure}),r.set(this.authTimeStorageName,o.toISOString(),{expires:o,domain:this.cookieDomain,secure:this.cookieSecure}),a&&r.set(this.stateStorageName,JSON.stringify(a),{expires:o,domain:this.cookieDomain,secure:this.cookieSecure}),this.isUsingRefreshToken&&this.refreshTokenName&&n&&r.set(this.refreshTokenName,n,{expires:o,domain:this.cookieDomain,secure:this.cookieSecure}),this.isUsingRefreshToken&&this.refreshTokenTimeName&&i&&r.set(this.refreshTokenTimeName,i.toISOString(),{expires:o,domain:this.cookieDomain,secure:this.cookieSecure})},e.prototype.setLSToken_=function(e,t,r,n,o,i){localStorage.setItem(this.authStorageName,e),localStorage.setItem(this.authStorageTypeName,t),localStorage.setItem(this.authTimeStorageName,n.toISOString()),i&&localStorage.setItem(this.stateStorageName,JSON.stringify(i)),this.isUsingRefreshToken&&this.refreshTokenName&&r&&localStorage.setItem(this.refreshTokenName,r),this.isUsingRefreshToken&&this.refreshTokenTimeName&&o&&localStorage.setItem(this.refreshTokenTimeName,o.toISOString())},e.prototype.removeToken=function(){"cookie"===this.authStorageType?this.removeCookieToken_():this.removeLSToken_()},e.prototype.removeCookieToken_=function(){r.remove(this.authStorageName,{domain:this.cookieDomain,secure:this.cookieSecure}),r.remove(this.authTimeStorageName,{domain:this.cookieDomain,secure:this.cookieSecure}),r.remove(this.authStorageTypeName,{domain:this.cookieDomain,secure:this.cookieSecure}),r.remove(this.stateStorageName,{domain:this.cookieDomain,secure:this.cookieSecure}),this.isUsingRefreshToken&&this.refreshTokenName&&r.remove(this.refreshTokenName,{domain:this.cookieDomain,secure:this.cookieSecure}),this.isUsingRefreshToken&&this.refreshTokenTimeName&&r.remove(this.refreshTokenTimeName,{domain:this.cookieDomain,secure:this.cookieSecure})},e.prototype.removeLSToken_=function(){localStorage.removeItem(this.authStorageName),localStorage.removeItem(this.authTimeStorageName),localStorage.removeItem(this.authStorageTypeName),localStorage.removeItem(this.stateStorageName),this.isUsingRefreshToken&&this.refreshTokenName&&localStorage.removeItem(this.refreshTokenName),this.isUsingRefreshToken&&this.refreshTokenTimeName&&localStorage.removeItem(this.refreshTokenTimeName)},e}();
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview Actions for useReducer
     * @copyright Arkadip Bhattacharya 2020
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function l(e,t){switch(t.type){case c.SignIn:return h(h({},e),{auth:t.payload.auth,refresh:t.payload.refresh,userState:t.payload.userState,isSignIn:!0});case c.SignOut:return h(h({},e),{auth:null,refresh:null,userState:null,isSignIn:!1});case c.RefreshToken:return e.isSignIn&&e.auth&&e.refresh?h(h({},e),{auth:{token:t.payload.newAuthToken?t.payload.newAuthToken:e.auth.token,type:e.auth.type,expiresAt:t.payload.newAuthTokenExpireIn?new Date((new Date).getTime()+60*t.payload.newAuthTokenExpireIn*1e3):e.auth.expiresAt},refresh:{token:t.payload.newRefreshToken?t.payload.newRefreshToken:e.refresh.token,expiresAt:t.payload.newRefreshTokenExpiresIn?new Date((new Date).getTime()+60*t.payload.newRefreshTokenExpiresIn*1e3):e.refresh.expiresAt},userState:t.payload.newAuthUserState?t.payload.newAuthUserState:e.userState}):e}}function m(e){return{type:c.SignIn,payload:e}}function k(){return{type:c.SignOut}}!function(e){e[e.SignIn=0]="SignIn",e[e.SignOut=1]="SignOut",e[e.RefreshToken=2]="RefreshToken"}(c||(c={}));
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview Error file
     * @copyright Arkadip Bhattacharya 2023
     */
var p=function(e){function t(t){return e.call(this,t)||this}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t}(Error);function S(e){return!!e.auth&&new Date(e.auth.expiresAt)>new Date}
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview PrivateRoute component
     * @copyright Arkadip Bhattacharya 2020
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */e.AuthProvider=function(e){var t=e.children,r=e.authType,n=e.authName,o=e.cookieDomain,s=void 0===o?null===window||void 0===window?void 0:window.location.hostname:o,u=e.cookieSecure,h=void 0===u?"https"===(null===window||void 0===window?void 0:window.location.protocol):u,m=e.refresh;if("cookie"===r&&!s)throw new p("authType 'cookie' requires 'cookieDomain' and 'cookieSecure' props in AuthProvider");var k,S,T,g,d=m?"".concat(n,"_refresh"):null,v=new f(n,r,d,s,h),y=i.useReducer(l,v.initialToken()),w=y[0],A=y[1];return m&&(k=function(){var e,t,r,n;m.refreshApiCallback({authToken:null===(e=w.auth)||void 0===e?void 0:e.token,authTokenExpireAt:null===(t=w.auth)||void 0===t?void 0:t.expiresAt,authUserState:w.userState,refreshToken:null===(r=w.refresh)||void 0===r?void 0:r.token,refreshTokenExpiresAt:null===(n=w.refresh)||void 0===n?void 0:n.expiresAt}).then((function(e){var t;e.isSuccess&&A((t=e,{type:c.RefreshToken,payload:t}))})).catch((function(){}))},S=w.isSignIn?m.interval:null,T=i.useRef(k),g=i.useRef(null),i.useEffect((function(){T.current=k}),[k]),i.useEffect((function(){return"number"==typeof S&&(g.current=window.setInterval((function(){return T.current()}),60*S*1e3)),function(){g.current&&window.clearTimeout(g.current)}}),[S])),i.useEffect((function(){v.syncTokens(w)}),[w]),i.createElement(a.Provider,{value:{authState:w,dispatch:A}},t)},e.RequireAuth=function(e){var t=e.children,r=e.loginPath,o=i.useContext(a);if(null===o)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");var s=n.useLocation();return S(o.authState)?t:(o.dispatch(k()),i.createElement(n.Navigate,{to:r,state:{from:s},replace:!0}))},e.createRefresh=function(e){return e},e.useAuthHeader=
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview Authentication header <hook>
     * @copyright Arkadip Bhattacharya 2020
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){var e=i.useContext(a);if(null===e)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return function(){return e.authState.auth&&S(e.authState)?"".concat(e.authState.auth.type," ").concat(e.authState.auth.token):""}}
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview Authentication status <hook>
     * @copyright Arkadip Bhattacharya 2020
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */,e.useAuthUser=
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview Authentication User <hook>
     * @copyright Arkadip Bhattacharya 2020
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){var e=i.useContext(a);if(null===e)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return function(){return S(e.authState)?e.authState.userState:null}},e.useIsAuthenticated=function(){var e=i.useContext(a);if(null===e)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return function(){return!!S(e.authState)}},e.useSignIn=
/**
     *@author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     *@fileoverview Sign In functionality <hook>
     *@copyright Arkadip Bhattacharya 2020
     *@license Apache-2.0
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){var e=i.useContext(a);if(null===e)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return function(t){var r=t.token,n=t.tokenType,o=t.authState,i=t.expiresIn,a=t.refreshToken,s=t.refreshTokenExpireIn,u=new Date((new Date).getTime()+60*i*1e3);if(e.authState.isUsingRefreshToken){if(a&&s){var h=new Date((new Date).getTime()+60*s*1e3);return e.dispatch(m({auth:{token:r,type:n,expiresAt:u},userState:o||null,refresh:{token:a,expiresAt:h}})),!0}throw new p('Make sure you given "refreshToken" and  "refreshTokenExpireIn" parameter')}if(a&&s)throw new Error("The app doesn't implement 'refreshToken' feature.\nSo you have to implement refresh token feature from 'AuthProvider' before using it.");return e.dispatch(m({auth:{token:r,type:n,expiresAt:u},userState:o||null,refresh:null})),!0}}
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview Sign Out functionality <Hook>
     * @copyright Arkadip Bhattacharya 2020
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */,e.useSignOut=function(){var e=i.useContext(a);if(null===e)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return function(){try{return!!e&&(e.dispatch(k()),!0)}catch(e){return!1}}},e.withAuthHeader=
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview Authentication header <Higher Order Component>
     * @copyright Arkadip Bhattacharya 2020
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e){return function(t){return i.createElement(s,null,(function(r){if(null===r)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return r.authState.auth&&S(r.authState)?i.createElement(e,h({},t,{authHeader:"".concat(r.authState.auth.type," ").concat(r.authState.auth.token)})):i.createElement(e,h({},t,{authHeader:""}))}))}}
/**
     * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
     * @fileoverview Authentication status <Higher Order Component>
     * @copyright Arkadip Bhattacharya 2020
     *
     * Copyright 2020 Arkadip Bhattacharya
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *         http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */,e.withAuthUser=function(e){return function(t){return i.createElement(s,null,(function(r){if(null===r)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return r.authState.auth&&S(r.authState)?i.createElement(e,h({},t,{authState:r.authState.userState})):i.createElement(e,h({},t,{authState:null}))}))}},e.withIsAuthenticated=function(e){return function(t){return i.createElement(s,null,(function(r){if(null===r)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return r.authState.auth&&S(r.authState)?i.createElement(e,h({},t,{isAuth:!0})):i.createElement(e,h({},t,{isAuth:!1}))}))}},e.withSignIn=function(e){return function(t){return i.createElement(s,null,(function(r){if(null===r)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return i.createElement(e,h({},t,{signIn:function(e){var t=e.token,n=e.tokenType,o=e.authState,i=e.expiresIn,a=e.refreshToken,s=e.refreshTokenExpireIn,u=new Date((new Date).getTime()+60*i*1e3);if(r.authState.isUsingRefreshToken){if(a&&s){var h=new Date((new Date).getTime()+60*s*1e3);return r.dispatch(m({auth:{token:t,type:n,expiresAt:u},userState:o||null,refresh:{token:a,expiresAt:h}})),!0}throw new p('Make sure you given "refreshToken" and "refreshTokenExpireIn" parameter')}if(a&&s)throw new p("The app doesn't implement 'refreshToken' feature.\n So you have to implement refresh token feature from 'AuthProvider' before using it.");return r.dispatch(m({auth:{token:t,type:n,expiresAt:u},userState:o||null,refresh:null})),!0}}))}))}},e.withSignOut=function(e){return function(t){return i.createElement(s,null,(function(r){if(null===r)throw new p("Auth Provider is missing. Please add the AuthProvider before Router");return i.createElement(e,h({},t,{signOut:function(){try{return!!r&&(r.dispatch(k()),!0)}catch(e){return!1}}}))}))}}}));
//# sourceMappingURL=index.umd.js.map
