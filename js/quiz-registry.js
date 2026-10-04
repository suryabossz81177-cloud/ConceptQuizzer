/* =========================================================
   CONCEPT QUIZZER — QUIZ REGISTRY
   Connects every Chapter Registry entry
   to its separate quiz file.
   ========================================================= */

window.QuizRegistry = {

    entries: {},

    register: function (chapterId, quizFile) {
        this.entries[chapterId] = quizFile;
    },

    get: function (chapterId) {
        return this.entries[chapterId] || null;
    },

    has: function (chapterId) {
        return !!this.entries[chapterId];
    }

};


/* ---------------------------------------------------------
   Build quiz paths from the existing Chapter Registry.

   Example:

   js/notes/class10/math/real-numbers.js

   becomes:

   js/quizzes/class10/math/real-numbers.js
   --------------------------------------------------------- */

if (Array.isArray(window.ChapterRegistry)) {

    window.ChapterRegistry.forEach(function (chapter) {

        if (!chapter || !chapter.id || !chapter.file) {
            return;
        }

        const quizFile = chapter.file
            .replace("js/notes/", "js/quizzes/");

        window.QuizRegistry.register(
            chapter.id,
            quizFile
        );

        /* Also register aliases */
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

console.log(
    "✅ Quiz Registry loaded:",
    Object.keys(window.QuizRegistry.entries).length,
    "chapters"
);
