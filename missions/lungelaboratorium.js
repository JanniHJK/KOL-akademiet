// ===================================
// KOL Akademiet 3.0
// Lungelaboratoriet
// Adventure Edition
// ===================================

const lungelaboratoriumMissions = [

    {
        id: "lung-001",

        title: "Den Mystiske Åndenød",

        story: `
        Anna tager imod dig i Lungelaboratoriet.

        Din første opgave handler om Jens på 74 år.

        Jens fortæller:

        "Jeg bliver mere forpustet end normalt
        og må holde flere pauser i løbet af dagen."

        Anna ser på dig.

        "Lungedetektiver begynder altid med
        observationer. Hvilke spor finder du?"
        `,

        questions: [

            {
                text:
                "Hvad er den vigtigste første observation?",

                answers: [

                    {
                        text:
                        "Observere ændringer i åndenød og aktivitetsniveau",

                        correct: true,

                        feedback:
                        "Korrekt. Ændringer i åndenød og funktionsniveau er vigtige tegn hos borgere med KOL."
                    },

                    {
                        text:
                        "Fortælle Jens at det er normalt at blive ældre",

                        correct: false,

                        feedback:
                        "Forkert. Nye ændringer bør undersøges nærmere."
                    },

                    {
                        text:
                        "Anbefale ekstra hvile uden yderligere vurdering",

                        correct: false,

                        feedback:
                        "Forkert. Først skal situationen vurderes."
                    }

                ]
            },

            {
                text:
                "Jens bliver mere forpustet ved bad og påklædning. Hvad undersøger du?",

                answers: [

                    {
                        text:
                        "Hvornår åndenøden opstår, og om den afviger fra det normale",

                        correct: true,

                        feedback:
                        "Rigtigt. Sammenligning med borgerens normale tilstand er vigtig."
                    },

                    {
                        text:
                        "Om Jens kan undgå personlig pleje",

                        correct: false,

                        feedback:
                        "Forkert. Målet er ikke at undgå aktiviteter."
                    },

                    {
                        text:
                        "Om Jens bare skal vænne sig til situationen",

                        correct: false,

                        feedback:
                        "Forkert. Ændringer skal tages alvorligt."
                    }

                ]
            }

        ]
    },

    {
        id: "lung-002",

        title: "Slimsporene",

        story: `
        Anna sender dig videre til næste sag.

        Borgeren Anna på 81 år hoster mere end normalt.

        Hun fortæller:

        "Der kommer mere slim op,
        og jeg føler mig træt."

        Nu gælder det om at finde de
        vigtigste observationer.
        `,

        questions: [

            {
                text:
                "Hvad er vigtigst at observere ved ændret slim?",

                answers: [

                    {
                        text:
                        "Mængde, farve og ændring fra det normale",

                        correct: true,

                        feedback:
                        "Korrekt. Ændringer i slim kan være et vigtigt faresignal."
                    },

                    {
                        text:
                        "Om slimen virker irriterende",

                        correct: false,

                        feedback:
                        "Borgerens oplevelse er vigtig, men observationerne er afgørende."
                    },

                    {
                        text:
                        "Om hosten kun forekommer om morgenen",

                        correct: false,

                        feedback:
                        "Det kan være relevant, men ikke det vigtigste her."
                    }

                ]
            },

            {
                text:
                "Anna virker mere træt end normalt. Hvad tænker du?",

                answers: [

                    {
                        text:
                        "Ændringer i energiniveau er relevante oplysninger",

                        correct: true,

                        feedback:
                        "Rigtigt. Træthed og lavere energiniveau kan være vigtige observationer."
                    },

                    {
                        text:
                        "Det skyldes sandsynligvis kun alder",

                        correct: false,

                        feedback:
                        "Forkert. Ændringer bør ikke bortforklares."
                    },

                    {
                        text:
                        "Det har ingen betydning ved KOL",

                        correct: false,

                        feedback:
                        "Forkert. Funktionsevne og energi er vigtige indikatorer."
                    }

                ]
            }

        ]
    },

    {
        id: "lung-003",

        title: "Når Angsten Kommer",

        story: `
        Du bliver kaldt ud til Erik.

        Da du ankommer, sidder han
        foroverbøjet og virker urolig.

        Han siger:

        "Jeg bliver bange,
        når jeg ikke kan få vejret."

        Anna hvisker:

        "Nu handler det om både
        observation og kommunikation."
        `,

        questions: [

            {
                text:
                "Hvordan hjælper du Erik bedst?",

                answers: [

                    {
                        text:
                        "Skaber ro og observerer hans vejrtrækning",

                        correct: true,

                        feedback:
                        "Korrekt. Angst og åndenød kan forstærke hinanden."
                    },

                    {
                        text:
                        "Siger at han ikke skal være nervøs",

                        correct: false,

                        feedback:
                        "Forkert. Hans oplevelse skal tages alvorligt."
                    },

                    {
                        text:
                        "Går ud af rummet for at give ro",

                        correct: false,

                        feedback:
                        "Forkert. Erik har behov for støtte."
                    }

                ]
            },

            {
                text:
                "Hvorfor er tryghed vigtig ved åndenød?",

                answers: [

                    {
                        text:
                        "Fordi angst kan øge oplevelsen af åndenød",

                        correct: true,

                        feedback:
                        "Rigtigt. Tryghed og støtte kan hjælpe borgeren."
                    },

                    {
                        text:
                        "Fordi tryghed fjerner KOL",

                        correct: false,

                        feedback:
                        "Forkert. Tryghed hjælper situationen, men helbreder ikke sygdommen."
                    },

                    {
                        text:
                        "Fordi alle bliver raske af afslapning",

                        correct: false,

                        feedback:
                        "Forkert. KOL kræver faglig observation og handling."
                    }

                ]
            }

        ]
    }

];

// ===================================
// EXPORT
// ===================================

function getLungelaboratoriumMissions() {
    return lungelaboratoriumMissions;
}
