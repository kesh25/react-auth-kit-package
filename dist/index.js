import AuthProvider from './AuthProvider.js';
export { default as createRefresh } from './createRefresh.js';
export { default as RequireAuth } from './PrivateRoute.js';
export { default as useSignIn } from './hooks/useSignIn.js';
export { default as useSignOut } from './hooks/useSignOut.js';
export { default as useAuthUser } from './hooks/useAuthUser.js';
export { default as useAuthHeader } from './hooks/useAuthHeader.js';
export { default as useIsAuthenticated } from './hooks/useIsAuthenticated.js';
export { default as withSignIn } from './higherOrderComponents/withSignIn.js';
export { default as withSignOut } from './higherOrderComponents/withSignOut.js';
export { default as withAuthUser } from './higherOrderComponents/withAuthUser.js';
export { default as withAuthHeader } from './higherOrderComponents/withAuthHeader.js';
export { default as withIsAuthenticated } from './higherOrderComponents/withIsAuthenticated.js';

/*
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
 * last updated 25th August 2021
 */
// Default prop for AuthProvider
// AuthProvider.defaultProps = {
//     cookieDomain: window.location.hostname,
//     cookieSecure: window.location.protocol === 'https:',
// };

export { AuthProvider };
//# sourceMappingURL=index.js.map
