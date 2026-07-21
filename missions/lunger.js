// ===================================
// KOL Akademiet v2.0
// Lungelaboratoriet
// Missioner
// ===================================


const lungMissions = {


    firstMission:{


        title:
        "Lungernes hemmelighed",



        story:

        `
        Borger med KOL, Jens på 74 år,
        fortæller at han den sidste uge er
        blevet mere forpustet.

        Han siger:

        "Jeg bliver nødt til at holde flere
        pauser, når jeg går rundt i hjemmet."

        Du skal undersøge situationen
        og træffe de rigtige valg.
        `,



        questions:[


            {


                text:

                "Hvad er den vigtigste første observation?",



                answers:[


                    {

                    text:
                    "Om borgeren har ændringer i åndenød og aktivitetsniveau",

                    correct:true,


                    feedback:

                    `
                    Korrekt.

                    Ændringer i åndenød og
                    funktionsniveau kan være tidlige
                    tegn på ændring i borgerens KOL.
                    `

                    },


                    {

                    text:
                    "Om borgeren bare skal tage sig mere sammen",

                    correct:false,


                    feedback:

                    `
                    Forkert.

                    Åndenød ved KOL handler ikke om
                    motivation, men om sygdommens
                    påvirkning af kroppen.
                    `

                    },


                    {

                    text:
                    "Om borgeren stadig kan klare alt uden hjælp",

                    correct:false,


                    feedback:

                    `
                    Ikke helt.

                    Selv små ændringer kan være
                    vigtige observationer.
                    `

                    }


                ]

            },






            {


                text:

                "Borger fortæller også, at han hoster mere slim op end normalt. Hvad gør du?",



                answers:[


                    {


                    text:

                    "Observerer ændringer i mængde, farve og konsistens af slimen",

                    correct:true,


                    feedback:

                    `
                    Rigtigt.

                    Ændringer i slim kan være tegn
                    på forværring og skal observeres.
                    `

                    },



                    {

                    text:

                    "Fortæller borgeren at det er normalt ved alder",

                    correct:false,


                    feedback:

                    `
                    Forkert.

                    Nye ændringer hos en borger med
                    KOL skal vurderes.
                    `

                    },



                    {

                    text:

                    "Ignorerer det, hvis borgeren ikke har feber",

                    correct:false,


                    feedback:

                    `
                    Ikke korrekt.

                    Forværring kan vise sig på flere
                    måder end feber.
                    `

                    }


                ]


            },







            {


                text:

                "Borger bliver bekymret og siger: 'Jeg bliver bange når jeg ikke kan få vejret'. Hvad er en relevant handling?",



                answers:[



                    {


                    text:

                    "Skabe ro, støtte borgeren i vejrtrækningen og observere situationen",

                    correct:true,


                    feedback:

                    `
                    Rigtigt.

                    Angst og åndenød kan forstærke
                    hinanden. Tryghed og observation
                    er vigtigt.
                    `

                    },



                    {

                    text:

                    "Sige at borgeren ikke skal tænke på det",

                    correct:false,


                    feedback:

                    `
                    Forkert.

                    Borgerens oplevelse skal tages
                    alvorligt.
                    `

                    },



                    {

                    text:

                    "Gå fra borgeren så personen kan falde til ro",

                    correct:false,


                    feedback:

                    `
                    Forkert.

                    Ved åndenød og uro er nærvær
                    vigtigt.
                    `

                    }


                ]

            }



        ]


    }


};






function getLungMission(){


    return lungMissions.firstMission;


}
