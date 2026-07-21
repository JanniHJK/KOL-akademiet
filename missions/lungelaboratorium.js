// ===================================
// KOL Akademiet v2.0
// Lungelaboratoriet
// Missioner
// ===================================


const lungelaboratoriumMissions = [


{

id:"lung-001",

title:
"Den første observation",


story:

`
Borger med KOL, Jens på 74 år,
bor alene og får hjælp i hjemmet.

Borger oplyser, at han bliver hurtigere
forpustet end tidligere, når han går
fra stuen til køkkenet.

Han fortæller:

"Jeg kan ikke helt det samme som før."
`,


questions:[


{

text:
"Hvad er den vigtigste første handling?",


answers:[


{
text:
"Observere ændringer i borgerens åndenød og funktionsniveau",

correct:true,

feedback:
`
Rigtigt.

Ved KOL er ændringer i åndenød,
aktivitetsniveau og funktionsniveau
vigtige tegn på ændring i borgerens
tilstand.
`
},



{
text:
"Fortælle borgeren at det er normalt at blive ældre",

correct:false,

feedback:
`
Ikke korrekt.

Alder kan spille en rolle, men nye
ændringer hos en borger med KOL
skal altid observeres.
`
},



{
text:
"Anbefale at borgeren undgår aktivitet",

correct:false,

feedback:
`
Forkert.

Mindre aktivitet kan føre til dårligere
funktion. Først skal situationen vurderes.
`
}


]

},




{

text:
"Borger fortæller samtidig, at han holder flere pauser under personlig pleje. Hvad er relevant at undersøge?",


answers:[


{
text:
"Hvornår åndenøden opstår, og hvad der udløser den",

correct:true,

feedback:
`
Korrekt.

Det giver vigtig viden om borgerens
belastning og ændringer i hverdagen.
`
},



{
text:
"Om borgeren bare skal gøre tingene hurtigere",

correct:false,

feedback:
`
Forkert.

Tempo og energiforvaltning skal
tilpasses borgerens situation.
`
},



{
text:
"Om borgeren ønsker at stoppe med alle aktiviteter",

correct:false,

feedback:
`
Ikke korrekt.

Målet er støtte til at kunne mestre
hverdagen - ikke unødvendige begrænsninger.
`
}


]

}


]


},






{

id:"lung-002",

title:
"Når vejrtrækningen ændrer sig",


story:

`
Borger med KOL, Anna på 81 år,
fortæller at hun i dag virker mere
træt end normalt.

Borger oplyser:

"Jeg synes, jeg skal bruge mere energi
på bare at komme rundt."
`,


questions:[


{

text:
"Hvilken ændring kan være vigtig at reagere på?",


answers:[


{
text:
"Ændret aktivitetsniveau og øget træthed",

correct:true,

feedback:
`
Rigtigt.

Ændringer i energi og funktion kan
være tegn på ændringer i sygdommen.
`
},



{
text:
"At borgeren har en dårlig dag",

correct:false,

feedback:
`
Forkert.

Det kan være tilfældet, men ændringer
skal undersøges nærmere.
`
},



{
text:
"At borgeren ikke længere skal bevæge sig",

correct:false,

feedback:
`
Ikke korrekt.

Bevægelse og aktivitet er fortsat
vigtigt ved KOL.
`
}


]

}


]


},






{

id:"lung-003",

title:
"Tryghed ved åndenød",


story:

`
Borger med KOL bliver pludselig urolig
og siger:

"Jeg føler ikke, jeg kan få vejret."
`,


questions:[


{

text:
"Hvad er en relevant tilgang?",


answers:[


{
text:
"Skabe ro, være nærværende og observere borgerens situation",

correct:true,

feedback:
`
Rigtigt.

Tryghed, støtte og observation er
centralt ved oplevet åndenød.
`
},



{
text:
"Sige at borgeren skal tage sig sammen",

correct:false,

feedback:
`
Forkert.

Åndenød kan give stor utryghed
og skal tages alvorligt.
`
},



{
text:
"Forlade borgeren så personen kan falde til ro",

correct:false,

feedback:
`
Forkert.

Nærvær er vigtigt i situationen.
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
