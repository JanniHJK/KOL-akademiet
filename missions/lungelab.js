const lungLabMission = {

title: "Lungelaboratoriet",

intro:
"Din første mission handler om at hjælpe Erik, som lever med KOL.",


steps:[


{
title:"Morgen hos Erik",

story:
`
Erik er 72 år og har svær KOL.
Da du kommer om morgenen, sidder han på sengekanten.

Han siger:
"Jeg ved ikke hvorfor, men jeg føler mig mere forpustet end normalt i dag."
`,

question:
"Hvad gør du først?",

answers:[

{
text:
"Jeg skynder mig at hente hans inhalationsmedicin.",
correct:false,
feedback:
"Medicin kan blive relevant, men først skal du danne dig et overblik over situationen."
},

{
text:
"Jeg hjælper Erik til en god siddestilling, skaber ro og observerer hans vejrtrækning.",
correct:true,
feedback:
"Godt valg. Ved åndenød er ro, observation og støtte vigtigt før næste handling."
},

{
text:
"Jeg siger, at det nok bare skyldes hans KOL og fortsætter plejen.",
correct:false,
feedback:
"Ændringer i symptomer skal tages alvorligt, fordi de kan være tegn på forværring."
}

]

},



{
title:"Observation",

story:
`
Du opdager, at Erik hoster mere end normalt.
Han fortæller også, at slimen virker anderledes.
`,

question:
"Hvilke oplysninger er vigtigst at få?",

answers:[

{
text:
"Hvor mange fjernsynsprogrammer han har set i dag.",
correct:false,
feedback:
"Det fortæller ikke noget om hans aktuelle KOL."
},

{
text:
"Om slimen har ændret mængde eller farve, og om hans åndenød er værre.",
correct:true,
feedback:
"Rigtigt. Ændringer i slim og åndenød kan være tegn på forværring."
},

{
text:
"Om han har lyst til at spise kage.",
correct:false,
feedback:
"Ernæring er vigtigt ved KOL, men dette er ikke den første observation her."
}

]

},



{
title:"Kommunikation",

story:
`
Erik bliver bekymret og siger:
"Jeg er bange, når jeg ikke kan få vejret."
`,

question:
"Hvordan hjælper du Erik bedst?",

answers:[

{
text:
"Forklarer roligt hvad du observerer og hjælper ham med at bevare roen.",
correct:true,
feedback:
"Godt. Angst og åndenød kan forstærke hinanden."
},

{
text:
"Siger at han ikke skal være nervøs.",
correct:false,
feedback:
"Det kan opleves som om hans bekymring bliver afvist."
},

{
text:
"Forlader ham, så han kan slappe af alene.",
correct:false,
feedback:
"En borger med akut øget åndenød bør ikke efterlades alene uden vurdering."
}

]

}


]

};
