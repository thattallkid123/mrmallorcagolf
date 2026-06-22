'use client'

import { useState } from 'react'

const COURSE_IMGS = {
  'son-gual':         '/images/courses/son-gual.webp',
  'alcanada':         '/images/courses/alcanada.webp',
  't-golf-palma':     '/images/courses/t-golf-palma.webp',
  'son-muntaner':     '/images/courses/son-muntaner.webp',
  'santa-ponsa':      '/images/courses/santa-ponsa-1.webp',
  'andratx':          '/images/courses/golf-andratx.webp',
  'son-vida':         '/images/courses/son-vida.webp',
  'son-quint':        '/images/courses/son-quint.webp',
  'bendinat':         '/images/courses/bendinat.webp',
  'capdepera':        '/images/courses/capdepera.webp',
  'canyamel':         '/images/courses/canyamel.webp',
  'pula':             '/images/courses/pula.webp',
  'son-servera':      '/images/courses/son-servera.webp',
  'maioris':          '/images/courses/maioris.webp',
  'son-antem-west':   '/images/courses/son-antem-west.webp',
  'son-termes':       '/images/courses/son-termes.webp',
  't-golf-calvia':    '/images/courses/t-golf-calvia.webp',
  'son-antem-east':   '/images/courses/son-antem-east.webp',
  'pollensa':         '/images/courses/pollensa.webp',
  'santa-ponsa-2':    '/images/courses/santa-ponsa-2.webp',
  'santa-ponsa-3':    '/images/courses/santa-ponsa-3.webp',
  'palma-pitch-putt': '/images/courses/palma-pitch-putt.webp',
  'rotana':           '/images/courses/rotana.webp',
  'vall-dor':         '/images/courses/vall-dor.webp',
}

const COURSES = [
  { id:'son-gual', en:'Golf Son Gual', zhDesc:'帕尔马 · 锦标赛级名场', region:'palma', regionZh:'帕尔马附近（机场 10 分钟）', level:3, budget:3, difficulty:'9/10 · 高难度锦标赛球场', price:'参考范围 €80–€165（约 ¥620–¥1,290，旺季更高）', tags:['famous','challenge','luxury','business'], photoUrl:'/images/courses/son-gual.webp', photoAlt:'Golf Son Gual course view', forWho:'认真打球、追求顶级体验的稳定球手和低差点球手；适合商务接待。', why:'马略卡名气最大的球场之一：纳达尔公开说这是他在岛上最喜欢的球场，奥巴马 2024 年 11 月也来打过。果岭高且快，落点比挥杆更重要；收尾的 15–18 洞被认为是欧洲最精彩的收官段落之一。', photo:'可拍照 · 适合商务接待 · 不建议带初学者', andy:'这座球场有自己的"风系统"，第 16 洞的风和第 7 洞的风完全是两种挑战，这正是它耐打的原因。建议留出一整天，认真打。', article:'/zh/guides/son-gual' },
  { id:'alcanada', en:'Club de Golf Alcanada', zhDesc:'北部 · 全岛最上镜的海景球场', region:'north', regionZh:'北部（阿尔库迪亚港）', level:2, budget:3, difficulty:'7/10 · 中高难度，果岭起伏大且快', price:'参考范围 €115–€220（约 ¥900–¥1,720）', tags:['famous','scenic','photo','luxury','firsttime'], photoUrl:'/images/courses/alcanada.webp', photoAlt:'Alcanada lighthouse and coastal golf course', forWho:'想要"欧洲高尔夫旅行打卡"的球手；风景与名气兼顾，第一次来马略卡的首选之一。', why:'小罗伯特·琼斯（RTJ Jr.）设计，他的父亲正是昆明春城湖畔（中国排名第一球场）的设计者。18 洞中有 16 洞能看到海上灯塔，是欧洲被拍摄最多的高尔夫地标之一，劳力士挑战巡回赛总决赛举办地。', photo:'最适合拍照 · 适合商务接待 · 餐厅露台全岛一流', andy:'第 17 洞发球台看灯塔的角度，是这座球场最值得记的画面。58 个沙坑每一杆都在"提问"，果岭非常快。第一次打，攻果岭宁短勿长。', article:'/zh/guides/alcanada' },
  { id:'t-golf-palma', en:'T Golf Palma (Puntiró)', zhDesc:'帕尔马 · 全岛唯一尼克劳斯设计', region:'palma', regionZh:'帕尔马附近', level:2, budget:2, difficulty:'7/10 · 中等偏上', price:'参考范围 €105–€150（约 ¥820–¥1,170）', tags:['famous','scenic','challenge'], photoUrl:'/images/courses/t-golf-palma.webp', photoAlt:'T Golf Palma forest and course', forWho:'想体验大师设计、喜欢安静自然环境、愿意"动脑打球"的球手。', why:'全岛唯一的杰克·尼克劳斯设计球场，2022 年全面翻新。尼克劳斯没有改动原始地形，球场上看不到任何建筑物，松树与野橄榄环绕，纯粹的设计课。', photo:'可拍照 · 自然安静 · 适合认真打球和提升', andy:'尼克劳斯没有平整地形，所以这里的站位和落点判断比距离更重要。适合喜欢"动脑打球"的球手，球场管理能力会在这里被真正考验。', article:'/zh/guides/t-golf-palma' },
  { id:'son-muntaner', en:'Son Muntaner', zhDesc:'帕尔马松维达区 · 2025 西班牙最佳', region:'palma', regionZh:'帕尔马附近（松维达区）', level:2, budget:3, difficulty:'7/10 · 中高难度', price:'参考范围 €96–€259（约 ¥750–¥2,020，动态定价）', tags:['famous','luxury','business','photo'], photoUrl:'/images/courses/son-muntaner.webp', photoAlt:'Son Muntaner luxury course and bay', forWho:'追求顶级养护和五星酒店配套的高端客人；商务接待的最稳妥选择。', why:'2025 年世界高尔夫大奖"西班牙最佳球场"。养护水准全岛顶级，第 15 洞旁有一棵千年橄榄树，俯瞰帕尔马湾。', photo:'适合拍照 · 最适合商务接待 · 五星酒店配套', andy:'如果有客户或合作伙伴同行，这里从练习场到餐厅都是高标准，整体体验最不会出错。注意是动态定价，提前订更划算。', article:'/zh/guides/son-muntaner' },
  { id:'santa-ponsa', en:'Golf Santa Ponsa 1', zhDesc:'西南部 · 欧巡赛举办场地', region:'southwest', regionZh:'西南部（圣彭萨）', level:2, budget:2, difficulty:'8/10 · 距离长，有挑战', price:'参考范围 €77–€126（约 ¥600–¥980）', tags:['famous','challenge','value'], photoUrl:'/images/courses/santa-ponsa-1.webp', photoAlt:'Santa Ponsa championship course', forWho:'想用合理预算打一座真正欧巡赛场地的球手。', why:'2021 年欧巡赛马略卡公开赛举办地，全岛最长的球场之一，第 10 洞 590 米，是欧洲最长的五杆洞之一。5–7 洞的特拉蒙塔纳山景全岛出色。', photo:'可拍照 · 欧巡赛场地打卡 · 性价比高', andy:'距离是这里真正的考验。按自己的真实码数选发球台，不要逞强，这是用合理预算体验"正式比赛场地"的最好选择。', article:'/zh/guides/santa-ponsa' },
  { id:'andratx', en:'Golf de Andratx', zhDesc:'西南部海湾山地 · 全岛最难', region:'southwest', regionZh:'西南部（Camp de Mar）', level:4, budget:2, difficulty:'9/10 · 全岛最难，需差点证明（上限 28）', price:'参考范围 €96–€140（约 ¥750–¥1,090）', tags:['challenge','scenic','photo'], photoUrl:'/images/courses/golf-andratx.webp', photoAlt:'Andratx mountain and coastal views', forWho:'低差点、想真正挑战自己的球手；景观全岛顶级，但对球技要求很高。', why:'全岛公认最难的球场：第 6 洞 609 米，是全西班牙最长的五杆洞。建在海湾上方的山地里，球道窄、长草真实，但景观和记忆点全岛顶级。', photo:'山海景观可拍照 · 不适合亲子 · 需差点证明', andy:'多带几个球，放下对成绩的执念。把它当成一次体验而不是一场比赛，这样打完，您会想再来一次。', article:'/zh/guides/andratx' },
  { id:'son-vida', en:'Golf Son Vida', zhDesc:'帕尔马松维达区 · 全岛最老牌', region:'palma', regionZh:'帕尔马附近（松维达区）', level:2, budget:2, difficulty:'8/10 · 球道窄，落差多', price:'参考范围 €81–€192（约 ¥630–¥1,500，动态定价）', tags:['famous','luxury','business'], photoUrl:'/images/courses/son-vida.webp', photoAlt:'Son Vida historic course landscape', forWho:'喜欢有历史感球场的球手，塞维·巴列斯特罗斯 1990 年曾在此赢下欧巡赛。', why:'马略卡历史最悠久的球场（1964 年开场），穿行于松维达高级住宅区。第 18 洞五杆洞的过水第二杆是全场最经典的决策点。', photo:'适合商务接待 · 历史名场 · 靠近帕尔马市区', andy:'球道窄、落差多——这里适合把开球策略放在距离前面的球手。第 18 洞五杆洞的第二杆有过水选择，是全场最典型的风险管理题。结合当天状态决定，不是每个人都该去赌那一杆。', article:'/zh/guides/son-vida' },
  { id:'son-quint', en:'Golf Son Quint', zhDesc:'帕尔马松维达区 · 最友好的一座', region:'palma', regionZh:'帕尔马附近（松维达区）', level:1, budget:1, difficulty:'5/10 · 轻松友好，四种发球台', price:'参考范围 €90–€115（约 ¥700–¥900，动态定价）', tags:['easy','family','value','firsttime','photo'], photoUrl:'/images/courses/son-quint.webp', photoAlt:'Son Quint family-friendly course with cathedral view', forWho:'初学者、家庭出游、想轻松打一轮的球手；适合第一次来马略卡。', why:'松维达区最友好的球场：球道宽阔，四种发球台让全家不同水平都能各打各的距离。第 8 洞发球台正对帕尔马大教堂。2022 年老虎伍兹带儿子查理在这里打过球。', photo:'适合拍照 · 最适合亲子轻松度假 · 适合第一次来马略卡', andy:'带家人打球的首选。唯一要提醒的是石墙是真实障碍，不是装饰，给孩子讲清楚弹道，其余尽情享受。', article:'/zh/guides/son-quint' },
  { id:'bendinat', en:'Real Golf de Bendinat', zhDesc:'西南部 · 海景古堡林间球场', region:'southwest', regionZh:'西南部（本迪纳特）', level:2, budget:2, difficulty:'6/10 · 中等', price:'参考范围 €74–€123（约 ¥580–¥960）', tags:['scenic','easy','photo'], photoUrl:'/images/courses/bendinat.webp', photoAlt:'Bendinat castle and coastal landscape', forWho:'想要安静、有海景与古堡景观的休闲球手。', why:'林间山谷球场，能看到帕尔马湾、卡布雷拉岛和本迪纳特古堡。每天对外开放的访客名额有限，需提前预订。注意：会所翻新预计持续至 2026 年中。', photo:'海景古堡可拍照 · 安静 · 名额有限需早订', andy:'这座球场每天对外的访客名额很少，不是随时都能订到。行程里想加这一站，请提前告诉我，我来协调。', article:'/zh/guides/bendinat' },
  { id:'capdepera', en:'Capdepera Golf', zhDesc:'东部 · 山谷与山地的两段式', region:'east', regionZh:'东部（阿尔塔）', level:2, budget:2, difficulty:'7/10 · 前九开阔，后九技术', price:'参考范围 €75–€125（约 ¥590–¥980，动态报价）', tags:['scenic','photo','value'], photoUrl:'/images/courses/capdepera.webp', photoAlt:'Capdepera mountain valley golf course', forWho:'住在东海岸、喜欢山景、想一场球打出两种体验的球手。', why:'丹·梅普尔斯顺应原始地形的设计：前九洞在开阔山谷，后九洞爬进莱万特山区变成技术考验。第 15 洞被《马略卡杂志》评为全岛最佳球洞，山顶俯瞰整个山谷直到海岸。', photo:'第 15 洞必拍 · 山景球场 · 建议与 Canyamel 连打', andy:'前九和后九是两种球场性格——后九爬进山区后难度明显提升，体力分配要有意识。第 15 洞是《马略卡杂志》评出的全岛最佳球洞，值得留时间欣赏。', article:'/zh/guides/capdepera' },
  { id:'canyamel', en:'Canyamel Golf', zhDesc:'东部 · 度假节奏的性价比之选', region:'east', regionZh:'东部（卡德佩拉）', level:2, budget:1, difficulty:'6/10 · 中等', price:'参考范围 €85–€145（约 ¥660–¥1,130）', tags:['scenic','value','easy','photo'], photoUrl:'/images/courses/canyamel.webp', photoAlt:'Canyamel stone house unique feature', forWho:'在东海岸度假、想轻松看景打球的球手与家庭。', why:'前九洞每个洞性格分明：第 4 洞晴天能远眺梅诺卡岛，第 9 洞球道中央有一座传统石屋，全马略卡独一份的障碍。', photo:'可拍照 · 适合亲子轻松度假 · 性价比好', andy:'第 9 洞球道中央那座石屋是真实障碍，不是摆设——设计上要求球手绕过去，是全岛独有的决策洞。整体难度适中，适合放松心态打。', article:'/zh/guides/canyamel' },
  { id:'pula', en:'Pula Golf', zhDesc:'东部 · 欧巡场地 + Trackman 练习场', region:'east', regionZh:'东部（松塞尔韦拉）', level:2, budget:2, difficulty:'7/10 · 中高难度', price:'参考范围 €68–€145（约 ¥530–¥1,130）', tags:['famous','challenge','business'], photoUrl:'/images/courses/pula.webp', photoAlt:'Pula championship course and practice facilities', forWho:'想在度假中认真训练和提升的球手。', why:'奥拉萨瓦尔 2004–2006 年重新设计，此后举办过 8 场欧巡赛事。练习设施全岛顶级，配备 Trackman 练习场。2025 年费德勒和纳达尔曾在此同场打球，瓜迪奥拉是常客。', photo:'欧巡场地打卡 · 适合认真打球和提升 · Trackman 练习场', andy:'我是 Trackman 大师认证教练，想在度假中真正提升，这里的练习场加一节下场课，是全岛最高效的组合。', article:'/zh/guides/pula' },
  { id:'son-servera', en:'Golf Club Son Servera', zhDesc:'东部 · 1967 年的海岸松林老场', region:'east', regionZh:'东部（松塞尔韦拉）', level:1, budget:1, difficulty:'6/10 · 整体宽松，3–7 洞收紧', price:'参考范围 €80–€145（约 ¥620–¥1,130）', tags:['easy','family','value','scenic'], photoUrl:'/images/courses/son-servera.webp', photoAlt:'Son Servera coastal pine forest course', forWho:'休闲球手和家庭；想感受老牌球场味道的人。', why:'1967 年建场，岛上最古老的球场之一。海岸松林间球道宽松、长草友好，只有 3–7 洞收窄爬坡穿湖，整体压力小。', photo:'适合亲子 · 海岸松林 · 轻松节奏', andy:'1967 年建场，这是岛上历史最长的球场之一。3–7 洞收窄爬坡，难度集中在这一段，整体仍是休闲节奏。适合不想被球场为难、只想好好打一轮的球手。', article:'/zh/guides/son-servera' },
  { id:'maioris', en:'Golf Maioris', zhDesc:'南部 · 一场球两种设计哲学', region:'south', regionZh:'南部（柳克马约尔，近机场）', level:2, budget:1, difficulty:'7/10 · 前九苏格兰式起伏，后九美式平坦', price:'参考范围 €69–€81（约 ¥540–¥630，早鸟/黄昏价更低）', tags:['value','easy'], photoUrl:'/images/courses/maioris.webp', photoAlt:'Maioris dual course design philosophy', forWho:'到达日或离岛日想加一轮的球手；人少、性价比高。', why:'前九洞苏格兰风格起伏，后九洞美式平坦，一场球两种体验。比帕尔马周边人少，还有岛上少见的天然草练习场。', photo:'性价比之选 · 适合第一轮/最后一轮 · 天然草练习场', andy:'落地当天倒时差打一轮，或回程前热身收尾，这里是我最常推荐的"垫场"。离机场近，时间好安排。', article:'/zh/guides/maioris' },
  { id:'vall-dor', en:"Vall d'Or Golf", zhDesc:'东部南段 · 越打越好的海景场', region:'east', regionZh:'东部（南段海岸）', level:2, budget:1, difficulty:'6/10 · 前九紧凑，后九开阔', price:'参考范围 €99–€132（约 ¥770–¥1,030）', tags:['scenic','photo','value'], photoUrl:'/images/courses/vall-dor.webp', photoAlt:"Vall d'Or coastal sea views", forWho:'喜欢"越打越好"节奏、想看东海岸海景的球手。', why:'前九洞紧凑传统，后九洞豁然开朗，更宽的走廊、更多空间感，海景在东海岸球场中独树一帜。一轮球像两段旅程。', photo:'后九海景可拍照 · 安静 · 性价比好', andy:'这座球场的设计逻辑是前九偏紧、后九开阔带海景——耐心打完前九，后半段的视野和走廊会明显不同。东海岸球场里，后九的海景角度在同类中较少见。', article:'/zh/guides/vall-dor' },
  { id:'son-termes', en:'Golf Son Termes', zhDesc:'帕尔马松维达区 · 特拉蒙塔纳山谷球场', region:'palma', regionZh:'帕尔马附近（布尼奥拉）', level:2, budget:2, difficulty:'6/10 · 短距离但地形起伏', price:'参考范围 €85–€110（约 ¥660–¥860）', tags:['scenic','value','photo'], photoUrl:'/images/courses/son-termes.webp', photoAlt:'Son Termes mountain valley course', forWho:'想在山谷中打球、喜欢风景胜过距离的球手。', why:'建在特拉蒙塔纳山谷里，感觉完全融入周围景观。距离短（Par 70），但不断的高度变化补偿了距离。球道窄，推荐用球车。', photo:'山谷风景 · 自然安静 · 推荐用球车', andy:'这座球场最特别的是山在每个洞都围绕着你——感觉完全不同。距离短但地形复杂，这是个让人放松心态认真打球的地方。', article:'/zh/guides/son-termes' },
  { id:'santa-ponsa-2', en:'Golf Santa Ponsa 2', zhDesc:'西南部 · 会员球场，安静且有战术', region:'southwest', regionZh:'西南部（圣彭萨）', level:2, budget:2, difficulty:'7/10 · 球道窄，需要精准定位', price:'参考范围 €65–€88（约 ¥500–¥690）', tags:['famous','challenge','business'], photoUrl:'/images/courses/santa-ponsa-2.webp', photoAlt:'Santa Ponsa 2 members course', forWho:'想打安静、战术性强的球场的球手。需要会员或陪同入场。', why:'会员球场，通常人少。很多开球台上球杆选择比距离更重要——混合球杆往往比木杆更明智。树木众多，球放错位置就得打回来。第 18 洞果岭形状像马略卡岛本身。', photo:'会员/陪同入场 · 安静且战术性 · 第18洞独特', andy:'这里的静谧感和球道宽度对比很鲜明——宽的地方开始窄了，你会意识到精准定位比距离重要。', article:'/zh/guides/santa-ponsa-2' },
  { id:'santa-ponsa-3', en:'Golf Santa Ponsa 3', zhDesc:'西南部 · 9洞学习和热身球场', region:'southwest', regionZh:'西南部（圣彭萨）', level:1, budget:1, difficulty:'4/10 · 9洞，适合热身', price:'参考范围 €25–€30（约 ¥195–¥235）', tags:['easy','family','value'], photoUrl:'/images/courses/santa-ponsa-3.webp', photoAlt:'Santa Ponsa 3 nine-hole course', forWho:'初学者、想热身、或只有时间打9洞的球手。需要会员或陪同。', why:'9洞穿过住宅社区。大多数洞很短，非常适合初学者或想练习上果岭技术的球手。第二洞看起来简单但需要精准——这是9洞球场应该的样子。', photo:'会员/陪同入场 · 9洞热身 · 适合初学者', andy:'9洞球场就该这样——短距离但技术要求真实。第二洞是我最喜欢的小球场洞——距离骗人。', article:'/zh/guides/santa-ponsa-3' },
  { id:'son-antem-east', en:'Golf Son Antem East', zhDesc:'南部 · 友好宽阔，马略卡度假风', region:'south', regionZh:'南部（柳克马约尔）', level:1, budget:2, difficulty:'6/10 · 球道宽，5个湖', price:'参考范围 €90–€140（约 ¥700–¥1,090）', tags:['easy','family','value'], photoUrl:'/images/courses/son-antem-east.webp', photoAlt:'Son Antem East resort course', forWho:'初学者和度假打球的家庭。属于度假村，设施完整。', why:'宽阔、友好的球道，适合还在建立信心的球手。5个湖和长度让好球手也有兴趣。建在前打猎庄园上，靠近柳克马约尔。', photo:'适合亲子 · 度假风 · 马略卡设施', andy:'东场是两个 Son Antem 里更温和的——球道宽，湖是挑战，不是惩罚。度假打球的完美选择。', article:'/zh/guides/son-antem-east' },
  { id:'son-antem-west', en:'Golf Son Antem West', zhDesc:'南部 · 比赛场地，考验更大', region:'south', regionZh:'南部（柳克马约尔）', level:2, budget:2, difficulty:'7/10 · 球道窄，果岭难', price:'参考范围 €90–€135（约 ¥700–¥1,050）', tags:['challenge','business'], photoUrl:'/images/courses/son-antem-west.webp', photoAlt:'Son Antem West championship course', forWho:'想要更大挑战、喜欢度假村设施的稳定球手。', why:'两个 Son Antem 中更难的一个，也是度假村举办比赛的地方。球道窄，沙坑环绕果岭，穿过传统马略卡庄园（Finca），能看到兰达山。', photo:'比赛场地 · 山景 · 考验大', andy:'西场和东场完全不同性格——东场友好，西场严肃。这是度假村真正的比赛球场。', article:'/zh/guides/son-antem-west' },
  { id:'pollensa', en:'Golf Pollença', zhDesc:'北部 · 小镇入口热身球场', region:'north', regionZh:'北部（波伦萨）', level:1, budget:1, difficulty:'4/10 · 9洞，山景', price:'参考范围 €55–€65（约 ¥430–¥500）', tags:['easy','value','scenic'], photoUrl:'/images/courses/pollensa.webp', photoAlt:'Golf Pollença nine-hole course', forWho:'想要简单热身、或在波伦萨小镇停留时快速下场的球手。', why:'9洞，融入波伦萨小镇山坡，能看到特拉蒙塔纳和波伦萨湾景色。何塞·甘塞多 1986 年设计。简单热身或不想承诺整轮的好选择。', photo:'9洞热身 · 小镇景色 · 性价比好', andy:'这是9洞球场该做的样子——不是"练习"，而是真实球场体验，就是距离短一点。', article:'/zh/guides/pollensa' },
  { id:'rotana', en:'Reserva Rotana', zhDesc:'东部 · 酒店私人球场', region:'east', regionZh:'东部（马纳科尔）', level:2, budget:3, difficulty:'6/10 · 9洞，酒店专属', price:'参考范围：酒店客人免费', tags:['luxury','easy'], photoUrl:'/images/courses/rotana.webp', photoAlt:'Reserva Rotana private hotel course', forWho:'入住 Reserva Rotana 酒店的客人。', why:'9洞私人球场，仅限酒店客人。酒店现在把 Rotana Greens 作为客人体验的一部分——不限下场次数、练习场、短洞区。轻松度假节奏，私人庄园感。', photo:'酒店专属 · 私人体验 · 练习设施', andy:'如果住在 Rotana，这是酒店体验的一部分——不是竞技，是放松。', article:'/zh/guides/rotana' },
  { id:'t-golf-calvia', en:'T Golf Calvià (Poniente)', zhDesc:'西南部 · 15个湖，全岛顶级体验', region:'southwest', regionZh:'西南部（卡尔维亚）', level:2, budget:3, difficulty:'7/10 · 中高难度，15个湖', price:'参考范围 €170–€210（约 ¥1,320–¥1,640）', tags:['famous','luxury','business'], photoUrl:'/images/courses/t-golf-calvia.webp', photoAlt:'T Golf Calvià premium course', forWho:'想要全岛最佳整体体验的球手。', why:'全岛最佳整体高尔夫体验之一。1978 年原始设计，2022 年耗资 1000 万欧元翻新。优秀的养护、很好的服务、球会餐厅是岛上最好的。15 个湖、宽球道、大果岭。', photo:'顶级养护 · 最佳球会设施 · 适合商务接待', andy:'如果你想要"完整"的高尔夫体验——课程、设施、人员、景色——这是岛上最接近的地方。', article:'/zh/guides/t-golf-calvia' },
  { id:'palma-pitch-putt', en:'Palma Pitch & Putt', zhDesc:'帕尔马市中心 · 初学者和儿童入门', region:'palma', regionZh:'帕尔马市中心', level:1, budget:1, difficulty:'2/10 · Par 27，9洞', price:'参考范围 €14–€22（约 ¥110–¥170）', tags:['easy','family','firsttime'], photoUrl:'/images/courses/palma-pitch-putt.webp', photoAlt:'Palma Pitch & Putt beginner course', forWho:'完全初学者、儿童、或非打球伴侣想试试高尔夫。', why:'岛上唯一官方 pitch & putt。9洞，Par 27，638 米总长。所有洞都是 Par 3，距离 50–100 米，考验精准而不是力量。€14（9洞）或 €22（18洞）。有球杆租赁。', photo:'初学者首选 · 儿童适合 · 非常便宜', andy:'如果有非打球的人想体验高尔夫，或者孩子想学，这是完美的起点。无压力，真实比赛。', article:'/zh/guides/palma-pitch-putt' },
]

function tagScore(course, tag, pts) {
  return course.tags.includes(tag) ? pts : 0
}

const QUESTIONS = [
  {
    id:'level', title:'您目前的球技水平？', sub:'诚实选择，推荐会更准确，选错球场是最常见的遗憾',
    options:[
      { label:'初学者', note:'打球不到一年', value:1 },
      { label:'休闲球手', note:'偶尔下场，享受为主', value:2 },
      { label:'稳定球手', note:'能稳定打完 18 洞', value:3 },
      { label:'低差点球手', note:'差点 18 以内', value:4 },
    ],
    score(c, v) {
      if (v >= c.level) return 8
      if (v === c.level - 1) return 2
      return -20
    },
  },
  {
    id:'style', title:'这次旅行的风格更接近？', sub:'',
    options:[
      { label:'高端度假', value:'luxury' },
      { label:'亲子轻松', value:'family' },
      { label:'风景优先', value:'scenic' },
      { label:'挑战球场', value:'challenge' },
      { label:'名气球场', value:'famous' },
    ],
    score(c, v) { return tagScore(c, v, 10) },
  },
  {
    id:'pref', title:'选球场时，您最看重？', sub:'',
    options:[
      { label:'最有名气', value:'famous' },
      { label:'最漂亮', value:'scenic' },
      { label:'最适合拍照', value:'photo' },
      { label:'最有挑战', value:'challenge' },
      { label:'最轻松', value:'easy' },
    ],
    score(c, v) { return tagScore(c, v, 8) },
  },
  {
    id:'budget', title:'果岭费预算大概在？', sub:'价格均为参考范围，随季节浮动，以预订时确认为准',
    options:[
      { label:'性价比优先', note:'约 €70–110 / ¥550–860', value:1 },
      { label:'中高端', note:'约 €100–150 / ¥780–1,170', value:2 },
      { label:'高端', note:'约 €150 以上 / ¥1,170 以上', value:3 },
      { label:'不太考虑预算', value:4 },
    ],
    score(c, v) {
      if (v === 4) return c.budget === 3 ? 4 : 2
      if (v === c.budget) return 6
      if (Math.abs(v - c.budget) === 1) return 2
      return -6
    },
  },
  {
    id:'region', title:'您住在岛上哪个区域？', sub:'马略卡开车横跨全岛约 1 小时，好球场值得专程去',
    options:[
      { label:'西南部', note:'圣彭萨 / 安德拉特斯一带', value:'southwest' },
      { label:'帕尔马附近', note:'首府及周边', value:'palma' },
      { label:'北部', note:'阿尔库迪亚 / 波伦萨一带', value:'north' },
      { label:'都可以', note:'愿意为好球场开车', value:'any' },
    ],
    score(c, v) {
      if (v === 'any') return 0
      if (c.region === v) return 6
      if (c.region === 'palma') return 2
      return -2
    },
  },
  {
    id:'pro', title:'需要 Andy 教练陪打或下场指导吗？', sub:'陪打 = 同组下场，指导发生在球场上，而不是打完以后',
    options:[
      { label:'是，想安排', value:'yes' },
      { label:'想了解一下', value:'maybe' },
      { label:'暂时不需要', value:'no' },
    ],
    score(c, v) {
      if (v === 'yes' || v === 'maybe') return tagScore(c, 'challenge', 2) + (c.id === 'pula' ? 3 : 0)
      return 0
    },
  },
  {
    id:'concierge', title:'需要帮您安排餐厅、酒店或接送吗？', sub:'全程中文沟通，到场前一切都已安排好',
    options:[
      { label:'是，需要', value:'yes' },
      { label:'可能需要', value:'maybe' },
      { label:'不需要', value:'no' },
    ],
    score(c, v) { return v !== 'no' ? tagScore(c, 'luxury', 1) : 0 },
  },
]

const RANK_LABELS = ['首选推荐', '第二推荐', '第三推荐']
const TAG_ZH = {
  famous:'最有名气', scenic:'风景出色', photo:'适合拍照', challenge:'有挑战',
  easy:'轻松友好', family:'适合亲子', business:'适合商务接待',
  luxury:'高端体验', value:'性价比', firsttime:'适合第一次来马略卡',
}

function recommend(answers) {
  return COURSES
    .map(c => {
      let total = 0
      QUESTIONS.forEach(q => {
        const v = answers[q.id]
        if (v !== undefined) total += q.score(c, v)
      })
      return { course: c, total }
    })
    .sort((a, b) => b.total - a.total)
    .slice(0, 3)
}

export default function ZhCourseSelectorClient() {
  const [phase, setPhase] = useState('quiz') // 'intro' | 'quiz' | 'results'
  const [stepIdx, setStepIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [results, setResults] = useState(null)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailSending, setEmailSending] = useState(false)

  const q = QUESTIONS[stepIdx]
  const progress = ((stepIdx) / QUESTIONS.length) * 100

  function startQuiz() {
    setPhase('quiz')
    window.scrollTo({ top: 0 })
  }

  function selectOption(qId, val) {
    const newAnswers = { ...answers, [qId]: val }
    setAnswers(newAnswers)
    setTimeout(() => {
      if (stepIdx < QUESTIONS.length - 1) {
        setStepIdx(s => s + 1)
        window.scrollTo({ top: 0 })
      } else {
        const picks = recommend(newAnswers)
        setResults(picks)
        setPhase('results')
        window.scrollTo({ top: 0 })
      }
    }, 220)
  }

  function goBack() {
    if (stepIdx > 0) {
      setStepIdx(s => s - 1)
      window.scrollTo({ top: 0 })
    }
  }

  function restart() {
    setPhase('quiz')
    setStepIdx(0)
    setAnswers({})
    setResults(null)
    setEmail('')
    setEmailSent(false)
    setEmailError(false)
    window.scrollTo({ top: 0 })
  }

  async function sendEmail() {
    if (!email || !email.includes('@')) return
    setEmailSending(true)
    try {
      const res = await fetch('/api/zh-selector-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          courses: results.map(p => ({ id: p.course.id, en: p.course.en, zh: p.course.zhDesc })),
          source: 'zh-course-selector',
          timestamp: new Date().toISOString(),
        }),
      })
      setEmailSending(false)
      if (res.ok) { setEmailSent(true) }
      else { setEmailError(true) }
    } catch {
      setEmailSending(false)
      setEmailError(true)
    }
  }

  const wantsPro = answers.pro === 'yes' || answers.pro === 'maybe'

  return (
    <>
      <style jsx>{`
        .zh-wrap { max-width: 720px; margin: 0 auto; padding: 48px 24px 120px; }
        /* Hero */
        .zh-hero { background: #2D4A3E; color: #F7F4EF; padding: 52px 24px 48px; text-align: center; }
        .zh-eyebrow-wrap { display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 16px; }
        .zh-eyebrow-line { width: 28px; height: 1px; background: #B8973C; flex-shrink: 0; }
        .zh-eyebrow-text { font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #CBA968; }
        .zh-hero h1 { font-family: 'Cormorant Garamond', 'Songti SC', Georgia, serif; font-weight: 500; font-size: clamp(2rem, 5vw, 3rem); line-height: 1.1; color: #F7F4EF; max-width: 600px; margin: 0 auto; }
        .zh-hero p { font-weight: 300; font-size: 1rem; line-height: 1.6; color: rgba(247,244,239,0.78); max-width: 480px; margin: 16px auto 0; }
        /* Intro card */
        .intro-card { background: #fff; padding: 52px 48px; margin-top: 40px; box-shadow: 0 22px 60px rgba(18,17,15,0.08); text-align: center; border-top: 3px solid #B8973C; }
        .intro-card h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(1.5rem, 3.5vw, 2rem); color: #1A1916; margin-bottom: 14px; line-height: 1.1; }
        .intro-card p { font-size: 15px; color: #2C2A27; margin-bottom: 0; line-height: 1.72; }
        .intro-trust { display: flex; flex-direction: column; gap: 6px; align-items: center; margin: 28px 0 32px; padding: 20px 0; border-top: 1px solid rgba(184,151,60,0.25); border-bottom: 1px solid rgba(184,151,60,0.25); }
        .intro-trust-label { font-size: 9px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: #B8973C; margin-bottom: 6px; }
        .intro-trust span { font-size: 12px; font-weight: 300; color: #8A7F74; letter-spacing: 0.03em; }
        .intro-trust span::before { content: ''; }
        /* Progress */
        .progress-row { display: flex; align-items: center; gap: 14px; padding: 32px 0 20px; }
        .progress-track { flex: 1; height: 1px; background: #E0D8CB; overflow: hidden; }
        .progress-fill { height: 100%; background: #B8973C; transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1); }
        .progress-label { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; color: #8A7F74; white-space: nowrap; text-transform: uppercase; }
        /* Question card */
        .q-card { background: #fff; border: 1px solid rgba(26,25,22,0.08); padding: 48px 42px; box-shadow: 0 22px 60px rgba(18,17,15,0.08); }
        .q-num { font-size: 10px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #B8973C; margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
        .q-num::before { content: ''; display: block; width: 20px; height: 1px; background: #B8973C; }
        .q-card h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(1.35rem, 3vw, 1.65rem); line-height: 1.15; color: #1A1916; margin-bottom: 6px; }
        .q-sub { font-size: 13px; font-weight: 300; color: #8A7F74; margin-bottom: 26px; line-height: 1.6; }
        .opt-list { display: flex; flex-direction: column; gap: 8px; }
        .zh-opt { display: flex; justify-content: space-between; align-items: center; gap: 16px; border: 1px solid #E0D8CB; background: #F7F4EF; padding: 16px 20px; cursor: pointer; font-size: 15px; font-weight: 300; text-align: left; color: #2C2A27; transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, background 0.3s; width: 100%; font-family: inherit; }
        .zh-opt:hover { transform: translateY(-3px); border-color: rgba(184,151,60,0.5); }
        .zh-opt.selected { border-color: #2D4A3E; background: #2D4A3E; color: #F7F4EF; }
        .opt-note { font-size: 11px; font-weight: 400; letter-spacing: 0.04em; color: #8A7F74; text-align: right; flex-shrink: 0; }
        .zh-opt.selected .opt-note { color: rgba(212,176,104,0.82); }
        .q-back { margin-top: 12px; padding: 8px 0; background: none; border: none; color: #8A7F74; font-size: 11px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; cursor: pointer; font-family: inherit; }
        .q-back:hover { color: #2D4A3E; }
        /* Results */
        .results-header { text-align: center; padding: 40px 0 28px; }
        .results-header h2 { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(1.8rem, 4vw, 2.6rem); line-height: 1.08; color: #1A1916; margin-bottom: 10px; }
        .results-header p { font-size: 14px; color: #8A7F74; }
        .eyebrow-result { display: inline-flex; align-items: center; gap: 12px; font-size: 10px; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: #B8973C; margin-bottom: 16px; }
        .eyebrow-result::before { content: ''; display: block; flex-shrink: 0; width: 28px; height: 1px; background: #B8973C; }
        /* Course card */
        .result-card { background: #fff; border: 1px solid rgba(26,25,22,0.08); box-shadow: 0 22px 60px rgba(18,17,15,0.08); margin-bottom: 42px; overflow: hidden; }
        .cc-photo { width: 100%; height: 240px; background: linear-gradient(135deg, #2D4A3E 0%, #1A1916 100%); display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; }
        .cc-photo-label { position: absolute; text-align: center; padding: 0 24px; font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: 1.5rem; color: rgba(247,244,239,0.92); }
        .cc-photo img { position: relative; z-index: 1; width: 100%; height: 100%; object-fit: cover; }
        .cc-head { background: #2D4A3E; padding: 36px 36px 0; }
        .cc-head-inner { border-bottom: 1px solid rgba(212,176,104,0.28); padding-bottom: 28px; }
        .cc-rank { display: inline-block; font-size: 8px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; background: #B8973C; color: #1A1916; padding: 5px 10px; margin-bottom: 14px; }
        .cc-head h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(1.5rem, 4vw, 2rem); line-height: 1.1; color: #fff; }
        .cc-zh { font-size: 12px; font-weight: 400; letter-spacing: 0.06em; color: rgba(247,244,239,0.68); margin-top: 6px; }
        .cc-tags { display: flex; flex-wrap: wrap; gap: 0; padding: 12px 0 0; }
        .cc-tags span { font-size: 8px; font-weight: 400; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(255,255,255,0.62); padding: 0 8px 0 0; line-height: 1.2; }
        .cc-tags span::after { content: ' ·'; margin-left: 6px; color: rgba(255,255,255,0.4); }
        .cc-tags span:last-child::after { content: ''; }
        .cc-body { padding: 36px 36px 42px; }
        .cc-row { display: flex; gap: 16px; margin-bottom: 20px; font-size: 14px; font-weight: 300; line-height: 1.72; }
        .cc-label { flex: 0 0 76px; padding-top: 1px; font-size: 9px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; color: #B8973C; }
        .cc-val { flex: 1; color: #2C2A27; }
        .cc-andy { background: #F4EDD8; border-left: 2px solid #B8973C; padding: 22px 24px; margin: 26px 0; font-family: 'Cormorant Garamond', Georgia, serif; font-style: italic; font-size: 1.05rem; line-height: 1.55; color: #2D4A3E; }
        .cc-andy strong { font-style: normal; font-weight: 500; font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; display: block; margin-bottom: 8px; color: #B8973C; font-family: sans-serif; }
        .cc-links { display: flex; gap: 10px; flex-wrap: wrap; padding-top: 4px; }
        .cc-btn { flex: 1; min-width: 140px; display: inline-flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; text-decoration: none; padding: 14px 20px; border-radius: 999px; cursor: pointer; transition: background 0.3s, color 0.3s, transform 0.3s; font-family: inherit; border: 1px solid currentColor; }
        .cc-btn-outline { color: #1A1916; border-color: rgba(26,25,22,0.24); background: transparent; }
        .cc-btn-outline:hover { background: #1A1916; color: #F7F4EF; transform: translateY(-2px); }
        .cc-btn-gold { color: #1A1916; background: #B8973C; border-color: #B8973C; }
        .cc-btn-gold:hover { background: #D4B068; border-color: #D4B068; transform: translateY(-2px); }
        /* Final block */
        .final-card { background: #1A1916; padding: 48px; color: #F7F4EF; box-shadow: 0 30px 80px rgba(18,17,15,0.16); margin-top: 28px; }
        .final-card h3 { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 500; font-size: clamp(1.5rem, 3.5vw, 2rem); line-height: 1.1; color: #fff; text-align: center; margin-bottom: 10px; }
        .final-card > p { font-size: 14px; line-height: 1.72; color: rgba(247,244,239,0.75); text-align: center; margin-bottom: 32px; max-width: 460px; margin-left: auto; margin-right: auto; }
        .wechat-box { background: #2D4A3E; border: 1px solid rgba(212,176,104,0.35); padding: 36px 32px; text-align: center; margin-bottom: 24px; cursor: pointer; transition: border-color 0.3s; }
        .wechat-box:hover { border-color: rgba(212,176,104,0.7); }
        .qr-wrap { width: 132px; height: 132px; background: #F7F4EF; display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; border: 1px dashed rgba(184,151,60,0.5); overflow: hidden; }
        .qr-wrap img { width: 100%; height: 100%; object-fit: contain; }
        .qr-label { font-size: 14px; color: #F7F4EF; margin-bottom: 4px; }
        .wechat-id { font-size: 15px; font-weight: 400; letter-spacing: 0.06em; color: #D4B068; margin-bottom: 4px; }
        .wechat-sub { font-size: 11px; letter-spacing: 0.04em; color: rgba(247,244,239,0.55); }
        .final-actions { display: flex; flex-direction: column; gap: 10px; }
        .email-row { display: flex; gap: 8px; }
        .email-input { flex: 1; min-width: 0; border: 1px solid rgba(247,244,239,0.22); background: rgba(247,244,239,0.07); padding: 0 18px; height: 46px; font-size: 13px; font-weight: 300; color: #F7F4EF; border-radius: 999px; transition: border-color 0.25s; font-family: inherit; }
        .email-input::placeholder { color: rgba(247,244,239,0.42); }
        .email-input:focus { outline: none; border-color: rgba(212,176,104,0.7); }
        .email-success { font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #D4B068; text-align: center; padding: 4px 0; }
        .email-error { font-size: 12px; color: #D4B068; text-align: center; }
        .btn-action { display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 500; letter-spacing: 0.16em; text-transform: uppercase; text-decoration: none; padding: 14px 30px; min-height: 46px; border: 1px solid currentColor; border-radius: 999px; cursor: pointer; transition: background 0.3s, color 0.3s, transform 0.3s; font-family: inherit; }
        .btn-gold-solid { color: #1A1916; background: #B8973C; border-color: #B8973C; }
        .btn-gold-solid:hover { background: #D4B068; }
        .btn-outline-light { color: #fff; border-color: rgba(255,255,255,0.34); background: transparent; }
        .btn-outline-light:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.68); }
        .whatsapp-row { text-align: center; margin-top: 20px; font-size: 12px; color: rgba(247,244,239,0.55); }
        .whatsapp-row a { color: #D4B068; text-underline-offset: 3px; }
        .restart { text-align: center; padding: 28px 0 0; }
        .restart button { background: none; border: none; cursor: pointer; font-size: 11px; font-weight: 400; letter-spacing: 0.1em; text-transform: uppercase; color: #8A7F74; text-decoration: underline; text-underline-offset: 4px; font-family: inherit; }
        .restart button:hover { color: #2D4A3E; }
        @media (min-width: 860px) {
          .results-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
          .results-grid .result-card { margin-bottom: 0; }
        }
        @media (max-width: 520px) {
          .zh-wrap { padding: 0 16px 80px; }
          .intro-card, .final-card { padding: 48px 24px; }
          .q-card { padding: 32px 24px; }
          .cc-head { padding: 24px 24px 0; }
          .cc-body { padding: 24px 24px 28px; }
          .cc-row { flex-direction: column; gap: 3px; }
          .cc-label { flex: none; }
          .cc-links { flex-direction: column; }
          .email-row { flex-direction: column; }
        }
      `}</style>

      {/* HERO */}
      <section className="zh-hero">
        <div className="zh-eyebrow-wrap">
          <span className="zh-eyebrow-line" />
          <span className="zh-eyebrow-text">免费工具 · Andy 教练</span>
        </div>
        <h1>马略卡高尔夫球场智能推荐</h1>
        <p>回答 7 个问题，根据您的球技、预算和行程，为您匹配最值得打的 3 座球场。</p>
      </section>

      <div className="zh-wrap">

        {/* INTRO */}
        {phase === 'intro' && (
          <div className="intro-card">
            <h2>来马略卡打球，先选对球场。</h2>
            <p>岛上 24 座球场，难度与价格差异极大。回答 7 个问题，Andy 教练为您精准匹配最合适的 3 座。</p>
            <div className="intro-trust">
              <div className="intro-trust-label">Andy 教练资历</div>
              <span>上海执教 11 年 · 普通话流利</span>
              <span>中国国家队球员教练</span>
              <span>PGA 高级职业教练 · Trackman 大师认证</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button className="btn-action btn-gold-solid" onClick={startQuiz}>开始选球场</button>
            </div>
          </div>
        )}

        {/* QUIZ */}
        {phase === 'quiz' && q && (
          <div>
            <div className="progress-row">
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <span className="progress-label">{stepIdx + 1} / {QUESTIONS.length}</span>
            </div>
            <div className="q-card">
              <div className="q-num">问题 {stepIdx + 1} / {QUESTIONS.length}</div>
              <h3>{q.title}</h3>
              {q.sub && <p className="q-sub">{q.sub}</p>}
              <div className="opt-list">
                {q.options.map(opt => (
                  <button
                    key={String(opt.value)}
                    className={`zh-opt${answers[q.id] === opt.value ? ' selected' : ''}`}
                    onClick={() => selectOption(q.id, opt.value)}
                  >
                    <span>{opt.label}</span>
                    {opt.note && <span className="opt-note">{opt.note}</span>}
                  </button>
                ))}
              </div>
              {stepIdx > 0 && (
                <button className="q-back" onClick={goBack}>← 上一题</button>
              )}
            </div>
          </div>
        )}

        {/* RESULTS */}
        {phase === 'results' && results && (
          <div>
            <div className="results-header">
              <div className="eyebrow-result">为您匹配的结果</div>
              <h2>这 3 座球场，最适合您这次行程。</h2>
              <p>由 Andy 教练的实地打球经验匹配，按适合程度排序。</p>
            </div>

            <div className="results-grid">
              {results.map((p, i) => {
                const c = p.course
                return (
                  <article key={c.id} className="result-card">
                    <div className="cc-photo">
                      <span className="cc-photo-label">{c.en}</span>
                      <img src={COURSE_IMGS[c.id] || c.photoUrl} alt={c.photoAlt} loading="lazy" onError={e => { e.target.style.display = 'none' }} />
                    </div>
                    <div className="cc-head">
                      <div className="cc-head-inner">
                        <div className="cc-rank">{RANK_LABELS[i]} · No.{i + 1}</div>
                        <h3>{c.en}</h3>
                        <div className="cc-zh">{c.zhDesc}</div>
                        <div className="cc-tags">
                          {c.tags.map(t => <span key={t}>{TAG_ZH[t] || t}</span>)}
                        </div>
                      </div>
                    </div>
                    <div className="cc-body">
                      <div className="cc-row"><span className="cc-label">适合谁</span><span className="cc-val">{c.forWho}</span></div>
                      <div className="cc-row"><span className="cc-label">推荐理由</span><span className="cc-val">{c.why}</span></div>
                      <div className="cc-row"><span className="cc-label">难度</span><span className="cc-val">{c.difficulty}</span></div>
                      <div className="cc-row"><span className="cc-label">地区</span><span className="cc-val">{c.regionZh}</span></div>
                      <div className="cc-row"><span className="cc-label">价格参考</span><span className="cc-val">{c.price}，以预订时确认为准</span></div>
                      <div className="cc-row"><span className="cc-label">场景标签</span><span className="cc-val">{c.photo}</span></div>
                      <div className="cc-andy">
                        <strong>Andy 教练建议：</strong>
                        {c.andy}
                        {wantsPro && ' 您提到想了解陪打，这座球场我可以全程同组陪同，指导就发生在球场上。'}
                      </div>
                      <div className="cc-links">
                        <a className="cc-btn cc-btn-outline" href={c.article}>中文球场攻略 →</a>
                        <a className="cc-btn cc-btn-gold" href="/zh/contact">预约咨询</a>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>

            {/* Final conversion */}
            <div className="final-card">
              <h3>下一步：让这次行程真正落地。</h3>
              <p>球场只是开始。开球时间、陪打、餐厅、酒店和接送，都可以由我亲自安排，全程中文沟通。</p>

              <div className="wechat-box">
                <div className="qr-wrap">
                  <img src="/images/wechat-qr.png" alt="Andy 教练微信二维码" onError={e => { e.target.style.display = 'none' }} />
                </div>
                <p className="qr-label">微信扫码，直接和 Andy 教练沟通</p>
                <p className="wechat-id">微信号：andygriffiths1</p>
                <p className="wechat-sub">中国客人的首选联系方式 · 24 小时内回复，通常更快</p>
              </div>

              <div className="final-actions">
                {emailSent ? (
                  <p className="email-success">✓ 推荐结果将发送到您的邮箱（中文版，附英文球场名，方便预订时使用）</p>
                ) : (
                  <>
                    <div className="email-row">
                      <input
                        type="email"
                        className="email-input"
                        placeholder="输入邮箱，接收这份中文推荐结果"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        aria-label="邮箱"
                      />
                      <button className="btn-action btn-gold-solid" onClick={sendEmail} disabled={emailSending}>
                        {emailSending ? '发送中…' : '发送'}
                      </button>
                    </div>
                    {emailError && <p className="email-error">发送失败，请检查邮箱后重试</p>}
                  </>
                )}
                <a className="btn-action btn-gold-solid" href="/zh/contact">联系 Andy 教练规划行程</a>
                <a className="btn-action btn-outline-light" href="/zh/play-with-a-pro">预约陪打 / 下场指导体验</a>
                <a className="btn-action btn-outline-light" href="/zh/guides">查看中文球场攻略</a>
              </div>

              <p className="whatsapp-row">
                人在海外，习惯用 WhatsApp？<a href="https://wa.me/34624466702" target="_blank" rel="noopener noreferrer">点这里联系</a>
              </p>
            </div>

            <div className="restart">
              <button onClick={restart}>重新选择 / 修改答案</button>
            </div>
          </div>
        )}

      </div>
    </>
  )
}
