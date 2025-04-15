"use strict";
(() => {
var exports = {};
exports.id = 289;
exports.ids = [289,660];
exports.modules = {

/***/ 1607:
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
/* harmony import */ var private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9785);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__, private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "default"));

        // Re-export methods.
        const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticProps")
        const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "getStaticPaths")
        const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "getServerSideProps")
        const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "config")
        const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getStaticParams")
        const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_1__/* .hoist */ .l)(private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/nextjs/deployment","pathname":"/nextjs/deployment","bundlePath":"","filename":""}}
        const routeModule = new (next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default())({
          ...options,
          components: {
            App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_3__["default"],
            Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_2___default()),
          },
          userland: private_next_pages_nextjs_deployment_mdx__WEBPACK_IMPORTED_MODULE_4__,
        })
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9785:
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
        "filePath": "pages/nextjs/deployment.mdx",
        "route": "/nextjs/deployment",
        "headings": [
            {
                "depth": 3,
                "value": "Deployment in Next.js",
                "id": "deployment-in-nextjs"
            },
            {
                "depth": 4,
                "value": "1. Vercel: Deploying Next.js Apps",
                "id": "1-vercel-deploying-nextjs-apps"
            },
            {
                "depth": 4,
                "value": "2. Other Platforms",
                "id": "2-other-platforms"
            },
            {
                "depth": 4,
                "value": "3. Environment Variables",
                "id": "3-environment-variables"
            },
            {
                "depth": 4,
                "value": "4. Preview Mode",
                "id": "4-preview-mode"
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
        "title": "Deployment"
    },
    pageNextRoute: "/nextjs/deployment",
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
        ul: "ul",
        li: "li",
        ol: "ol",
        code: "code",
        pre: "pre",
        span: "span"
    }, (0,nextra_mdx__WEBPACK_IMPORTED_MODULE_5__/* .useMDXComponents */ .a)(), props.components);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                id: "deployment-in-nextjs",
                children: "Deployment in Next.js"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Deployment is a crucial step in taking your Next.js application from development to production. Next.js provides various options for deployment, each catering to different needs and preferences. Here’s a detailed breakdown of deployment strategies and best practices:"
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "1-vercel-deploying-nextjs-apps",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "1. Vercel: Deploying Next.js Apps"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Vercel, the company behind Next.js, offers an optimized platform specifically designed for deploying Next.js applications. It provides seamless integration, automatic scaling, and built-in CI/CD."
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Automatic Deployment"
                            }),
                            ": Push your code to GitHub, GitLab, or Bitbucket, and Vercel automatically deploys your changes."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Performance Optimization"
                            }),
                            ": Vercel optimizes your app’s performance with edge caching, global CDN, and serverless functions."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Preview Deployments"
                            }),
                            ": Get preview URLs for each pull request, allowing you to test changes before merging them."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Example: Deploying with Vercel"
                })
            }),
            "\n",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Link Your Repository"
                            }),
                            ": Connect your GitHub/GitLab/Bitbucket repository to Vercel."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Configure Build Settings"
                            }),
                            ": Vercel automatically detects your Next.js project and configures build settings. You can customize these settings if needed."
                        ]
                    }),
                    "\n",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                children: "Deploy"
                            }),
                            ": Push your code changes, and Vercel will automatically build and deploy your application."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "2-other-platforms",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "2. Other Platforms"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "While Vercel is a popular choice, other platforms can also host Next.js applications, offering different features or flexibility. Here are a few alternatives:"
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
                                        children: "Netlify"
                                    }),
                                    ": Provides serverless functions and edge handlers, ideal for static and serverless deployment. Use the ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "next-on-netlify"
                                    }),
                                    " package to handle specific Next.js configurations."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Example Configuration for Netlify"
                                })
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
                                                children: "next-on-netlify"
                                            })
                                        ]
                                    })
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "netlify.toml"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                "data-language": "toml",
                                "data-theme": "default",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.code, {
                                    "data-language": "toml",
                                    "data-theme": "default",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "[build]"
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
                                                    children: "  command "
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
                                                    children: '"npm run build"'
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  publish "
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
                                                    children: '"out"'
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  functions "
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
                                                    children: '"netlify-functions"'
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
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "[[redirects]]"
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
                                                    children: "  from "
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
                                                    children: '"/api/*"'
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  to "
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
                                                    children: '"/api/:splat"'
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  status "
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
                                                    children: "200"
                                                })
                                            ]
                                        }),
                                        "\n",
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  force "
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "AWS"
                                    }),
                                    ": AWS offers various services for deploying Next.js applications, including AWS Amplify for serverless hosting or EC2 for more control over the environment."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Example: Deploying on AWS Amplify"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Connect Your Repository"
                                            }),
                                            ": Link your GitHub or GitLab repository to Amplify."
                                        ]
                                    }),
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Configure Build Settings"
                                            }),
                                            ": Amplify detects your Next.js project and configures the build settings automatically."
                                        ]
                                    }),
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Deploy"
                                            }),
                                            ": Amplify handles the deployment and scaling of your application."
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                        children: "DigitalOcean"
                                    }),
                                    ": Provides Droplets (virtual private servers) for more control or App Platform for a PaaS (Platform as a Service) experience."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Example: Deploying on DigitalOcean App Platform"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Create an App"
                                            }),
                                            ": Link your GitHub repository to App Platform."
                                        ]
                                    }),
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Configure Build and Run Commands"
                                            }),
                                            ": Specify ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "npm run build"
                                            }),
                                            " and ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "npm start"
                                            }),
                                            " commands."
                                        ]
                                    }),
                                    "\n",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                                children: "Deploy"
                                            }),
                                            ": App Platform handles the deployment and scaling."
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.hr, {}),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "3-environment-variables",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "3. Environment Variables"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Managing environment variables securely is crucial for keeping sensitive data safe and ensuring that your application behaves correctly in different environments (development, staging, production)."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                    children: [
                        "Example: Using ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            children: ".env"
                        }),
                        " Files"
                    ]
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
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                        children: [
                                            "Create ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: ".env.local"
                                            })
                                        ]
                                    }),
                                    ": Store environment-specific variables in this file. This file is ignored by version control."
                                ]
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: ".env.local"
                                })
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
                                                children: "NEXT_PUBLIC_API_URL=https://api.example.com"
                                            })
                                        }),
                                        "\n",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                            className: "line",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                style: {
                                                    color: "var(--shiki-color-text)"
                                                },
                                                children: "SECRET_KEY=mysecretkey"
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Access Variables in Code"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
                                    children: [
                                        "Example Usage in ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            children: "next.config.js"
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
                                                    children: "  env"
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
                                                    children: "    NEXT_PUBLIC_API_URL"
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
                                                    children: "NEXT_PUBLIC_API_URL"
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
                                                children: "};"
                                            })
                                        })
                                    ]
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Example Usage in a Component"
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
                                                children: "// components/FetchData.js"
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
                                                    children: "FetchData"
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
                                                    children: "apiUrl"
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
                                                    children: "NEXT_PUBLIC_API_URL"
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
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-comment)"
                                                    },
                                                    children: "// Fetch data from API"
                                                })
                                            ]
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
                                                    children: ">API URL: {apiUrl}</"
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
                                        children: "Environment-Specific Builds"
                                    }),
                                    ": Define environment variables for different stages (e.g., ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: ".env.production"
                                    }),
                                    ", ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: ".env.development"
                                    }),
                                    ")."
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                id: "4-preview-mode",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "4. Preview Mode"
                })
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Preview mode allows you to view and test unpublished content or drafts before they go live. This feature is useful for content-heavy applications where you want to verify changes before publishing."
            }),
            "\n",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                    children: "Example: Enabling Preview Mode"
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
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "Set Up Preview API Route"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "pages/api/preview.js"
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
                                                    children: "req"
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
                                                    children: "query"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: ".secret "
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
                                                    children: "PREVIEW_SECRET"
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
                                                    children: "401"
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
                                                    children: "'Invalid token'"
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
                                                        color: "var(--shiki-token-constant)"
                                                    },
                                                    children: "res"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".setPreviewData"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "({});"
                                                })
                                            ]
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
                                                    children: "res"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: ".redirect"
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
                                                    children: "'/'"
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
                                    children: "Use Preview Mode in Your Application"
                                })
                            }),
                            "\n",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                                    children: "pages/index.js"
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
                                                    children: "(context) {"
                                                })
                                            ]
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
                                                    children: "preview"
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
                                                    children: " context;"
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
                                                    children: "// Fetch data for preview mode if applicable"
                                                })
                                            ]
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
                                                        color: "var(--shiki-token-function)"
                                                    },
                                                    children: "fetchDataForPage"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.span, {
                                                    style: {
                                                        color: "var(--shiki-color-text)"
                                                    },
                                                    children: "(preview);"
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
                                                    children: "      data"
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
                                                    children: "HomePage"
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
                                                    children: ">Data: {data}</"
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
                                        children: "Trigger Preview Mode"
                                    }),
                                    ": Access the preview URL (e.g., ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                        children: "/api/preview?secret=my-secret"
                                    }),
                                    ") to enable preview mode."
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
                children: "By utilizing these deployment strategies, environment management practices, and preview features, you can ensure that your Next.js application is robust, secure, and performs optimally in production."
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
var __webpack_exports__ = __webpack_require__.X(0, [940,812,636,323,178,188], () => (__webpack_exec__(1607)));
module.exports = __webpack_exports__;

})();