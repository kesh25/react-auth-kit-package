"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withIsAuthenticated = exports.withAuthHeader = exports.withAuthUser = exports.withSignOut = exports.withSignIn = exports.useIsAuthenticated = exports.useAuthHeader = exports.useAuthUser = exports.useSignOut = exports.useSignIn = exports.createRefresh = exports.RequireAuth = exports.AuthProvider = void 0;
var AuthProvider_1 = require("./AuthProvider");
exports.AuthProvider = AuthProvider_1.default;
var createRefresh_1 = require("./createRefresh");
exports.createRefresh = createRefresh_1.default;
var PrivateRoute_1 = require("./PrivateRoute");
exports.RequireAuth = PrivateRoute_1.default;
var useSignIn_1 = require("./hooks/useSignIn");
exports.useSignIn = useSignIn_1.default;
var useSignOut_1 = require("./hooks/useSignOut");
exports.useSignOut = useSignOut_1.default;
var useAuthUser_1 = require("./hooks/useAuthUser");
exports.useAuthUser = useAuthUser_1.default;
var useAuthHeader_1 = require("./hooks/useAuthHeader");
exports.useAuthHeader = useAuthHeader_1.default;
var useIsAuthenticated_1 = require("./hooks/useIsAuthenticated");
exports.useIsAuthenticated = useIsAuthenticated_1.default;
var withSignIn_1 = require("./higherOrderComponents/withSignIn");
exports.withSignIn = withSignIn_1.default;
var withSignOut_1 = require("./higherOrderComponents/withSignOut");
exports.withSignOut = withSignOut_1.default;
var withAuthUser_1 = require("./higherOrderComponents/withAuthUser");
exports.withAuthUser = withAuthUser_1.default;
var withAuthHeader_1 = require("./higherOrderComponents/withAuthHeader");
exports.withAuthHeader = withAuthHeader_1.default;
var withIsAuthenticated_1 = require("./higherOrderComponents/withIsAuthenticated");
exports.withIsAuthenticated = withIsAuthenticated_1.default;
