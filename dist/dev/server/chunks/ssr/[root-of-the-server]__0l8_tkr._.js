module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/config/site-content.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Single source of truth for the entire apology storybook.
 *
 * Edit this file to change text, colors, images, music, and animations.
 * No React component files need to be touched for content updates.
 */ __turbopack_context__.s([
    "siteContent",
    ()=>siteContent
]);
const siteContent = {
    /** Site metadata */ meta: {
        title: "Our Little Forest",
        description: "A handmade story about a flower and a bear.",
        friendName: "Bear",
        authorName: "Flower"
    },
    /** Global color palette — exposed as CSS variables */ colors: {
        background: "#1c120f",
        backgroundLight: "#2a1d17",
        foreground: "#fff8e7",
        paper: "#f4ecd8",
        cream: "#fff8e7",
        warmBrown: "#5c3a21",
        warmBrownLight: "#7a5230",
        sage: "#8da399",
        sageDark: "#5e7569",
        softOrange: "#e8a87c",
        softOrangeDark: "#c78055",
        accent: "#f6c46a",
        rose: "#d8a0a0",
        muted: "#a89b8c",
        night: "#0f0b14"
    },
    /** Audio settings */ audio: {
        musicPath: "/music/placeholder-piano.wav",
        autoplay: false,
        volume: 0.2,
        loop: true,
        playButtonLabel: "Play our story",
        pauseButtonLabel: "Pause music",
        muteButtonLabel: "Mute",
        unmuteButtonLabel: "Unmute"
    },
    /** Animation & accessibility toggles */ animation: {
        enableParticles: true,
        enableParallax: true,
        enableCursorGlow: true,
        reducedMotionFallback: true
    },
    /** Opening scene */ opening: {
        signText: "Our Little Forest",
        subtitle: "Click anywhere to begin"
    },
    /** Chapter 1 — Once Upon A Time */ chapter1: {
        id: "chapter-1",
        title: "Once Upon A Time",
        text: "Some friendships don't happen. They find each other.",
        flowerLabel: "A little flower",
        bearLabel: "A teddy bear"
    },
    /** Chapter 2 — Our Story (timeline) */ chapter2: {
        id: "chapter-2",
        title: "Our Story",
        subtitle: "The timeline of us",
        events: [
            {
                date: "The first hello",
                title: "Where it all began",
                caption: "Two very different souls accidentally bumped into each other.",
                image: "/images/memories/01.svg"
            },
            {
                date: "Late night talks",
                title: "Words became worlds",
                caption: "Somehow we never ran out of things to say.",
                image: "/images/memories/02.svg"
            },
            {
                date: "The chaos and the calm",
                title: "We became home",
                caption: "One of us was a storm. The other, the shelter.",
                image: "/images/memories/03.svg"
            },
            {
                date: "Every little moment",
                title: "Small things, big meanings",
                caption: "Laughs, rants, silences — all of it mattered.",
                image: "/images/memories/04.svg"
            }
        ]
    },
    /** Chapter 3 — The Beautiful Chaos */ chapter3: {
        id: "chapter-3",
        title: "The Beautiful Chaos",
        subtitle: "Two puzzle pieces that somehow fit",
        me: {
            label: "The Chaotic Flower",
            emoji: "🌼",
            items: [
                {
                    title: "Funny",
                    note: "Laughs at my own jokes"
                },
                {
                    title: "Loud",
                    note: "Forgets what an inside voice is"
                },
                {
                    title: "Overthinks",
                    note: "Makes a movie out of a text"
                },
                {
                    title: "Creates problems",
                    note: "Then asks for help solving them"
                }
            ]
        },
        her: {
            label: "The Calm Bear",
            emoji: "🐻",
            items: [
                {
                    title: "Patient",
                    note: "Listens to the same story twice"
                },
                {
                    title: "Calm",
                    note: "The eye of every storm"
                },
                {
                    title: "Protective",
                    note: "Fights dragons in silence"
                },
                {
                    title: "Safe place",
                    note: "Where the world feels soft"
                }
            ]
        }
    },
    /** Chapter 4 — Our Memories (gallery) */ chapter4: {
        id: "chapter-4",
        title: "Our Memories",
        subtitle: "Little frames of forever",
        photos: [
            {
                src: "/images/gallery/01.svg",
                caption: "That one random afternoon"
            },
            {
                src: "/images/gallery/02.svg",
                caption: "Laughter caught on camera"
            },
            {
                src: "/images/gallery/03.svg",
                caption: "Comfort in a single look"
            },
            {
                src: "/images/gallery/04.svg",
                caption: "Adventure buddies"
            },
            {
                src: "/images/gallery/05.svg",
                caption: "Quiet moments"
            },
            {
                src: "/images/gallery/06.svg",
                caption: "Us against the world"
            }
        ]
    },
    /** Chapter 5 — The Day Everything Changed */ chapter5: {
        id: "chapter-5",
        title: "The Day Everything Changed",
        subtitle: "When the forest went quiet",
        lines: [
            "Not every silence is peaceful.",
            "Some silences echo with words we wish we could take back.",
            "I made mistakes.",
            "And in making them, I forgot that the safest place in my world was you."
        ]
    },
    /** Chapter 6 — The Letter */ chapter6: {
        id: "chapter-6",
        title: "The Letter",
        lines: [
            "I don't say this enough, but you are the best thing this chaotic flower ever found.",
            "I'm sorry for the moments I was too much and the moments I wasn't enough.",
            "Sorry for the words I shouldn't have said, and the ones I should have said louder.",
            "You stayed when I was difficult. You listened when I was loud. You loved me anyway.",
            "I don't deserve you, but I'm grateful every day that our paths found each other.",
            "If you let me, I promise to keep growing — not perfectly, but honestly."
        ],
        signature: "Your annoying flower",
        signatureEmoji: "🌼"
    },
    /** Chapter 7 — Reasons I Treasure You */ chapter7: {
        id: "chapter-7",
        title: "Reasons I Treasure You",
        subtitle: "Thank you for...",
        reasons: [
            {
                title: "Listening",
                note: "To my stories, my rants, and my silence."
            },
            {
                title: "Understanding",
                note: "Even when I don't understand myself."
            },
            {
                title: "Staying",
                note: "When walking away would have been easier."
            },
            {
                title: "Believing",
                note: "In the person I am still learning to be."
            },
            {
                title: "Forgiving",
                note: "Even before I asked for it."
            },
            {
                title: "Supporting",
                note: "Quietly, fiercely, unconditionally."
            }
        ]
    },
    /** Chapter 8 — Future */ chapter8: {
        id: "chapter-8",
        title: "Future",
        subtitle: "This isn't the end of our book",
        lines: [
            "There are still so many sunsets we haven't watched.",
            "So many jokes we haven't laughed at.",
            "So many memories we haven't made.",
            "Don't let our story end here."
        ]
    },
    /** Final page */ final: {
        id: "final",
        title: "Forever",
        quote: "Home was never a place. It somehow became you.",
        question: "Can we keep writing our story?",
        buttonLabel: "Continue Our Story",
        buttonEmoji: "❤️"
    },
    /** Optional social/share links */ share: {
        enabled: false,
        links: []
    }
};
}),
"[project]/hooks/useReducedMotion.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site-content.ts [app-ssr] (ecmascript)");
"use client";
;
;
function getInitialReducedMotion() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function useReducedMotion() {
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(getInitialReducedMotion);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteContent"].animation.reducedMotionFallback) return;
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handler = (event)=>setReduced(event.matches);
        mediaQuery.addEventListener("change", handler);
        return ()=>mediaQuery.removeEventListener("change", handler);
    }, []);
    return reduced;
}
}),
"[project]/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/hooks/useAudio'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/hooks/useLenis'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ReducedMotionConfig({ children }) {
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MotionConfig"], {
        reducedMotion: reducedMotion ? "always" : "user",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/providers.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AudioProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LenisProvider, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReducedMotionConfig, {
                children: children
            }, void 0, false, {
                fileName: "[project]/app/providers.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/providers.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/providers.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/components/CursorGlow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorGlow",
    ()=>CursorGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site-content.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function CursorGlow() {
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteContent"].animation.enableCursorGlow) return;
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const handleMove = undefined;
        const handleLeave = undefined;
    }, [
        visible
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cursor-glow",
        style: {
            "--cursor-x": `${position.x}px`,
            "--cursor-y": `${position.y}px`
        },
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/app/components/CursorGlow.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0l8_tkr._.js.map