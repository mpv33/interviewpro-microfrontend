exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_5__]);
_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function App({ Component, pageProps }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // Define page descriptions for specific pages
    const pageDescriptions = {
        "/javascript": "Ace JavaScript Interview Questions: Dive into essential concepts and ace your JavaScript interviews!",
        "/react": "Master ReactJS Interview Questions: Explore React concepts and excel in ReactJS interviews!",
        "/dsa": "Crack DSA Interviews: Dive into Data Structures and Algorithms to crack technical interviews!"
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            const path = url.split("?")[0]; // Remove query parameters
            const pageDescription = pageDescriptions[path] || defaultDescription;
            document.title = generatePageTitle(path) || "InterviewPro";
            const metaDescriptionTag = document.querySelector('meta[name="description"]');
            if (metaDescriptionTag) {
                metaDescriptionTag.setAttribute("content", pageDescription);
            }
        };
        const generatePageTitle = (path)=>{
            const segments = path.split("/").filter(Boolean);
            if (segments.length === 1) {
                return `InterviewPro-${capitalizeFirstLetter(segments[0])}`;
            } else if (segments.length > 1) {
                return segments.map((segment)=>capitalizeFirstLetter(segment)).join("-");
            }
            return null;
        };
        const capitalizeFirstLetter = (str)=>{
            return str.charAt(0).toUpperCase() + str.slice(1);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    // Default description for the entire site
    const defaultDescription = "InterviewPro offers high-quality free technical content on Data Structures and Algorithms (DSA), JavaScript, ReactJS, NodeJs, and NextJs, catering to last-minute preparation for the most commonly asked interview questions.";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "InterviewPro"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: defaultDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: "InterviewPro"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "apple-mobile-web-app-title",
                        content: "InterviewPro"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:image",
                        content: "/card/c1.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "InterviewPro, Data Structures, Algorithms, JavaScript, ReactJS, NodeJs, NextJs, interview questions"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "author",
                        content: "Mateshwari verma"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_5__.Analytics, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;