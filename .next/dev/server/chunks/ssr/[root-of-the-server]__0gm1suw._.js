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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-rsc] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lessons$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/lessons.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LessonsFilter$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LessonsFilter.tsx [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: "Management & HR Executive Masterclasses | Saksham Executive",
    description: "Explore case-based management masterclasses in Strategic HRM, Total Rewards, OKRs & Performance Systems, Campus Recruitment, and Labour Law Compliance."
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
                            className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-semibold text-amber-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/lessons/page.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this),
                                " Executive Curriculum"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/lessons/page.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-5xl font-extrabold text-white tracking-tight",
                            children: "Management & HR Leadership Masterclasses"
                        }, void 0, false, {
                            fileName: "[project]/src/app/lessons/page.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-300 text-base leading-relaxed",
                            children: "Browse our case-method curriculum inspired by top B-school pedagogy (SIBM Pune). Each module includes downloadable Excel financial models, policy templates, and step-by-step video case analysis."
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
        "slug": "strategic-human-resource-management-shrm",
        "title": "Strategic HRM: Aligning People Strategy with Corporate Growth",
        "description": "Learn how modern CHROs design human capital strategies that directly drive EBITDA, talent retention, and organizational agility.",
        "longDescription": "In this comprehensive executive masterclass inspired by top B-school case frameworks, explore Strategic Human Resource Management (SHRM). Discover how to translate boardroom business goals into high-impact workforce capability plans, execute strategic workforce planning, and manage organizational restructuring with empathy and governance.",
        "duration": "28m 15s",
        "level": "Executive",
        "category": "HR & Talent",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/Sklc_fQBmcs",
        "thumbnailUrl": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Pratyush Vats",
            "role": "SIBM Pune Alumnus & Senior HR Business Leader",
            "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Formulate SHRM roadmaps aligned with business unit strategy",
            "Conduct Strategic Workforce Planning (SWP) & capability mapping",
            "Design organizational design hierarchies and span of control",
            "Navigate change management using the Kotter 8-Step Framework"
        ],
        "caseStudies": [
            "HBR Case: Tech Transformation and Culture Re-alignment",
            "SIBM Pune Case Study: Turnaround Management in Manufacturing"
        ],
        "resources": [
            {
                "title": "SHRM Strategy Framework Workbook (.PDF)",
                "url": "https://example.com"
            },
            {
                "title": "Workforce Capability Assessment Template (.XLSX)",
                "url": "https://example.com"
            }
        ]
    },
    {
        "id": "2",
        "slug": "compensation-and-total-rewards-architecture",
        "title": "Compensation & Total Rewards: Designing Market-Competitive Pay",
        "description": "Master base pay banding, variable compensation, long-term incentives (ESOPs), and internal vs external pay equity.",
        "longDescription": "Designing an attractive, financially sustainable compensation structure is one of the most critical responsibilities of HR leaders. This masterclass breaks down Mercer/Aon pay benchmarking, compa-ratios, broadbanding, executive bonuses, retention bonuses, and tax-efficient salary design.",
        "duration": "35m 40s",
        "level": "Advanced Leadership",
        "category": "Performance & Rewards",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/ft30zcMlFao",
        "thumbnailUrl": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Pratyush Vats",
            "role": "SIBM Pune Alumnus & Senior HR Business Leader",
            "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Calculate and calibrate Compa-Ratios, Range Penetration, and Salary Bands",
            "Structure STI (Short-Term Incentive) & LTI (Long-Term Incentive/ESOP) plans",
            "Conduct market pay benchmarking using 25th, 50th, and 75th percentiles",
            "Ensure pay transparency and statutory compliance across geographies"
        ],
        "caseStudies": [
            "Unilever Total Rewards Restructuring",
            "Startup Hypergrowth: Structuring ESOP Pools for Series B & C"
        ],
        "resources": [
            {
                "title": "Salary Band & Compa-Ratio Calculator (.XLSX)",
                "url": "https://example.com"
            },
            {
                "title": "Executive Compensation Policy Guidelines (.PDF)",
                "url": "https://example.com"
            }
        ]
    },
    {
        "id": "3",
        "slug": "performance-management-okrs-balanced-scorecards",
        "title": "Performance Management: Implementing OKRs & Balanced Scorecards",
        "description": "Transition from rigid annual appraisals to agile OKRs, continuous feedback loops, and 360-degree leadership reviews.",
        "longDescription": "Traditional bell curves often demotivate high-potential talent. In this session, learn modern performance appraisal frameworks: cascading OKRs from CEO to individual contributors, integrating Balanced Scorecards (Financial, Customer, Process, Learning), and conducting constructive performance calibration meetings.",
        "duration": "30m 20s",
        "level": "Executive",
        "category": "Performance & Rewards",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/82P_L7Jj0r8",
        "thumbnailUrl": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Aanya Sharma",
            "role": "Management Consultant & Leadership Coach",
            "avatarUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Cascade company-level Key Results into functional KPIs",
            "Run quarterly calibration meetings to eliminate rater bias",
            "Design 9-Box Grid talent reviews for succession planning",
            "Coach managers on handling difficult PIP (Performance Improvement Plan) conversations"
        ],
        "caseStudies": [
            "Google OKR Framework Implementation",
            "Adobe's 'Check-in' System: Replacing Annual Performance Reviews"
        ],
        "resources": [
            {
                "title": "9-Box Talent Matrix & Succession Blueprint (.PDF)",
                "url": "https://example.com"
            },
            {
                "title": "OKR Quarterly Review Template (.XLSX)",
                "url": "https://example.com"
            }
        ]
    },
    {
        "id": "4",
        "slug": "talent-acquisition-and-behavioral-interviewing",
        "title": "Talent Acquisition Mastery: Campus Hiring & Behavioral Interviewing",
        "description": "Master structured behavioral interviewing (STAR methodology), campus placement strategy, and employer value proposition (EVP).",
        "longDescription": "Attracting top-tier talent from premier institutions requires more than job postings. Learn how to architect end-to-end talent acquisition pipelines, conduct competency-based interviews (STAR method), build a magnetic employer brand, and run high-conversion campus recruitment drives at top B-schools.",
        "duration": "26m 50s",
        "level": "Foundation",
        "category": "HR & Talent",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/98BiG9bQO1s",
        "thumbnailUrl": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Pratyush Vats",
            "role": "SIBM Pune Alumnus & Senior HR Business Leader",
            "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Formulate competency maps and behavioral question rubrics",
            "Master STAR interview scoring (Situation, Task, Action, Result)",
            "Design an authentic Employer Value Proposition (EVP)",
            "Execute high-impact B-school campus engagement & PPI strategies"
        ],
        "caseStudies": [
            "FMCG Day Zero Campus Hiring Playbook at Premier IIMs/SIBM",
            "Global Tech Scaling: Hiring 500+ Specialized Roles"
        ],
        "resources": [
            {
                "title": "Behavioral Interview Question Bank by Competency (.PDF)",
                "url": "https://example.com"
            },
            {
                "title": "Campus Hiring Scorecard & Offer Matrix (.XLSX)",
                "url": "https://example.com"
            }
        ]
    },
    {
        "id": "5",
        "slug": "people-analytics-and-hr-metrics",
        "title": "People Analytics: Metric-Driven Human Resource Decision Making",
        "description": "Turn employee data into strategic insights. Track eNPS, cost-per-hire, early attrition risk, and workforce productivity metrics.",
        "longDescription": "Modern management demands quantitative rigor. In this data-driven course, explore the key HR metrics that matter to the C-suite: Quality of Hire, Attrition Predictor Models, Employee Net Promoter Score (eNPS), Human Capital ROI, and Diversity & Inclusion metrics.",
        "duration": "38m 10s",
        "level": "Advanced Leadership",
        "category": "People Analytics",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/1vR3ST946Q8",
        "thumbnailUrl": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Vikramaditya Sengupta",
            "role": "VP of People Operations & HR Analytics",
            "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Calculate Human Capital Return on Investment (HCROI) and Revenue per Employee",
            "Build predictive attrition dashboards using survival analysis concepts",
            "Measure employee engagement correlations with business productivity",
            "Present data-backed HR business cases to the Board of Directors"
        ],
        "caseStudies": [
            "Predicting Flight Risk in High-Performer Cohorts",
            "HR Dashboard Optimization at Fortune 500 Enterprise"
        ],
        "resources": [
            {
                "title": "Executive HR Metrics Dashboard Template (.XLSX)",
                "url": "https://example.com"
            },
            {
                "title": "Attrition Analysis Case Guide (.PDF)",
                "url": "https://example.com"
            }
        ]
    },
    {
        "id": "6",
        "slug": "industrial-relations-labor-laws-compliance",
        "title": "Labor Law Compliance & Workplace Governance in India",
        "description": "Comprehensive guide to the 4 Labour Codes, POSH compliance, grievance resolution, and ethical workplace governance.",
        "longDescription": "Navigate the legal and regulatory landscape of employment in corporate India. This course covers the new Labour Codes (Wages, Social Security, IR, and OSH), Internal Complaints Committee (ICC) operations under POSH Act 2013, contract labor regulations, and ethical dispute management.",
        "duration": "34m 00s",
        "level": "Executive",
        "category": "Industrial Relations",
        "youtubeEmbedUrl": "https://www.youtube-nocookie.com/embed/p1rE1_LqY3E",
        "thumbnailUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
        "instructor": {
            "name": "Pratyush Vats",
            "role": "SIBM Pune Alumnus & Senior HR Business Leader",
            "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
        },
        "learningObjectives": [
            "Understand the operational impact of the 4 New Labour Codes",
            "Establish POSH ICC procedures, inquiries, and annual compliance reporting",
            "Manage trade union dialogue and collective bargaining agreements",
            "Implement compliant standing orders and disciplinary action protocols"
        ],
        "caseStudies": [
            "POSH Inquiry Investigation Case Study: Best Practices",
            "Plant IR Settlement & Voluntary Retirement Scheme (VRS) Case"
        ],
        "resources": [
            {
                "title": "Statutory Labour Compliance Checklist 2026 (.PDF)",
                "url": "https://example.com"
            },
            {
                "title": "POSH Committee Redressal Toolkit (.PDF)",
                "url": "https://example.com"
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
        "HR & Talent",
        "Strategy & Leadership",
        "Performance & Rewards",
        "People Analytics",
        "Industrial Relations"
    ];
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0gm1suw._.js.map