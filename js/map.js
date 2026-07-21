// ===================================
// KOL Akademiet v2.0
// Kort og områder
// ===================================



const academyAreas = {


    lungelaboratoriet:{


        title:
        "Lungelaboratoriet",


        unlocked:true,


        progress:0


    },



    telemedicin:{


        title:
        "Telemedicinsk kontrolrum",


        unlocked:false,


        progress:0


    },



    ernæring:{


        title:
        "Ernæringscaféen",


        unlocked:false,


        progress:0


    },



    medicin:{


        title:
        "Medicincenteret",


        unlocked:false,


        progress:0


    },



    akut:{


        title:
        "Akutforværringsafdelingen",


        unlocked:false,


        progress:0


    },



    highflow:{


        title:
        "High Flow-stationen",


        unlocked:false,


        progress:0


    },



    niv:{


        title:
        "NIV-centret",


        unlocked:false,


        progress:0


    },



    ilt:{


        title:
        "Iltklinikken",


        unlocked:false,


        progress:0


    }


};







// ===================================
// Tjek om område er åbent
// ===================================


function isAreaUnlocked(area){



    if(
        academyAreas[area]
    ){


        return academyAreas[area].unlocked;


    }



    return false;


}







// ===================================
// Lås område op
// ===================================


function unlockArea(area){



    if(
        academyAreas[area]
    ){


        academyAreas[area].unlocked = true;



        updateProfile();



    }



}








// ===================================
// Marker område gennemført
// ===================================


function completeArea(area){



    if(
        academyAreas[area]
    ){


        academyAreas[area].progress = 100;



        unlockNextArea(area);



    }



}








// ===================================
// Lås næste område op
// ===================================


function unlockNextArea(area){



    const sequence = [


        "lungelaboratoriet",

        "telemedicin",

        "ernæring",

        "medicin",

        "akut",

        "highflow",

        "niv",

        "ilt"


    ];





    const index =
    sequence.indexOf(area);




    const next =
    sequence[index + 1];



    if(next){


        unlockArea(next);


    }


}








// ===================================
// Hent kortdata
// ===================================


function getAcademyMap(){


    return academyAreas;


}
