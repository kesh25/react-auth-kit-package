"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var AuthContext_1 = require("../AuthContext");
var reducers_1 = require("../utils/reducers");
var errors_1 = require("../errors");
/**
 *@function
 *@name useSignIn
 *@description Authentication SignIn Hook
 *@returns - Sign In function
 */
function useSignIn() {
    var context = React.useContext(AuthContext_1.default);
    if (context === null) {
        throw new errors_1.AuthKitError('Auth Provider is missing. ' +
            'Please add the AuthProvider before Router');
    }
    return function (signInConfig) {
        var token = signInConfig.token, tokenType = signInConfig.tokenType, authState = signInConfig.authState, expiresIn = signInConfig.expiresIn, refreshToken = signInConfig.refreshToken, refreshTokenExpireIn = signInConfig.refreshTokenExpireIn;
        var expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000);
        if (context.authState.isUsingRefreshToken) {
            // Using the power of refresh token
            if (!!refreshToken && !!refreshTokenExpireIn) {
                // refresh token params are provided
                // sign in with refresh token
                var refreshTokenExpireAt = new Date(new Date().getTime() + refreshTokenExpireIn * 60 * 1000);
                context.dispatch((0, reducers_1.doSignIn)({
                    auth: {
                        token: token,
                        type: tokenType,
                        expiresAt: expTime,
                    },
                    userState: authState ? authState : null,
                    refresh: {
                        token: refreshToken,
                        expiresAt: refreshTokenExpireAt,
                    },
                }));
                return true;
            }
            else {
                // refresh token params are not provided
                // throw an error
                throw new errors_1.AuthKitError('Make sure you given "refreshToken" and  ' +
                    '"refreshTokenExpireIn" parameter');
            }
        }
        else {
            // Not using refresh token
            if (!!refreshToken && !!refreshTokenExpireIn) {
                // params are not expected but provided
                // throw an error
                throw new Error('The app doesn\'t implement \'refreshToken\' ' +
                    'feature.\nSo you have to implement refresh token feature ' +
                    'from \'AuthProvider\' before using it.');
            }
            else {
                // sign in without the refresh token
                context.dispatch((0, reducers_1.doSignIn)({
                    auth: {
                        token: token,
                        type: tokenType,
                        expiresAt: expTime,
                    },
                    userState: authState ? authState : null,
                    refresh: null,
                }));
                return true;
            }
        }
    };
}
/**
 *@exports useSignIn
 */
exports.default = useSignIn;
