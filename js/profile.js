// ===================================
// KOL Akademiet v3.0
// Profilsystem
// Adventure Edition
// ===================================

let currentPlayer = null;

// ===================================
// TITLER
// ===================================

const playerRanks = [
    "Ny medarbejder",
    "Lungedetektiv",
    "KOL-assistent",
    "KOL-specialist",
    "Telemedicinmester",
    "Akutekspert",
    "KOL-mester"
];

// ===================================
// OPRET PROFIL
// ===================================

function initializeProfile(name){

    const saved = loadPlayerData();

    if(saved){

        currentPlayer = saved;

        if(!currentPlayer.level){
            currentPlayer.level = 1;
        }

        if(!currentPlayer.xp){
            currentPlayer.xp = 0;
        }

        if(!currentPlayer.rank){
            currentPlayer.rank =
            "Ny medarbejder";
        }

        return currentPlayer;
    }

    currentPlayer = {

        name:name,

        level:1,

        xp:0,

        points:0,

        rank:"Ny medarbejder",

        badges:[],

        completedMissions:[],

        moduleProgress:{
            lungelaboratoriet:0,
            telemedicin:0,
            ernæring:0,
            medicin:0,
            akut:0
        }

    };

    saveCurrentProfile();

    return currentPlayer;
}

// ===================================
// GEM
// ===================================

function saveCurrentProfile(){

    if(!currentPlayer){
        return;
    }

    localStorage.setItem(
        "kol_player",
        JSON.stringify(currentPlayer)
    );
}

// ===================================
// HENT
// ===================================

function loadPlayerData(){

    const saved =
    localStorage.getItem(
        "kol_player"
    );

    if(saved){
        return JSON.parse(saved);
}
112
 
113
return null;
114
}
115
 
116
// ===================================
117
// XP
118
// ===================================
119
 
120
function addXP(amount){
121
 
122
if(!currentPlayer){
123
return;
124
}
125
 
126
currentPlayer.xp += amount;
127
 
128
checkLevelUp();
129
 
130
saveCurrentProfile();
131
 
132
renderPlayerCard();
133
}
134
 
135
// ===================================
136
// POINT
137
// ===================================
138
 
139
function addPoints(amount){
140
 
141
if(!currentPlayer){
142
return;
143
}
144
 
145
currentPlayer.points += amount;
146
 
147
addXP(amount);
148
 
149
saveCurrentProfile();
150
 
151
renderPlayerCard();
152
}
153
 
154
// ===================================
155
// LEVEL SYSTEM
156
// ===================================
157
 
158
function checkLevelUp(){
159
 
160
const newLevel =
161
Math.floor(
162
currentPlayer.xp / 500
163
) + 1;
164
 
165
if(
166
newLevel >
167
currentPlayer.level
168
){
169
 
170
currentPlayer.level =
171
newLevel;
172
 
173
updateRank();
174
}
175
 
176
}
177
 
178
// ===================================
179
// TITEL
180
// ===================================
181
 
182
function updateRank(){
183
 
184
const level =
185
currentPlayer.level;
186
 
187
if(level >= 15){
188
 
189
currentPlayer.rank =
190
"KOL-mester";
191
 
192
}else if(level >= 12){
193
 
194
currentPlayer.rank =
195
"Akutekspert";
196
 
197
}else if(level >= 9){
198
 
199
currentPlayer.rank =
200
"Telemedicinmester";
201
 
202
}else if(level >= 6){
203
 
204
currentPlayer.rank =
205
"KOL-specialist";
206
 
207
}else if(level >= 3){
208
 
209
currentPlayer.rank =
210
"KOL-assistent";
211
 
212
}else if(level >= 2){
213
 
214
currentPlayer.rank =
215
"Lungedetektiv";
216
 
217
}else{
218
 
219
currentPlayer.rank =
220
"Ny medarbejder";
221
}
222
 
223
}
224
 
225
// ===================================
226
// MISSION GENNEMFØRT
227
// ===================================
228
 
229
function completeMissionProgress(
230
missionId
231
){
232
 
233
if(
234
!currentPlayer.completedMissions.includes(
235
missionId
236
)
237
){
238
 
239
currentPlayer.completedMissions.push(
240
missionId
241
);
242
 
243
}
244
 
245
saveCurrentProfile();
246
}
247
 
248
// ===================================
249
// MODULPROGRESSION
250
// ===================================
251
 
252
function updatePlayerModuleProgress(
253
moduleId,
254
progress
255
){
256
 
257
if(!currentPlayer){
258
return;
259
}
260
 
261
currentPlayer.moduleProgress[
262
moduleId
263
] = progress;
264
 
265
saveCurrentProfile();
266
 
267
renderPlayerCard();
268
}
269
 
270
// ===================================
271
// TOTAL PROGRESSION
272
// ===================================
273
 
274
function getTotalProgress(){
275
 
276
if(!currentPlayer){
277
return 0;
278
}
279
 
280
const values =
281
Object.values(
282
currentPlayer.moduleProgress
283
);
284
 
285
const sum =
286
values.reduce(
287
(a,b)=>a+b,
288
0
289
);
290
 
291
return Math.round(
292
sum /
293
values.length
294
);
295
}
296
 
297
// ===================================
298
// XP PROCENT
299
// ===================================
300
 
301
function getXPPercent(){
302
 
303
const current =
304
currentPlayer.xp % 500;
305
 
306
return Math.round(
307
(current / 500) * 100
308
);
309
}
310
 
311
// ===================================
312
// VIS SPILLERKORT
313
// ===================================
314
 
315
function renderPlayerCard(){
316
 
317
const card =
318
document.getElementById(
319
"player-card"
320
);
321
 
322
if(
323
!card ||
324
!currentPlayer
325
){
326
return;
327
}
328
 
329
card.innerHTML = `
330
 
331
<div class="dialogue-box">
332
 
333
<h2>🫁 ${currentPlayer.name}</h2>
334
 
335
<p>
336
⭐ Niveau:
337
<strong>
338
${currentPlayer.level}
339
</strong>
340
</p>
341
 
342
<p>
343
🏅 Titel:
344
<strong>
345
${currentPlayer.rank}
346
</strong>
347
</p>
348
 
349
<p>
350
🎯 Point:
351
<strong>
352
${currentPlayer.points}
353
</strong>
354
</p>
355
 
356
<p>
357
📈 Gennemført:
358
<strong>
359
${getTotalProgress()}%
360
</strong>
361
</p>
362
 
363
<div class="xp-wrapper">
364
 
365
<p>
366
XP:
367
${currentPlayer.xp}
368
</p>
369
 
370
<div class="xp-bar">
371
<div
372
class="xp-fill"
373
style="
374
width:${getXPPercent()}%;
375
">
376
</div>
377
</div>
378
 
379
</div>
380
 
381
</div>
382
 
383
`;
384
 
385
}
386
 
387
// ===================================
388
// HENT SPILLER
389
// ===================================
390
 
391
function getCurrentPlayer(){
392
return currentPlayer;
393
}   
