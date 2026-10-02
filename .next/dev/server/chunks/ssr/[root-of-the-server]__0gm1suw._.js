module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/lessons/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LessonsPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lessons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/lessons.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LessonsFilter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LessonsFilter.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Video Lessons & Masterclasses | Saksham Learn",
    description: "Explore in-depth video lessons on Next.js, Tailwind CSS, AI Engineering, Fullstack SaaS, and modern frontend design."
};
function LessonsPage() {
    const lessons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lessons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllLessons"])();
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lessons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCategories"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-12 md:py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lessons/page.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                " Course Catalog"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lessons/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-5xl font-extrabold text-white tracking-tight",
                            children: "Video Lessons & Masterclasses"
                        }, void 0, false, {
                            fileName: "[project]/src/app/lessons/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-300 text-base leading-relaxed",
                            children: "Browse our curated library of production-focused tutorials. Each lesson comes with full source code, architecture breakdowns, and step-by-step video guidance."
                        }, void 0, false, {
                            fileName: "[project]/src/app/lessons/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/lessons/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LessonsFilter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    initialLessons: lessons,
                    categories: categories
                }, void 0, false, {
                    fileName: "[project]/src/app/lessons/page.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/lessons/page.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/lessons/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/lessons/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/lessons/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/LessonsFilter.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/LessonsFilter.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/LessonsFilter.tsx", "default");
}),
"[project]/src/components/LessonsFilter.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/LessonsFilter.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/LessonsFilter.tsx <module evaluation>", "default");
}),
"[project]/src/components/LessonsFilter.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LessonsFilter$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/LessonsFilter.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LessonsFilter$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/LessonsFilter.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LessonsFilter$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/data/lessons.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": "1",
        "slug": "intro-to-nextjs-app-router",
        "title": "Next.js App Router Masterclass: Foundations to Production",
        "description": "Master Server Components, client boundaries, layouts, dynamic routing, and fast SSR data fetching.",
        "longDescription": "In this deep dive, learn how the Next.js App Router paradigm redefines modern fullstack development. Explore React Server Components (RSC), Suspense boundaries, streaming architecture, and nested route layouts to build ultra-fast web applications.",
        "duration": "18m 45s",
        "level": "Intermediate",
        "category": "Frontend",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/Sklc_fQBmcs",
        "thumbnailUrl": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Sarah Jenkins",
            "role": "Principal Frontend Architect",
            "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Understand Server Components vs Client Components boundaries",
            "Design nested layouts and template hierarchies",
            "Implement route handlers and server actions",
            "Optimize SEO, Core Web Vitals, and caching strategies"
        ],
        "resources": [
            {
                "title": "Next.js Official Documentation",
                "url": "https://nextjs.org/docs"
            },
            {
                "title": "GitHub Starter Repository",
                "url": "https://github.com"
            }
        ]
    },
    {
        "id": "2",
        "slug": "tailwind-css-v4-modern-styling",
        "title": "Tailwind CSS v4: Building High-Converting UI Systems",
        "description": "Unlock modern CSS cascade layers, container queries, CSS variables, and design tokens for scalable frontend styling.",
        "longDescription": "A complete guide to leveraging the cutting-edge Tailwind CSS engine. Learn to craft consistent design tokens, sleek dark modes, fluid typography, and micro-interactions that elevate brand trust and boost conversions.",
        "duration": "24m 10s",
        "level": "Beginner",
        "category": "Design & UX",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/ft30zcMlFao",
        "thumbnailUrl": "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Alex Rivera",
            "role": "Design Systems Lead",
            "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Configure Tailwind v4 CSS theme variables",
            "Implement accessible color palettes and typography scales",
            "Create fluid responsive designs with CSS container queries",
            "Build reusable UI card and modal components"
        ],
        "resources": [
            {
                "title": "Tailwind CSS v4 Guide",
                "url": "https://tailwindcss.com"
            },
            {
                "title": "Design Tokens Cheatsheet",
                "url": "https://example.com"
            }
        ]
    },
    {
        "id": "3",
        "slug": "ai-agents-and-llm-integrations",
        "title": "Building Production AI Agents with TypeScript & Next.js",
        "description": "Integrate LLM tool calling, streaming responses, vector embeddings, and RAG pipelines into web applications.",
        "longDescription": "Step into modern AI engineering. Learn how to connect Large Language Models with structured tools, vector databases, and real-time streaming endpoints. Build autonomous agents that execute multi-step workflows safely.",
        "duration": "32m 15s",
        "level": "Advanced",
        "category": "AI & ML",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/82P_L7Jj0r8",
        "thumbnailUrl": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Dr. Maya Lin",
            "role": "AI Research Engineer",
            "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Implement server-sent events for real-time text streaming",
            "Design structured JSON tool-calling schemas",
            "Set up Pinecone/pgvector search and context injection",
            "Handle rate limiting, token caching, and fallback resilience"
        ],
        "resources": [
            {
                "title": "Vercel AI SDK Docs",
                "url": "https://sdk.vercel.ai"
            },
            {
                "title": "Prompt Engineering Best Practices",
                "url": "https://example.com"
            }
        ]
    },
    {
        "id": "4",
        "slug": "fullstack-api-design-postgresql",
        "title": "Scalable Backend Architecture with TypeScript & PostgreSQL",
        "description": "Design resilient database schemas, migrations, connection pools, and high-throughput REST & GraphQL APIs.",
        "longDescription": "Go beyond simple CRUD. Learn how to architect enterprise-grade relational databases, write clean database migrations with Prisma or Drizzle ORM, secure endpoints with JWT/OAuth, and optimize query latency.",
        "duration": "28m 40s",
        "level": "Intermediate",
        "category": "Backend",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/98BiG9bQO1s",
        "thumbnailUrl": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "David Chen",
            "role": "Cloud Infrastructure Architect",
            "avatarUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Structure ACID-compliant PostgreSQL tables and indexes",
            "Implement connection pooling with PgBouncer / Neon",
            "Create secure role-based access control (RBAC) middleware",
            "Benchmark and profile slow queries"
        ],
        "resources": [
            {
                "title": "PostgreSQL Performance Guide",
                "url": "https://postgresql.org"
            },
            {
                "title": "Database Schema Templates",
                "url": "https://example.com"
            }
        ]
    },
    {
        "id": "5",
        "slug": "fullstack-saas-architecture",
        "title": "Building a Complete SaaS: Auth, Billing & Multi-Tenancy",
        "description": "End-to-end walkthrough of building and launching a production-ready SaaS application with Stripe and auth.",
        "longDescription": "From blank repo to first paying customer: learn subscription billing webhooks, multi-tenant workspace isolation, team invitations, transactional emails, and zero-downtime CI/CD deployment pipelines.",
        "duration": "45m 20s",
        "level": "Advanced",
        "category": "Fullstack",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/1vR3ST946Q8",
        "thumbnailUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Sarah Jenkins",
            "role": "Principal Frontend Architect",
            "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Stripe Checkout, Customer Portal & webhook processing",
            "Multi-tenant data partitioning & row level security",
            "Automated transactional emails with Resend",
            "Production deployment with monitoring & telemetry"
        ],
        "resources": [
            {
                "title": "Stripe API Reference",
                "url": "https://stripe.com/docs/api"
            },
            {
                "title": "SaaS Architecture Checklist",
                "url": "https://example.com"
            }
        ]
    },
    {
        "id": "6",
        "slug": "ui-ux-design-systems-micro-interactions",
        "title": "Micro-Interactions & Motion Design for Web Developers",
        "description": "Craft tactile, polished web interfaces using spring physics, gesture handling, and subtle interactive feedback.",
        "longDescription": "Explore how thoughtful micro-interactions transform ordinary websites into unforgettable digital experiences. Master layout animations, tab morphing, skeleton loaders, and tactile button feedback.",
        "duration": "21m 00s",
        "level": "Beginner",
        "category": "Design & UX",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/p1rE1_LqY3E",
        "thumbnailUrl": "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Alex Rivera",
            "role": "Design Systems Lead",
            "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Understand motion curves and cognitive response times",
            "Build smooth spring animations with CSS and Framer Motion concepts",
            "Design keyboard accessible focus states and screen-reader alerts",
            "Measure animation performance with Chrome DevTools"
        ],
        "resources": [
            {
                "title": "Motion Design Principles",
                "url": "https://example.com"
            },
            {
                "title": "Accessibility Guidelines for Animation",
                "url": "https://w3.org"
            }
        ]
    }
];
}),
"[project]/src/lib/lessons.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllLessons",
    ()=>getAllLessons,
    "getCategories",
    ()=>getCategories,
    "getLessonById",
    ()=>getLessonById,
    "getRelatedLessons",
    ()=>getRelatedLessons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/lessons.json.[json].cjs [app-rsc] (ecmascript)");
;
function getAllLessons() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$lessons$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
}
function getLessonById(id) {
    const all = getAllLessons();
    return all.find((lesson)=>lesson.id === id || lesson.slug === id);
}
function getRelatedLessons(currentId, limit = 3) {
    const all = getAllLessons();
    const current = getLessonById(currentId);
    if (!current) return all.slice(0, limit);
    const sameCategory = all.filter((l)=>l.id !== current.id && l.category === current.category);
    const otherCategory = all.filter((l)=>l.id !== current.id && l.category !== current.category);
    return [
        ...sameCategory,
        ...otherCategory
    ].slice(0, limit);
}
function getCategories() {
    return [
        "All",
        "Frontend",
        "Backend",
        "Fullstack",
        "AI & ML",
        "Design & UX"
    ];
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gm1suw._.js.map