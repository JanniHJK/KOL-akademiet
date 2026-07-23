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
function startModule(moduleId) {
15
 
16
switch (moduleId) {
17
 
18
case "lungelaboratoriet":
19
 
20
activeModule = {
21
 
22
id: "lungelaboratoriet",
23
 
24
title: "🫁 Lungelaboratoriet",
25
 
26
description:
27
"Lær at observere symptomer, opdage ændringer og hjælpe borgere med KOL.",
28
 
29
missions:
30
getLungelaboratoriumMissions()
31
 
32
};
33
 
34
break;
35
 
36
default:
37
 
38
alert(
39
"Dette område er endnu ikke åbent."
40
);
41
 
42
return;
43
}
44
 
45
activeModuleMissionIndex = 0;
46
 
47
renderModuleOverview();
48
}
49
 
50
// ===================================
51
// MODUL FORSIDE
52
// ===================================
53
 
54
function renderModuleOverview() {
55
 
56
showScreen(
57
"area-screen"
58
);
59
 
60
const title =
61
document.getElementById(
62
"area-title"
63
);
64
 
65
const content =
66
document.getElementById(
67
"area-content"
68
);
69
 
70
title.innerHTML =
71
activeModule.title;
72
 
73
content.innerHTML = `
74
 
75
<div class="dialogue-box">
76
 
77
<h2>
78
${activeModule.title}
79
</h2>
80
 
81
<p>
82
${activeModule.description}
83
</p>
84
 
85
<br>
86
 
87
<p>
88
Missioner:
89
<strong>
90
${activeModule.missions.length}
91
</strong>
92
</p>
93
 
94
<br>
95
 
96
<p>
97
Anna har brug for din hjælp.
98
Undersøg borgernes situationer
99
og find de rigtige spor.
100
</p>
101
 
102
<br>
103
 
104
<button onclick="startNextMission()">
105
Start mission
106
</button>
107
 
108
</div>
109
 
110
`;
111
}
112
 
113
// ===================================
114
// START NÆSTE MISSION
115
// ===================================
116
 
117
function startNextMission() {
118
 
119
const mission =
120
activeModule.missions[
121
activeModuleMissionIndex
122
];
123
 
124
if (!mission) {
125
 
126
finishModule();
127
 
128
return;
129
}
130
 
131
startMission(
132
mission
133
);
134
}
135
 
136
// ===================================
137
// MISSION AFSLUTTET
138
// ===================================
139
 
140
function completeModuleMission() {
141
 
142
activeModuleMissionIndex++;
143
 
144
updateModuleProgress();
145
 
146
if (
147
activeModuleMissionIndex <
148
activeModule.missions.length
149
) {
150
 
151
showMissionReward();
152
 
153
return;
154
}
155
 
156
finishModule();
157
}
158
 
159
// ===================================
160
// FREMDRIFT
161
// ===================================
162
 
163
function updateModuleProgress() {
164
 
165
const progress =
166
Math.round(
167
(
168
activeModuleMissionIndex /
169
activeModule.missions.length
170
) * 100
171
);
172
 
173
updatePlayerModuleProgress(
174
activeModule.id,
175
progress
176
);
177
 
178
updateAreaProgress(
179
activeModule.id,
180
progress
181
);
182
}
183
 
184
// ===================================
185
// BELØNNING MELLEM MISSIONER
186
// ===================================
187
 
188
function showMissionReward() {
189
 
190
const content =
191
document.getElementById(
192
"mission-content"
193
);
194
 
195
const nextMission =
196
activeModule.missions[
197
activeModuleMissionIndex
198
];
199
 
200
content.innerHTML = `
201
 
202
<div class="dialogue-box">
203
 
204
<h2>
205
⭐ Flot arbejde
206
</h2>
207
 
208
<p>
209
Anna er imponeret over
210
dine observationer.
211
</p>
212
 
213
<br>
214
 
215
<p>
216
Du har gennemført endnu en mission.
217
</p>
218
 
219
<br>
220
 
221
<p>
222
Næste opgave:
223
</p>
224
 
225
<h3>
226
${nextMission.title}
227
</h3>
228
 
229
<br>
230
 
231
<button onclick="startNextMission()">
232
Fortsæt
233
</button>
234
 
235
</div>
236
 
237
`;
238
}
239
 
240
// ===================================
241
// MODUL AFSLUTTET
242
// ===================================
243
 
244
function finishModule() {
245
 
246
updatePlayerModuleProgress(
247
activeModule.id,
248
100
249
);
250
 
251
completeArea(
252
activeModule.id
253
);
254
 
255
unlockNextArea(
256
activeModule.id
257
);
258
 
259
addPoints(
260
250
261
);
262
 
263
const content =
264
document.getElementById(
265
"mission-content"
266
);
267
 
268
content.innerHTML = `
269
 
270
<div class="dialogue-box">
271
 
272
<h1>
273
🎉 Lungelaboratoriet gennemført
274
</h1>
275
 
276
<p>
277
Du har afsluttet alle missioner
278
i dette område.
279
</p>
280
 
281
<br>
282
 
283
<p>
284
Belønning:
285
</p>
286
 
287
<p>
288
⭐ 250 bonuspoint
289
</p>
290
 
291
<br>
292
 
293
<p>
294
Anna kalder dig nu:
295
</p>
296
 
297
<h2>
298
Lungedetektiv
299
</h2>
300
 
301
<br>
302
 
303
<button onclick="returnToAcademy()">
304
Tilbage til KOL-riget
305
</button>
306
 
307
</div>
308
 
309
`;
310
}
311
 
312
// ===================================
313
// HENT AKTIVT MODUL
314
// ===================================
315
 
316
function getCurrentModule() {
317
 
318
return activeModule;
319
}
320
 
321
// ===================================
322
// HENT MISSION NUMMER
323
// ===================================
324
 
325
function getCurrentMissionIndex() {
326
 
327
return activeModuleMissionIndex;
328
}
