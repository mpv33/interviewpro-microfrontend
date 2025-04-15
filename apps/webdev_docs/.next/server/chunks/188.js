"use strict";
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 3188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ theme_config)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/AnimatedLogo.tsx


const AnimatedLogo = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
            className: "pl-2 text-2xl font-bold",
            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                id: "animated-text-header",
                children: "InterviewPro"
            })
        })
    });
};
/* harmony default export */ const components_AnimatedLogo = (AnimatedLogo);

// EXTERNAL MODULE: ./node_modules/@feelback/react/styles/feelback.css
var feelback = __webpack_require__(9507);
;// CONCATENATED MODULE: ./theme.config.tsx




function CustomFooter() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: " py-4 w-full",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto text-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "text-md  mx-auto font-bold",
                    children: "Powered By Mateshwari"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "text-sm",
                    children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "mailto:mateshwari33@gmail.com",
                        className: "hover:underline",
                        children: "mateshwari33@gmail.com"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                    className: "text-xs mt-2",
                    children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " InterviewPro.info All rights reserved."
                    ]
                })
            ]
        })
    });
}
const config = {
    logo: /*#__PURE__*/ jsx_runtime.jsx(components_AnimatedLogo, {}),
    head: /*#__PURE__*/ (0,jsx_runtime.jsxs)((external_react_default()).Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "theme-color",
                content: "#ffffff"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                httpEquiv: "Content-Language",
                content: "en"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                href: "/images/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("title", {
                children: "InterviewPro"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "description",
                content: "InterviewPro info offers high-quality free technical content on DSA,JavaScript, ReactJS, NodeJs, and NextJs, catering to last-minute preparation for the most commonly asked interview questions."
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:title",
                content: "InterviewPro"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:description",
                content: "InterviewPro info offers high-quality free technical content on DSA,JavaScript, ReactJS, NodeJs, and NextJs, catering to last-minute preparation for the most commonly asked interview questions."
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "apple-mobile-web-app-title",
                content: "InterviewPro"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                property: "og:image",
                content: "/card/c1.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "keywords",
                content: "InterviewPro info, Data Structures, Algorithms, JavaScript, ReactJS, NodeJs, NextJs, interview questions"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "author",
                content: "Mateshwari verma"
            })
        ]
    }),
    banner: {
        key: "2.0.0-release ",
        text: /*#__PURE__*/ jsx_runtime.jsx("a", {
            href: "/release",
            target: "_blank",
            children: "\uD83C\uDF89 InterviewPro Info v2.0.0: Stay Informed about the Upcoming Release →"
        })
    },
    editLink: {
        text: ""
    },
    feedback: {
        useLink: ()=>{
            return "https://github.com/mpv33/InterviewPro-feedback/issues";
        }
    },
    themeSwitch: {
        useOptions () {
            return {
                system: "System",
                dark: "Dark",
                light: "Light"
            };
        }
    },
    // project: {
    //   link: 'https://github.com/mpv33'
    // },
    footer: {
        text: /*#__PURE__*/ jsx_runtime.jsx(CustomFooter, {})
    },
    navbar: {
        component: null
    }
};
/* harmony default export */ const theme_config = (config);


/***/ })

};
;