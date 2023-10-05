"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSignOut = exports.doRefresh = exports.doSignIn = exports.authReducer = void 0;
var actions_1 = require("./actions");
/**
 * Auth Reducer
 * Used in auth state
 * @param state
 * @param action
 */
function authReducer(state, action) {
    switch (action.type) {
        case actions_1.ActionType.SignIn:
            return __assign(__assign({}, state), { auth: action.payload.auth, refresh: action.payload.refresh, userState: action.payload.userState, isSignIn: true });
        case actions_1.ActionType.SignOut:
            return __assign(__assign({}, state), { auth: null, refresh: null, userState: null, isSignIn: false });
        case actions_1.ActionType.RefreshToken:
            if (state.isSignIn && state.auth && state.refresh) {
                return __assign(__assign({}, state), { auth: {
                        token: action.payload.newAuthToken ?
                            action.payload.newAuthToken : state.auth.token,
                        type: state.auth.type,
                        expiresAt: action.payload.newAuthTokenExpireIn ?
                            new Date(new Date().getTime() +
                                action.payload.newAuthTokenExpireIn * 60 * 1000) :
                            state.auth.expiresAt,
                    }, refresh: {
                        token: action.payload.newRefreshToken ?
                            action.payload.newRefreshToken : state.refresh.token,
                        expiresAt: action.payload.newRefreshTokenExpiresIn ?
                            new Date(new Date().getTime() +
                                action.payload.newRefreshTokenExpiresIn * 60 * 1000) :
                            state.refresh.expiresAt,
                    }, userState: action.payload.newAuthUserState ?
                        action.payload.newAuthUserState : state.userState });
            }
            else {
                return state;
            }
    }
}
exports.authReducer = authReducer;
// Helper functions
/**
 * used to make sign in
 * @param signInParams
 */
function doSignIn(signInParams) {
    return ({
        type: actions_1.ActionType.SignIn,
        payload: signInParams,
    });
}
exports.doSignIn = doSignIn;
/**
 * used to refresh the Token
 * @param refreshTokenParam
 */
function doRefresh(refreshTokenParam) {
    return ({
        type: actions_1.ActionType.RefreshToken,
        payload: refreshTokenParam,
    });
}
exports.doRefresh = doRefresh;
/**
 * Used to make sign out
 */
function doSignOut() {
    return ({
        type: actions_1.ActionType.SignOut,
    });
}
exports.doSignOut = doSignOut;
