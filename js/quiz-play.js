document.addEventListener("DOMContentLoaded", async function () {

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const questionNumber = document.getElementById("questionNumber");
const timerBox = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");

const rawChapterKey =
    localStorage.getItem("cq-current-chapter") ||
    "patterns-in-mathematics";

const chapterKey = rawChapterKey;

const rawLevel =
    localStorage.getItem("cq-selected-level") ||
    "easy";

const levelMap = {
    "easy": "easy",
    "medium": "medium",
    "hard": "hard",
    "too-hard": "tooHard",
    "tooHard": "tooHard",
    "extreme-hard": "extreme",
    "extreme": "extreme"
};

const level = levelMap[rawLevel] || "easy";

/* Level progression */
const LEVEL_CONFIG = {
    easy: {
        time: 300,
        pass: 70,
        next: "medium"
    },
    medium: {
        time: 480,
        pass: 75,
        next: "hard"
    },
    hard: {
        time: 720,
        pass: 80,
        next: "tooHard"
    },
    tooHard: {
        time: 1080,
        pass: 85,
        next: "extreme"
    },
    extreme: {
        time: 1500,
        pass: 90,
        next: null
    }
};

const levelInfo = LEVEL_CONFIG[level] || LEVEL_CONFIG.easy;

let questions = [];

function normalizeChapterKey(key) {
    return String(key || "")
        .toLowerCase()
        .trim()
        .replace(/_/g, "-")
        /* Accept BOTH deployed chapter formats:
           class6-mathematics-lines-and-angles
           6-mathematics-lines-and-angles */
        .replace(/^class\d+-mathematics-/, "")
        .replace(/^class\d+-math-/, "")
        .replace(/^class\d+-/, "")
        .replace(/^\d+-mathematics-/, "")
        .replace(/^\d+-math-/, "")
        .replace(/^\d+-/, "");
}

/* =====================================================
   LOAD QUESTIONS FROM QUIZ REGISTRY
   ===================================================== */

if (
    !window.QuizRegistry ||
    typeof window.QuizRegistry.load !== "function"
) {

    questionBox.textContent =
        "⚠️ Quiz Registry could not be loaded.";

    optionsBox.innerHTML = `
        <p style="color:white;font-size:18px;line-height:1.5;">
            Chapter: ${chapterKey}<br>
            Level: ${level}<br><br>
            Quiz Registry is not available.
        </p>`;

    nextBtn.disabled = true;
    return;
}


try {

    const chapter =
        await window.QuizRegistry.load(
            chapterKey
        );


    /* Load selected difficulty */

    questions =
        Array.isArray(chapter[level])
            ? chapter[level]
            : [];


} catch (error) {

    console.error(
        "❌ Quiz Registry Error:",
        error
    );

    questionBox.textContent =
        "⚠️ Questions could not be loaded.";

    optionsBox.innerHTML = `
        <p style="color:white;font-size:18px;line-height:1.5;">
            Chapter: ${chapterKey}<br>
            Level: ${level}<br><br>
            Separate quiz file could not be loaded.
        </p>`;

    nextBtn.disabled = true;
    return;
}


if (questions.length === 0) {

    questionBox.textContent =
        "⚠️ Questions could not be loaded.";

    optionsBox.innerHTML = `
        <p style="color:white;font-size:18px;line-height:1.5;">
            Chapter: ${chapterKey}<br>
            Level: ${level}<br><br>
            The quiz file was loaded, but this level has no questions.
        </p>`;

    nextBtn.disabled = true;
    return;
}

let currentQuestion = 0;
let score = 0;
let answered = false;
let quizFinished = false;
let timer = null;
let timeLeft = levelInfo.time;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0");
}

function updateTimer() {
    timerBox.textContent = formatTime(timeLeft);

    if (timeLeft <= 60) {
        timerBox.style.background = "#ef4444";
        timerBox.style.color = "#ffffff";
    } else if (timeLeft <= 180) {
        timerBox.style.background = "#f59e0b";
        timerBox.style.color = "#ffffff";
    } else {
        timerBox.style.background = "#22c55e";
        timerBox.style.color = "#ffffff";
    }
}

function stopTimer() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function startTimer() {
    stopTimer();
    updateTimer();

    timer = setInterval(function () {

        if (quizFinished) {
            stopTimer();
            return;
        }

        timeLeft--;

        if (timeLeft <= 0) {
            timeLeft = 0;
            updateTimer();
            finishQuiz(true);
            return;
        }

        updateTimer();

    }, 1000);
}

function showQuestion() {

    const q = questions[currentQuestion];

    if (!q || quizFinished) return;

    answered = false;

    questionBox.textContent = q.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;

    optionsBox.innerHTML = "";

    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "Finish ✓"
            : "Next →";

    nextBtn.disabled = false;
    nextBtn.style.pointerEvents = "auto";
    nextBtn.style.cursor = "pointer";
    nextBtn.style.opacity = "1";

    q.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.style.display = "block";
        button.style.width = "100%";
        button.style.margin = "10px 0";
        button.style.padding = "15px";
        button.style.border = "none";
        button.style.borderRadius = "12px";
        button.style.cursor = "pointer";

        button.onclick = function () {

            if (answered || quizFinished) return;

            answered = true;

            const all =
                optionsBox.querySelectorAll("button");

            all.forEach(function (b) {
                b.disabled = true;
                b.style.cursor = "default";
            });

            if (index === q.answer) {

                score++;

                button.style.background = "#22c55e";
                button.style.color = "white";

            } else {

                button.style.background = "#ef4444";
                button.style.color = "white";

                if (all[q.answer]) {
                    all[q.answer].style.background = "#22c55e";
                    all[q.answer].style.color = "white";
                }
            }
        };

        optionsBox.appendChild(button);
    });
}

/* Unlock the next level only when the current level is passed. */
function unlockNextLevel(percentage) {

    const passed = percentage >= levelInfo.pass;

    if (passed && levelInfo.next) {
        const progressChapter = normalizeChapterKey(chapterKey);

        localStorage.setItem(
            "cq-unlocked-" + progressChapter + "-" + levelInfo.next,
            "true"
        );

        localStorage.setItem(
            "cq-level-unlocked-" + progressChapter + "-" + levelInfo.next,
            "true"
        );
    }

    return passed;
}


/* =========================================
   DASHBOARD PROGRESS
   ========================================= */

function updateDashboardProgress(percentage, passed) {

    /* Total quiz score: accumulate raw points from each completed quiz. */
    const oldScore =
        Number(localStorage.getItem("cq-total-quiz-score") || 0);

    localStorage.setItem(
        "cq-total-quiz-score",
        String(oldScore + score)
    );

    /* Keep XP compatible with the existing dashboard. */
    const oldXP =
        Number(localStorage.getItem("cq-xp") || 0);

    const earnedXP =
        Math.max(0, Math.round(score * 10));

    localStorage.setItem(
        "cq-xp",
        String(oldXP + earnedXP)
    );

    /* Study streak: one increment per calendar day. */
    const today =
        new Date().toISOString().slice(0, 10);

    const lastStudyDate =
        localStorage.getItem("cq-last-study-date");

    let streak =
        Number(localStorage.getItem("cq-study-streak") || 0);

    if (lastStudyDate !== today) {

        if (lastStudyDate) {

            const last =
                new Date(lastStudyDate + "T00:00:00");

            const current =
                new Date(today + "T00:00:00");

            const days =
                Math.round(
                    (current - last) / 86400000
                );

            if (days === 1) {
                streak++;
            } else {
                streak = 1;
            }

        } else {
            streak = 1;
        }

        localStorage.setItem(
            "cq-study-streak",
            String(streak)
        );

        localStorage.setItem(
            "cq-last-study-date",
            today
        );
    }

    /*
       A chapter is considered completed when the student
       passes the highest (Extreme) level for that chapter.
    */
    if (
        level === "extreme" &&
        passed
    ) {

        const completedKey =
            "cq-completed-chapter-" + chapterKey;

        if (
            localStorage.getItem(completedKey) !== "true"
        ) {

            localStorage.setItem(
                completedKey,
                "true"
            );

            const completed =
                Number(
                    localStorage.getItem(
                        "cq-chapters-completed"
                    ) || 0
                );

            localStorage.setItem(
                "cq-chapters-completed",
                String(completed + 1)
            );
        }
    }
}


function finishQuiz(timeOver) {

    if (quizFinished) return;

    quizFinished = true;
    stopTimer();

    const percentage =
        Math.round((score / questions.length) * 100);

    const passed =
        unlockNextLevel(percentage);

    updateDashboardProgress(
        percentage,
        passed
    );

    /* Certificate becomes available only after a passed quiz. */
    if (passed) {
        localStorage.setItem("cq-certificate-unlocked", "true");

        if (!localStorage.getItem("cq-student-name")) {
            setTimeout(() => {
                const name = prompt(
                    "🎓 Certificate unlocked!\\n\\nEnter your name for your Concept Quizzer certificate:"
                );

                if (name && name.trim()) {
                    localStorage.setItem("cq-student-name", name.trim());
                }
            }, 300);
        }
    }

    /* Premium achievement/history layer */
    const quizCount = Number(localStorage.getItem("cq-quiz-count") || 0) + 1;
    localStorage.setItem("cq-quiz-count", String(quizCount));

    const earnedXP = Math.max(0, Math.round(score * 10));
    localStorage.setItem("cq-last-quiz-score", String(score));
    localStorage.setItem("cq-last-quiz-total", String(questions.length));
    localStorage.setItem("cq-last-quiz-percentage", String(percentage));
    localStorage.setItem("cq-last-quiz-level", level);
    localStorage.setItem("cq-last-quiz-chapter", chapterKey);
    localStorage.setItem("cq-last-quiz-xp", String(earnedXP));
    localStorage.setItem("cq-last-quiz-date", new Date().toLocaleDateString());

    if (percentage === 100) localStorage.setItem("cq-ach-perfect", "true");
    if (level === "extreme" && passed) localStorage.setItem("cq-ach-extreme", "true");
    if (quizCount >= 5) localStorage.setItem("cq-ach-explorer", "true");
    if (Number(localStorage.getItem("cq-xp") || 0) >= 100) localStorage.setItem("cq-ach-xp100", "true");
    if (Number(localStorage.getItem("cq-xp") || 0) >= 500) localStorage.setItem("cq-ach-xp500", "true");

    if (!localStorage.getItem("cq-student-name")) {
        setTimeout(() => {
            const name = prompt("🎓 Certificate setup\nEnter your name for your Concept Quizzer certificate:");
            if (name && name.trim()) localStorage.setItem("cq-student-name", name.trim());
        }, 350);
    }

    questionNumber.textContent =
        `Question ${questions.length} / ${questions.length}`;

    questionBox.textContent =
        timeOver
            ? "⏰ Time Over!"
            : "🎉 Quiz Complete!";

    optionsBox.innerHTML = `
        <div style="
            text-align:center;
            color:white;
            padding:20px;
        ">

            <div style="
                font-size:24px;
                font-weight:bold;
                margin-bottom:15px;
            ">
                ${passed ? "🏆 Level Passed!" : "📚 Keep Practising!"}
            </div>

            <div style="
                font-size:26px;
                font-weight:bold;
                margin-bottom:10px;
            ">
                Score: ${score}/${questions.length}
            </div>

            <div style="font-size:20px;margin-bottom:10px;">
                Percentage: ${percentage}%
            </div>

            <div style="font-size:17px;">
                ${passed
                    ? (
                        levelInfo.next
                            ? `🔓 ${levelInfo.next === "tooHard"
                                ? "Too Hard"
                                : levelInfo.next.charAt(0).toUpperCase() + levelInfo.next.slice(1)
                              } level unlocked!`
                            : "⭐ You completed the highest level!"
                      )
                    : `You need ${levelInfo.pass}% to unlock the next level.`
                }
            </div>

            ${passed ? `
              <button
                id="certificateBtn"
                type="button"
                style="
                  margin-top:18px;
                  padding:14px 20px;
                  border:0;
                  border-radius:14px;
                  background:linear-gradient(135deg,#f59e0b,#f97316);
                  color:white;
                  font-size:16px;
                  font-weight:800;
                  cursor:pointer;
                  box-shadow:0 10px 25px rgba(245,158,11,.28);
                "
              >🏆 Get My Certificate</button>
            ` : ""}

        </div>
    `;

    const certificateBtn = document.getElementById("certificateBtn");

    if (certificateBtn) {
        certificateBtn.onclick = function () {
            window.location.href = "certificate.html";
        };
    }

    nextBtn.textContent = "Finish ✓";
    nextBtn.disabled = false;
    nextBtn.style.pointerEvents = "auto";
    nextBtn.style.cursor = "pointer";
    nextBtn.style.opacity = "1";

    nextBtn.onclick = function () {
        window.location.href = "quiz.html";
    };
}

nextBtn.onclick = function () {

    if (quizFinished) {
        window.location.href = "quiz.html";
        return;
    }

    if (currentQuestion === questions.length - 1) {
        finishQuiz(false);
        return;
    }

    currentQuestion++;
    showQuestion();
};

updateTimer();
showQuestion();
startTimer();

});
