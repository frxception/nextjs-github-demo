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
exports.getServerSideProps = void 0;
var react_1 = require("react");
var head_1 = require("next/head");
var image_1 = require("next/image");
var github_1 = require("@src/service/github");
var RepoList_1 = require("@src/components/RepoList");
var Home_module_css_1 = require("@styles/Home.module.css");
var NavBar_1 = require("@src/components/NavBar");
var Search_1 = require("@src/components/Search");
var Home = function (props) {
    var _a = react_1.useState(props.searchText), searchText = _a[0], setSearchText = _a[1];
    var _b = react_1.useState(props.repos), repos = _b[0], setRepos = _b[1];
    var _c = react_1.useState(''), language = _c[0], setLanguage = _c[1];
    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1];
    var onSearchTextChange = function (text) {
        setSearchText(text);
        if (text) {
            loadRepos(text, language);
        }
    };
    var onLanguageChange = function (language) {
        setLanguage(language);
        loadRepos(searchText, language);
    };
    var loadRepos = function (searchText, language) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    return [4 /*yield*/, github_1.searchRepos(searchText, language)];
                case 1:
                    res = _a.sent();
                    if (res && res.data) {
                        setLoading(false);
                        setRepos(res.data.items);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement("div", { className: Home_module_css_1["default"].container },
            react_1["default"].createElement(head_1["default"], null,
                react_1["default"].createElement("title", null, "Create Next App"),
                react_1["default"].createElement("meta", { name: "description", content: "Generated by create next app" }),
                react_1["default"].createElement("link", { rel: "icon", href: "/favicon.ico" })),
            react_1["default"].createElement("main", { className: Home_module_css_1["default"].main },
                react_1["default"].createElement("div", { className: Home_module_css_1["default"].githubImg },
                    react_1["default"].createElement(image_1["default"], { src: "/github-img.png", alt: "Gihub Image Logo", width: 400, height: 280 })),
                react_1["default"].createElement(Search_1["default"], { searchText: searchText, language: language, onSearchTextChange: onSearchTextChange, onLanguageChange: onLanguageChange }),
                react_1["default"].createElement(RepoList_1["default"], { loading: loading, repos: repos })),
            react_1["default"].createElement("footer", { className: Home_module_css_1["default"].footer },
                react_1["default"].createElement("a", { href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", target: "_blank", rel: "noopener noreferrer" },
                    "Powered by",
                    ' ',
                    react_1["default"].createElement("span", { className: Home_module_css_1["default"].logo },
                        react_1["default"].createElement(image_1["default"], { src: "/vercel.svg", alt: "Vercel Logo", width: 72, height: 16 })))))));
};
exports.getServerSideProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var searchText, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchText = 'beer';
                return [4 /*yield*/, github_1.searchRepos(searchText, "")];
            case 1:
                res = _a.sent();
                return [2 /*return*/, {
                        props: {
                            searchText: searchText,
                            repos: res.data.items
                        }
                    }];
        }
    });
}); };
exports["default"] = Home;