// ===================================
// KOL Akademiet
// Anna NPC System
// ===================================

const annaDialogues = {

    welcome: {
        title: "Anna",
        text: `
        Velkommen til KOL Akademiet.

        Jeg er Anna, akademiets vejleder.

        Mange borgere har brug for hjælp,
        men kun de dygtigste Lungedetektiver
        kan opdage de tidlige tegn på
        forværring.

        Din rejse begynder nu.
        `
    },

    lungelaboratoriet: {
        title: "Anna",
        text: `
        Lungelaboratoriet er det første
        skridt på din rejse.

        Her lærer du at observere
        ændringer hos borgere med KOL.

        Husk:
        Små ændringer kan være vigtige.
        `
    },

    firstMissionComplete: {
        title: "Anna",
        text: `
        Fantastisk arbejde.

        Du begynder allerede at tænke
        som en rigtig Lungedetektiv.

        Fortsæt sådan.
        `
    },

    moduleComplete: {
        title: "Anna",
        text: `
        Imponerende.

        Du har gennemført dette område.

        Nye dele af KOL-riget
        står nu åbne for dig.
        `
    }

};

// ===================================
// VIS DIALOG
// ===================================

function showAnnaDialogue(dialogId){

    const dialogue =
    annaDialogues[dialogId];

    if(!dialogue){
        return;
    }

    const existing =
    document.getElementById(
        "anna-overlay"
    );

    if(existing){
        existing.remove();
    }

    const overlay =
    document.createElement("div");

    overlay.id =
    "anna-overlay";

    overlay.innerHTML = `

        <div class="anna-popup">

            <div class="anna-avatar">
                👩‍⚕️
            </div>

            <h2>
                ${dialogue.title}
            </h2>

            <p>
                ${dialogue.text}
            </p>

            <button
                onclick="
                document
                .getElementById(
                'anna-overlay'
                )
                .remove()
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
// AUTOMATISK VELKOMST
// ===================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setTimeout(() => {

            showAnnaDialogue(
                "welcome"
            );

        },1000);

    }
);
