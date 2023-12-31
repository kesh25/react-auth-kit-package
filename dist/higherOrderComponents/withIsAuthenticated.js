import { __assign } from '../_virtual/_tslib.js';
import * as React from 'react';
import { AuthContextConsumer } from '../AuthContext.js';
import { AuthKitError } from '../errors.js';
import { isAuthenticated } from '../utils/utils.js';

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
 */
/**
 * @public
 * @function
 * @name withIsAuthenticated
 * @description Inject Authentication status inside the Component's Prop
 * @param Component
 */
function withIsAuthenticated(Component) {
    return function (props) {
        return (React.createElement(AuthContextConsumer, null, function (c) {
            if (c === null) {
                throw new AuthKitError('Auth Provider is missing. ' +
                    'Please add the AuthProvider before Router');
            }
            if (c.authState.auth && isAuthenticated(c.authState)) {
                return React.createElement(Component, __assign({}, props, { isAuth: true }));
            }
            else {
                return React.createElement(Component, __assign({}, props, { isAuth: false }));
            }
        }));
    };
}

export { withIsAuthenticated as default };
//# sourceMappingURL=withIsAuthenticated.js.map
