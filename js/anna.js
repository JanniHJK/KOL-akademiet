// ===================================
// KOL Akademiet 3.0
// Anna NPC System
// ===================================

const annaDialogues = {

    welcome: {

        title: "Anna",

        text: `
        Velkommen til KOL Akademiet.

        Jeg er Anna, din vejleder.

        Rundt omkring i KOL-riget
        har borgere brug for hjælp.

        Som Lungedetektiv skal du lære
        at observere symptomer,
        opdage faresignaler og hjælpe
        borgere med KOL til en tryggere
        hverdag.

        Din rejse begynder nu.
        `
    },

    lungelaboratoriet: {

        title: "Anna",

        text: `
        Godt arbejde med at komme hertil.

        Lungelaboratoriet er stedet,
        hvor alle Lungedetektiver starter.

        Her skal du lære at se de små
        forandringer, som kan være tegn
        på begyndende forværring.

        Husk:
        Ingen observation er for lille.
        `
    },

    firstMission: {

        title: "Anna",

        text: `
        Din første borger har brug for hjælp.

        Læs historien grundigt.

        Tænk som en fagperson.

        Hvilke observationer er vigtigst?
        `
    },

    missionComplete: {

        title: "Anna",

        text: `
        Flot arbejde.

        Du fandt de rigtige spor
        og hjalp borgeren.

        Sådan arbejder en ægte
        Lungedetektiv.
        `
    },

    moduleComplete: {

        title: "Anna",

        text: `
        Fantastisk.

        Du har gennemført
        Lungelaboratoriet.

        Nye områder vil snart blive
        tilgængelige i KOL-riget.

        Eventyret fortsætter.
        `
    }

};

// ===================================
// VIS DIALOG
// ===================================

function showAnnaDialogue(dialogId) {

    const dialogue =
        annaDialogues[dialogId];

    if (!dialogue) {
        return;
    }

    removeAnnaDialogue();

    const overlay =
        document.createElement("div");

    overlay.id =
        "anna-overlay";

    overlay.style.position =
        "fixed";

    overlay.style.inset =
        "0";

    overlay.style.background =
        "rgba(0,0,0,0.60)";

    overlay.style.display =
        "flex";

    overlay.style.alignItems =
        "center";

    overlay.style.justifyContent =
        "center";

    overlay.style.zIndex =
        "9999";

    overlay.innerHTML = `

        <div
            style="
                width:90%;
                max-width:650px;
                background:white;
                color:#123b69;
                padding:30px;
                border-radius:24px;
                text-align:center;
                box-shadow:
                0 20px 40px rgba(0,0,0,0.3);
            ">

            <div
                style="
                    width:120px;
                    height:120px;
                    margin:auto;
                    margin-bottom:20px;
                    border-radius:50%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:#f4b942;
                    font-size:4rem;
                ">

                👩‍⚕️

            </div>

            <h2>
                ${dialogue.title}
            </h2>

            <p
                style="
                    line-height:1.8;
                    margin-top:15px;
                    white-space:pre-line;
                ">

                ${dialogue.text}

            </p>

            <br>

            <button
                onclick="
                    closeAnnaDialogue()
                ">

                Fortsæt

            </button>

        </div>

    `;

    document.body.appendChild(
        overlay
    );
}

// ===================================
// LUK
// ===================================

function closeAnnaDialogue() {

    removeAnnaDialogue();
}

// ===================================
// FJERN
// ===================================

function removeAnnaDialogue() {

    const existing =
        document.getElementById(
            "anna-overlay"
        );

    if (existing) {
        existing.remove();
    }
}

// ===================================
// HURTIGE KALD
// ===================================

function annaWelcome() {

    showAnnaDialogue(
        "welcome"
    );
}

function annaLungelab() {

    showAnnaDialogue(
        "lungelaboratoriet"
    );
}

function annaMissionComplete() {

    showAnnaDialogue(
        "missionComplete"
    );
}

function annaModuleComplete() {

    showAnnaDialogue(
        "moduleComplete"
    );
}

// ===================================
// AUTOSTART
// ===================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setTimeout(
            () => {

                annaWelcome();

            },
            1500
        );

    }
);
