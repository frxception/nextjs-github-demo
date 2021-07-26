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
exports.__esModule = true;
/* eslint-disable react/jsx-props-no-spreading */
var react_1 = require("react");
var head_1 = require("next/head");
require("@styles/globals.css");
var NavBar_1 = require("@src/components/NavBar");
var MyApp = function (_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(head_1["default"], null,
            react_1["default"].createElement("title", null, "My App"),
            react_1["default"].createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            react_1["default"].createElement("link", { rel: "apple-touch-icon", href: "%PUBLIC_URL%/logo192.png" }),
            react_1["default"].createElement("link", { rel: "manifest", href: "%PUBLIC_URL%/manifest.json" })),
        react_1["default"].createElement(NavBar_1["default"], null),
        react_1["default"].createElement(Component, __assign({}, pageProps))));
};
exports["default"] = MyApp;
