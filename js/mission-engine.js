// ===================================
2
// KOL Akademiet 3.0
3
// Mission Engine
4
// Adventure Edition
5
// ===================================
6
 
7
let activeMission = null;
8
let currentQuestionIndex = 0;
9
 
10
// ===================================
11
// START MISSION
12
// ===================================
13
 
14
function startMission(mission) {
15
 
16
activeMission = mission;
17
currentQuestionIndex = 0;
18
 
19
showScreen(
20
"mission-screen"
21
);
22
 
23
renderMission();
24
}
25
 
26
// ===================================
27
// VIS MISSION
28
// ===================================
29
 
30
function renderMission() {
31
 
32
const title =
33
document.getElementById(
34
"mission-title"
35
);
36
 
37
const content =
38
document.getElementById(
39
"mission-content"
40
);
41
 
42
const question =
43
activeMission.questions[
44
currentQuestionIndex
45
];
46
 
47
title.innerHTML =
48
activeMission.title;
49
 
50
content.innerHTML = `
51
 
52
<div class="mission-story">
53
 
54
<p>
55
${activeMission.story}
56
</p>
57
 
58
</div>
59
 
60
<div class="question-box">
61
 
62
<h3>
63
${question.text}
64
</h3>
65
 
66
<div class="answer-grid">
67
 
68
${question.answers
69
.map((answer, index) => `
70
 
71
<div
72
class="answer-card"
73
onclick="
74
checkMissionAnswer(${index})
75
">
76
 
77
${answer.text}
78
 
79
</div>
80
 
81
`)
82
.join("")}
83
 
84
</div>
85
 
86
<div id="mission-feedback"></div>
87
 
88
</div>
89
 
90
`;
91
}
92
 
93
// ===================================
94
// SVAR
95
// ===================================
96
 
97
function checkMissionAnswer(index) {
98
 
99
const question =
100
activeMission.questions[
101
currentQuestionIndex
102
];
103
 
104
const answer =
105
question.answers[index];
106
 
107
const feedback =
108
document.getElementById(
109
"mission-feedback"
110
);
111
 
112
if (answer.correct) {
113
 
114
feedback.innerHTML = `
115
 
116
<div class="correct-feedback">
117
 
118
<h3>
119
⭐ Rigtigt svar
120
</h3>
121
 
122
<p>
123
${answer.feedback}
124
</p>
125
 
126
<br>
127
 
128
<button
129
onclick="
130
continueMission()
131
">
132
Fortsæt
133
</button>
134
 
135
</div>
136
 
137
`;
138
 
139
} else {
140
 
141
feedback.innerHTML = `
142
 
143
<div class="wrong-feedback">
144
 
145
<h3>
146
Ikke korrekt
147
</h3>
148
 
149
<p>
150
${answer.feedback}
151
</p>
152
 
153
</div>
154
 
155
`;
156
}
157
}
158
 
159
// ===================================
160
// NÆSTE SPØRGSMÅL
161
// ===================================
162
 
163
function continueMission() {
164
 
165
currentQuestionIndex++;
166
 
167
if (
168
currentQuestionIndex <
169
activeMission.questions.length
170
) {
171
 
172
renderMission();
173
return;
174
}
175
 
176
finishMission();
177
}
178
 
179
// ===================================
180
// MISSION AFSLUTTET
181
// ===================================
182
 
183
function finishMission() {
184
 
185
addPoints(50);
186
 
187
if (
188
typeof completeMissionProgress ===
189
"function"
190
) {
191
 
192
completeMissionProgress(
193
activeMission.id
194
);
195
}
196
 
197
showMissionComplete();
198
}
199
 
200
// ===================================
201
// VIS RESULTAT
202
// ===================================
203
 
204
function showMissionComplete() {
205
 
206
const content =
207
document.getElementById(
208
"mission-content"
209
);
210
 
211
content.innerHTML = `
212
 
213
<div class="dialogue-box">
214
 
215
<h1>
216
✅ Mission gennemført
217
</h1>
218
 
219
<p>
220
Du har løst denne opgave
221
og hjulpet en borger med KOL.
222
</p>
223
 
224
<br>
225
 
226
<p>
227
Belønning:
228
</p>
229
 
230
<p>
231
⭐ 50 point
232
</p>
233
 
234
<br>
235
 
236
<button
237
onclick="
238
completeModuleMission()
239
">
240
Tilbage til Anna
241
</button>
242
 
243
</div>
244
 
245
`;
246
}
