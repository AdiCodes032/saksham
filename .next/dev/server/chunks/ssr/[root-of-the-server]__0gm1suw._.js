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

module.exports = JSON.parse("[{\"id\":\"1\",\"slug\":\"capital-structure-masterclass-corporate-optimization\",\"title\":\"Capital Structure Masterclass: Corporate Optimization &amp; Financial Levers\",\"description\":\"Master corporate capital structure optimization, analyzing debt vs. equity tradeoffs, CAPM, WACC, and Modigliani-Miller theorem through real-world case studies.\",\"longDescription\":\"An analytical executive look at corporate capital structure optimization and financial leverage based on I.M. Pandey's seminal text 'Financial Management'. This course covers the core debt vs. equity dilemma, calculating cost of equity using CAPM, optimizing Weighted Average Cost of Capital (WACC), and analyzing major corporate capital restructurings through case studies like Rajpur Garments, Central Equipment Company, HUL, and BHEL.\",\"duration\":\"25m 00s\",\"level\":\"Executive\",\"category\":\"Corporate Finance\",\"youtubeEmbedUrl\":\"https://www.youtube-nocookie.com/embed/uiyQBfOOO3Y\",\"thumbnailUrl\":\"https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&amp;auto=format&amp;fit=crop&amp;q=80\",\"instructor\":{\"name\":\"Saksham\",\"role\":\"Corporate Finance &amp; Strategy Leader\",\"avatarUrl\":\"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&amp;auto=format&amp;fit=crop&amp;q=80\"},\"learningObjectives\":[\"Analyze the debt vs. equity leverage tradeoff and mitigate financial distress risks\",\"Apply the Modigliani-Miller Theorem and evaluate tax shield benefits of debt\",\"Calculate Cost of Equity using the Capital Asset Pricing Model (CAPM)\",\"Determine Weighted Average Cost of Capital (WACC) to evaluate project NPV\"],\"caseStudies\":[\"Rajpur Garments &amp; Textiles: The Dangers of Unoptimized Debt &amp; Financial Distress\",\"Central Equipment Company: Debating Leverage and the Modigliani-Miller Theorem\",\"Hindustan Unilever Limited (HUL): CAPM Equity Pricing &amp; WACC Optimization\",\"Bharat Heavy Electricals Limited (BHEL): Strategic Capital Restructuring for Growth\"],\"resources\":[{\"title\":\"Capital Structure Optimization Framework (.PDF)\",\"url\":\"https://example.com\"},{\"title\":\"WACC &amp; CAPM Calculation Model (.XLSX)\",\"url\":\"https://example.com\"}]},{\"id\":\"2\",\"slug\":\"end-to-end-supply-chain-management\",\"title\":\"End-to-End Supply Chain Management: Architecture, Strategy &amp; Integration\",\"description\":\"Unpack end-to-end supply chain management, from strategic sourcing and push/pull production to mitigating the bullwhip effect, S&amp;OP, and CPFR.\",\"longDescription\":\"A structured executive overview of end-to-end supply chain management and how interconnected business nodes create structural competitive advantage. This session covers supply chain ecosystems, efficient vs. responsive chains, strategic sourcing (Tata Motors ecosystem), push vs. pull manufacturing (Zara vs. Amul), mitigating the bullwhip effect (P&amp;G Pampers study), distribution network design, and advanced integration through S&amp;OP and CPFR.\",\"duration\":\"30m 15s\",\"level\":\"Executive\",\"category\":\"Operations &amp; Supply Chain\",\"youtubeEmbedUrl\":\"https://www.youtube-nocookie.com/embed/30v4RqN_sxM\",\"thumbnailUrl\":\"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&amp;auto=format&amp;fit=crop&amp;q=80\",\"instructor\":{\"name\":\"Saksham\",\"role\":\"Supply Chain Operations &amp; Strategy Expert\",\"avatarUrl\":\"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;auto=format&amp;fit=crop&amp;q=80\"},\"learningObjectives\":[\"Design efficient vs. responsive supply chain networks aligned with market demand\",\"Differentiate push vs. pull manufacturing and level vs. chase aggregate planning\",\"Identify structural causes of the Bullwhip Effect and deploy EDLP / visibility mitigations\",\"Implement 5-step Sales &amp; Operations Planning (S&amp;OP) and collaborative CPFR frameworks\"],\"caseStudies\":[\"Tata Motors: Collocated Supplier Parks and Strategic Vendor Partnerships\",\"Amul Dairy vs. Zara: Level Processing vs. Responsive Chase Production\",\"Procter &amp; Gamble (Pampers): Analyzing and Mitigating the Bullwhip Effect\",\"Walmart &amp; Nestlé: CPFR and Real-Time Point-of-Sale Data Integration\"],\"resources\":[{\"title\":\"End-to-End SCM Strategic Architecture Guide (.PDF)\",\"url\":\"https://example.com\"},{\"title\":\"S&amp;OP Monthly Process &amp; Reconciliation Blueprint (.XLSX)\",\"url\":\"https://example.com\"}]},{\"id\":\"3\",\"slug\":\"finance-masterclass-working-capital-budgeting\",\"title\":\"Finance Masterclass: Working Capital, Capital Budgeting &amp; Risk Management\",\"description\":\"Bridge financial theory and corporate decision-making with working capital management, NPV vs. IRR capital budgeting, convertible debentures, and credit risk.\",\"longDescription\":\"Bridge textbook financial theory with real-world corporate strategy inspired by I.M. Pandey's Financial Management text. Learn to navigate short-term cash flow crunches, evaluate long-term capital budgeting investments using Net Present Value (NPV) and Internal Rate of Return (IRR) with risk premiums, structure convertible debentures with warrants, and establish extreme operational reliability to drive enterprise scale.\",\"duration\":\"32m 40s\",\"level\":\"Executive\",\"category\":\"Corporate Finance\",\"youtubeEmbedUrl\":\"https://www.youtube-nocookie.com/embed/VJ_5ja4M94I\",\"thumbnailUrl\":\"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&amp;auto=format&amp;fit=crop&amp;q=80\",\"instructor\":{\"name\":\"Saksham\",\"role\":\"Corporate Finance &amp; Strategy Leader\",\"avatarUrl\":\"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&amp;auto=format&amp;fit=crop&amp;q=80\"},\"learningObjectives\":[\"Manage day-to-day working capital and build cash flow projections to prevent insolvency\",\"Evaluate long-term projects using Net Present Value (NPV), IRR, and risk premiums\",\"Structure multi-part convertible debentures with warrants to minimize equity dilution\",\"Assess corporate creditworthiness and present strategic borrowing logic to lenders\"],\"caseStudies\":[\"Rajpur Garments: Short-Term Working Capital Cash Crunches &amp; Proactive Planning\",\"Healthy Drinks &amp; PCC: NPV vs. IRR Evaluation and Risk Premium Adjustments\",\"GCL Credit Facilities: Lender Risk Profiling and Strategic Borrowing Justification\",\"Tech Process Solutions: Building Enterprise Value on Extreme Reliability\"],\"resources\":[{\"title\":\"Working Capital &amp; Cash Flow Forecasting Template (.XLSX)\",\"url\":\"https://example.com\"},{\"title\":\"Capital Budgeting NPV &amp; IRR Decision Matrix (.PDF)\",\"url\":\"https://example.com\"}]},{\"id\":\"4\",\"slug\":\"indian-labour-law-industrial-disputes-codes\",\"title\":\"Indian Labour Law &amp; Governance: Industrial Disputes &amp; The 4 Labour Codes\",\"description\":\"Master Indian labour law, from constitutional foundations and the 4 new Labour Codes to industrial dispute resolution, retrenchment vs layoff, and trade unions.\",\"longDescription\":\"An authoritative executive guide to the legal and compliance landscape of Indian labour law. Trace the evolution from colonial factory acts to constitutional bedrock (Articles 14, 19, 23, 24) and the four new unified Labour Codes (Wages, Industrial Relations, Social Security, OSH). Unpack statutory definitions under the Industrial Disputes Act 1947 (Layoff vs. Retrenchment, Strike vs. Lockout), analyze the landmark Supreme Court 'Triple Test' from the Bangalore Water Supply case, and explore collective bargaining mechanics under the Trade Unions Act 1926.\",\"duration\":\"34m 10s\",\"level\":\"Executive\",\"category\":\"Industrial Relations\",\"youtubeEmbedUrl\":\"https://www.youtube-nocookie.com/embed/3xAyBjb7bv4\",\"thumbnailUrl\":\"https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&amp;auto=format&amp;fit=crop&amp;q=80\",\"instructor\":{\"name\":\"Saksham\",\"role\":\"Labour Law &amp; Industrial Relations Consultant\",\"avatarUrl\":\"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&amp;auto=format&amp;fit=crop&amp;q=80\"},\"learningObjectives\":[\"Navigate constitutional bedrock articles (14, 19, 23, 24) and the 4 new unified Labour Codes\",\"Distinguish legally between Layoff vs. Retrenchment and Strike vs. Lockout under ID Act 1947\",\"Apply the Supreme Court's 'Triple Test' (Bangalore Water Supply Case) to define an industry\",\"Understand trade union registration requirements, legal immunities, and collective bargaining\"],\"caseStudies\":[\"Colonial Law Evolution: Factories Act 1883 to Trade Dispute Act 1929\",\"Bangalore Water Supply &amp; Sewerage Board v. A. Rajappa (1978): The Landmark Triple Test\",\"Industrial Relations Compliance: Registered vs. Unregistered Trade Union Negotiation\"],\"resources\":[{\"title\":\"4 Labour Codes Compliance Summary &amp; Checklist (.PDF)\",\"url\":\"https://example.com\"},{\"title\":\"Industrial Disputes Statutory Framework Toolkit (.PDF)\",\"url\":\"https://example.com\"}]},{\"id\":\"5\",\"slug\":\"strategic-finance-cash-flow-tvm-eva\",\"title\":\"Strategic Finance: Cash Flow Management, TVM &amp; EVA Value Creation\",\"description\":\"Unlock the core of corporate survival with cash flow management, working capital cycles, Time Value of Money (TVM), NPV discounting, and Economic Value Added (EVA).\",\"longDescription\":\"Decode corporate financial strategy and sustainable wealth creation. Grounded in I.M. Pandey's financial management framework, this course covers proactive cash flow planning to avoid debt traps, managing the working capital cycle (receivables vs payables), mastering Time Value of Money (TVM) through compounding and discounting, comparing Payback/IRR vs. Net Present Value (NPV), and deploying Economic Value Added (EVA) at enterprise scale (HUL) to beat the cost of capital.\",\"duration\":\"31m 45s\",\"level\":\"Executive\",\"category\":\"Strategic Finance\",\"youtubeEmbedUrl\":\"https://www.youtube-nocookie.com/embed/1-lhB-l5pdY\",\"thumbnailUrl\":\"https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&amp;auto=format&amp;fit=crop&amp;q=80\",\"instructor\":{\"name\":\"Saksham\",\"role\":\"Corporate Strategy &amp; Financial Management Expert\",\"avatarUrl\":\"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&amp;auto=format&amp;fit=crop&amp;q=80\"},\"learningObjectives\":[\"Align overall corporate financial strategy directly with long-term organizational goals\",\"Analyze the working capital cycle to eliminate liquidity bottlenecks and structural bankruptcy\",\"Apply Time Value of Money (TVM) principles using compounding, discounting, and NPV\",\"Measure enterprise value creation using Economic Value Added (EVA = NOPAT - Capital Cost)\"],\"caseStudies\":[\"Rajpur Garments: Proactive Budgeting to Overcome Debt Burdens &amp; Losses\",\"Bharat Chemicals &amp; Conan &amp; Sons: Working Capital Cycles and Cash Flow Dynamics\",\"Niyogi Chemical Company &amp; Continental Equipment: NPV vs. Payback &amp; IRR Internal Debates\",\"Hindustan Unilever Limited (HUL): Maximizing Shareholder Value via EVA Frameworks\"],\"resources\":[{\"title\":\"Strategic Cash Flow &amp; TVM Discounting Framework (.PDF)\",\"url\":\"https://example.com\"},{\"title\":\"Economic Value Added (EVA) Calculation Model (.XLSX)\",\"url\":\"https://example.com\"}]}]");
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