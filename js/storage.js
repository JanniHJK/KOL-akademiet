// ===================================
2
// KOL Akademiet 3.0
3
// Storage System
4
// Adventure Edition
5
// ===================================
6
 
7
const STORAGE_KEY = "kol_player";
8
 
9
// ===================================
10
// GEM DATA
11
// ===================================
12
 
13
function savePlayerData(playerData) {
14
 
15
if (!playerData) {
16
return;
17
}
18
 
19
localStorage.setItem(
20
STORAGE_KEY,
21
JSON.stringify(playerData)
22
);
23
}
24
 
25
// ===================================
26
// HENT DATA
27
// ===================================
28
 
29
function loadPlayerData() {
30
 
31
const savedData =
32
localStorage.getItem(
33
STORAGE_KEY
34
);
35
 
36
if (!savedData) {
37
return null;
38
}
39
 
40
try {
41
 
42
return JSON.parse(
43
savedData
44
);
45
 
46
} catch (error) {
47
 
48
console.error(
49
"Kunne ikke læse gemt profil",
50
error
51
);
52
 
53
return null;
54
}
55
}
56
 
57
// ===================================
58
// SLET DATA
59
// ===================================
60
 
61
function resetPlayerData() {
62
 
63
localStorage.removeItem(
64
STORAGE_KEY
65
);
66
}
67
 
68
// ===================================
69
// TJEK PROFIL
70
// ===================================
71
 
72
function playerDataExists() {
73
 
74
return (
75
localStorage.getItem(
76
STORAGE_KEY
77
) !== null
78
);
79
}
80
 
81
// ===================================
82
// STANDARD PROFIL
83
// ===================================
84
 
85
function createDefaultPlayer(name) {
86
 
87
return {
88
 
89
name: name,
90
 
91
level: 1,
92
 
93
xp: 0,
94
 
95
points: 0,
96
 
97
rank: "Ny medarbejder",
98
 
99
badges: [],
100
 
101
completedMissions: [],
102
 
103
moduleProgress: {
104
 
105
lungelaboratoriet: 0,
106
telemedicin: 0,
107
ernæring: 0,
108
medicin: 0,
109
akut: 0
110
 
111
}
112
 
113
};
114
}
115
 
116
// ===================================
117
// EKSPORT
118
// ===================================
119
 
120
function exportPlayerData() {
121
 
122
const player =
123
loadPlayerData();
124
 
125
if (!player) {
126
return null;
127
}
128
 
129
return JSON.stringify(
130
player,
131
null,
132
2
133
);
134
}
135
 
136
// ===================================
137
// IMPORT
138
// ===================================
139
 
140
function importPlayerData(jsonData) {
141
 
142
try {
143
 
144
const player =
145
JSON.parse(
146
jsonData
147
);
148
 
149
savePlayerData(
150
player
151
);
152
 
153
return true;
154
 
155
} catch (error) {
156
 
157
console.error(
158
"Import fejl",
159
error
160
);
161
 
162
return false;
163
}
164
}
