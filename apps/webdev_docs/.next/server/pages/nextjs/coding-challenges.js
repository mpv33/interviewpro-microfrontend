"use strict";
(() => {
var exports = {};
exports.id = 697;
exports.ids = [697,660];
exports.modules = {

/***/ 1444:
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
/* harmony import */ var private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2621);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/nextjs/coding-challenges","pathname":"/nextjs/coding-challenges","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({
          ...options,
          components: {
            App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__["default"],
            Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default()),
          },
          userland: private_next_pages_nextjs_coding_challenges_mdx__WEBPACK_IMPORTED_MODULE_4__,
        })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2621:
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
        "filePath": "pages/nextjs/coding-challenges.mdx",
        "route": "/nextjs/coding-challenges",
        "headings": [
            {
                "depth": 2,
                "value": "Coding challenges",
                "id": "coding-challenges"
            },
            {
                "depth": 3,
                "value": "1. Blog with SSG",
                "id": "1-blog-with-ssg"
            },
            {
                "depth": 3,
                "value": "2. Authentication with NextAuth",
                "id": "2-authentication-with-nextauth"
            },
            {
                "depth": 3,
                "value": "3. API Route with Dynamic Params",
                "id": "3-api-route-with-dynamic-params"
            },
            {
                "depth": 3,
                "value": "4. SSR E-commerce Product Page",
                "id": "4-ssr-e-commerce-product-page"
            },
            {
                "depth": 3,
                "value": "5. ISR Real-Time Blog",
                "id": "5-isr-real-time-blog"
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
        "title": "Coding Challenges"
    },
    pageNextRoute: "/nextjs/coding-challenges",
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    themeConfig: _Users_mateshwariverma_Desktop_interviewpro_mfa_apps_webdev_docs_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        h2: "h2",
        h3: "h3",
        strong: "strong",
        p: "p",
        code: "code",
        ol: "ol",
        li: "li",
        pre: "pre",
        span: "span",
        hr: "hr"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "coding-challenges",
                children: "Coding challenges"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "1-blog-with-ssg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "1. Blog with SSG"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Objective"
                    }),
                    ": Build a static blog where blog pages are pre-rendered using ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "getStaticProps"
                    }),
                    " and ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "getStaticPaths"
                    }),
                    "."
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Steps"
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
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Create a Blog Post Page"
                                    }),
                                    ": Use file-based routing to create a dynamic blog post page."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "File: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "pages/posts/[id].js"
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
                                                    children: " { useRouter } "
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
                                                    children: "'next/router'"
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
                                                    children: " { getPostData"
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
                                                    children: " getAllPostIds } "
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
                                                    children: "'../../lib/posts'"
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
                                                    children: "Post"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "({ postData }) {"
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
                                                    children: "router"
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
                                                    children: "useRouter"
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
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Show a loader if the page is being built"
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
                                                    children: "router"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".isFallback) {"
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
                                                    children: "article"
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
                                                    children: ">{"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "postData"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".title}</"
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
                                                    children: "div"
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
                                                    children: "postData"
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
                                                    children: "article"
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
                                                children: "// Fetch data for a specific post"
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
                                                    children: "({ params }) {"
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
                                                    children: "postData"
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
                                                    children: "getPostData"
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
                                                    children: "params"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".id);"
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
                                                    children: "      postData"
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
                                                    children: "    }"
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Generate paths for all blog posts"
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
                                                    children: "getStaticPaths"
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
                                                    children: "paths"
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
                                                    children: "getAllPostIds"
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
                                                    children: "    paths"
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
                                                    children: "    fallback"
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Data Fetching Functions"
                                    }),
                                    ": Implement functions to fetch post data and paths."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "File: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "lib/posts.js"
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "js",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "js",
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
                                                    children: " fs "
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
                                                    children: "'fs'"
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
                                                    children: " path "
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
                                                    children: "'path'"
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
                                                    children: " matter "
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
                                                    children: "'gray-matter'"
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
                                                    children: "postsDirectory"
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
                                                    children: "path"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".join"
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
                                                    children: "process"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".cwd"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "()"
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
                                                    children: "'posts'"
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
                                                    children: "getAllPostIds"
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
                                                    children: "fileNames"
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
                                                    children: "fs"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".readdirSync"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(postsDirectory);"
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
                                                    children: "fileNames"
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
                                                    children: "(fileName "
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
                                                    children: " ({"
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
                                                    children: "    params"
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
                                                    children: "      id"
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
                                                    children: "fileName"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".replace"
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
                                                    children: "/\\.md"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "$"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "/"
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
                                                    children: "''"
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
                                                children: "  }));"
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
                                                    children: "getPostData"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(id) {"
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
                                                    children: "fullPath"
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
                                                    children: "path"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".join"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(postsDirectory"
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
                                                    children: "`"
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
                                                    children: "id"
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
                                                    children: ".md`"
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
                                                    children: "fileContents"
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
                                                    children: "fs"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".readFileSync"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(fullPath"
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
                                                    children: "'utf8'"
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
                                                    children: " { "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "data"
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
                                                    children: "content"
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
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "matter"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(fileContents);"
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
                                                    children: "    id"
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
                                                    children: "    "
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
                                                    children: "data"
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
                                                    children: "    content"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "2-authentication-with-nextauth",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "2. Authentication with NextAuth"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Objective"
                    }),
                    ": Implement social login with providers like GitHub, Google, or Facebook using NextAuth.js."
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Steps"
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
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Install NextAuth.js"
                                    }),
                                    ": Add the package to your Next.js project."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "bash",
                                "data-theme": "default",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    "data-language": "bash",
                                    "data-theme": "default",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-function)"
                                                },
                                                children: "npm"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-string)"
                                                },
                                                children: "install"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-string)"
                                                },
                                                children: "next-auth"
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Configure NextAuth.js"
                                    }),
                                    ": Set up authentication providers."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "File: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "pages/api/auth/[...nextauth].js"
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "js",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "js",
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
                                                    children: " NextAuth "
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
                                                    children: "'next-auth'"
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
                                                    children: " GitHubProvider "
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
                                                    children: "'next-auth/providers/github'"
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
                                                    children: " GoogleProvider "
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
                                                    children: "'next-auth/providers/google'"
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
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "NextAuth"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "({"
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
                                                    children: "  providers"
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
                                                    children: "GitHubProvider"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "({"
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
                                                    children: "      clientId"
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
                                                    children: "process"
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
                                                    children: "env"
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
                                                    children: "GITHUB_ID"
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
                                                    children: "      clientSecret"
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
                                                    children: "process"
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
                                                    children: "env"
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
                                                    children: "GITHUB_SECRET"
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
                                                    children: "    })"
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
                                                    children: "    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "GoogleProvider"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "({"
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
                                                    children: "      clientId"
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
                                                    children: "process"
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
                                                    children: "env"
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
                                                    children: "GOOGLE_ID"
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
                                                    children: "      clientSecret"
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
                                                    children: "process"
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
                                                    children: "env"
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
                                                    children: "GOOGLE_SECRET"
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
                                                    children: "    })"
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
                                                    children: "  ]"
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
                                                    children: "  pages"
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
                                                    children: "    signIn"
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
                                                    children: "'/auth/signin'"
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
                                                children: "});"
                                            })
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Add Environment Variables"
                                    }),
                                    ": Configure environment variables in ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: ".env.local"
                                    }),
                                    "."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "env",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "env",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "GITHUB_ID=your-github-client-id"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "GITHUB_SECRET=your-github-client-secret"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "GOOGLE_ID=your-google-client-id"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "GOOGLE_SECRET=your-google-client-secret"
                                            })
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Create Sign-In Page"
                                    }),
                                    ": Implement the sign-in UI."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "File: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "pages/auth/signin.js"
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
                                                    children: " { signIn } "
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
                                                    children: "'next-auth/react'"
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
                                                    children: "SignIn"
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
                                                    children: ">Sign In</"
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
                                                    children: "signIn"
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
                                                    children: "'github'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ")}>Sign in with GitHub</"
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
                                                    children: "signIn"
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
                                                    children: "'google'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ")}>Sign in with Google</"
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
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "3-api-route-with-dynamic-params",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "3. API Route with Dynamic Params"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Objective"
                    }),
                    ": Create an API route that handles dynamic parameters to fetch user-specific data."
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Steps"
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
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Create the API Route"
                                    }),
                                    ": Use dynamic file names to handle dynamic parameters."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "File: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "pages/api/users/[id].js"
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "js",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "js",
                                    "data-theme": "default",
                                    children: [
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
                                                    children: "handler"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(req"
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
                                                    children: " res) {"
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
                                                    children: " { "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "id"
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
                                                    children: "req"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".query;"
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
                                                    children: "// Fetch user data from a database or another source"
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
                                                    children: "user"
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
                                                    children: "getUserData"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(id);"
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
                                                    children: "if"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " (user) {"
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
                                                    children: "res"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".status"
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
                                                    children: "200"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ")"
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
                                                    children: "(user);"
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
                                                    children: "else"
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
                                                    children: "res"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".status"
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
                                                    children: "404"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ")"
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
                                                    children: "({ message"
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
                                                    children: "'User not found'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " });"
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
                                                    children: "getUserData"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(id) {"
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
                                                    children: "// Replace with actual data fetching logic"
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
                                                    children: " { id"
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
                                                    children: " name"
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
                                                    children: "'User Name'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " };"
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Test the API Route"
                                    }),
                                    ": Ensure the API correctly handles requests with different IDs."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "bash",
                                "data-theme": "default",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    "data-language": "bash",
                                    "data-theme": "default",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-function)"
                                                },
                                                children: "curl"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: " "
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-string)"
                                                },
                                                children: "http://localhost:3000/api/users/123"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "4-ssr-e-commerce-product-page",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "4. SSR E-commerce Product Page"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Objective"
                    }),
                    ": Build an e-commerce product page that uses ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "getServerSideProps"
                    }),
                    " to fetch data dynamically."
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Steps"
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
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Create the Product Page"
                                    }),
                                    ": Fetch product data on each request."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "File: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "pages/products/[id].js"
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
                                                    children: " { useRouter } "
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
                                                    children: "'next/router'"
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
                                                    children: "Product"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "({ product }) {"
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
                                                    children: "router"
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
                                                    children: "useRouter"
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
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Show a loader if the page is being built"
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
                                                    children: "router"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".isFallback) {"
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
                                                    children: ">{"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "product"
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
                                                    children: "product"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".description}</"
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
                                                    children: "      <"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "span"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ">${"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "product"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".price}</"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "span"
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
                                                children: "// Fetch data for a product"
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
                                                    children: "({ params }) {"
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
                                                    children: "product"
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
                                                    children: "fetchProductData"
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
                                                    children: "params"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".id);"
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
                                                    children: "      product"
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
                                                    children: "    }"
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
                                                    children: "fetchProductData"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(id) {"
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
                                                    children: "// Replace with actual data fetching logic"
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
                                                    children: " { id"
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
                                                    children: " name"
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
                                                    children: "'Product Name'"
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
                                                    children: " description"
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
                                                    children: "'Product Description'"
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
                                                    children: " price"
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
                                                    children: "99.99"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " };"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "5-isr-real-time-blog",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "5. ISR Real-Time Blog"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Objective"
                    }),
                    ": Build a blog that uses Incremental Static Regeneration (ISR) to fetch and display updated content after deployment."
                ]
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Steps"
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
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Configure ISR"
                                    }),
                                    ": Set up ISR with ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "revalidate"
                                    }),
                                    " in ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "getStaticProps"
                                    }),
                                    "."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "File: ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "pages/blog/[id].js"
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
                                                    children: " { useRouter } "
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
                                                    children: "'next/router'"
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
                                                    children: " { getPostData"
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
                                                    children: " getAllPostIds } "
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
                                                    children: "'../../lib/posts'"
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
                                                    children: "Post"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "({ postData }) {"
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
                                                    children: "router"
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
                                                    children: "useRouter"
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
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Show a loader if the page is being built"
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
                                                    children: "router"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".isFallback) {"
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
                                                    children: "article"
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
                                                    children: ">{"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "postData"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".title}</"
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
                                                    children: "div"
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
                                                    children: "postData"
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
                                                    children: "article"
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
                                                children: "// Fetch data for a specific post"
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
                                                    children: "({ params }) {"
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
                                                    children: "postData"
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
                                                    children: "getPostData"
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
                                                    children: "params"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".id);"
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
                                                    children: "      postData"
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
                                                    children: "    }"
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
                                                    children: "10"
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
                                                    children: "// Revalidate every 10 seconds"
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-token-comment)"
                                                },
                                                children: "// Generate paths for all blog posts"
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
                                                    children: "getStaticPaths"
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
                                                    children: "paths"
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
                                                    children: "getAllPostIds"
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
                                                    children: "    paths"
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
                                                    children: "    fallback"
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
                                                    children: "'blocking'"
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "Test ISR"
                                    }),
                                    ": Verify that updates to the blog content appear after the revalidation interval."
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
                children: "These examples cover practical implementations of key Next.js concepts, providing a strong foundation for both understanding and applying Next.js features effectively in real-world scenarios."
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
var __webpack_exports__ = __webpack_require__.X(0, [940,812,636,323,178,188], () => (__webpack_exec__(1444)));
module.exports = __webpack_exports__;

})();