/* skill filter */

const skill_type_string = [
['符石轉水', '符石轉火', '符石轉木', '符石轉光', '符石轉暗', '符石轉心'],
['符石轉水強化', '符石轉火強化', '符石轉木強化', '符石轉光強化', '符石轉暗強化', '符石轉心強化'],
['水轉其他', '火轉其他', '木轉其他', '光轉其他', '暗轉其他', '心轉其他', '指定符石轉其他'],
['符石兼具水', '符石兼具火', '符石兼具木', '符石兼具光', '符石兼具暗', '符石兼具心'],
['水屬追打', '火屬追打', '木屬追打', '光屬追打', '暗屬追打', '無屬追打', '自身追打', '全隊追打'],
['引爆', '整版引爆', '直行引爆', '橫行引爆', 'X型引爆', '多次引爆', '水符石引爆', '火符石引爆', '木符石引爆', '光符石引爆', '暗符石引爆', '心符石引爆', '水外符石引爆', '火外符石引爆', '木外符石引爆', '光外符石引爆', '暗外符石引爆', '心外符石引爆', '指定符石引爆', '指定符石外引爆'],
['人族符石製造', '獸族符石製造', '妖族符石製造', '龍族符石製造', '神族符石製造', '魔族符石製造', '機械族符石製造'],
['符石強化', '大幅轉版', '固定轉版', '還原版面', '移除符石', '禁珠', '改變掉落機率', '強制掉落', '改變消除方式', '增加符石'],
['減傷', '意志', '敵方減攻', '迴避', '回血', '我方傷害吸收', '敵方傷害吸收'],
['破防', '直傷', '破防直傷', '屬性剋制改變', '排珠', '延長轉珠時間'],
['增傷', '界王拳', '攻擊轉屬', '增回', '我方攻擊力吸收', '共鳴'],
['對人類增傷', '對獸類增傷', '對妖精類增傷', '對龍類增傷', '對神族增傷', '對魔族增傷', '對機械族增傷'],
['增加Combo', '增加Ex.Combo', '延遲', '減CD', '回復EP', '附加消除', '龍脈儀蓄能', '行動值提升', '隨時關閉', '變身', '合體'],
['無法行動', '敵方轉屬', '凍結敵方', '點燃敵方', '石化敵方', '電擊敵方', '寄生敵方', '敵方中毒', '魅惑敵方', '暈擊敵方'],
['解鎖', '防鎖', '防毒', '防爆', '防反擊', '無視燃燒', '無視黏腐', '無視暴風', '黑白還原', '碎裂還原', '無視拼圖盾', '無視攻前盾', '無視三屬盾', '無視五屬盾', '無視固定連擊盾', '無視追擊零化', '無視連擊法印'],
['風化符石處理', '凍結符石處理', '弱化符石處理', '電擊符石處理', '石化符石處理', '化血符石處理'],
['我方減攻', '我方減回', '我方扣血', '限制成員攻擊', '我方受傷增加']
];

const skill_type_string_en = [
['water conversion','fire conversion','wood conversion','light conversion','dark conversion','heart conversion'],
['Enchanted water conversion','Enchanted fire conversion','Enchanted wood conversion','Enchanted light conversion','Enchanted dark conversion','Runestone turning to heart strengthening'],
['Water to other','Fire to other','Wood to other','Light to other','Dark to other','Heart to other','Specified rune to other'],
['Runes possess water effect','Runes possess fire effect','Runes possess wood effect','Runes possess light effect','Runes possess dark effect','Runes possess heart effect'],
['Extra Water attack','Extra Fire attack','Extra Wood attack','Extra Light attack','Extra Dark attack','Extra non-attributive attack','Self extra attack', ' The whole team extra attack'],
['Explode runestones','Explode all runestones','Explode column','Explode row','X-type explode','Multiple explode','Explode Water runestones','Explode Fire runestones','Explode earth runestones','Explode light runestones','Explode dark runestones','Explode heart runestones','Explode water runestones','Explode fire runestones','Explode wood runestones', ' Detonate runestones except the light','Explode runestones except the dark','Explode runestones except heart','Explode runestones except of the heart','Explode runes except the specified runes'],
['Generate Human runestones','Generate Beast runestones','Generate Elf runestones','Generate Dragon runestones','Generate God runestones','Generate Demon runestones','Generate Machina runestones'],
['Runestone enchantment','Full board conversion','Fixed conversion','Restore layout','Remove runestones','Drop rate transfer','Change drop probability','Forced drop', 'Change number to dissolve','Add rows of runestones'],
['Damage reduction','Willpower','Enemy damage reduction','Dodge','Recovery','Absorb incoming damage','Convert enemy damage to health'],
['Reduce enemy defence','Sniper','Ignore defence sniper','Change attribute relation','Time tunnel','Extend moving time'],
['Damage boost','Specific card damage boost','Change attack attribute','Recovery boost','Absorb team attack','Synchronize attack'],
['Increase damage to humans','Increase damage to beasts','Increase damage to elves','Increase damage to dragons','Increase damage to gods','Increase damage to demons','Increase damage to machinas'],
['Increase Combo count','Increase Ex.Combo','Delay','Decrease CD','Restore EP','Clear effects','Charge craft apparatus','Increase fuel','Cancel at any time', 'Switching','Combination'],
['Inactivate','Change enemy attribute','Freeze','Ignite','Petrify','Electrify','Parasitism','Poison', 'Enemy attack themselves','stun'],
['Unlock skills','Prevent skills being locked','Prevent poison','explosion-proof','anti-counterattack','ignore burning','ignore sticky','ignore electrified','black and white restoration','Cracked restoration', 'Ignore Puzzle Shield','Ignore Initial Shield','Ignore Three-element Shield','Ignore Five-element Shield','Ignore Fixed Combo Shield','Ignore Attributive Combo Nullifying','Ignore Combo Shield'],
['Restore Weathered','Restore Frozen','Restore Weakened','Restore Electrified','Restore Petrified','Restore Locked for recovery'],
['Reduce team attack','Reduce team recovery','Self damage','Restrict team attacks','Increase damage to self']
];

/* team skill filter */

const team_skill_type_string = [
['增攻', '增回', '增血',  ],
['主動技改變', '組合技能', '隊長技改變', '兼具隊長技能', '龍脈儀能力', ],
['召喚獸轉水', '召喚獸轉火', '召喚獸轉木', '召喚獸轉光', '召喚獸轉暗', ],
['符石轉水', '符石轉火', '符石轉木', '符石轉光', '符石轉暗', '符石轉心'],
['符石轉水強化', '符石轉火強化', '符石轉木強化', '符石轉光強化', '符石轉暗強化', '符石轉心強化'],
['人族符石製造', '獸族符石製造', '妖族符石製造', '龍族符石製造', '神族符石製造', '魔族符石製造', '機械族符石製造'],
['符石強化', '固定轉版'],
['符石兼具水', '符石兼具火', '符石兼具木', '符石兼具光', '符石兼具暗', '符石兼具心',],
['水兼具其他', '火兼具其他', '木兼具其他', '光兼具其他', '暗兼具其他', '心兼具其他',],
['水屬追打', '火屬追打', '木屬追打', '光屬追打', '暗屬追打', '無屬追打'],
['減傷', '護盾', '意志', '迴避', '回血', '我方傷害吸收', '敵方傷害吸收', '敵方減攻'],
['破防', '引爆', '直傷', '爆擊', '溢補攻擊', '屬性剋制改變', '攻擊力共鳴', '回復力共鳴'],
['符石掉落率提升', '強制掉落', '強化珠效果提升', '改變消除方式'],
['進場減CD', '永久減CD', '開技減CD', '其他減CD'], 
['增加Combo', '增加Ex.Combo', '延長轉珠時間', '龍脈儀蓄能', '行動值提升'],
['對人類增傷', '對獸類增傷', '對妖精類增傷', '對龍類增傷', '對神族增傷', '對魔族增傷', '對機械族增傷'],
['無法行動', '寄生敵方', '暈擊敵方'],
['防毒', '無視燃燒', '無視黏腐', '無視電擊', '無視拼圖盾', '無視攻前盾', '無視三屬盾', '無視五屬盾', '無視固定連擊盾'],
['凍結符石處理', '弱化符石處理', '電擊符石處理', '石化符石處理', '化血符石處理'],
['物品掉落增加'],
['我方減回'],
];

const team_skill_activate_string = [
['指定隊長', '指定戰友', '指定雙隊長', '指定隊長戰友', '指定成員', '指定屬性成員', '指定種族成員', '指定稀有度成員', '等級下限', '昇華下限', '裝備龍刻'],
];

const attr_type_string = ['水', '火', '木', '光', '暗'];
const race_type_string = ['人類', '獸類', '妖精類', '龍類', '神族', '魔族', '機械族', '進化素材', '強化素材'];
const star_type_string = ['1', '2', '3', '4', '5', '6', '7', '8'];
const charge_type_string = ['CD', 'EP'];
const option_text = ['單回合', '跨回合', '常駐'];

/* craft filter */
const craft_skill_type_string = [
['符石轉水', '符石轉火', '符石轉木', '符石轉光', '符石轉暗', '符石轉心', '符石強化'],
['直行轉水', '直行轉火', '直行轉木', '直行轉光', '直行轉暗', '直行轉心'],
['水屬追打', '火屬追打', '木屬追打', '光屬追打', '暗屬追打', '無屬追打'],
['減傷', '意志', '迴避', '回血', '我方傷害吸收'],
['直傷', '全體直傷', '單體破防直傷'],
['增傷', '增回', '破防', '反擊'],
['對水增傷', '對火增傷', '對木增傷', '對光增傷', '對暗增傷'],
['延遲', '減CD', '單體轉全體', '無視屬性相剋'],
['無視拼圖盾', '無視五屬盾', '無視攻前盾']
];

const craft_mode_type_string = ['連鎖龍紋', '轉動龍印', '破碎龍咒', '映照龍符', '疾速龍玉', '裂空龍刃', '落影龍璃', '擴散龍結', '鏡像龍丸', '節奏龍弦'];

const craft_attr_type_string = ['沒有限制', '水', '火', '木', '光', '暗'];

const craft_race_type_string = ['沒有限制', '人類', '獸類', '妖精類', '龍類', '神族', '魔族', '機械族'];

const craft_star_type_string = ['1', '2', '3'];

const craft_charge_type_string = ['消除水符石', '消除火符石', '消除木符石', '消除光符石', '消除暗符石', '消除心符石', '消除符石', '發動攻擊', '受到攻擊', '4 Combo以上']


const skill_num = skill_type_string.length;
const attr_num = attr_type_string.length;
const race_num = race_type_string.length;
const star_num = star_type_string.length;
const charge_num = charge_type_string.length;
const activate_num = team_skill_activate_string.length;
const craft_skill_num = craft_skill_type_string.length;
const craft_mode_num = craft_mode_type_string.length;
const craft_attr_num = craft_attr_type_string.length;
const craft_race_num = craft_race_type_string.length;
const craft_star_num = craft_star_type_string.length;
const craft_charge_num = craft_charge_type_string.length;


const blue_str = 'rgb(100, 100, 255)';
const green_str = 'rgb(50, 155, 50)';
const white_str = 'rgb(255, 255, 255)';
const black_str = 'rgb(0, 0, 0)';


const encode_chart = [
    '0','1','2','3','4','5','6','7','8','9',
    'a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z','A','B','C','D',
    'E','F','G','H','I','J','K','L','M','N',
    'O','P','Q','R','S','T','U','V','W','X',
    'Y','Z','+','-'
];

const attr_zh_to_en = {'水': 'w', '火': 'f', '木': 'e', '光': 'l', '暗': 'd'};
const race_zh_to_en = {'人類': 'human', '獸類': 'beast', '妖精類': 'elf', '龍類': 'dragon', '神族': 'god', '魔族': 'demon', '機械族': 'machina', '進化素材': 'evolve', '強化素材': 'level_up'};

const attr_color = {'水': '#3E85D6', '火': '#FC2F28', '木': '#0F9611', '光': '#F8C50E', '暗': '#9B08CA'};

const input_maxlength = 50;