import * as React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import AuthContext from './AuthContext.js';
import { doSignOut } from './utils/reducers.js';
import { AuthKitError } from './errors.js';
import { isAuthenticated } from './utils/utils.js';

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
 */
/**
 * Private Route for Components
 *
 * @remarks
 * This Component is based on {@link https://reactrouter.com/web/api/Route | reactrouter.Route}.
 * So you need to install react-route-dom before use it
 *
 * @param props
 */
var RequireAuth = function (_a) {
    var children = _a.children, loginPath = _a.loginPath;
    var context = React.useContext(AuthContext);
    if (context === null) {
        throw new AuthKitError('Auth Provider is missing. ' +
            'Please add the AuthProvider before Router');
    }
    var location = useLocation();
    if (!isAuthenticated(context.authState)) {
        // Redirect them to the /login page, but save the current location they
        // were trying to go to when they were redirected. This allows us to
        // send them along to that page after they login, which is a nicer
        // user experience than dropping them off on the home page.
        context.dispatch(doSignOut());
        return React.createElement(Navigate, { to: loginPath, state: { from: location }, replace: true });
    }
    return children;
};

export { RequireAuth as default };
//# sourceMappingURL=PrivateRoute.js.map
