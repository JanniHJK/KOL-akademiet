// ===================================
2
// KOL Akademiet 3.0
3
// Profilsystem
4
// Adventure Edition
5
// ===================================
6
 
7
let currentPlayer = null;
8
 
9
// ===================================
10
// OPRET / HENT PROFIL
11
// ===================================
12
 
13
function initializeProfile(name) {
14
 
15
const savedPlayer =
16
loadPlayerData();
17
 
18
if (savedPlayer) {
19
 
20
currentPlayer =
21
savedPlayer;
22
 
23
ensurePlayerStructure();
24
 
25
saveCurrentProfile();
26
 
27
return currentPlayer;
28
}
29
 
30
currentPlayer = {
31
 
32
name: name,
33
 
34
level: 1,
35
 
36
xp: 0,
37
 
38
points: 0,
39
 
40
rank: "Ny medarbejder",
41
 
42
badges: [],
43
 
44
completedMissions: [],
45
 
46
moduleProgress: {
47
lungelaboratoriet: 0,
48
telemedicin: 0,
49
ernæring: 0,
50
medicin: 0,
51
akut: 0
52
}
53
 
54
};
55
 
56
saveCurrentProfile();
57
 
58
return currentPlayer;
59
}
60
 
61
// ===================================
62
// SIKR STRUKTUR
63
// ===================================
64
 
65
function ensurePlayerStructure() {
66
 
67
if (!currentPlayer.level) {
68
currentPlayer.level = 1;
69
}
70
 
71
if (!currentPlayer.xp) {
72
currentPlayer.xp = 0;
73
}
74
 
75
if (!currentPlayer.points) {
76
currentPlayer.points = 0;
77
}
78
 
79
if (!currentPlayer.rank) {
80
currentPlayer.rank =
81
"Ny medarbejder";
82
}
83
 
84
if (!currentPlayer.badges) {
85
currentPlayer.badges = [];
86
}
87
 
88
if (!currentPlayer.completedMissions) {
89
currentPlayer.completedMissions = [];
90
}
91
 
92
if (!currentPlayer.moduleProgress) {
93
 
94
currentPlayer.moduleProgress = {
95
 
96
lungelaboratoriet: 0,
97
telemedicin: 0,
98
ernæring: 0,
99
medicin: 0,
100
akut: 0
101
 
102
};
103
}
104
}
105
 
106
// ===================================
107
// GEM
108
// ===================================
109
 
110
function saveCurrentProfile() {
111
 
112
if (!currentPlayer) {
113
return;
114
}
115
 
116
localStorage.setItem(
117
"kol_player",
118
JSON.stringify(currentPlayer)
119
);
120
}
121
 
122
// ===================================
123
// HENT GEMT DATA
124
// ===================================
125
 
126
function loadPlayerData() {
127
 
128
const saved =
129
localStorage.getItem(
130
"kol_player"
131
);
132
 
133
if (!saved) {
134
return null;
135
}
136
 
137
return JSON.parse(saved);
138
}
139
 
140
// ===================================
141
// POINT
142
// ===================================
143
 
144
function addPoints(value) {
145
 
146
if (!currentPlayer) {
147
return;
148
}
149
 
150
currentPlayer.points += value;
151
 
152
addXP(value);
153
 
154
saveCurrentProfile();
155
 
156
renderPlayerCard();
157
}
158
 
159
// ===================================
160
// XP
161
// ===================================
162
 
163
function addXP(value) {
164
 
165
if (!currentPlayer) {
166
return;
167
}
168
 
169
currentPlayer.xp += value;
170
 
171
updateLevel();
172
}
173
 
174
// ===================================
175
// LEVEL
176
// ===================================
177
 
178
function updateLevel() {
179
 
180
const newLevel =
181
Math.floor(
182
currentPlayer.xp / 250
183
) + 1;
184
 
185
if (
186
newLevel >
187
currentPlayer.level
188
) {
189
 
190
currentPlayer.level =
191
newLevel;
192
 
193
updateRank();
194
}
195
}
196
 
197
// ===================================
198
// TITLER
199
// ===================================
200
 
201
function updateRank() {
202
 
203
const level =
204
currentPlayer.level;
205
 
206
if (level >= 12) {
207
 
208
currentPlayer.rank =
209
"KOL-mester";
210
 
211
} else if (level >= 10) {
212
 
213
currentPlayer.rank =
214
"Akutekspert";
215
 
216
} else if (level >= 8) {
217
 
218
currentPlayer.rank =
219
"Telemedicinmester";
220
 
221
} else if (level >= 6) {
222
 
223
currentPlayer.rank =
224
"KOL-specialist";
225
 
226
} else if (level >= 4) {
227
 
228
currentPlayer.rank =
229
"KOL-assistent";
230
 
231
} else if (level >= 2) {
232
 
233
currentPlayer.rank =
234
"Lungedetektiv";
235
 
236
} else {
237
 
238
currentPlayer.rank =
239
"Ny medarbejder";
240
}
241
 
242
saveCurrentProfile();
243
}
244
 
245
// ===================================
246
// XP BAR
247
// ===================================
248
 
249
function getXPPercent() {
250
 
251
const currentXP =
252
currentPlayer.xp % 250;
253
 
254
return Math.round(
255
(currentXP / 250) * 100
256
);
257
}
258
 
259
// ===================================
260
// MISSION
261
// ===================================
262
 
263
function completeMissionProgress(
264
missionId
265
) {
266
 
267
if (
268
!currentPlayer.completedMissions.includes(
269
missionId
270
)
271
) {
272
 
273
currentPlayer.completedMissions.push(
274
missionId
275
);
276
 
277
saveCurrentProfile();
278
}
279
}
280
 
281
// ===================================
282
// MODUL FREMDRIFT
283
// ===================================
284
 
285
function updatePlayerModuleProgress(
286
moduleId,
287
progress
288
) {
289
 
290
if (!currentPlayer) {
291
return;
292
}
293
 
294
currentPlayer.moduleProgress[
295
moduleId
296
] = progress;
297
 
298
saveCurrentProfile();
299
 
300
renderPlayerCard();
301
}
302
 
303
// ===================================
304
// SAMLET FREMDRIFT
305
// ===================================
306
 
307
function getTotalProgress() {
308
 
309
if (!currentPlayer) {
310
return 0;
311
}
312
 
313
const values =
314
Object.values(
315
currentPlayer.moduleProgress
316
);
317
 
318
const sum =
319
values.reduce(
320
(a, b) => a + b,
321
0
322
);
323
 
324
return Math.round(
325
sum / values.length
326
);
327
}
328
 
329
// ===================================
330
// BADGES
331
// ===================================
332
 
333
function addBadge(badgeName) {
334
 
335
if (
336
currentPlayer.badges.includes(
337
badgeName
338
)
339
) {
340
return;
341
}
342
 
343
currentPlayer.badges.push(
344
badgeName
345
);
346
 
347
saveCurrentProfile();
348
}
349
 
350
// ===================================
351
// VIS SPILLERKORT
352
// ===================================
353
 
354
function renderPlayerCard() {
355
 
356
const card =
357
document.getElementById(
358
"player-card"
359
);
360
 
361
if (
362
!card ||
363
!currentPlayer
364
) {
365
return;
366
}
367
 
368
card.innerHTML = `
369
 
370
<div class="dialogue-box">
371
 
372
<h2>
373
🫁 ${currentPlayer.name}
374
</h2>
375
 
376
<p>
377
⭐ Niveau:
378
<strong>
379
${currentPlayer.level}
380
</strong>
381
</p>
382
 
383
<p>
384
🏅 Titel:
385
<strong>
386
${currentPlayer.rank}
387
</strong>
388
</p>
389
 
390
<p>
391
🎯 Point:
392
<strong>
393
${currentPlayer.points}
394
</strong>
395
</p>
396
 
397
<p>
398
📈 Fremdrift:
399
<strong>
400
${getTotalProgress()}%
401
</strong>
402
</p>
403
 
404
<div class="xp-wrapper">
405
 
406
<p>
407
XP: ${currentPlayer.xp}
408
</p>
409
 
410
<div class="xp-bar">
411
 
412
<div
413
class="xp-fill"
414
style="
415
width:${getXPPercent()}%;
416
">
417
</div>
418
 
419
</div>
420
 
421
</div>
422
 
423
</div>
424
 
425
`;
426
}
427
 
428
// ===================================
429
// HENT AKTIV SPILLER
430
// ===================================
431
 
432
function getCurrentPlayer() {
433
return currentPlayer;
434
}
