"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Search_module_css_1 = require("@styles/Search.module.css");
var link_1 = require("next/link");
var ButtonLink = function (_a) {
    var href = _a.href, text = _a.text, _b = _a.type, type = _b === void 0 ? 'primary' : _b, target = _a.target, external = _a.external;
    var types = {
        primary: 'is-primary',
        success: 'is-success',
        danger: 'is-danger',
        dark: 'is-dark',
        light: 'is-light'
    };
    var buttonClass = "button " + types[type];
    if (external) {
        return (react_1["default"].createElement("div", { className: Search_module_css_1["default"].button },
            react_1["default"].createElement("a", { className: buttonClass, target: target, href: href }, text)));
    }
    return (react_1["default"].createElement("div", { className: Search_module_css_1["default"].button },
        react_1["default"].createElement(link_1["default"], { href: href },
            react_1["default"].createElement("a", { className: buttonClass, target: target }, text))));
};
exports["default"] = ButtonLink;
