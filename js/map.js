// ===================================
2
// KOL Akademiet 3.0
3
// World Map System
4
// Adventure Edition
5
// ===================================
6
 
7
const academyMap = {
8
 
9
lungelaboratoriet: {
10
 
11
id: "lungelaboratoriet",
12
 
13
title: "Lungelaboratoriet",
14
 
15
description:
16
"Observation, symptomer og tidlig opsporing.",
17
 
18
unlocked: true,
19
 
20
completed: false,
21
 
22
progress: 0
23
},
24
 
25
telemedicin: {
26
 
27
id: "telemedicin",
28
 
29
title: "Telemedicinsk Tårn",
30
 
31
description:
32
"Målinger, overvågning og faresignaler.",
33
 
34
unlocked: false,
35
 
36
completed: false,
37
 
38
progress: 0
39
},
40
 
41
ernæring: {
42
 
43
id: "ernæring",
44
 
45
title: "Ernæringscaféen",
46
 
47
description:
48
"Energi, vægt og ernæring ved KOL.",
49
 
50
unlocked: false,
51
 
52
completed: false,
53
 
54
progress: 0
55
},
56
 
57
medicin: {
58
 
59
id: "medicin",
60
 
61
title: "Medicincenteret",
62
 
63
description:
64
"Inhalation og medicinhåndtering.",
65
 
66
unlocked: false,
67
 
68
completed: false,
69
 
70
progress: 0
71
},
72
 
73
akut: {
74
 
75
id: "akut",
76
 
77
title: "Akutbjergene",
78
 
79
description:
80
"Forværringer og akutte situationer.",
81
 
82
unlocked: false,
83
 
84
completed: false,
85
 
86
progress: 0
87
}
88
 
89
};
90
 
91
// ===================================
92
// HENT KORT
93
// ===================================
94
 
95
function getAcademyMap() {
96
 
97
return academyMap;
98
}
99
 
100
// ===================================
101
// ER ÅBENT?
102
// ===================================
103
 
104
function isAreaUnlocked(areaId) {
105
 
106
if (!academyMap[areaId]) {
107
return false;
108
}
109
 
110
return academyMap[areaId].unlocked;
111
}
112
 
113
// ===================================
114
// LÅS OMRÅDE OP
115
// ===================================
116
 
117
function unlockArea(areaId) {
118
 
119
if (!academyMap[areaId]) {
120
return;
121
}
122
 
123
academyMap[areaId].unlocked = true;
124
 
125
saveMapProgress();
126
}
127
 
128
// ===================================
129
// MARKER FÆRDIG
130
// ===================================
131
 
132
function completeArea(areaId) {
133
 
134
if (!academyMap[areaId]) {
135
return;
136
}
137
 
138
academyMap[areaId].completed = true;
139
 
140
academyMap[areaId].progress = 100;
141
 
142
saveMapProgress();
143
}
144
 
145
// ===================================
146
// OPDATER PROGRESS
147
// ===================================
148
 
149
function updateAreaProgress(
150
areaId,
151
progress
152
) {
153
 
154
if (!academyMap[areaId]) {
155
return;
156
}
157
 
158
academyMap[areaId].progress =
159
progress;
160
 
161
saveMapProgress();
162
}
163
 
164
// ===================================
165
// GEM KORT
166
// ===================================
167
 
168
function saveMapProgress() {
169
 
170
localStorage.setItem(
171
"kol_map",
172
JSON.stringify(
173
academyMap
174
)
175
);
176
}
177
 
178
// ===================================
179
// HENT KORT
180
// ===================================
181
 
182
function loadMapProgress() {
183
 
184
const savedData =
185
localStorage.getItem(
186
"kol_map"
187
);
188
 
189
if (!savedData) {
190
return;
191
}
192
 
193
try {
194
 
195
const loaded =
196
JSON.parse(
197
savedData
198
);
199
 
200
Object.keys(
201
loaded
202
).forEach(areaId => {
203
 
204
if (
205
academyMap[areaId]
206
) {
207
 
208
academyMap[
209
areaId
210
] = loaded[
211
areaId
212
];
213
 
214
}
215
 
216
});
217
 
218
} catch (error) {
219
 
220
console.error(
221
"Kortdata kunne ikke indlæses",
222
error
223
);
224
}
225
}
226
 
227
// ===================================
228
// NÆSTE OMRÅDE
229
// ===================================
230
 
231
function unlockNextArea(
232
currentArea
233
) {
234
 
235
const order = [
236
 
237
"lungelaboratoriet",
238
"telemedicin",
239
"ernæring",
240
"medicin",
241
"akut"
242
 
243
];
244
 
245
const currentIndex =
246
order.indexOf(
247
currentArea
248
);
249
 
250
if (
251
currentIndex === -1
252
) {
253
return;
254
}
255
 
256
const nextArea =
257
order[
258
currentIndex + 1
259
];
260
 
261
if (
262
!nextArea
263
) {
264
return;
265
}
266
 
267
unlockArea(
268
nextArea
269
);
270
}
271
 
272
// ===================================
273
// STATUS
274
// ===================================
275
 
276
function getMapCompletion() {
277
 
278
const areas =
279
Object.values(
280
academyMap
281
);
282
 
283
const completed =
284
areas.filter(
285
area =>
286
area.completed
287
).length;
288
 
289
return Math.round(
290
(
291
completed /
292
areas.length
293
) * 100
294
);
295
}
296
 
297
// ===================================
298
// RESET KORT
299
// ===================================
300
 
301
function resetMapProgress() {
302
 
303
localStorage.removeItem(
304
"kol_map"
305
);
306
 
307
location.reload();
308
}
309
 
310
// ===================================
311
// START
312
// ===================================
313
 
314
document.addEventListener(
315
"DOMContentLoaded",
316
() => {
317
 
318
loadMapProgress();
319
 
320
}
321
);
