
$('#timezone').html("<span class='font-fix'>&#xe010;</span> "+moment().format("[GMT] ZZ"));
var showIntro = readPref("showIntro");
if (showIntro === null || showIntro) {
    $('#intro').show();
}
var showSettingIntro = readPref("showSettingIntro");
if (showSettingIntro === null || showSettingIntro) {
    $('#intro2').show();
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]").toLowerCase();
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search.toLowerCase());
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
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
// 12 - array index
// 13 - coopable
d = [["Departure Tower","Tower Entrance",3,48,90,23,1,,,,,,false],
    ["Departure Tower","Room of Departure",3,43,55,16,2,,,,,,false],
    ["Departure Tower","The First Trial",5,87,111,20,3,,,,,,false],
    ["Dungeon of Fire","Ruby Tunnel",3,43,58,17,4,"Tier 1","Red","1,8-15","3,15-22","stam",,false],
    ["Dungeon of Fire","Ruby Defenders",3,103,118,37,5,"Tier 1","Red","1,8-15","3,15-22","stam",,false],
    ["Dungeon of Fire","Tunnel Dragon",5,195,221,42,6,"Tier 1","Red","1,8-15","3,15-22","stam",,false],
    ["Dungeon of Water","Sapphire Cave",3,60,77,23,7,"Tier 1","Blue","1,15-22","4,8-15","stam",,false],
    ["Dungeon of Water","Sapphire Defenders",3,104,119,37,8,"Tier 1","Blue","1,15-22","4,8-15","stam",,false],
    ["Dungeon of Water","The Cave Master",5,202,221,42,9,"Tier 1","Blue","1,15-22","4,8-15","stam",,false],
    ["Dungeon of Wood","Jade Forest",3,59,78,23,10,"Tier 1","Green","2,8-15","4,15-22","stam",,false],
    ["Dungeon of Wood","Jade Defenders",3,104,113,36,11,"Tier 1","Green","2,8-15","4,15-22","stam",,false],
    ["Dungeon of Wood","Forest Dragon",5,205,234,44,12,"Tier 1","Green","2,8-15","4,15-22","stam",,false],
    ["Dungeon of Light","Topaz Maze",3,92,99,32,13,"Tier 1","Light","2,15-22","5,8-15","stam",,false],
    ["Dungeon of Light","Topaz Defenders",3,150,162,52,14,"Tier 1","Light","2,15-22","5,8-15","stam",,false],
    ["Dungeon of Light","Mystic Labyrinth Bird",5,305,320,63,15,"Tier 1","Light","2,15-22","5,8-15","stam",,false],
    ["Dungeon of Darkness","Amethyst Cave",3,89,101,32,16,"Tier 1","Dark","3,8-15","5,15-22","stam",,false],
    ["Dungeon of Darkness","Deadly Violet Weapon",3,150,161,52,17,"Tier 1","Dark","3,8-15","5,15-22","stam",,false],
    ["Dungeon of Darkness","Moon Death Dragon",5,317,338,66,18,"Tier 1","Dark","3,8-15","5,15-22","stam",,false],
    ["The Tower of Trials","Trial Commencement",3,202,255,76,19,"Tier 1","Tower","6","0","stam",,false],
    ["The Tower of Trials","Dual Weapons",3,274,316,98,20,"Tier 1","Tower","6","0","stam",,false],
    ["The Tower of Trials","None Shall Pass",5,382,444,83,21,"Tier 1","Tower","6","0","stam",,false],
    ["Volcano of Vulcan","Crater Entrance",5,350,400,75,22,"Tier 2","Red","1,8-15","3,15-22","coin",,false],
    ["Volcano of Vulcan","Keeper of Flame",5,650,766,142,23,"Tier 2","Red","1,8-15","3,15-22","coin",,false],
    ["Volcano of Vulcan","Crimson Dragon",5,454,548,101,24,"Tier 2","Red","1,8-15","3,15-22","coin",,false],
    ["Volcano of Vulcan","Flame Snake Woman",5,690,765,146,25,"Tier 2","Red","1,8-15","3,15-22","coin",,false],
    ["Volcano of Vulcan","Arise Vulcan Dragon",5,690,812,151,26,"Tier 2","Red","1,8-15","3,15-22","coin",,false],
    ["Neptune Glacier","Freezing Winds",5,350,390,74,27,"Tier 2","Blue","1,15-22","4,8-15","coin",,false],
    ["Neptune Glacier","Keeper of Ice",5,700,730,143,28,"Tier 2","Blue","1,15-22","4,8-15","coin",,false],
    ["Neptune Glacier","Dark Water Shadow",5,430,470,90,29,"Tier 2","Blue","1,15-22","4,8-15","coin",,false],
    ["Neptune Glacier","The Mermaid's Feast",5,750,860,161,30,"Tier 2","Blue","1,15-22","4,8-15","coin",,false],
    ["Neptune Glacier","Ice Aurora Dragon",5,740,780,152,31,"Tier 2","Blue","1,15-22","4,8-15","coin",,false],
    ["Demeter Forest","Rustling of Trees",5,346,366,72,32,"Tier 2","Green","2,8-15","4,15-22","coin",,false],
    ["Demeter Forest","Keeper of Trees",5,680,720,140,33,"Tier 2","Green","2,8-15","4,15-22","coin",,false],
    ["Demeter Forest","Hungry Green Dragon",5,630,650,128,34,"Tier 2","Green","2,8-15","4,15-22","coin",,false],
    ["Demeter Forest","The Fairy's Invitation",5,750,850,160,35,"Tier 2","Green","2,8-15","4,15-22","coin",,false],
    ["Demeter Forest","Ground Dragon Arisen",5,650,878,153,36,"Tier 2","Green","2,8-15","4,15-22","coin",,false],
    ["Tomb of the Saint","Under the Cemetery",5,398,418,82,37,"Tier 2","Light","2,15-22","5,8-15","coin",,false],
    ["Tomb of the Saint","Gravekeeper Gizmo",5,601,621,123,38,"Tier 2","Light","2,15-22","5,8-15","coin",,false],
    ["Tomb of the Saint","Wise White Dragon",5,650,657,131,39,"Tier 2","Light","2,15-22","5,8-15","coin",,false],
    ["Tomb of the Saint","Heaven's Servant",5,829,839,167,40,"Tier 2","Light","2,15-22","5,8-15","coin",,false],
    ["Tomb of the Saint","The Saint's Dragon",5,990,1010,200,41,"Tier 2","Light","2,15-22","5,8-15","coin",,false],
    ["Pluto Valley","Cave of the Valley",5,425,488,92,42,"Tier 2","Dark","3,8-15","5,15-22","coin",,false],
    ["Pluto Valley","Wandering Murderer",5,715,781,150,43,"Tier 2","Dark","3,8-15","5,15-22","coin",,false],
    ["Pluto Valley","Creeping Darkness",5,609,769,138,44,"Tier 2","Dark","3,8-15","5,15-22","coin",,false],
    ["Pluto Valley","Succubus's Whisper",5,762,965,173,45,"Tier 2","Dark","3,8-15","5,15-22","coin",,false],
    ["Pluto Valley","Dragon of the Abyss",5,900,940,184,46,"Tier 2","Dark","3,8-15","5,15-22","coin",,false],
    ["Tower of Giants","Path to the Tower",5,504,719,123,47,"Tier 2","Tower","6","0","stam",,false],
    ["Tower of Giants","Gate of the Giant",5,894,1113,201,48,"Tier 2","Tower","6","0","stam",,false],
    ["Tower of Giants","Dragons of the Tower",5,1340,1701,309,49,"Tier 2","Tower","6","0","stam",,false],
    ["Tower of Giants","Giant Guards",5,940,1222,217,50,"Tier 2","Tower","6","0","stam",,false],
    ["Tower of Giants","Wrath of the Giant",7,1380,1572,211,51,"Tier 2","Tower","6","0","stam",,false],
    ["Fire Forest Nerva","Burning Tree Path",7,1396,1736,224,52,"Tier 3","Red","1,8-15","3,15-22","drop",,false],
    ["Fire Forest Nerva","Fire-Worshipping Snake",7,1299,1646,211,53,"Tier 3","Red","1,8-15","3,15-22","drop",,false],
    ["Fire Forest Nerva","Dragons of Flame",7,1437,1860,236,54,"Tier 3","Red","1,8-15","3,15-22","drop",,false],
    ["Fire Forest Nerva","Fire-Laden Warrior",7,1437,1860,236,55,"Tier 3","Red","1,8-15","3,15-22","drop",,false],
    ["Fire Forest Nerva","Explosive Fire Dragon",7,1430,1801,231,56,"Tier 3","Red","1,8-15","3,15-22","drop",,false],
    ["Sea Cave Mercury","Path to the Seabed",7,1438,1507,211,66,"Tier 3","Blue","1,15-22","4,8-15","drop",,false],
    ["Sea Cave Mercury","Voice of the Siren",7,1254,1727,213,67,"Tier 3","Blue","1,15-22","4,8-15","drop",,false],
    ["Sea Cave Mercury","Water Dragon Gate",7,1513,1708,231,68,"Tier 3","Blue","1,15-22","4,8-15","drop",,false],
    ["Sea Cave Mercury","The Fanged Warriors",7,1571,1930,251,69,"Tier 3","Blue","1,15-22","4,8-15","drop",,false],
    ["Sea Cave Mercury","Sea Dragon of Ice",7,1577,1683,233,70,"Tier 3","Blue","1,15-22","4,8-15","drop",,false],
    ["Sacred Mt. Bakkes","Path to the Peak",7,1380,1737,223,79,"Tier 3","Green","2,8-15","4,15-22","drop",,false],
    ["Sacred Mt. Bakkes","Allure of Flowers",7,1348,1659,215,80,"Tier 3","Green","2,8-15","4,15-22","drop",,false],
    ["Sacred Mt. Bakkes","Young Earth Dragon",7,1480,1612,221,81,"Tier 3","Green","2,8-15","4,15-22","drop",,false],
    ["Sacred Mt. Bakkes","Dragon Knights",7,1611,1761,241,82,"Tier 3","Green","2,8-15","4,15-22","drop",,false],
    ["Sacred Mt. Bakkes","Apex Flower Dragon",7,1463,1870,239,83,"Tier 3","Green","2,8-15","4,15-22","drop",,false],
    ["Twin Temple Apollo","Sunlight Temple",8,1557,1980,222,84,"Tier 3","Light","2,15-22","5,8-15","drop",,false],
    ["Twin Temple Apollo","The Cruel Angel",8,1570,1742,207,85,"Tier 3","Light","2,15-22","5,8-15","drop",,false],
    ["Twin Temple Apollo","White Snake",8,1565,1765,209,86,"Tier 3","Light","2,15-22","5,8-15","drop",,false],
    ["Twin Temple Apollo","Warrior of the Sky",8,1235,2195,215,87,"Tier 3","Light","2,15-22","5,8-15","drop",,false],
    ["Twin Temple Apollo","Sunlight Dragon",8,1716,2266,249,88,"Tier 3","Light","2,15-22","5,8-15","drop",,false],
    ["Twin Temple Diana","Moonlight Temple",8,1416,1964,212,89,"Tier 3","Dark","3,8-15","5,15-22","drop",,false],
    ["Twin Temple Diana","The Coaxing Snake",8,1533,1940,218,90,"Tier 3","Dark","3,8-15","5,15-22","drop",,false],
    ["Twin Temple Diana","Twin Cursed Dragons",8,1664,2013,230,91,"Tier 3","Dark","3,8-15","5,15-22","drop",,false],
    ["Twin Temple Diana","Dark Dragon Knights",8,1592,2240,240,92,"Tier 3","Dark","3,8-15","5,15-22","drop",,false],
    ["Twin Temple Diana","Moonlight Dragon",8,1716,1932,228,93,"Tier 3","Dark","3,8-15","5,15-22","drop",,false],
    ["Castle of Satan","Castle Gate",9,1752,2394,231,115,"Tier 3","Tower","6","0","drop",,false],
    ["Castle of Satan","The Witches' Ball",9,1700,2424,230,116,"Tier 3","Tower","6","0","drop",,false],
    ["Castle of Satan","Cage of the Beast",9,2170,2564,263,117,"Tier 3","Tower","6","0","drop",,false],
    ["Castle of Satan","The King's Protectors",9,2156,2566,263,120,"Tier 3","Tower","6","0","drop",,false],
    ["Castle of Satan","King of Darkness",11,3026,3847,313,121,"Tier 3","Tower","6","0","drop",,false],
    ["Tower of Flare","Corridors of Illusion",9,2551,2618,288,122,"Tier 4","Tower/Red/Light","6","0","drop",,false],
    ["Tower of Flare","Room of Sunlight",9,1769,2188,220,123,"Tier 4","Tower/Red/Light","6","0","drop",,false],
    ["Tower of Flare","Flare Knights",9,2670,2888,309,124,"Tier 4","Tower/Red/Light","6","0","drop",,false],
    ["Tower of Flare","Dance of Flame and Light",9,2135,2526,259,125,"Tier 4","Tower/Red/Light","6","0","drop",,false],
    ["Tower of Flare","Red Guardian",11,3485,3864,335,126,"Tier 4","Tower/Red/Light","6","0","drop",,false],
    ["Polar Night Tower","Sunless Road",9,2500,2650,287,127,"Tier 4","Tower/Blue/Dark","6","0","drop",,false],
    ["Polar Night Tower","Room of Shadow",9,1850,2050,217,128,"Tier 4","Tower/Blue/Dark","6","0","drop",,false],
    ["Polar Night Tower","Knights of the Polar Night",9,2679,2736,301,129,"Tier 4","Tower/Blue/Dark","6","0","drop",,false],
    ["Polar Night Tower","Banquet of Temptation",9,2245,2509,265,130,"Tier 4","Tower/Blue/Dark","6","0","drop",,false],
    ["Polar Night Tower","Blue Guardian",11,3568,3616,327,131,"Tier 4","Tower/Blue/Dark","6","0","drop",,false],
    ["Tower of Nature","Three Dragons",9,2546,2658,290,132,"Tier 4","Tower/Red/Blue/Green","6","0","drop",,false],
    ["Tower of Nature","Room of Gaia",9,1879,2046,219,133,"Tier 4","Tower/Red/Blue/Green","6","0","drop",,false],
    ["Tower of Nature","Knights of Nature",9,2640,2876,307,134,"Tier 4","Tower/Red/Blue/Green","6","0","drop",,false],
    ["Tower of Nature","Great Wheel of Fire",9,2298,2512,268,135,"Tier 4","Tower/Red/Blue/Green","6","0","drop",,false],
    ["Tower of Nature","Green Guardian",11,3591,3796,336,136,"Tier 4","Tower/Red/Blue/Green","6","0","drop",,false],
    ["Tomb of the Saint-Deep","Nameless Soldiers' Souls",10,3119,3359,324,137,"Tier 4","Tower","6","0","drop",,false],
    ["Tomb of the Saint-Deep","Road of the Crawling Dead",10,2991,3196,310,138,"Tier 4","Tower","6","0","drop",,false],
    ["Tomb of the Saint-Deep","Gate to Hell",10,3400,3553,348,139,"Tier 4","Tower","6","0","drop",,false],
    ["Tomb of the Saint-Deep","Eternal Peace",10,3300,3433,337,140,"Tier 4","Tower","6","0","drop",,false],
    ["Tomb of the Saint-Deep","King of the Underworld",12,4449,5300,407,141,"Tier 4","Tower","6","0","drop",,false],
    ["Hyperion Lava Flow","Blazing River",10,4179,4737,446,142,"Tier 5","Red","1,8-15","3,15-22","drop",,false],
    ["Hyperion Lava Flow","Ruby Altar",10,3476,3678,358,143,"Tier 5","Red","1,8-15","3,15-22","drop",,false],
    ["Hyperion Lava Flow","Lava Tube",10,4799,5753,528,144,"Tier 5","Red","1,8-15","3,15-22","drop",,false],
    ["Hyperion Lava Flow","Serpent Loved by Flame",10,3915,4401,416,145,"Tier 5","Red","1,8-15","3,15-22","drop",,false],
    ["Hyperion Lava Flow","Blazing Dragon",12,5749,6772,522,146,"Tier 5","Red","1,8-15","3,15-22","drop",,false],
    ["Oceanus Falls","Eternal Waterfall",10,4216,4600,441,147,"Tier 5","Blue","1,15-22","4,8-15","drop",,false],
    ["Oceanus Falls","Sapphire Altar",10,3102,3971,354,148,"Tier 5","Blue","1,15-22","4,8-15","drop",,false],
    ["Oceanus Falls","Whirlpool in the Waterfall Basin",10,4802,5676,524,149,"Tier 5","Blue","1,15-22","4,8-15","drop",,false],
    ["Oceanus Falls","Invitation to the Abyss",10,3894,4346,412,150,"Tier 5","Blue","1,15-22","4,8-15","drop",,false],
    ["Oceanus Falls","Great Dragon of the Abyss",12,5640,6694,514,151,"Tier 5","Blue","1,15-22","4,8-15","drop",,false],
    ["Kronos Forest","Forest of Darkness",10,4311,4888,460,152,"Tier 5","Green","2,8-15","4,15-22","drop",,false],
    ["Kronos Forest","Jasper Altar",10,3336,3790,357,153,"Tier 5","Green","2,8-15","4,15-22","drop",,false],
    ["Kronos Forest","Gate to the Mystic Land",10,4898,5554,523,154,"Tier 5","Green","2,8-15","4,15-22","drop",,false],
    ["Kronos Forest","Fairies' Paradise",10,3836,4307,408,155,"Tier 5","Green","2,8-15","4,15-22","drop",,false],
    ["Kronos Forest","Ancient Guardian",12,5885,6728,526,156,"Tier 5","Green","2,8-15","4,15-22","drop",,false],
    ["Rhea-Themis Temple","Divinegon's Den",11,4387,5022,428,157,"Tier 5","Light","2,15-22","5,8-15","drop",,false],
    ["Rhea-Themis Temple","Golden Altar",11,3492,3977,340,158,"Tier 5","Light","2,15-22","5,8-15","drop",,false],
    ["Rhea-Themis Temple","Room of Prayers",11,3273,5700,408,159,"Tier 5","Light","2,15-22","5,8-15","drop",,false],
    ["Rhea-Themis Temple","The Price of a Smile",11,4155,4504,394,160,"Tier 5","Light","2,15-22","5,8-15","drop",,false],
    ["Rhea-Themis Temple","King of Dragons",14,6108,6458,449,161,"Tier 5","Light","2,15-22","5,8-15","drop",,false],
    ["Clayus Prison","Ground of Malice",11,4146,4420,390,162,"Tier 5","Dark","3,8-15","5,15-22","drop",,false],
    ["Clayus Prison","Amethyst Altar",11,3758,4046,355,163,"Tier 5","Dark","3,8-15","5,15-22","drop",,false],
    ["Clayus Prison","Well Leading Underground",11,5390,6145,525,164,"Tier 5","Dark","3,8-15","5,15-22","drop",,false],
    ["Clayus Prison","Witch of the Darkness",11,4212,4594,401,165,"Tier 5","Dark","3,8-15","5,15-22","drop",,false],
    ["Clayus Prison","Punisher from Hell",14,5890,6806,454,166,"Tier 5","Dark","3,8-15","5,15-22","drop",,false],
    ["Tower to the Sky","Guards of the Lower Levels",12,5670,6225,496,167,"Tier 5","Tower","6","0","drop",,false],
    ["Tower to the Sky","Peaceful Garden",12,3838,4282,339,168,"Tier 5","Tower","6","0","drop",,false],
    ["Tower to the Sky","White Snake Road",12,3932,4018,332,169,"Tier 5","Tower","6","0","drop",,false],
    ["Tower to the Sky","Door to Heaven",12,4047,4370,351,170,"Tier 5","Tower","6","0","drop",,false],
    ["Tower to the Sky","Beautiful Being",15,6149,6929,436,171,"Tier 5","Tower","6","0","drop",,false],
    ["Ocean of Heaven","Sea of White Clouds",12,4821,5575,434,172,"Tier 5","Tower","6","0","drop",,false],
    ["Ocean of Heaven","Twin Jewels in the Sky",12,5020,5633,444,173,"Tier 5","Tower","6","0","drop",,false],
    ["Ocean of Heaven","Diva in a Sea of Clouds",12,4462,4896,390,174,"Tier 5","Tower","6","0","drop",,false],
    ["Ocean of Heaven","Guardian of Skies and Seas",12,4745,5354,421,175,"Tier 5","Tower","6","0","drop",,false],
    ["Ocean of Heaven","Sea-God of Heaven",15,6016,7308,445,176,"Tier 5","Tower","6","0","drop",,false],
    ["Vesta Cave","Bottomless Void",13,6254,7172,517,177,"Tier 6","Red","1,8-15","3,15-22","drop",,false],
    ["Vesta Cave","Underground Ruin",13,6146,6584,490,178,"Tier 6","Red","1,8-15","3,15-22","drop",,false],
    ["Vesta Cave","Underground Fire Lake",13,5049,6234,434,179,"Tier 6","Red","1,8-15","3,15-22","drop",,false],
    ["Vesta Cave","Center of the Earth",13,4950,5261,393,180,"Tier 6","Red","1,8-15","3,15-22","drop",,false],
    ["Vesta Cave","Lava Dragon of Mantle",16,7320,8368,491,181,"Tier 6","Red","1,8-15","3,15-22","drop",,false],
    ["Frozen Soil of Prosell","Frozen Ground",13,6342,7147,519,182,"Tier 6","Blue","1,15-22","4,8-15","drop",,false],
    ["Frozen Soil of Prosell","Frost Woods",13,5838,6255,466,183,"Tier 6","Blue","1,15-22","4,8-15","drop",,false],
    ["Frozen Soil of Prosell","Frozen Castle",13,5471,5823,435,184,"Tier 6","Blue","1,15-22","4,8-15","drop",,false],
    ["Frozen Soil of Prosell","Sky-Scraping Iceberg",13,4330,5483,378,185,"Tier 6","Blue","1,15-22","4,8-15","drop",,false],
    ["Frozen Soil of Prosell","Ice Crystal Dragon",16,7295,8307,488,186,"Tier 6","Blue","1,15-22","4,8-15","drop",,false],
    ["Mars Crater","Great Mountains of Olympus",13,5916,6881,493,187,"Tier 6","Green","2,8-15","4,15-22","drop",,false],
    ["Mars Crater","Great Mountain Caves",13,5732,6551,473,188,"Tier 6","Green","2,8-15","4,15-22","drop",,false],
    ["Mars Crater","Shooting Star Woods",13,5516,6032,445,189,"Tier 6","Green","2,8-15","4,15-22","drop",,false],
    ["Mars Crater","Dragon's Den",13,4305,5103,362,190,"Tier 6","Green","2,8-15","4,15-22","drop",,false],
    ["Mars Crater","Star-Breaking Dragon",16,6910,8504,482,191,"Tier 6","Green","2,8-15","4,15-22","drop",,false],
    ["Jupiter, City in the Sky","Floating Island",14,6596,7766,513,192,"Tier 6","Light","2,15-22","5,8-15","drop",,false],
    ["Jupiter, City in the Sky","Abandoned City",14,6306,7211,483,193,"Tier 6","Light","2,15-22","5,8-15","drop",,false],
    ["Jupiter, City in the Sky","Claw of Judgment",14,6200,6437,452,194,"Tier 6","Light","2,15-22","5,8-15","drop",,false],
    ["Jupiter, City in the Sky","Isolated Ruin of the Sky",14,5243,6039,403,195,"Tier 6","Light","2,15-22","5,8-15","drop",,false],
    ["Jupiter, City in the Sky","Lightning Dragons of the Skies",17,7555,9608,505,196,"Tier 6","Light","2,15-22","5,8-15","drop",,false],
    ["Junos Island","Forbidden Isle",14,6652,7624,510,197,"Tier 6","Dark","3,8-15","5,15-22","drop",,false],
    ["Junos Island","City of Corpses",14,6678,7159,495,198,"Tier 6","Dark","3,8-15","5,15-22","drop",,false],
    ["Junos Island","True Nightmare",14,5791,6723,447,199,"Tier 6","Dark","3,8-15","5,15-22","drop",,false],
    ["Junos Island","Rusted Altar",14,5341,5807,399,200,"Tier 6","Dark","3,8-15","5,15-22","drop",,false],
    ["Junos Island","Chaos Dragon of Ruins",17,8590,9107,521,201,"Tier 6","Dark","3,8-15","5,15-22","drop",,false],
    ["Starlight Sanctuary","Guardian Dragon of God",14,6100,7150,474,202,"Tier 6","Tower","6","0","drop",,false],
    ["Starlight Sanctuary","Goddess of Harvest",14,6900,8250,542,203,"Tier 6","Tower","6","0","drop",,false],
    ["Starlight Sanctuary","Goddess of War",14,6400,7450,495,204,"Tier 6","Tower","6","0","drop",,false],
    ["Starlight Sanctuary","Queen of the Gods",14,8300,9500,636,205,"Tier 6","Tower","6","0","drop",,false],
    ["Starlight Sanctuary","King of the Gods",17,13000,14800,818,206,"Tier 6","Tower","6","0","drop",,false],
    ["Alt. Castle of Satan in Abyss","Red Eyes and Evil Claws",30,14000,20000,566,1869,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Castle of Satan in Abyss","Bloody Scales Over Soft Skin 2",30,13000,19000,533,1870,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Castle of Satan in Abyss","Dark Flames Ghost",30,14000,19000,550,1871,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Castle of Satan in Abyss","Dragon Puppets 2",30,13000,19000,533,1872,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Castle of Satan in Abyss","Return of the Dark King 2",30,18000,28000,766,1873,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Green Water","Rosettes and Water Blood",30,15000,18500,558,1874,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Green Water","Flower Fairies 2",30,15000,18500,558,1875,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Green Water","Wind Water Ghost",30,15000,18500,558,1876,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Green Water","Room of Twin Fish 2",30,15000,19000,566,1877,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Green Water","Fortdragon of the Shrine 2",30,22000,26000,800,1878,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Liquid Flame","Water Blood and Red Eyes",30,16000,19000,583,1879,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Liquid Flame","Singing Mermaid 2",30,15000,18000,550,1880,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Liquid Flame","Water Flames Ghost",30,15000,18500,558,1881,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Liquid Flame","Twin Fire Toydragons 2",30,16000,18000,566,1882,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Liquid Flame","Waterdragon of the Shrine 2",30,21000,27000,800,1883,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Blazing Woods","Rosettes and Red Eyes",30,16000,19000,583,1884,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Blazing Woods","Fire Serpent 2",30,14000,18000,533,1885,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Blazing Woods","Wind Flames Ghost",30,16000,19500,591,1886,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Blazing Woods","Toynasaurs in the Way 2",30,14000,17000,516,1887,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Shrine of Blazing Woods","Fire Toydragon of the Shrine 2",30,22000,28000,833,1888,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Temple of Trailokya","Gleaming Horns and Evil Claws",30,17000,19000,600,1889,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Temple of Trailokya","Waltz of Maidens",30,16000,19000,583,1890,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Temple of Trailokya","Radiant Darkness Ghost",30,18000,20000,633,1891,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Temple of Trailokya","Door to Trailokya",30,16000,19000,583,1892,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Temple of Trailokya","Dragon of Trailokya",30,24000,29500,891,1893,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hypno Forest","Flower Dragon of the Forest 2",30,13000,15000,466,1894,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hypno Forest","Green Hero",30,11000,13500,408,1895,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hypno Forest","Ancient Dragon Warrior 2",30,12000,16000,466,1896,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hypno Forest","Green Giant 2",30,13000,16000,483,1897,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hypno Forest","Noble Wolf King Hero",30,18000,23000,683,1898,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Creek of Neleus","Sea Dragon of the Creek 2",30,12000,15000,450,1899,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Creek of Neleus","Blue Hero",30,12000,14500,441,1900,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Creek of Neleus","Hunter at the Seaside 2",30,12000,15000,450,1901,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Creek of Neleus","Guardian of the Creek 2",30,11000,15000,433,1902,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Creek of Neleus","Earth-Rending Emperor",30,18000,23000,683,1903,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hemera Volcanic Belt","Flame-Devouring Dragon 2",30,13000,14500,458,1904,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hemera Volcanic Belt","Red Strong Warrior",30,10000,13500,391,1905,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hemera Volcanic Belt","Knight Embraced by Phoenix 2",30,12000,15000,450,1906,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hemera Volcanic Belt","Fire! Fire!! Fire!!! 2",30,12000,15000,450,1907,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Hemera Volcanic Belt","Red Giant",30,18000,23000,683,1908,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Aither Desert","Hunter in the Desert 2",30,14000,16000,500,1909,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Aither Desert","Beyond the Desert 2",30,12000,14000,433,1910,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Aither Desert","Temple Under the Desert 2",30,12000,14500,441,1911,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Aither Desert","Guards of the Light 2",30,13000,15000,466,1912,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Aither Desert","Shielded Goddess",30,20000,24000,733,1913,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Talos's Abyss","Moon in the Abyss 2",30,14000,16000,500,1914,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Talos's Abyss","Glimpse of Death 2",30,11500,13000,408,1915,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Talos's Abyss","Fallen Dragon Knight 2",30,13000,16000,483,1916,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Talos's Abyss","Annihilator of the Void 2",30,13000,16000,483,1917,"Alt. Tier","Tower","6","0","",,true],
    ["Alt. Talos's Abyss","Dark Liege",30,18000,23500,691,1918,"Alt. Tier","Tower","6","0","",,true],
    ["Machine Hera Descended!","Mechanical Queen-Annihilation",99,138867,138867,1403,1826,"Mecha Tier","Tower","6","0","",,true],
    ["Machine Zeus Descended!-No RCV","Mechanical War King-Annihilation",99,114497,114497,1157,1973,"Mecha Tier","Tower","6","0","",,true],
    ["Myr Descended!","Time Boundaries Dragon - Legend Plus",50,25456,33658,591,2149,"Rogue Tier","Tower","6","0","",,true],
    ["Myr Descended!","Time Boundaries Dragon - Mythical Plus",50,34119,45111,792,2150,"Rogue Tier","Tower","6","0","",,true],
    ["Gainaut Descended!","Stubborn Dragon King - Legend Plus",50,40442,49569,900,1974,"Rogue Tier","Tower","6","0","",,true],
    ["Gainaut Descended!","Stubborn Dragon King - Mythical Plus",50,51523,63469,1149,1975,"Rogue Tier","Tower","6","0","",,true],
    ["Linthia Descended!","Dragon Queen of the Wind - Legend Plus",50,46054,46054,921,1827,"Rogue Tier","Tower","6","0","",,true],
    ["Linthia Descended!","Dragon Queen of the Wind - Mythical Plus",50,57587,57587,1151,1828,"Rogue Tier","Tower","6","0","",,true],
    ["Volsung Descended!","Sea Dragon King - Legend Plus",50,37967,49813,877,1837,"Rogue Tier","Tower","6","0","",,true],
    ["Volsung Descended!","Sea Dragon King - Mythical Plus",50,47786,58375,877,1838,"Rogue Tier","Tower","6","0","",,true],
    ["Scarlet Descended!","Hell Demon - Legend Plus",50,37228,42032,792,1835,"Rogue Tier","Tower","6","0","",,true],
    ["Scarlet Descended!","Hell Demon - Mythical Plus",50,47768,58353,792,1836,"Rogue Tier","Tower","6","0","",,true],
    ["Nordis Descended!","Knight Dragon King - Legend Plus",50,38925,44453,833,1833,"Rogue Tier","Tower","6","0","",,true],
    ["Nordis Descended!","Knight Dragon King - Mythical Plus",50,46626,60762,1073,1834,"Rogue Tier","Tower","6","0","",,true],
    ["Zaerog∞ Descended","Phantom Dragon King - Legend Plus",50,45573,50896,964,1831,"Rogue Tier","Tower","6","0","",,true],
    ["Zaerog∞ Descended","Phantom Dragon King - Mythical Plus",50,60449,60889,1213,1832,"Rogue Tier","Tower","6","0","",,true],
    ["Special Descended Rush!","Dragon's Evil Domain - Mythical Plus",99,88468,88468,893,2153,"Rogue Tier","Tower","6","0","",,true],
    ["Special Descended Rush!","Dragon's Evil Domain - Annihilation",99,121030,121030,1222,2154,"Rogue Tier","Tower","6","0","",,true],
    ["Ultimate Yamato Rush!","Land of the Rising Sun - Legend Plus",66,40293,46842,660,1847,"Rush Tier","Tower","6","0","",,true],
    ["Ultimate Yamato Rush!","Land of the Rising Sun - Mythical Plus",99,59830,73323,672,1848,"Rush Tier","Tower","6","0","",,true],
    ["Ultimate Dragon Rush!","True Dragon Realm - Legend Plus",66,40672,49543,683,1845,"Rush Tier","Tower","6","0","",,true],
    ["Ultimate Dragon Rush!","True Dragon Realm - Mythical Plus",99,96159,120737,1095,1846,"Rush Tier","Tower","6","0","",,true],
    ["Ultimate Devil Rush!","Devils' Domain - Legend Plus",66,35360,48196,633,1843,"Rush Tier","Tower","6","0","",,true],
    ["Ultimate Devil Rush!","Devils' Domain - Mythical Plus",99,95571,102011,997,1844,"Rush Tier","Tower","6","0","",,true],
    ["Ultimate Hera Rush!","Queen's Banquet - Legend Plus",66,39758,47240,659,1841,"Rush Tier","Tower","6","0","",,true],
    ["Ultimate Hera Rush!","Queen's Banquet - Mythical Plus",99,66300,80992,743,1842,"Rush Tier","Tower","6","0","",,true],
    ["Ultimate God Rush!","Divine Realm - Legend Plus",66,36458,44525,613,1839,"Rush Tier","Tower","6","0","",,true],
    ["Ultimate God Rush!","Divine Realm - Mythical Plus",99,83765,110539,981,1840,"Rush Tier","Tower","6","0","",,true],
    ["Super-Ultimate Dragon Rush!","Absolute Dragon Realm - Annihilation",99,168437,168437,1701,2073,"Rush Tier","Tower","6","0","",,true]
];

var nowM = moment();
nowM.tz("America/Los_Angeles");
if (nowM.day() == 1) {
    d.push(["Monday Dungeon","Iron Strength Plaza - Expert",25,19000,21000,800,1649,"Special Dungeon","Tower","6","0",""]);
    d.push(["Monday Dungeon","Iron Strength Plaza - Legend",50,60000,63000,1230,1650,"Special Dungeon","Tower","6","0",""]);
}
for (i in d) { d[i].unlocked = true; d[i][12] = parseInt(i); }
var intRegex = /^\d+$/;
function numberWithCommas(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }
var avgExpMode = true;
var coopMode = false;
var solutions = {}; solutions[0] = {d:[],avg:0,min:0,n:0,totalStamina:0};

// Given a dungeon, and a bonus type, checks if bonus is active
// @type is "drop" "coin"
function is_bonus(dd, type, timestamp) {
    if (!dd[11] || dd[11] !== type) {
        return false;
    }
    var nowM;
    if (typeof timestamp=='object') {
        nowM = timestamp.clone();
    } else {
        nowM = moment();
    }
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

function is_coop(d) {
    if (coopMode) {
        return d[13];
    }
    return false;
}

function filterDungeons(timestamp) {
    var opt = {};
    for (i in d) {
        if (!d[i].unlocked) { continue; }
        var stam = (is_bonus(d[i], "stam", timestamp) || is_coop(d[i])) ? Math.round(d[i][2]/2) : d[i][2];
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
    return opt;
}

function delete_solutions() {
    solutions = null;
    solutions = {}; solutions[0] = {d:[],avg:0,min:0,n:0,totalStamina:0};
}

// @timestamp is optional parameter
solve_unbounded_knapsack = function (stamina, timestamp) {
    // cap at some stamina to prevent running too long?
    if (stamina >= 2000) { return null; }

    if (""+stamina in solutions) {
        return;
    }
    var opt = filterDungeons(timestamp);
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
                    min: solutions[currentStamina - dungeonCandidate].min+opt[dungeonCandidate][3],
                    n: newArr.length,
                    totalStamina: solutions[currentStamina - dungeonCandidate].totalStamina + opt[dungeonCandidate][2]};
            }
        }
        solutions[currentStamina] = newSolution;
        currentStamina++;
    }
}

find_consolation = function(u_stam, u_exp) {
    delete_solutions();
    var tryStam = u_stam;
    var tryTime = moment();
    while (true) {
        solve_unbounded_knapsack(tryStam, tryTime);
        var sorted = find_all_matches_sorted(tryStam, u_exp, tryTime);

        if (avgExpMode && (solutions[tryStam].avg > u_exp)) {
            return [tryStam, tryTime, sorted];
        } else if (!avgExpMode && (solutions[tryStam].min > u_exp)) {
            return [tryStam, tryTime, sorted];
        }
        tryStam++;
        tryTime.add('minutes', 3);
    }
}

custom_sort = function (mode) {
    var rRows = $('#r_rows'),
        rTrs = rRows.children("tr");
    if (mode!==0) {
        rTrs.sort(function(a,b){
            var an = parseInt($($(a).children('td')[mode]).text().replace(",",""));
            var bn = parseInt($($(b).children('td')[mode]).text().replace(",",""));
            if (mode==3) {
                if (an==bn) {
                    var ad = $($(a).children('td')[0]).data("id");
                    var bd = $($(b).children('td')[0]).data("id");
                    if (ad.length!==bd.length) {
                        return ad.length - bd.length;
                    }
                    return ad[0] - bd[0];
                }
                return parseInt(an)-parseInt(bn);
            }
            if (an==bn) {
                var ad = $($(a).children('td')[0]).data("id");
                var bd = $($(b).children('td')[0]).data("id");
                if (ad.length!==bd.length) {
                    return ad.length - bd.length;
                }
                return ad[0] - bd[0];
            }
            return bn-an;
        });
    } else if (mode===0) {
        rTrs.sort(function(a,b){
            var an = $($(a).children('td')[0]).data("id");
            var bn = $($(b).children('td')[0]).data("id");
            if (bn.length!==an.length) {
                return an.length - bn.length;
            }
            else {
                var aStaminaTotal = 0;
                for (var a in an) {
                    aStaminaTotal += (d[an[a]][2]);
                    aStaminaTotal += (an[a]);

                }
                var bStaminaTotal = 0;
                for (var b in bn) {
                    bStaminaTotal += (d[bn[b]][2]);
                    bStaminaTotal += (bn[b]);
                }
                return aStaminaTotal - bStaminaTotal;
            }
        });
    }
    rTrs.detach().appendTo(rRows);
    $('.table-striped>tbody>tr:nth-child(even)>td').removeClass("odd").addClass('even');
    $('.table-striped>tbody>tr:nth-child(odd)>td').removeClass("even").addClass('odd');
}
sortBy = function(elem, idx) {
    if (idx==0) {
        custom_sort(idx);
        $('#sortMode').text("easiest Dungeon");
    }
    if (idx==4) {
        $('#sortMode').text("extra Stamina");
        custom_sort(idx);
    } else if (idx==1) {
        $('#sortMode').text("highest avg EXP");
        custom_sort(idx);
    } else if (idx ==2) {
        $('#sortMode').text("highest EXP");
        custom_sort(idx);
    } else if (idx ==3) {
        $('#sortMode').text("lowest Stamina cost");
        custom_sort(idx);
    }
    $('.activeSort').removeClass('activeSort');
    $(elem).addClass('activeSort');
}
// finds all single dungeons that match the given stam/exp
// timestamp is an optional parameter - can be in the future to check if bonuses apply at that time.
find_all_matches_sorted = function(stam, exp, timestamp) {
    var all_matches = [];
    for (i in d) {
        var v = avgExpMode ? (d[i][3] + d[i][4])/2 : d[i][3];
        var dstam = (is_bonus(d[i], "stam", timestamp) || is_coop(d[i])) ? Math.round(d[i][2]/2) : d[i][2];
        if ((d[i].unlocked) && dstam <= stam && v >= exp) {
            all_matches.push( {d:[d[i]], n:1, min:d[i][3], avg:(d[i][3]+d[i][4])/2} );
        }
    }
    all_matches.sort(function(a,b) {
        return b.avg - a.avg;
    });
    return all_matches;
}

printResults = function(solutions, divId, u_stam) {
    // todo: find easiestId

    for (var i=0; i < solutions.length; i++) {
        var solution = solutions[i];
        if (solution.n == 1) {
            var dungeon = solution.d[0];
            var tag = "";
            if (is_bonus(dungeon, "coin")) {
                tag += "<span class='coin_badge'>2x Coin</span>";
            } else if (is_bonus(dungeon, "drop")) {
                tag += "<span class='drop_badge'>1.5 Drop</span>";
            } else if (is_bonus(dungeon, "stam")) {
                tag += "<span class='stamina_badge'>1/2 Stam</span>";
            }
            var lastColumn = "";
            if (u_stam) {
                lastColumn="<td class='shrink' style='text-align: center; vertical-align: middle; padding-left: 0; padding-right: 10px;'>"+Math.max((u_stam-parseInt(dungeon[2])), 0)+"</td>";
            }
            $(divId).append("<tr>" +
                "<td data-id='["+dungeon[12]+"]' class='expand' style='padding-left:15px;'>"+tag+"<div class='dungeonName'>"+dungeon[0]+"</div>"+
                    "<a class='linkify subDungeonName' target='_blank' href='http://www.puzzledragonx.com/en/mission.asp?m="+dungeon[6]+"'>"
                    +dungeon[1]+"</a></td>" +
                "<td class='shrink' style='text-align: right; vertical-align: middle; padding-left: 0; padding-right: 20px;'>"+numberWithCommas(Math.round(solution.avg))+"</td>" +
                "<td class='shrink' style='text-align: right; vertical-align: middle; padding-left: 0; padding-right: 10px;'>"+numberWithCommas(solution.min)+"</td>" +
                "<td class='shrink' style='text-align: center; vertical-align: middle; padding-left: 0; padding-right: 10px;'>"+((is_bonus(dungeon,"stam") || is_coop(dungeon)) ? Math.ceil(dungeon[2]/2) : dungeon[2])+"</td>"+
                lastColumn+
                "</tr>");
        } else if (solution.n > 1) {
            var h1 = "", h2 = "", h3 = "", h4 = "", dungeonStr = [], dungeonIds = [], real_stamina = 0;
            for (var di=solution.d.length-1; di>=0; di--) {
                dungeonIds.push(solution.d[di][12]);
                dungeonStr.push('<a class="linkify subDungeonName" target="_blank" href="http://www.puzzledragonx.com/en/mission.asp?m='+
                    solution.d[di][6]+'" >'+ solution.d[di][1] +'</a>');
                if (is_bonus(solution.d[di], "stam") || is_coop(solution.d[di])) {
                    real_stamina += Math.ceil(solution.d[di][2] / 2);
                } else {
                    real_stamina += solution.d[di][2];
                }
                
                h1 += ('<div class="minirow"><div class="dungeonName">'+solution.d[di][0] + '</div>' +
                    '<a class="linkify subDungeonName" target="_blank" href="http://www.puzzledragonx.com/en/mission.asp?m='+
                    solution.d[di][6]+'" >'+ solution.d[di][1] +'</a></div>');
                h2 += ('<div class="minirow" style="line-height: 40px;">'+numberWithCommas(Math.round((solution.d[di][3]+solution.d[di][4])/2))+'</div>');
                h3 += ('<div class="minirow" style="line-height: 40px;">'+numberWithCommas(solution.d[di][3])+'</div>');
                h4 += ('<div class="minirow" style="line-height: 40px;">'+solution.d[di][2]+'</div>');
            }
            var lastColumn = "";
            if (u_stam) {
                lastColumn = "<td class='shrink' style='vertical-align: middle; text-align: center; padding-left: 0; padding-right: 10px;'>"+Math.max((u_stam - real_stamina), 0)+"</td>";
            }
            $(divId).append("<tr>" +
                "<td data-id='["+dungeonIds.join()+"]' class='expand' style='padding-left:15px;'>" +
                    "<span style='color: #7F8289; font-weight: 300; font-size: 13px;'>"+solution.d.length+" Dungeons:</span><br>"+
                    ""+dungeonStr.join("<span style='color:white; font-size: 13px;'> + </span>")+ "</td>"+
                "<td class='shrink' style='vertical-align: middle; text-align: right; padding-left: 0; padding-right:20px; '>"+numberWithCommas(Math.round(solution.avg))+"</td>"+
                "<td class='shrink' style='vertical-align: middle; text-align: right; padding-left: 0; padding-right: 10px;' class='nobreak'>"+numberWithCommas(Math.round(solution.min))+"</td>"+
                "<td class='shrink' style='vertical-align: middle; text-align: center; padding-left: 0; padding-right: 10px; '>"+real_stamina+"</td>"+
                lastColumn+

//                '<td style="padding: 0 0 0 10px;">'+h1+'</td>' +
//                "<td style='padding: 0 10px 0 10px; text-align: right;'>"+h2+"</td>" +
//                "<td style='padding: 0 0 0 10px; text-align: right; padding-right: 0;' class='nobreak'>"+h3+"</td>" +
//                "<td style='padding: 0 10px 0 10px; text-align: right;'>"+h4+"</td>"+
//                "<td>"+(u_stam-solution.totalStamina)+"</td>"+
                "</tr>");
        }
    }
}
// IE8 doesn't have .trim()
function myTrim(x){
    return x.replace(/^\s+|\s+$/gm,'');
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
    delete_solutions();

    var u_stam = myTrim($('#u_stam').val());
    var u_exp = myTrim($('#u_exp').val());

    // IE8 does something weird where the placeholder ? becomes the value if you press enter twice
    if (u_stam==="?") {u_stam="";}
    if (u_exp==="?") {u_exp="";}

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
    if(u_stam==='') {
        $('#u_stam').val('');
        u_stam = 0;
    }
    if (u_exp==='') {
        $('#u_exp').val('');
        u_exp = 0;
    }

    $('#u_exp').blur();
    $('#u_stam').blur();
    $('#results_header').show();
    $('#tabbys a[href="#tab2"]').tab('show');

    $('.activeSort').removeClass('activeSort');
    $('#defaultSortColumn').addClass('activeSort');

    u_stam = parseInt(u_stam);
    u_exp = parseInt(u_exp);

    solve_unbounded_knapsack(u_stam);
    var mostExp = avgExpMode ? solutions[u_stam].avg : solutions[u_stam].min;
    if (mostExp >= u_exp) {
        // check if the solution has TOO MUCH stamina
        var checkIfTooMuchExp = function(stam, exp) {
            var optSol = solutions[stam]; var _exp = 0;
            for (var i=optSol.d.length-1; i>=0; i--) {
                // if we're on the last loop, then the sum is supposed to be > exp and that's OK
                if (i == 0) { return false; }
                _exp += (avgExpMode ? (optSol.d[i][3]+optSol.d[i][4])/2 : optSol.d[i][3]);
                if (_exp > exp){ return true; }
            }
        }
        var stamTry = u_stam;
        // if u_exp is blank, we'll want to print all matches
        while (true && u_exp!=0) {
            if (checkIfTooMuchExp(stamTry, u_exp)) { stamTry--; }
            else { break; }
        }
        var completeSolutions = [];
        // add all multi-dungeon solutions
        while (stamTry>=0){
            if (stamTry>0 && (solutions[stamTry-1].totalStamina === solutions[stamTry].totalStamina)) {
                // skip this one, since it's using a lower stamina
            }
            else if (solutions[stamTry].d.length >= 2) {
                if (avgExpMode && (solutions[stamTry].avg > u_exp) ||
                    !avgExpMode && (solutions[stamTry].min > u_exp)) {
                    completeSolutions.push(solutions[stamTry]);
                }
            }
            stamTry--;
        }
        // add all single dungeon solutions
        var singleDungeonSolutions = find_all_matches_sorted(u_stam, u_exp);
        completeSolutions = completeSolutions.concat(singleDungeonSolutions);

        $('#ranked-container').show();
        if (completeSolutions.length>0) {
            if (u_stam>0 && u_exp==0) {
                if (completeSolutions.length==1) {
//                    $('#num_results').html("With "+u_stam+" Stamina, run:");
                } else {
                    $('#num_results').html("With "+u_stam+" Stamina, there are <span style='color:white;'>"+completeSolutions.length+"</span> dungeon options.&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "Sorted by&nbsp;&nbsp;<span data-toggle='tooltip' data-placement='top' title='To change the sort order, click on the column header you wish to sort by.' id='sortMode'>highest avg EXP</span>");
                    $('#sortMode').tooltip();
                }
            } else {
                if (completeSolutions.length==1) {
//                    $('#num_results').html("For "+u_exp+" EXP and "+u_stam+" Stamina, run:");
                } else {
                    $('#num_results').html("For "+u_exp+" EXP and "+u_stam+" Stamina, there are <span style='color:white;'>"+completeSolutions.length+"</span> options.&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "Sorted by&nbsp;&nbsp;<span data-toggle='tooltip' data-placement='top' title='To change the sort order, click on the column header you wish to sort by.' id='sortMode'>highest avg EXP</span>");
                    $('#sortMode').tooltip();
                }
            }
        }
        printResults(completeSolutions, "#r_rows", u_stam);
    }
    else {
        // user does not have enough stamina.
        var most = solutions[u_stam];
        if (most.min > 0) {
            $('#most_exp-container').show();
            $('#bummer').show();
            printResults([most], "#m_rows");
            $('#most_exp').text(numberWithCommas(Math.round(mostExp)));
        } else {
            $('#but_wait').hide();
        }

        $('#consolation').show();
        $('#consolation_alert').show();
        var consolation = find_consolation(u_stam, u_exp);
        var consolation_stam = consolation[0];
        var consolation_time = consolation[1];

        // round down to the nearest 10-minute mark, since stamina increases at 10 minute intervals
        consolation_time.minutes(Math.floor(consolation_time.minutes()/5)*5 + 1);

        var additional_mins = consolation_time.diff(moment(), "minutes");
        if (additional_mins <= 60) {
            if (u_stam==0) {
                $('#consolation_msg').html("For <b>"+u_exp+"</b> EXP, you'll need <b>"+consolation_stam+"</b> Stamina for:");
            } else {
                $('#consolation_msg').html("In <b>"+additional_mins+" minutes</b>, you'll have <b>"+consolation_stam+"</b> Stamina for:");
            }
        } else {
            if (u_stam==0) {
                $('#consolation_msg').html("For <b>"+u_exp+"</b> EXP, you'll need <b>"+consolation_stam+"</b> Stamina for:");
            }else {
                // to show the time, subtract 1 minute so it show up cleanly, e.g. "At 3:50, you'll have... " instead of "3:51"
                consolation_time.subtract("minutes", 1);
                $('#consolation_msg').html("At <b>"+(consolation_time.format("h:mm a"))+"</b>, you'll have "+consolation_stam+" Stamina for:");
            }
        }

        var completeConsolationSolutions = [];
        if (solutions[consolation_stam].n >= 2) {
            completeConsolationSolutions.push(solutions[consolation_stam]);
        }
        completeConsolationSolutions = completeConsolationSolutions.concat(consolation[2]);
        printResults(completeConsolationSolutions, "#c_rows");
    }

//    for IE 8
    $('.table-striped>tbody>tr:nth-child(even)>td').addClass('even');
    $('.table-striped>tbody>tr:nth-child(odd)>td').addClass('odd');
    $('.accordion-inner p:nth-child(odd)').addClass('odd');
}

    function checkAll(el) {
        var checkboxes = $("input:checkbox." + $(el).attr('id'));
        $(checkboxes).each(function() {
            $(this).prop("checked", el.checked).trigger('change');
            $(this).children('input:checkbox').prop('checked', el.checked)
        })
    }


$(document).ready(function() {
    // polyfill for IE8. placeholder bug
    $('input, textarea').placeholder();

    $('#u_exp').focus();

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
            var tier = d[i][7];
            var tierStr = "";

            if (tierName !== tier && tier) {
                tierStr = "<div class='tier'><input type='checkbox' id='" + tier.replace(" ", "").replace(".","") + "' onchange='checkAll(this)' checked class='checkboxTier checked' /> "+tier+"</div>";
                tierName = tier;
            }
            htmlStr = tierStr + '<div class="accordion-group"><div class="accordion-heading togglize">' +
                '<a class="accordion-toggle dungeon tower unlocked" data-toggle="collapse" data-parent="#" href="#collapse'+i+'">' +
                '<input type="checkbox" checked id="c'+i+'" class="checkbox1 checked ' + tierName.replace(" ", "").replace(".","") + '" />' +
                '<label for="c'+i+'" class="c-label"></label>' +
                '<p>'+d[i][0]+'</p>' +
                '<span class="font-icon-plus tog"></span>' +
                '<span class="font-icon-minus tog"></span></a></div>' +
                '<div id="collapse'+i+'" class="accordion-body collapse"><div class="accordion-inner">';
        }
        htmlStr += ('<p class="sub-dungeon unlocked" >' +
            '<input type="checkbox" data-arrayid="'+i+'" checked id="cc'+i+'" class="checkbox2 checked ' + tierName.replace(" ", "").replace(".","") + '" />' +
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

    $('#setting_intro_close, #dismiss2').click(function(e) {
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
        delete_solutions();
    });

    $('#coop_no').click(function(event) {
    $('#coop_checkbox').prop("checked", true).trigger("change");
    });
    $('#coop_yes').click(function(event) {
        $('#coop_checkbox').prop("checked", false).trigger("change");
    });
    $('#coop_checkbox').change(function(event){
        if($(this).is(':checked')){
            $(this).addClass("checked");
            $('#coop_no').addClass("calc_active");
            $('#coop_yes').removeClass('calc_active');
            coopMode = false;
        } else {
            $(this).removeClass("checked");
            $('#coop_yes').addClass("calc_active");
            $('#coop_no').removeClass('calc_active');
            coopMode = true;
        }
        savePref("coopMode", coopMode, 180);
        delete_solutions();
    });

    var expMode = readPref("expMode");
    if (expMode !== null) {
        avgExpMode = expMode;
    } else {
        savePref("expMode", avgExpMode, 180);
    }
    $('#exp_checkbox').prop("checked", avgExpMode).trigger("change");

    var cMode = readPref("coopMode");
    if (cMode !== null) {
        coopMode = cMode;
    } else {
        savePref("coopMode", coopMode, 180);
    }
    $('#coop_checkbox').prop("checked", !coopMode).trigger("change");

    var lockedDungeons = readPref("locked");
    if (lockedDungeons !== null) {
        for (var l in lockedDungeons) {
            d[lockedDungeons[l]].unlocked = false;
            $('#cc'+lockedDungeons[l]).prop('checked', false).trigger("change");
        }
    } else {
        // uncheck Starlight Sanctuary if they have not yet configured settings
        $($('.checkbox1')[0]).trigger("click");
    }

    var paramStamina = getParameterByName("stamina");
    var paramExp = getParameterByName("exp");
    var doCompute = false;

    pre_compute = function(e,s) {
        $('#u_stam').val(s);
        $('#u_exp').val(e);
        compute();
        setTimeout(function(){
            $('#quick_look_header').removeClass('active');
            $('#results_header').addClass("active");},
        1000);
    }
    if (paramStamina!=='' && intRegex.test(paramStamina)) {
        $('#u_stam').val(paramStamina);
        doCompute=true;
    }
    if (paramExp!=='' && intRegex.test(paramExp)) {
        $('#u_exp').val(paramExp);
        doCompute = true;
    }
    if (doCompute) {
        compute();
        $('#u_exp').blur();
        $('#u_stam').blur();
    }
    var breakPoints = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000];
    function refreshQLU () {
        for (var b in breakPoints) {
            var expB = breakPoints[b];
            var consolation = find_consolation(0, expB);
            var consolation_stam = consolation[0];
            var completeConsolationSolutions = [];
            if (solutions[consolation_stam].n >= 2) {
                completeConsolationSolutions.push(solutions[consolation_stam]);
            }
            completeConsolationSolutions = completeConsolationSolutions.concat(consolation[2]);
            $('#td'+expB).text(consolation_stam);
            $('#options'+expB).html(" <a href='#' onclick='pre_compute("+expB+",0); return false;'>full details <span class='fa fa-angle-double-right'></span></a>");
        }
        $('#quick_look_time').text("calculated "+moment().format("h:mm a"));
    }
    refreshQLU();
    $('#refresh_ql').on('click', refreshQLU);
    $('#refresh_ql').tooltip();
});
