"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ApiHandler_baseUrl;
class ApiHandler {
    constructor(baseUrl) {
        _ApiHandler_baseUrl.set(this, void 0);
        __classPrivateFieldSet(this, _ApiHandler_baseUrl, baseUrl, "f");
    }
    fetchData(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = __classPrivateFieldGet(this, _ApiHandler_baseUrl, "f") + endpoint;
                const response = yield fetch(url);
                if (!response.ok) {
                    throw new Error(`${response.status}`);
                }
                const data = yield response.json();
                return data;
            }
            catch (error) {
                throw new Error(`에러 발생: ${error}`);
            }
        });
    }
}
_ApiHandler_baseUrl = new WeakMap();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = 'https://jsonplaceholder.typicode.com';
        const apiHandler = new ApiHandler(baseUrl);
        try {
            const posts = yield apiHandler.fetchData('/posts');
            posts.forEach(post => console.log(post));
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
