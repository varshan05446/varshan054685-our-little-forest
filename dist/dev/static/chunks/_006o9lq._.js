(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/config/site-content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useAudio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioProvider",
    ()=>AudioProvider,
    "useAudio",
    ()=>useAudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site-content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AudioContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function AudioProvider({ children }) {
    _s();
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { musicPath, volume, loop } = __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContent"].audio;
    const howl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AudioProvider.useMemo[howl]": ()=>{
            const sound = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
                src: [
                    musicPath
                ],
                volume,
                loop,
                html5: true,
                preload: true,
                onplay: {
                    "AudioProvider.useMemo[howl]": ()=>setIsPlaying(true)
                }["AudioProvider.useMemo[howl]"],
                onpause: {
                    "AudioProvider.useMemo[howl]": ()=>setIsPlaying(false)
                }["AudioProvider.useMemo[howl]"],
                onstop: {
                    "AudioProvider.useMemo[howl]": ()=>setIsPlaying(false)
                }["AudioProvider.useMemo[howl]"],
                onend: {
                    "AudioProvider.useMemo[howl]": ()=>{
                        if (!loop) setIsPlaying(false);
                    }
                }["AudioProvider.useMemo[howl]"],
                onmute: {
                    "AudioProvider.useMemo[howl]": ()=>setIsMuted(sound.mute())
                }["AudioProvider.useMemo[howl]"]
            });
            return sound;
        }
    }["AudioProvider.useMemo[howl]"], [
        musicPath,
        volume,
        loop
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioProvider.useEffect": ()=>{
            return ({
                "AudioProvider.useEffect": ()=>{
                    howl.unload();
                }
            })["AudioProvider.useEffect"];
        }
    }["AudioProvider.useEffect"], [
        howl
    ]);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioProvider.useCallback[play]": ()=>{
            howl.play();
        }
    }["AudioProvider.useCallback[play]"], [
        howl
    ]);
    const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioProvider.useCallback[pause]": ()=>{
            howl.pause();
        }
    }["AudioProvider.useCallback[pause]"], [
        howl
    ]);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioProvider.useCallback[toggle]": ()=>{
            if (howl.playing()) {
                howl.pause();
            } else {
                howl.play();
            }
        }
    }["AudioProvider.useCallback[toggle]"], [
        howl
    ]);
    const mute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioProvider.useCallback[mute]": ()=>{
            howl.mute(true);
        }
    }["AudioProvider.useCallback[mute]"], [
        howl
    ]);
    const unmute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioProvider.useCallback[unmute]": ()=>{
            howl.mute(false);
        }
    }["AudioProvider.useCallback[unmute]"], [
        howl
    ]);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AudioProvider.useCallback[toggleMute]": ()=>{
            howl.mute(!howl.mute());
        }
    }["AudioProvider.useCallback[toggleMute]"], [
        howl
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AudioProvider.useMemo[value]": ()=>({
                isPlaying,
                isMuted,
                play,
                pause,
                toggle,
                mute,
                unmute,
                toggleMute
            })
    }["AudioProvider.useMemo[value]"], [
        isPlaying,
        isMuted,
        play,
        pause,
        toggle,
        mute,
        unmute,
        toggleMute
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AudioContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/hooks/useAudio.tsx",
        lineNumber: 100,
        columnNumber: 10
    }, this);
}
_s(AudioProvider, "Bwyj2sybY89xkch3a9q4ieodISY=");
_c = AudioProvider;
function useAudio() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AudioContext);
    if (!context) {
        throw new Error("useAudio must be used within AudioProvider");
    }
    return context;
}
_s1(useAudio, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AudioProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReducedMotion",
    ()=>useReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site-content.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function getInitialReducedMotion() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContent"].animation.reducedMotionFallback) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function useReducedMotion() {
    _s();
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getInitialReducedMotion);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReducedMotion.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContent"].animation.reducedMotionFallback) return;
            const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            const handler = {
                "useReducedMotion.useEffect.handler": (event)=>setReduced(event.matches)
            }["useReducedMotion.useEffect.handler"];
            mediaQuery.addEventListener("change", handler);
            return ({
                "useReducedMotion.useEffect": ()=>mediaQuery.removeEventListener("change", handler)
            })["useReducedMotion.useEffect"];
        }
    }["useReducedMotion.useEffect"], []);
    return reduced;
}
_s(useReducedMotion, "zem4ed7h+cWoCz/QMY4lJzpug+Q=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAudio.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/hooks/useLenis'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useReducedMotion.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ReducedMotionConfig({ children }) {
    _s();
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$MotionConfig$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfig"], {
        reducedMotion: reducedMotion ? "always" : "user",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/providers.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(ReducedMotionConfig, "C3SzXdDjOTeVfafZ73W5HtZXaiM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = ReducedMotionConfig;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAudio$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LenisProvider, {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReducedMotionConfig, {
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
_c1 = Providers;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReducedMotionConfig");
__turbopack_context__.k.register(_c1, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/CursorGlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorGlow",
    ()=>CursorGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/site-content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CursorGlow() {
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 50,
        y: 50
    });
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorGlow.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$site$2d$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteContent"].animation.enableCursorGlow) return;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.matchMedia("(pointer: coarse)").matches) return;
            const handleMove = {
                "CursorGlow.useEffect.handleMove": (e)=>{
                    setPosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                    if (!visible) setVisible(true);
                }
            }["CursorGlow.useEffect.handleMove"];
            const handleLeave = {
                "CursorGlow.useEffect.handleLeave": ()=>setVisible(false)
            }["CursorGlow.useEffect.handleLeave"];
            window.addEventListener("mousemove", handleMove);
            document.body.addEventListener("mouseleave", handleLeave);
            return ({
                "CursorGlow.useEffect": ()=>{
                    window.removeEventListener("mousemove", handleMove);
                    document.body.removeEventListener("mouseleave", handleLeave);
                }
            })["CursorGlow.useEffect"];
        }
    }["CursorGlow.useEffect"], [
        visible
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(CursorGlow, "CxR1gJI5mKc45ZMH6+XmN5DhycU=");
_c = CursorGlow;
var _c;
__turbopack_context__.k.register(_c, "CursorGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_006o9lq._.js.map