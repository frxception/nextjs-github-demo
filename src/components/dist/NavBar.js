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
var react_1 = require("react");
var NavBar_module_css_1 = require("../../styles/NavBar.module.css");
var framer_motion_1 = require("framer-motion");
var logo_png_1 = require("../assets/images/logo.png");
var image_1 = require("next/image");
var Logo = function () { return (react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].logoWrapper },
    react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].logoImg },
        react_1["default"].createElement(image_1["default"], { src: logo_png_1["default"], alt: "NextJS" })),
    react_1["default"].createElement("h2", { className: NavBar_module_css_1["default"].logoTxth2 }, "GitHub Demo"))); };
var NavLinks = function () { return (react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].navLinksContainer },
    react_1["default"].createElement("ul", { className: NavBar_module_css_1["default"].linksWrapper },
        react_1["default"].createElement("li", { className: NavBar_module_css_1["default"].linkItem },
            react_1["default"].createElement("a", { href: "#", className: NavBar_module_css_1["default"].linkItemTxt }, "xxxxx")),
        react_1["default"].createElement("li", { className: NavBar_module_css_1["default"].linkItem },
            react_1["default"].createElement("a", { href: "#", className: NavBar_module_css_1["default"].linkItemTxt }, "xxxxx")),
        react_1["default"].createElement("li", { className: NavBar_module_css_1["default"].linkItem },
            react_1["default"].createElement("a", { href: "#", className: NavBar_module_css_1["default"].linkItemTxt }, "xxxxx"))))); };
var ActionButtons = function () { return (react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].actionContainer },
    react_1["default"].createElement("button", { className: NavBar_module_css_1["default"].homeBtn }, "Home"),
    react_1["default"].createElement("button", { className: NavBar_module_css_1["default"].aboutBtn }, "About"))); };
var MenuToggler = function (_a) {
    var toggle = _a.toggle, isOpen = _a.isOpen;
    var transition = { duration: 0.33 };
    var Path = function (props) { return (react_1["default"].createElement(framer_motion_1.motion.path, __assign({ fill: "transparent", strokeLinecap: "round", strokeWidth: "3" }, props))); };
    return (react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].menuTogglerBtn, onClick: toggle },
        react_1["default"].createElement("svg", { width: "23", height: "23", viewBox: "0 0 23 23" },
            react_1["default"].createElement(Path, { animate: isOpen ? "open" : "closed", initial: false, variants: {
                    closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 18%)" },
                    open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 18%)" }
                }, transition: transition }),
            react_1["default"].createElement(Path, { d: "M 2 9.423 L 20 9.423", stroke: "hsl(0, 0%, 18%)", animate: isOpen ? "open" : "closed", initial: false, variants: {
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }, transition: transition }),
            react_1["default"].createElement(Path, { animate: isOpen ? "open" : "closed", initial: false, variants: {
                    closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 18%)" },
                    open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 18%)" }
                }, transition: transition }))));
};
var MobileNavLinks = function (props) {
    var _a = react_1.useState(false), isOpen = _a[0], setOpen = _a[1];
    return (react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].mobileNavLinksContainer },
        react_1["default"].createElement(MenuToggler, { isOpen: isOpen, toggle: function () { return setOpen(!isOpen); } }),
        react_1["default"].createElement("ul", { className: NavBar_module_css_1["default"].mobileLinksWrapper },
            react_1["default"].createElement("li", { className: NavBar_module_css_1["default"].mobileLinkItem },
                react_1["default"].createElement("a", { href: "#", className: NavBar_module_css_1["default"].mobileLinkTxt }, "mmmmmm")),
            react_1["default"].createElement("li", { className: NavBar_module_css_1["default"].mobileLinkItem },
                react_1["default"].createElement("a", { href: "#", className: NavBar_module_css_1["default"].mobileLinkTxt }, "mmmmmm")),
            react_1["default"].createElement("li", { className: NavBar_module_css_1["default"].mobileLinkItem },
                react_1["default"].createElement("a", { href: "#", className: NavBar_module_css_1["default"].mobileLinkTxt }, "mmmmmm")),
            react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].mobileLinkDivider },
                react_1["default"].createElement(ActionButtons, null)))));
};
function NavBar() {
    var _a = react_1.useState(true), isMobile = _a[0], setIsMobile = _a[1];
    react_1.useEffect(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent)) {
            setIsMobile(true);
        }
        else {
            setIsMobile(false);
        }
    }, []);
    return (react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].container },
        react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].leftSide },
            react_1["default"].createElement(Logo, null)),
        react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].mainLinks }, !isMobile && react_1["default"].createElement(NavLinks, null)),
        react_1["default"].createElement("div", { className: NavBar_module_css_1["default"].rightSide }, !isMobile ? "" : react_1["default"].createElement(ActionButtons, null))));
}
exports["default"] = NavBar;
