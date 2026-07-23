// ===================================
2
// KOL Akademiet 3.0
3
// Module Engine
4
// Adventure Edition
5
// ===================================
6
 
7
let activeModule = null;
8
let activeModuleMissionIndex = 0;
9
 
10
// ===================================
11
// START MODUL
12
// ===================================
13
 
14
function startModule(moduleId){
15
 
16
console.log(
17
"Starter modul:",
18
moduleId
19
);
20
 
21
switch(moduleId){
22
 
23
case "lungelaboratoriet":
24
 
25
activeModule = {
26
 
27
id:
28
"lungelaboratoriet",
29
 
30
title:
31
"🫁 Lungelaboratoriet",
32
 
33
description:
34
"Her lærer du at observere symptomer, identificere ændringer og hjælpe borgere med KOL.",
35
 
36
missions:
37
getLungelaboratoriumMissions()
38
 
39
};
40
 
41
break;
42
 
43
default:
44
 
45
alert(
46
"Dette modul er endnu ikke åbent."
47
);
48
 
49
return;
50
 
51
}
52
 
53
activeModuleMissionIndex = 0;
54
 
55
renderModuleOverview();
56
}
57
 
58
// ===================================
59
// MODUL FORSIDE
60
// ===================================
61
 
62
function renderModuleOverview(){
63
 
64
showScreen(
65
"area-screen"
66
);
67
 
68
const title =
69
document.getElementById(
70
"area-title"
71
);
72
 
73
const content =
74
document.getElementById(
75
"area-content"
76
);
77
 
78
title.innerHTML =
79
activeModule.title;
80
 
81
content.innerHTML = `
82
 
83
<div class="dialogue-box">
84
 
85
<h2>
86
${activeModule.title}
87
</h2>
88
 
89
<p>
90
${activeModule.description}
91
</p>
92
 
93
<br>
94
 
95
<p>
96
Antal missioner:
97
<strong>
98
${activeModule.missions.length}
99
</strong>
100
</p>
101
 
102
<br>
103
 
104
<p>
105
Anna venter på dine observationer.
106
Hver mission bringer dig tættere på
107
titlen som KOL-mester.
108
</p>
109
 
110
<br>
111
 
112
<button
113
onclick="
114
startNextMission()
115
">
116
Start første mission
117
</button>
118
 
119
</div>
120
 
121
`;
122
}
123
 
124
// ===================================
125
// START MISSION
126
// ===================================
127
 
128
function startNextMission(){
129
 
130
const mission =
131
activeModule.missions[
132
activeModuleMissionIndex
133
];
134
 
135
if(!mission){
136
 
137
finishModule();
138
 
139
return;
140
}
141
 
142
startMission(
143
mission
144
);
145
}
146
 
147
// ===================================
148
// MISSION FÆRDIG
149
// ===================================
150
 
151
function completeModuleMission(){
152
 
153
addPoints(
154
100
155
);
156
 
157
activeModuleMissionIndex++;
158
 
159
updateModuleProgress();
160
 
161
if(
162
activeModuleMissionIndex <
163
activeModule.missions.length
164
){
165
 
166
renderNextMissionScreen();
167
 
168
return;
169
}
170
 
171
finishModule();
172
}
173
 
174
// ===================================
175
// MODULPROGRESSION
176
// ===================================
177
 
178
function updateModuleProgress(){
179
 
180
const progress =
181
Math.round(
182
 
183
(
184
activeModuleMissionIndex /
185
activeModule.missions.length
186
) * 100
187
 
188
);
189
 
190
updatePlayerModuleProgress(
191
activeModule.id,
192
progress
193
);
194
}
195
 
196
// ===================================
197
// NÆSTE MISSION
198
// ===================================
199
 
200
function renderNextMissionScreen(){
201
 
202
const content =
203
document.getElementById(
204
"mission-content"
205
);
206
 
207
const nextMission =
208
activeModule.missions[
209
activeModuleMissionIndex
210
];
211
 
212
content.innerHTML = `
213
 
214
<div class="dialogue-box">
215
 
216
<h2>
217
⭐ Mission gennemført
218
</h2>
219
 
220
<p>
221
Du har gennemført den foregående mission.
222
</p>
223
 
224
<br>
225
 
226
<p>
227
+100 point
228
</p>
229
 
230
<br>
231
 
232
<p>
233
Næste mission:
234
<strong>
235
${nextMission.title}
236
</strong>
237
</p>
238
 
239
<br>
240
 
241
<button
242
onclick="
243
startNextMission()
244
">
245
Fortsæt
246
</button>
247
 
248
</div>
249
 
250
`;
251
}
252
 
253
// ===================================
254
// MODUL AFSLUTTET
255
// ===================================
256
 
257
function finishModule(){
258
 
259
addPoints(
260
250
261
);
262
 
263
updatePlayerModuleProgress(
264
activeModule.id,
265
100
266
);
267
 
268
const content =
269
document.getElementById(
270
"mission-content"
271
);
272
 
273
content.innerHTML = `
274
 
275
<div class="dialogue-box">
276
 
277
<h1>
278
🎉 Modul gennemført
279
</h1>
280
 
281
<h2>
282
${activeModule.title}
283
</h2>
284
 
285
<br>
286
 
287
<p>
288
Fantastisk arbejde.
289
</p>
290
 
291
<br>
292
 
293
<p>
294
Du har hjulpet flere borgere
295
og styrket dine færdigheder som
296
Lungedetektiv.
297
</p>
298
 
299
<br>
300
 
301
<p>
302
Bonus:
303
+250 point
304
</p>
305
 
306
<br>
307
 
308
<button
309
onclick="
310
returnToAcademy()
311
">
312
Tilbage til KOL-riget
313
</button>
314
 
315
</div>
316
 
317
`;
318
 
319
unlockNextGameArea();
320
}
321
 
322
// ===================================
323
// TILBAGE TIL KORT
324
// ===================================
325
 
326
function returnToAcademy(){
327
 
328
