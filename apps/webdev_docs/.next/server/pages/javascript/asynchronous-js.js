"use strict";
(() => {
var exports = {};
exports.id = 348;
exports.ids = [348,660];
exports.modules = {

/***/ 2854:
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
/* harmony import */ var private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/javascript/asynchronous-js","pathname":"/javascript/asynchronous-js","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({
          ...options,
          components: {
            App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__["default"],
            Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default()),
          },
          userland: private_next_pages_javascript_asynchronous_js_mdx__WEBPACK_IMPORTED_MODULE_4__,
        })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7347:
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
        "filePath": "pages/javascript/asynchronous-js.mdx",
        "route": "/javascript/asynchronous-js",
        "headings": [
            {
                "depth": 1,
                "value": " Understanding Asynchronous JavaScript ",
                "id": "-understanding-asynchronous-javascript-"
            },
            {
                "depth": 2,
                "value": "Asynchronous JavaScript",
                "id": "asynchronous-javascript"
            },
            {
                "depth": 3,
                "value": "1. Event Loop",
                "id": "1-event-loop"
            },
            {
                "depth": 3,
                "value": "2. Promises",
                "id": "2-promises"
            },
            {
                "depth": 3,
                "value": "3. async/await",
                "id": "3-asyncawait"
            },
            {
                "depth": 3,
                "value": "4. Callback Functions",
                "id": "4-callback-functions"
            },
            {
                "depth": 3,
                "value": "5. Promise.all()",
                "id": "5-promiseall"
            },
            {
                "depth": 3,
                "value": "6. Promise.race()",
                "id": "6-promiserace"
            },
            {
                "depth": 3,
                "value": "7. Promise.allSettled()",
                "id": "7-promiseallsettled"
            },
            {
                "depth": 3,
                "value": "8. Promise.any()",
                "id": "8-promiseany"
            },
            {
                "depth": 3,
                "value": "9. Microtasks vs. Macrotasks",
                "id": "9-microtasks-vs-macrotasks"
            },
            {
                "depth": 3,
                "value": "10. Error Propagation",
                "id": "10-error-propagation"
            },
            {
                "depth": 3,
                "value": "11. setTimeout and setInterval",
                "id": "11-settimeout-and-setinterval"
            },
            {
                "depth": 3,
                "value": "12. Generators",
                "id": "12-generators"
            },
            {
                "depth": 3,
                "value": "13. Promises sequence",
                "id": "13-promises-sequence"
            },
            {
                "depth": 2,
                "value": "Async Js Tricky Output",
                "id": "async-js-tricky-output"
            },
            {
                "depth": 3,
                "value": "1. Order of Execution (Event Loop and Promises)",
                "id": "1-order-of-execution-event-loop-and-promises"
            },
            {
                "depth": 3,
                "value": "2. Promise and setTimeout Interaction",
                "id": "2-promise-and-settimeout-interaction"
            },
            {
                "depth": 3,
                "value": "3. Chaining Promises",
                "id": "3-chaining-promises"
            },
            {
                "depth": 3,
                "value": "4. setTimeout vs Promise Timing",
                "id": "4-settimeout-vs-promise-timing"
            },
            {
                "depth": 3,
                "value": "5. async/await Timing",
                "id": "5-asyncawait-timing"
            },
            {
                "depth": 3,
                "value": "6. Promise.all with Delays",
                "id": "6-promiseall-with-delays"
            },
            {
                "depth": 3,
                "value": "7. Promise Resolution Timing",
                "id": "7-promise-resolution-timing"
            },
            {
                "depth": 3,
                "value": "8. Multiple async/await with setTimeout",
                "id": "8-multiple-asyncawait-with-settimeout"
            },
            {
                "depth": 3,
                "value": "9. Microtask vs Macrotask Priority",
                "id": "9-microtask-vs-macrotask-priority"
            },
            {
                "depth": 3,
                "value": "10. Error Handling in Promises",
                "id": "10-error-handling-in-promises"
            },
            {
                "depth": 3,
                "value": "11. async/await and Promise Interaction",
                "id": "11-asyncawait-and-promise-interaction"
            }
        ],
        "hasJsxInH1": true,
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
        "title": " Understanding Asynchronous JavaScript "
    },
    pageNextRoute: "/javascript/asynchronous-js",
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    themeConfig: _Users_mateshwariverma_Desktop_interviewpro_mfa_apps_webdev_docs_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        h2: "h2",
        p: "p",
        hr: "hr",
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    id: "animated-text",
                    className: "text-center my-4",
                    children: " Understanding Asynchronous JavaScript "
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "asynchronous-javascript",
                children: "Asynchronous JavaScript"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Asynchronous JavaScript allows programs to perform tasks in the background, without blocking the main thread of execution. It is crucial for tasks that take time to complete, such as fetching data from a server or reading files from a disk, while ensuring the rest of the code continues to run smoothly. Here’s an in-depth explanation of the core concepts:"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "1-event-loop",
                children: [
                    "1. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Event Loop"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "event loop"
                    }),
                    " is at the heart of asynchronous JavaScript, ensuring that asynchronous operations are handled properly without blocking the main thread."
                ]
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
                                        children: "Call Stack"
                                    }),
                                    ": This is where synchronous code is executed, operating on a Last In, First Out (LIFO) basis. Functions are pushed onto the stack when called and popped off when completed."
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
                                        children: "Callback Queue (Task Queue)"
                                    }),
                                    ": Holds functions (callbacks) that are waiting to be executed after asynchronous tasks (e.g., ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "setTimeout"
                                    }),
                                    ", event handlers)."
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
                                        children: "Event Loop"
                                    }),
                                    ": Continuously checks if the call stack is empty. If the call stack is empty, the event loop picks functions from the callback queue and pushes them to the call stack for execution."
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
                                    children: "'Start'"
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
                                    children: "'Timeout'"
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
                                    children: "}"
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
                                    children: "'End'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Execution Flow"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "console.log('Start')"
                            }),
                            " runs immediately."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            " schedules a callback function to run after a delay but does not block the code."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "console.log('End')"
                            }),
                            " runs next."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Finally, when the call stack is empty, the callback from ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            " is executed."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "2-promises",
                children: [
                    "2. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Promises"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "A ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Promise"
                    }),
                    " is an object representing the eventual completion or failure of an asynchronous operation."
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Pending"
                            }),
                            ": The initial state of the promise, waiting for resolution or rejection."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Fulfilled"
                            }),
                            ": The operation completed successfully, and the promise has a result."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Rejected"
                            }),
                            ": The operation failed, and the promise has an error."
                        ]
                    }),
                    "\n"
                ]
            }),
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
                                    children: "fetchData"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((resolve"
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
                                    children: " reject) "
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
                                    children: "    "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: "'Data fetched'"
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
                                    color: "var(--shiki-color-text)"
                                },
                                children: "fetchData"
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
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(result "
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
                                    children: "(result))  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 'Data fetched'"
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
                                    children: ".catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(error "
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
                                    children: "(error));"
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
                                children: "Explanation"
                            }),
                            ": The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "fetchData"
                            }),
                            " promise resolves after 1 second, printing ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Data fetched'"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "3-asyncawait",
                children: [
                    "3. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "async/await"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "async/await"
                    }),
                    " provides a way to write asynchronous code in a synchronous-like manner. The ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "await"
                    }),
                    " keyword is used to pause the execution of an ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "async"
                    }),
                    " function until the promise is resolved."
                ]
            }),
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
                                    children: "fetchData"
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
                                    children: "try"
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
                                    children: "response"
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
                                    children: "response"
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
                                    children: "(data);"
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
                                    children: "  } "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " (error) {"
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
                                    children: ".error"
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
                                    children: "'Error:'"
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
                                    children: " error);"
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
                                    children: "fetchData"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "();"
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
                                children: "Explanation"
                            }),
                            ": The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "await"
                            }),
                            " pauses the function execution until the promise from ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "fetch"
                            }),
                            " is resolved. Errors are handled using ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "try/catch"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "4-callback-functions",
                children: [
                    "4. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Callback Functions"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "A ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "callback function"
                    }),
                    " is passed as an argument to another function and executed after a certain task is completed. Callbacks were the traditional way to handle asynchronous tasks before Promises."
                ]
            }),
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
                                    children: "fetchData"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(callback) {"
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
                                    children: "    "
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
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'Data received'"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "fetchData"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(data "
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
                                    children: "(data); "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 'Data received'"
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
                                children: "Explanation"
                            }),
                            ": After 1 second, the callback function is executed, printing ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Data received'"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "5-promiseall",
                children: [
                    "5. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Promise.all()"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Promise.all()"
                    }),
                    " takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved or rejects when any promise is rejected."
                ]
            }),
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
                                    children: "promise1"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
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
                                    children: "'First'"
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
                                    children: "promise2"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
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
                                    children: "'Second'"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".all"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "([promise1"
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
                                    children: " promise2])"
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
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(results "
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
                                    children: "(results))  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// ['First', 'Second']"
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
                                    children: ".catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(error "
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
                                    children: "(error));"
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
                                children: "Explanation"
                            }),
                            ": Both promises resolve, and the results are logged as an array."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "6-promiserace",
                children: [
                    "6. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Promise.race()"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Promise.race()"
                    }),
                    " returns a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects."
                ]
            }),
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
                                    children: "promise1"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((resolve) "
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
                                    children: "setTimeout"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(resolve"
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
                                    children: "500"
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
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'First'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                    children: "promise2"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((resolve) "
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
                                    children: "setTimeout"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(resolve"
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
                                    children: "100"
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
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "'Second'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".race"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "([promise1"
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
                                    children: " promise2])"
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
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(result "
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
                                    children: "(result))  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 'Second'"
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
                                    children: ".catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(error "
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
                                    children: "(error));"
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
                                children: "Explanation"
                            }),
                            ": The second promise resolves first, so ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Second'"
                            }),
                            " is printed."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "7-promiseallsettled",
                children: [
                    "7. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Promise.allSettled()"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Promise.allSettled()"
                    }),
                    " waits for all promises to either resolve or reject and returns an array of the results with their status."
                ]
            }),
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
                                    children: "promise1"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
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
                                    children: "'First'"
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
                                    children: "promise2"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".reject"
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
                                    children: "'Second'"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".allSettled"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "([promise1"
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
                                    children: " promise2])"
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
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(results "
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
                                    children: "(results));"
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
                                    children: "// [{status: 'fulfilled', value: 'First'}, {status: 'rejected', reason: 'Second'}]"
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
                                children: "Explanation"
                            }),
                            ": The results array contains the status of each promise, whether fulfilled or rejected."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "8-promiseany",
                children: [
                    "8. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Promise.any()"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Promise.any()"
                    }),
                    " resolves when any of the promises fulfill, or rejects if all of them are rejected."
                ]
            }),
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
                                    children: "promise1"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".reject"
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
                                    children: "'First failed'"
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
                                    children: "promise2"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
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
                                    children: "'Second succeeded'"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".any"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "([promise1"
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
                                    children: " promise2])"
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
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(result "
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
                                    children: "(result))  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 'Second succeeded'"
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
                                    children: ".catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(error "
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
                                    children: "(error));"
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
                                children: "Explanation"
                            }),
                            ": Since the second promise resolves first, ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Second succeeded'"
                            }),
                            " is printed."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "9-microtasks-vs-macrotasks",
                children: [
                    "9. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Microtasks vs. Macrotasks"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Microtasks"
                            }),
                            ": These are processed immediately after the current task (e.g., promises). They have higher priority and are processed before any macrotasks."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Macrotasks"
                            }),
                            ": Include ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            ", ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setInterval"
                            }),
                            ", and I/O events. They are processed after microtasks."
                        ]
                    }),
                    "\n"
                ]
            }),
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
                                    children: "'Start'"
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
                                    children: " "
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
                                    children: "'Macrotask - Timeout'"
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
                                    children: " "
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'Microtask - Promise'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                    children: "'End'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
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
                                children: "Explanation"
                            }),
                            ": ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Microtask - Promise'"
                            }),
                            " is printed before ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Macrotask - Timeout'"
                            }),
                            " because microtasks are processed first."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "10-error-propagation",
                children: [
                    "10. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Error Propagation"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Errors in promises are propagated through the promise chain and can be handled with ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: ".catch()"
                    }),
                    " or ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "try/catch"
                    }),
                    " in ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "async/await"
                    }),
                    "."
                ]
            }),
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
                                    children: "fetchData"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((resolve"
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
                                    children: " reject) "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "reject"
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
                                    children: "'Error occurred'"
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
                                    color: "var(--shiki-color-text)"
                                },
                                children: "fetchData"
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
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(result "
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
                                    children: "(result))"
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
                                    children: ".catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(error "
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
                                    children: "(error));  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 'Error occurred'"
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
                                children: "Explanation"
                            }),
                            ": The error is caught and handled by the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: ".catch()"
                            }),
                            " method."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "11-settimeout-and-setinterval",
                children: [
                    "11. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "setTimeout and setInterval"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    children: "setTimeout()"
                                })
                            }),
                            " schedules a function to run after a certain delay."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    children: "setInterval()"
                                })
                            }),
                            " schedules a function to run repeatedly at specified intervals."
                        ]
                    }),
                    "\n"
                ]
            }),
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
                                    children: "'Start'"
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
                                    children: " "
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
                                    children: "'Timeout'"
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
                                    children: "); "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// After 1 second"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "setInterval"
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
                                    children: "'Interval'"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "2000"
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
                                    children: "// Every 2 seconds"
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
                                    children: "'End'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "12-generators",
                children: [
                    "12. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Generators"
                    })
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Generators"
                    }),
                    " are functions that can pause and resume execution using the ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "yield"
                    }),
                    " keyword. They are useful for managing asynchronous flows."
                ]
            }),
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
                                    children: "function*"
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
                                    children: "fetchData"
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "yield"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(resolve "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: "'Data fetched'"
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
                                    children: "));"
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
                                    children: "(result);"
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
                                    children: "gen"
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
                                    children: "fetchData"
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
                                    children: "promise"
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
                                    children: "gen"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".next"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "().value;"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(result "
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
                                    children: "gen"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".next"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(result));"
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
                                children: "Explanation"
                            }),
                            ": The generator yields a promise and resumes execution once the promise resolves."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "By understanding these concepts, you'll have a solid foundation for handling asynchronous tasks in JavaScript effectively."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "13-promises-sequence",
                children: "13. Promises sequence"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "You are tasked with implementing a task runner that manages multiple asynchronous operations with various requirements:"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Concurrency Control"
                                    }),
                                    ": Run a set of tasks concurrently, but limit the number of tasks that can run at the same time. The concurrency can change dynamically based on previous task results."
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
                                        children: "Sequential Execution with Conditional Logic"
                                    }),
                                    ": Ensure that tasks run sequentially, but if any task fails, it should be isolated, allowing the rest of the tasks to proceed. Additionally, based on the result of a task, the next task might need to be skipped or the concurrency limit might need to be adjusted."
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
                                        children: "Retry Logic"
                                    }),
                                    ": For tasks that fail, implement a retry mechanism with exponential backoff."
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
                                        children: "Timeout Handling"
                                    }),
                                    ": If any task exceeds a given timeout, abort it and move to the next task."
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
                                        children: "Failure Isolation"
                                    }),
                                    ": If any task fails, continue processing the remaining tasks without affecting their execution."
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                        children: [
                                            "Promise States and ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "Promise.allSettled()"
                                            })
                                        ]
                                    }),
                                    ": After all tasks have been executed, return the status of each task—whether they were fulfilled or rejected—using ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Promise.allSettled()"
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
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Solution:"
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
                                    children: "executeTasks"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(tasks"
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
                                    children: " concurrencyLimit"
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
                                    children: " timeout "
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
                                    children: "5000"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ") {"
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
                                    children: "results"
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
                                    children: " [];"
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
                                    children: "let"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " concurrency "
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
                                    children: " concurrencyLimit;"
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
                                    children: "executing"
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
                                    children: " [];"
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
                                    children: "// Helper function for retry logic with exponential backoff"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "retryTask"
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
                                    children: "async"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " (task"
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
                                    children: " retries "
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
                                    children: "3"
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
                                    children: " delay "
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
                                    children: "500"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ") "
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
                                    children: "try"
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
                                    children: "task"
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
                                    children: "    } "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " (err) {"
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "if"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " (retries "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "==="
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
                                    children: "0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ") "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "throw"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " err;"
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(resolve "
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
                                    children: "setTimeout"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(resolve"
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
                                    children: " delay));"
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
                                    children: "retryTask"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(task"
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
                                    children: " retries "
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
                                    children: "1"
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
                                    children: " delay "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "2"
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
                                    children: "// Exponential backoff"
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
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// Helper function for executing a task with a timeout"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "withTimeout"
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
                                    children: " (task) "
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
                                    children: "timeoutPromise"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((_"
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
                                    children: " reject) "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "=>"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "reject"
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
                                    children: '"Timeout exceeded"'
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
                                    children: " timeout)"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".race"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "([task"
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
                                    children: " timeoutPromise]);"
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
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// Execute tasks with concurrency control"
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
                                    children: "for"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " ("
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "let"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " i "
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
                                    children: "0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "; i "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "<"
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
                                    children: "tasks"
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
                                    children: "; i"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "++"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ") {"
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
                                    children: "task"
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
                                    children: " tasks[i];"
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
                                    children: "taskPromise"
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
                                    children: "retryTask"
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
                                    children: "withTimeout"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "("
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "task"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()))"
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
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(result "
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
                                    children: "        "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "results"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".push"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "({ status"
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
                                    children: "'fulfilled'"
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
                                    children: " result });"
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
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// Dynamically adjust concurrency based on result"
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "if"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " (result "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "==="
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
                                    children: "'increaseConcurrency'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ") concurrency"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "++"
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "      })"
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
                                    children: "      "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(err "
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
                                    children: "        "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "results"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".push"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "({ status"
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
                                    children: "'rejected'"
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
                                    children: " reason"
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
                                    children: " err });"
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
                                children: "      });"
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
                                    children: "    "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "executing"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".push"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(taskPromise);"
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
                                    children: "executing"
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
                                    children: " "
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
                                    children: " concurrency) {"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".race"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(executing); "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// Control concurrency"
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
                                    children: "// Wait for all tasks to finish"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".all"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(executing);"
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
                                    children: "// Return the final status of all tasks"
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
                                    children: " results;"
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
                                children: "}"
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
                                children: "// Example tasks (for illustration)"
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
                                    children: "task1"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(resolve "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: '"Task 1 completed"'
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
                                    children: "));"
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
                                    children: "task2"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((_"
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
                                    children: " reject) "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "reject"
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
                                    children: '"Task 2 failed"'
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "2000"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                    children: "task3"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(resolve "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: '"increaseConcurrency"'
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "3000"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                    children: "task4"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(resolve "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: '"Task 4 completed"'
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
                                    children: "));"
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
                                    children: "tasks"
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
                                    children: " [task1"
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
                                    children: " task2"
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
                                    children: " task3"
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
                                    children: " task4];"
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
                                children: "// Example usage"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "executeTasks"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(tasks"
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
                                    children: "2"
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
                                    children: "1500"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ")"
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
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(results "
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
                                    children: "(results))"
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
                                    children: ".catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(err "
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
                                    children: "console"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".error"
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
                                    children: '"Execution error:"'
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
                                    children: " err));"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
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
                                        children: "Concurrency Control"
                                    }),
                                    ": We limit the number of concurrently running tasks by tracking them in the ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "executing"
                                    }),
                                    " array and using ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Promise.race()"
                                    }),
                                    " to wait for the earliest task to settle before starting the next one. The ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "concurrency"
                                    }),
                                    " value dynamically increases based on task results (e.g., ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "'increaseConcurrency'"
                                    }),
                                    ")."
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
                                        children: "Sequential Execution with Conditional Logic"
                                    }),
                                    ": The tasks are executed sequentially, but if a task fails (e.g., task2), the error is handled and logged, and subsequent tasks continue executing."
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
                                        children: "Retry Logic with Exponential Backoff"
                                    }),
                                    ": If a task fails, it will automatically retry up to 3 times with increasing delays between attempts."
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
                                        children: "Timeout Handling"
                                    }),
                                    ": Each task has a timeout applied via ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Promise.race()"
                                    }),
                                    ", ensuring tasks that exceed the specified time are aborted."
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
                                        children: "Failure Isolation"
                                    }),
                                    ": If any task fails, it’s caught and logged, and execution continues with the remaining tasks."
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
                                        children: "Promise.allSettled()"
                                    }),
                                    ": The final result is collected using ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Promise.allSettled()"
                                    }),
                                    ", which ensures that the result of each task is returned, whether it was fulfilled or rejected, providing a comprehensive status report."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Sample Input/Output:"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Input:"
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
                                    children: "tasks"
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
                                    children: " ["
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
                                    children: "  task1"
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
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// Resolves after 1s"
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
                                    children: "  task2"
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
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// Rejects after 2s"
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
                                    children: "  task3"
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
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// Resolves with 'increaseConcurrency' after 3s"
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
                                    children: "  task4   "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// Resolves after 1s"
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
                                children: "];"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Output:"
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
                                    color: "var(--shiki-color-text)"
                                },
                                children: "["
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
                                    children: "  { status"
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
                                    children: "'fulfilled'"
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
                                    children: " result"
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
                                    children: "'Task 1 completed'"
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
                                    children: "  { status"
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
                                    children: "'rejected'"
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
                                    children: " reason"
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
                                    children: "'Task 2 failed'"
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
                                    children: "  { status"
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
                                    children: "'fulfilled'"
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
                                    children: " result"
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
                                    children: "'increaseConcurrency'"
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
                                    children: "  { status"
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
                                    children: "'fulfilled'"
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
                                    children: " result"
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
                                    children: "'Task 4 completed'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " }"
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
                                children: "]"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This solution handles all the aspects of concurrency, retries, timeouts, and sequential task execution while ensuring that failures don’t halt subsequent tasks, making it a robust and scalable solution for complex promise-based workflows."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "async-js-tricky-output",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Async Js Tricky Output"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Let's go through the answers to each of the tricky JavaScript questions and explain the reasoning behind them:"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "1-order-of-execution-event-loop-and-promises",
                children: [
                    "1. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Order of Execution (Event Loop and Promises)"
                    })
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
                                    children: "'A'"
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
                                    children: " "
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
                                    children: "'B'"
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
                                    children: " "
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'C'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
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
                                    children: "'D'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "A"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "D"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "C"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "B"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "console.log('A')"
                            }),
                            " runs first (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            " schedules the callback for later (after 0ms), placing it in the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "macrotask"
                            }),
                            " queue."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Promise.resolve().then()"
                            }),
                            " schedules the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            " callback in the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "microtask"
                            }),
                            " queue."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "console.log('D')"
                            }),
                            " runs (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Since the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "microtasks"
                            }),
                            " queue is processed before the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "macrotask"
                            }),
                            " queue, the promise's ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            " callback logs ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'C'"
                            }),
                            " before the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            " logs ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'B'"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "2-promise-and-settimeout-interaction",
                children: [
                    "2. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Promise and setTimeout Interaction"
                    })
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
                                    children: " "
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
                                    children: "'1'"
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
                                    children: " "
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'2'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'3'"
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
                                    children: " "
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
                                    children: "'4'"
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
                                    children: " "
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
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "});"
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
                                    children: "'5'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "5"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "2"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "3"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "1"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "4"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "console.log('5')"
                            }),
                            " runs first (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The two ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Promise.resolve()"
                            }),
                            " callbacks are queued as ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "microtasks"
                            }),
                            ", so ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'2'"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'3'"
                            }),
                            " are printed next (in order)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            " callbacks (",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'1'"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'4'"
                            }),
                            ") are placed in the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "macrotask"
                            }),
                            " queue and executed after the microtasks."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "3-chaining-promises",
                children: [
                    "3. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Chaining Promises"
                    })
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
                                    children: "promise"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((resolve"
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
                                    children: " reject) "
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
                                    children: "'A'"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: "'B'"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'C'"
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
                                    children: "'D'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "A"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "B"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "D"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "C"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'A'"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'B'"
                            }),
                            " are logged during the promise creation (synchronous execution)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            " callback is a ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "microtask"
                            }),
                            ", so it is queued to run after synchronous code."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'D'"
                            }),
                            " is logged synchronously."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'C'"
                            }),
                            " is logged after synchronous code is done, as part of the microtask queue."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "4-settimeout-vs-promise-timing",
                children: [
                    "4. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "setTimeout vs Promise Timing"
                    })
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
                                    children: " "
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
                                    children: "'timeout'"
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
                                    children: " "
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'promise'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
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
                                    children: "'sync'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "sync"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "promise"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "timeout"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "console.log('sync')"
                            }),
                            " runs first (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The promise's ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            " callback is added to the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "microtask"
                            }),
                            " queue and will execute before the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "macrotask"
                            }),
                            " (setTimeout)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "console.log('promise')"
                            }),
                            " runs after ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "sync"
                            }),
                            " because microtasks are processed before macrotasks."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Finally, the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            " callback logs ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'timeout'"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "5-asyncawait-timing",
                children: [
                    "5. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "async/await Timing"
                    })
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
                                    children: "async1"
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
                                    children: "'A'"
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
                                    children: "async2"
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
                                    children: "'B'"
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
                                    children: "async2"
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
                                    children: "'C'"
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
                                    children: "'D'"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "async1"
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
                                    children: "'E'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "D"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "A"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "C"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "E"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "B"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'D'"
                            }),
                            " is logged first (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "async1()"
                            }),
                            " starts, and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'A'"
                            }),
                            " is logged."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "async2()"
                            }),
                            " runs immediately and logs ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'C'"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "await"
                            }),
                            " causes ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "async1()"
                            }),
                            " to pause until the promise resolves, allowing synchronous code to continue."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'E'"
                            }),
                            " is logged next (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "After all synchronous code is done, ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'B'"
                            }),
                            " is logged (after ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "await"
                            }),
                            " resumes)."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "6-promiseall-with-delays",
                children: [
                    "6. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Promise.all with Delays"
                    })
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
                                    children: "p1"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((resolve) "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: "'First'"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "100"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                    children: "p2"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((resolve) "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: "'Second'"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "50"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                    children: "p3"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((resolve) "
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: "'Third'"
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
                                    children: " "
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
                                    children: "));"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".all"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "([p1"
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
                                    children: " p2"
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
                                    children: " p3])"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((values) "
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
                                    children: "(values);"
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
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                        className: "line",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            style: {
                                color: "var(--shiki-color-text)"
                            },
                            children: '["First", "Second", "Third"]'
                        })
                    })
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Promise.all()"
                            }),
                            " waits for ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "all"
                            }),
                            " promises to resolve. Even though ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "p2"
                            }),
                            " resolves first, it waits for ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "p1"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "p3"
                            }),
                            " to resolve."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Once all promises are resolved, the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            " block runs, logging the values in the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "order"
                            }),
                            " of the promises in the array, not in the order they resolved."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "7-promise-resolution-timing",
                children: [
                    "7. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Promise Resolution Timing"
                    })
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
                                    children: "'Start'"
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
                                    children: "'Timeout'"
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
                                    children: "}"
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
                                    children: "promise"
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
                                    children: "new"
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
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((resolve) "
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
                                    children: "'Promise created'"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "resolve"
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
                                    children: "'Promise resolved'"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((result) "
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
                                    children: "(result));"
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
                                    children: "'End'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Start"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Promise created"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "End"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Promise resolved"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Timeout"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Start'"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Promise created'"
                            }),
                            " are logged synchronously."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The promise resolves immediately, but the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            " callback is queued as a ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "microtask"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'End'"
                            }),
                            " is logged (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "microtask"
                            }),
                            " (",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            ") runs, logging ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Promise resolved'"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Finally, the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "macrotask"
                            }),
                            " (",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            ") runs, logging ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Timeout'"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "8-multiple-asyncawait-with-settimeout",
                children: [
                    "8. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Multiple async/await with setTimeout"
                    })
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
                                    children: "async1"
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
                                    children: "'A'"
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
                                    children: "async2"
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
                                    children: "'B'"
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
                                    children: "async2"
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
                                    children: "'C'"
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
                                    children: " "
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
                                    children: "'D'"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "async1"
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
                                    children: "'E'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "A"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "D"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "E"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "B"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "C"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'A'"
                            }),
                            " is logged (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "async2()"
                            }),
                            " is called and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'D'"
                            }),
                            " is logged (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            " schedules ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'C'"
                            }),
                            " for later, but doesn't run yet."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "await"
                            }),
                            " pauses ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "async1()"
                            }),
                            " at this point."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'E'"
                            }),
                            " is logged (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "After the synchronous code, the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "await"
                            }),
                            " finishes, logging ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'B'"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Finally, the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            " callback logs ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'C'"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "9-microtask-vs-macrotask-priority",
                children: [
                    "9. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Microtask vs Macrotask Priority"
                    })
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'Microtask 1'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                    children: "'Macrotask 1'"
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'Microtask 2'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                    children: "}"
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
                                    children: " "
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
                                    children: "'Macrotask 2'"
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
                                    children: " "
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
                                    children: "'Synchronous'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Synchronous"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Microtask 1"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Macrotask 1"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Microtask 2"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Macrotask 2"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Synchronous'"
                            }),
                            " is logged first (synchronous)."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The promise's ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            " callback logs ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Microtask 1'"
                            }),
                            " (queued as a ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "microtask"
                            }),
                            ")."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The two ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "setTimeout"
                            }),
                            " callbacks are ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "macrotasks"
                            }),
                            " and will run after the microtasks."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Macrotask 1'"
                            }),
                            " is logged."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "After ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Macrotask 1"
                            }),
                            ", a new ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "microtask"
                            }),
                            " logs ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Microtask 2'"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Finally, ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Macrotask 2'"
                            }),
                            " is logged."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "10-error-handling-in-promises",
                children: [
                    "10. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Error Handling in Promises"
                    })
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
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
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
                                    children: ".then"
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "throw"
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
                                    children: "new"
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
                                    children: "Error"
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
                                    children: "'Error in promise'"
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
                                children: "  })"
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
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'Second .then'"
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
                                children: "  })"
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
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".catch"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "((error) "
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
                                    children: "'Caught:'"
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
                                    children: "error"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ".message);"
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
                                children: "  })"
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
                                    children: "  "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'After catch'"
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
                                children: "  });"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "Caught: Error in promise"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "After catch"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "An error is thrown in the first ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            " block, causing the promise to reject."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The error is caught in the ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "catch()"
                            }),
                            " block, which logs the error message ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'Caught: Error in promise'"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "then()"
                            }),
                            " block after ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "catch()"
                            }),
                            " still executes, logging ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'After catch'"
                            }),
                            "."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                id: "11-asyncawait-and-promise-interaction",
                children: [
                    "11. ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "async/await and Promise Interaction"
                    })
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
                                    children: "async1"
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
                                    children: "'A'"
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
                                    children: "async2"
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
                                    children: "'B'"
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
                                    children: "async2"
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
                                    children: "'C'"
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
                                    children: " "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "Promise"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".resolve"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "()"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".then"
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
                                    children: "'D'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "));"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "async1"
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
                                    children: "'E'"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: ");"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Output"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                "data-language": "text",
                "data-theme": "default",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                    "data-language": "text",
                    "data-theme": "default",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "A"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "C"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "E"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "D"
                            })
                        }),
                        "\n",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                            className: "line",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                style: {
                                    color: "var(--shiki-color-text)"
                                },
                                children: "B"
                            })
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Explanation"
                    }),
                    ":"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'A'"
                            }),
                            " and ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'C'"
                            }),
                            " are logged synchronously."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "The ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "await"
                            }),
                            " pauses ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "async1()"
                            }),
                            " after ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'C'"
                            }),
                            " is logged, allowing ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "'E'"
                            }),
                            " to"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "be logged (synchronous).\n3. The promise inside ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "async2()"
                    }),
                    " resolves and logs ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "'D'"
                    }),
                    ".\n4. After the ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "await"
                    }),
                    " finishes, ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "'B'"
                    }),
                    " is logged."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "By understanding how synchronous and asynchronous code, microtasks (promises), and macrotasks (setTimeout) interact in JavaScript's event loop, you can predict the output of these tricky code snippets."
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
var __webpack_exports__ = __webpack_require__.X(0, [940,812,636,323,178,188], () => (__webpack_exec__(2854)));
module.exports = __webpack_exports__;

})();