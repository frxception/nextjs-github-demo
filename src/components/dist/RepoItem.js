"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var fa_1 = require("react-icons/fa");
var UserAvatar_1 = require("./UserAvatar");
var RepoItem_module_css_1 = require("@styles/RepoItem.module.css");
var RepoListItem = function (_a) {
    var repo = _a.repo;
    var cutDescription = function (description) {
        if (description && description.length > 100) {
            return description.slice(0, 100) + '...';
        }
        return description;
    };
    return (react_1["default"].createElement("div", { className: RepoItem_module_css_1["default"].repoListItem + " box" },
        react_1["default"].createElement("div", { className: RepoItem_module_css_1["default"].repoName },
            react_1["default"].createElement(link_1["default"], { href: "/repo/[id]", as: "/repo/" + repo.id },
                react_1["default"].createElement("a", null, repo.name))),
        react_1["default"].createElement(UserAvatar_1["default"], { user: repo.owner }),
        react_1["default"].createElement("p", { className: RepoItem_module_css_1["default"].description }, cutDescription(repo.description)),
        react_1["default"].createElement("div", { className: RepoItem_module_css_1["default"].footer },
            react_1["default"].createElement("div", { className: RepoItem_module_css_1["default"].counters },
                react_1["default"].createElement("div", { className: RepoItem_module_css_1["default"].counter },
                    react_1["default"].createElement(fa_1.FaStar, null),
                    react_1["default"].createElement("span", null, repo.stargazers_count)),
                react_1["default"].createElement("div", { className: RepoItem_module_css_1["default"].counter },
                    react_1["default"].createElement(fa_1.FaCodeBranch, null),
                    react_1["default"].createElement("span", null, repo.forks_count))),
            react_1["default"].createElement("div", { className: RepoItem_module_css_1["default"].language },
                react_1["default"].createElement("span", null, repo.language)))));
};
exports["default"] = RepoListItem;
