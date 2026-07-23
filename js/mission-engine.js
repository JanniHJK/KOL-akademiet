// ===================================
// KOL Akademiet 3.0
// Mission Engine
// Adventure Edition
// ===================================

let activeMission = null;
let currentQuestionIndex = 0;

// ===================================
// START MISSION
// ===================================

function startMission(mission) {

    activeMission = mission;
    currentQuestionIndex = 0;

    showScreen(
        "mission-screen"
    );

    renderMission();
}

// ===================================
// VIS MISSION
// ===================================

function renderMission() {

    const title =
        document.getElementById(
            "mission-title"
        );

    const content =
        document.getElementById(
            "mission-content"
        );

    const question =
        activeMission.questions[
            currentQuestionIndex
        ];

    title.innerHTML =
        activeMission.title;

    content.innerHTML = `

        <div class="mission-story">

            <p>
                ${activeMission.story}
            </p>

        </div>

        <div class="question-box">

            <h3>
                ${question.text}
            </h3>

            <div class="answer-grid">

                ${question.answers
                    .map((answer, index) => `

                        <div
                            class="answer-card"
                            onclick="
                                checkMissionAnswer(${index})
                            ">

                            ${answer.text}

                        </div>

                    `)
                    .join("")}

            </div>

            <div id="mission-feedback"></div>

        </div>

    `;
}

// ===================================
// SVAR
// ===================================

function checkMissionAnswer(index) {

    const question =
        activeMission.questions[
            currentQuestionIndex
        ];

    const answer =
        question.answers[index];

    const feedback =
        document.getElementById(
            "mission-feedback"
        );

    if (answer.correct) {

        feedback.innerHTML = `

            <div class="correct-feedback">

                <h3>
                    ⭐ Rigtigt svar
                </h3>

                <p>
                    ${answer.feedback}
                </p>

                <br>

                <button
                    onclick="
                        continueMission()
                    ">
                    Fortsæt
                </button>

            </div>

        `;

    } else {

        feedback.innerHTML = `

            <div class="wrong-feedback">

                <h3>
                    Ikke korrekt
                </h3>

                <p>
                    ${answer.feedback}
                </p>

            </div>

        `;
    }
}

// ===================================
// NÆSTE SPØRGSMÅL
// ===================================

function continueMission() {

    currentQuestionIndex++;

    if (
        currentQuestionIndex <
        activeMission.questions.length
    ) {

        renderMission();
        return;
    }

    finishMission();
}

// ===================================
// MISSION AFSLUTTET
// ===================================

function finishMission() {

    addPoints(50);

    if (
        typeof completeMissionProgress ===
        "function"
    ) {

        completeMissionProgress(
            activeMission.id
        );
    }

    showMissionComplete();
}

// ===================================
// VIS RESULTAT
// ===================================

function showMissionComplete() {

    const content =
        document.getElementById(
            "mission-content"
        );

    content.innerHTML = `

        <div class="dialogue-box">

            <h1>
                ✅ Mission gennemført
            </h1>

            <p>
                Du har løst denne opgave
                og hjulpet en borger med KOL.
            </p>

            <br>

            <p>
                Belønning:
            </p>

            <p>
                ⭐ 50 point
            </p>

            <br>

            <button
                onclick="
                    completeModuleMission()
                ">
                Tilbage til Anna
            </button>

        </div>

    `;
}
