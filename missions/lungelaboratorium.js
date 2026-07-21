// ===================================
// KOL Akademiet v2.0
// Lungelaboratoriet - Modulindhold
// ===================================


const lungelaboratoriumMissions = [

{

id:"lung-001",

title:"Den ændrede hverdag",


story:`

Borger med KOL, Jens på 74 år,
bor alene og modtager hjælp i hjemmet.

Borger oplyser, at han den seneste tid
er begyndt at holde flere pauser, når
han går rundt i boligen.

Jens siger:

"Jeg kan godt det hele endnu,
men det kræver meget mere af mig."

`,


questions:[


{

text:
"Hvad er den vigtigste observation i situationen?",


answers:[

{

text:
"Observere ændringer i åndenød, aktivitet og hvad borgeren kan klare i hverdagen",

correct:true,

feedback:
`
Rigtigt.

Ved KOL er ændringer i funktionsevne
og aktivitetsniveau vigtige tegn på,
at borgerens tilstand kan have ændret sig.
`

},


{

text:
"Forklare borgeren at det er normalt at blive mindre aktiv med alderen",

correct:false,

feedback:
`
Ikke korrekt.

Nye ændringer hos en borger med KOL
skal undersøges og ikke forklares væk.
`

},


{

text:
"Anbefale at borgeren hviler mere og undgår belastning",

correct:false,

feedback:
`
Forkert.

For meget inaktivitet kan påvirke
funktionsevnen negativt.
`

}

]

},


{

text:
"Borger fortæller, at han bliver mere forpustet ved bad og påklædning. Hvad er relevant at undersøge?",


answers:[

{

text:
"Hvornår åndenøden opstår, og om den er anderledes end tidligere",

correct:true,

feedback:
`
Korrekt.

Det er vigtigt at opdage ændringer
i borgerens vanlige tilstand.
`

},


{

text:
"Om borgeren kan undgå personlig pleje på dårlige dage",

correct:false,

feedback:
`
Forkert.

Målet er støtte til at mestre hverdagen,
ikke at fjerne nødvendige aktiviteter.
`

},


{

text:
"Om borgeren blot skal acceptere situationen",

correct:false,

feedback:
`
Ikke korrekt.

Borgerens oplevelse skal tages alvorligt.
`

}

]

}

]

},





{

id:"lung-002",

title:"Slim og hoste",


story:`

Borger med KOL, Anna på 81 år,
fortæller at hun hoster mere end normalt.

Borger oplyser:

"Der kommer mere slim op,
og jeg føler mig mere træt."

`,


questions:[


{

text:
"Hvad er en vigtig observation ved ændret slim?",


answers:[

{

text:
"Mængde, farve og ændring fra borgerens normale mønster",

correct:true,

feedback:
`
Rigtigt.

Ændringer i slim kan være relevante
tegn på forværring.
`

},


{

text:
"Om borgeren bare synes det er irriterende",

correct:false,

feedback:
`
Forkert.

Borgerens oplevelse er vigtig,
men ændringen skal også vurderes fagligt.
`

},


{

text:
"Om borgeren har lyst til at tale om det",

correct:false,

feedback:
`
Ikke korrekt.

Observationen skal tage udgangspunkt
i borgerens helbredstilstand.
`

}

]

}

]

}

];





function getLungelaboratoriumMissions(){

return lungelaboratoriumMissions;

}
