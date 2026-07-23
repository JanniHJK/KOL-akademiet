// ===================================
2
// KOL Akademiet 3.0
3
// App Controller
4
// ===================================
5
 
6
// ===================================
7
// SKÆRME
8
// ===================================
9
 
10
function showScreen(screenId) {
11
 
12
document
13
.querySelectorAll(".screen")
14
.forEach(screen => {
15
screen.classList.add("hidden");
16
});
17
 
18
const target =
19
document.getElementById(screenId);
20
 
21
if (target) {
22
target.classList.remove("hidden");
23
}
24
}
25
 
26
// ===================================
27
// START SPIL
28
// ===================================
29
 
30
function startGame() {
31
 
32
showScreen(
33
"profile-screen"
34
);
35
 
36
}
37
 
38
// ===================================
39
// OPRET PROFIL
40
// ===================================
41
 
42
function createProfile() {
43
 
44
const input =
45
document.getElementById(
46
"player-name"
47
);
48
 
49
if (!input) {
50
return;
51
}
52
 
53
const playerName =
54
input.value.trim();
55
 
56
if (!playerName) {
57
 
58
alert(
59
"Skriv dit navn først."
60
);
61
 
62
return;
63
}
64
 
65
initializeProfile(
66
playerName
67
);
68
 
69
renderPlayerCard();
70
 
71
showScreen(
72
"academy-screen"
73
);
74
}
75
 
76
// ===================================
77
// ÅBN OMRÅDE
78
// ===================================
79
 
80
function openArea(areaId) {
81
 
82
switch (areaId) {
83
 
84
case "lungelaboratoriet":
85
 
86
startModule(
87
"lungelaboratoriet"
88
);
89
 
90
break;
91
 
92
default:
93
 
94
alert(
95
"Dette område er endnu ikke åbent."
96
);
97
 
98
}
99
}
100
 
101
// ===================================
102
// TILBAGE TIL KORT
103
// ===================================
104
 
105
function returnToAcademy() {
106
 
107
renderPlayerCard();
108
 
109
showScreen(
110
"academy-screen"
111
);
112
}
113
 
114
// ===================================
115
// GENINDLÆS SPILLER
116
// ===================================
117
 
118
function tryAutoLogin() {
119
 
120
const savedPlayer =
121
loadPlayerData();
122
 
123
if (!savedPlayer) {
124
return;
125
}
126
 
127
initializeProfile(
128
savedPlayer.name
129
);
130
 
131
renderPlayerCard();
132
 
133
showScreen(
134
"academy-screen"
135
);
136
}
137
 
138
// ===================================
139
// RESET PROFIL
140
// ===================================
141
 
142
function resetGame() {
143
 
144
const result =
145
confirm(
146
"Vil du nulstille din profil?"
147
);
148
 
149
if (!result) {
150
return;
151
}
152
 
153
localStorage.removeItem(
154
"kol_player"
155
);
156
 
157
location.reload();
158
}
159
 
160
// ===================================
161
// STARTSIDE
162
// ===================================
163
 
164
document.addEventListener(
165
"DOMContentLoaded",
166
() => {
167
 
168
showScreen(
169
"welcome-screen"
170
);
171
 
172
setTimeout(() => {
173
tryAutoLogin();
174
}, 300);
175
 
176
}
177
);
