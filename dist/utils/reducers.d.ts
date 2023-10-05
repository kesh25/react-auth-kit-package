/**
 * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
 * @fileoverview Reducers for useReducer
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
import { AuthKitStateInterface } from '../types';
import { AuthActions, SignInAction, SignInActionPayload, SignOutAction, RefreshTokenAction, RefreshTokenActionPayload } from './actions';
/**
 * Auth Reducer
 * Used in auth state
 * @param state
 * @param action
 */
export declare function authReducer(state: AuthKitStateInterface, action: AuthActions): AuthKitStateInterface;
/**
 * used to make sign in
 * @param signInParams
 */
export declare function doSignIn(signInParams: SignInActionPayload): SignInAction;
/**
 * used to refresh the Token
 * @param refreshTokenParam
 */
export declare function doRefresh(refreshTokenParam: RefreshTokenActionPayload): RefreshTokenAction;
/**
 * Used to make sign out
 */
export declare function doSignOut(): SignOutAction;
