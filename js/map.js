// ===================================
// KOL Akademiet 3.0
// World Map System
// Adventure Edition
// ===================================

const academyMap = {

    lungelaboratoriet: {

        id: "lungelaboratoriet",

        title: "Lungelaboratoriet",

        description:
            "Observation, symptomer og tidlig opsporing.",

        unlocked: true,

        completed: false,

        progress: 0
    },

    telemedicin: {

        id: "telemedicin",

        title: "Telemedicinsk Tårn",

        description:
            "Målinger, overvågning og faresignaler.",

        unlocked: false,

        completed: false,

        progress: 0
    },

    ernæring: {

        id: "ernæring",

        title: "Ernæringscaféen",

        description:
            "Energi, vægt og ernæring ved KOL.",

        unlocked: false,

        completed: false,

        progress: 0
    },

    medicin: {

        id: "medicin",

        title: "Medicincenteret",

        description:
            "Inhalation og medicinhåndtering.",

        unlocked: false,

        completed: false,

        progress: 0
    },

    akut: {

        id: "akut",

        title: "Akutbjergene",

        description:
            "Forværringer og akutte situationer.",

        unlocked: false,

        completed: false,

        progress: 0
    }

};

// ===================================
// HENT KORT
// ===================================

function getAcademyMap() {

    return academyMap;
}

// ===================================
// ER ÅBENT?
// ===================================

function isAreaUnlocked(areaId) {

    if (!academyMap[areaId]) {
        return false;
    }

    return academyMap[areaId].unlocked;
}

// ===================================
// LÅS OMRÅDE OP
// ===================================

function unlockArea(areaId) {

    if (!academyMap[areaId]) {
        return;
    }

    academyMap[areaId].unlocked = true;

    saveMapProgress();
}

// ===================================
// MARKER FÆRDIG
// ===================================

function completeArea(areaId) {

    if (!academyMap[areaId]) {
        return;
    }

    academyMap[areaId].completed = true;

    academyMap[areaId].progress = 100;

    saveMapProgress();
}

// ===================================
// OPDATER PROGRESS
// ===================================

function updateAreaProgress(
    areaId,
    progress
) {

    if (!academyMap[areaId]) {
        return;
    }

    academyMap[areaId].progress =
        progress;

    saveMapProgress();
}

// ===================================
// GEM KORT
// ===================================

function saveMapProgress() {

    localStorage.setItem(
        "kol_map",
        JSON.stringify(
            academyMap
        )
    );
}

// ===================================
// HENT KORT
// ===================================

function loadMapProgress() {

    const savedData =
        localStorage.getItem(
            "kol_map"
        );

    if (!savedData) {
        return;
    }

    try {

        const loaded =
            JSON.parse(
                savedData
            );

        Object.keys(
            loaded
        ).forEach(areaId => {

            if (
                academyMap[areaId]
            ) {

                academyMap[
                    areaId
                ] = loaded[
                    areaId
                ];

            }

        });

    } catch (error) {

        console.error(
            "Kortdata kunne ikke indlæses",
            error
        );
    }
}

// ===================================
// NÆSTE OMRÅDE
// ===================================

function unlockNextArea(
    currentArea
) {

    const order = [

        "lungelaboratoriet",
        "telemedicin",
        "ernæring",
        "medicin",
        "akut"

    ];

    const currentIndex =
        order.indexOf(
            currentArea
        );

    if (
        currentIndex === -1
    ) {
        return;
    }

    const nextArea =
        order[
            currentIndex + 1
        ];

    if (
        !nextArea
    ) {
        return;
    }

    unlockArea(
        nextArea
    );
}

// ===================================
// STATUS
// ===================================

function getMapCompletion() {

    const areas =
        Object.values(
            academyMap
        );

    const completed =
        areas.filter(
            area =>
                area.completed
        ).length;

    return Math.round(
        (
            completed /
            areas.length
        ) * 100
    );
}

// ===================================
// RESET KORT
// ===================================

function resetMapProgress() {

    localStorage.removeItem(
        "kol_map"
    );

    location.reload();
}

// ===================================
// START
// ===================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadMapProgress();

    }
);
