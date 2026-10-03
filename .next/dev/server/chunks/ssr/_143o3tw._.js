module.exports = [
"[project]/components/App.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Welcome$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Welcome.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Letter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Letter.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Petals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Petals.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function App() {
    const [unlocked, setUnlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Le thème romantique s'applique à tout le <body> une fois la date trouvée
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.classList.toggle("romance", unlocked);
        window.scrollTo(0, 0);
        return ()=>document.body.classList.remove("romance");
    }, [
        unlocked
    ]);
    if (!unlocked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Welcome$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onUnlock: ()=>setUnlocked(true)
        }, void 0, false, {
            fileName: "[project]/components/App.js",
            lineNumber: 19,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "haze",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/App.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Petals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/App.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Letter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onBack: ()=>setUnlocked(false)
            }, void 0, false, {
                fileName: "[project]/components/App.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/App.js",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Icons.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeartIcon",
    ()=>HeartIcon,
    "LockIcon",
    ()=>LockIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function HeartIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.7 4.5 6.4 4.5c2.1 0 3.8 1.1 5.6 3.3 1.8-2.2 3.5-3.3 5.6-3.3 3.7 0 5.5 3.9 4 7.3C19.5 16.4 12 21 12 21z"
        }, void 0, false, {
            fileName: "[project]/components/Icons.js",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function LockIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: "lock",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.7",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4.5",
                y: "10.5",
                width: "15",
                height: "10",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 10.5V8a4 4 0 0 1 8 0v2.5"
            }, void 0, false, {
                fileName: "[project]/components/Icons.js",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Icons.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Letter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Letter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Letter({ onBack }) {
    let i = 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page letter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "kicker",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].kicker
            }, void 0, false, {
                fileName: "[project]/components/Letter.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "name",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].name
            }, void 0, false, {
                fileName: "[project]/components/Letter.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "subline",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].subline
            }, void 0, false, {
                fileName: "[project]/components/Letter.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flourish",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeartIcon"], {}, void 0, false, {
                    fileName: "[project]/components/Letter.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Letter.js",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "body",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].paragraphs.map((text, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "para" + (k === 0 ? " first" : ""),
                            style: {
                                "--i": i++
                            },
                            children: text
                        }, "a" + k, false, {
                            fileName: "[project]/components/Letter.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "highlight",
                        style: {
                            "--i": i++
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].highlight
                    }, void 0, false, {
                        fileName: "[project]/components/Letter.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].afterHighlight.map((text, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "para",
                            style: {
                                "--i": i++
                            },
                            children: text
                        }, "b" + k, false, {
                            fileName: "[project]/components/Letter.js",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "para closing",
                        style: {
                            "--i": i++
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sign",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: 0
                                    },
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].closing
                                }, void 0, false, {
                                    fileName: "[project]/components/Letter.js",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "to",
                                    children: "Dans ton coin,"
                                }, void 0, false, {
                                    fileName: "[project]/components/Letter.js",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "who",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].signature
                                }, void 0, false, {
                                    fileName: "[project]/components/Letter.js",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Letter.js",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Letter.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Letter.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn-quiet",
                type: "button",
                onClick: onBack,
                children: "Retour"
            }, void 0, false, {
                fileName: "[project]/components/Letter.js",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Letter.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Petals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Petals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const COLORS = [
    "#FF8FA9",
    "#FF8FA9",
    "#E8648C",
    "#F3CB98"
];
function Petals() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let w = 0;
        let h = 0;
        let raf = 0;
        let items = [];
        function size() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = window.innerWidth;
            h = window.innerHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        function make(initial) {
            return {
                x: Math.random() * w,
                y: initial ? Math.random() * h : -30,
                s: 7 + Math.random() * 13,
                vy: 0.25 + Math.random() * 0.55,
                sway: Math.random() * Math.PI * 2,
                rot: Math.random() * Math.PI * 2,
                vr: (Math.random() - 0.5) * 0.02,
                heart: Math.random() < 0.35,
                a: 0.18 + Math.random() * 0.4,
                col: COLORS[Math.floor(Math.random() * COLORS.length)]
            };
        }
        function draw(p) {
            const s = p.s;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = p.a;
            ctx.fillStyle = p.col;
            ctx.beginPath();
            if (p.heart) {
                ctx.moveTo(0, s * 0.45);
                ctx.bezierCurveTo(-s * 1.1, -s * 0.2, -s * 0.55, -s * 0.95, 0, -s * 0.3);
                ctx.bezierCurveTo(s * 0.55, -s * 0.95, s * 1.1, -s * 0.2, 0, s * 0.45);
            } else {
                ctx.moveTo(0, -s);
                ctx.quadraticCurveTo(s * 0.85, -s * 0.2, 0, s);
                ctx.quadraticCurveTo(-s * 0.85, -s * 0.2, 0, -s);
            }
            ctx.fill();
            ctx.restore();
        }
        function frame() {
            ctx.clearRect(0, 0, w, h);
            items.forEach((p, i)=>{
                p.sway += 0.012;
                p.x += Math.sin(p.sway) * 0.35;
                p.y += p.vy;
                p.rot += p.vr;
                if (p.y > h + 30) items[i] = make(false);
                draw(p);
            });
            raf = requestAnimationFrame(frame);
        }
        size();
        items = Array.from({
            length: 30
        }, ()=>make(true));
        if (still) items.forEach(draw);
        else frame();
        window.addEventListener("resize", size);
        return ()=>{
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", size);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        className: "petals",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/components/Petals.js",
        lineNumber: 91,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/Welcome.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Welcome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/date.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/chime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Welcome({ onUnlock }) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [shake, setShake] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inputRef.current?.focus();
    }, []);
    function submit(e) {
        e.preventDefault();
        if (status === "ok") return;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$date$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSecret"])(value)) {
            setStatus("ok");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$chime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chime"])();
            setTimeout(onUnlock, 1000);
        } else {
            setStatus("wrong");
            setShake((n)=>n + 1);
        }
    }
    const message = status === "ok" ? "Bienvenue." : status === "wrong" ? "Ce n'est pas la bonne date. Réessaie." : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockIcon"], {}, void 0, false, {
                fileName: "[project]/components/Welcome.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "eyebrow",
                children: "Page privée"
            }, void 0, false, {
                fileName: "[project]/components/Welcome.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "gate-title",
                children: "Accès protégé"
            }, void 0, false, {
                fileName: "[project]/components/Welcome.js",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "lede",
                children: "Pour continuer, entre la date demandée."
            }, void 0, false, {
                fileName: "[project]/components/Welcome.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "gate-form",
                onSubmit: submit,
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "date-secrete",
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/components/Welcome.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gate-row" + (status === "wrong" ? " jab" : ""),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "date-secrete",
                                ref: inputRef,
                                type: "text",
                                autoComplete: "off",
                                placeholder: "jj/mm/aaaa",
                                value: value,
                                "aria-invalid": status === "wrong" ? "true" : "false",
                                "aria-describedby": "gate-msg",
                                onChange: (e)=>{
                                    setValue(e.target.value);
                                    if (status === "wrong") setStatus("idle");
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/Welcome.js",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                type: "submit",
                                disabled: status === "ok",
                                children: "Continuer"
                            }, void 0, false, {
                                fileName: "[project]/components/Welcome.js",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, shake, true, {
                        fileName: "[project]/components/Welcome.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "gate-msg",
                        className: "msg " + status,
                        role: "status",
                        "aria-live": "polite",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/components/Welcome.js",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hint",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].hint
                    }, void 0, false, {
                        fileName: "[project]/components/Welcome.js",
                        lineNumber: 70,
                        columnNumber: 24
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/Welcome.js",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Welcome.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/chime.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Petite note de cristal quand la porte s'ouvre (le navigateur exige un clic avant de jouer un son)
__turbopack_context__.s([
    "chime",
    ()=>chime
]);
function chime() {
    try {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        const ctx = new AC();
        [
            659.25,
            830.61,
            987.77,
            1318.51
        ].forEach((f, i)=>{
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = "sine";
            o.frequency.value = f;
            const t0 = ctx.currentTime + i * 0.16;
            g.gain.setValueAtTime(0.0001, t0);
            g.gain.exponentialRampToValueAtTime(0.09, t0 + 0.03);
            g.gain.exponentialRampToValueAtTime(0.0001, t0 + 1.8);
            o.connect(g);
            g.connect(ctx.destination);
            o.start(t0);
            o.stop(t0 + 1.9);
        });
    } catch  {
    // le son est un bonus
    }
}
}),
"[project]/lib/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG",
    ()=>CONFIG
]);
const CONFIG = {
    // La date qui ouvre la porte (jour, mois, année)
    secret: {
        d: 26,
        m: 9,
        y: 2026
    },
    // Seul texte de la page d'entrée qui parle de la date (mets '' pour le retirer)
    hint: "Sans cette date, on ne se serait jamais parlé",
    // Page de la lettre
    name: "Kanto",
    kicker: "Une lettre, rien que pour toi",
    subline: "Boxeuse. Unique.",
    signature: "Rickardo",
    paragraphs: [
        "Kanto, je ne sais pas par où commencer. Alors je fais comme toi sur le ring : je garde les yeux ouverts, et j'avance.",
        "Il y a des personnes qu'on croise et qu'on oublie. Et puis il y a toi. Depuis que je t'ai vue pour la première fois, je sentais que tu étais spéciale et différente.",
        "Tu es intelligente. Tu es calme, tu es une très bonne combattante tout en étant concentrée sur tes études. Cette force, je l'admire. Mais ce que je préfère, c'est ce qu'il y a derrière : juste toi.",
        "Tu es unique, Kanto. Pas unique comme on le dit pour faire joli. Unique pour de vrai. Je n'ai jamais rencontré quelqu'un comme toi, et je ne pense pas que ça m'arrivera deux fois.",
        "C'est vrai qu'on ne se connaît pas depuis longtemps, mais Dieu seul sait ce qui arrivera demain, donc le temps est précieux.",
        "Peut-être que je ne suis pas le plus grand, ni le plus intelligent, ni le meilleur combattant de ce pays, mais je t'ai écrit ce message avec plus de sincérité qu'un gosse de 2 ans.",
        "Je n'ai pas ton courage dans un ring, mais ce soir, j'en trouve un peu pour te dire ce que je garde depuis quelques jours."
    ],
    // La phrase en grand, après les paragraphes ci-dessus
    highlight: "Je t'aime, Kanto.",
    afterHighlight: [
        "Je ne te demande pas de répondre tout de suite. Je voulais seulement que tu saches. Quoi que tu décides, tu resteras quelqu'un de précieux pour moi, mon anjely."
    ],
    closing: "Si tu veux bien, j'aimerais être ton copain."
};
}),
"[project]/lib/date.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSecret",
    ()=>isSecret,
    "parseDate",
    ()=>parseDate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.js [app-ssr] (ecmascript)");
;
const MONTHS = {
    janvier: 1,
    fevrier: 2,
    mars: 3,
    avril: 4,
    mai: 5,
    juin: 6,
    juillet: 7,
    aout: 8,
    septembre: 9,
    octobre: 10,
    novembre: 11,
    decembre: 12
};
function parseDate(input) {
    const s = String(input).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
    let m;
    if (m = s.match(/^(\d{1,2})(?:er)?\s+([a-z]+)\s+(\d{4})$/)) {
        const mo = MONTHS[m[2]];
        return mo ? {
            d: +m[1],
            m: mo,
            y: +m[3]
        } : null;
    }
    if (m = s.match(/^(\d{4})\D+(\d{1,2})\D+(\d{1,2})$/)) {
        return {
            d: +m[3],
            m: +m[2],
            y: +m[1]
        };
    }
    if (m = s.match(/^(\d{1,2})\D+(\d{1,2})\D+(\d{4})$/)) {
        return {
            d: +m[1],
            m: +m[2],
            y: +m[3]
        };
    }
    if (m = s.match(/^(\d{2})(\d{2})(\d{4})$/)) {
        return {
            d: +m[1],
            m: +m[2],
            y: +m[3]
        };
    }
    return null;
}
function isSecret(input) {
    const p = parseDate(input);
    const k = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].secret;
    return !!p && p.d === k.d && p.m === k.m && p.y === k.y;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_143o3tw._.js.map