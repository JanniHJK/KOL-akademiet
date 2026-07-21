// ===================================
// KOL Akademiet v2.0
// Lungelaboratoriet missioner
// ===================================


const lungMissions = [


    {

        id: 1,


        title:
        "Lungernes hemmelighed",


        introduction:
        `
        Borger med KOL fortæller,
        at det er blevet sværere at gå
        fra stuen til køkkenet.

        Du skal vurdere, hvad du først
        vil være opmærksom på.
        `,


        question:
        "Hvilken observation er mest relevant?",


        answers:[


            {

                text:
                "Observere ændringer i åndenød og aktivitetsniveau",


                correct:true,


                feedback:
                `
                Rigtigt.

                Ved KOL er ændringer i
                åndenød, funktionsevne og
                aktivitetsniveau vigtige tegn
                på ændringer i borgerens tilstand.
                `

            },


            {

                text:
                "Fortælle borgeren at træne mere uden yderligere observation",


                correct:false,


                feedback:
                `
                Ikke helt.

                Træning kan være vigtigt,
                men først skal ændringer i
                borgerens situation vurderes.
                `

            },


            {

                text:
                "Ignorere det, hvis borgeren stadig kan klare daglige aktiviteter",


                correct:false,


                feedback:
                `
                Forkert.

                Små ændringer kan være tidlige
                tegn på forværring.
                `

            }


        ]

    }



];





function getLungMission(id){


    return lungMissions.find(

        mission =>
        mission.id === id

    );


}
