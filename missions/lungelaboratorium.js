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
    Du er netop blevet optaget som
    Lungedetektiv på KOL Akademiet.

    Din første opgave kommer fra Anna.

    Borgeren Jens på 74 år har de
    seneste dage oplevet mere åndenød.

    Han fortæller:

    "Jeg kan stadig klare mig selv,
    men jeg må holde flere pauser
    end normalt."

    Anna ser alvorligt på dig.

    "Noget har ændret sig hos Jens.

    Kan du finde de første spor?"
    `,

    questions: [

        {
            text:
            "Hvad er den vigtigste første observation?",

            answers: [

                {
                    text:
                    "Undersøge ændringer i åndenød og aktivitetsniveau",

                    correct: true,

                    feedback:
                    "Korrekt. Små ændringer i åndenød og funktionsevne kan være tidlige tegn på forværring."
                },

                {
                    text:
                    "Forklare Jens at det er normalt at blive ældre",

                    correct: false,

                    feedback:
                    "Ikke korrekt. Nye ændringer hos borgere med KOL skal undersøges nærmere."
                },

                {
                    text:
                    "Anbefale at Jens holder sig mere i ro",

                    correct: false,

                    feedback:
                    "Ikke korrekt. Aktivitet er vigtig, og årsagen til ændringen skal undersøges."
                }

            ]
        },

        {
            text:
            "Jens fortæller også, at han bliver mere forpustet ved bad og påklædning. Hvad undersøger du?",

            answers: [

                {
                    text:
                    "Hvornår åndenøden opstår, og om den er anderledes end tidligere",

                    correct: true,

                    feedback:
                    "Rigtigt. Det er vigtigt at kende ændringen fra Jens' normale tilstand."
                },

                {
                    text:
                    "Om han kan springe badet over",

                    correct: false,

                    feedback:
                    "Forkert. Fokus er observation og vurdering."
                },

                {
                    text:
                    "Om han blot skal vænne sig til situationen",

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

    Borgeren Anna på 81 år oplever
    mere hoste end normalt.

    Hun fortæller:

    "Der kommer mere slim op,
    og jeg føler mig mere træt."

    Du tager din detektivnotesbog frem
    og begynder undersøgelsen.
    `,

    questions: [

        {
            text:
            "Hvad er vigtigst at observere ved slimen?",

            answers: [

                {
                    text:
                    "Mængde, farve og ændringer fra det normale",

                    correct: true,

                    feedback:
                    "Korrekt. Ændringer i slim kan være et vigtigt tegn på forværring."
                },

                {
                    text:
                    "Om slimen generer borgeren",

                    correct: false,

                    feedback:
                    "Borgerens oplevelse er vigtig, men du skal også observere kliniske ændringer."
                },

                {
                    text:
                    "Om hosten kun kommer om morgenen",

                    correct: false,

                    feedback:
                    "Det kan være relevant, men er ikke den vigtigste observation her."
                }

            ]
        },

        {
            text:
            "Anna virker mere træt end normalt. Hvad tænker du?",

            answers: [

                {
                    text:
                    "At ændringer i energiniveau kan være relevante oplysninger",

                    correct: true,

                    feedback:
                    "Rigtigt. Træthed kan være en vigtig del af det samlede billede."
                },

                {
                    text:
                    "At det sikkert bare skyldes alder",

                    correct: false,

                    feedback:
                    "Forkert. Man bør ikke bortforklare ændringer."
                },

                {
                    text:
                    "At det ikke er vigtigt ved KOL",

                    correct: false,

                    feedback:
                    "Forkert. Funktionsevne og energi er vigtige observationer."
                }

            ]
        }

    ]
},

{
    id: "lung-003",

    title: "Når Angsten Vokser",

    story: `
    Senere samme dag bliver du kaldt
    ud til Erik.

    Erik sidder foroverbøjet på sin stol.

    Han virker urolig.

    "Jeg bliver bange, når jeg ikke kan få vejret."

    Anna ser på dig.

    "Nu handler det om mere
    end observation.

    Hvordan møder du Erik?"
    `,

    questions: [

        {
            text:
            "Hvad er den bedste handling?",

            answers: [

                {
                    text:
                    "Skabe ro, støtte Erik og observere hans vejrtrækning",

                    correct: true,

                    feedback:
                    "Rigtigt. Angst og åndenød kan forstærke hinanden."
                },

                {
                    text:
                    "Sige at han ikke skal være nervøs",

                    correct: false,

                    feedback:
                    "Forkert. Det kan opleves som en afvisning af hans oplevelse."
                },

                {
                    text:
                    "Forlade rummet for at give ham fred",

                    correct: false,

                    feedback:
                    "Forkert. Erik har brug for støtte og observation."
                }

            ]
        },

        {
            text:
            "Hvorfor er ro vigtig ved åndenød?",

            answers: [

                {
                    text:
                    "Fordi uro og angst kan øge oplevelsen af åndenød",

                    correct: true,

                    feedback:
                    "Korrekt. Tryghed kan hjælpe borgeren til bedre kontrol over situationen."
                },

                {
                    text:
                    "Fordi det fjerner KOL-sygdommen",

                    correct: false,

                    feedback:
                    "Forkert. Ro behandler ikke sygdommen, men kan hjælpe situationen."
                },

                {
                    text:
                    "Fordi alle bliver raske af at slappe af",

                    correct: false,

                    feedback:
                    "Forkert. KOL kræver faglig vurdering og støtte."
                }

            ]
        }

    ]
}

];

// ===================================
// HENT MISSIONER
// ===================================

function getLungelaboratoriumMissions(){
    return lungelaboratoriumMissions;
}
