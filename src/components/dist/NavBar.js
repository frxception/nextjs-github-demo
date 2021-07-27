"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var NavBar_module_css_1 = require("@styles/NavBar.module.css");
var logo_png_1 = require("../assets/images/logo.png");
var image_1 = require("next/image");
var Logo = function () { return (react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].logoWrapper },
    react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].logoImg },
        react_1["default"].createElement(image_1["default"], { src: logo_png_1["default"], alt: "NextJS" })),
    react_1["default"].createElement("h2", { className: NavBar_module_css_1["default"].logoTxth2 }, "GitHub Demo"))); };
var ActionButtons = function () { return (react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].actionContainer },
    react_1["default"].createElement("button", { className: NavBar_module_css_1["default"].homeBtn },
        react_1["default"].createElement(link_1["default"], { href: "/" }, "Home")),
    react_1["default"].createElement("button", { className: NavBar_module_css_1["default"].aboutBtn }, "About"))); };
var NavBar = function () {
    return (react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].container },
        react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].leftSide },
            react_1["default"].createElement(Logo, null)),
        react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].mainLinks }),
        react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].rightSide }, react_1["default"].createElement(ActionButtons, null))));
};
exports["default"] = NavBar;
