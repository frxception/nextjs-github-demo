"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Search_module_css_1 = require("@styles/Search.module.css");
var TextInput = function (_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, placeholder = _a.placeholder, className = _a.className;
    var textInputClass = className ? className + " field" : 'field';
    return (react_1["default"].createElement("div", { className: textInputClass },
        react_1["default"].createElement("div", { className: Search_module_css_1["default"].control },
            react_1["default"].createElement("input", { className: Search_module_css_1["default"].input, value: value, onChange: function (e) { return onChange(e.target.value); }, placeholder: placeholder }))));
};
exports["default"] = TextInput;
