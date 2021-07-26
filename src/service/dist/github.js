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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getProfile = exports.getRepo = exports.searchRepos = void 0;
var axios_1 = require("axios");
var axiosConfig = {
    baseURL: 'https://api.github.com/',
    auth: {
        username: process.env.GITHUB_CLIENT_ID,
        password: process.env.GITHUB_CLIENT_SECRET
    }
};
var axiosGetCancellable = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var cancelConfig, res, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cancelConfig = {
                    request: null,
                    cancelToken: null
                };
                if (cancelConfig.request) {
                    cancelConfig.request.cancel('canceled');
                }
                cancelConfig.request = axios_1["default"].CancelToken.source();
                cancelConfig.cancelToken = cancelConfig.request.token;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1["default"].get(url, cancelConfig)];
            case 2:
                res = _a.sent();
                return [2 /*return*/, res];
            case 3:
                error_1 = _a.sent();
                if (error_1.message !== 'canceled') {
                    throw error_1;
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var searchRepos = function (searchText, language) { return __awaiter(void 0, void 0, void 0, function () {
    var query;
    return __generator(this, function (_a) {
        query = language ? searchText + "+language:" + language : searchText;
        if (isServer()) {
            return [2 /*return*/, axios_1["default"].get("search/repositories?q=" + query + "&sort=stars&order=desc", axiosConfig)];
        }
        return [2 /*return*/, axiosGetCancellable("api/search?q=" + query + "&sort=stars&order=desc")];
    });
}); };
exports.searchRepos = searchRepos;
function getRepo(id) {
    return axios_1["default"].get("repositories/" + id, axiosConfig);
}
exports.getRepo = getRepo;
function getProfile(username) {
    return axios_1["default"].get("users/" + username, axiosConfig);
}
exports.getProfile = getProfile;
function isServer() {
    return typeof window === 'undefined';
}
