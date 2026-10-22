/* =======================================================
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

   window.QuizRegistry.register(
    "7-civics-from-the-rulers-to-ruled-types-of-government",
    "js/quizzes/class7/civics/from-the-rulers-to-ruled-types-of-government.js"
);

window.QuizRegistry.register(
    "7-civics-the-constitution-of-india",
    "js/quizzes/class7/civics/the-constitution-of-india.js"
);

window.QuizRegistry.register(
    "7-civics-from-barter-to-money",
    "js/quizzes/class7/civics/from-barter-to-money.js"
);

window.QuizRegistry.register(
    "7-civics-understanding-markets",
    "js/quizzes/class7/civics/understanding-markets.js"
);
   

   window.QuizRegistry.register(
    "8-mathematics-rational-numbers",
    "js/quizzes/class8/mathematics/rational-numbers.js"
);

window.QuizRegistry.register(
    "8-mathematics-linear-equations-in-one-variable",
    "js/quizzes/class8/mathematics/linear-equations-in-one-variable.js"
);

window.QuizRegistry.register(
    "8-mathematics-understanding-quadrilaterals",
    "js/quizzes/class8/mathematics/understanding-quadrilaterals.js"
);

window.QuizRegistry.register(
    "8-mathematics-practical-geometry",
    "js/quizzes/class8/mathematics/practical-geometry.js"
);

window.QuizRegistry.register(
    "8-mathematics-data-handling",
    "js/quizzes/class8/mathematics/data-handling.js"
);

window.QuizRegistry.register(
    "8-mathematics-squares-and-square-roots",
    "js/quizzes/class8/mathematics/squares-and-square-roots.js"
);

window.QuizRegistry.register(
    "8-mathematics-cubes-and-cube-roots",
    "js/quizzes/class8/mathematics/cubes-and-cube-roots.js"
);

window.QuizRegistry.register(
    "8-mathematics-comparing-quantities",
    "js/quizzes/class8/mathematics/comparing-quantities.js"
);

   window.QuizRegistry.register(
    "8-mathematics-algebraic-expressions-and-identities",
    "js/quizzes/class8/mathematics/algebraic-expressions-and-identities.js"
);

window.QuizRegistry.register(
    "8-mathematics-visualising-solid-shapes",
    "js/quizzes/class8/mathematics/visualising-solid-shapes.js"
);

window.QuizRegistry.register(
    "8-mathematics-mensuration",
    "js/quizzes/class8/mathematics/mensuration.js"
);

window.QuizRegistry.register(
    "8-mathematics-exponents-and-powers",
    "js/quizzes/class8/mathematics/exponents-and-powers.js"
);

window.QuizRegistry.register(
    "8-mathematics-direct-and-inverse-proportions",
    "js/quizzes/class8/mathematics/direct-and-inverse-proportions.js"
);

window.QuizRegistry.register(
    "8-mathematics-factorisation",
    "js/quizzes/class8/mathematics/factorisation.js"
);

window.QuizRegistry.register(
    "8-mathematics-introduction-to-graphs",
    "js/quizzes/class8/mathematics/introduction-to-graphs.js"
);

window.QuizRegistry.register(
    "8-mathematics-playing-with-numbers",
    "js/quizzes/class8/mathematics/playing-with-numbers.js"
);

   window.QuizRegistry.register(
    "8-science-exploring-the-investigative-world-of-science",
    "js/quizzes/class8/science/exploring-the-investigative-world-of-science.js"
);

window.QuizRegistry.register(
    "8-science-the-invisible-living-world-beyond-our-naked-eye",
    "js/quizzes/class8/science/the-invisible-living-world-beyond-our-naked-eye.js"
);

window.QuizRegistry.register(
    "8-science-health-the-ultimate-treasure",
    "js/quizzes/class8/science/health-the-ultimate-treasure.js"
);

window.QuizRegistry.register(
    "8-science-electricity-magnetic-and-heating-effects",
    "js/quizzes/class8/science/electricity-magnetic-and-heating-effects.js"
);

window.QuizRegistry.register(
    "8-science-exploring-forces",
    "js/quizzes/class8/science/exploring-forces.js"
);

window.QuizRegistry.register(
    "8-science-pressure-winds-storms-and-cyclones",
    "js/quizzes/class8/science/pressure-winds-storms-and-cyclones.js"
);

window.QuizRegistry.register(
    "8-science-particulate-nature-of-matter",
    "js/quizzes/class8/science/particulate-nature-of-matter.js"
);

   window.QuizRegistry.register(
    "8-science-nature-of-matter-elements-compounds-and-mixtures",
    "js/quizzes/class8/science/nature-of-matter-elements-compounds-and-mixtures.js"
);

window.QuizRegistry.register(
    "8-science-the-amazing-world-of-solutes-solvents-and-solutions",
    "js/quizzes/class8/science/the-amazing-world-of-solutes-solvents-and-solutions.js"
);

window.QuizRegistry.register(
    "8-science-light-mirrors-and-lenses",
    "js/quizzes/class8/science/light-mirrors-and-lenses.js"
);

window.QuizRegistry.register(
    "8-science-keeping-time-with-the-skies",
    "js/quizzes/class8/science/keeping-time-with-the-skies.js"
);

window.QuizRegistry.register(
    "8-science-how-nature-works-in-harmony",
    "js/quizzes/class8/science/how-nature-works-in-harmony.js"
);

window.QuizRegistry.register(
    "8-science-our-home-earth-a-unique-life-sustaining-planet",
    "js/quizzes/class8/science/our-home-earth-a-unique-life-sustaining-planet.js"
);

   window.QuizRegistry.register(
    "8-history-how-when-and-where",
    "js/quizzes/class8/history/how-when-and-where.js"
);

window.QuizRegistry.register(
    "8-history-from-trade-to-territory",
    "js/quizzes/class8/history/from-trade-to-territory.js"
);

window.QuizRegistry.register(
    "8-history-ruling-the-countryside",
    "js/quizzes/class8/history/ruling-the-countryside.js"
);

window.QuizRegistry.register(
    "8-history-tribals-dikus-and-the-vision-of-a-golden-age",
    "js/quizzes/class8/history/tribals-dikus-and-the-vision-of-a-golden-age.js"
);

window.QuizRegistry.register(
    "8-history-when-people-rebel-1857-and-after",
    "js/quizzes/class8/history/when-people-rebel-1857-and-after.js"
);

window.QuizRegistry.register(
    "8-history-civilising-the-native-educating-the-nation",
    "js/quizzes/class8/history/civilising-the-native-educating-the-nation.js"
);

window.QuizRegistry.register(
    "8-history-women-caste-and-reform",
    "js/quizzes/class8/history/women-caste-and-reform.js"
);

window.QuizRegistry.register(
    "8-history-the-making-of-the-national-movement",
    "js/quizzes/class8/history/the-making-of-the-national-movement.js"
);

   window.QuizRegistry.register(
    "8-geography-resources",
    "js/quizzes/class8/geography/resources.js"
);

window.QuizRegistry.register(
    "8-geography-land-soil-water-natural-vegetation-and-wildlife-resources",
    "js/quizzes/class8/geography/land-soil-water-natural-vegetation-and-wildlife-resources.js"
);

window.QuizRegistry.register(
    "8-geography-agriculture",
    "js/quizzes/class8/geography/agriculture.js"
);

window.QuizRegistry.register(
    "8-geography-industries",
    "js/quizzes/class8/geography/industries.js"
);

window.QuizRegistry.register(
    "8-geography-human-resources",
    "js/quizzes/class8/geography/human-resources.js"
);

   window.QuizRegistry.register(
    "8-civics-the-indian-constitution",
    "js/quizzes/class8/civics/the-indian-constitution.js"
);

window.QuizRegistry.register(
    "8-civics-understanding-secularism",
    "js/quizzes/class8/civics/understanding-secularism.js"
);

window.QuizRegistry.register(
    "8-civics-parliament-and-the-making-of-laws",
    "js/quizzes/class8/civics/parliament-and-the-making-of-laws.js"
);

window.QuizRegistry.register(
    "8-civics-judiciary",
    "js/quizzes/class8/civics/judiciary.js"
);

window.QuizRegistry.register(
    "8-civics-understanding-marginalisation",
    "js/quizzes/class8/civics/understanding-marginalisation.js"
);

window.QuizRegistry.register(
    "8-civics-confronting-marginalisation",
    "js/quizzes/class8/civics/confronting-marginalisation.js"
);

window.QuizRegistry.register(
    "8-civics-public-facilities",
    "js/quizzes/class8/civics/public-facilities.js"
);

window.QuizRegistry.register(
    "8-civics-law-and-social-justice",
    "js/quizzes/class8/civics/law-and-social-justice.js"
);

   window.QuizRegistry.register(
    "9-mathematics-number-systems",
    "js/quizzes/class9/mathematics/number-systems.js"
);

window.QuizRegistry.register(
    "9-mathematics-polynomials",
    "js/quizzes/class9/mathematics/polynomials.js"
);

window.QuizRegistry.register(
    "9-mathematics-coordinate-geometry",
    "js/quizzes/class9/mathematics/coordinate-geometry.js"
);

window.QuizRegistry.register(
    "9-mathematics-linear-equations-in-two-variables",
    "js/quizzes/class9/mathematics/linear-equations-in-two-variables.js"
);

window.QuizRegistry.register(
    "9-mathematics-introduction-to-euclids-geometry",
    "js/quizzes/class9/mathematics/introduction-to-euclids-geometry.js"
);

window.QuizRegistry.register(
    "9-mathematics-lines-and-angles",
    "js/quizzes/class9/mathematics/lines-and-angles.js"
);

   window.QuizRegistry.register(
    "9-mathematics-triangles",
    "js/quizzes/class9/mathematics/triangles.js"
);

window.QuizRegistry.register(
    "9-mathematics-quadrilaterals",
    "js/quizzes/class9/mathematics/quadrilaterals.js"
);

window.QuizRegistry.register(
    "9-mathematics-circles",
    "js/quizzes/class9/mathematics/circles.js"
);

window.QuizRegistry.register(
    "9-mathematics-herons-formula",
    "js/quizzes/class9/mathematics/herons-formula.js"
);

window.QuizRegistry.register(
    "9-mathematics-surface-areas-and-volumes",
    "js/quizzes/class9/mathematics/surface-areas-and-volumes.js"
);

window.QuizRegistry.register(
    "9-mathematics-statistics",
    "js/quizzes/class9/mathematics/statistics.js"
);

   window.QuizRegistry.register(
    "9-chemistry-matter-in-our-surroundings",
    "js/quizzes/class9/chemistry/matter-in-our-surroundings.js"
);

window.QuizRegistry.register(
    "9-chemistry-is-matter-around-us-pure",
    "js/quizzes/class9/chemistry/is-matter-around-us-pure.js"
);

window.QuizRegistry.register(
    "9-chemistry-atoms-and-molecules",
    "js/quizzes/class9/chemistry/atoms-and-molecules.js"
);

window.QuizRegistry.register(
    "9-chemistry-structure-of-the-atom",
    "js/quizzes/class9/chemistry/structure-of-the-atom.js"
);

   window.QuizRegistry.register(
    "9-biology-the-fundamental-unit-of-life",
    "js/quizzes/class9/biology/the-fundamental-unit-of-life.js"
);

window.QuizRegistry.register(
    "9-biology-tissues",
    "js/quizzes/class9/biology/tissues.js"
);

window.QuizRegistry.register(
    "9-biology-improvement-in-food-resources",
    "js/quizzes/class9/biology/improvement-in-food-resources.js"
);

   window.QuizRegistry.register(
    "9-physics-motion",
    "js/quizzes/class9/physics/motion.js"
);

window.QuizRegistry.register(
    "9-physics-force-and-laws-of-motion",
    "js/quizzes/class9/physics/force-and-laws-of-motion.js"
);

window.QuizRegistry.register(
    "9-physics-gravitation",
    "js/quizzes/class9/physics/gravitation.js"
);

window.QuizRegistry.register(
    "9-physics-work-and-energy",
    "js/quizzes/class9/physics/work-and-energy.js"
);

window.QuizRegistry.register(
    "9-physics-sound",
    "js/quizzes/class9/physics/sound.js"
);

   window.QuizRegistry.register(
    "9-history-the-french-revolution",
    "js/quizzes/class9/history/the-french-revolution.js"
);

window.QuizRegistry.register(
    "9-history-socialism-in-europe-and-the-russian-revolution",
    "js/quizzes/class9/history/socialism-in-europe-and-the-russian-revolution.js"
);

window.QuizRegistry.register(
    "9-history-nazism-and-the-rise-of-hitler",
    "js/quizzes/class9/history/nazism-and-the-rise-of-hitler.js"
);

window.QuizRegistry.register(
    "9-history-forest-society-and-colonialism",
    "js/quizzes/class9/history/forest-society-and-colonialism.js"
);

window.QuizRegistry.register(
    "9-history-pastoralists-in-the-modern-world",
    "js/quizzes/class9/history/pastoralists-in-the-modern-world.js"
);

   window.QuizRegistry.register(
    "9-geography-india-size-and-location",
    "js/quizzes/class9/geography/india-size-and-location.js"
);

window.QuizRegistry.register(
    "9-geography-physical-features-of-india",
    "js/quizzes/class9/geography/physical-features-of-india.js"
);

window.QuizRegistry.register(
    "9-geography-drainage",
    "js/quizzes/class9/geography/drainage.js"
);

window.QuizRegistry.register(
    "9-geography-climate",
    "js/quizzes/class9/geography/climate.js"
);

window.QuizRegistry.register(
    "9-geography-natural-vegetation-and-wildlife",
    "js/quizzes/class9/geography/natural-vegetation-and-wildlife.js"
);

window.QuizRegistry.register(
    "9-geography-population",
    "js/quizzes/class9/geography/population.js"
);

window.QuizRegistry.register(
    "9-politicalscience-what-is-democracy-why-democracy",
    "js/quizzes/class9/politicalscience/what-is-democracy-why-democracy.js"
);

window.QuizRegistry.register(
    "9-politicalscience-constitutional-design",
    "js/quizzes/class9/politicalscience/constitutional-design.js"
);

window.QuizRegistry.register(
    "9-politicalscience-electoral-politics",
    "js/quizzes/class9/politicalscience/electoral-politics.js"
);

window.QuizRegistry.register(
    "9-politicalscience-working-of-institutions",
    "js/quizzes/class9/politicalscience/working-of-institutions.js"
);

window.QuizRegistry.register(
    "9-politicalscience-democratic-rights",
    "js/quizzes/class9/politicalscience/democratic-rights.js"
);

   window.QuizRegistry.register(
    "9-economics-the-story-of-village-palampur",
    "js/quizzes/class9/economics/the-story-of-village-palampur.js"
);

window.QuizRegistry.register(
    "9-economics-people-as-resource",
    "js/quizzes/class9/economics/people-as-resource.js"
);

window.QuizRegistry.register(
    "9-economics-poverty-as-a-challenge",
    "js/quizzes/class9/economics/poverty-as-a-challenge.js"
);

window.QuizRegistry.register(
    "9-economics-food-security-in-india",
    "js/quizzes/class9/economics/food-security-in-india.js"
);

   window.QuizRegistry.register(
    "9-informationtechnology-digital-documentation",
    "js/quizzes/class9/informationtechnology/digital-documentation.js"
);

window.QuizRegistry.register(
    "9-informationtechnology-electronic-spreadsheet",
    "js/quizzes/class9/informationtechnology/electronic-spreadsheet.js"
);

window.QuizRegistry.register(
    "9-informationtechnology-digital-presentation",
    "js/quizzes/class9/informationtechnology/digital-presentation.js"
);

window.QuizRegistry.register(
    "9-informationtechnology-introduction-to-it-ites",
    "js/quizzes/class9/informationtechnology/introduction-to-it-ites.js"
);

window.QuizRegistry.register(
    "9-informationtechnology-data-entry-keyboarding-skills",
    "js/quizzes/class9/informationtechnology/data-entry-keyboarding-skills.js"
);

   window.QuizRegistry.register(
    "9-artificialintelligence-introduction-to-ai",
    "js/quizzes/class9/artificialintelligence/introduction-to-ai.js"
);

window.QuizRegistry.register(
    "9-artificialintelligence-ai-project-cycle",
    "js/quizzes/class9/artificialintelligence/ai-project-cycle.js"
);

window.QuizRegistry.register(
    "9-artificialintelligence-advance-python-data-sciences",
    "js/quizzes/class9/artificialintelligence/advance-python-data-sciences.js"
);

window.QuizRegistry.register(
    "9-artificialintelligence-computer-vision",
    "js/quizzes/class9/artificialintelligence/computer-vision.js"
);

window.QuizRegistry.register(
    "9-artificialintelligence-natural-language-processing",
    "js/quizzes/class9/artificialintelligence/natural-language-processing.js"
);

   window.QuizRegistry.register(
    "10-physics-light-reflection-and-refraction",
    "js/quizzes/class10/physics/light-reflection-and-refraction.js"
);

window.QuizRegistry.register(
    "10-physics-the-human-eye-and-the-colourful-world",
    "js/quizzes/class10/physics/the-human-eye-and-the-colourful-world.js"
);

window.QuizRegistry.register(
    "10-physics-electricity",
    "js/quizzes/class10/physics/electricity.js"
);

window.QuizRegistry.register(
    "10-physics-magnetic-effects-of-electric-current",
    "js/quizzes/class10/physics/magnetic-effects-of-electric-current.js"
);

   window.QuizRegistry.register(
    "10-chemistry-chemical-reactions-and-equations",
    "js/quizzes/class10/chemistry/chemical-reactions-and-equations.js"
);

window.QuizRegistry.register(
    "10-chemistry-acids-bases-and-salts",
    "js/quizzes/class10/chemistry/acids-bases-and-salts.js"
);

window.QuizRegistry.register(
    "10-chemistry-metals-and-non-metals",
    "js/quizzes/class10/chemistry/metals-and-non-metals.js"
);

window.QuizRegistry.register(
    "10-chemistry-carbon-and-its-compounds",
    "js/quizzes/class10/chemistry/carbon-and-its-compounds.js"
);

   window.QuizRegistry.register(
    "10-biology-life-processes",
    "js/quizzes/class10/biology/life-processes.js"
);

window.QuizRegistry.register(
    "10-biology-control-and-coordination",
    "js/quizzes/class10/biology/control-and-coordination.js"
);

window.QuizRegistry.register(
    "10-biology-how-do-organisms-reproduce",
    "js/quizzes/class10/biology/how-do-organisms-reproduce.js"
);

window.QuizRegistry.register(
    "10-biology-heredity",
    "js/quizzes/class10/biology/heredity.js"
);

window.QuizRegistry.register(
    "10-biology-our-environment",
    "js/quizzes/class10/biology/our-environment.js"
);

   window.QuizRegistry.register(
    "10-mathematics-real-numbers",
    "js/quizzes/class10/mathematics/real-numbers.js"
);

window.QuizRegistry.register(
    "10-mathematics-polynomials",
    "js/quizzes/class10/mathematics/polynomials.js"
);

window.QuizRegistry.register(
    "10-mathematics-pair-of-linear-equations-in-two-variables",
    "js/quizzes/class10/mathematics/pair-of-linear-equations-in-two-variables.js"
);

window.QuizRegistry.register(
    "10-mathematics-quadratic-equations",
    "js/quizzes/class10/mathematics/quadratic-equations.js"
);

window.QuizRegistry.register(
    "10-mathematics-arithmetic-progressions",
    "js/quizzes/class10/mathematics/arithmetic-progressions.js"
);

window.QuizRegistry.register(
    "10-mathematics-triangles",
    "js/quizzes/class10/mathematics/triangles.js"
);

window.QuizRegistry.register(
    "10-mathematics-coordinate-geometry",
    "js/quizzes/class10/mathematics/coordinate-geometry.js"
);

   window.QuizRegistry.register(
    "10-mathematics-introduction-to-trigonometry",
    "js/quizzes/class10/mathematics/introduction-to-trigonometry.js"
);

window.QuizRegistry.register(
    "10-mathematics-some-applications-of-trigonometry",
    "js/quizzes/class10/mathematics/some-applications-of-trigonometry.js"
);

window.QuizRegistry.register(
    "10-mathematics-circles",
    "js/quizzes/class10/mathematics/circles.js"
);

window.QuizRegistry.register(
    "10-mathematics-areas-related-to-circles",
    "js/quizzes/class10/mathematics/areas-related-to-circles.js"
);

window.QuizRegistry.register(
    "10-mathematics-surface-areas-and-volumes",
    "js/quizzes/class10/mathematics/surface-areas-and-volumes.js"
);

window.QuizRegistry.register(
    "10-mathematics-statistics",
    "js/quizzes/class10/mathematics/statistics.js"
);

window.QuizRegistry.register(
    "10-mathematics-probability",
    "js/quizzes/class10/mathematics/probability.js"
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


