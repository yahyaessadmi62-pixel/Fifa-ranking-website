/******************************************************************
     * AUTHORITATIVE DATASET (CSV pasted by user)
     ******************************************************************/
    const DATASET_CSV = `RK,Team,Points
1,Spain,1877.18
2,Argentina,1873.33
3,France,1870
4,England,1834.12
5,Brazil,1760.46
6,Portugal,1760.38
7,Netherlands,1756.27
8,Belgium,1730.71
9,Germany,1724.15
10,Croatia,1716.88
11,Morocco,1716.34
12,Italy,1702.06
13,Colombia,1701.3
14,united states usa,1681.88
15,Mexico,1675.75
16,Uruguay,1672.62
17,Switzerland,1654.69
18,Japan,1650.12
19,Senegal,1648.07
20,IR Iran,1617.02
21,Denmark,1616.75
22,Korea Republic,1599.45
23,Ecuador,1591.73
24,Austria,1585.51
25,Türkiye,1582.69
26,Australia,1574.01
27,Canada,1559.15
28,Ukraine,1557.47
29,Norway,1553.14
30,Panama,1540.43
31,Poland,1532.04
32,Wales,1529.71
33,Russia,1524.52
34,Algeria,1517.68
35,Egypt,1515.18
36,Scotland,1506.77
37,Serbia,1506.34
38,Nigeria,1502.46
39,Paraguay,1501.5
40,Hungary,1496.29
41,Tunisia,1494.86
42,Côte d'Ivoire,1489.59
43,Sweden,1487.13
44,Czechia,1487
45,Slovakia,1485.65
46,Greece,1480.38
47,Romania,1465.78
48,Venezuela,1465.22
49,Costa Rica,1464.24
50,Uzbekistan,1462.03
51,Peru,1459.57
52,Chile,1457.84
53,Mali,1455.03
54,Qatar,1454.96
55,Slovenia,1447.31
56,Congo DR,1444.16
57,Cameroon,1440.43
58,Iraq,1436.94
59,Republic of Ireland,1436.04
60,Saudi Arabia,1429.48
61,South Africa,1426.73
62,Burkina Faso,1404.81
63,Albania,1401.07
64,Jordan,1388.93
65,Honduras,1379.54
66,North Macedonia,1378.57
67,Cabo Verde,1370.49
68,United Arab Emirates,1370.47
69,Northern Ireland,1366.02
70,Jamaica,1362.46
71,Bosnia and Herzegovina,1362.37
72,Ghana,1351.09
73,Georgia,1347.88
74,Iceland,1344.72
75,Finland,1341.81
76,Bolivia,1329.56
77,israel(occupied palestine),1328.14
78,Gabon,1321.25
79,Oman,1313.46
80,Kosovo,1308.84
81,Guinea,1307.05
82,Curaçao,1302.7
83,Montenegro,1297.09
84,Haiti,1294.49
85,Uganda,1288.01
86,Syria,1282.62
87,New Zealand,1279.25
88,Bulgaria,1272.19
89,Angola,1271.54
90,Bahrain,1258.53
91,Zambia,1258.4
92,Benin,1255.72
93,China PR,1249.06
94,Guatemala,1245.77
95,Palestine,1244.73
96,Thailand,1243.27
97,Equatorial Guinea,1229.09
98,Trinidad and Tobago,1227.32
99,Belarus,1227.09
100,El Salvador,1226.65
101,Tajikistan,1224.93
102,Mozambique,1223.48
103,Luxembourg,1218.91
104,Kyrgyz Republic,1201.22
105,Madagascar,1198.87
106,Armenia,1196.08
107,Vietnam,1189.51
108,Lebanon,1187.96
109,Comoros,1186.41
110,Niger,1185.09
111,Libya,1183.06
112,Tanzania,1181.22
113,Kenya,1179.54
114,Kazakhstan,1173
115,Mauritania,1171.35
116,The Gambia,1161.55
117,Sudan,1154.44
118,Namibia,1153.22
119,Korea DPR,1151.05
120,Sierra Leone,1149.1
121,Malaysia,1145.89
122,Indonesia,1144.73
123,Suriname,1140.54
124,Togo,1140.35
125,Faroe Islands,1135.42
126,Malawi,1133.75
127,Azerbaijan,1132.97
128,Cyprus,1128.5
129,Zimbabwe,1123.69
130,Estonia,1123.11
131,Rwanda,1117.78
132,Nicaragua,1116.86
133,Guinea-Bissau,1108.09
134,Congo,1105.96
135,Kuwait,1105.1
136,Philippines,1090.95
137,Turkmenistan,1087.52
138,Botswana,1084.56
139,Central African Republic,1083.57
140,Latvia,1082.68
141,Liberia,1081.46
142,India,1079.52
143,Dominican Republic,1077.49
144,Lesotho,1065.97
145,Burundi,1060.22
146,Lithuania,1056.34
147,Ethiopia,1055.36
148,Singapore,1050.35
149,Yemen,1049.49
150,New Caledonia,1042.62
151,Guyana,1041.9
152,Solomon Islands,1039.86
153,"Hong Kong, China",1038.14
154,St Kitts and Nevis,1035.25
155,Fiji,1029.7
156,Puerto Rico,1020.07
157,Tahiti,1019.04
158,Moldova,1012.64
159,Eswatini,1010.52
160,Vanuatu,997.01
161,Malta,996.59
162,Afghanistan,991.19
163,Myanmar,990.81
164,Grenada,989.59
165,Antigua and Barbuda,986.58
166,Cuba,980.49
167,St Lucia,980.28
168,South Sudan,977.5
169,Bermuda,976.87
170,Papua New Guinea,974.9
171,St Vincent and the Grenadines,963.74
172,Andorra,949.44
173,Maldives,945.02
174,Chinese Taipei,938.21
175,Montserrat,916.75
176,Mauritius,915.51
177,Chad,914.65
178,Barbados,914.42
179,Cambodia,911.54
180,Bangladesh,911.1
181,Belize,910.74
182,Nepal,902.52
183,Dominica,901.37
184,American Samoa,883.17
185,Mongolia,879.75
186,Cook Islands,877.53
187,Samoa,876.41
188,Brunei Darussalam,875.78
189,São Tomé and Príncipe,871.63
190,Laos,871.16
191,Aruba,867.94
192,Bhutan,867.86
193,Macau,865.29
194,Sri Lanka,857.4
195,Cayman Islands,851.74
196,Djibouti,847.03
197,Tonga,835.64
198,Timor-Leste,835.55
199,Pakistan,833.16
200,Somalia,828.9
201,Guam,823.08
202,Gibraltar,818.03
203,Seychelles,805.33
204,Turks and Caicos Islands,803.98
205,Liechtenstein,799.8
206,Bahamas,796.6
207,US Virgin Islands,776.6
208,British Virgin Islands,776.54
209,Anguilla,759.78
210,San Marino,726.03`;

    /******************************************************************
     * STATE MANAGEMENT (required)
     ******************************************************************/
    let originalRanking = [];
    let currentRanking = [];
    let pendingRanking = null; // array or null
    let historyStack = [];
    let rankingsPrevSnapshot = null; // Rankings page previous snapshot (in-memory only)

    let rankingsSearchQuery = "";


    let batchMatches = [];
    let batchEditingIndex = -1;

    // ---------- Utilities ----------
    const $ = (id) => document.getElementById(id);

    // ---------- Performance helpers (typing responsiveness) ----------
    // Coalesce heavy work so we run at most once per burst. For typing, defer to a new task
    // and then into requestAnimationFrame so the browser can paint the input character first.
    function coalesceAfterPaint(key, fn){
      const pending = coalesceAfterPaint._pending || (coalesceAfterPaint._pending = Object.create(null));
      const latest = coalesceAfterPaint._latest || (coalesceAfterPaint._latest = Object.create(null));
      latest[key] = fn;
      if (pending[key]) return;
      pending[key] = true;
      setTimeout(() => {
        requestAnimationFrame(() => {
          pending[key] = false;
          const f = latest[key];
          if (typeof f === "function") f();
        });
      }, 0);
    }

    function debounceByKey(key, delayMs, fn){
      const timers = debounceByKey._timers || (debounceByKey._timers = Object.create(null));
      clearTimeout(timers[key]);
      timers[key] = setTimeout(fn, delayMs);
    }

    // ---------- Typing activity guard (prevents long tasks while user holds keys) ----------
    const _typingState = { keyDown: false, lastInputAt: 0 };

    function _isTextEntryTarget(el){
      if (!el) return false;
      const tag = (el.tagName || '').toUpperCase();
      if (tag !== 'INPUT' && tag !== 'TEXTAREA') return false;
      const type = (el.type || '').toLowerCase();
      if (type === 'checkbox' || type === 'radio' || type === 'button' || type === 'submit' || type === 'range' || type === 'color' || type === 'file') return false;
      return true;
    }

    // Capture typing signals globally so individual input handlers can stay zero-cost.
    document.addEventListener('keydown', (e) => {
      if (_isTextEntryTarget(e.target)) _typingState.keyDown = true;
    }, true);
    document.addEventListener('keyup', (e) => {
      if (_isTextEntryTarget(e.target)) _typingState.keyDown = false;
    }, true);
    document.addEventListener('focusout', (e) => {
      if (_isTextEntryTarget(e.target)) _typingState.keyDown = false;
    }, true);
    document.addEventListener('input', (e) => {
      if (_isTextEntryTarget(e.target)) _typingState.lastInputAt = performance.now();
    }, true);

    function runAfterTypingIdle(key, idleMs, fn){
      const now0 = performance.now();
      const typingNow = _typingState.keyDown || (now0 - _typingState.lastInputAt) < idleMs;
      const delay = typingNow ? idleMs : 0;
      debounceByKey(key, delay, () => {
        const now = performance.now();
        if (_typingState.keyDown || (now - _typingState.lastInputAt) < idleMs){
          runAfterTypingIdle(key, idleMs, fn);
          return;
        }
        coalesceAfterPaint(key, fn);
      });
    }


    function normalizeName(name){
      return String(name || "")
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();
    }

    function safeNum(value, fallback = 0){
      const n = Number(value);
      return Number.isFinite(n) ? n : fallback;
    }

    function clampMin(n, min){
      return (Number.isFinite(n) && n < min) ? min : n;
    }

    function round2(n){
      return Math.round((n + Number.EPSILON) * 100) / 100;
    }

    function fmt2(n){
      if (!Number.isFinite(n)) return "—";
      return round2(n).toFixed(2);
    }

    function deepCopyTeams(arr){
      return arr.map(t => ({...t}));
    }

    function makeFlagFromISO2(iso2){
      if (!iso2 || iso2.length !== 2) return "🏳️";
      const A = 0x1F1E6;
      const c1 = iso2.toUpperCase().charCodeAt(0) - 65;
      const c2 = iso2.toUpperCase().charCodeAt(1) - 65;
      if (c1 < 0 || c1 > 25 || c2 < 0 || c2 > 25) return "🏳️";
      return String.fromCodePoint(A + c1, A + c2);
    }

    /******************************************************************
     * CONFED + ISO2 INFERENCE MAP
     ******************************************************************/
    const META = {
      // UEFA
      "spain": { confed:"UEFA", iso2:"ES" },
      "portugal": { confed:"UEFA", iso2:"PT" },
      "france": { confed:"UEFA", iso2:"FR" },
      "england": { confed:"UEFA", flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
      "netherlands": { confed:"UEFA", iso2:"NL" },
      "belgium": { confed:"UEFA", iso2:"BE" },
      "germany": { confed:"UEFA", iso2:"DE" },
      "croatia": { confed:"UEFA", iso2:"HR" },
      "italy": { confed:"UEFA", iso2:"IT" },
      "switzerland": { confed:"UEFA", iso2:"CH" },
      "denmark": { confed:"UEFA", iso2:"DK" },
      "austria": { confed:"UEFA", iso2:"AT" },
      "türkiye": { confed:"UEFA", iso2:"TR" },
      "turkiye": { confed:"UEFA", iso2:"TR" },
      "ukraine": { confed:"UEFA", iso2:"UA" },
      "norway": { confed:"UEFA", iso2:"NO" },
      "poland": { confed:"UEFA", iso2:"PL" },
      "wales": { confed:"UEFA", flag:"🏴󠁧󠁢󠁷󠁬󠁳󠁿" },
      "russia": { confed:"UEFA", iso2:"RU" },
      "scotland": { confed:"UEFA", flag:"🏴󠁧󠁢󠁳󠁣󠁴󠁿" },
      "serbia": { confed:"UEFA", iso2:"RS" },
      "hungary": { confed:"UEFA", iso2:"HU" },
      "sweden": { confed:"UEFA", iso2:"SE" },
      "czechia": { confed:"UEFA", iso2:"CZ" },
      "slovakia": { confed:"UEFA", iso2:"SK" },
      "greece": { confed:"UEFA", iso2:"GR" },
      "romania": { confed:"UEFA", iso2:"RO" },
      "slovenia": { confed:"UEFA", iso2:"SI" },
      "republic of ireland": { confed:"UEFA", iso2:"IE" },
      "albania": { confed:"UEFA", iso2:"AL" },
      "north macedonia": { confed:"UEFA", iso2:"MK" },
      "northern ireland": { confed:"UEFA", flag:"🇬🇧" },
      "bosnia and herzegovina": { confed:"UEFA", iso2:"BA" },
      "georgia": { confed:"UEFA", iso2:"GE" },
      "iceland": { confed:"UEFA", iso2:"IS" },
      "finland": { confed:"UEFA", iso2:"FI" },
      "israel(occupied palestine)": { confed:"UEFA", flag:"💩" },
      "kosovo": { confed:"UEFA", iso2:"XK" },
      "montenegro": { confed:"UEFA", iso2:"ME" },
      "bulgaria": { confed:"UEFA", iso2:"BG" },
      "belarus": { confed:"UEFA", iso2:"BY" },
      "luxembourg": { confed:"UEFA", iso2:"LU" },
      "armenia": { confed:"UEFA", iso2:"AM" },
      "kazakhstan": { confed:"UEFA", iso2:"KZ" },
      "azerbaijan": { confed:"UEFA", iso2:"AZ" },
      "cyprus": { confed:"UEFA", iso2:"CY" },
      "estonia": { confed:"UEFA", iso2:"EE" },
      "latvia": { confed:"UEFA", iso2:"LV" },
      "lithuania": { confed:"UEFA", iso2:"LT" },
      "moldova": { confed:"UEFA", iso2:"MD" },
      "malta": { confed:"UEFA", iso2:"MT" },
      "andorra": { confed:"UEFA", iso2:"AD" },
      "gibraltar": { confed:"UEFA", iso2:"GI" },
      "liechtenstein": { confed:"UEFA", iso2:"LI" },
      "san marino": { confed:"UEFA", iso2:"SM" },
      "faroe islands": { confed:"UEFA", iso2:"FO" },

      // CONMEBOL
      "argentina": { confed:"CONMEBOL", iso2:"AR" },
      "brazil": { confed:"CONMEBOL", iso2:"BR" },
      "colombia": { confed:"CONMEBOL", iso2:"CO" },
      "uruguay": { confed:"CONMEBOL", iso2:"UY" },
      "ecuador": { confed:"CONMEBOL", iso2:"EC" },
      "paraguay": { confed:"CONMEBOL", iso2:"PY" },
      "venezuela": { confed:"CONMEBOL", iso2:"VE" },
      "peru": { confed:"CONMEBOL", iso2:"PE" },
      "chile": { confed:"CONMEBOL", iso2:"CL" },
      "bolivia": { confed:"CONMEBOL", iso2:"BO" },
      "guyana": { confed:"CONMEBOL", iso2:"GY" },
      

      // CAF
      "morocco": { confed:"CAF", iso2:"MA" },
      "senegal": { confed:"CAF", iso2:"SN" },
      "algeria": { confed:"CAF", iso2:"DZ" },
      "egypt": { confed:"CAF", iso2:"EG" },
      "nigeria": { confed:"CAF", iso2:"NG" },
      "tunisia": { confed:"CAF", iso2:"TN" },
      "côte d'ivoire": { confed:"CAF", iso2:"CI" },
      "cote d'ivoire": { confed:"CAF", iso2:"CI" },
      "mali": { confed:"CAF", iso2:"ML" },
      "congo dr": { confed:"CAF", iso2:"CD" },
      "cameroon": { confed:"CAF", iso2:"CM" },
      "south africa": { confed:"CAF", iso2:"ZA" },
      "burkina faso": { confed:"CAF", iso2:"BF" },
      "cabo verde": { confed:"CAF", iso2:"CV" },
      "ghana": { confed:"CAF", iso2:"GH" },
      "gabon": { confed:"CAF", iso2:"GA" },
      "guinea": { confed:"CAF", iso2:"GN" },
      "uganda": { confed:"CAF", iso2:"UG" },
      "angola": { confed:"CAF", iso2:"AO" },
      "zambia": { confed:"CAF", iso2:"ZM" },
      "benin": { confed:"CAF", iso2:"BJ" },
      "equatorial guinea": { confed:"CAF", iso2:"GQ" },
      "mozambique": { confed:"CAF", iso2:"MZ" },
      "madagascar": { confed:"CAF", iso2:"MG" },
      "comoros": { confed:"CAF", iso2:"KM" },
      "niger": { confed:"CAF", iso2:"NE" },
      "libya": { confed:"CAF", iso2:"LY" },
      "tanzania": { confed:"CAF", iso2:"TZ" },
      "kenya": { confed:"CAF", iso2:"KE" },
      "mauritania": { confed:"CAF", iso2:"MR" },
      "the gambia": { confed:"CAF", iso2:"GM" },
      "sudan": { confed:"CAF", iso2:"SD" },
      "namibia": { confed:"CAF", iso2:"NA" },
      "sierra leone": { confed:"CAF", iso2:"SL" },
      "malawi": { confed:"CAF", iso2:"MW" },
      "zimbabwe": { confed:"CAF", iso2:"ZW" },
      "rwanda": { confed:"CAF", iso2:"RW" },
      "guinea-bissau": { confed:"CAF", iso2:"GW" },
      "congo": { confed:"CAF", iso2:"CG" },
      "botswana": { confed:"CAF", iso2:"BW" },
      "central african republic": { confed:"CAF", iso2:"CF" },
      "liberia": { confed:"CAF", iso2:"LR" },
      "lesotho": { confed:"CAF", iso2:"LS" },
      "burundi": { confed:"CAF", iso2:"BI" },
      "ethiopia": { confed:"CAF", iso2:"ET" },
      "south sudan": { confed:"CAF", iso2:"SS" },
      "mauritius": { confed:"CAF", iso2:"MU" },
      "chad": { confed:"CAF", iso2:"TD" },
      "djibouti": { confed:"CAF", iso2:"DJ" },
      "seychelles": { confed:"CAF", iso2:"SC" },
      "são tomé and príncipe": { confed:"CAF", iso2:"ST" },
      "sao tomé and príncipe": { confed:"CAF", iso2:"ST" },
      "sao tome and principe": { confed:"CAF", iso2:"ST" },
      "somalia": { confed:"CAF", iso2:"SO" },
      "togo": { confed:"CAF", iso2:"TG" },
      "eswatini": { confed:"CAF", iso2:"SZ" },

      // AFC
      "japan": { confed:"AFC", iso2:"JP" },
      "uzbekistan": { confed:"AFC", flag:"🇺🇿" },
      "ir iran": { confed:"AFC", iso2:"IR" },
      "korea republic": { confed:"AFC", iso2:"KR" },
      "jordan": { confed:"AFC", iso2:"JO" },
      "pakistan": { confed:"AFC", iso2:"PK" },
      "australia": { confed:"AFC", iso2:"AU" },
      "qatar": { confed:"AFC", iso2:"QA" },
      "iraq": { confed:"AFC", iso2:"IQ" },
      "saudi arabia": { confed:"AFC", iso2:"SA" },
      "united arab emirates": { confed:"AFC", iso2:"AE" },
      "oman": { confed:"AFC", iso2:"OM" },
      "syria": { confed:"AFC", iso2:"SY" },
      "bahrain": { confed:"AFC", iso2:"BH" },
      "china pr": { confed:"AFC", iso2:"CN" },
      "palestine": { confed:"AFC", iso2:"PS" },
      "thailand": { confed:"AFC", iso2:"TH" },
      "tajikistan": { confed:"AFC", iso2:"TJ" },
      "kyrgyz republic": { confed:"AFC", iso2:"KG" },
      "vietnam": { confed:"AFC", iso2:"VN" },
      "lebanon": { confed:"AFC", iso2:"LB" },
      "korea dpr": { confed:"AFC", iso2:"KP" },
      "malaysia": { confed:"AFC", iso2:"MY" },
      "indonesia": { confed:"AFC", iso2:"ID" },
      "kuwait": { confed:"AFC", iso2:"KW" },
      "philippines": { confed:"AFC", iso2:"PH" },
      "turkmenistan": { confed:"AFC", iso2:"TM" },
      "india": { confed:"AFC", iso2:"IN" },
      "singapore": { confed:"AFC", iso2:"SG" },
      "yemen": { confed:"AFC", iso2:"YE" },
      "\"hong kong, china\"": { confed:"AFC", iso2:"HK" },
      "hong kong, china": { confed:"AFC", iso2:"HK" },
      "afghanistan": { confed:"AFC", iso2:"AF" },
      "myanmar": { confed:"AFC", iso2:"MM" },
      "maldives": { confed:"AFC", iso2:"MV" },
      "chinese taipei": { confed:"AFC", iso2:"TW" },
      "cambodia": { confed:"AFC", iso2:"KH" },
      "bangladesh": { confed:"AFC", iso2:"BD" },
      "nepal": { confed:"AFC", iso2:"NP" },
      "mongolia": { confed:"AFC", iso2:"MN" },
      "brunei darussalam": { confed:"AFC", iso2:"BN" },
      "laos": { confed:"AFC", iso2:"LA" },
      "bhutan": { confed:"AFC", iso2:"BT" },
      "macau": { confed:"AFC", iso2:"MO" },
      "sri lanka": { confed:"AFC", iso2:"LK" },
      "timor-leste": { confed:"AFC", iso2:"TL" },
      "guam": { confed:"AFC", iso2:"GU" },

      // CONCACAF
      "united states usa": { confed:"CONCACAF", flag:"🇺🇸" },
      "costa rica": { confed:"CONCACAF", iso2:"CR" },
      "mexico": { confed:"CONCACAF", iso2:"MX" },
      "canada": { confed:"CONCACAF", iso2:"CA" },
      "panama": { confed:"CONCACAF", iso2:"PA" },
      "honduras": { confed:"CONCACAF", iso2:"HN" },
      "jamaica": { confed:"CONCACAF", iso2:"JM" },
      "curaçao": { confed:"CONCACAF", iso2:"CW" },
      "curacao": { confed:"CONCACAF", iso2:"CW" },
      "haiti": { confed:"CONCACAF", iso2:"HT" },
      "guatemala": { confed:"CONCACAF", iso2:"GT" },
      "trinidad and tobago": { confed:"CONCACAF", iso2:"TT" },
      "el salvador": { confed:"CONCACAF", iso2:"SV" },
      "nicaragua": { confed:"CONCACAF", iso2:"NI" },
      "suriname": { confed:"CONCACAF", iso2:"SR" },
      "dominican republic": { confed:"CONCACAF", iso2:"DO" },
      "grenada": { confed:"CONCACAF", iso2:"GD" },
      "antigua and barbuda": { confed:"CONCACAF", iso2:"AG" },
      "cuba": { confed:"CONCACAF", iso2:"CU" },
      "st lucia": { confed:"CONCACAF", iso2:"LC" },
      "bermuda": { confed:"CONCACAF", iso2:"BM" },
      "st vincent and the grenadines": { confed:"CONCACAF", iso2:"VC" },
      "dominica": { confed:"CONCACAF", iso2:"DM" },
      "barbados": { confed:"CONCACAF", iso2:"BB" },
      "belize": { confed:"CONCACAF", iso2:"BZ" },
      "aruba": { confed:"CONCACAF", iso2:"AW" },
      "cayman islands": { confed:"CONCACAF", iso2:"KY" },
      "turks and caicos islands": { confed:"CONCACAF", iso2:"TC" },
      "bahamas": { confed:"CONCACAF", iso2:"BS" },
      "us virgin islands": { confed:"CONCACAF", iso2:"VI" },
      "british virgin islands": { confed:"CONCACAF", iso2:"VG" },
      "anguilla": { confed:"CONCACAF", iso2:"AI" },
      "puerto rico": { confed:"CONCACAF", iso2:"PR" },
      "montserrat": { confed:"CONCACAF", iso2:"MS" },
      "st kitts and nevis": { confed:"CONCACAF", iso2:"KN" },

      // OFC
      "new zealand": { confed:"OFC", iso2:"NZ" },
      "new caledonia": { confed:"OFC", iso2:"NC" },
      "solomon islands": { confed:"OFC", iso2:"SB" },
      "fiji": { confed:"OFC", iso2:"FJ" },
      "tahiti": { confed:"OFC", iso2:"PF" },
      "vanuatu": { confed:"OFC", iso2:"VU" },
      "papua new guinea": { confed:"OFC", iso2:"PG" },
      "cook islands": { confed:"OFC", iso2:"CK" },
      "samoa": { confed:"OFC", iso2:"WS" },
      "tonga": { confed:"OFC", iso2:"TO" },
      "american samoa": { confed:"OFC", iso2:"AS" }
    };

    const FLAG_OVERRIDES = {
      "kosovo": "🇽🇰",
      "england": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      "scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      "wales": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    };

    function inferMeta(teamNameRaw){
      const key = normalizeName(teamNameRaw);
      const meta = META[key] || null;

      const confed = meta?.confed || "—";
      let flag = "🏳️";

      if (meta?.flag) flag = meta.flag;
      else if (meta?.iso2) flag = makeFlagFromISO2(meta.iso2);

      if (FLAG_OVERRIDES[key]) flag = FLAG_OVERRIDES[key];

      return { confed, flag };
    }

    // ---------- Parse CSV into baseline ranking ----------
    function parseCSV(csv){
      const lines = csv.split(/\r?\n/).filter(Boolean);
      if (lines.length < 2) return [];
      const out = [];

      // CSV with possible quoted commas: use a tiny CSV line parser
      function splitCSVLine(line){
        const res = [];
        let cur = "";
        let inQ = false;
        for (let i=0;i<line.length;i++){
          const ch = line[i];
          if (ch === '"' ){
            if (inQ && line[i+1] === '"'){ cur += '"'; i++; }
            else inQ = !inQ;
          } else if (ch === ',' && !inQ){
            res.push(cur);
            cur = "";
          } else {
            cur += ch;
          }
        }
        res.push(cur);
        return res.map(s => s.trim());
      }

      for (let i=1;i<lines.length;i++){
        const cols = splitCSVLine(lines[i]);
        if (cols.length < 3) continue;

        const rk = safeNum(cols[0], i);
        const team = String(cols[1] || "").trim().replace(/^"|"$/g,"");
        const pts = safeNum(cols[2], NaN);

        if (!team || !Number.isFinite(pts)) continue;

        const meta = inferMeta(team);
        out.push({
          rk,
          name: team,
          key: normalizeName(team),
          points: pts,
          confed: meta.confed,
          flag: meta.flag,
          isCustom: false
        });
      }

      // ensure sorted by points desc; then assign ranks
      out.sort((a,b)=> b.points - a.points || a.name.localeCompare(b.name));
      out.forEach((t, idx)=> t.rk = idx + 1);
      return out;
    }

    // ---------- localStorage ----------
    const LS_KEYS = {
      current: "fifa_sum_currentRanking_v1",
      history: "fifa_sum_historyStack_v1",
      pending: "fifa_sum_pendingRanking_v1",
      batch: "fifa_sum_batchMatches_v1",
      custom: "fifa_sum_customTeams_v1"
    };

    function loadJSON(key, fallback){
      try{
        const raw = localStorage.getItem(key);
        if (!raw) return fallback;
        return JSON.parse(raw);
      }catch(e){
        return fallback;
      }
    }
    function saveJSON(key, val){
      try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){ console.warn("saveJSON failed", e); }
    }

    function loadCustomTeams(){
      const arr = loadJSON(LS_KEYS.custom, []);
      if (!Array.isArray(arr)) return [];
      return arr
        .filter(x => x && typeof x.name === "string" && Number.isFinite(Number(x.points)))
        .map(x => {
          const meta = inferMeta(x.name);
          return {
            rk: 0,
            name: String(x.name).trim(),
            key: normalizeName(x.name),
            points: Number(x.points),
            confed: x.confed || meta.confed || "—",
            flag: x.flag || meta.flag || "🏳️",
            isCustom: true
          };
        });
    }

    function saveCustomTeamsFromRanking(rankArr){
      const customs = rankArr.filter(t => t.isCustom).map(t => ({
        name: t.name,
        points: t.points,
        confed: t.confed,
        flag: t.flag
      }));
      saveJSON(LS_KEYS.custom, customs);
    }

    function rebuildRanks(arr){
      arr.sort((a,b)=> b.points - a.points || a.name.localeCompare(b.name));
      arr.forEach((t, idx)=> t.rk = idx + 1);
      return arr;
    }

    function getActiveRanking(){
      return pendingRanking ? pendingRanking : currentRanking;
    }

    /******************************************************************
     * FIFA SUM FORMULA
     ******************************************************************/
    function expectedWe(Pa, Pb){
      // We(A) = 1 / (10^(-dr/600) + 1) where dr = Pa - Pb
      const drA = Pa - Pb;
      const weA = 1 / (Math.pow(10, (-drA / 600)) + 1);
      const weB = 1 - weA;
      return { weA, weB, drA, drB: -drA };
    }

    function resultW(result, isPenalties, psoWinner){
      // Normal: win=1, draw=0.5, loss=0
      // PSO: winner=0.75, loser=0.5
      if (!isPenalties){
        if (result === "A_WIN") return { wA: 1, wB: 0 };
        if (result === "B_WIN") return { wA: 0, wB: 1 };
        return { wA: 0.5, wB: 0.5 };
      }
      // PSO implies the match was drawn after extra time; winner is 0.75; loser 0.5
      if (psoWinner === "A") return { wA: 0.75, wB: 0.5 };
      return { wA: 0.5, wB: 0.75 };
    }

    function applyKnockoutNoLoss(Pbefore, Pafter, w){
      // If enabled and it is a loss (W=0) or PSO loss (W=0.5), do not allow points decrease.
      if (Pafter < Pbefore && (w === 0 || w === 0.5)) return Pbefore;
      return Pafter;
    }

    function calcMatch(Pa, Pb, I, result, isPenalties, psoWinner, knockoutNoLoss){
      const { weA, weB, drA, drB } = expectedWe(Pa, Pb);
      const { wA, wB } = resultW(result, isPenalties, psoWinner);

      const deltaA = I * (wA - weA);
      const deltaB = I * (wB - weB);

      let PafterA = Pa + deltaA;
      let PafterB = Pb + deltaB;

      if (knockoutNoLoss){
        PafterA = applyKnockoutNoLoss(Pa, PafterA, wA);
        PafterB = applyKnockoutNoLoss(Pb, PafterB, wB);
      }

      return {
        weA, weB, drA, drB,
        wA, wB,
        deltaA, deltaB,
        PafterA, PafterB
      };
    }

    /******************************************************************
     * TEAM LOOKUP & CUSTOM TEAM CREATION
     ******************************************************************/
    function findTeamByNameInRanking(rankArr, name){
      const key = normalizeName(name);
      return rankArr.find(t => t.key === key) || null;
    }

    function ensureTeamInRanking(rankArr, teamName, pointsOverrideNullable){
      // Returns { team, usedPoints, createdCustom }
      const name = String(teamName || "").trim();
      if (!name) return { team: null, usedPoints: NaN, createdCustom: false };

      const existing = findTeamByNameInRanking(rankArr, name);
      const override = (pointsOverrideNullable === "" || pointsOverrideNullable === null || pointsOverrideNullable === undefined)
        ? null
        : safeNum(pointsOverrideNullable, NaN);

      if (existing){
        const usedPoints = (override !== null && Number.isFinite(override)) ? clampMin(override, 0) : existing.points;
        return { team: existing, usedPoints, createdCustom: false };
      }

      // Not found -> create custom (points must be provided if not in ranking)
      if (override === null || !Number.isFinite(override)){
        return { team: null, usedPoints: NaN, createdCustom: false };
      }

      const meta = inferMeta(name);
      const custom = {
        rk: 0,
        name,
        key: normalizeName(name),
        points: clampMin(override, 0),
        confed: meta.confed || "—",
        flag: meta.flag || "🏳️",
        isCustom: true
      };
      rankArr.push(custom);
      rebuildRanks(rankArr);
      saveCustomTeamsFromRanking(rankArr);
      return { team: custom, usedPoints: custom.points, createdCustom: true };
    }

    /******************************************************************
     * CONFEDERATION RESTRICTIONS (for CAF/UEFA/etc finals)
     ******************************************************************/
    function shouldDisableConfedCompetitions(confA, confB){
      if (!confA || !confB || confA === "—" || confB === "—") return false;
      return confA !== confB;
    }

    function enforceImportanceConfedRule(selectEl, hintEl, confA, confB){
      const cross = shouldDisableConfedCompetitions(confA, confB);

      Array.from(selectEl.options).forEach(o => { o.disabled = false; });

      if (!cross){
        hintEl.style.display = "none";
        return;
      }

      Array.from(selectEl.options).forEach(o => {
        const t = o.dataset?.type;
        if (t === "confedQual" || t === "confedFinals"){
          o.disabled = true;
        }
      });

      const selected = selectEl.selectedOptions?.[0];
      if (selected && selected.disabled){
        const next = Array.from(selectEl.options).find(o => !o.disabled && o.value && !o.defaultSelected) ||
                     Array.from(selectEl.options).find(o => !o.disabled && o.value);
        if (next) selectEl.value = next.value;
      }

      hintEl.style.display = "block";
    }

    /******************************************************************
     * UI: NAV + DRAWERS
     ******************************************************************/
    function closeLeft(){
      $("leftDrawer").classList.remove("open");
      syncOverlay();
    }
    function openLeft(){
      $("leftDrawer").classList.add("open");
      syncOverlay();
    }

    function closeRight(){
      toggleRight(false);
    }

    function syncOverlay(){
      const show = $("leftDrawer").classList.contains("open") || $("rightPanel").classList.contains("open");
      $("overlay").classList.toggle("show", show);
    }

    function toggleRight(open){
      const rp = $("rightPanel");
      const isOpen = rp.classList.contains("open");
      const next = (typeof open === "boolean") ? open : !isOpen;
      rp.classList.toggle("open", next);
      syncOverlay();
    }

    function setTopBar(title, subtitle){
      $("topTitle").textContent = title;
      $("topSubtitle").textContent = subtitle;
    }

    function setView(viewId){
      Array.from(document.querySelectorAll("#nav button")).forEach(btn => {
        btn.classList.toggle("active", btn.dataset.view === viewId);
      });

      Array.from(document.querySelectorAll(".view")).forEach(v => {
        v.classList.toggle("active", v.id === viewId);
      });

      if (viewId === "homeView") setTopBar("Home", "Welcome • Official FIFA SUM system");
      if (viewId === "singleView") setTopBar("Single Match", "Calculate points • Preview ranking • Apply when ready");
      if (viewId === "batchView") setTopBar("Batch Mode", "Sequence of matches • Preview full ranking • Apply to commit");
      if (viewId === "rankingsView") setTopBar("Rankings", "Live current ranking • Updates after Apply");
      if (viewId === "guideView") setTopBar("Guide / FAQ", "Understand the SUM formula • Penalties • Knockout rule");

      closeLeft();
      renderAllTables();
      refreshSingleFromInputs();
      renderBatchList();
    }

    /******************************************************************
     * UI: SEARCHABLE PICKERS
     ******************************************************************/
    function escapeHTML(s){
      return String(s || "")
        .replaceAll("&","&amp;")
        .replaceAll("<","&lt;")
        .replaceAll(">","&gt;")
        .replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
    }

    function buildPicker(dropId, queryText, onPick){
      const drop = $(dropId);
      const q = normalizeName(queryText);
      const list = currentRanking
        .filter(t => !q || t.key.includes(q))
        .slice(0, 60);

      drop.innerHTML = "";
      list.forEach(t => {
        const div = document.createElement("div");
        div.className = "opt";
        div.innerHTML = `
          <div class="optLeft">
            <span class="flag">${t.flag || "🏳️"}</span>
            <div style="min-width:0;">
              <div class="optName">${escapeHTML(t.name)}</div>
              <div class="optMeta">${escapeHTML(t.confed)} • #${t.rk}</div>
            </div>
          </div>
          <div class="optMeta">${fmt2(t.points)}</div>
        `;
        div.addEventListener("click", () => onPick(t));
        drop.appendChild(div);
      });

      if (list.length === 0){
        const div = document.createElement("div");
        div.className = "opt";
        div.innerHTML = `<div class="optMeta">No results. You can type a custom team name.</div>`;
        drop.appendChild(div);
      }
    }

    function openDropdown(dropId){ $(dropId).classList.add("open"); }
    function closeDropdown(dropId){ $(dropId).classList.remove("open"); }
    function closeAllDropdowns(){
      ["singleA_drop","singleB_drop","batchA_drop","batchB_drop"].forEach(id => closeDropdown(id));
    }

    /******************************************************************
     * RENDER TABLES (current + pending)
     ******************************************************************/
    function renderRankingTable(tbodyId, rankArr, filterText){
      const tb = $(tbodyId);
      if (!tb) return;
      const q = normalizeName(filterText || "");
      const view = rankArr
        .slice()
        .sort((a,b)=> a.rk - b.rk)
        .filter(t => !q || t.key.includes(q) || normalizeName(t.name).includes(q));

      tb.innerHTML = "";
      view.forEach(t => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="tdRank">${t.rk}</td>
          <td class="tdFlag">${t.flag || "🏳️"}</td>
          <td>${escapeHTML(t.name)}${t.isCustom ? ' <span class="pill" style="margin-left:6px;">Custom</span>' : ""}</td>
          <td class="tdPts">${fmt2(t.points)}</td>
        `;
        tb.appendChild(tr);
      });
    }

    function renderRankingsPageTable(rankArr, filterText){
      const tb = $("rankingsPageBody");
      if (!tb) return;

      const q = normalizeName(filterText || "");

      const view = (rankArr || [])
        .slice()
        .sort((a,b)=> a.rk - b.rk)
        .filter(t => !q || (t.key && t.key.includes(q)) || normalizeName(t.name).includes(q));

      // Build previous snapshot map (if any)
      const prev = rankingsPrevSnapshot;
      const prevMap = new Map();
      if (prev && Array.isArray(prev) && prev.length){
        prev.forEach(t => {
          if (!t) return;
          const k = t.key || normalizeName(t.name || "");
          if (!k) return;
          prevMap.set(k, { rk: t.rk, points: t.points });
        });
      }

      tb.innerHTML = "";
      view.forEach(t => {
        const key = t.key || normalizeName(t.name || "");

        // Movement indicator (Rankings page only)
        let moveHTML = "";
        if (prevMap.size && prevMap.has(key)){
          const last = prevMap.get(key);
          if (typeof last.rk === "number" && typeof t.rk === "number"){
            if (t.rk < last.rk) moveHTML = `<span class="rkMove rkUp" title="Moved up">▲</span>`;
            else if (t.rk > last.rk) moveHTML = `<span class="rkMove rkDown" title="Moved down">▼</span>`;
          }
        }

        const lastInfo = prevMap.has(key) ? prevMap.get(key) : null;
        const detailsHTML = (lastInfo && typeof lastInfo.rk === "number" && typeof lastInfo.points === "number")
          ? `<div class="rkDetailsLine"><span class="rkDetailsLabel">Last rank</span> <b>${lastInfo.rk}</b></div>
             <div class="rkDetailsLine"><span class="rkDetailsLabel">Last points</span> <b>${fmt2(lastInfo.points)}</b></div>`
          : `<div class="rkDetailsEmpty">No previous data yet</div>`;

        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td class="tdRank"><span class="rkRankWrap"><span class="rkRankNum">${t.rk}</span>${moveHTML}</span></td>
          <td class="tdFlag">${t.flag || "🏳️"}</td>
          <td>${escapeHTML(t.name)}${t.isCustom ? ' <span class="pill" style="margin-left:6px;">Custom</span>' : ""}</td>
          <td class="tdPts rkPtsCell">
            <span class="rkPtsNum">${fmt2(t.points)}</span>
            <button class="rkChevron" type="button" aria-label="Details" aria-expanded="false">›</button>
          </td>
        `;
        tb.appendChild(tr);

        // Details row (collapsed by default)
        const trD = document.createElement("tr");
        trD.className = "rkDetailsRow";
        trD.style.display = "none";
        trD.innerHTML = `
          <td colspan="4" class="rkDetailsCell">
            <div class="rkDetailsBox">
              ${detailsHTML}
            </div>
          </td>
        `;
        tb.appendChild(trD);

        const btn = tr.querySelector(".rkChevron");
        if (btn){
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            const isOpen = trD.style.display !== "none";
            trD.style.display = isOpen ? "none" : "";
            btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
            btn.classList.toggle("is-open", !isOpen);
          });
        }
      });
    }

    function renderAllTables(){
      $("currentCountPill").textContent = `${currentRanking.length} teams`;
      renderRankingTable("rightCurrentBody", currentRanking, $("rightSearchCurrent").value);

      // Rankings page (full list)
      const rankingsCountPillEl = $("rankingsCountPill");
      if (rankingsCountPillEl) rankingsCountPillEl.textContent = `${currentRanking.length} teams`;
      renderRankingsPageTable(currentRanking, rankingsSearchQuery);

      if (pendingRanking){
        $("rankStatePill").textContent = "Pending";
      } else {
        $("rankStatePill").textContent = "Current";
      }

      $("historyMini").textContent = `History: ${historyStack.length}`;
    }

    /******************************************************************
     * RIGHT PANEL: APPLY / UNDO / RESET
     ******************************************************************/
    function pushHistorySnapshot(){
      const MAX_HISTORY = 50;
      if (historyStack.length >= MAX_HISTORY) historyStack.shift();
      historyStack.push(deepCopyTeams(currentRanking));
      $("historyMini").textContent = `History: ${historyStack.length}`;
      saveJSON(LS_KEYS.history, historyStack);
    }

    function captureRankingsPrevSnapshot(){
      // Used ONLY by Rankings page UI (movement arrows + details)
      rankingsPrevSnapshot = deepCopyTeams(currentRanking);
    }

    function clearRankingsPrevSnapshot(){
      // Reset should behave like first load on Rankings page (no movement arrows / no last data)
      rankingsPrevSnapshot = null;
    }

    function setPending(rankArrOrNull, defer){
      pendingRanking = rankArrOrNull ? rebuildRanks(deepCopyTeams(rankArrOrNull)) : null;

      // Persisting + rendering can be expensive (large arrays + big tables). During typing, defer them.
      if (defer){
        debounceByKey("pendingSave", 350, () => {
          saveJSON(LS_KEYS.pending, pendingRanking);
        });
        coalesceAfterPaint("renderAllTables", renderAllTables);
        return;
      }

      saveJSON(LS_KEYS.pending, pendingRanking);
      renderAllTables();
    }

    function applyPending(){
      if (!pendingRanking) return;
      captureRankingsPrevSnapshot();
      pushHistorySnapshot();
      currentRanking = rebuildRanks(deepCopyTeams(pendingRanking));
      saveJSON(LS_KEYS.current, currentRanking);
      saveCustomTeamsFromRanking(currentRanking);

      setPending(null);
      renderAllTables();
      refreshSingleFromInputs();
      $("batchSimStatus").textContent = "Committed via Apply";
    }

    function undo(){
      if (historyStack.length === 0) return;
      captureRankingsPrevSnapshot();
      const last = historyStack.pop();
      currentRanking = rebuildRanks(deepCopyTeams(last));
      saveJSON(LS_KEYS.current, currentRanking);
      saveCustomTeamsFromRanking(currentRanking);

      $("historyMini").textContent = `History: ${historyStack.length}`;
      saveJSON(LS_KEYS.history, historyStack);

      setPending(null);
      renderAllTables();
      refreshSingleFromInputs();
      $("batchSimStatus").textContent = "Undo complete";
    }

    function resetAll(){
      clearRankingsPrevSnapshot();
      const customs = loadCustomTeams();
      currentRanking = rebuildRanks(deepCopyTeams(originalRanking).concat(customs));
      saveJSON(LS_KEYS.current, currentRanking);
      saveCustomTeamsFromRanking(currentRanking);

      historyStack = [];
      saveJSON(LS_KEYS.history, historyStack);
      $("historyMini").textContent = "History: 0";

      batchMatches = [];
      saveJSON(LS_KEYS.batch, batchMatches);
      batchEditingIndex = -1;

      setPending(null);
      renderBatchList();
      renderAllTables();
      refreshSingleFromInputs();

      $("batchSimStatus").textContent = "Reset done";
    }

    /******************************************************************
     * SINGLE MATCH: READ INPUTS + CALC + PENDING PREVIEW
     ******************************************************************/
    function setWarn(boxId, msg){
      const el = $(boxId);
      if (!msg){
        el.classList.remove("show");
        el.textContent = "";
      } else {
        el.textContent = msg;
        el.classList.add("show");
      }
    }

    function setDeltaPill(el, delta){
      el.classList.remove("pos","neg","neu","flash");
      if (!Number.isFinite(delta)){
        el.textContent = "—";
        el.classList.add("neu");
        return;
      }
      const s = (delta >= 0 ? "+" : "") + fmt2(delta);
      el.textContent = s;
      el.classList.add(delta > 0 ? "pos" : (delta < 0 ? "neg" : "neu"));
      el.classList.add("flash");
      setTimeout(()=> el.classList.remove("flash"), 500);
    }

    function updateSingleOutputVisuals(aName, bName, aFlag, bFlag, Pa, Pb, PafterA, PafterB, dA, dB){
      $("single_outAName").textContent = aName || "Team A";
      $("single_outBName").textContent = bName || "Team B";
      $("single_outAFlag").textContent = aFlag || "🏳️";
      $("single_outBFlag").textContent = bFlag || "🏳️";
      $("single_outAPbefore").textContent = fmt2(Pa);
      $("single_outBPbefore").textContent = fmt2(Pb);
      $("single_outAPafter").textContent = Number.isFinite(PafterA) ? fmt2(PafterA) : "—";
      $("single_outBPafter").textContent = Number.isFinite(PafterB) ? fmt2(PafterB) : "—";
      setDeltaPill($("single_outADelta"), dA);
      setDeltaPill($("single_outBDelta"), dB);
    }

    function refreshSingleFromInputs(){
      const afterWrapEl = $("single_afterWrap");
      const isPen = $("single_isPenalties").checked;
      $("psoRule").textContent = isPen ? "ON" : "OFF";

      const ko = $("single_isKnockoutFinals").checked;
      $("koRule").textContent = ko ? "ON" : "OFF";
      $("singleModePill").textContent = "Mode: " + (isPen ? "Penalties" : (ko ? "Knockout" : "Standard"));

      const nameA = ($("singleA_name").value || "").trim() || ($("singleA_pick").value || "").trim() || "Team A";
      const nameB = ($("singleB_name").value || "").trim() || ($("singleB_pick").value || "").trim() || "Team B";

      const ptsA = clampMin(safeNum($("singleA_pts").value, NaN), 0);
      const ptsB = clampMin(safeNum($("singleB_pts").value, NaN), 0);

      // conf + flag from current ranking if found, else infer
      const tA = findTeamByNameInRanking(currentRanking, nameA);
      const tB = findTeamByNameInRanking(currentRanking, nameB);
      const metaA = tA ? {confed:tA.confed, flag:tA.flag} : inferMeta(nameA);
      const metaB = tB ? {confed:tB.confed, flag:tB.flag} : inferMeta(nameB);

      $("singleA_conf").value = metaA.confed || "—";
      $("singleB_conf").value = metaB.confed || "—";

      // enforce confed restriction
      enforceImportanceConfedRule($("single_importance"), $("confedHintSingle"), metaA.confed, metaB.confed);

      const I = safeNum($("single_importance").value, NaN);
      const result = $("single_result").value;
      // Derive PSO winner from Match Result when penalties are enabled.
      // A_WIN => Team A wins on penalties, B_WIN => Team B wins on penalties.
      // DRAW is not valid with PSO; we default to A but show a warning.
      let psoWinner = "A";
      const psoDrawInvalid = isPen && result === "DRAW";
      if (isPen){
        psoWinner = (result === "B_WIN") ? "B" : "A";
      }

      // status pills
      $("single_flagsPill").textContent = `${metaA.flag || "🏳️"} ${nameA} vs ${metaB.flag || "🏳️"} ${nameB}`;

      if (!Number.isFinite(ptsA) || !Number.isFinite(ptsB)){
        $("single_statusPill").textContent = "Enter valid points for both teams";
        setWarn("single_warnBox", "Points must be valid non-negative numbers for Team A and Team B.");
        updateSingleOutputVisuals(nameA, nameB, metaA.flag, metaB.flag, ptsA, ptsB, NaN, NaN, NaN, NaN);
        if (afterWrapEl) afterWrapEl.style.display = "none";
        return;
      }
      if (!Number.isFinite(I)){
        $("single_statusPill").textContent = "Choose match importance (I)";
        setWarn("single_warnBox", "Select a match importance value (I) to calculate.");
        updateSingleOutputVisuals(nameA, nameB, metaA.flag, metaB.flag, ptsA, ptsB, NaN, NaN, NaN, NaN);
        $("single_afterWrap").style.display = "none";
        return;
      }
      if (normalizeName(nameA) === normalizeName(nameB)){
        $("single_statusPill").textContent = "Teams must be different";
        setWarn("single_warnBox", "Team A and Team B cannot be the same team.");
        updateSingleOutputVisuals(nameA, nameB, metaA.flag, metaB.flag, ptsA, ptsB, NaN, NaN, NaN, NaN);
        if (afterWrapEl) afterWrapEl.style.display = "none";
        return;
      }

      // compute
      setWarn("single_warnBox", "");
      if (psoDrawInvalid){
        setWarn("single_warnBox", "When PSO is enabled, choose Team A Win or Team B Win (draw is not allowed).");
      }
      $("single_statusPill").textContent = "Calculated (preview in ranking panel)";
      const out = calcMatch(ptsA, ptsB, I, result, isPen, psoWinner, ko);

      // Advanced panel (must stay as-is, only updating values)
      $("wePill").textContent = `We(A)=${round2(out.weA).toFixed(4)} • We(B)=${round2(out.weB).toFixed(4)}`;
      $("drA").textContent = out.drA.toFixed(2);
      $("drB").textContent = out.drB.toFixed(2);
      $("iVal").textContent = String(I);
      $("outAW").textContent = String(out.wA);
      $("outBW").textContent = String(out.wB);

      updateSingleOutputVisuals(
        nameA, nameB,
        metaA.flag, metaB.flag,
        ptsA, ptsB,
        out.PafterA, out.PafterB,
        out.PafterA - ptsA, out.PafterB - ptsB
      );

      // Build pending ranking (preview)
      const temp = deepCopyTeams(currentRanking);

      function ensureTempTeam(tempArr, nm, startPts){
        const key = normalizeName(nm);
        let t = tempArr.find(x => x.key === key);
        if (!t){
          const meta = inferMeta(nm);
          t = {
            rk: 0,
            name: nm,
            key,
            points: clampMin(startPts, 0),
            confed: meta.confed || "—",
            flag: meta.flag || "🏳️",
            isCustom: true
          };
          tempArr.push(t);
        } else {
          // reflect manual start points for the simulation only (no commit yet)
          t.points = clampMin(startPts, 0);
          t.confed = t.confed || inferMeta(nm).confed;
          t.flag = t.flag || inferMeta(nm).flag;
        }
        return t;
      }

      const ta = ensureTempTeam(temp, nameA, ptsA);
      const tb = ensureTempTeam(temp, nameB, ptsB);

      ta.points = out.PafterA;
      tb.points = out.PafterB;

      rebuildRanks(temp);
      setPending(temp, true);

      // "Show ranking after this match" toggle removed (UI cleanup).
      // Keep the built-in after table hidden by default.
      if (afterWrapEl) afterWrapEl.style.display = "none";
    }

    /*********************************************************************************************************************************
     * BATCH MODE: CRUD + SIMULATION
     ******************************************************************/
    function batchClearForm(){
      $("batchA_pick").value = "";
      $("batchB_pick").value = "";
      $("batchA_pts").value = "";
      $("batchB_pts").value = "";
      $("batch_importance").value = "";
      $("batch_result").value = "A_WIN";
      $("batch_isKnockoutFinals").checked = false;
      $("batch_isPenalties").checked = false;
      batchEditingIndex = -1;
      $("batchEditPill").textContent = "New";
      setWarn("batch_warnBox", "");
      enforceImportanceConfedRule($("batch_importance"), $("confedHintBatch"), "—", "—");
    }

    function batchReadForm(){
      const aName = ($("batchA_pick").value || "").trim();
      const bName = ($("batchB_pick").value || "").trim();
      const aOv = ($("batchA_pts").value ?? "").toString().trim();
      const bOv = ($("batchB_pts").value ?? "").toString().trim();

      const I = safeNum($("batch_importance").value, NaN);
      const result = $("batch_result").value;
      const ko = $("batch_isKnockoutFinals").checked;
      const isPen = $("batch_isPenalties").checked;
      // Derive PSO winner from Result when penalties are enabled.
      // A_WIN => Team A wins on penalties, B_WIN => Team B wins on penalties.
      const psoWinner = isPen ? (result === "B_WIN" ? "B" : "A") : "A";

      return { aName, bName, aOv, bOv, I, result, ko, isPen, psoWinner };
    }

    function batchValidate(m){
      if (!m.aName || !m.bName) return "Please enter Team A and Team B.";
      if (normalizeName(m.aName) === normalizeName(m.bName)) return "Team A and Team B must be different.";
      if (!Number.isFinite(m.I)) return "Select match importance (I).";

      // If a team is not in ranking, override is required to create it
      const aIn = !!findTeamByNameInRanking(currentRanking, m.aName);
      const bIn = !!findTeamByNameInRanking(currentRanking, m.bName);

      const aHas = m.aOv !== "" && Number.isFinite(safeNum(m.aOv, NaN));
      const bHas = m.bOv !== "" && Number.isFinite(safeNum(m.bOv, NaN));

      if (!aIn && !aHas) return "Team A is not in the ranking library — provide an override points value to add it as Custom.";
      if (!bIn && !bHas) return "Team B is not in the ranking library — provide an override points value to add it as Custom.";
      if (aHas && safeNum(m.aOv, 0) < 0) return "Team A override points must be non-negative.";
      if (bHas && safeNum(m.bOv, 0) < 0) return "Team B override points must be non-negative.";
      if (m.isPen && m.result === "DRAW") return "When PSO is enabled, choose Team A Win or Team B Win (draw is not allowed).";
      return "";
    }

    function renderBatchList(){
      $("batchCountPill").textContent = `${batchMatches.length} matches`;
      const list = $("batchList");
      list.innerHTML = "";

      if (batchMatches.length === 0){
        const empty = document.createElement("div");
        empty.className = "hint";
        empty.textContent = "No matches added yet. Add matches on the left, then simulate all.";
        list.appendChild(empty);
        return;
      }

      batchMatches.forEach((m, idx) => {
        const tA = findTeamByNameInRanking(currentRanking, m.aName) || { flag: inferMeta(m.aName).flag, confed: inferMeta(m.aName).confed };
        const tB = findTeamByNameInRanking(currentRanking, m.bName) || { flag: inferMeta(m.bName).flag, confed: inferMeta(m.bName).confed };

        const row = document.createElement("div");
        row.className = "matchRow";

        const resTxt = m.isPen
          ? (m.psoWinner === "A" ? "A wins (PSO)" : "B wins (PSO)")
          : (m.result === "A_WIN" ? "A win" : (m.result === "B_WIN" ? "B win" : "Draw"));

        row.innerHTML = `
          <div class="mLeft">
            <div class="teamLine">
              <span class="flag">${tA.flag || "🏳️"}</span>
              <div class="tName">${escapeHTML(m.aName)}</div>
            </div>
            <span class="vs">vs</span>
            <div class="teamLine">
              <span class="flag">${tB.flag || "🏳️"}</span>
              <div class="tName">${escapeHTML(m.bName)}</div>
            </div>
            <div class="mMeta">I=${m.I} • ${escapeHTML(resTxt)}${m.ko ? " • KO no-loss" : ""}</div>
          </div>
          <div class="mBtns">
            <button class="btn secondary" type="button" data-bedit="${idx}">Edit</button>
            <button class="btn danger" type="button" data-bdel="${idx}">Delete</button>
          </div>
        `;

        list.appendChild(row);
      });

      // attach handlers
      Array.from(list.querySelectorAll("[data-bedit]")).forEach(btn => {
        btn.addEventListener("click", () => {
          const i = safeNum(btn.getAttribute("data-bedit"), -1);
          if (i < 0) return;
          const m = batchMatches[i];
          batchEditingIndex = i;
          $("batchEditPill").textContent = `Editing #${i+1}`;

          $("batchA_pick").value = m.aName;
          $("batchB_pick").value = m.bName;
          $("batchA_pts").value = m.aOv ?? "";
          $("batchB_pts").value = m.bOv ?? "";
          $("batch_importance").value = String(m.I);
          $("batch_result").value = m.result;
          $("batch_isKnockoutFinals").checked = !!m.ko;
          $("batch_isPenalties").checked = !!m.isPen;

          // enforce confed rule based on current known confeds
          const metaA = (findTeamByNameInRanking(currentRanking, m.aName) || inferMeta(m.aName));
          const metaB = (findTeamByNameInRanking(currentRanking, m.bName) || inferMeta(m.bName));
          enforceImportanceConfedRule($("batch_importance"), $("confedHintBatch"), metaA.confed, metaB.confed);

          setWarn("batch_warnBox", "");
        });
      });

      Array.from(list.querySelectorAll("[data-bdel]")).forEach(btn => {
        btn.addEventListener("click", () => {
          const i = safeNum(btn.getAttribute("data-bdel"), -1);
          if (i < 0) return;
          batchMatches.splice(i, 1);
          saveJSON(LS_KEYS.batch, batchMatches);
          if (batchEditingIndex === i) {
            batchEditingIndex = -1;
          } else if (batchEditingIndex > i) {
            batchEditingIndex--;
          }
          $("batchEditPill").textContent = "New";
          renderBatchList();
        });
      });
    }

    function simulateBatchAll(){
      if (batchMatches.length === 0){
        $("batchSimStatus").textContent = "Nothing to simulate";
        return;
      }

      // working copy from current (do not commit until Apply)
      const work = deepCopyTeams(currentRanking);

      function ensureWorkTeam(workArr, nm, overrideStr){
        const key = normalizeName(nm);
        let t = workArr.find(x => x.key === key);
        const ov = (overrideStr === "" || overrideStr === null || overrideStr === undefined) ? null : safeNum(overrideStr, NaN);

        if (!t){
          if (ov === null || !Number.isFinite(ov)) return null; // cannot create without override
          const meta = inferMeta(nm);
          t = {
            rk: 0,
            name: nm,
            key,
            points: clampMin(ov, 0),
            confed: meta.confed || "—",
            flag: meta.flag || "🏳️",
            isCustom: true
          };
          workArr.push(t);
          return t;
        }

        // apply override if provided
        if (ov !== null && Number.isFinite(ov)){
          t.points = clampMin(ov, 0);
        }
        // keep meta consistent
        if (!t.confed || t.confed === "—") t.confed = inferMeta(nm).confed;
        if (!t.flag || t.flag === "🏳️") t.flag = inferMeta(nm).flag;
        return t;
      }

      for (const m of batchMatches){
        const a = ensureWorkTeam(work, m.aName, m.aOv);
        const b = ensureWorkTeam(work, m.bName, m.bOv);
        if (!a || !b) continue;

        // (Optional) confed rule enforcement is UI-level; simulation logic stays same
        const out = calcMatch(a.points, b.points, m.I, m.result, m.isPen, m.psoWinner, m.ko);
        a.points = out.PafterA;
        b.points = out.PafterB;
      }

      rebuildRanks(work);
      setPending(work);
      $("batchSimStatus").textContent = "Simulated (preview in right panel)";
    }

    /******************************************************************
     * INIT: DATASET INTEGRATION + LOAD SAVED STATE
     ******************************************************************/
    function validateTeamObj(t){
      if (!t || typeof t.name !== "string") return false;
      if (!Number.isFinite(Number(t.points))) return false;
      return true;
    }

    function integrateSavedCurrent(saved, baseline, customs){
      // Build from baseline + customs, then overlay saved points for known teams (non-custom),
      // and keep saved custom teams.
      const mapBase = new Map(baseline.map(t => [t.key, {...t}]));
      const out = [];

      // keep customs: from saved first, else from customs store
      const savedArr = Array.isArray(saved) ? saved.filter(validateTeamObj) : [];

      // 1) apply saved entries if they match baseline or are custom
      for (const s of savedArr){
        const key = normalizeName(s.name);
        const isCustom = !!s.isCustom;

        if (isCustom){
          const meta = inferMeta(s.name);
          out.push({
            rk: 0,
            name: String(s.name).trim(),
            key,
            points: clampMin(Number(s.points), 0),
            confed: s.confed || meta.confed || "—",
            flag: s.flag || meta.flag || "🏳️",
            isCustom: true
          });
          continue;
        }

        const base = mapBase.get(key);
        if (!base) continue;

        // keep saved points (applied history), but refresh official meta from baseline
        out.push({
          rk: 0,
          name: base.name,
          key: base.key,
          points: clampMin(Number(s.points), 0),
          confed: base.confed,
          flag: base.flag,
          isCustom: false
        });

        mapBase.delete(key);
      }

      // 2) add remaining baseline teams not present in saved
      for (const [, b] of mapBase){
        out.push({
          rk: 0,
          name: b.name,
          key: b.key,
          points: b.points,
          confed: b.confed,
          flag: b.flag,
          isCustom: false
        });
      }

      // 3) add stored customs that aren’t already included (avoid duplicates)
      const outKeys = new Set(out.map(t => t.key));
      for (const c of customs){
        if (!outKeys.has(c.key)){
          out.push({...c, rk:0});
        }
      }

      rebuildRanks(out);
      return out;
    }

    function initApp(){
      // baseline from authoritative dataset
      originalRanking = parseCSV(DATASET_CSV);

      // merge any stored customs (must not be deleted)
      const storedCustoms = loadCustomTeams();

      // load saved current + history + pending + batch
      const savedCurrent = loadJSON(LS_KEYS.current, null);
      const savedHistory = loadJSON(LS_KEYS.history, []);
      const savedPending = loadJSON(LS_KEYS.pending, null);
      const savedBatch = loadJSON(LS_KEYS.batch, []);

      currentRanking = integrateSavedCurrent(savedCurrent, originalRanking, storedCustoms);

      // history stack validation: keep only arrays of valid teams
      historyStack = Array.isArray(savedHistory)
        ? savedHistory.filter(arr => Array.isArray(arr) && arr.every(validateTeamObj)).slice(0, 50)
        : [];

      // pending ranking validation: must look like an array of teams
      if (Array.isArray(savedPending) && savedPending.every(validateTeamObj)){
        // pending should be derived from current; still allow load
        pendingRanking = rebuildRanks(deepCopyTeams(savedPending));
      } else {
        pendingRanking = null;
      }

      batchMatches = Array.isArray(savedBatch) ? savedBatch : [];
      batchEditingIndex = -1;

      // Ensure custom teams saved back (in case baseline updated flags/confeds)
      saveCustomTeamsFromRanking(currentRanking);
      saveJSON(LS_KEYS.current, currentRanking);
      saveJSON(LS_KEYS.history, historyStack);
      saveJSON(LS_KEYS.pending, pendingRanking);
      saveJSON(LS_KEYS.batch, batchMatches);

      // initial UI render
      renderAllTables();
      renderBatchList();
      refreshSingleFromInputs();
      batchClearForm();
    }

    /******************************************************************
     * EVENT WIRING
     ******************************************************************/
    // Left drawer
    $("openLeftBtn").addEventListener("click", openLeft);
    $("closeLeftBtn").addEventListener("click", closeLeft);
    $("overlay").addEventListener("click", () => { closeLeft(); closeRight(); });

    // Nav buttons
    Array.from(document.querySelectorAll("#nav button")).forEach(btn => {
      btn.addEventListener("click", () => setView(btn.dataset.view));
    });

    // Home actions
    $("goSingleBtn").addEventListener("click", () => setView("singleView"));
    $("goBatchBtn").addEventListener("click", () => setView("batchView"));

    // Right panel toggle
    $("rightHandle").addEventListener("click", () => toggleRight());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeLeft(); closeRight(); }
    });
    $("applyBtn").addEventListener("click", applyPending);
    $("undoBtn").addEventListener("click", undo);
    $("resetBtnGlobal").addEventListener("click", resetAll);

    // Rankings page Reset button (same behavior as right sidebar Reset)
    const rankingsResetBtn = $("rankingsResetBtn");
    if (rankingsResetBtn) rankingsResetBtn.addEventListener("click", resetAll);

    // Right panel search
    const rightSearchCurrentEl = $("rightSearchCurrent");
    if (rightSearchCurrentEl) rightSearchCurrentEl.addEventListener("input", scheduleRenderAllTables);


    // Rankings page search (filters the Rankings page table only)
    const rankingsSearchEl = $("rankingsSearchInput");
    if (rankingsSearchEl){
      rankingsSearchEl.addEventListener("input", () => {
        rankingsSearchQuery = rankingsSearchEl.value;
        // Keep typing instant: filter only after typing settles.
        runAfterTypingIdle("rankingsSearchRender", 240, () => {
          if (!$("rankingsView")?.classList?.contains("active")) return;
          renderRankingsPageTable(currentRanking, rankingsSearchQuery);
        });
      });
      rankingsSearchEl.addEventListener("change", () => {
        rankingsSearchQuery = rankingsSearchEl.value;
        renderRankingsPageTable(currentRanking, rankingsSearchQuery);
      });
    }

    function scheduleRenderAllTables(){
      // Only run heavy renders after the user stops typing (prevents freeze/burst while holding keys).
      runAfterTypingIdle("renderAllTables_input", 240, renderAllTables);
    }

    function scheduleSingleRefresh(){
      // Only run heavy recalculation after typing settles (prevents main-thread blocking during key-repeat).
      runAfterTypingIdle("singleRefresh_input", 260, refreshSingleFromInputs);
    }


    // Single inputs -> recalc
    [
      "singleA_pick","singleB_pick",
      "singleA_pts","singleB_pts",
      "singleA_name","singleB_name",
      "single_importance","single_result",
      "single_isKnockoutFinals","single_isPenalties"
    ].forEach(id => {
      const el = $(id);
      if (el) el.addEventListener("input", scheduleSingleRefresh);
      if (el) el.addEventListener("change", refreshSingleFromInputs);
    });

    // Single pickers dropdowns
    function wirePicker(inputId, dropId, onPick){
      const input = $(inputId);
      const drop = $(dropId);

      input.addEventListener("focus", () => {
        closeAllDropdowns();
        buildPicker(dropId, input.value, onPick);
        openDropdown(dropId);
      });

      input.addEventListener("input", () => {
        // Keep the input instant: defer picker rebuild until typing stops.
        openDropdown(dropId);
        runAfterTypingIdle("pickerBuild:" + dropId, 220, () => {
          buildPicker(dropId, input.value, onPick);
          openDropdown(dropId);
        });
      });

      // close on outside click
      document.addEventListener("click", (e) => {
        const within = input.contains(e.target) || drop.contains(e.target) || (e.target?.closest?.(`[data-pickbtn]`));
        if (!within) closeDropdown(dropId);
      });
    }

    // Picker buttons (caret)
    Array.from(document.querySelectorAll("[data-pickbtn]")).forEach(btn => {
      btn.addEventListener("click", (e) => {
        const key = btn.getAttribute("data-pickbtn");
        const map = {
          singleA: { input:"singleA_pick", drop:"singleA_drop" },
          singleB: { input:"singleB_pick", drop:"singleB_drop" },
          batchA: { input:"batchA_pick", drop:"batchA_drop" },
          batchB: { input:"batchB_pick", drop:"batchB_drop" }
        };
        const m = map[key];
        if (!m) return;
        const input = $(m.input);
        closeAllDropdowns();
        buildPicker(m.drop, input.value, () => {});
        openDropdown(m.drop);
        input.focus();
        e.stopPropagation();
      });
    });

    // Single A/B pick handlers (auto-fill points + meta)
    wirePicker("singleA_pick", "singleA_drop", (t) => {
      $("singleA_pick").value = t.name;
      $("singleA_name").value = t.name;
      $("singleA_pts").value = fmt2(t.points);
      $("singleA_conf").value = t.confed || "—";
      closeDropdown("singleA_drop");
      scheduleSingleRefresh();
    });
    wirePicker("singleB_pick", "singleB_drop", (t) => {
      $("singleB_pick").value = t.name;
      $("singleB_name").value = t.name;
      $("singleB_pts").value = fmt2(t.points);
      $("singleB_conf").value = t.confed || "—";
      closeDropdown("singleB_drop");
      scheduleSingleRefresh();
    });

    // Batch A/B pick handlers (fill names; keep overrides blank unless user wants them)
    wirePicker("batchA_pick", "batchA_drop", (t) => {
      $("batchA_pick").value = t.name;
      closeDropdown("batchA_drop");
      const metaA = t;
      const metaB = findTeamByNameInRanking(currentRanking, $("batchB_pick").value) || inferMeta($("batchB_pick").value);
      enforceImportanceConfedRule($("batch_importance"), $("confedHintBatch"), metaA.confed, metaB.confed);
    });
    wirePicker("batchB_pick", "batchB_drop", (t) => {
      $("batchB_pick").value = t.name;
      closeDropdown("batchB_drop");
      const metaA = findTeamByNameInRanking(currentRanking, $("batchA_pick").value) || inferMeta($("batchA_pick").value);
      const metaB = t;
      enforceImportanceConfedRule($("batch_importance"), $("confedHintBatch"), metaA.confed, metaB.confed);
    });
    function scheduleBatchConfedHint(){
      runAfterTypingIdle("batchConfedHint", 220, () => {
        const metaA = findTeamByNameInRanking(currentRanking, $("batchA_pick").value) || inferMeta($("batchA_pick").value);
        const metaB = findTeamByNameInRanking(currentRanking, $("batchB_pick").value) || inferMeta($("batchB_pick").value);
        enforceImportanceConfedRule($("batch_importance"), $("confedHintBatch"), metaA.confed, metaB.confed);
      });
    }
    ["batchA_pick","batchB_pick","batch_importance"].forEach(id => {
      $(id).addEventListener("input", scheduleBatchConfedHint);
      $(id).addEventListener("change", scheduleBatchConfedHint);
    });

    // Batch Add / Clear / Simulate / Clear list
    $("batchAddBtn").addEventListener("click", () => {
      const m = batchReadForm();

      const keepImportance = $("batch_importance").value;

      const msg = batchValidate(m);
      if (msg){
        setWarn("batch_warnBox", msg);
        return;
      }
      setWarn("batch_warnBox", "");

      // store
      const entry = {
        aName: m.aName,
        bName: m.bName,
        aOv: (m.aOv === "" ? "" : String(clampMin(safeNum(m.aOv, 0), 0))),
        bOv: (m.bOv === "" ? "" : String(clampMin(safeNum(m.bOv, 0), 0))),
        I: m.I,
        result: m.result,
        ko: m.ko,
        isPen: m.isPen,
        psoWinner: m.psoWinner
      };

      if (batchEditingIndex >= 0){
        batchMatches[batchEditingIndex] = entry;
        batchEditingIndex = -1;
        $("batchEditPill").textContent = "New";
      } else {
        batchMatches.push(entry);
      }

      saveJSON(LS_KEYS.batch, batchMatches);
      renderBatchList();
      batchClearForm();
      // Keep Match Importance selection for next match (do not reset after Add)
      $("batch_importance").value = keepImportance;

      $("batchSimStatus").textContent = "List updated (not simulated)";
    });

    $("batchClearFormBtn").addEventListener("click", batchClearForm);

    $("batchApplyAllBtn").addEventListener("click", simulateBatchAll);

    $("batchClearListBtn").addEventListener("click", () => {
      batchMatches = [];
      batchEditingIndex = -1;
      saveJSON(LS_KEYS.batch, batchMatches);
      renderBatchList();
      $("batchSimStatus").textContent = "List cleared";
      setPending(null);
    });

    // Touch gestures (simple, best-effort)
    (function wireSwipes(){
      // Left drawer swipe open/close
      let sx = 0, sy = 0, tracking = false;
      document.addEventListener("touchstart", (e) => {
        if (!e.touches?.[0]) return;
        sx = e.touches[0].clientX;
        sy = e.touches[0].clientY;
        tracking = true;
      }, {passive:true});

      document.addEventListener("touchend", (e) => {
        if (!tracking) return;
        tracking = false;
      }, {passive:true});

      document.addEventListener("touchmove", (e) => {
        if (!tracking || !e.touches?.[0]) return;
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        const dx = x - sx;
        const dy = Math.abs(y - sy);
        if (dy > 40) return;

        // open left if swipe from edge
        if (sx < 20 && dx > 60){
          openLeft();
          tracking = false;
        }
        // close left if swipe left inside drawer
        if ($("leftDrawer").classList.contains("open") && sx < 280 && dx < -70){
          closeLeft();
          tracking = false;
        }
        // open right if swipe from right edge
        const vw = window.innerWidth || 360;
        if (sx > vw - 20 && dx < -60){
          toggleRight(true);
          tracking = false;
        }
        // close right if swipe right inside panel
        if ($("rightPanel").classList.contains("open") && sx > vw - 280 && dx > 70){
          toggleRight(false);
          tracking = false;
        }
      }, {passive:true});
    })();

    // Start
    initApp();
