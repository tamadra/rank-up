
$('#timezone').text(moment().format("[GMT] ZZ"));
var showIntro = readPref("showIntro");
if (showIntro === null || showIntro) {
    $('#intro').show();
}
var showSettingIntro = readPref("showSettingIntro");
if (showSettingIntro !== null && !showSettingIntro) {
    $('#intro2').hide();
}

// 0 - dungeon name
// 1 - subdungeon
// 2 - stamina cost
// 3 - low
// 4 - high
// 5 - avgerage exp/stam
// 6 - pdx dungeon id
// 7 - "Tier ?"
// 8 - primary color
// 9 - event time 1         all times in PST/PDT. 0 is Sunday, 6 is Saturday
// 10 - event time 2        all times in PST/PDT. 0 is Sunday, 6 is Saturday
// 11 - event type  ("coin", "drop", "stam")
d = [["Departure Tower","Tower Entrance",3,48,90,23,1,,,,,],
    ["Departure Tower","Room of Departure",3,43,55,16,2,,,,,],
    ["Departure Tower","The First Trial",5,87,111,20,3,,,,,],
    ["Dungeon of Fire","Ruby Tunnel",3,43,58,17,4,"Tier 1","Red","1,8-16","3,15-23","stam"],
    ["Dungeon of Fire","Ruby Defenders",3,103,118,37,5,"Tier 1","Red","1,8-16","3,15-23","stam"],
    ["Dungeon of Fire","Tunnel Dragon",5,195,221,42,6,"Tier 1","Red","1,8-16","3,15-23","stam"],
    ["Dungeon of Water","Sapphire Cave",3,60,77,23,7,"Tier 1","Blue","1,15-23","4,8-16","stam"],
    ["Dungeon of Water","Sapphire Defenders",3,104,119,37,8,"Tier 1","Blue","1,15-23","4,8-16","stam"],
    ["Dungeon of Water","The Cave Master",5,202,221,42,9,"Tier 1","Blue","1,15-23","4,8-16","stam"],
    ["Dungeon of Wood","Jade Forest",3,59,78,23,10,"Tier 1","Green","2,8-16","4,15-23","stam"],
    ["Dungeon of Wood","Jade Defenders",3,104,113,36,11,"Tier 1","Green","2,8-16","4,15-23","stam"],
    ["Dungeon of Wood","Forest Dragon",5,205,234,44,12,"Tier 1","Green","2,8-16","4,15-23","stam"],
    ["Dungeon of Light","Topaz Maze",3,92,99,32,13,"Tier 1","Light","2,15-23","5,8-16","stam"],
    ["Dungeon of Light","Topaz Defenders",3,150,162,52,14,"Tier 1","Light","2,15-23","5,8-16","stam"],
    ["Dungeon of Light","Mystic Labyrinth Bird",5,305,320,63,15,"Tier 1","Light","2,15-23","5,8-16","stam"],
    ["Dungeon of Darkness","Amethyst Cave",3,89,101,32,16,"Tier 1","Dark","3,8-16","5,15-23","stam"],
    ["Dungeon of Darkness","Deadly Violet Weapon",3,150,161,52,17,"Tier 1","Dark","3,8-16","5,15-23","stam"],
    ["Dungeon of Darkness","Moon Death Dragon",5,317,338,66,18,"Tier 1","Dark","3,8-16","5,15-23","stam"],
    ["The Tower of Trials","Trial Commencement",3,202,255,76,19,"Tier 1","Tower","6","0","stam"],
    ["The Tower of Trials","Dual Weapons",3,274,316,98,20,"Tier 1","Tower","6","0","stam"],
    ["The Tower of Trials","None Shall Pass",5,382,444,83,21,"Tier 1","Tower","6","0","stam"],
    ["Volcano of Vulcan","Crater Entrance",5,350,400,75,22,"Tier 2","Red","1,8-16","3,15-23","coin"],
    ["Volcano of Vulcan","Keeper of Flame",5,650,766,142,23,"Tier 2","Red","1,8-16","3,15-23","coin"],
    ["Volcano of Vulcan","Crimson Dragon",5,454,548,101,24,"Tier 2","Red","1,8-16","3,15-23","coin"],
    ["Volcano of Vulcan","Flame Snake Woman",5,690,765,146,25,"Tier 2","Red","1,8-16","3,15-23","coin"],
    ["Volcano of Vulcan","Arise Vulcan Dragon",5,690,812,151,26,"Tier 2","Red","1,8-16","3,15-23","coin"],
    ["Neptune Glacier","Freezing Winds",5,350,390,74,27,"Tier 2","Blue","1,15-23","4,8-16","coin"],
    ["Neptune Glacier","Keeper of Ice",5,700,730,143,28,"Tier 2","Blue","1,15-23","4,8-16","coin"],
    ["Neptune Glacier","Dark Water Shadow",5,430,470,90,29,"Tier 2","Blue","1,15-23","4,8-16","coin"],
    ["Neptune Glacier","The Mermaid's Feast",5,750,860,161,30,"Tier 2","Blue","1,15-23","4,8-16","coin"],
    ["Neptune Glacier","Ice Aurora Dragon",5,740,780,152,31,"Tier 2","Blue","1,15-23","4,8-16","coin"],
    ["Demeter Forest","Rustling of Trees",5,346,366,72,32,"Tier 2","Green","2,8-16","4,15-23","coin"],
    ["Demeter Forest","Keeper of Trees",5,680,720,140,33,"Tier 2","Green","2,8-16","4,15-23","coin"],
    ["Demeter Forest","Hungry Green Dragon",5,630,650,128,34,"Tier 2","Green","2,8-16","4,15-23","coin"],
    ["Demeter Forest","The Fairy's Invitation",5,750,850,160,35,"Tier 2","Green","2,8-16","4,15-23","coin"],
    ["Demeter Forest","Ground Dragon Arisen",5,650,878,153,36,"Tier 2","Green","2,8-16","4,15-23","coin"],
    ["Tomb of the Saint","Under the Cemetery",5,398,418,82,37,"Tier 2","Light","2,15-23","5,8-16","coin"],
    ["Tomb of the Saint","Gravekeeper Gizmo",5,601,621,123,38,"Tier 2","Light","2,15-23","5,8-16","coin"],
    ["Tomb of the Saint","Wise White Dragon",5,650,657,131,39,"Tier 2","Light","2,15-23","5,8-16","coin"],
    ["Tomb of the Saint","Heaven's Servant",5,829,839,167,40,"Tier 2","Light","2,15-23","5,8-16","coin"],
    ["Tomb of the Saint","The Saint's Dragon",5,990,1010,200,41,"Tier 2","Light","2,15-23","5,8-16","coin"],
    ["Pluto Valley","Cave of the Valley",5,425,488,92,42,"Tier 2","Dark","3,8-16","5,15-23","coin"],
    ["Pluto Valley","Wandering Murderer",5,715,781,150,43,"Tier 2","Dark","3,8-16","5,15-23","coin"],
    ["Pluto Valley","Creeping Darkness",5,609,769,138,44,"Tier 2","Dark","3,8-16","5,15-23","coin"],
    ["Pluto Valley","Succubus's Whisper",5,762,965,173,45,"Tier 2","Dark","3,8-16","5,15-23","coin"],
    ["Pluto Valley","Dragon of the Abyss",5,900,940,184,46,"Tier 2","Dark","3,8-16","5,15-23","coin"],
    ["Tower of Giants","Path to the Tower",5,504,719,123,47,"Tier 2","Tower","6","0","stam"],
    ["Tower of Giants","Gate of the Giant",5,894,1113,201,48,"Tier 2","Tower","6","0","stam"],
    ["Tower of Giants","Dragons of the Tower",5,1383,1701,309,49,"Tier 2","Tower","6","0","stam"],
    ["Tower of Giants","Giant Guards",5,940,1222,217,50,"Tier 2","Tower","6","0","stam"],
    ["Tower of Giants","Wrath of the Giant",7,1380,1572,211,51,"Tier 2","Tower","6","0","stam"],
    ["Fire Forest Nerva","Burning Tree Path",7,1396,1736,224,52,"Tier 3","Red","1,8-16","3,15-23","drop"],
    ["Fire Forest Nerva","Fire-Worshipping Snake",7,1299,1646,211,53,"Tier 3","Red","1,8-16","3,15-23","drop"],
    ["Fire Forest Nerva","Dragons of Flame",7,1437,1860,236,54,"Tier 3","Red","1,8-16","3,15-23","drop"],
    ["Fire Forest Nerva","Fire-Laden Warrior",7,1437,1860,236,55,"Tier 3","Red","1,8-16","3,15-23","drop"],
    ["Fire Forest Nerva","Explosive Fire Dragon",7,1430,1801,231,56,"Tier 3","Red","1,8-16","3,15-23","drop"],
    ["Sea Cave Mercury","Path to the Seabed",7,1438,1507,211,66,"Tier 3","Blue","1,15-23","4,8-16","drop"],
    ["Sea Cave Mercury","Voice of the Siren",7,1254,1727,213,67,"Tier 3","Blue","1,15-23","4,8-16","drop"],
    ["Sea Cave Mercury","Water Dragon Gate",7,1513,1708,231,68,"Tier 3","Blue","1,15-23","4,8-16","drop"],
    ["Sea Cave Mercury","The Fanged Warriors",7,1571,1930,251,69,"Tier 3","Blue","1,15-23","4,8-16","drop"],
    ["Sea Cave Mercury","Sea Dragon of Ice",7,1577,1683,233,70,"Tier 3","Blue","1,15-23","4,8-16","drop"],
    ["Sacred Mt. Bakkes","Path to the Peak",7,1380,1737,223,79,"Tier 3","Green","2,8-16","4,15-23","drop"],
    ["Sacred Mt. Bakkes","Allure of Flowers",7,1348,1659,215,80,"Tier 3","Green","2,8-16","4,15-23","drop"],
    ["Sacred Mt. Bakkes","Young Earth Dragon",7,1480,1612,221,81,"Tier 3","Green","2,8-16","4,15-23","drop"],
    ["Sacred Mt. Bakkes","Dragon Knights",7,1611,1761,241,82,"Tier 3","Green","2,8-16","4,15-23","drop"],
    ["Sacred Mt. Bakkes","Apex Flower Dragon",7,1463,1870,239,83,"Tier 3","Green","2,8-16","4,15-23","drop"],
    ["Twin Temple Apollo","Sunlight Temple",8,1557,1980,222,84,"Tier 3","Light","2,15-23","5,8-16","drop"],
    ["Twin Temple Apollo","The Cruel Angel",8,1570,1742,207,85,"Tier 3","Light","2,15-23","5,8-16","drop"],
    ["Twin Temple Apollo","White Snake",8,1565,1765,209,86,"Tier 3","Light","2,15-23","5,8-16","drop"],
    ["Twin Temple Apollo","Warrior of the Sky",8,1235,2195,215,87,"Tier 3","Light","2,15-23","5,8-16","drop"],
    ["Twin Temple Apollo","Sunlight Dragon",8,1716,2266,249,88,"Tier 3","Light","2,15-23","5,8-16","drop"],
    ["Twin Temple Diana","Moonlight Temple",8,1416,1964,212,89,"Tier 3","Dark","3,8-16","5,15-23","drop"],
    ["Twin Temple Diana","The Coaxing Snake",8,1533,1940,218,90,"Tier 3","Dark","3,8-16","5,15-23","drop"],
    ["Twin Temple Diana","Twin Cursed Dragons",8,1664,2013,230,91,"Tier 3","Dark","3,8-16","5,15-23","drop"],
    ["Twin Temple Diana","Dark Dragon Knights",8,1592,2240,240,92,"Tier 3","Dark","3,8-16","5,15-23","drop"],
    ["Twin Temple Diana","Moonlight Dragon",8,1716,1932,228,93,"Tier 3","Dark","3,8-16","5,15-23","drop"],
    ["Castle of Satan","Castle Gate",9,1752,2394,231,115,"Tier 3","Tower","6","0","drop"],
    ["Castle of Satan","The Witches' Ball",9,1700,2424,230,116,"Tier 3","Tower","6","0","drop"],
    ["Castle of Satan","Cage of the Beast",9,2170,2564,263,117,"Tier 3","Tower","6","0","drop"],
    ["Castle of Satan","The King's Protectors",9,2156,2566,263,120,"Tier 3","Tower","6","0","drop"],
    ["Castle of Satan","King of Darkness",11,3026,3847,313,121,"Tier 3","Tower","6","0","drop"],
    ["Tower of Flare","Corridors of Illusion",9,2551,2618,288,122,"Tier 4","Tower/Red/Light","6","0","drop"],
    ["Tower of Flare","Room of Sunlight",9,1769,2188,220,123,"Tier 4","Tower/Red/Light","6","0","drop"],
    ["Tower of Flare","Flare Knights",9,2670,2888,309,124,"Tier 4","Tower/Red/Light","6","0","drop"],
    ["Tower of Flare","Dance of Flame and Light",9,2135,2526,259,125,"Tier 4","Tower/Red/Light","6","0","drop"],
    ["Tower of Flare","Red Guardian",11,3485,3864,335,126,"Tier 4","Tower/Red/Light","6","0","drop"],
    ["Polar Night Tower","Sunless Road",9,2500,2650,287,127,"Tier 4","Tower/Blue/Dark","6","0","drop"],
    ["Polar Night Tower","Room of Shadow",9,1850,2050,217,128,"Tier 4","Tower/Blue/Dark","6","0","drop"],
    ["Polar Night Tower","Knights of the Polar Night",9,2679,2736,301,129,"Tier 4","Tower/Blue/Dark","6","0","drop"],
    ["Polar Night Tower","Banquet of Temptation",9,2245,2509,265,130,"Tier 4","Tower/Blue/Dark","6","0","drop"],
    ["Polar Night Tower","Blue Guardian",11,3568,3616,327,131,"Tier 4","Tower/Blue/Dark","6","0","drop"],
    ["Tower of Nature","Three Dragons",9,2546,2658,290,132,"Tier 4","Tower/Red/Blue/Green","6","0","drop"],
    ["Tower of Nature","Room of Gaia",9,1879,2046,219,133,"Tier 4","Tower/Red/Blue/Green","6","0","drop"],
    ["Tower of Nature","Knights of Nature",9,2640,2876,307,134,"Tier 4","Tower/Red/Blue/Green","6","0","drop"],
    ["Tower of Nature","Great Wheel of Fire",9,2298,2512,268,135,"Tier 4","Tower/Red/Blue/Green","6","0","drop"],
    ["Tower of Nature","Green Guardian",11,3591,3796,336,136,"Tier 4","Tower/Red/Blue/Green","6","0","drop"],
    ["Tomb of the Saint-Deep","Nameless Soldiers' Souls",10,3119,3359,324,137,"Tier 4","Tower","6","0","drop"],
    ["Tomb of the Saint-Deep","Road of the Crawling Dead",10,2991,3196,310,138,"Tier 4","Tower","6","0","drop"],
    ["Tomb of the Saint-Deep","Gate to Hell",10,3400,3553,348,139,"Tier 4","Tower","6","0","drop"],
    ["Tomb of the Saint-Deep","Eternal Peace",10,3300,3433,337,140,"Tier 4","Tower","6","0","drop"],
    ["Tomb of the Saint-Deep","King of the Underworld",12,4449,5300,407,141,"Tier 4","Tower","6","0","drop"],
    ["Hyperion Lava Flow","Blazing River",10,4179,4737,446,142,"Tier 5","Red","1,8-16","3,15-23","drop"],
    ["Hyperion Lava Flow","Ruby Altar",10,3476,3678,358,143,"Tier 5","Red","1,8-16","3,15-23","drop"],
    ["Hyperion Lava Flow","Lava Tube",10,4799,5753,528,144,"Tier 5","Red","1,8-16","3,15-23","drop"],
    ["Hyperion Lava Flow","Serpent Loved by Flame",10,3915,4401,416,145,"Tier 5","Red","1,8-16","3,15-23","drop"],
    ["Hyperion Lava Flow","Blazing Dragon",12,5749,6772,522,146,"Tier 5","Red","1,8-16","3,15-23","drop"],
    ["Oceanus Falls","Eternal Waterfall",10,4216,4600,441,147,"Tier 5","Blue","1,15-23","4,8-16","drop"],
    ["Oceanus Falls","Sapphire Altar",10,3102,3971,354,148,"Tier 5","Blue","1,15-23","4,8-16","drop"],
    ["Oceanus Falls","Whirlpool in the Waterfall Basin",10,4802,5676,524,149,"Tier 5","Blue","1,15-23","4,8-16","drop"],
    ["Oceanus Falls","Invitation to the Abyss",10,3894,4346,412,150,"Tier 5","Blue","1,15-23","4,8-16","drop"],
    ["Oceanus Falls","Great Dragon of the Abyss",12,5640,6694,514,151,"Tier 5","Blue","1,15-23","4,8-16","drop"],
    ["Kronos Forest","Forest of Darkness",10,4311,4888,460,152,"Tier 5","Green","2,8-16","4,15-23","drop"],
    ["Kronos Forest","Jasper Altar",10,3336,3790,357,153,"Tier 5","Green","2,8-16","4,15-23","drop"],
    ["Kronos Forest","Gate to the Mystic Land",10,4898,5554,523,154,"Tier 5","Green","2,8-16","4,15-23","drop"],
    ["Kronos Forest","Fairies' Paradise",10,3836,4307,408,155,"Tier 5","Green","2,8-16","4,15-23","drop"],
    ["Kronos Forest","Ancient Guardian",12,5885,6728,526,156,"Tier 5","Green","2,8-16","4,15-23","drop"],
    ["Rhea-Themis Temple","Divinegon's Den",11,4387,5022,428,157,"Tier 5","Light","2,15-23","5,8-16","drop"],
    ["Rhea-Themis Temple","Golden Altar",11,3492,3977,340,158,"Tier 5","Light","2,15-23","5,8-16","drop"],
    ["Rhea-Themis Temple","Room of Prayers",11,3273,5700,408,159,"Tier 5","Light","2,15-23","5,8-16","drop"],
    ["Rhea-Themis Temple","The Price of a Smile",11,4155,4504,394,160,"Tier 5","Light","2,15-23","5,8-16","drop"],
    ["Rhea-Themis Temple","King of Dragons",14,6108,6458,449,161,"Tier 5","Light","2,15-23","5,8-16","drop"],
    ["Clayus Prison","Ground of Malice",11,4146,4420,390,162,"Tier 5","Dark","3,8-16","5,15-23","drop"],
    ["Clayus Prison","Amethyst Altar",11,3758,4046,355,163,"Tier 5","Dark","3,8-16","5,15-23","drop"],
    ["Clayus Prison","Well Leading Underground",11,5390,6145,525,164,"Tier 5","Dark","3,8-16","5,15-23","drop"],
    ["Clayus Prison","Witch of the Darkness",11,4212,4594,401,165,"Tier 5","Dark","3,8-16","5,15-23","drop"],
    ["Clayus Prison","Punisher from Hell",14,5890,6806,454,166,"Tier 5","Dark","3,8-16","5,15-23","drop"],
    ["Tower to the Sky","Guards of the Lower Levels",12,5670,6225,496,167,"Tier 5","Tower","6","0","drop"],
    ["Tower to the Sky","Peaceful Garden",12,3838,4282,339,168,"Tier 5","Tower","6","0","drop"],
    ["Tower to the Sky","White Snake Road",12,3932,4018,332,169,"Tier 5","Tower","6","0","drop"],
    ["Tower to the Sky","Door to Heaven",12,4047,4370,351,170,"Tier 5","Tower","6","0","drop"],
    ["Tower to the Sky","Beautiful Being",15,6149,6929,436,171,"Tier 5","Tower","6","0","drop"],
    ["Ocean of Heaven","Sea of White Clouds",12,4821,5575,434,172,"Tier 5","Tower","6","0","drop"],
    ["Ocean of Heaven","Twin Jewels in the Sky",12,5020,5633,444,173,"Tier 5","Tower","6","0","drop"],
    ["Ocean of Heaven","Diva in a Sea of Clouds",12,4462,4896,390,174,"Tier 5","Tower","6","0","drop"],
    ["Ocean of Heaven","Guardian of Skies and Seas",12,4745,5354,421,175,"Tier 5","Tower","6","0","drop"],
    ["Ocean of Heaven","Sea-God of Heaven",15,6016,7308,445,176,"Tier 5","Tower","6","0","drop"],
    ["Vesta Cave","Bottomless Void",13,6254,7172,517,177,"Tier 6","Red","1,8-16","3,15-23","drop"],
    ["Vesta Cave","Underground Ruin",13,6146,6584,490,178,"Tier 6","Red","1,8-16","3,15-23","drop"],
    ["Vesta Cave","Underground Fire Lake",13,5049,6234,434,179,"Tier 6","Red","1,8-16","3,15-23","drop"],
    ["Vesta Cave","Center of the Earth",13,4950,5261,393,180,"Tier 6","Red","1,8-16","3,15-23","drop"],
    ["Vesta Cave","Lava Dragon of Mantle",16,7320,8368,491,181,"Tier 6","Red","1,8-16","3,15-23","drop"],
    ["Frozen Soil of Prosell","Frozen Ground",13,6342,7147,519,182,"Tier 6","Blue","1,15-23","4,8-16","drop"],
    ["Frozen Soil of Prosell","Frost Woods",13,5838,6255,466,183,"Tier 6","Blue","1,15-23","4,8-16","drop"],
    ["Frozen Soil of Prosell","Frozen Castle",13,5471,5823,435,184,"Tier 6","Blue","1,15-23","4,8-16","drop"],
    ["Frozen Soil of Prosell","Sky-Scraping Iceberg",13,4330,5483,378,185,"Tier 6","Blue","1,15-23","4,8-16","drop"],
    ["Frozen Soil of Prosell","Ice Crystal Dragon",16,7295,8307,488,186,"Tier 6","Blue","1,15-23","4,8-16","drop"],
    ["Mars Crater","Great Mountains of Olympus",13,5916,6881,493,187,"Tier 6","Green","2,8-16","4,15-23","drop"],
    ["Mars Crater","Great Mountain Caves",13,5732,6551,473,188,"Tier 6","Green","2,8-16","4,15-23","drop"],
    ["Mars Crater","Shooting Star Woods",13,5516,6032,445,189,"Tier 6","Green","2,8-16","4,15-23","drop"],
    ["Mars Crater","Dragon's Den",13,4305,5103,362,190,"Tier 6","Green","2,8-16","4,15-23","drop"],
    ["Mars Crater","Star-Breaking Dragon",16,6910,8504,482,191,"Tier 6","Green","2,8-16","4,15-23","drop"],
    ["Jupiter, City in the Sky","Floating Island",14,6596,7766,513,192,"Tier 6","Light","2,15-23","5,8-16","drop"],
    ["Jupiter, City in the Sky","Abandoned City",14,6306,7211,483,193,"Tier 6","Light","2,15-23","5,8-16","drop"],
    ["Jupiter, City in the Sky","Claw of Judgment",14,6200,6437,452,194,"Tier 6","Light","2,15-23","5,8-16","drop"],
    ["Jupiter, City in the Sky","Isolated Ruin of the Sky",14,5243,6039,403,195,"Tier 6","Light","2,15-23","5,8-16","drop"],
    ["Jupiter, City in the Sky","Lightning Dragons of the Skies",17,7555,9608,505,196,"Tier 6","Light","2,15-23","5,8-16","drop"],
    ["Junos Island","Forbidden Isle",14,6652,7624,510,197,"Tier 6","Dark","3,8-16","5,15-23","drop"],
    ["Junos Island","City of Corpses",14,6678,7159,495,198,"Tier 6","Dark","3,8-16","5,15-23","drop"],
    ["Junos Island","True Nightmare",14,5791,6723,447,199,"Tier 6","Dark","3,8-16","5,15-23","drop"],
    ["Junos Island","Rusted Altar",14,5341,5807,399,200,"Tier 6","Dark","3,8-16","5,15-23","drop"],
    ["Junos Island","Chaos Dragon of Ruins",17,8590,9107,521,201,"Tier 6","Dark","3,8-16","5,15-23","drop"],
    ["Starlight Sanctuary","Guardian Dragon of God",14,6100,7150,474,202,"Tier 6","Tower","6","0","drop"],
    ["Starlight Sanctuary","Goddess of Harvest",14,6900,8250,542,203,"Tier 6","Tower","6","0","drop"],
    ["Starlight Sanctuary","Goddess of War",14,6400,7450,495,204,"Tier 6","Tower","6","0","drop"],
    ["Starlight Sanctuary","Queen of the Gods",14,8300,9500,636,205,"Tier 6","Tower","6","0","drop"],
    ["Starlight Sanctuary","King of the Gods",17,13000,14800,818,206,"Tier 6","Tower","6","0","drop"]];

for (i in d) { d[i].unlocked = true; }
var intRegex = /^\d+$/;
function numberWithCommas(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
var avgExpMode = true;
var opt = {};
var solutions = {}; solutions[0] = {d:[],avg:0,min:0};

// Given a dungeon, and a bonus type, checks if bonus is currently active.
// @type is "drop" "coin"
function is_bonus(dd, type) {
    if (!dd[11] || dd[11] !== type) {
        return false;
    }
    var nowM = moment();
    nowM.tz("America/Los_Angeles");
    var mday = nowM.day()+"";
    var mhour = nowM.hour();
    var et1 = dd[9], et2 = dd[10];
    var ee;
    if (et1 && et1.split(",")[0] === mday) {
        ee = et1.split(",")[1];
    } else if (et2 && et2.split(",")[0] === mday){
        ee = et2.split(",")[1];
    } else {
        return false;
    }
    if ( typeof ee === 'undefined') {
        // sat/sun event
        return true;
    } else {
        var nstart = parseInt(ee.split("-")[0]);
        var nend = parseInt(ee.split("-")[1]);
        if (mhour >= nstart && mhour <= nend) {
            return true;
        }
    }
    return false;
}

function filterDungeons() {
    opt = {};
    for (i in d) {
        if (!d[i].unlocked) { continue; }
        var stam = is_bonus(d[i], "stam") ? Math.round(d[i][2]/2) : d[i][2];
        var low = d[i][3];
        var high = d[i][4];
        var avg = (low+high)/2;
        if (!((''+stam) in opt)) {
            opt[stam] = d[i];
        } else {
            var v = avgExpMode ? avg : low;
            var w = avgExpMode ? (opt[stam][3]+opt[stam][4])/2 : opt[stam][3];
            if (v > w){
                opt[stam] = d[i];
            }
        }
    }
}

function delete_solutions() {
    solutions = null;
    solutions = {}; solutions[0] = {d:[],avg:0,min:0};
}
solve_unbounded_knapsack = function (stamina) {
    // cap at some stamina to prevent running too long?
    if (stamina >= 2000) { return null; }
    // todo: if the last time this was run was over an hour ago, re-run

    if (""+stamina in solutions) {
        return;
    }
    filterDungeons();
    var currentStamina = 1;
    while (currentStamina <= stamina) {
        if (""+currentStamina in solutions) {
            currentStamina++;
            continue;
        }
        // at this point, currentStamina is not yet calculated, but everything less than it has been
        var newSolution = solutions[currentStamina-1];
        for (var dungeonCandidate in opt) {
            if (dungeonCandidate > currentStamina) {
                continue;
            }
            var dungCandExp = avgExpMode ? (opt[dungeonCandidate][3]+opt[dungeonCandidate][4])/2 : opt[dungeonCandidate][3];
            var remainingExp = avgExpMode ? solutions[currentStamina - dungeonCandidate].avg : solutions[currentStamina - dungeonCandidate].min;
            var newExp = dungCandExp + remainingExp;

            var oldExp = avgExpMode ? newSolution.avg : newSolution.min;

            if (newExp > oldExp) {
                var newArr = solutions[currentStamina - dungeonCandidate].d.slice(0);
                newArr.push(opt[dungeonCandidate]);
                newSolution = {d: newArr,
                    avg: solutions[currentStamina - dungeonCandidate].avg+(opt[dungeonCandidate][3]+opt[dungeonCandidate][4])/2,
                    min: solutions[currentStamina - dungeonCandidate].min+opt[dungeonCandidate][3]};
            }
        }
        solutions[currentStamina] = newSolution;
        currentStamina++;
    }
}

find_consolation = function(u_stam, u_exp) {
    var tryStam = u_stam;
    while (true) {
        solve_unbounded_knapsack(tryStam);
        if (avgExpMode && (solutions[tryStam].avg > u_exp)) {
            return tryStam;
        } else if (!avgExpMode && (solutions[tryStam].min > u_exp)) {
            return tryStam;
        }
        tryStam++;
    }
}

find_all_matches_sorted = function(stam, exp) {
    var all_matches = [];
    for (i in d) {
        var v = avgExpMode ? (d[i][3] + d[i][4])/2 : d[i][3];
        var dstam = is_bonus(d[i], "stam") ? Math.round(d[i][2]/2) : d[i][2];
        if ((d[i].unlocked) && dstam <= stam && v >= exp) {
            all_matches.push( d[i] );
        }
    }
    all_matches.sort(function(a,b) {
            return (b[3]+b[4])/2 - (a[3]+a[4])/2;
    });
    return all_matches;
}

compute = function() {

    // Reset all visual elements
    $('#consolation').hide();
    $('#success').hide();
    $('#bummer').hide();
    $('#most_exp-container').hide();
    $('#ranked-container').hide();
    $('#consolation_alert').hide();
    $('#most_exp_header').hide();
    $('#m_rows').html("");
    $('#c_rows').html("");
    $('#r_rows').html("");
    $('#num_results').text("");
    $('#results_header').hide();
    $('#but_wait').show();
    $('#u_exp').parent().removeClass('error');
    $('#u_stam').parent().removeClass('error');

    var u_stam = $('#u_stam').val();
    var u_exp = $('#u_exp').val();

    // If both blank
    if (u_stam==='' && u_exp==='') {
        $('#u_exp').parent().addClass('error');
        $('#u_exp').focus();
        return false;
    }
    // If entered something not numeric
    if(u_exp!=='' && !intRegex.test(u_exp)) {
        $('#u_exp').parent().addClass('error');
        $('#u_exp').focus();
        return;
    }
    if(u_stam!=='' && !intRegex.test(u_stam)) {
        $('#u_stam').parent().addClass('error');
        $('#u_stam').focus();
        return;
    }
    // If blank, put zero
    if(u_stam==='') {
        $('#u_stam').val('0');
        u_stam = 0;
    }
    if (u_exp==='') {
        $('#u_exp').val('0');
        u_exp = 0;
    }

    $('#u_exp').blur();
    $('#u_stam').blur();
    $('#results_header').show();
    $('#settings').show();

    u_stam = parseInt(u_stam);
    u_exp = parseInt(u_exp);
    filterDungeons();
    solve_unbounded_knapsack(u_stam);
    var sorted = find_all_matches_sorted(u_stam, u_exp);

    if (sorted && sorted.length>0) {
        $('#ranked-container').show();
        if (solutions[u_stam].d.length > 1) {
            var h1 = "", h2 = "", h3 = "", h4 = "";
            for (di in solutions[u_stam].d) {
                h1 += ('<div>'+solutions[u_stam].d[di][0] + ' - <a class="linkify" target="_blank" href="http://www.puzzledragonx.com/en/mission.asp?m='+solutions[u_stam].d[di][6]+'" >'+ solutions[u_stam].d[di][1] +'</a></div>');
                h2 += ('<div>'+numberWithCommas(Math.round((solutions[u_stam].d[di][3]+solutions[u_stam].d[di][4])/2))+'</div>');
                h3 += ('<div>'+numberWithCommas(solutions[u_stam].d[di][3])+'</div>');
                h4 += ('<div>'+solutions[u_stam].d[di][2]+'</div>');
            }
            $('#r_rows').append("<tr>" +
                '<td style="padding-right: 0;"><div class="multi_badge">Multiple<br>Dungeons</div>'+h1+'</td>' +
                "<td style='text-align: right;'>"+h2+"</td>" +
                "<td style='text-align: right; padding-right: 0;' class='nobreak'>"+h3+"</td>" +
                "<td style='text-align: right;'>"+h4+"</td></tr>");
        }
        if (sorted.length > 1 || solutions[u_stam].d.length > 1) {
            var llen = (solutions[u_stam].d.length > 1) ? sorted.length+1 : sorted.length;
            $('#num_results').html(llen+" options, sorted by most EXP");
        }
        var copy = sorted.slice();
        copy.sort(function(a,b) { return a[6]-b[6]});
        var easiestId = copy[0][6];

        for (s in sorted) {
            var tag = "";
            if (sorted.length>1 && sorted[s][6] === easiestId){
                tag = "<span class='easiest_badge'>Easiest</span>";
            }
            if (is_bonus(sorted[s], "coin")) {
                tag += "<span class='coin_badge'>2x Coin</span>";
            } else if (is_bonus(sorted[s], "drop")) {
                tag += "<span class='drop_badge'>1.5 Drop</span>";
            } else if (is_bonus(sorted[s], "stam")) {
                tag += "<span class='stamina_badge'>1/2 Stam</span>";
            }
            $('#r_rows').append("<tr>" +
                "<td style='padding-right: 0;'>"+sorted[s][0]+" - <wbr><b><a class='linkify' target='_blank' href='http://www.puzzledragonx.com/en/mission.asp?m="+sorted[s][6]+"'>"
                +sorted[s][1]+"</a></b>"+tag+"</td>" +
                "<td style='text-align: right;'>"+numberWithCommas(Math.round((sorted[s][3]+sorted[s][4])/2))+"</td>" +
                "<td style='text-align: right; padding-right: 0;' class='nobreak'>"+numberWithCommas(sorted[s][3])+"</td>" +
                "<td style='text-align: right;'>"+sorted[s][2]+"</td></tr>");
        }
    } else {
        // try to find a multi-dungeon solution
        var most = solutions[u_stam].d;
        var showConsolation = false;
        if (most.length > 0) {
            $('#most_exp-container').show();
            for (var m = most.length-1; m>=0; m--) {
                var tag = "";
                if (is_bonus(most[m], "stam")) {
                    tag += "<span class='stamina_badge'>1/2 Stam</span>";
                }
                $('#m_rows').append("<tr>" +
                    "<td>"+most[m][0]+" - <wbr><b><a class='linkify' target='_blank' href='http://www.puzzledragonx.com/en/mission.asp?m="+most[m][6]+"'>"
                    +most[m][1]+"</a></b>"+tag+"</td>" +
                    "<td style='text-align: right; padding-right: 0;'>"+numberWithCommas(Math.round((most[m][3]+most[m][4])/2))+"</td>" +
                    "<td style='text-align: right; padding-right: 0;' class='nobreak'>"+numberWithCommas(most[m][3])+"</td>" +
                    "<td style='text-align: right;'>"+most[m][2]+"</td></tr>");
            }

            var most_v = avgExpMode ? solutions[u_stam].avg : solutions[u_stam].min;
            if (most_v >= u_exp) {
                $('#success').show();
                $('#custom_msg').html("Run these dungeons for a total of <b>"+numberWithCommas(Math.round(most_v))+"</b> EXP")
            }
            else {
                showConsolation = true;
                $('#bummer').show();
                $('#most_exp').text(numberWithCommas(Math.round(most_v)));
            }
        }
        else {
            // 0 EXP
            showConsolation = true;
            $('#but_wait').hide();
        }

        if (showConsolation) {
            // consolation
            $('#consolation').show();
            $('#consolation_alert').show();
            var consolation = find_consolation(u_stam, u_exp);
            additional_mins = (consolation - u_stam) * 10;
            if (additional_mins <= 60) {
                $('#consolation_msg').html("In <b>"+additional_mins+" minutes</b>, you'll have <b>"+consolation+"</b> stamina to run:");
            } else {
                ready_time = moment().add('minutes', additional_mins);
                $('#consolation_msg').html("At <b>"+(ready_time.format("h:mm a"))+"</b>, you'll have "+consolation+" stamina to run:");
            }
            var cdungeon = solutions[consolation].d;
            for (var m = cdungeon.length-1; m>=0; m--) {
                $('#c_rows').append("<tr>" +
                    "<td>"+cdungeon[m][0]+" - <wbr><b><a class='linkify' target='_blank' href='http://www.puzzledragonx.com/en/mission.asp?m="+cdungeon[m][6]+"'>"+cdungeon[m][1]+"</a></b></td>" +
                    "<td style='text-align: right; padding-right: 0;'>"+numberWithCommas(Math.round((cdungeon[m][3]+cdungeon[m][4])/2))+"</td>" +
                    "<td style='text-align: right; padding-right: 0;' class='nobreak'>"+numberWithCommas(cdungeon[m][3])+"</td>" +
                    "<td style='text-align: right;'>"+cdungeon[m][2]+"</td></tr>");
            }
        }
    }
//    for IE 8
    $('.table-striped>tbody>tr:nth-child(even)>td').addClass('even');
    $('.table-striped>tbody>tr:nth-child(odd)>td').addClass('odd');
    $('.accordion-inner p:nth-child(odd)').addClass('odd');
}


$(document).ready(function() {
    // polyfill for IE8. placeholder bug
    $('input, textarea').placeholder();
    $('[autofocus]:not(:focus)').eq(0).focus();

    $('#u_exp, #u_stam').focus(function(event){
        $(event.target).parent().addClass('active');
    }).blur(function(event){
            $(event.target).parent().removeClass('active');
        }).keyup(function(e){
            if(e.keyCode == 13) { compute(); }
        });
    $('#mobile-nav').on('click', function(e){
        $(this).toggleClass('open');
        $('#navigation-mobile').stop().slideToggle(350);
        e.preventDefault();
    });

    var dunName = "";
    var tierName = "";
    var htmlStr = "";
    for (var i = (d.length-1); i>=0; i--) {
        if (d[i][0] !== dunName) {
            if (dunName !== "") {
                document.getElementById('toggleArea').innerHTML += htmlStr + "</div></div></div>";
            }
            dunName = d[i][0];
            var tier = d[i][7]; var tierStr = "";

            if (tierName !== tier && tier) {
                tierStr = "<div class='tier'>"+tier+"</div>";
                tierName = tier;
            }
            htmlStr = tierStr + '<div class="accordion-group"><div class="accordion-heading togglize">' +
                '<a class="accordion-toggle dungeon tower unlocked" data-toggle="collapse" data-parent="#" href="#collapse'+i+'">' +
                '<input type="checkbox" checked id="c'+i+'" class="checkbox1 checked" />' +
                '<label for="c'+i+'" class="c-label"></label>' +
                '<p>'+d[i][0]+'</p>' +
                '<span class="font-icon-plus tog"></span>' +
                '<span class="font-icon-minus tog"></span></a></div>' +
                '<div id="collapse'+i+'" class="accordion-body collapse"><div class="accordion-inner">';
        }
        htmlStr += ('<p class="sub-dungeon unlocked" >' +
            '<input type="checkbox" data-arrayid="'+i+'" checked id="cc'+i+'" class="checkbox2 checked" />' +
            '<label for="cc'+i+'" class="c-label"></label>'
            + d[i][1] +
            '<span class="s_stamina">'+ d[i][2]+'</span>' +
            '<span class="s_range">'+ numberWithCommas(d[i][3])+' - '+numberWithCommas(d[i][4])+'</span>'+
            '<span class="s_avg">'+ numberWithCommas(Math.round((d[i][3] + d[i][4])/2))+'</span>' +
            '</p>'
            );
    }
    document.getElementById('toggleArea').innerHTML += htmlStr+"</div></div></div>";
    $('.accordion-toggle').click(function(event){
        $(this).toggleClass("active");
        event.preventDefault();
    });

    $('#intro_close, #dismiss').click(function(e) {
        savePref("showIntro", false, 180);
        $('#u_exp').focus();
    });

    $('#setting_intro_close').click(function(e) {
        savePref("showSettingIntro", false, 180);
    });

    $('.c-label').click(function(event){
        event.stopPropagation();
    })

    $('.checkbox1').click(function(event){
        var checkbs = $(this).parent().parent().siblings().find('input:checkbox');
        checkbs.prop('checked', this.checked).trigger("change");
        event.stopPropagation();
    }).change(function(event){
            var subd = $(this).parent();

            if ($(this).hasClass('partial')){
                subd.addClass('partial');

                $(this).removeClass("checked");
                $(this).removeClass("unchecked");
            }
            else if($(this).is(':checked')){
                subd.removeClass('partial');
                subd.removeClass('locked');
                subd.addClass('unlocked');

                $(this).removeClass("unchecked");
                $(this).addClass("checked");
            } else {
                subd.removeClass('partial');
                subd.removeClass('unlocked');
                subd.addClass('locked');

                $(this).removeClass("checked");
                $(this).addClass("unchecked");
            }
        });

    $('.checkbox2').click(function(event){
        $(this).trigger("change");
        event.stopPropagation();
    }).change(function(event){
            var subd = $(this).parent();

            var array_id = $(this).data('arrayid');

            if($(this).is(':checked')){
                $(this).removeClass("unchecked");
                $(this).addClass("checked");

                subd.removeClass('locked');
                subd.addClass('unlocked');
                d[array_id].unlocked = true;

                var lockedP = readPref("locked");
                if (lockedP === null) {
                    // do nothing
                } else {
                    var idx = $.inArray(array_id, lockedP);
                    if (idx > -1) {
                        lockedP.splice(idx, 1);
                    }
                    savePref("locked", lockedP, 180);
                }

                filterDungeons();
                delete_solutions();
            } else {
                $(this).removeClass("checked");
                $(this).addClass("unchecked");

                subd.removeClass('unlocked');
                subd.addClass('locked');
                d[array_id].unlocked = false;

                var lockedP = readPref("locked");
                if (lockedP === null) {
                    savePref("locked", [array_id],180);
                } else {
                    var idx = $.inArray(array_id, lockedP);
                    if (idx > -1) {
                        // do nothing
                    } else {
                        lockedP.push(array_id);
                    }
                    savePref("locked", lockedP, 180);
                }
                filterDungeons();
                delete_solutions();
            }
            var p1 = subd.parent().find('.checkbox2:checked').length;
            var p2 = subd.parent().find('.checkbox2:not(:checked)').length;
            if (p1==0) {
                var parentC = subd.parent().parent().siblings().find('.checkbox1');
                parentC.removeClass('partial');
                parentC.prop('checked', false).trigger("change");
            } else if (p2==0) {
                var parentC = subd.parent().parent().siblings().find('.checkbox1');
                parentC.removeClass('partial');
                parentC.prop('checked', true).trigger("change");
            } else {
                //partial
                var parentC = subd.parent().parent().siblings().find('.checkbox1');
                parentC.addClass('partial');
                parentC.prop('checked', false).trigger("change");
            }
        });
    $('.sub-dungeon').click(function(event){
        var checkbox = $(this).find('.checkbox2');
        checkbox.prop('checked', !$(this).hasClass('unlocked')).trigger("change");
    });
    $('#avg_exp').click(function(event) {
        $('#exp_checkbox').prop("checked", true).trigger("change");
    });
    $('#lowest_exp').click(function(event) {
        $('#exp_checkbox').prop("checked", false).trigger("change");
    });
    $('#exp_checkbox').change(function(event){
        if($(this).is(':checked')){
            $(this).addClass("checked");
            $('#avg_exp').addClass("calc_active");
            $('#lowest_exp').removeClass('calc_active');
            avgExpMode = true;
        } else {
            $(this).removeClass("checked");
            $('#lowest_exp').addClass("calc_active");
            $('#avg_exp').removeClass('calc_active');
            avgExpMode = false;
        }
        savePref("expMode", avgExpMode, 180);
        filterDungeons();
        delete_solutions();
    });

    var expMode = readPref("expMode");
    if (expMode !== null) {
        avgExpMode = expMode;
    } else {
        savePref("expMode", avgExpMode, 180);
    }
    $('#exp_checkbox').prop("checked", avgExpMode).trigger("change");

    var lockedDungeons = readPref("locked");
    if (lockedDungeons !== null) {
        for (var l in lockedDungeons) {
            d[lockedDungeons[l]].unlocked = false;
            $('#cc'+lockedDungeons[l]).prop('checked', false).trigger("change");
        }
        filterDungeons();
    }
});