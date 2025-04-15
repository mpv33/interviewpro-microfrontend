"use strict";
(() => {
var exports = {};
exports.id = 79;
exports.ids = [79,660];
exports.modules = {

/***/ 7062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4178);
/* harmony import */ var private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8151);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/reactjs/performance-optimization","pathname":"/reactjs/performance-optimization","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({
          ...options,
          components: {
            App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__["default"],
            Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default()),
          },
          userland: private_next_pages_reactjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__,
        })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2494);
/* harmony import */ var nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6171);
/* harmony import */ var _Users_mateshwariverma_Desktop_interviewpro_mfa_apps_webdev_docs_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3188);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(452);
/* harmony import */ var nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nextra_theme_docs_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nextra_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9575);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__, nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__]);
([nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__, nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__, nextra_mdx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const __nextraPageOptions = {
    MDXContent,
    pageOpts: {
        "filePath": "pages/reactjs/performance-optimization.mdx",
        "route": "/reactjs/performance-optimization",
        "headings": [
            {
                "depth": 2,
                "value": "Performance Optimization in React",
                "id": "performance-optimization-in-react"
            },
            {
                "depth": 3,
                "value": "1. Code Splitting",
                "id": "1-code-splitting"
            },
            {
                "depth": 3,
                "value": "2. Lazy Loading",
                "id": "2-lazy-loading"
            },
            {
                "depth": 3,
                "value": "3. Memoization and Re-renders",
                "id": "3-memoization-and-re-renders"
            },
            {
                "depth": 3,
                "value": "4. Event Handlers",
                "id": "4-event-handlers"
            },
            {
                "depth": 3,
                "value": "5. Virtualization",
                "id": "5-virtualization"
            },
            {
                "depth": 3,
                "value": "6. Debounce/Throttle",
                "id": "6-debouncethrottle"
            },
            {
                "depth": 3,
                "value": "7. Efficient Keys",
                "id": "7-efficient-keys"
            },
            {
                "depth": 3,
                "value": "8. CSS & Images",
                "id": "8-css--images"
            },
            {
                "depth": 3,
                "value": "9. Tree Shaking",
                "id": "9-tree-shaking"
            }
        ],
        "timestamp": 1744753957000,
        "pageMap": [
            {
                "kind": "Meta",
                "data": {
                    "index": {
                        "title": "Getting started"
                    },
                    "javascript": {
                        "title": "JavaScript",
                        "defaultOpen": true
                    },
                    "reactjs": {
                        "title": "ReactJS",
                        "defaultOpen": false
                    },
                    "nextjs": {
                        "title": "NextJs",
                        "defaultOpen": false
                    },
                    "release": {
                        "display": "hidden",
                        "theme": {
                            "navbar": false
                        },
                        "title": "Release"
                    }
                }
            },
            {
                "kind": "MdxPage",
                "name": "index",
                "route": "/",
                "frontMatter": {
                    "title": "Web Development Interview Guide",
                    "description": "Topic-wise roadmap for mastering JavaScript, React, and Next.js for frontend interviews."
                }
            },
            {
                "kind": "Folder",
                "name": "javascript",
                "route": "/javascript",
                "children": [
                    {
                        "kind": "Meta",
                        "data": {
                            "index": "Getting Started",
                            "fundamentals": "Fundamentals",
                            "functions": "Functions",
                            "objects-array": "Objects and Array",
                            "prototypes-inheritance": "Prototypes and Inheritance",
                            "asynchronous-js": "Asynchronous JavaScript",
                            "dom-events": "DOM and Events",
                            "performance-optimization": "Performance Optimization",
                            "advanced-javascript": "Advanced JavaScript",
                            "tricky-js-output": "Tricky Js output",
                            "coding-challenges": "Coding Challenges"
                        }
                    },
                    {
                        "kind": "MdxPage",
                        "name": "advanced-javascript",
                        "route": "/javascript/advanced-javascript"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "asynchronous-js",
                        "route": "/javascript/asynchronous-js"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "coding-challenges",
                        "route": "/javascript/coding-challenges"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "dom-events",
                        "route": "/javascript/dom-events"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "functions",
                        "route": "/javascript/functions"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "fundamentals",
                        "route": "/javascript/fundamentals"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "index",
                        "route": "/javascript"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "objects-array",
                        "route": "/javascript/objects-array"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "performance-optimization",
                        "route": "/javascript/performance-optimization"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "prototypes-inheritance",
                        "route": "/javascript/prototypes-inheritance"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "tricky-js-output",
                        "route": "/javascript/tricky-js-output"
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "nextjs",
                "route": "/nextjs",
                "children": [
                    {
                        "kind": "Meta",
                        "data": {
                            "index": "Getting Started",
                            "fundamentals": "Fundamentals",
                            "api-routes": "API Routes",
                            "ssg-ssr": "SSG and SSR",
                            "dynamic-routing": "Dynamic Routing",
                            "performance-optimization": "Performance Optimization",
                            "deployment": "Deployment",
                            "advanced-nextjs": "Advanced NextJs",
                            "testing": "Testing",
                            "seo": "SEO",
                            "coding-challenges": "Coding Challenges"
                        }
                    },
                    {
                        "kind": "MdxPage",
                        "name": "advanced-nextjs",
                        "route": "/nextjs/advanced-nextjs"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "api-routes",
                        "route": "/nextjs/api-routes"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "coding-challenges",
                        "route": "/nextjs/coding-challenges"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "deployment",
                        "route": "/nextjs/deployment"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "dynamic-routing",
                        "route": "/nextjs/dynamic-routing"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "fundamentals",
                        "route": "/nextjs/fundamentals"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "index",
                        "route": "/nextjs"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "performance-optimization",
                        "route": "/nextjs/performance-optimization"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "seo",
                        "route": "/nextjs/seo"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "ssg-ssr",
                        "route": "/nextjs/ssg-ssr"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "testing",
                        "route": "/nextjs/testing"
                    }
                ]
            },
            {
                "kind": "Folder",
                "name": "reactjs",
                "route": "/reactjs",
                "children": [
                    {
                        "kind": "Meta",
                        "data": {
                            "index": "Getting Started",
                            "fundamentals": "Fundamentals",
                            "react-routing": "React Routing",
                            "react-hooks": "React Hooks",
                            "state-management": "State Management",
                            "performance-optimization": "Performance Optimization",
                            "react-testing": "React Testing",
                            "advanced-react": "Advanced ReactJs",
                            "coding-challenges": "Coding Challenges"
                        }
                    },
                    {
                        "kind": "MdxPage",
                        "name": "advanced-react",
                        "route": "/reactjs/advanced-react"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "coding-challenges",
                        "route": "/reactjs/coding-challenges"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "fundamentals",
                        "route": "/reactjs/fundamentals"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "index",
                        "route": "/reactjs"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "performance-optimization",
                        "route": "/reactjs/performance-optimization"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "react-hooks",
                        "route": "/reactjs/react-hooks"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "react-routing",
                        "route": "/reactjs/react-routing"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "react-testing",
                        "route": "/reactjs/react-testing"
                    },
                    {
                        "kind": "MdxPage",
                        "name": "state-management",
                        "route": "/reactjs/state-management"
                    }
                ]
            },
            {
                "kind": "MdxPage",
                "name": "release",
                "route": "/release"
            }
        ],
        "flexsearch": {
            "codeblocks": true
        },
        "title": "Performance Optimization"
    },
    pageNextRoute: "/reactjs/performance-optimization",
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    themeConfig: _Users_mateshwariverma_Desktop_interviewpro_mfa_apps_webdev_docs_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        h2: "h2",
        p: "p",
        h3: "h3",
        strong: "strong",
        ul: "ul",
        li: "li",
        code: "code",
        pre: "pre",
        span: "span",
        ol: "ol"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "performance-optimization-in-react",
                children: "Performance Optimization in React"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Performance optimization in React involves strategies to improve application responsiveness and load times. Here’s a detailed look at key techniques:"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "1-code-splitting",
                children: "1. Code Splitting"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Concept:"
                    }),
                    "\nCode splitting optimizes the loading of your application by breaking it into smaller chunks, which are loaded only when needed. This reduces the initial bundle size, leading to faster page loads and improved overall performance."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Implementation:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "Use dynamic ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "import()"
                                    }),
                                    " to asynchronously load modules. For example:"
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Dynamically import a component"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "LazyComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "React"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".lazy"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(() "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "import"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'./LazyComponent'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "));"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "Combine with React's ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Suspense"
                                    }),
                                    " to manage loading states:"
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "<"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "React.Suspense"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "fallback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{<"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">Loading...</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">}>"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "LazyComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " />"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "React.Suspense"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Advanced Considerations:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Chunking Strategies:"
                            }),
                            " Use Webpack or other bundlers to configure chunking strategies, like splitting by routes or libraries."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Error Handling:"
                            }),
                            " Implement error boundaries to handle cases where lazy-loaded components fail to load."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Preloading:"
                            }),
                            " Consider preloading critical chunks for faster user experience when navigating."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Benefits:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Reduces the initial payload, improving load times."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Enhances performance by deferring the loading of non-essential code."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "2-lazy-loading",
                children: "2. Lazy Loading"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Concept:"
                    }),
                    "\nLazy loading delays the loading of components or resources until they are actually needed. This helps in reducing the initial load time and improving performance."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Implementation:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "Use ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "React.lazy()"
                                    }),
                                    " to define components that should be loaded lazily:"
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-keyword)"
                                                },
                                                children: "const"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-constant)"
                                                },
                                                children: "MyComponent"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-keyword)"
                                                },
                                                children: "="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-constant)"
                                                },
                                                children: "React"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-function)"
                                                },
                                                children: ".lazy"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "(() "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-keyword)"
                                                },
                                                children: "=>"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-keyword)"
                                                },
                                                children: "import"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "("
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-string-expression)"
                                                },
                                                children: "'./MyComponent'"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "));"
                                            })
                                        ]
                                    })
                                })
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    "Wrap the lazy-loaded component with ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "React.Suspense"
                                    }),
                                    ":"
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "<"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "React.Suspense"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "fallback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{<"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">Loading...</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">}>"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "MyComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " />"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "React.Suspense"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Benefits:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Improves performance by loading components only when they are required."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Enhances user experience by reducing initial load time."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Note:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Lazy Loading:"
                            }),
                            " Loads components only when they are rendered."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Code Splitting:"
                            }),
                            " Breaks the application into smaller, independently loadable chunks."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Scope:"
                            }),
                            " Lazy loading focuses on individual components; code splitting addresses overall bundle size."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Usage:"
                            }),
                            " Lazy loading is applied within components; code splitting is configured via build tools."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Sure! Let’s dive deeper into each concept with more detailed and practical examples."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "3-memoization-and-re-renders",
                children: "3. Memoization and Re-renders"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Concept:"
                    }),
                    "\nMemoization helps optimize performance by caching the results of expensive computations or preventing unnecessary re-renders of components. This technique is crucial in React to avoid redundant work and improve application responsiveness."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "1. Memoizing Functional Components:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Scenario:"
                                    }),
                                    " You have a component that performs complex rendering based on its props. Without memoization, the component re-renders every time its parent re-renders, even if the props haven't changed."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Example:"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Expensive component"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "ExpensiveComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ({ data }) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "console"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".log"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'Rendering ExpensiveComponent'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">{data}</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">;"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Memoize the component"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "MemoizedExpensiveComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "React"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".memo"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(ExpensiveComponent);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Parent component"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "ParentComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ({ data }) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "MemoizedExpensiveComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "data"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{data} />;"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Explanation:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "ExpensiveComponent"
                                            }),
                                            " is wrapped with ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "React.memo()"
                                            }),
                                            ", so it will only re-render if its ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "data"
                                            }),
                                            " prop changes. If the parent component re-renders but the ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "data"
                                            }),
                                            " prop remains the same, ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "MemoizedExpensiveComponent"
                                            }),
                                            " will not re-render, saving rendering time and resources."
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "2. Memoizing Expensive Calculations:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Scenario:"
                                    }),
                                    " You have a component that performs a computationally intensive operation (e.g., calculating large sums or filtering extensive datasets). Without memoization, this computation happens on every render."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Example:"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "expensiveCalculation"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " (a"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " b) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "console"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".log"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'Computing expensive calculation'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " a "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "*"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " b;"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "MyComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ({ a"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " b }) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Memoize the computation"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "result"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useMemo"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(() "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "expensiveCalculation"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(a"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " b)"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " [a"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " b]);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">Result: {result}</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">;"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Explanation:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "useMemo()"
                                            }),
                                            " caches the result of ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "expensiveCalculation(a, b)"
                                            }),
                                            " based on the dependencies ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "[a, b]"
                                            }),
                                            ". The computation is only recalculated when ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "a"
                                            }),
                                            " or ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "b"
                                            }),
                                            " change, avoiding unnecessary recalculations on every render."
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "4-event-handlers",
                children: "4. Event Handlers"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Concept:"
                    }),
                    "\nMemoizing event handlers prevents unnecessary re-creation of functions on every render. This optimization is beneficial in cases where event handlers are passed as props to child components, reducing the chance of unnecessary re-renders."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "1. Memoizing Event Handlers:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Scenario:"
                                    }),
                                    " A parent component passes an event handler to multiple child components. Without memoization, the event handler function is recreated on every render of the parent, leading to unnecessary re-renders of the child components."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Example:"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "ChildComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "React"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".memo"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(({ onClick }) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "console"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".log"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'Rendering ChildComponent'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "button"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "onClick"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{onClick}>Click Me</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "button"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">;"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "});"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "ParentComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " () "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Memoize the event handler"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "handleClick"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useCallback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(() "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "console"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".log"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'Button clicked!'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " []);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ("
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      {"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "Array"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".from"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "({ length"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: ":"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "5"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " (_"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " i) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ("
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "        <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "ChildComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "key"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{i} "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "onClick"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{handleClick} />"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "      ))}"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    </"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "  );"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Explanation:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "handleClick"
                                            }),
                                            " is wrapped with ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "useCallback()"
                                            }),
                                            ", which returns the same function instance unless dependencies change. This avoids recreating ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "handleClick"
                                            }),
                                            " on every render, preventing unnecessary re-renders of ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "ChildComponent"
                                            }),
                                            "."
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "2. Combining Memoization Techniques:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Scenario:"
                                    }),
                                    " You have a complex UI with several components, some of which are memoized, and others involve expensive calculations and event handlers."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Example:"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Child Component"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "TableRow"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "React"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".memo"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(({ data"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " onRowClick }) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "console"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".log"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'Rendering TableRow'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ("
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "tr"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "onClick"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{() "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "onRowClick"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(data)}>"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "td"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">{"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "data"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".name}</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "td"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    </"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "tr"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "  );"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "});"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Parent Component"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "ParentComponent"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ({ items }) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "handleRowClick"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useCallback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "((data) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "console"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".log"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'Row clicked:'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " data);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " []);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Memoize the filtered data"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "filteredItems"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useMemo"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(() "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "console"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".log"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'Filtering items'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "items"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".filter"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(item "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "item"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".active);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " [items]);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ("
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "table"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "tbody"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "        {"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "filteredItems"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".map"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(item "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ("
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "          <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "TableRow"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "key"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "item"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".id} "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "data"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{item} "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "onRowClick"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{handleRowClick} />"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "        ))}"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      </"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "tbody"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    </"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "table"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "  );"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Explanation:"
                                            }),
                                            " In this example, ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "TableRow"
                                            }),
                                            " is memoized to prevent re-renders if its props don’t change. ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "handleRowClick"
                                            }),
                                            " is memoized with ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "useCallback()"
                                            }),
                                            " to ensure that the function reference remains stable. The filtered data is computed with ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "useMemo()"
                                            }),
                                            " to avoid re-filtering on every render. Combining these techniques ensures that the UI is optimized for performance, with minimal unnecessary re-renders and computations."
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "5-virtualization",
                children: "5. Virtualization"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Concept:"
                    }),
                    "\nVirtualization is a technique for optimizing the rendering of large lists by only rendering the visible portion of the list at any given time. This drastically reduces the number of DOM nodes and improves performance, especially for lists with many items."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Implementation:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "Using ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "react-window"
                                        }),
                                        ":"
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "\n",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                        children: "Scenario:"
                                                    }),
                                                    " You have a long list of items to display, and rendering all items at once can lead to performance issues. Virtualization helps by only rendering the items currently in view."
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "\n",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                    children: "Example:"
                                                })
                                            }),
                                            "\n",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                                "data-language": "javascript",
                                                "data-theme": "default",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                                    "data-language": "javascript",
                                                    "data-theme": "default",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "import"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " React "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "from"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "'react'"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ";"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "import"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " { FixedSizeList "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "as"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " List } "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "from"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "'react-window'"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ";"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: " "
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-token-comment)"
                                                                },
                                                                children: "// Component that renders a large list"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "const"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "VirtualizedList"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " ({ items }) "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " ("
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "  <"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "List"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "height"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "300"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "}       "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-comment)"
                                                                    },
                                                                    children: "// Height of the visible area"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "itemCount"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "items"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "length"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "} "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-comment)"
                                                                    },
                                                                    children: "// Total number of items"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "itemSize"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "35"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "}      "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-comment)"
                                                                    },
                                                                    children: "// Height of each item"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "width"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "300"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "}        "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-comment)"
                                                                    },
                                                                    children: "// Width of the list container"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "  >"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    {({ index"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-punctuation)"
                                                                    },
                                                                    children: ","
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " style }) "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " ("
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "      <"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "div"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "style"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{style}>"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "        Item {index}: {items[index]}"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "      </"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "div"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ">"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "    )}"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "  </"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "List"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ">"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: ");"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: " "
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-token-comment)"
                                                                },
                                                                children: "// Usage of VirtualizedList"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "const"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "App"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " () "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " {"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "  "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "const"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "items"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "Array"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: ".from"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "({ length"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: ":"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "1000"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " }"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-punctuation)"
                                                                    },
                                                                    children: ","
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " (_"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-punctuation)"
                                                                    },
                                                                    children: ","
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " i) "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "`Item "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "${"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "i"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "}"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "`"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ");"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "  "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "return"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " <"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "VirtualizedList"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "items"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{items} />;"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "};"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: " "
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "export"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "default"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " App;"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "\n",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                    children: "Explanation:"
                                                })
                                            }),
                                            "\n",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                                children: [
                                                    "\n",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "height"
                                                                })
                                                            }),
                                                            " and ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "width"
                                                                })
                                                            }),
                                                            " specify the dimensions of the visible area."
                                                        ]
                                                    }),
                                                    "\n",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "itemCount"
                                                                })
                                                            }),
                                                            " is the total number of items in the list."
                                                        ]
                                                    }),
                                                    "\n",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "itemSize"
                                                                })
                                                            }),
                                                            " defines the height of each list item."
                                                        ]
                                                    }),
                                                    "\n",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "style"
                                                                })
                                                            }),
                                                            " is applied to each item to ensure proper positioning and size within the virtualized container."
                                                        ]
                                                    }),
                                                    "\n"
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "Using ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "react-virtualized"
                                        }),
                                        ":"
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "\n",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                        children: "Scenario:"
                                                    }),
                                                    " Similar to ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                        children: "react-window"
                                                    }),
                                                    ", ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                        children: "react-virtualized"
                                                    }),
                                                    " provides a range of components and utilities for virtualization. It can handle more complex use cases such as varying item sizes."
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "\n",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                    children: "Example:"
                                                })
                                            }),
                                            "\n",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                                "data-language": "javascript",
                                                "data-theme": "default",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                                    "data-language": "javascript",
                                                    "data-theme": "default",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "import"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " React "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "from"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "'react'"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ";"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "import"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " { List } "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "from"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "'react-virtualized'"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ";"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: " "
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-token-comment)"
                                                                },
                                                                children: "// Component that renders a large list"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "const"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "VirtualizedList"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " ({ items }) "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " ("
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "  <"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "List"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "width"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "300"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "}            "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-comment)"
                                                                    },
                                                                    children: "// Width of the list container"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "height"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "300"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "}           "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-comment)"
                                                                    },
                                                                    children: "// Height of the visible area"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "rowCount"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "items"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "."
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "length"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "} "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-comment)"
                                                                    },
                                                                    children: "// Total number of items"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "rowHeight"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "35"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "}         "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-comment)"
                                                                    },
                                                                    children: "// Height of each item"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "    "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "rowRenderer"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{({ index"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-punctuation)"
                                                                    },
                                                                    children: ","
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " key"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-punctuation)"
                                                                    },
                                                                    children: ","
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " style }) "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " ("
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "      <"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "div"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "key"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{key} "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "style"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{style}>"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "        Item {index}: {items[index]}"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "      </"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "div"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ">"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "    )}"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "  />"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: ");"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: " "
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-token-comment)"
                                                                },
                                                                children: "// Usage of VirtualizedList"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "const"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "App"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " () "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " {"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "  "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "const"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "items"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "Array"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: ".from"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "({ length"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: ":"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "1000"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " }"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-punctuation)"
                                                                    },
                                                                    children: ","
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " (_"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-punctuation)"
                                                                    },
                                                                    children: ","
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " i) "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "`Item "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "${"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "i"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "}"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "`"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ");"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "  "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "return"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " <"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "VirtualizedList"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "items"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "{items} />;"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "};"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: " "
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "export"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "default"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " App;"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "\n",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                    children: "Explanation:"
                                                })
                                            }),
                                            "\n",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                                children: [
                                                    "\n",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "width"
                                                                })
                                                            }),
                                                            " and ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "height"
                                                                })
                                                            }),
                                                            " define the visible area dimensions."
                                                        ]
                                                    }),
                                                    "\n",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "rowCount"
                                                                })
                                                            }),
                                                            " is the total number of rows/items."
                                                        ]
                                                    }),
                                                    "\n",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "rowHeight"
                                                                })
                                                            }),
                                                            " is the height of each row/item."
                                                        ]
                                                    }),
                                                    "\n",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                    children: "rowRenderer"
                                                                })
                                                            }),
                                                            " is a function that renders each item with the correct style and key."
                                                        ]
                                                    }),
                                                    "\n"
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Benefits:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Improved Performance:"
                                    }),
                                    " By rendering only the items that are visible, virtualization reduces the number of DOM nodes created and updated, leading to faster rendering and improved performance."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Reduced Memory Usage:"
                                    }),
                                    " Memory consumption is minimized because only the visible items are in the DOM, reducing the load on the browser’s rendering engine."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Enhanced User Experience:"
                                    }),
                                    " Smooth scrolling and faster load times make for a more responsive and pleasant user experience, even with large datasets."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Certainly! Here's an optimized explanation of debouncing and throttling with custom implementations:"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "6-debouncethrottle",
                children: "6. Debounce/Throttle"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Concept:"
                    }),
                    "\nDebouncing and throttling are techniques to control the frequency of function execution to improve performance and user experience, especially for frequent events like typing and scrolling."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "1. Debouncing:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Concept:"
                                    }),
                                    " Debouncing ensures a function is executed only after a specified delay has passed since the last invocation, useful for handling rapid, repeated actions like user input."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Implementation:"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "import"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " React"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " { useState"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " useCallback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " useRef } "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "from"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'react'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ";"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Custom debounce hook"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useDebounce"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " (callback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " delay) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "timerRef"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useRef"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "null"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useCallback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "args) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "if"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "timerRef"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".current) {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "clearTimeout"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "timerRef"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".current);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "    }"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "timerRef"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".current "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "setTimeout"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(() "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "callback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "args);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " delay);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " [callback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " delay]);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "DebounceExample"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " () "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ["
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "query"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "setQuery"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "] "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useState"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "''"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Debounced function"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "handleSearch"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useDebounce"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "((newQuery) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "console"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".log"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'Searching for:'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " newQuery);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "300"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 300ms debounce delay"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "handleChange"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " (event) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " { "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "value"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " } "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "event"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".target;"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "setQuery"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(value);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "handleSearch"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(value);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "  };"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ("
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "input"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "type"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: '"text"'
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "value"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{query}"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "onChange"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{handleChange}"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "placeholder"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: '"Search..."'
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "    />"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "  );"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "export"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "default"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " DebounceExample;"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Explanation:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "useDebounce"
                                            }),
                                            " is a custom hook that delays the function execution until after 300ms of inactivity. This reduces the number of calls to ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "handleSearch"
                                            }),
                                            ", making it more efficient for handling user input."
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "2. Throttling:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Concept:"
                                    }),
                                    " Throttling ensures a function is executed at most once every specified interval, useful for managing frequent events like scrolling or resizing."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Implementation:"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "import"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " React"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " { useState"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " useEffect"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " useCallback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " useRef } "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "from"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'react'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ";"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Custom throttle hook"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useThrottle"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " (callback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " limit) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "lastCall"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useRef"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "0"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useCallback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "args) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "now"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "Date"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".now"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "();"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "if"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " (now "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "-"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "lastCall"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".current "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: ">="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " limit) {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "lastCall"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".current "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " now;"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "callback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "args);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "    }"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " [callback"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " limit]);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "ThrottleExample"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " () "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ["
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "scrollPosition"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "setScrollPosition"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "] "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useState"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "0"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ");"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Throttled function"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "const"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "handleScroll"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useThrottle"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(() "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "setScrollPosition"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "window"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".scrollY);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "200"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 200ms throttle limit"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "useEffect"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(() "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "window"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".addEventListener"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'scroll'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " handleScroll);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " () "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "window"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".removeEventListener"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'scroll'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " handleScroll);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " [handleScroll]);"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ("
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "p"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">Scroll position: {scrollPosition}</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "p"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      {"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "/* Content to enable scrolling */"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "}"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "style"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{{ height"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: ":"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'2000px'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " }}></"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    </"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "div"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "  );"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: " "
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "export"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "default"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ThrottleExample;"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Explanation:"
                                            }),
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "useThrottle"
                                            }),
                                            " is a custom hook that limits the function execution to once every 200ms. This prevents excessive function calls during scroll events, improving performance and responsiveness."
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Benefits:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Reduces Function Calls:"
                                    }),
                                    " Both techniques help control the rate of function executions, reducing unnecessary computations and enhancing performance."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Enhances User Experience:"
                                    }),
                                    " By managing how often expensive operations are executed, debouncing and throttling make interactions smoother and more responsive."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Optimizes Resource Use:"
                                    }),
                                    " Limits function calls to improve overall application performance and reduce load on system resources."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "7-efficient-keys",
                children: "7. Efficient Keys"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Concept:"
                    }),
                    "\nUsing stable and unique keys in lists ensures that React can efficiently update and re-render components."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Implementation:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Always use unique and stable keys for list items:",
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "items"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".map"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(item "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "=>"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " ("
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "ListItem"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "key"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "{"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "item"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".id} />"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "))}"
                                            })
                                        })
                                    ]
                                })
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Benefits:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Reduces unnecessary component re-renders."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Improves performance by enabling React to manage lists efficiently."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "8-css--images",
                children: "8. CSS & Images"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Concept:"
                    }),
                    "\nOptimizing CSS and images can reduce the size of assets, improving load times and performance."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Implementation:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Use CSS preloading techniques to load critical CSS first."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Compress images using tools or services to reduce file size."
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Implement lazy loading for images:",
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "html",
                                "data-theme": "default",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    "data-language": "html",
                                    "data-theme": "default",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "<"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-string-expression)"
                                                },
                                                children: "img"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-function)"
                                                },
                                                children: "src"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-keyword)"
                                                },
                                                children: "="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-string-expression)"
                                                },
                                                children: '"image.jpg"'
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-function)"
                                                },
                                                children: "loading"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-keyword)"
                                                },
                                                children: "="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-string-expression)"
                                                },
                                                children: '"lazy"'
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-function)"
                                                },
                                                children: "alt"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-keyword)"
                                                },
                                                children: "="
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-string-expression)"
                                                },
                                                children: '"Description"'
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " />"
                                            })
                                        ]
                                    })
                                })
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Benefits:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Reduces the amount of data that needs to be loaded."
                    }),
                    "\n",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Improves performance and user experience."
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "9-tree-shaking",
                children: "9. Tree Shaking"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Concept:"
                    }),
                    "\nTree shaking is a build optimization technique that eliminates unused code from your JavaScript bundles. It helps in reducing the final bundle size, leading to faster load times and improved performance."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Implementation:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Using Webpack:"
                                    }),
                                    "\nTree shaking works with ES6 modules (i.e., ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "import"
                                    }),
                                    " and ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "export"
                                    }),
                                    " statements). Webpack’s tree shaking is enabled by default in production mode. You can ensure tree shaking is active by configuring Webpack as follows:"
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "javascript",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "javascript",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// webpack.config.js"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "module"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "exports"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "="
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  mode"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: ":"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'production'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Enable production mode for tree shaking"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  optimization"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: ":"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "    usedExports"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: ":"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "true"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Mark used exports"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  }"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-punctuation)"
                                                    },
                                                    children: ","
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "};"
                                            })
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            "\n",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                    children: "Example:"
                                                })
                                            }),
                                            "\n",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                                "data-language": "javascript",
                                                "data-theme": "default",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                                    "data-language": "javascript",
                                                    "data-theme": "default",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-token-comment)"
                                                                },
                                                                children: "// utils.js"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "export"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "const"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "usedFunction"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " () "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " {"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "  "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "console"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: ".log"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "("
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "'This function is used'"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ");"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "};"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: " "
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "export"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "const"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "unusedFunction"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "="
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " () "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "=>"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " {"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "  "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-constant)"
                                                                    },
                                                                    children: "console"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: ".log"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "("
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "'This function is not used'"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ");"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-color-text)"
                                                                },
                                                                children: "};"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            "\n",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                                "data-language": "javascript",
                                                "data-theme": "default",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                                    "data-language": "javascript",
                                                    "data-theme": "default",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                style: {
                                                                    color: "var(--shiki-token-comment)"
                                                                },
                                                                children: "// main.js"
                                                            })
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "import"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " { usedFunction } "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-keyword)"
                                                                    },
                                                                    children: "from"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: " "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-string-expression)"
                                                                    },
                                                                    children: "'./utils'"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: ";"
                                                                })
                                                            ]
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                            className: "line",
                                                            children: " "
                                                        }),
                                                        "\n",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                                            className: "line",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-function)"
                                                                    },
                                                                    children: "usedFunction"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-color-text)"
                                                                    },
                                                                    children: "(); "
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                                    style: {
                                                                        color: "var(--shiki-token-comment)"
                                                                    },
                                                                    children: "// Only `usedFunction` will be included in the bundle"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            "\n",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                                children: [
                                                    "\n",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                                children: "Explanation:"
                                                            }),
                                                            " In the above example, ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                                children: "unusedFunction"
                                                            }),
                                                            " will be removed from the final bundle if not imported anywhere, thanks to tree shaking."
                                                        ]
                                                    }),
                                                    "\n"
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Benefits:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Reduces Bundle Size:"
                                    }),
                                    " By removing unused code, tree shaking helps decrease the overall bundle size, making the application faster to download and execute."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Improves Load Times:"
                                    }),
                                    " Smaller bundles load faster, leading to quicker initial page loads and a better user experience."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Enhances Performance:"
                                    }),
                                    " Reducing the amount of JavaScript that needs to be parsed and executed can significantly improve the performance of your application."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Additional Tips:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Ensure Module Compatibility:"
                                    }),
                                    " Tree shaking relies on ES6 modules. Ensure your codebase and dependencies are using ES6 module syntax for effective tree shaking."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Minification:"
                                    }),
                                    " Use minifiers like Terser to further optimize the output. Minification complements tree shaking by removing unused code and minifying the remaining code."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Analyze Bundle:"
                                    }),
                                    " Tools like ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "webpack-bundle-analyzer"
                                    }),
                                    " can help you visualize the size of your bundles and identify which parts of your codebase are being included."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "By implementing these optimization techniques, you can significantly enhance the performance of your React applications, providing a smoother and more responsive user experience."
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = Object.assign({}, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return MDXLayout ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
if (false) {}
if (true) __nextraPageOptions.dynamicMetaModules = [];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,nextra_setup_page__WEBPACK_IMPORTED_MODULE_1__/* .setupNextraPage */ .j)(__nextraPageOptions));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3841:
/***/ ((module) => {

module.exports = require("@popperjs/core");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 8395:
/***/ ((module) => {

module.exports = require("flexsearch");

/***/ }),

/***/ 2235:
/***/ ((module) => {

module.exports = require("focus-visible");

/***/ }),

/***/ 9164:
/***/ ((module) => {

module.exports = require("git-url-parse");

/***/ }),

/***/ 4916:
/***/ ((module) => {

module.exports = require("intersection-observer");

/***/ }),

/***/ 1043:
/***/ ((module) => {

module.exports = require("lodash.get");

/***/ }),

/***/ 5875:
/***/ ((module) => {

module.exports = require("match-sorter");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 2488:
/***/ ((module) => {

module.exports = require("slash");

/***/ }),

/***/ 4090:
/***/ ((module) => {

module.exports = require("title");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 372:
/***/ ((module) => {

module.exports = import("@theguild/remark-mermaid/mermaid");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 8751:
/***/ ((module) => {

module.exports = import("scroll-into-view-if-needed");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,812,636,323,178,188], () => (__webpack_exec__(7062)));
module.exports = __webpack_exports__;

})();