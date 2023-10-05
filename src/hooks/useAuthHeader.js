"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AuthContext_1 = require("../AuthContext");
var errors_1 = require("../errors");
var utils_1 = require("../utils/utils");
/**
 *
 */
function useAuthHeader() {
    var c = React.useContext(AuthContext_1.default);
    if (c === null) {
        throw new errors_1.AuthKitError('Auth Provider is missing. ' +
            'Please add the AuthProvider before Router');
    }
    return function () {
        if (c.authState.auth && (0, utils_1.isAuthenticated)(c.authState)) {
            return "".concat(c.authState.auth.type, " ").concat(c.authState.auth.token);
        }
        else {
            return "";
        }
    };
}
exports.default = useAuthHeader;
