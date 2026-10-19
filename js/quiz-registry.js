/* =========================================================
   CONCEPT QUIZZER — QUIZ REGISTRY
   ========================================================= */

(function () {

    "use strict";

    window.QuizData = window.QuizData || {};

    window.QuizRegistry = {

        entries: {},

        register: function (chapterId, quizFile) {

            if (!chapterId || !quizFile) {
                return;
            }

            this.entries[
                String(chapterId)
                    .trim()
                    .toLowerCase()
            ] = quizFile;
        },

        normalize: function (value) {

            return String(value || "")
                .trim()
                .toLowerCase()
                .replace(/_/g, "-")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-|-$/g, "");
        },

        compact: function (value) {

            return String(value || "")
                .trim()
                .toLowerCase()
                .replace(/_/g, "-")
                .replace(/\s+/g, "-")
                .replace(/^class-?(\d+)-/, "$1-")
                
.replace(
    /^(6|7|8|9|10)-(mathematics|math|science|social-science|socialscience|english|hindi|sanskrit|history|geography|civics|economics|artificial-intelligence|ai|information-technology|it|political-science|biology|chemistry|physics)-/,
    ""
)
               
                .replace(/[^a-z0-9]/g, "");
        },

        find: function (chapterKey) {

            const requested =
                this.normalize(chapterKey);

            if (!requested) {
                return null;
            }

            /* Exact match */

            if (this.entries[requested]) {

                return {
                    chapterId: requested,
                    file: this.entries[requested]
                };
            }

            /* Compact match */

            const requestedCompact =
                this.compact(requested);

            const ids =
                Object.keys(this.entries);

            for (let i = 0; i < ids.length; i++) {

                const id = ids[i];

                if (
                    this.compact(id) ===
                    requestedCompact
                ) {

                    return {
                        chapterId: id,
                        file: this.entries[id]
                    };
                }
            }

            return null;
        },

        has: function (chapterKey) {

            return !!this.find(chapterKey);
        },

        load: function (chapterKey) {

            const result =
                this.find(chapterKey);

            if (!result) {

                return Promise.reject(
                    new Error(
                        "No quiz registered for: " +
                        chapterKey
                    )
                );
            }

            const canonicalId =
                result.chapterId;

            /* Already loaded */

            if (
                window.QuizData &&
                window.QuizData[canonicalId]
            ) {

                return Promise.resolve(
                    window.QuizData[canonicalId]
                );
            }

            /* -----------------------------------------
               CREATE ABSOLUTE QUIZ FILE URL
               ----------------------------------------- */

            const quizURL =
    new URL(
        result.file,
        document.baseURI
    ).href;

            console.log(
                "🎯 Loading quiz:",
                canonicalId,
                quizURL
            );

            return new Promise(
                function (resolve, reject) {

                    const script =
                        document.createElement("script");

                    script.src = quizURL;

                    script.async = true;

                    script.onload =
                        function () {

                            console.log(
                                "✅ Quiz script loaded:",
                                quizURL
                            );

                            if (
                                window.QuizData &&
                                window.QuizData[canonicalId]
                            ) {

                                resolve(
                                    window.QuizData[
                                        canonicalId
                                    ]
                                );

                                return;
                            }

                            reject(
                                new Error(
                                    "Quiz file loaded but data was not registered for: " +
                                    canonicalId
                                )
                            );
                        };

                    script.onerror =
                        function () {

                            console.error(
                                "❌ Quiz file failed:",
                                quizURL
                            );

                            reject(
                                new Error(
                                    "Could not load quiz file: " +
                                    quizURL
                                )
                            );
                        };

                    document.head.appendChild(script);
                }
            );
        }
    };


    /* =====================================================
       CLASS 6 — MATHEMATICS
       ===================================================== */

    window.QuizRegistry.register(
        "patterns-in-mathematics",
        "js/quizzes/class6/mathematics/patterns-in-mathematics.js"
    );

   
window.QuizRegistry.register(
    "lines-and-angles",
    "js/quizzes/class6/mathematics/lines-and-angles.js"
);

window.QuizRegistry.register(
    "number-play",
    "js/quizzes/class6/mathematics/number-play.js"
);

window.QuizRegistry.register(
    "data-handling-and-presentation",
    "js/quizzes/class6/mathematics/data-handling-and-presentation.js"
);

window.QuizRegistry.register(
    "prime-time",
    "js/quizzes/class6/mathematics/prime-time.js"
);

   window.QuizRegistry.register(
    "perimeter-and-area",
    "js/quizzes/class6/mathematics/perimeter-and-area.js"
);

window.QuizRegistry.register(
    "fractions",
    "js/quizzes/class6/mathematics/fractions.js"
);

window.QuizRegistry.register(
    "playing-with-constructions",
    "js/quizzes/class6/mathematics/playing-with-constructions.js"
);

window.QuizRegistry.register(
    "symmetry",
    "js/quizzes/class6/mathematics/symmetry.js"
);

window.QuizRegistry.register(
    "the-other-side-of-zero",
    "js/quizzes/class6/mathematics/the-other-side-of-zero.js"
);

   
window.QuizRegistry.register(
    "the-wonderful-world-of-science",
    "js/quizzes/class6/science/the-wonderful-world-of-science.js"
);

window.QuizRegistry.register(
    "diversity-in-the-living-world",
    "js/quizzes/class6/science/diversity-in-the-living-world.js"
);

window.QuizRegistry.register(
    "mindful-eating-a-path-to-a-healthy-body",
    "js/quizzes/class6/science/mindful-eating-a-path-to-a-healthy-body.js"
);

window.QuizRegistry.register(
    "exploring-magnets",
    "js/quizzes/class6/science/exploring-magnets.js"
);

window.QuizRegistry.register(
    "measurement-of-length-and-motion",
    "js/quizzes/class6/science/measurement-of-length-and-motion.js"
);

window.QuizRegistry.register(
    "materials-around-us",
    "js/quizzes/class6/science/materials-around-us.js"
);

   
window.QuizRegistry.register(
    "temperature-and-its-measurement",
    "js/quizzes/class6/science/temperature-and-its-measurement.js"
);

window.QuizRegistry.register(
    "a-journey-through-states-of-water",
    "js/quizzes/class6/science/a-journey-through-states-of-water.js"
);

window.QuizRegistry.register(
    "methods-of-separation-in-everyday-life",
    "js/quizzes/class6/science/methods-of-separation-in-everyday-life.js"
);

window.QuizRegistry.register(
    "living-creatures-exploring-their-characteristics",
    "js/quizzes/class6/science/living-creatures-exploring-their-characteristics.js"
);

window.QuizRegistry.register(
    "natures-treasures",
    "js/quizzes/class6/science/natures-treasures.js"
);

window.QuizRegistry.register(
    "beyond-earth",
    "js/quizzes/class6/science/beyond-earth.js"
);
   
   
window.QuizRegistry.register(
    "timeline-and-sources-of-history",
    "js/quizzes/class6/history/timeline-and-sources-of-history.js"
);

window.QuizRegistry.register(
    "india-that-is-bharat",
    "js/quizzes/class6/history/india-that-is-bharat.js"
);

window.QuizRegistry.register(
    "the-beginning-of-indian-civilisation",
    "js/quizzes/class6/history/the-beginning-of-indian-civilisation.js"
);

window.QuizRegistry.register(
    "indias-cultural-roots",
    "js/quizzes/class6/history/indias-cultural-roots.js"
);

    window.QuizRegistry.register(
    "unity-in-diversity-or-many-in-one",
    "js/quizzes/class6/history/unity-in-diversity-or-many-in-one.js"
);

   /* =====================================================
   CLASS 6 — GEOGRAPHY
   ===================================================== */

window.QuizRegistry.register(
    "locating-places-on-the-earth",
    "js/quizzes/class6/geography/locating-places-on-the-earth.js"
);

window.QuizRegistry.register(
    "oceans-and-continents",
    "js/quizzes/class6/geography/oceans-and-continents.js"
);

window.QuizRegistry.register(
    "landforms-and-life",
    "js/quizzes/class6/geography/landforms-and-life.js"
);

   /* =====================================================
   CLASS 6 — CIVICS
   ===================================================== */

window.QuizRegistry.register(
    "family-and-community",
    "js/quizzes/class6/civics/family-and-community.js"
);

window.QuizRegistry.register(
    "grassroots-democracy-part-1",
    "js/quizzes/class6/civics/grassroots-democracy-part-1.js"
);

window.QuizRegistry.register(
    "grassroots-democracy-part-2",
    "js/quizzes/class6/civics/grassroots-democracy-part-2.js"
);

window.QuizRegistry.register(
    "grassroots-democracy-part-3",
    "js/quizzes/class6/civics/grassroots-democracy-part-3.js"
);

window.QuizRegistry.register(
    "the-value-of-work",
    "js/quizzes/class6/civics/the-value-of-work.js"
);

window.QuizRegistry.register(
    "economic-activities-around-us",
    "js/quizzes/class6/civics/economic-activities-around-us.js"
);

   /* =====================================================
   CLASS 7 — MATHEMATICS
   ===================================================== */

window.QuizRegistry.register(
    "7-mathematics-large-numbers-around-us",
    "js/quizzes/class7/mathematics/large-numbers-around-us.js"
);

window.QuizRegistry.register(
    "7-mathematics-arithmetic-expressions",
    "js/quizzes/class7/mathematics/arithmetic-expressions.js"
);

window.QuizRegistry.register(
    "7-mathematics-a-peek-beyond-the-point",
    "js/quizzes/class7/mathematics/a-peek-beyond-the-point.js"
);

window.QuizRegistry.register(
    "7-mathematics-expressions-using-letter-numbers",
    "js/quizzes/class7/mathematics/expressions-using-letter-numbers.js"
);

window.QuizRegistry.register(
    "7-mathematics-parallel-and-intersecting-lines",
    "js/quizzes/class7/mathematics/parallel-and-intersecting-lines.js"
);

window.QuizRegistry.register(
    "7-mathematics-number-play",
    "js/quizzes/class7/mathematics/number-play.js"
);

window.QuizRegistry.register(
    "7-mathematics-a-tale-of-three-intersecting-lines",
    "js/quizzes/class7/mathematics/a-tale-of-three-intersecting-lines.js"
);

window.QuizRegistry.register(
    "7-mathematics-working-with-fractions",
    "js/quizzes/class7/mathematics/working-with-fractions.js"
);

   window.QuizRegistry.register(
    "7-science-the-ever-evolving-world-of-science",
    "js/quizzes/class7/science/the-ever-evolving-world-of-science.js"
);

window.QuizRegistry.register(
    "7-science-exploring-substances-acidic-basic-and-neutral",
    "js/quizzes/class7/science/exploring-substances-acidic-basic-and-neutral.js"
);

window.QuizRegistry.register(
    "7-science-electricity-circuits-and-their-components",
    "js/quizzes/class7/science/electricity-circuits-and-their-components.js"
);

window.QuizRegistry.register(
    "7-science-the-world-of-metals-and-non-metals",
    "js/quizzes/class7/science/the-world-of-metals-and-non-metals.js"
);

window.QuizRegistry.register(
    "7-science-changes-around-us-physical-and-chemical",
    "js/quizzes/class7/science/changes-around-us-physical-and-chemical.js"
);

window.QuizRegistry.register(
    "7-science-adolescence-a-stage-of-growth-and-change",
    "js/quizzes/class7/science/adolescence-a-stage-of-growth-and-change.js"
);

window.QuizRegistry.register(
    "7-science-heat-transfer-in-nature",
    "js/quizzes/class7/science/heat-transfer-in-nature.js"
);

window.QuizRegistry.register(
    "7-science-measurement-of-time-and-motion",
    "js/quizzes/class7/science/measurement-of-time-and-motion.js"
);

window.QuizRegistry.register(
    "7-science-life-processes-in-animals",
    "js/quizzes/class7/science/life-processes-in-animals.js"
);

window.QuizRegistry.register(
    "7-science-life-processes-in-plants",
    "js/quizzes/class7/science/life-processes-in-plants.js"
);

window.QuizRegistry.register(
    "7-science-light-shadows-and-reflections",
    "js/quizzes/class7/science/light-shadows-and-reflections.js"
);

window.QuizRegistry.register(
    "7-science-earth-moon-and-the-sun",
    "js/quizzes/class7/science/earth-moon-and-the-sun.js"
);

   window.QuizRegistry.register(
    "7-history-new-beginnings-cities-and-states",
    "js/quizzes/class7/history/new-beginnings-cities-and-states.js"
);

window.QuizRegistry.register(
    "7-history-the-rise-of-empires",
    "js/quizzes/class7/history/the-rise-of-empires.js"
);

window.QuizRegistry.register(
    "7-history-the-age-of-reorganisation",
    "js/quizzes/class7/history/the-age-of-reorganisation.js"
);

   window.QuizRegistry.register(
    "7-history-the-gupta-era-an-age-of-tireless-creativity",
    "js/quizzes/class7/history/the-gupta-era-an-age-of-tireless-creativity.js"
);

window.QuizRegistry.register(
    "7-history-how-land-became-sacred",
    "js/quizzes/class7/history/how-land-became-sacred.js"
);

window.QuizRegistry.register(
    "7-history-from-pilgrimage-to-trades-beyond-india",
    "js/quizzes/class7/history/from-pilgrimage-to-trades-beyond-india.js"
);

   window.QuizRegistry.register(
    "geographical-diversity-of-india",
    "js/quizzes/class7/geography/geographical-diversity-of-india.js"
);

window.QuizRegistry.register(
    "understanding-the-weather",
    "js/quizzes/class7/geography/understanding-the-weather.js"
);

window.QuizRegistry.register(
    "climates-of-india",
    "js/quizzes/class7/geography/climates-of-india.js"
);
    /* =====================================================
       FUTURE QUIZZES GO HERE

       Example:

       window.QuizRegistry.register(
           "class6-mathematics-lines-and-angles",
           "js/quizzes/class6/mathematics/lines-and-angles.js"
       );

       ===================================================== */


    console.log(
        "✅ Quiz Registry ready:",
        Object.keys(
            window.QuizRegistry.entries
        )
    );

})();


