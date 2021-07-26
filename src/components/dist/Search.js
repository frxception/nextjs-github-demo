"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var text_input_1 = require("./shared/text-input");
var select_1 = require("./shared/select");
var languages_1 = require("@src/config/languages");
var Search_module_css_1 = require("@styles/Search.module.css");
var Search = function (props) {
    var language = props.language, searchText = props.searchText, onSearchTextChange = props.onSearchTextChange, onLanguageChange = props.onLanguageChange;
    var languages = __spreadArrays([{ value: '', label: 'All' }], languages_1["default"]);
    return (react_1["default"].createElement("div", { className: Search_module_css_1["default"].search },
        react_1["default"].createElement(text_input_1["default"], { className: Search_module_css_1["default"].searchInput, label: "Repo Search", value: searchText, placeholder: "Search repo...", onChange: function (value) { return onSearchTextChange(value); } }),
        react_1["default"].createElement(select_1["default"], { className: Search_module_css_1["default"].languageSelect, label: "Language", value: language, options: languages, placeholder: "Select Language...", onChange: function (value) { return onLanguageChange(value); } })));
};
exports["default"] = Search;
