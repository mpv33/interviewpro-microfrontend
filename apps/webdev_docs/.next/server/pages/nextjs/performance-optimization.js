"use strict";
(() => {
var exports = {};
exports.id = 861;
exports.ids = [861,660];
exports.modules = {

/***/ 5601:
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
/* harmony import */ var private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8699);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/nextjs/performance-optimization","pathname":"/nextjs/performance-optimization","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({
          ...options,
          components: {
            App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__["default"],
            Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default()),
          },
          userland: private_next_pages_nextjs_performance_optimization_mdx__WEBPACK_IMPORTED_MODULE_4__,
        })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8699:
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
        "filePath": "pages/nextjs/performance-optimization.mdx",
        "route": "/nextjs/performance-optimization",
        "headings": [
            {
                "depth": 3,
                "value": "Performance Optimization in Next.js",
                "id": "performance-optimization-in-nextjs"
            },
            {
                "depth": 4,
                "value": "1. Code Splitting and Lazy Loading",
                "id": "1-code-splitting-and-lazy-loading"
            },
            {
                "depth": 4,
                "value": "2. Static and Server Rendering",
                "id": "2-static-and-server-rendering"
            },
            {
                "depth": 4,
                "value": "3. Image Optimization",
                "id": "3-image-optimization"
            },
            {
                "depth": 4,
                "value": "4. Font Optimization",
                "id": "4-font-optimization"
            },
            {
                "depth": 4,
                "value": "5. Custom _document.js: Fine-Tuning HTML and Preloading Resources",
                "id": "5-custom-_documentjs-fine-tuning-html-and-preloading-resources"
            },
            {
                "depth": 4,
                "value": "6. Client-Side Caching",
                "id": "6-client-side-caching"
            },
            {
                "depth": 4,
                "value": "7. Prefetching Links",
                "id": "7-prefetching-links"
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
    pageNextRoute: "/nextjs/performance-optimization",
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    themeConfig: _Users_mateshwariverma_Desktop_interviewpro_mfa_apps_webdev_docs_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        h3: "h3",
        p: "p",
        hr: "hr",
        h4: "h4",
        strong: "strong",
        code: "code",
        pre: "pre",
        span: "span",
        ul: "ul",
        li: "li"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "performance-optimization-in-nextjs",
                children: "Performance Optimization in Next.js"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Performance optimization in Next.js is crucial for ensuring your application runs efficiently and provides a smooth user experience. Next.js offers several features and strategies to enhance performance, including code splitting, image optimization, and prefetching."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Here’s a detailed breakdown of performance optimization techniques in Next.js:"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "1-code-splitting-and-lazy-loading",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "1. Code Splitting and Lazy Loading"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Code splitting allows you to load only the necessary JavaScript for the initial render, reducing the size of the initial bundle. Lazy loading enables loading components on demand, which further improves performance."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                    children: [
                        "Example: Using ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "dynamic"
                        }),
                        " for Code Splitting"
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "jsx",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "jsx",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-token-comment)"
                                },
                                children: "// pages/index.js"
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
                                    children: " dynamic "
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
                                    children: "'next/dynamic'"
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
                                    children: "DynamicComponent"
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
                                    children: "dynamic"
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
                                    children: "'../components/DynamicComponent'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ")"
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
                                    children: "  ssr"
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
                                    children: "false"
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
                                    children: "// Disable server-side rendering for this component"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "function"
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
                                    children: "Home"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "() {"
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
                                    children: "h1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ">Home Page</"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "h1"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "DynamicComponent"
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
                                children: "}"
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
                                children: "Dynamic Import"
                            }),
                            ": Use ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "dynamic()"
                            }),
                            " from Next.js to load components only when needed. This reduces the amount of JavaScript sent to the client."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    children: "ssr: false"
                                })
                            }),
                            ": Disables server-side rendering for the component, ensuring it is only loaded on the client side."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "2-static-and-server-rendering",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "2. Static and Server Rendering"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Choosing the appropriate rendering method (Static Site Generation (SSG) or Server-Side Rendering (SSR)) based on the nature of your content can significantly impact performance."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                    children: [
                        "Example: Using ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "getStaticProps"
                        }),
                        " for Static Rendering"
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "jsx",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "jsx",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-token-comment)"
                                },
                                children: "// pages/static-page.js"
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
                                    children: "async"
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
                                    children: "function"
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
                                    children: "getStaticProps"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "() {"
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
                                    children: "res"
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "await"
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
                                    children: "fetch"
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
                                    children: "'https://api.example.com/data'"
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
                                    children: "data"
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "await"
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
                                    children: "res"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".json"
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
                                    children: "    props"
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
                                    children: " { data }"
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "    revalidate"
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
                                    children: "60"
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
                                    children: "// Revalidate every 60 seconds"
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "}"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "function"
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
                                    children: "StaticPage"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "({ data }) {"
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
                                    children: "h1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ">Static Page</"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "h1"
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
                                    children: ".content}</"
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
                                children: "}"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                    children: [
                        "Example: Using ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "getServerSideProps"
                        }),
                        " for Server-Side Rendering"
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "jsx",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "jsx",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-token-comment)"
                                },
                                children: "// pages/server-page.js"
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
                                    children: "async"
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
                                    children: "function"
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
                                    children: "getServerSideProps"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "() {"
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
                                    children: "res"
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "await"
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
                                    children: "fetch"
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
                                    children: "'https://api.example.com/data'"
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
                                    children: "data"
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "await"
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
                                    children: "res"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".json"
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
                                    children: "    props"
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
                                    children: " { data }"
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
                                children: "  };"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "}"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "function"
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
                                    children: "ServerPage"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "({ data }) {"
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
                                    children: "h1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ">Server Page</"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "h1"
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
                                    children: ".content}</"
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
                                children: "}"
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
                                children: "SSG"
                            }),
                            ": Use ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "getStaticProps"
                            }),
                            " for static content that doesn't change often. It pre-renders pages at build time."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "SSR"
                            }),
                            ": Use ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "getServerSideProps"
                            }),
                            " for dynamic content that changes frequently, rendered on each request."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "3-image-optimization",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "3. Image Optimization"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Next.js provides an ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Image"
                    }),
                    " component that automatically optimizes images by resizing, lazy loading, and serving them in the most efficient format."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                    children: [
                        "Example: Using the ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "Image"
                        }),
                        " Component"
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "jsx",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "jsx",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-token-comment)"
                                },
                                children: "// pages/index.js"
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
                                    children: " Image "
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
                                    children: "'next/image'"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "function"
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
                                    children: "Home"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "() {"
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
                                    children: "h1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ">Optimized Image Example</"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "h1"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Image"
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
                                    children: "        "
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
                                    children: '"/images/photo.jpg"'
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
                                    children: "        "
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
                                    children: '"Example Photo"'
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
                                    children: "        "
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
                                    children: "500"
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
                                    children: "        "
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
                                    children: "        "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "quality"
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
                                    children: "75"
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "      />"
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
                                children: "}"
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
                                children: "Automatic Optimization"
                            }),
                            ": Next.js handles image resizing and format conversion to optimize loading times."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "quality"
                                    }),
                                    " Prop"
                                ]
                            }),
                            ": Controls the quality of the image, balancing between visual fidelity and performance."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "4-font-optimization",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "4. Font Optimization"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Next.js optimizes font loading to reduce render-blocking and improve page performance. By default, Next.js supports font optimization through the ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "next/font"
                    }),
                    " package."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                    children: [
                        "Example: Using ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "next/font"
                        }),
                        " for Font Optimization"
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "jsx",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "jsx",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-token-comment)"
                                },
                                children: "// pages/_app.js"
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
                                    children: " { Inter } "
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
                                    children: "'@next/font/google'"
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
                                    children: "inter"
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
                                    children: "Inter"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "({ subsets"
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
                                    children: " ["
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'latin'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "] });"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "function"
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
                                    children: "MyApp"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "({ Component"
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
                                    children: " pageProps }) {"
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
                                    children: "className"
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
                                    children: "inter"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ".className}>"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Component"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " {"
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
                                    children: "pageProps} />"
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
                                children: "}"
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
                                children: "Custom Fonts"
                            }),
                            ": Use the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "next/font"
                            }),
                            " package to load and optimize fonts automatically, reducing the impact on page performance."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "5-custom-_documentjs-fine-tuning-html-and-preloading-resources",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                    children: [
                        "5. Custom ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "_document.js"
                        }),
                        ": Fine-Tuning HTML and Preloading Resources"
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "You can customize the server-rendered HTML by overriding the default ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Document"
                    }),
                    " to fine-tune the markup and preload resources."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                    children: [
                        "Example: Custom ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "_document.js"
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "jsx",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "jsx",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-token-comment)"
                                },
                                children: "// pages/_document.js"
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
                                    children: " Document"
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
                                    children: " { Html"
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
                                    children: " Head"
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
                                    children: " Main"
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
                                    children: " NextScript } "
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
                                    children: "'next/document'"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "class"
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
                                    children: "MyDocument"
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
                                    children: "extends"
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
                                    children: "Document"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "render"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "() {"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Html"
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
                                    children: "        <"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Head"
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
                                    children: "          <"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "link"
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
                                    children: "rel"
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
                                    children: '"preload"'
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
                                    children: "href"
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
                                    children: '"/fonts/your-font.woff2"'
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
                                    children: "as"
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
                                    children: '"font"'
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
                                    children: '"font/woff2"'
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
                                    children: "crossorigin"
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
                                    children: '"anonymous"'
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
                                    children: "        </"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Head"
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
                                    children: "        <"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "body"
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
                                    children: "          <"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Main"
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
                                    children: "          <"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "NextScript"
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
                                    children: "        </"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "body"
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
                                    children: "      </"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Html"
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
                                children: "    );"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "  }"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "}"
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
                                children: "Preloading"
                            }),
                            ": Preload critical resources like fonts to ensure they are available as soon as possible, reducing render-blocking."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "6-client-side-caching",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "6. Client-Side Caching"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Browser caching strategies can improve performance by storing static assets in the browser cache. Next.js handles caching for static assets automatically, but you can configure custom caching headers if needed."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Example: Configuring Custom Caching Headers"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "jsx",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "jsx",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-token-comment)"
                                },
                                children: "// next.config.js"
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
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "async"
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
                                    children: "headers"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "() {"
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
                                    children: " ["
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
                                children: "      {"
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
                                    children: "        source"
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
                                    children: "'/:all*(svg|jpg|png)'"
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "        headers"
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
                                    children: " ["
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
                                children: "          {"
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
                                    children: "            key"
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
                                    children: "'Cache-Control'"
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "            value"
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
                                    children: "'public, max-age=31536000, immutable'"
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "          }"
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "        ]"
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "      }"
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
                                children: "    ];"
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
                                children: "Caching Headers"
                            }),
                            ": Set caching headers for static assets to improve load times for returning visitors."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "7-prefetching-links",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "7. Prefetching Links"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Next.js automatically prefetches linked pages in the background to improve navigation speed using the built-in ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Link"
                    }),
                    " component."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                    children: [
                        "Example: Using ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: "Link"
                        }),
                        " with Prefetching"
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "jsx",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "jsx",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-token-comment)"
                                },
                                children: "// pages/index.js"
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
                                    children: " Link "
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
                                    children: "'next/link'"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "function"
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
                                    children: "Home"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "() {"
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
                                    children: "h1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ">Home Page</"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "h1"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Link"
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
                                    children: "href"
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
                                    children: '"/about"'
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
                                    children: "        <"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "a"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ">Go to About Page</"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "a"
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
                                    children: "      </"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Link"
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
                                children: "}"
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
                                children: "Automatic Prefetching"
                            }),
                            ": The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Link"
                            }),
                            " component prefetches the linked page when it is visible in the viewport or when hovered, making subsequent navigation faster."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "These performance optimization strategies in Next.js can help you build faster and more efficient web applications. By leveraging these techniques, you can ensure that your site loads quickly, provides a smooth user experience, and performs well under various conditions."
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
var __webpack_exports__ = __webpack_require__.X(0, [940,812,636,323,178,188], () => (__webpack_exec__(5601)));
module.exports = __webpack_exports__;

})();