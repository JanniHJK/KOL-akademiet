// ===================================
// KOL Akademiet v2.0
// Eventyrkort og progression
// ===================================



const academyMap = {


    lungelaboratoriet:{


        id:
        "lungelaboratoriet",


        title:
        "Lungelaboratoriet",


        description:
        "Lær om KOL, lunger og observation af borgeren.",


        unlocked:true,


        progress:0


    },



    telemedicin:{


        id:
        "telemedicin",


        title:
        "Telemedicinsk kontrolrum",


        description:
        "Arbejd med målinger, observationer og tidlig opsporing.",


        unlocked:false,


        progress:0


    },



    ernæring:{


        id:
        "ernæring",


        title:
        "Ernæringscaféen",


        description:
        "Lær om energi, appetit og ernæring ved KOL.",


        unlocked:false,


        progress:0


    },



    medicin:{


        id:
        "medicin",


        title:
        "Medicincenteret",


        description:
        "Inhalation, medicin og korrekt behandling.",


        unlocked:false,


        progress:0


    },



    akut:{


        id:
        "akut",


        title:
        "Akutforværringsafdelingen",


        description:
        "Genkend tegn på forværring hos borgeren.",


        unlocked:false,


        progress:0


    }

};








// ===================================
// HENT KORT
// ===================================


function getAcademyMap(){


    return academyMap;


}








// ===================================
// TJEK OMRÅDE
// ===================================


function isAreaUnlocked(area){



    if(
        academyMap[area]
    ){


        return academyMap[area].unlocked;


    }



    return false;


}








// ===================================
// LÅS OMRÅDE OP
// ===================================


function unlockArea(area){



    if(
        academyMap[area]
    ){


        academyMap[area].unlocked = true;


        saveMapProgress();


    }


}








// ===================================
// OPDATER FREMGANG
// ===================================


function updateAreaProgress(
    area,
    value
){



    if(
        academyMap[area]
    ){


        academyMap[area].progress =
        value;



        saveMapProgress();


    }


}








// ===================================
// GEM KORTDATA
// ===================================


function saveMapProgress(){



    localStorage.setItem(

        "kol_academy_map",

        JSON.stringify(
            academyMap
        )

    );


}








// ===================================
// HENT GEMT KORT
// ===================================


function loadMapProgress(){



    const saved =

    localStorage.getItem(
        "kol_academy_map"
    );



    if(saved){


        const loaded =
        JSON.parse(saved);



        Object.keys(loaded)
        .forEach(area=>{


            if(
                academyMap[area]
            ){


                academyMap[area] =
                loaded[area];


            }


        });



    }



}








// ===================================
// LÅS NÆSTE OMRÅDE OP
// ===================================


function unlockNextArea(currentArea){



    const order = [


        "lungelaboratoriet",

        "telemedicin",

        "ernæring",

        "medicin",

        "akut"


    ];



    const index =
    order.indexOf(
        currentArea
    );



    const next =
    order[index + 1];



    if(next){


        unlockArea(next);


    }


}





document.addEventListener(

"DOMContentLoaded",

()=>{


    loadMapProgress();


}

);
