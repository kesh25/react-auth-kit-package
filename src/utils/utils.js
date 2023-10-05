"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
/**
  *@function
  *@name isAuthenticated
  *@description A utility function to check
  * weather the auth state is justified as athenticated
  * or not
  *
  * It checks if the state in null or not,
  * It the state is not NULL, it checks the expires time.
  */
function isAuthenticated(auth) {
    if (auth.auth) {
        return new Date(auth.auth.expiresAt) > new Date();
    }
    return false;
}
exports.isAuthenticated = isAuthenticated;
