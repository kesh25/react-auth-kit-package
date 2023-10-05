"use strict";
/**
 * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
 * @fileoverview Error file
 * @copyright Arkadip Bhattacharya 2023
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthKitError = void 0;
/**
 * @class
 * @name AuthKitError
 * @extends Error
 *
 * General Auth kit error class
 */
var AuthKitError = /** @class */ (function (_super) {
    __extends(AuthKitError, _super);
    /**
       * @constructor
       * @param message - Error message
       */
    function AuthKitError(message) {
        return _super.call(this, message) || this;
    }
    return AuthKitError;
}(Error));
exports.AuthKitError = AuthKitError;
