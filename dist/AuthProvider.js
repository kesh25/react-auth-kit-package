import * as React from 'react';
import AuthContext from './AuthContext.js';
import TokenObject from './TokenObject.js';
import { authReducer, doRefresh } from './utils/reducers.js';
import { useInterval } from './utils/hooks.js';
import { AuthKitError } from './errors.js';

/**
 * AuthProvider - The Authentication Context Provider
 *
 * @param children
 * @param authStorageName
 * @param cookieDomain
 * @param cookieSecure
 *
 * @return Functional Component
 */
var AuthProvider = function (_a) {
    var children = _a.children, authType = _a.authType, authName = _a.authName, _b = _a.cookieDomain, cookieDomain = _b === void 0 ? window === null || window === void 0 ? void 0 : window.location.hostname : _b, _c = _a.cookieSecure, cookieSecure = _c === void 0 ? (window === null || window === void 0 ? void 0 : window.location.protocol) === 'https' : _c, refresh = _a.refresh;
    if (authType === 'cookie') {
        if (!cookieDomain) {
            throw new AuthKitError('authType \'cookie\' ' +
                'requires \'cookieDomain\' and \'cookieSecure\' ' +
                'props in AuthProvider');
        }
    }
    var refreshTokenName = refresh ? "".concat(authName, "_refresh") : null;
    var tokenObject = new TokenObject(authName, authType, refreshTokenName, cookieDomain, cookieSecure);
    var _d = React.useReducer(authReducer, tokenObject.initialToken()), authState = _d[0], dispatch = _d[1];
    if (refresh) {
        useInterval(function () {
            var _a, _b, _c, _d;
            refresh
                .refreshApiCallback({
                authToken: (_a = authState.auth) === null || _a === void 0 ? void 0 : _a.token,
                authTokenExpireAt: (_b = authState.auth) === null || _b === void 0 ? void 0 : _b.expiresAt,
                authUserState: authState.userState,
                refreshToken: (_c = authState.refresh) === null || _c === void 0 ? void 0 : _c.token,
                refreshTokenExpiresAt: (_d = authState.refresh) === null || _d === void 0 ? void 0 : _d.expiresAt,
            })
                .then(function (result) {
                // IF the API call is successful then refresh the AUTH state
                if (result.isSuccess) {
                    // store the new value using the state update
                    dispatch(doRefresh(result));
                }
            })
                .catch(function () {
                // do something in future
            });
        }, authState.isSignIn ? refresh.interval : null);
    }
    React.useEffect(function () {
        tokenObject.syncTokens(authState);
    }, [authState]);
    return (React.createElement(AuthContext.Provider, { value: { authState: authState, dispatch: dispatch } }, children));
};

export { AuthProvider as default };
//# sourceMappingURL=AuthProvider.js.map
