"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Search_module_css_1 = require("@styles/Search.module.css");
var Select = function (_a) {
    var label = _a.label, value = _a.value, onChange = _a.onChange, options = _a.options, className = _a.className;
    var selectClass = className ? className + " field" : 'field';
    return (react_1["default"].createElement("div", { className: selectClass },
        react_1["default"].createElement("div", { className: "control" },
            react_1["default"].createElement("div", { className: "select" },
                react_1["default"].createElement("select", { className: Search_module_css_1["default"].selectInput, value: value, onChange: function (e) { return onChange(e.target.value); } }, options.map(function (option) { return (react_1["default"].createElement("option", { key: option.value, value: option.value }, option.label)); }))))));
};
exports["default"] = Select;
