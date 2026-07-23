// ===================================
2
// KOL Akademiet 3.0
3
// Lungelaboratoriet
4
// Adventure Edition
5
// ===================================
6
 
7
const lungelaboratoriumMissions = [
8
 
9
{
10
id: "lung-001",
11
 
12
title: "Den Mystiske Åndenød",
13
 
14
story: `
15
Anna tager imod dig i Lungelaboratoriet.
16
 
17
Din første opgave handler om Jens på 74 år.
18
 
19
Jens fortæller:
20
 
21
"Jeg bliver mere forpustet end normalt
22
og må holde flere pauser i løbet af dagen."
23
 
24
Anna ser på dig.
25
 
26
"Lungedetektiver begynder altid med
27
observationer. Hvilke spor finder du?"
28
`,
29
 
30
questions: [
31
 
32
{
33
text:
34
"Hvad er den vigtigste første observation?",
35
 
36
answers: [
37
 
38
{
39
text:
40
"Observere ændringer i åndenød og aktivitetsniveau",
41
 
42
correct: true,
43
 
44
feedback:
45
"Korrekt. Ændringer i åndenød og funktionsniveau er vigtige tegn hos borgere med KOL."
46
},
47
 
48
{
49
text:
50
"Fortælle Jens at det er normalt at blive ældre",
51
 
52
correct: false,
53
 
54
feedback:
55
"Forkert. Nye ændringer bør undersøges nærmere."
56
},
57
 
58
{
59
text:
60
"Anbefale ekstra hvile uden yderligere vurdering",
61
 
62
correct: false,
63
 
64
feedback:
65
"Forkert. Først skal situationen vurderes."
66
}
67
 
68
]
69
},
70
 
71
{
72
text:
73
"Jens bliver mere forpustet ved bad og påklædning. Hvad undersøger du?",
74
 
75
answers: [
76
 
77
{
78
text:
79
"Hvornår åndenøden opstår, og om den afviger fra det normale",
80
 
81
correct: true,
82
 
83
feedback:
84
"Rigtigt. Sammenligning med borgerens normale tilstand er vigtig."
85
},
86
 
87
{
88
text:
89
"Om Jens kan undgå personlig pleje",
90
 
91
correct: false,
92
 
93
feedback:
94
"Forkert. Målet er ikke at undgå aktiviteter."
95
},
96
 
97
{
98
text:
99
"Om Jens bare skal vænne sig til situationen",
100
 
101
correct: false,
102
 
103
feedback:
104
"Forkert. Ændringer skal tages alvorligt."
105
}
106
 
107
]
108
}
109
 
110
]
111
},
112
 
113
{
114
id: "lung-002",
115
 
116
title: "Slimsporene",
117
 
118
story: `
119
Anna sender dig videre til næste sag.
120
 
121
Borgeren Anna på 81 år hoster mere end normalt.
122
 
123
Hun fortæller:
124
 
125
"Der kommer mere slim op,
126
og jeg føler mig træt."
127
 
128
Nu gælder det om at finde de
129
vigtigste observationer.
130
`,
131
 
132
questions: [
133
 
134
{
135
text:
136
"Hvad er vigtigst at observere ved ændret slim?",
137
 
138
answers: [
139
 
140
{
141
text:
142
"Mængde, farve og ændring fra det normale",
143
 
144
correct: true,
145
 
146
feedback:
147
"Korrekt. Ændringer i slim kan være et vigtigt faresignal."
148
},
149
 
150
{
151
text:
152
"Om slimen virker irriterende",
153
 
154
correct: false,
155
 
156
feedback:
157
"Borgerens oplevelse er vigtig, men observationerne er afgørende."
158
},
159
 
160
{
161
text:
162
"Om hosten kun forekommer om morgenen",
163
 
164
correct: false,
165
 
166
feedback:
167
"Det kan være relevant, men ikke det vigtigste her."
168
}
169
 
170
]
171
},
172
 
173
{
174
text:
175
"Anna virker mere træt end normalt. Hvad tænker du?",
176
 
177
answers: [
178
 
179
{
180
text:
181
"Ændringer i energiniveau er relevante oplysninger",
182
 
183
correct: true,
184
 
185
feedback:
186
"Rigtigt. Træthed og lavere energiniveau kan være vigtige observationer."
187
},
188
 
189
{
190
text:
191
"Det skyldes sandsynligvis kun alder",
192
 
193
correct: false,
194
 
195
feedback:
196
"Forkert. Ændringer bør ikke bortforklares."
197
},
198
 
199
{
200
text:
201
"Det har ingen betydning ved KOL",
202
 
203
correct: false,
204
 
205
feedback:
206
"Forkert. Funktionsevne og energi er vigtige indikatorer."
207
}
208
 
209
]
210
}
211
 
212
]
213
},
214
 
215
{
216
id: "lung-003",
217
 
218
title: "Når Angsten Kommer",
219
 
220
story: `
221
Du bliver kaldt ud til Erik.
222
 
223
Da du ankommer, sidder han
224
foroverbøjet og virker urolig.
225
 
226
Han siger:
227
 
228
"Jeg bliver bange,
229
når jeg ikke kan få vejret."
230
 
231
Anna hvisker:
232
 
233
"Nu handler det om både
234
observation og kommunikation."
235
`,
236
 
237
questions: [
238
 
239
{
240
text:
241
"Hvordan hjælper du Erik bedst?",
242
 
243
answers: [
244
 
245
{
246
text:
247
"Skaber ro og observerer hans vejrtrækning",
248
 
249
correct: true,
250
 
251
feedback:
252
"Korrekt. Angst og åndenød kan forstærke hinanden."
253
},
254
 
255
{
256
text:
257
"Siger at han ikke skal være nervøs",
258
 
259
correct: false,
260
 
261
feedback:
262
"Forkert. Hans oplevelse skal tages alvorligt."
263
},
264
 
265
{
266
text:
267
"Går ud af rummet for at give ro",
268
 
269
correct: false,
270
 
271
feedback:
272
"Forkert. Erik har behov for støtte."
273
}
274
 
275
]
276
},
277
 
278
{
279
text:
280
"Hvorfor er tryghed vigtig ved åndenød?",
281
 
282
answers: [
283
 
284
{
285
text:
286
"Fordi angst kan øge oplevelsen af åndenød",
287
 
288
correct: true,
289
 
290
feedback:
291
"Rigtigt. Tryghed og støtte kan hjælpe borgeren."
292
},
293
 
294
{
295
text:
296
"Fordi tryghed fjerner KOL",
297
 
298
correct: false,
299
 
300
feedback:
301
"Forkert. Tryghed hjælper situationen, men helbreder ikke sygdommen."
302
},
303
 
304
{
305
text:
306
"Fordi alle bliver raske af afslapning",
307
 
308
correct: false,
309
 
310
feedback:
311
"Forkert. KOL kræver faglig observation og handling."
312
}
313
 
314
]
315
}
316
 
317
]
318
}
319
 
320
];
321
 
322
// ===================================
323
// EXPORT
324
// ===================================
325
 
326
function getLungelaboratoriumMissions() {
327
return lungelaboratoriumMissions;
328
}
