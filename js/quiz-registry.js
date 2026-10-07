/* =========================================================
   CONCEPT QUIZZER — QUIZ REGISTRY
   ---------------------------------------------------------
   One separate quiz file for every chapter.

   Flow:

   Chapter Registry
          ↓
   Quiz Registry
          ↓
   Separate Chapter Quiz File
          ↓
   Quiz Player
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       GLOBAL QUIZ DATA
       ===================================================== */

    window.QuizData =
        window.QuizData || {};


    /* =====================================================
       QUIZ REGISTRY
       ===================================================== */

    window.QuizRegistry = {

        entries: {},


        /* -------------------------------------------------
           REGISTER A QUIZ FILE
           ------------------------------------------------- */

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


        /* -------------------------------------------------
           NORMALIZE CHAPTER ID
           ------------------------------------------------- */

        normalize: function (value) {

            return String(value || "")
                .trim()
                .toLowerCase()
                .replace(/_/g, "-")
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-|-$/g, "");

        },


        /* -------------------------------------------------
           COMPACT ID

           This handles differences such as:

           9-artificialintelligence-...
           9-artificial-intelligence-...

           class9-political-science-...
           9-politicalscience-...
           ------------------------------------------------- */

        compact: function (value) {

            return String(value || "")
                .trim()
                .toLowerCase()
                .replace(/_/g, "-")
                .replace(/\s+/g, "-")
                .replace(/^class-?(\d+)-/, "$1-")
                .replace(/[^a-z0-9]/g, "");

        },


        /* -------------------------------------------------
           FIND A REGISTERED QUIZ
           ------------------------------------------------- */

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


        /* -------------------------------------------------
           CHECK IF QUIZ EXISTS
           ------------------------------------------------- */

        has: function (chapterKey) {

            return !!this.find(chapterKey);

        },


        /* -------------------------------------------------
           LOAD QUIZ FILE
           ------------------------------------------------- */

        load: function (chapterKey) {

            const result =
                this.find(chapterKey);


            if (!result) {

                return Promise.reject(
                    new Error(
                        "No quiz file registered for chapter: " +
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


            /* Load separate chapter file */

            return new Promise(
                function (resolve, reject) {

                    const script =
                        document.createElement(
                            "script"
                        );


                    script.src =
                        result.file;


                    script.onload =
                        function () {

                            if (
                                window.QuizData &&
                                window.QuizData[
                                    canonicalId
                                ]
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
                                    "Quiz file loaded but did not register data for: " +
                                    canonicalId
                                )
                            );

                        };


                    script.onerror =
                        function () {

                            reject(
                                new Error(
                                    "Could not load quiz file: " +
                                    result.file
                                )
                            );

                        };


                    document.head.appendChild(
                        script
                    );

                }
            );

        }

    };


    /* =====================================================
       BUILD REGISTRY FROM CHAPTER REGISTRY
       ===================================================== */

    function buildQuizRegistry() {

        if (
            !Array.isArray(
                window.ChapterRegistry
            )
        ) {

            console.warn(
                "⚠️ Quiz Registry: ChapterRegistry is not available."
            );

            return;

        }


        window.ChapterRegistry.forEach(
            function (chapter) {

                if (
                    !chapter ||
                    !chapter.id ||
                    !chapter.file
                ) {

                    return;

                }


                /*
                 * Convert:
                 *
                 * js/notes/class9/
                 * political-science/
                 * electoral-politics.js
                 *
                 * into:
                 *
                 * js/quizzes/class9/
                 * political-science/
                 * electoral-politics.js
                 */

                const quizFile =
                    chapter.file.replace(
                        /^js\/notes\//,
                        "js/quizzes/"
                    );


                /* Register canonical ID */

                window.QuizRegistry.register(
                    chapter.id,
                    quizFile
                );


                /* Register aliases */

                if (
                    Array.isArray(
                        chapter.aliases
                    )
                ) {

                    chapter.aliases.forEach(
                        function (alias) {

                            window.QuizRegistry.register(
                                alias,
                                quizFile
                            );

                        }
                    );

                }

            }
        );


        console.log(
            "✅ Quiz Registry built:",
            Object.keys(
                window.QuizRegistry.entries
            ).length,
            "quiz mappings"
        );

    }


    /* =====================================================
       BUILD NOW
       ===================================================== */

    buildQuizRegistry();


})();
