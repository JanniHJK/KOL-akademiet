// ===================================
2
// KOL Akademiet 3.0
3
// Anna NPC System
4
// ===================================
5
 
6
const annaDialogues = {
7
 
8
welcome: {
9
 
10
title: "Anna",
11
 
12
text: `
13
Velkommen til KOL Akademiet.
14
 
15
Jeg er Anna, din vejleder.
16
 
17
Rundt omkring i KOL-riget
18
har borgere brug for hjælp.
19
 
20
Som Lungedetektiv skal du lære
21
at observere symptomer,
22
opdage faresignaler og hjælpe
23
borgere med KOL til en tryggere
24
hverdag.
25
 
26
Din rejse begynder nu.
27
`
28
},
29
 
30
lungelaboratoriet: {
31
 
32
title: "Anna",
33
 
34
text: `
35
Godt arbejde med at komme hertil.
36
 
37
Lungelaboratoriet er stedet,
38
hvor alle Lungedetektiver starter.
39
 
40
Her skal du lære at se de små
41
forandringer, som kan være tegn
42
på begyndende forværring.
43
 
44
Husk:
45
Ingen observation er for lille.
46
`
47
},
48
 
49
firstMission: {
50
 
51
title: "Anna",
52
 
53
text: `
54
Din første borger har brug for hjælp.
55
 
56
Læs historien grundigt.
57
 
58
Tænk som en fagperson.
59
 
60
Hvilke observationer er vigtigst?
61
`
62
},
63
 
64
missionComplete: {
65
 
66
title: "Anna",
67
 
68
text: `
69
Flot arbejde.
70
 
71
Du fandt de rigtige spor
72
og hjalp borgeren.
73
 
74
Sådan arbejder en ægte
75
Lungedetektiv.
76
`
77
},
78
 
79
moduleComplete: {
80
 
81
title: "Anna",
82
 
83
text: `
84
Fantastisk.
85
 
86
Du har gennemført
87
Lungelaboratoriet.
88
 
89
Nye områder vil snart blive
90
tilgængelige i KOL-riget.
91
 
92
Eventyret fortsætter.
93
`
94
}
95
 
96
};
97
 
98
// ===================================
99
// VIS DIALOG
100
// ===================================
101
 
102
function showAnnaDialogue(dialogId) {
103
 
104
const dialogue =
105
annaDialogues[dialogId];
106
 
107
if (!dialogue) {
108
return;
109
}
110
 
111
removeAnnaDialogue();
112
 
113
const overlay =
114
document.createElement("div");
115
 
116
overlay.id =
117
"anna-overlay";
118
 
119
overlay.style.position =
120
"fixed";
121
 
122
overlay.style.inset =
123
"0";
124
 
125
overlay.style.background =
126
"rgba(0,0,0,0.60)";
127
 
128
overlay.style.display =
129
"flex";
130
 
131
overlay.style.alignItems =
132
"center";
133
 
134
overlay.style.justifyContent =
135
"center";
136
 
137
overlay.style.zIndex =
138
"9999";
139
 
140
overlay.innerHTML = `
141
 
142
<div
143
style="
144
width:90%;
145
max-width:650px;
146
background:white;
147
color:#123b69;
148
padding:30px;
149
border-radius:24px;
150
text-align:center;
151
box-shadow:
152
0 20px 40px rgba(0,0,0,0.3);
153
">
154
 
155
<div
156
style="
157
width:120px;
158
height:120px;
159
margin:auto;
160
margin-bottom:20px;
161
border-radius:50%;
162
display:flex;
163
align-items:center;
164
justify-content:center;
165
background:#f4b942;
166
font-size:4rem;
167
">
168
 
169
👩‍⚕️
170
 
171
</div>
172
 
173
<h2>
174
${dialogue.title}
175
</h2>
176
 
177
<p
178
style="
179
line-height:1.8;
180
margin-top:15px;
181
white-space:pre-line;
182
">
183
 
184
${dialogue.text}
185
 
186
</p>
187
 
188
<br>
189
 
190
<button
191
onclick="
192
closeAnnaDialogue()
193
">
194
 
195
Fortsæt
196
 
197
</button>
198
 
199
</div>
200
 
201
`;
202
 
203
document.body.appendChild(
204
overlay
205
);
206
}
207
 
208
// ===================================
209
// LUK
210
// ===================================
211
 
212
function closeAnnaDialogue() {
213
 
214
removeAnnaDialogue();
215
}
216
 
217
// ===================================
218
// FJERN
219
// ===================================
220
 
221
function removeAnnaDialogue() {
222
 
223
const existing =
224
document.getElementById(
225
"anna-overlay"
226
);
227
 
228
if (existing) {
229
existing.remove();
230
}
231
}
232
 
233
// ===================================
234
// HURTIGE KALD
235
// ===================================
236
 
237
function annaWelcome() {
238
 
239
showAnnaDialogue(
240
"welcome"
241
);
242
}
243
 
244
function annaLungelab() {
245
 
246
showAnnaDialogue(
247
"lungelaboratoriet"
248
);
249
}
250
 
251
function annaMissionComplete() {
252
 
253
showAnnaDialogue(
254
"missionComplete"
255
);
256
}
257
 
258
function annaModuleComplete() {
259
 
260
showAnnaDialogue(
261
"moduleComplete"
262
);
263
}
264
 
265
// ===================================
266
// AUTOSTART
267
// ===================================
268
 
269
document.addEventListener(
270
"DOMContentLoaded",
271
() => {
272
 
273
setTimeout(
274
() => {
275
 
276
annaWelcome();
277
 
278
},
279
800
280
);
281
 
282
}
283
);
