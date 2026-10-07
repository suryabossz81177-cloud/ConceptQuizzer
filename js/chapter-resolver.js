/* =========================================================
   CONCEPT QUIZZER — CENTRAL CHAPTER RESOLVER
   Resolves different chapter ID formats to the
   correct Chapter Registry entry.
   ========================================================= */

window.ConceptQuizzer = window.ConceptQuizzer || {};

window.ConceptQuizzer.resolveChapter = function (chapterId) {

    if (!chapterId) {
        return null;
    }

    const registry =
        typeof window.ConceptQuizzer.getRegistry === "function"
            ? window.ConceptQuizzer.getRegistry()
            : [];

    if (!Array.isArray(registry)) {
        return null;
    }

    const wanted = String(chapterId)
        .trim()
        .toLowerCase();

    /* 1. Exact ID */
    let found = registry.find(function (chapter) {
        return chapter &&
               chapter.id &&
               String(chapter.id).toLowerCase() === wanted;
    });

    if (found) {
        return found;
    }

    /* 2. Alias */
    found = registry.find(function (chapter) {

        if (!chapter || !Array.isArray(chapter.aliases)) {
            return false;
        }

        return chapter.aliases.some(function (alias) {
            return String(alias).toLowerCase() === wanted;
        });

    });

    if (found) {
        return found;
    }

    /* 3. Normalized comparison */
    function normalize(value) {

        return String(value || "")
            .toLowerCase()
            .replace(/^class\d+-/, "")
            .replace(/^\d+-/, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

    }

    const normalizedWanted = normalize(wanted);

    found = registry.find(function (chapter) {

        if (!chapter) {
            return false;
        }

        const idMatch =
            normalize(chapter.id) === normalizedWanted;

        if (idMatch) {
            return true;
        }

        if (Array.isArray(chapter.aliases)) {

            return chapter.aliases.some(function (alias) {
                return normalize(alias) === normalizedWanted;
            });

        }

        return false;

    });

    return found || null;
};

console.log("✅ Central Chapter Resolver loaded");
