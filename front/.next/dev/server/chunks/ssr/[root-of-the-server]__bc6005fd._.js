module.exports = [
"[project]/src/api/exerciseFetch.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllExcercises",
    ()=>getAllExcercises,
    "getExercise",
    ()=>getExercise
]);
const getAllExcercises = async ()=>{
    //Peticion al back
    const response = await fetch('http://localhost:9000/exercises');
    const exercises = await response.json();
    return exercises;
};
const getExercise = async (id)=>{
    //Peticion al back
    const response = await fetch('http://localhost:9000/exercises/' + id);
    const exercises = await response.json();
    return exercises;
};
}),
"[project]/src/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$exerciseFetch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/exerciseFetch.js [ssr] (ecmascript)");
;
;
;
function index() {
    const [exercises, setExercises] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const getAllExcercisesAux = async ()=>{
            const exercisesAux = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$exerciseFetch$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAllExcercises"])();
            setExercises(exercisesAux.data);
        };
        getAllExcercisesAux();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "Exercises"
            }, void 0, false, {
                fileName: "[project]/src/pages/index.js",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            exercises.map((exercise, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: exercise.name
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.js",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/pages/index.js",
                    lineNumber: 20,
                    columnNumber: 20
                }, this);
            })
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bc6005fd._.js.map