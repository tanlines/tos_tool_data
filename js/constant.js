/* skill filter */

const skill_type_string = [
['Rune stone to water','Rune stone to fire','Rune stone to wood','Rune stone to light','Rune stone to dark','Rune stone to heart'],
['Runestone to water strengthening','Runestone to fire strengthening','Runestone to wood strengthening','Runestone to light strengthening','Runestone to dark strengthening','Runestone turning to heart strengthening'],
['Water to other','Fire to other','Wood to other','Light to other','Dark to other','Heart to other','Specified rune to other'],
['Runestones have water','Runestones have fire','Runestones have wood','Runestones have light','Runestones have dark','Runestones have heart'],
['Water is chasing",'Fire is chasing','Wood is chasing','Light is chasing','Dark is chasing','No property is chasing','Self chasing', ' The whole team is chasing'],
['Detonate','Full page detonation','Straight detonation','Rampund detonation','X-type detonation','Multiple detonation','Water runestone detonation','Fire runestone detonation','Wooden symbol Stone detonation','light runestone detonation','dark runestone detonation','heart runestone detonation','water runestone detonation','fire runestone detonation','wood runestone detonation', ' Detonate runestones outside the light','detonate runestones outside the dark','detonate runestones outside the heart','detonate runestones outside of the heart','detonate runes outside the specified runes'],
['Human runestone manufacturing','Orc runestone manufacturing','Monster runestone manufacturing','Dragon runestone manufacturing','God runestone manufacturing','Devil runestone manufacturing','Mechanical runestone manufacturing Stone Manufacturing'],
['Runestone enhancement','Significant conversion','Fixed conversion','Restore layout','Remove runestones','Forbidden beads','Change drop probability','Forced drop', ' Change the elimination method','Add runestones'],
['Damage reduction','Will','Enemy attack reduction','Avoidance','Recovery','Our damage absorption','Enemy damage absorption'],
['Broken defense','Straight injury','Broken straight injury','Property restraint change','Rolling beads','Extend the bead turning time'],
['Injury bonus','World King's Fist','Attack transfer','Increase back','Our attack power absorption','Resonance'],
['Increase damage to humans','Increase damage to beasts','Increase damage to fairies','Increase damage to dragons','Increase damage to gods','Increase damage to demons','For machinery Family injury'],
['Increase Combo','Increase Ex.Combo','Delay','Decrease CD','Restore EP','Additional elimination','Longmai instrument energy storage','Action value increase','Close at any time', 'Transformation','fitting'],
['Unable to move','Enemy transfer to ownership','Freeze the enemy','Ignite the enemy','Petroify the enemy','Electric shock the enemy','Parasitic enemy','Enemy poisoning', ' Charm the enemy','stun the enemy'],
['Unlock','anti-lock','anti-virus','explosion-proof','anti-counterattack','ignore burning','ignore slimy rot','ignore storm','black and white restoration','fragmentation restoration', 'Ignore Puzzle Shield','Ignore Attack Front Shield','Ignore Three-genus Shield','Ignore Five-genus Shield','Ignore Fixed Combo Shield','Ignore Pursuit Zeroing','Ignore Combo Seal'],
['Weathered Runestone Treatment','Frozen Runestone Treatment','Weakened Runestone Treatment','Electric Runestone Treatment','Petrification Runestone Treatment','Blood Runestone Treatment'],
['Our side reduces attack','Our side reduces back','Our side deducts blood','Limits member's attack','Our side's injury increases']
];

/* team skill filter */

const team_skill_type_string = [
['Increase attack','Increase return','Increase blood', ],
['Active Skill Change','Combination Skill','Captain Skill Change','Also Captain Skill','Dragon Vessel Ability', ],
['Summoned beast to water','Summoned beast to fire','Summoned beast to wood','Summoned beast to light','Summoned beast to dark', ],
['Runestone to water','Runestone to fire','Runestone to wood','Runestone to light','Runestone to dark','Runestone to heart'],
['Runestone to water strengthening','Runestone to fire strengthening','Runestone to wood strengthening','Runestone to light strengthening','Runestone to dark strengthening','Runestone turning to heart strengthening'],
['Human runestone manufacturing','Orc runestone manufacturing','Monster runestone manufacturing','Dragon runestone manufacturing','God runestone manufacturing','Devil runestone manufacturing','Mechanical runestone manufacturing Stone Manufacturing'],
['Rune enhancement','Fixed version'],
['Runestones have water','Runestones have fire','Runestones have wood','Runestones have light','Runestones have darkness','Runestones have heart',] ,
['Water with other','Fire with other','Wood with other','Light with other','Dark with other','Heart with other',],
['Water is chasing",'Fire is chasing','Wood is chasing','Light is chasing','Dark is chasing','No belongs to chasing'],
['Damage reduction','shield','will','evasion','recovery','our damage absorption','enemy damage absorption','enemy attack reduction'],
['Broken defense','detonate','direct injury','critical strike','overfill attack','attribute restraint change','attack resonance resonance','recovery resonance resonance'],
['Runestone drop rate increased','forced drop','enhanced bead effect increased','change elimination method'],
['Enter the game to reduce CD','Permanently reduce CD','Open skill to reduce CD','Other reduce CD'],
['Increase Combo','Increase Ex.Combo','Extend the time to turn beads','Dragon Pulse Instrument Energy Storage','Action Value Increase'],
['Increase damage to humans','Increase damage to beasts','Increase damage to fairies','Increase damage to dragons','Increase damage to gods','Increase damage to demons','For machinery Family injury'],
['Unable to move','parasitic enemy','stun the enemy'],
['Antivirus','Ignore burning','Ignore slimy','Ignore electric shock','Ignore puzzle shield','Ignore attack front shield','Ignore three genera shield','Ignore five genera shield','Ignore Fixed combo shield'],
['Freeze Runestone Treatment','Weakened Runestone Treatment','Electric Runestone Treatment','Petrification Runestone Treatment','Blood Runestone Treatment'],
['Item drop increased'],
['We reduce it back'],
];

const team_skill_activate_string = [
['Designated Captain','Designated Companion','Designated Double Captain','Designated Captain's Companion','Designated Member','Designated Attribute Member','Designated Race Member','Designated Rarity Member','Level Lower Limit ','Lower limit of sublimation','Equipment dragon carving'],
];

const attr_type_string = ['water','fire','wood','light','dark'];
const race_type_string = ['humans','beasts','fairies','dragons','protoss','demons','mechanicals','evolution materials','enhanced materials'];
const star_type_string = ['1', '2', '3', '4', '5', '6', '7', '8'];
const charge_type_string = ['CD','EP'];
const option_text = ['Single round','Cross round','Resident'];

/* craft filter */
const craft_skill_type_string = [
['Runestone to water','Runestone to fire','Runestone to wood','Runestone to light','Runestone to dark','Runestone to heart','Runestone to strengthen'],
['Go straight to water','Go straight to fire','Go straight to wood','Go straight to light','Go straight to dark','Go straight to heart'],
['Water is chasing",'Fire is chasing','Wood is chasing','Light is chasing','Dark is chasing','No one is chasing'],
['Injury reduction','Will','Evasion','Recover blood','Our damage absorption'],
['Direct injuries','All direct injuries','Single breakage prevention direct injuries'],
['Injury','increase back','break defense','counterattack'],
['Increase damage to water','Increase damage to fire','Increase damage to wood','Increase damage to light','Increase damage to darkness'],
['Delay','Decrease CD','Single to all','Ignore the attributes of each other'],
['Ignore the puzzle shield','Ignore the five genus shields','Ignore the attacking front shield']
];

const craft_mode_type_string = ['Chain Dragon Pattern','Rotating Dragon Seal','Broken Dragon Curse','Reflecting Dragon Talisman','Quick Dragon Jade','Splitting Dragon Blade','Falling Shadow Dragon Glass','Proliferation Dragon knot','Mirror Dragon Maru','Rhythm Dragon String'];

const craft_attr_type_string = ['no limit','water','fire','wood','light','dark'];

const craft_race_type_string = ['No limit','Human','Beast','Fairy','Dragon','Protoss','Demon','Mechanical'];

const craft_star_type_string = ['1', '2', '3'];

const craft_charge_type_string = ['Eliminate Water Runestones','Eliminate Fire Runes','Eliminate Wooden Runestones','Eliminate Light Runestones','Eliminate Dark Runestones','Eliminate Heart Runestones','Eliminate Runestones ','Launch an attack','Attacked', '4 Combo or more']


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


const blue_str ='rgb(100, 100, 255)';
const green_str ='rgb(50, 155, 50)';
const white_str ='rgb(255, 255, 255)';
const black_str ='rgb(0, 0, 0)';


const encode_chart = [
    '0','1','2','3','4','5','6','7','8','9',
    'a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z','A','B','C','D',
    'E','F','G','H','I','J','K','L','M','N',
    'O','P','Q','R','S','T','U','V','W','X',
    'Y','Z','+','-'
];

const attr_zh_to_en = {'water':'w','fire':'f','wood':'e','light':'l','dark':'d'};
const race_zh_to_en = {'human':'human','beast':'beast','fairy':'elf','dragon':'dragon','god':'god','devil ':'demon','machine family':'machina','evolution material':'evolve','enhancement material':'level_up'};

const attr_color = {'Water':'#3E85D6','Fire':'#FC2F28','Wood':'#0F9611','Light':'#F8C50E','Dark':'#9B08CA'};

const input_maxlength = 50;