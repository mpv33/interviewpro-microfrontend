"use strict";
(() => {
var exports = {};
exports.id = 39;
exports.ids = [39,660];
exports.modules = {

/***/ 1358:
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
/* harmony import */ var private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5642);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/javascript/objects-array","pathname":"/javascript/objects-array","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({
          ...options,
          components: {
            App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__["default"],
            Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default()),
          },
          userland: private_next_pages_javascript_objects_array_mdx__WEBPACK_IMPORTED_MODULE_4__,
        })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5642:
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
        "filePath": "pages/javascript/objects-array.mdx",
        "route": "/javascript/objects-array",
        "headings": [
            {
                "depth": 1,
                "value": " Understanding Objects and Array ",
                "id": "-understanding-objects-and-array-"
            },
            {
                "depth": 3,
                "value": "Objects and Arrays",
                "id": "objects-and-arrays"
            },
            {
                "depth": 4,
                "value": "Object Manipulation",
                "id": "object-manipulation"
            },
            {
                "depth": 4,
                "value": "Array Methods",
                "id": "array-methods"
            },
            {
                "depth": 4,
                "value": "Destructuring",
                "id": "destructuring"
            },
            {
                "depth": 4,
                "value": "Flattening Arrays",
                "id": "flattening-arrays"
            },
            {
                "depth": 4,
                "value": "Flatten Object",
                "id": "flatten-object"
            },
            {
                "depth": 4,
                "value": "Cloning Arrays",
                "id": "cloning-arrays"
            },
            {
                "depth": 4,
                "value": "Cloning Objects",
                "id": "cloning-objects"
            },
            {
                "depth": 4,
                "value": "Merging Arrays and Objects",
                "id": "merging-arrays-and-objects"
            },
            {
                "depth": 4,
                "value": "Removing Duplicates",
                "id": "removing-duplicates"
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
        "title": " Understanding Objects and Array "
    },
    pageNextRoute: "/javascript/objects-array",
    nextraLayout: nextra_theme_docs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
    themeConfig: _Users_mateshwariverma_Desktop_interviewpro_mfa_apps_webdev_docs_theme_config_tsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
/*@jsxRuntime automatic @jsxImportSource react*/ 

function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        h3: "h3",
        p: "p",
        strong: "strong",
        h4: "h4",
        ol: "ol",
        li: "li",
        pre: "pre",
        code: "code",
        span: "span"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    id: "animated-text",
                    className: "text-center my-4",
                    children: " Understanding Objects and Array "
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "objects-and-arrays",
                children: "Objects and Arrays"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Objects"
                    }),
                    " and ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "Arrays"
                    }),
                    " are fundamental data structures in JavaScript used to store collections of data."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "object-manipulation",
                children: "Object Manipulation"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Creation Using Literal Notation:"
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
                                                children: "// Object literal notation"
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
                                                    children: "person"
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
                                                    children: "  name"
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
                                                    children: "'John Doe'"
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
                                                    children: "  age"
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
                                                    children: "30"
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
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "greet"
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
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "`Hello, my name is "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "${"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "this"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".name"
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
                                                    children: ".`"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "person"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".name); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 'John Doe'"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "person"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".greet"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "()); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 'Hello, my name is John Doe.'"
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
                                        children: "Explanation:"
                                    }),
                                    " This creates an object ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "person"
                                    }),
                                    " with properties ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "name"
                                    }),
                                    " and ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "age"
                                    }),
                                    ", and a method ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "greet"
                                    }),
                                    "."
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
                                    children: "Creation Using Constructors:"
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
                                                children: "// Constructor function"
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
                                                    children: "Person"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(name"
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
                                                    children: " age) {"
                                                })
                                            ]
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
                                                    children: "this"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".name "
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
                                                    children: " name;"
                                                })
                                            ]
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
                                                    children: "this"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".age "
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
                                                    children: " age;"
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
                                                    children: "Person"
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
                                                    children: "prototype"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "greet"
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
                                                    children: "function"
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
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "`Hello, my name is "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "${"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "this"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".name"
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
                                                    children: ".`"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "john"
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
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "Person"
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
                                                    children: "'John Doe'"
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
                                                    children: "30"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "john"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".name); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 'John Doe'"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "john"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".greet"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "()); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 'Hello, my name is John Doe.'"
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
                                        children: "Explanation:"
                                    }),
                                    " The ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Person"
                                    }),
                                    " function is a constructor for creating new ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Person"
                                    }),
                                    " objects with ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "name"
                                    }),
                                    " and ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "age"
                                    }),
                                    " properties and a ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "greet"
                                    }),
                                    " method."
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
                                        "Creation Using ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "Object.create()"
                                        }),
                                        ":"
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
                                                children: "// Prototype-based creation"
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
                                                    children: "personPrototype"
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
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "greet"
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
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "`Hello, my name is "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "${"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "this"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".name"
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
                                                    children: ".`"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "john"
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
                                                    children: "Object"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".create"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(personPrototype);"
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
                                                    children: "john"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".name "
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
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'John Doe'"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "john"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".age "
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
                                                    children: "30"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "john"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".name); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 'John Doe'"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "john"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".greet"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "()); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 'Hello, my name is John Doe.'"
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
                                        children: "Explanation:"
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Object.create()"
                                    }),
                                    " creates an object with the specified prototype object (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "personPrototype"
                                    }),
                                    "). Properties can then be added to the new object."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "array-methods",
                children: "Array Methods"
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "push()"
                                        }),
                                        ":"
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
                                                    children: "fruits"
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
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'apple'"
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
                                                    children: "'banana'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "fruits"
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
                                                    children: "("
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'cherry'"
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
                                                    children: "(fruits); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// ['apple', 'banana', 'cherry']"
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
                                        children: "Explanation:"
                                    }),
                                    " Adds a new element (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "'cherry'"
                                    }),
                                    ") to the end of the ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "fruits"
                                    }),
                                    " array."
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "pop()"
                                        }),
                                        ":"
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
                                                    children: "fruits"
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
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-string-expression)"
                                                    },
                                                    children: "'apple'"
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
                                                    children: "'banana'"
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
                                                    children: "'cherry'"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "lastFruit"
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
                                                    children: "fruits"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".pop"
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
                                                    children: "(lastFruit); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 'cherry'"
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
                                                    children: "(fruits); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// ['apple', 'banana']"
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
                                        children: "Explanation:"
                                    }),
                                    " Removes the last element (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "'cherry'"
                                    }),
                                    ") from the ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "fruits"
                                    }),
                                    " array and returns it."
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "map()"
                                        }),
                                        ":"
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
                                                    children: "numbers"
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
                                                    children: "3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "doubled"
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
                                                    children: "numbers"
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
                                                    children: "(num "
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
                                                    children: " num "
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
                                                    children: "(doubled); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [2, 4, 6]"
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
                                        children: "Explanation:"
                                    }),
                                    " Creates a new array where each element is the result of applying the provided function to each element in the ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "numbers"
                                    }),
                                    " array."
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "filter()"
                                        }),
                                        ":"
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
                                                    children: "numbers"
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
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "4"
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
                                                    children: "5"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "evenNumbers"
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
                                                    children: "numbers"
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
                                                    children: "(num "
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
                                                    children: " num "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "%"
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
                                                    children: " "
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
                                                    children: "(evenNumbers); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [2, 4]"
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
                                        children: "Explanation:"
                                    }),
                                    " Creates a new array containing only the elements that satisfy the provided condition (even numbers in this case)."
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "reduce()"
                                        }),
                                        ":"
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
                                                    children: "numbers"
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
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "sum"
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
                                                    children: "numbers"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".reduce"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "((accumulator"
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
                                                    children: " current) "
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
                                                    children: " accumulator "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "+"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " current"
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
                                                    children: "(sum); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// 10"
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
                                        children: "Explanation:"
                                    }),
                                    " Reduces the array to a single value by applying a function (summing in this case) to each element."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "destructuring",
                children: "Destructuring"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Arrays:"
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
                                    children: "numbers"
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
                                    children: "3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "];"
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
                                    children: " ["
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "a"
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
                                    children: "b"
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
                                    children: "c"
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
                                    children: " numbers;"
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
                                    children: "(a); "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 1"
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
                                    children: "(b); "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 2"
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
                                    children: "(c); "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 3"
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Objects:"
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
                                    children: "person"
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
                                    children: " { name"
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
                                    children: "'John'"
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
                                    children: " age"
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
                                    children: "30"
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
                                    children: " { "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-constant)"
                                    },
                                    children: "name"
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
                                    children: "age"
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
                                    children: " person;"
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
                                    children: "(name); "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 'John'"
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
                                    children: "(age); "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// 30"
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
                        children: "Explanation:"
                    }),
                    " Destructuring allows for extracting values from arrays or objects into separate variables in a concise manner."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "flattening-arrays",
                children: "Flattening Arrays"
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
                                            children: "flat()"
                                        }),
                                        ":"
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
                                                    children: "nestedArray"
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
                                                    children: " ["
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
                                                    children: " ["
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
                                                    children: " ["
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "]]]];"
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
                                                    children: "flatArray"
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
                                                    children: "nestedArray"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".flat"
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
                                                    children: "2"
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
                                                    children: "(flatArray); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [1, 2, 3, [4]]"
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
                                        children: "Explanation:"
                                    }),
                                    " The ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "flat()"
                                    }),
                                    " method flattens nested arrays up to a specified depth (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "2"
                                    }),
                                    " in this case)."
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
                                    children: "Using Recursion:"
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
                                                    children: "flattenArray"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(arr) {"
                                                })
                                            ]
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
                                                    children: "arr"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".reduce"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "((flat"
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
                                                    children: " toFlatten) "
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
                                                })
                                            ]
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
                                                    children: "flat"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".concat"
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
                                                    children: "Array"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".isArray"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(toFlatten) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "?"
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
                                                    children: "flattenArray"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(toFlatten) "
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
                                                    children: " toFlatten)"
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
                                                    children: "nestedArray"
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
                                                    children: " ["
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
                                                    children: " ["
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
                                                    children: " ["
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "]]]];"
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
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "flattenArray"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(nestedArray)); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [1, 2, 3, 4]"
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
                                        children: "Explanation:"
                                    }),
                                    " The ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "flattenArray"
                                    }),
                                    " function recursively concatenates elements, flattening nested arrays."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "flatten-object",
                children: "Flatten Object"
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
                                    children: "flattenObject"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(obj"
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
                                    children: " prefix "
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
                                        color: "var(--shiki-token-string-expression)"
                                    },
                                    children: "''"
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
                                    children: "let"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " items "
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
                                    children: "key"
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
                                    children: "value"
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
                                    children: "of"
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
                                    children: "Object"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".entries"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(obj)) {"
                                })
                            ]
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
                                    children: "newKey"
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
                                    children: " prefix "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "?"
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
                                    children: "prefix"
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
                                    children: "."
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
                                    children: "key"
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
                                    children: " "
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
                                    children: " key;"
                                })
                            ]
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
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "typeof"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " value "
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
                                    children: "'object'"
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
                                    children: "&&"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " value "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-keyword)"
                                    },
                                    children: "!=="
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
                                    children: "null"
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
                                    children: "&&"
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
                                    children: "!"
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
                                    children: ".isArray"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(value)) {"
                                })
                            ]
                        }),
                        "\n",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                            className: "line",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "      items "
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
                                    children: "items"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".concat"
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
                                    children: "flattenObject"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(value"
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
                                    children: " newKey));"
                                })
                            ]
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
                                    children: "      "
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
                                    children: ".push"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "([newKey"
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
                                    children: " value]);"
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
                                    children: "Object"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: ".fromEntries"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(items);"
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
                                    children: "nestedObj"
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
                                    children: " { a"
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
                                    children: " b"
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
                                    children: " { c"
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
                                    children: " d"
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
                                    children: " { e"
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
                                    children: "3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: " } } };"
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
                                        color: "var(--shiki-token-function)"
                                    },
                                    children: "flattenObject"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-color-text)"
                                    },
                                    children: "(nestedObj)); "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                    style: {
                                        color: "var(--shiki-token-comment)"
                                    },
                                    children: "// { a: 1, 'b.c': 2, 'b.d.e': 3 }"
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
                        children: "Explanation:"
                    }),
                    " The ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "flattenObject"
                    }),
                    " function flattens nested objects by concatenating nested keys into a single level object."
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "cloning-arrays",
                children: "Cloning Arrays"
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
                                            children: "slice()"
                                        }),
                                        ":"
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
                                                    children: "original"
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
                                                    children: "3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "clone"
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
                                                    children: "original"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".slice"
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
                                                    children: "(clone); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [1, 2, 3]"
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
                                        children: "Explanation:"
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "slice()"
                                    }),
                                    " creates a shallow copy of the array."
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
                                        "Using Spread Operator (",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "..."
                                        }),
                                        "):"
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
                                                    children: "original"
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
                                                    children: "3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "clone"
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
                                                    children: "original];"
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
                                                    children: "(clone); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [1, 2, 3]"
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
                                        children: "Explanation:"
                                    }),
                                    " The spread operator (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "..."
                                    }),
                                    ") creates a shallow copy of the array."
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
                                            children: "Array.from()"
                                        }),
                                        ":"
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
                                                    children: "original"
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
                                                    children: "3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "clone"
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
                                                    children: "(original);"
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
                                                    children: "(clone); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [1, 2, 3]"
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
                                        children: "Explanation:"
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Array.from()"
                                    }),
                                    " creates a shallow copy of the array."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "cloning-objects",
                children: "Cloning Objects"
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
                                            children: "Object.assign()"
                                        }),
                                        ":"
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
                                                    children: "original"
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
                                                    children: " { a"
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
                                                    children: " b"
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
                                                    children: "2"
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
                                                    children: "clone"
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
                                                    children: "Object"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".assign"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "({}"
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
                                                    children: " original);"
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
                                                    children: "(clone); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// { a: 1, b: 2 }"
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
                                        children: "Explanation:"
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Object.assign()"
                                    }),
                                    " creates a shallow copy of the object."
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
                                        "Using Spread Operator (",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "..."
                                        }),
                                        "):"
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
                                                    children: "original"
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
                                                    children: " { a"
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
                                                    children: " b"
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
                                                    children: "2"
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
                                                    children: "clone"
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
                                                    children: " { "
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
                                                    children: "original };"
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
                                                    children: "(clone); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// { a: 1, b: 2 }"
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
                                        children: "Explanation:"
                                    }),
                                    " The spread operator (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "..."
                                    }),
                                    ") creates a shallow copy of the object."
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
                                    children: "Deep Cloning with Libraries (e.g., Lodash):"
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
                                                    children: "_"
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
                                                    children: "require"
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
                                                    children: "'lodash'"
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
                                                    children: "original"
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
                                                    children: " { a"
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
                                                    children: " b"
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
                                                    children: " { c"
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
                                                    children: "2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " } };"
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
                                                    children: "clone"
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
                                                    children: "_"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".cloneDeep"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(original);"
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
                                                    children: "(clone); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// { a: 1, b: { c: 2 } }"
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
                                        children: "Explanation:"
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "_.cloneDeep()"
                                    }),
                                    " creates a deep copy of the object, including nested properties."
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
                                    children: "Deep Cloning with Custom Recursive Method:"
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
                                                    children: "deepClone"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(obj) {"
                                                })
                                            ]
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
                                                    children: " (obj "
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
                                                    children: "null"
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
                                                    children: "||"
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
                                                    children: "typeof"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " obj "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "!=="
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
                                                    children: "'object'"
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
                                                    children: "return"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " obj;"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "copy"
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
                                                    children: ".isArray"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(obj) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " [] "
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
                                                    children: " {};"
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
                                                    children: "key"
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
                                                    children: "in"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " obj) {"
                                                })
                                            ]
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
                                                    children: "obj"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".hasOwnProperty"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(key)) {"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "      copy[key] "
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
                                                    children: "deepClone"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(obj[key]);"
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
                                                    children: " copy;"
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
                                                    children: "original"
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
                                                    children: " { a"
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
                                                    children: " b"
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
                                                    children: " { c"
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
                                                    children: "2"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " } };"
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
                                                    children: "clone"
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
                                                    children: "deepClone"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(original);"
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
                                                    children: "(clone); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// { a: 1, b: { c: 2 } }"
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
                                        children: "Explanation:"
                                    }),
                                    " The ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "deepClone"
                                    }),
                                    " function recursively copies properties to ensure a deep clone."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "merging-arrays-and-objects",
                children: "Merging Arrays and Objects"
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Merging Arrays:"
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
                                                    children: "arr1"
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
                                                    children: "];"
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
                                                    children: "arr2"
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
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "merged"
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
                                                    children: "arr1"
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
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "arr2];"
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
                                                    children: "(merged); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [1, 2, 3, 4]"
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
                                        children: "Explanation:"
                                    }),
                                    " Using the spread operator (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "..."
                                    }),
                                    ") merges multiple arrays into one."
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
                                    children: "Merging Objects:"
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
                                                    children: "obj1"
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
                                                    children: " { a"
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
                                                    children: " b"
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
                                                    children: "2"
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
                                                    children: "obj2"
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
                                                    children: " { b"
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
                                                    children: " c"
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
                                                    children: "4"
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
                                                    children: "merged"
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
                                                    children: " { "
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
                                                    children: "obj1"
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
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "..."
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "obj2 };"
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
                                                    children: "(merged); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// { a: 1, b: 3, c: 4 }"
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
                                        children: "Explanation:"
                                    }),
                                    " The spread operator (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "..."
                                    }),
                                    ") merges objects, with later properties overwriting earlier ones."
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "removing-duplicates",
                children: "Removing Duplicates"
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
                                            children: "Set"
                                        }),
                                        ":"
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
                                                    children: "numbers"
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
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "4"
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
                                                    children: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "unique"
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
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "...new"
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
                                                    children: "Set"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(numbers)];"
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
                                                    children: "(unique); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [1, 2, 3, 4]"
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
                                        children: "Explanation:"
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "Set"
                                    }),
                                    " automatically removes duplicate values, and the spread operator (",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "..."
                                    }),
                                    ") converts it back to an array."
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
                                            children: "filter()"
                                        }),
                                        ":"
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
                                                    children: "numbers"
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
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "4"
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
                                                    children: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                    children: "unique"
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
                                                    children: "numbers"
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
                                                    children: "((value"
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
                                                    children: " index"
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
                                                    children: " self) "
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
                                                    children: "self"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".indexOf"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(value) "
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
                                                    children: " index);"
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
                                                    children: "(unique); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [1, 2, 3, 4]"
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
                                        children: "Explanation:"
                                    }),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "filter()"
                                    }),
                                    " keeps only the first occurrence of each value."
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
                                    children: "Using Custom Logic:"
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
                                                    children: "removeDuplicates"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(arr) {"
                                                })
                                            ]
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
                                                    children: "seen"
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
                                                    children: " {};"
                                                })
                                            ]
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
                                                    children: "arr"
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
                                                    children: "seen"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".hasOwnProperty"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(item) "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-keyword)"
                                                    },
                                                    children: "?"
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
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: " "
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
                                                    children: " (seen[item] "
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
                                                    children: "true"
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
                                                    children: "numbers"
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
                                                    children: " "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "4"
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
                                                    children: "4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "];"
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
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "removeDuplicates"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(numbers)); "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// [1, 2, 3, 4]"
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
                                        children: "Explanation:"
                                    }),
                                    " This custom function uses an object to track seen values and filter out duplicates."
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
                children: "By understanding these techniques and their applications, you can handle complex data structures more effectively in JavaScript."
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
var __webpack_exports__ = __webpack_require__.X(0, [940,812,636,323,178,188], () => (__webpack_exec__(1358)));
module.exports = __webpack_exports__;

})();