// golf-day-builder copy for 'zh'. Generated overlay: the English master is in
// golf-day-builder-logic.js (COURSES, RESTAURANTS, ADDONS, QUESTIONS) and EN_PLAN in golf-day-builder-localize.js.
// A key missing here falls back to English, so a new item needs adding for
// every language. It only changes what the visitor sees; matching and
// scoring never read it.
const data = {
 "stepFmt": "第 {n} 步，共 {total} 步 · {section}",
 "sections": {
  "region": "住宿位置",
  "dayStyle": "一天的风格",
  "level": "球技水平",
  "start": "开球时间",
  "courseType": "球场类型",
  "addons": "打球之外",
  "transport": "交通",
  "group": "您的团队"
 },
 "teeWindows": {
  "early": "8:00 至 9:00",
  "mid": "10:00 至 11:00",
  "pm": "13:30 至 14:30"
 },
 "factLabels": {
  "par": "标准杆",
  "nineHoles": "9 洞",
  "hotelOnly": "仅限酒店客人",
  "noHandicap": "无需差点",
  "handicapRequired": "需要差点",
  "certificate": " + 证明"
 },
 "built": {
  "line": "为{group}量身定制，{region}。",
  "groups": {
   "solo": "独自出行的球手",
   "couple": "一对情侣或夫妻",
   "friends": "一群朋友",
   "family": "一个家庭",
   "vip": "贵宾或企业团体"
  },
  "regions": {
   "southwest": "住在西南部",
   "palma": "住在帕尔玛或附近",
   "north": "住在北部",
   "east": "住在东部",
   "south": "住在南部",
   "unbooked": "住在最适合打球的地方"
  }
 },
 "questions": {
  "region": {
   "title": "您住在哪里？",
   "sub": "行程围绕您的住宿地点来安排。",
   "opts": {
    "southwest": [
     "西南部",
     "Santa Ponsa、Andratx、Bendinat、Calvià"
    ],
    "palma": [
     "帕尔玛及周边",
     "帕尔玛市区、Son Vida、岛屿中部"
    ],
    "north": [
     "北部",
     "Alcúdia、Pollença、海湾一带"
    ],
    "east": [
     "东部",
     "Cala Millor、Canyamel、Artà"
    ],
    "south": [
     "南部",
     "Llucmajor、机场附近、Son Antem"
    ],
    "unbooked": [
     "尚未预订",
     "我们会为您推荐最适合打球的住宿区域"
    ]
   }
  },
  "dayStyle": {
   "title": "您想要怎样的一天？",
   "sub": "选最像您的那一个。",
   "opts": {
    "serious": [
     "认真打球",
     "这一轮球是主角"
    ],
    "relaxed": [
     "轻松打球",
     "好球场，没有压力"
    ],
    "luxury": [
     "奢华",
     "样样最好，全部安排妥当"
    ],
    "family": [
     "家庭日",
     "打球之外，每个人都有安排"
    ],
    "scenic": [
     "风景优先",
     "先看风景，再看成绩"
    ],
    "food": [
     "美食优先",
     "围绕一顿出色的午餐来安排打球"
    ]
   }
  },
  "level": {
   "title": "您会如何形容自己的球技？",
   "sub": "诚实的回答才能安排出更好的一天。",
   "opts": {
    "beginner": [
     "初学者",
     "刚接触高尔夫或重新开始"
    ],
    "casual": [
     "休闲球手",
     "一年打几轮"
    ],
    "confident": [
     "有把握的球手",
     "经常打球，中等差点"
    ],
    "low": [
     "低差点",
     "个位数差点，想要真正的考验"
    ]
   }
  },
  "start": {
   "title": "您喜欢什么时候开球？",
   "sub": "",
   "opts": {
    "early": [
     "清晨",
     "最早开球，之后整天自由"
    ],
    "mid": [
     "上午",
     "从容的开始，全天安排完整"
    ],
    "pm": [
     "下午",
     "悠闲的上午，傍晚光线下打球"
    ]
   }
  },
  "courseType": {
   "title": "球场最看重什么？",
   "sub": "",
   "opts": {
    "famous": [
     "知名球场",
     "人人都会问起的球场"
    ],
    "scenic": [
     "风景",
     "海景、山景、起伏地形"
    ],
    "challenging": [
     "真正的考验",
     "会向您提问的球场"
    ],
    "forgiving": [
     "宽容",
     "开阔、友好、好玩"
    ],
    "close": [
     "离酒店近",
     "尽量少开车"
    ]
   }
  },
  "addons": {
   "title": "什么能让这一天更完整？",
   "sub": "选择吸引您的任何选项，或都不选",
   "opts": {
    "lunch": [
     "悠长午餐",
     "一顿真正的马略卡式餐桌"
    ],
    "beach": [
     "海滩",
     "打完球下水游一圈"
    ],
    "spa": [
     "水疗",
     "做好恢复"
    ],
    "village": [
     "本地小镇",
     "在历史小镇逛一小时"
    ],
    "wine": [
     "葡萄酒",
     "参观酒庄或品酒"
    ],
    "family": [
     "家庭活动",
     "给不打球的人的安排"
    ],
    "coaching": [
     "与我同练",
     "与 PGA 高级职业教练的一堂课"
    ]
   }
  },
  "transport": {
   "title": "需要安排交通吗？",
   "sub": "",
   "opts": {
    "yes": [
     "需要，请安排",
     "司机或接送，门到门"
    ],
    "no": [
     "不需要，我们自驾",
     "租车或自己的车"
    ]
   }
  },
  "group": {
   "title": "谁会来？",
   "sub": "",
   "opts": {
    "solo": [
     "只有我",
     "独自打球，全情投入"
    ],
    "couple": [
     "一对情侣或夫妻",
     "两个人"
    ],
    "friends": [
     "朋友",
     "小团体出行"
    ],
    "family": [
     "家庭",
     "年龄和兴趣各不相同"
    ],
    "vip": [
     "贵宾或企业",
     "接待客户或庆祝特殊场合"
    ]
   }
  }
 },
 "courses": {
  "son-gual": {
   "facts": [
    "标准杆 72 · 锦标赛级",
    "Thomas Himmel，2007 年"
   ],
   "blurb": "岛上养护最好的球场，布局会考验您球技的每一个方面。足够开阔，可以尽情享受；足够有挑战，让人难忘。请注意，需要提供差点证明。"
  },
  "alcanada": {
   "facts": [
    "标准杆 72 · Robert Trent Jones Jr.",
    "58 个沙坑"
   ],
   "blurb": "大部分球局都能看到海景，即使没有海景，Robert Trent Jones Jr. 的设计本身也足够出色。58 个沙坑的位置都会影响击球，所以要准备好用沙楔杆。"
  },
  "t-golf-palma": {
   "facts": [
    "标准杆 71 · Jack Nicklaus 设计",
    "马略卡唯一的 Nicklaus 球场"
   ],
   "blurb": "Jack Nicklaus 设计的球场，距帕尔玛二十分钟。球道偏硬，讲究策略，也很公平：好球得到奖励，坏球按比例受罚。"
  },
  "son-muntaner": {
   "facts": [
    "标准杆 72 · 2025 年西班牙最佳",
    "Sa Capitana 橄榄树，第 15 洞"
   ],
   "blurb": "Arabella 系列球场的旗舰，也是帕尔玛附近最精致的俱乐部体验。场地养护和服务是这里的吸引力，两者都很到位。"
  },
  "santa-ponsa": {
   "facts": [
    "标准杆 72 · 岛上最长",
    "2021 年欧巡赛举办地"
   ],
   "blurb": "西南部的宽阔球道和轻松节奏。记分卡上的长度看起来吓人，但球道的宽度让大多数水平的球手都能打得下来。"
  },
  "andratx": {
   "facts": [
    "标准杆 72 · David Kidd，1999 年",
    "西班牙最长的五杆洞（609 米）"
   ],
   "blurb": "Camp de Mar 上方山丘中戏剧性的起伏地形。风景是亮点，但狭窄的击球线路和倾斜的落球位置，让它比记分卡显示的更难。"
  },
  "son-vida": {
   "facts": [
    "标准杆 70 · 1964 年建成 · 马略卡最古老",
    "Seve 1990 年在此夺冠"
   ],
   "blurb": "马略卡最古老的球场，历史感十足。以现代标准来看偏短，但处处迷人，当这一天不只是为了成绩时，是个明智的选择。"
  },
  "bendinat": {
   "facts": [
    "标准杆 70 · Martin Hawtree，1986 年",
    "5,660 米"
   ],
   "blurb": "紧凑漂亮，藏在松林之间，较高的球洞能瞥见大海。较短、适合社交的一轮，适合半天的安排。有几个发球台可以把一号木留在球包里。"
  },
  "capdepera": {
   "facts": [
    "标准杆 73 · Dan Maples",
    "第 15 洞被评为马略卡最佳球洞"
   ],
   "blurb": "宁静东部起伏乡间的高尔夫，即使旺季也通常不拥挤。开球友好，变化足够，能让水平更高的球手保持兴趣。"
  },
  "canyamel": {
   "facts": [
    "标准杆 73 · José Gancedo",
    "第 9 洞的石头小屋，马略卡独有"
   ],
   "blurb": "靠近海岸的山谷球场，很少有游客专门计划，但大多数人打完都很高兴。不动声色地考验球技，尤其是打向倾斜果岭的进攻杆。"
  },
  "pula": {
   "facts": [
    "标准杆 72 · Olazábal 重新设计",
    "双层练习场 · TrackMan 练习场"
   ],
   "blurb": "东海岸一座热情好客的球场，有扎实的赛事历史，由 José María Olazábal 重新设计。在关键之处宽容，全年维护良好。"
  },
  "son-servera": {
   "facts": [
    "标准杆 72 · 1967 年建成 · 马略卡第二古老",
    "海岸公园式球场"
   ],
   "blurb": "海边经典的松林公园式球场，也是岛上最古老的俱乐部之一。不慌不忙，传统，公平的考验而不戏剧化。"
  },
  "son-antem-west": {
   "facts": [
    "标准杆 72 · Francisco Lopez Segales，1995 年",
    "距帕尔玛 25 分钟"
   ],
   "blurb": "Llucmajor 附近的开阔乡间高尔夫，距帕尔玛 15 分钟、距机场 25 分钟。宽阔的球道和平坦的布局，让大多数水平都能打。"
  },
  "son-termes": {
   "facts": [
    "标准杆 70 · Grupo Harris，1998 年",
    "可眺望帕尔玛的山景"
   ],
   "blurb": "位于 Na Burguesa 的山地高尔夫，距帕尔玛 20 分钟。晴天时，在较高的球洞上能看到 Castell de Bellver 和大教堂，背后是地中海。"
  },
  "t-golf-calvia": {
   "facts": [
    "标准杆 72 · 15 个湖",
    "马略卡公开赛举办地"
   ],
   "blurb": "经过 1000 万欧元的翻新重建，T Golf Calvià 从抵达到结束都显得精致。宽阔的开球线路，15 个湖泊在场内，全场养护出色。"
  },
  "son-antem-east": {
   "facts": [
    "标准杆 72 · Francisco Lopez-Segalés，1994 年",
    "万豪度假村 · 5 个湖"
   ],
   "blurb": "Son Antem 两座球场中更易上手的一座。位于 Llucmajor 附近的前狩猎庄园，球道宽阔，有五个湖。"
  },
  "son-quint": {
   "facts": [
    "标准杆 71 · 2007 年开业",
    "Tiger Woods 与 Charlie 曾在此打球，2022 年 7 月"
   ],
   "blurb": "Son Vida 球场中最容易上手的一座。球道宽阔，有四个发球位置，从第 8 洞可以直接望见帕尔玛大教堂。"
  },
  "maioris": {
   "facts": [
    "标准杆 72 · 2006 年开业",
    "马略卡少数几个公共草地练习场之一"
   ],
   "blurb": "前九洞偏苏格兰式、起伏多，后九洞更偏美式、更平坦：一轮球里有两种性格。比帕尔玛的球场人少。"
  },
  "vall-dor": {
   "facts": [
    "标准杆 71 · 1986 年",
    "悬崖收尾，可眺望东海岸海景"
   ],
   "blurb": "越打越好的一轮球：前九洞紧凑传统，后九洞则朝海岸展开，有海景和悬崖边的收尾。"
  },
  "golf-pollenca": {
   "facts": [
    "标准杆 35 · 9 洞 · José Gancedo，1986 年",
    "可眺望特拉蒙塔纳山、波连萨湾和阿尔库迪亚湾"
   ],
   "blurb": "九个球洞融入波连萨镇上方的山坡：能看到特拉蒙塔纳山、两个海湾和大海。是 Alcanada 上午之后最合适的下午搭配，90 分钟即可打完。"
  },
  "santa-ponsa-2": {
   "facts": [
    "标准杆 72 · 仅限会员",
    "客人必须与会员同组"
   ],
   "blurb": "通常是西南部球场群中最安静的一座。树木夹道的球道奖励落点而非力量。我自己打球时，可以带客人作为我的客人入场。"
  },
  "santa-ponsa-3": {
   "facts": [
    "标准杆 30 · 9 洞 · 仅限会员",
    "客人必须与会员同组"
   ],
   "note": "9 洞。可作为 Santa Ponsa 1 或 2 全场之外的下午加打",
   "blurb": "九个球洞穿过 Santa Ponsa 住宅区：短而精准，很适合初学者、青少年，或任何想打一轮快球的人。"
  },
  "palma-pitch-putt": {
   "facts": [
    "标准杆 27 · 9 洞全为三杆洞 · 17 欧元起",
    "马略卡唯一的 pitch & putt"
   ],
   "note": "9 洞。适合作为半天计划、赛前热身，或入门体验",
   "blurb": "马略卡唯一的 pitch & putt，也是我用来做入门指导的球场。全是 50 到 100 米的三杆洞。"
  },
  "reserva-rotana": {
   "facts": [
    "9 洞 · 仅限酒店客人 · 庄园球场",
    "25 分钟内可到 Capdepera 和 Pula"
   ],
   "note": "仅限酒店客人。只有您的团队入住 Reserva Rotana 时，才适用此选项",
   "blurb": "位于 Manacor 附近 Reserva Rotana 的私人 9 洞庄园球场，仅供酒店客人使用。"
  }
 },
 "restaurants": {
  "southwest": {
   "casual": "Golf de Andratx 的 Campino 餐厅：露台上的意大利和地中海菜，按您打完球的时间预订",
   "premium": "Castell Son Claret 的 Sa Clastra（1 颗米其林星），位于 Es Capdellà（距西南部大多数球场约 15 分钟）。岛上最好的午餐餐桌之一",
   "village": "在 Calvià 村吃午餐：一座安静的山顶小镇，本地餐厅很少见到游客。我来订合适的餐桌",
   "michelin": "Castell Son Claret 的 Sa Clastra（1★），位于 Es Capdellà，或 St. Regis Mardavall 的 Es Fum（1★）：岛上最好的两张餐桌，都在西南部"
  },
  "palma": {
   "casual": "Son Muntaner 的 Na Capitana：露台上可眺望球场的可靠地中海午餐，或开车一小段到 Santa Catalina 市场吃 tapas",
   "premium": "帕尔玛市中心的 DINS Santi Taura（1 颗米其林星），或老城的 Marc Fosh（1 颗米其林星）。我会根据您的球局安排订位时间",
   "village": "Santa Catalina 市场：帕尔玛最好的美食街区，距大多数球场 10 分钟。我来为团队选合适的地方",
   "michelin": "DINS Santi Taura（1★）、Marc Fosh（1★）和 Zaranda（1★）都在帕尔玛：岛上最集中的米其林群，都在帕尔玛各球场 15 分钟之内"
  },
  "north": {
   "casual": "Port de Pollença 海滩边的午餐：海滨步道上有好几处不错的鱼和海鲜选择。旺季我会提前订位",
   "premium": "Port d'Alcúdia 的 Maca de Castro（1 颗米其林星 + 绿星）：以本地食材做成的应季品鉴菜单。距 Alcanada 约 10 分钟",
   "village": "波连萨老城：一座安静的山顶小镇，有漂亮的市场广场、可靠的本地餐厅和周日市集。值得绕这一小段路",
   "michelin": "Port d'Alcúdia 的 Maca de Castro（1★ + 绿星）：岛上最有意思的主厨餐厅之一，离 Alcanada 球场很近"
  },
  "east": {
   "casual": "Capdepera Golf 的 Roca Viva 餐厅：地中海和马略卡菜，有自家菜园和 18 洞旁的露台。岛上较好的俱乐部午餐之一",
   "premium": "Canyamel 的 Cap Vermell Grand Hotel 里的 VORO（2 颗米其林星）：马略卡唯一的两星餐厅，主厨 Álvaro Salazar。18 道或 22 道品鉴菜单",
   "village": "Artà 老城：马略卡东部最有个性的小镇之一。打球前后喝咖啡、吃午餐的好去处",
   "michelin": "Canyamel Cap Vermell 的 VORO（2★）：在东海岸住一晚最有力的米其林理由"
  },
  "south": {
   "casual": "Golf Maioris 的 T19 Restobar：室外露台，德式和地中海俱乐部餐，靠近机场的实用一站",
   "premium": "Llucmajor 附近的 Andreu Genestra（1 颗米其林星 + 绿星）：应季品鉴菜单，以可持续为导向的烹饪。距 Golf Maioris 和 Son Antem 约 10 分钟。请提前很久预订",
   "village": "Llucmajor 老城：距帕尔玛 20 分钟的安静集镇，有不错的本地餐厅和周六市集",
   "michelin": "Llucmajor 附近的 Andreu Genestra（1★ + 绿星）：马略卡最有意思的主厨餐厅之一，离南部球场群很近"
  }
 },
 "addons": {
  "beach": [
   "海滩时光",
   "附近的一处小海湾，游个泳，在树荫下慢慢待一小时。计划确认后，按所在区域选择海滩。"
  ],
  "spa": [
   "水疗与恢复",
   "打完球后在当地度假村水疗做一次护理。可选的包括 Arabella Son Vida、Secrets Paguera 和 Bendinat。预订时我来确认场地。"
  ],
  "village": [
   "小镇一小时",
   "在岛上一座历史小镇待一小时：咖啡、小巷，以及一两个观景点。"
  ],
  "wine": [
   "品酒",
   "在本地酒庄的导览品酒。马略卡的葡萄酒产业虽小但认真：Binissalem 的 José L. Ferrer 和 Macià Batle 都值得绕路。我会把它安排在球局前后。"
  ],
  "family": [
   "家庭活动",
   "根据区域和年龄，可以是乘船、参观洞穴或水上乐园。随预订一并确认。"
  ],
  "coaching": [
   "与我同练",
   "与我这位 UK PGA 高级职业教练的一堂专项课：热身、技术或球场策略。"
  ],
  "lunch": [
   "悠长午餐",
   "一顿真正的马略卡式餐桌，预订好并按您的球局安排时间。"
  ]
 },
 "plan": {
  "names": {
   "efficient": "高效的高尔夫日",
   "lunch": "高尔夫与长午餐",
   "experience": "完整体验"
  },
  "taglines": {
   "efficient": "这一轮球就是这一天。打得好，下午就是自由的。",
   "lunch": "一轮认真的球，接着是一顿认真的饭。",
   "experience": "高尔夫是核心。岛上的其余体验填满剩下的日程。"
  },
  "time": {
   "depart": "{depart}（估计）",
   "onArrival": "抵达时",
   "beforeRound": "球局之前",
   "teeWindow": "开球时间段 {tee}（估计）",
   "afterRound": "球局之后",
   "earlyAfternoon": "午后早些时候",
   "lateAfternoon": "傍晚前",
   "lunch": "午餐",
   "afternoon": "下午",
   "evening": "晚上"
  },
  "title": {
   "depart": "从住处出发",
   "unhurried": "从容出发",
   "clubhouse": "会所喝一杯",
   "return": "返程",
   "longLunch": "一顿悠长的马略卡午餐",
   "relaxedReturn": "轻松返程",
   "lunchBooked": "午餐，已订好并安排好时间",
   "beachOrVillage": "海滩或小镇一小时",
   "lastLight": "在最后的日光中返程",
   "warmupCoach": "与我一起的指导热身",
   "warmupCoffee": "热身与咖啡",
   "holes18": "在 {course} 打 18 洞",
   "holes9": "在 {course} 打 9 洞"
  },
  "desc": {
   "transfer": "专车从您的住处接您。到球场大约 {drive} 分钟（估计）。",
   "selfDrive": "自驾前往球场，大约 {drive} 分钟（估计）。停车说明会随确认后的行程一并发送。",
   "warmupCoach": "与我一起的 45 分钟课程：练习场热身、短杆，以及接下来球洞的打法计划。",
   "warmupCoffee": "练习球、推杆果岭，以及露台上的一杯咖啡。请在开球前 45 分钟到达。",
   "holeNote": " 注意：{note}",
   "clubhouse": "在露台上轻松喝一杯，一边争论记分卡。",
   "returnEfficient": "回到您的住处，一天剩下的时间原封不动。大约 {drive} 分钟（估计）。",
   "longLunch": "{lunch}。餐桌已订好并安排好时间，您打完最后一洞就能直接入座。",
   "relaxedReturn": "悠闲地开车回去，大约 {drive} 分钟（估计）。",
   "lunchBooked": "{lunch}。我会为您的团队订合适的餐桌。",
   "beachOrVillage": "附近的一处小海湾或历史小镇，计划确认后按区域选择。",
   "lastLight": "回到您的住处，大约 {drive} 分钟（估计），带着完整的一天马略卡时光。"
  },
  "why": {
   "efficient": "高尔夫放在第一位，时间安排紧凑。{course} 日程里没有任何您没要求的内容。",
   "lunch": "好球场和好美食是这座岛最稳定的两样东西。{course} 这一天给了两者充足的时间。",
   "experienceAddons": "{course} 您选的附加项目值得在日程里占有真正的时间，所以这份行程围绕它们来安排整天。",
   "experiencePlain": "{course} 这份行程在球局周围加入了岛上的体验，但不显得拥挤。"
  },
  "whyCourse": {
   "courseType": {
    "famous": "它是岛上最知名的球场之一",
    "scenic": "它有您想要的风景",
    "challenging": "它是您住处附近最有挑战的球场",
    "forgiving": "布局宽阔而宽容",
    "close": "它是离您住处最近的优质球场"
   },
   "dayStyle": {
    "serious": "它能带来一轮认真的球",
    "relaxed": "节奏和布局适合轻松的一天",
    "luxury": "它是您所在区域的高端选择",
    "family": "它适合团队中各种水平的人",
    "scenic": "环境是最大的亮点",
    "food": "它离当地最好的餐厅很近"
   },
   "matched": "它与您的球技很匹配",
   "fallback": "这个区域里与您的回答最匹配的选择。",
   "separator": "，",
   "end": "。",
   "capitalise": false
  },
  "handles": {
   "tee": "以合适的价格锁定开球时间",
   "table": "已订好餐厅餐桌，并按您的球局安排时间",
   "transportYes": "已安排门到门交通",
   "transportNo": "为您的自驾提供路线和停车指引",
   "buggies": "需要时安排球车、球杆和租借装备",
   "coachingYes": "与我的指导课程已确认",
   "coachingNo": "可选的热身或与我一起的球场指导",
   "whatsapp": "全天只有一个 WhatsApp 联系人"
  }
 },
 "phrases": {
  "1993 redesign/expansion to 18 holes": "1993 年重新设计并扩建至 18 洞",
  "Historic established course (1964+)": "历史悠久的成熟球场（1964 年起）",
  "(original 9 holes)": "（最初的 9 洞）",
  "(18-hole expansion)": "（扩建的 18 洞）",
  "(original)": "（原设计）",
  "(2000 redesign)": "（2000 年重新设计）",
  "Opened in 1995": "1995 年开业",
  "redesign completed in 2006": "2006 年完成重新设计",
  "9 holes; extended to 18 in 1995": "9 洞；1995 年扩建至 18 洞",
  "renovated €10M": "耗资 1000 万欧元翻新",
  "(9 holes)": "（9 洞）"
 }
}

export default data
