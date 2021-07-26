"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RepoItem_1 = require("./RepoItem");
var RepoList_module_css_1 = require("@styles/RepoList.module.css");
var RepoList = function (_a) {
    var repos = _a.repos, loading = _a.loading;
    if (loading) {
        return react_1["default"].createElement("img", { src: "/img/loader.gif", className: RepoList_module_css_1["default"].loader });
    }
    if (!repos || repos.length === 0) {
        return react_1["default"].createElement("span", { className: RepoList_module_css_1["default"].message }, "No repositories found.");
    }
    return (react_1["default"].createElement("div", { className: RepoList_module_css_1["default"].repoList }, repos.map(function (repo) { return (react_1["default"].createElement(RepoItem_1["default"], { key: repo.id, repo: repo })); })));
};
exports["default"] = RepoList;
