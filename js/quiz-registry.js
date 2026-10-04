/* =========================================================
   CONCEPT QUIZZER — QUIZ REGISTRY
   Connects every Chapter Registry entry
   to its separate quiz file.
   ========================================================= */

window.QuizRegistry = {

    entries: {},

    register: function (chapterId, quizFile) {
        if (!chapterId || !quizFile) return;

        this.entries[chapterId] = quizFile;
    },

    get: function (chapterId) {
        return this.entries[chapterId] || null;
    },

    has: function (chapterId) {
        return !!this.entries[chapterId];
    },

    /* -----------------------------------------------------
       Load a chapter's quiz file dynamically
       ----------------------------------------------------- */

    load: function (chapterId) {

        const quizFile = this.get(chapterId);

        if (!quizFile) {
            return Promise.reject(
                new Error(
                    "No quiz file registered for chapter: " +
                    chapterId
                )
            );
        }

        /* If this chapter has already been loaded,
           don't load the same file again. */

        if (
            window.QuizData &&
            window.QuizData[chapterId]
        ) {
            return Promise.resolve(
                window.QuizData[chapterId]
            );
        }

        return new Promise(function (resolve, reject) {

            const script = document.createElement("script");

            script.src = quizFile;

            script.onload = function () {

                if (
                    window.QuizData &&
                    window.QuizData[chapterId]
                ) {
                    resolve(
                        window.QuizData[chapterId]
                    );
                } else {
                    reject(
                        new Error(
                            "Quiz file loaded but no quiz data was registered for: " +
                            chapterId
                        )
                    );
                }

            };

            script.onerror = function () {

                reject(
                    new Error(
                        "Could not load quiz file: " +
                        quizFile
                    )
                );

            };

            document.head.appendChild(script);

        });

    }

};


/* =========================================================
   GLOBAL QUIZ DATA
   Every individual chapter quiz file will register
   itself here.
   ========================================================= */

window.QuizData = window.QuizData || {};


/* =========================================================
   BUILD QUIZ PATHS FROM THE EXISTING CHAPTER REGISTRY

   Example:

   js/notes/class10/political-science/power-sharing.js

   becomes:

   js/quizzes/class10/political-science/power-sharing.js
   ========================================================= */

if (Array.isArray(window.ChapterRegistry)) {

    window.ChapterRegistry.forEach(function (chapter) {

        if (
            !chapter ||
            !chapter.id ||
            !chapter.file
        ) {
            return;
        }

        const quizFile = chapter.file
            .replace(
                "js/notes/",
                "js/quizzes/"
            );

        window.QuizRegistry.register(
            chapter.id,
            quizFile
        );


        /* -------------------------------------------------
           Also register all chapter aliases
           ------------------------------------------------- */

        if (Array.isArray(chapter.aliases)) {

            chapter.aliases.forEach(function (alias) {

                window.QuizRegistry.register(
                    alias,
                    quizFile
                );

            });

        }

    });

}


/* =========================================================
   DEBUG INFORMATION
   ========================================================= */

console.log(
    "✅ Quiz Registry loaded:",
    Object.keys(
        window.QuizRegistry.entries
    ).length,
    "chapter mappings"
);
