"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Avatar_module_css_1 = require("@styles/Avatar.module.css");
var link_1 = require("next/link");
var UserAvatar = function (_a) {
    var user = _a.user;
    return (react_1["default"].createElement("div", { className: Avatar_module_css_1["default"].user },
        react_1["default"].createElement("div", { className: Avatar_module_css_1["default"].avatar },
            react_1["default"].createElement("img", { className: Avatar_module_css_1["default"].isRounded, width: "80", src: user.avatar_url, alt: "avatar" })),
        react_1["default"].createElement("div", { className: Avatar_module_css_1["default"].userLink },
            react_1["default"].createElement(link_1["default"], { href: "/profile/[id]", as: "/profile/" + user.login },
                react_1["default"].createElement("a", null, user.login)))));
};
exports["default"] = UserAvatar;
