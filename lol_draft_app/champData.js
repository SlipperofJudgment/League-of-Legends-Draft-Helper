const championData = [
  {
    "name": "Aatrox",
    "id": "Aatrox",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "The Darkin Blade"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Ahri",
    "id": "Ahri",
    "tags": ["Mage", "Assassin"],
    "lanes": ["Mid"],
    "compTags": ["Pick", "Poke"],
    "abilityTagMap": {"Poke": "Orb of Deception", "Pick": "Charm"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Akali",
    "id": "Akali",
    "tags": ["Assassin"],
    "lanes": ["Mid", "Top"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": "Perfect Execution"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Akshan",
    "id": "Akshan",
    "tags": ["Marksman", "Assassin"],
    "lanes": ["Mid"],
    "compTags": ["Poke", "Dive"],
    "abilityTagMap": {"Poke": "Comeuppance", "Dive": ["Going Rogue", "Heroic Swing"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Alistar",
    "id": "Alistar",
    "tags": ["Tank", "Support"],
    "lanes": ["Support"],
    "compTags": ["Dive", "Front-to-Back"],
    "abilityTagMap": {"Dive": ["Pulverize", "Headbutt"], "Front-to-Back": "Unbreakable Will"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Amumu",
    "id": "Amumu",
    "tags": ["Tank", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Dive": "Bandage Toss", "Wombo Combo": "Curse of the Sad Mummy"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Anivia",
    "id": "Anivia",
    "tags": ["Mage", "Support"],
    "lanes": ["Support", "Mid"],
    "compTags": ["Pick", "Disengage"],
    "abilityTagMap": {"Pick": "Flash Frost", "Disengage": "Crystallize"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Annie",
    "id": "Annie",
    "tags": ["Mage"],
    "lanes": ["Support", "Mid"],
    "compTags": ["Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Tibbers"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Aphelios",
    "id": "Aphelios",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "Moonlight Vigil"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Ashe",
    "id": "Ashe",
    "tags": ["Marksman", "Support"],
    "lanes": ["Support", "ADC"],
    "compTags": ["Pick", "Front-to-Back"],
    "abilityTagMap": {"Pick": "Enchanted Crystal Arrow", "Front-to-Back": "Ranger's Focus"},
    "gamePhases": [],
    "hasGlobalUlt": true
  },
  {
    "name": "Aurelion Sol",
    "id": "AurelionSol",
    "tags": ["Mage"],
    "lanes": ["Mid"],
    "compTags": ["Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Breath of Light", "Wombo Combo": "Falling Star"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Azir",
    "id": "Azir",
    "tags": ["Mage", "Marksman"],
    "lanes": ["Mid", "Top"],
    "compTags": ["Poke", "Front-to-Back", "Dive", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Conquering Sands", "Wombo Combo": "Emperor's Divide", "Front-to-Back": "Arise!", "Dive": "Shifting Sands"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Bard",
    "id": "Bard",
    "tags": ["Support", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Pick", "Wombo Combo"],
    "abilityTagMap": {"Pick": ["Cosmic Binding", "Tempered Fate"], "Wombo Combo": "Tempered Fate"},
    "gamePhases": [],
    "hasGlobalUlt": true
  },
  {
    "name": "Bel'Veth",
    "id": "Belveth",
    "tags": ["Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": "Void Surge"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Blitzcrank",
    "id": "Blitzcrank",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Support"],
    "compTags": ["Front-to-Back", "Pick"],
    "abilityTagMap": {"Front-to-Back": "Power Fist", "Pick": "Rocket Grab"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Brand",
    "id": "Brand",
    "tags": ["Mage"],
    "lanes": ["Mid", "Jungle"],
    "compTags": ["Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": ["Blaze","Sear","Pillar of Flame","Conflagration"], "Wombo Combo": "Pyroclasm"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Braum",
    "id": "Braum",
    "tags": ["Support", "Tank"],
    "lanes": ["Support"],
    "compTags": ["Front-to-Back", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Glacial Fissure", "Front-to-Back": "Stand Behind Me"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Briar",
    "id": "Briar",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Jungle"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": ["Head Rush","Certain Death"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Caitlyn",
    "id": "Caitlyn",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Poke", "Front-to-Back", "Pick"],
    "abilityTagMap": {"Poke": ["Piltover Peacemaker","Ace in the Hole"], "Front-to-Back": "AA Range", "Pick": "Ace in the Hole"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Camille",
    "id": "Camille",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Dive": "The Hextech Ultimatum", "Split Push": "Hookshot"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Cassiopeia",
    "id": "Cassiopeia",
    "tags": ["Mage"],
    "lanes": ["Mid"],
    "compTags": ["Front-to-Back", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Twin Fang", "Wombo Combo": "Petrifying Gaze"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Cho'Gath",
    "id": "Chogath",
    "tags": ["Tank", "Mage"],
    "lanes": ["Top"],
    "compTags": ["Front-to-Back", "Pick"],
    "abilityTagMap": {"Front-to-Back": ["Rupture","Feral Scream", "Feast"], "Pick": "Rupture"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Corki",
    "id": "Corki",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Poke"],
    "abilityTagMap": {"Poke": ["Missile Barrage"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Darius",
    "id": "Darius",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Split Push"],
    "abilityTagMap": {"Split Push": "Hemorrhage"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Diana",
    "id": "Diana",
    "tags": ["Fighter", "Mage"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Moonfall", "Dive": "Lunar Rush"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Draven",
    "id": "Draven",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": ["Spinning Axe","Blood Rush"]},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Dr. Mundo",
    "id": "DrMundo",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": ["Maximum Dosage","Heart Zapper"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Ekko",
    "id": "Ekko",
    "tags": ["Assassin", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": ["Phase Dive","Chronobreak"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Elise",
    "id": "Elise",
    "tags": ["Mage", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Poke", "Pick"],
    "abilityTagMap": {"Poke": "Volatile Spiderling", "Pick": "Cocoon"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Evelynn",
    "id": "Evelynn",
    "tags": ["Assassin", "Mage"],
    "lanes": ["Mid"],
    "compTags": ["Pick", "Dive"],
    "abilityTagMap": {"Pick": "Allure", "Dive": ["Whiplash","Last Caress"]},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Ezreal",
    "id": "Ezreal",
    "tags": ["Marksman", "Mage"],
    "lanes": ["ADC"],
    "compTags": ["Poke"],
    "abilityTagMap": {"Poke": ["Mystic Shot","Trueshot Barrage", "Essence Flux"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Fiddlesticks",
    "id": "Fiddlesticks",
    "tags": ["Mage", "Support"],
    "lanes": ["Jungle", "Top"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Dive": "Crowstorm", "Wombo Combo": "Crowstorm"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Fiora",
    "id": "Fiora",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Top"],
    "compTags": ["Split Push"],
    "abilityTagMap": {"Split Push": ["Grand Challenge","Duelist's Dance"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Fizz",
    "id": "Fizz",
    "tags": ["Assassin", "Fighter"],
    "lanes": ["Mid"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": ["Urchin Strike", "Playful / Trickster", "Chum the Waters"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Galio",
    "id": "Galio",
    "tags": ["Tank", "Mage"],
    "lanes": ["Mid", "Support"],
    "compTags": ["Front-to-Back", "Wombo Combo","Dive"],
    "abilityTagMap": {"Wombo Combo": "Hero's Entrance", "Front-to-Back": ["Shield of Durand","Justice Punch"], "Dive": "Hero's Entrance"},
    "gamePhases": [],
    "hasGlobalUlt": true
  },
  {
    "name": "Gangplank",
    "id": "Gangplank",
    "tags": ["Fighter"],
    "lanes": ["Top"],
    "compTags": ["Split Push","Poke"],
    "abilityTagMap": {"Split Push": "Cannon Barrage","Poke": "Powder Keg"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Garen",
    "id": "Garen",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "Demacian Justice"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Gnar",
    "id": "Gnar",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Front-to-Back", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": ["GNAR!","Wallop"], "Front-to-Back": "Hyper", "Split Push": "Hop"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Gragas",
    "id": "Gragas",
    "tags": ["Fighter", "Mage"],
    "lanes": ["Top", "Jungle"],
    "compTags": ["Split Push", "Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Barrel Roll", "Wombo Combo": "Explosive Cask", "Split Push": "Body Slam"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Graves",
    "id": "Graves",
    "tags": ["Marksman"],
    "lanes": ["Jungle", "Top"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "New Destiny"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Gwen",
    "id": "Gwen",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Dive": ["Skip 'n Slash","Hallowed Mist"], "Split Push": "Skip 'n Slash"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Hecarim",
    "id": "Hecarim",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Onslaught of Shadows", "Dive": ["Onslaught of Shadows","Devastating Charge"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Heimerdinger",
    "id": "Heimerdinger",
    "tags": ["Mage", "Support"],
    "lanes": ["Support", "Top"],
    "compTags": ["Pick", "Poke"],
    "abilityTagMap": {"Poke": "H-28 G Evolution Turret", "Pick": "CH-2 Electron Storm Grenade"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Hwei",
    "id": "Hwei",
    "tags": ["Mage"],
    "lanes": ["Mid"],
    "compTags": ["Poke"],
    "abilityTagMap": {"Poke": "Subject: Disaster"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Illaoi",
    "id": "Illaoi",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "Test of Spirit", "Split Push": "Prophet of an Elder God"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Irelia",
    "id": "Irelia",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Dive": "Bladesurge", "Split Push": "Bladesurge"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Ivern",
    "id": "Ivern",
    "tags": ["Support", "Mage"],
    "lanes": ["Jungle"],
    "compTags": ["Pick", "Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "Triggerseed", "Pick": "Rootcaller"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Janna",
    "id": "Janna",
    "tags": ["Support", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": ["Howling Gale","Eye of the Storm","Monsoon"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Jarvan IV",
    "id": "JarvanIV",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Cataclysm", "Dive": ["Demacian Standard + Dragon Strike","Cataclysm"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Jax",
    "id": "Jax",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Top", "Jungle"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Dive": "Leap Strike", "Split Push": "Leap Strike"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Jayce",
    "id": "Jayce",
    "tags": ["Fighter", "Marksman"],
    "lanes": ["Top", "Mid"],
    "compTags": ["Poke"],
    "abilityTagMap": {"Poke": "Shock Blast"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Jhin",
    "id": "Jhin",
    "tags": ["Marksman", "Mage"],
    "lanes": ["ADC"],
    "compTags": ["Poke"],
    "abilityTagMap": {"Poke": ["Curtain Call","Deadly Flourish"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Jinx",
    "id": "Jinx",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "Switcheroo!"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Kai'Sa",
    "id": "Kaisa",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Poke", "Front-to-Back","Dive"],
    "abilityTagMap": {"Poke": "Void Seeker", "Front-to-Back": ["Icathian Rain","Supercharge"], "Dive": "Killer Instinct"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Kalista",
    "id": "Kalista",
    "tags": ["Marksman"],
    "lanes": ["ADC", "Top"],
    "compTags": ["Poke", "Front-to-Back", "Dive"],
    "abilityTagMap": {"Poke": "Pierce", "Front-to-Back": "Rend", "Dive": "Fate's Call"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Karma",
    "id": "Karma",
    "tags": ["Mage", "Support"],
    "lanes": ["Support"],
    "compTags": ["Poke","Front-to-Back"],
    "abilityTagMap": {"Poke": "Inner Flame/Soulflare", "Front-to-Back": "Inspire/Defiance"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Karthus",
    "id": "Karthus",
    "tags": ["Mage"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Death Defied", "Wombo Combo": "Requiem"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": true
  },
  {
    "name": "Kassadin",
    "id": "Kassadin",
    "tags": ["Assassin", "Mage"],
    "lanes": ["Mid"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Dive": "Riftwalk", "Split Push": "Riftwalk"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Katarina",
    "id": "Katarina",
    "tags": ["Assassin", "Mage"],
    "lanes": ["Mid"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Death Lotus", "Dive": "Shunpo"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Kayle",
    "id": "Kayle",
    "tags": ["Fighter", "Support"],
    "lanes": ["Top"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": ["Divine Ascent","Divine Judgment"]},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Kayn",
    "id": "Kayn",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Jungle", "Top"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Pick": "Reaping Slash", "Split Push": "Shadow Step"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Kennen",
    "id": "Kennen",
    "tags": ["Mage", "Marksman"],
    "lanes": ["Top"],
    "compTags": ["Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Slicing Maelstrom"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Kha'Zix",
    "id": "Khazix",
    "tags": ["Assassin"],
    "lanes": ["Jungle"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Pick": ["Taste Their Fear","Leap"]},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Kindred",
    "id": "Kindred",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "Lamb's Respite"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Kled",
    "id": "Kled",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Dive": ["Chaaaaaaaarge!!!","Jousting"] , "Split Push": ["Jousting","Violent Tendencies"]},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Kog'Maw",
    "id": "KogMaw",
    "tags": ["Marksman", "Mage"],
    "lanes": ["ADC"],
    "compTags": ["Poke", "Front-to-Back"],
    "abilityTagMap": {"Poke": "Living Artillery", "Front-to-Back": "Bio-Arcane Barrage"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "K'Sante",
    "id": "KSante",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "Path Maker", "Split Push": "All-Out"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "LeBlanc",
    "id": "Leblanc",
    "tags": ["Assassin", "Mage"],
    "lanes": ["Mid"],
    "compTags": ["Poke", "Dive"],
    "abilityTagMap": {"Poke": "Sigil of Malice", "Dive": "Distortion"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Lee Sin",
    "id": "LeeSin",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Jungle", "Top"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": "Sonic Wave / Resonating Strike"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Leona",
    "id": "Leona",
    "tags": ["Tank", "Support"],
    "lanes": ["Support"],
    "compTags": ["Pick", "Front-to-Back","Dive"],
    "abilityTagMap": {"Pick": "Solar Flare", "Front-to-Back": ["Eclipse","Shield of Daybreak"], "Dive":"Zenith Blade"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Lillia",
    "id": "Lillia",
    "tags": ["Fighter", "Mage"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Dive": "Dream-Laden Bough", "Wombo Combo": "Lilting Lullaby"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Lissandra",
    "id": "Lissandra",
    "tags": ["Mage"],
    "lanes": ["Mid"],
    "compTags": ["Dive", "Pick"],
    "abilityTagMap": {"Dive": ["Glacial Path","Frozen Tomb"], "Pick": "Frozen Tomb"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Lucian",
    "id": "Lucian",
    "tags": ["Marksman"],
    "lanes": ["ADC", "Top"],
    "compTags": ["Poke", "Front-to-Back"],
    "abilityTagMap": {"Poke": "The Culling", "Front-to-Back": ["Lightslinger","Relentless Pursuit"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Lulu",
    "id": "Lulu",
    "tags": ["Support", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Front-to-Back","Pick"],
    "abilityTagMap": {"Pick": "Polymorph", "Front-to-Back": ["Wild Growth","Help, Pix!"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Lux",
    "id": "Lux",
    "tags": ["Mage", "Support"],
    "lanes": ["Support"],
    "compTags": ["Pick", "Poke", "Wombo Combo"],
    "abilityTagMap": {"Pick": "Light Binding", "Poke": "Lucent Singularity", "Wombo Combo": "Final Spark"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Malphite",
    "id": "Malphite",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Top"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Unstoppable Force", "Dive": "Unstoppable Force"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Malzahar",
    "id": "Malzahar",
    "tags": ["Mage", "Assassin"],
    "lanes": ["Mid"],
    "compTags": ["Pick", "Split Push"],
    "abilityTagMap": {"Pick": "Nether Grasp", "Split Push": "Malefic Visions"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Maokai",
    "id": "Maokai",
    "tags": ["Tank", "Mage"],
    "lanes": ["Jungle"],
    "compTags": ["Poke", "Front-to-Back", "Wombo Combo","Dive"],
    "abilityTagMap": {"Poke": "Sapling Toss", "Wombo Combo": "Nature's Grasp", "Dive": "Twisted Advance", "Front-to-Back": "Bramble Smash"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Master Yi",
    "id": "MasterYi",
    "tags": ["Assassin", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Dive": "Alpha Strike", "Split Push": ["Alpha Strike","Wuju Style"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Milio",
    "id": "Milio",
    "tags": ["Support"],
    "lanes": ["Support"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": ["Ultra Mega Fire Kick","Cozy Campfire","Warm Hugs","Breath of Life"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Miss Fortune",
    "id": "MissFortune",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Bullet Time", "Wombo Combo": "Bullet Time"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Wukong",
    "id": "MonkeyKing",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top", "Jungle"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Cyclone", "Dive": "Nimbus Strike"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Mordekaiser",
    "id": "Mordekaiser",
    "tags": ["Fighter"],
    "lanes": ["Top"],
    "compTags": ["Split Push"],
    "abilityTagMap": {"Split Push": "Realm of Death"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Morgana",
    "id": "Morgana",
    "tags": ["Mage", "Support"],
    "lanes": ["Support"],
    "compTags": ["Pick", "Front-to-Back"],
    "abilityTagMap": {"Pick": "Dark Binding", "Front-to-Back": "Black Shield"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Naafiri",
    "id": "Naafiri",
    "tags": ["Assassin"],
    "lanes": ["Jungle"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": ["Eviscerate", "Hounds' Pursuit"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Nami",
    "id": "Nami",
    "tags": ["Support", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Front-to-Back", "Wombo Combo"],
    "abilityTagMap": {"Front-to-Back": ["Ebb and Flow","Tidecaller's Blessing"], "Wombo Combo": "Tidal Wave"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Nasus",
    "id": "Nasus",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": ["Wither","Siphoning Strike"], "Split Push": "Siphoning Strike"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Nautilus",
    "id": "Nautilus",
    "tags": ["Tank", "Support"],
    "lanes": ["Support", "Jungle"],
    "compTags": ["Pick", "Front-to-Back"],
    "abilityTagMap": {"Pick": ["Dredge Line", "Depth Charge"], "Front-to-Back": "Staggering Blow"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Neeko",
    "id": "Neeko",
    "tags": ["Mage", "Support"],
    "lanes": ["Support"],
    "compTags": ["Pick", "Dive", "Wombo Combo"],
    "abilityTagMap": {"Pick": "Tangle-Barbs", "Dive": "Shapesplitter", "Wombo Combo": "Pop Blossom"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Nidalee",
    "id": "Nidalee",
    "tags": ["Assassin", "Mage"],
    "lanes": ["Jungle", "Top"],
    "compTags": ["Split Push", "Poke"],
    "abilityTagMap": {"Poke": "Javelin Toss", "Split Push": ["Primal Surge","Pounce"]},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Nilah",
    "id": "Nilah",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["ADC"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Dive": "Slipstream", "Wombo Combo": "Apotheosis"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Nocturne",
    "id": "Nocturne",
    "tags": ["Assassin", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Dive": "Paranoia", "Wombo Combo": "Paranoia"},
    "gamePhases": [],
    "hasGlobalUlt": true
  },
  {
    "name": "Nunu & Willump",
    "id": "Nunu",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Split Push", "Dive", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Absolute Zero", "Dive": "Biggest Snowball Ever!", "Split Push": "Consume"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Olaf",
    "id": "Olaf",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Split Push","Dive"],
    "abilityTagMap": {"Dive": "Ragnarok", "Split Push": "Undertow"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Orianna",
    "id": "Orianna",
    "tags": ["Mage", "Support"],
    "lanes": ["Mid"],
    "compTags": ["Pick", "Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Command: Attack", "Pick": "Command: Shockwave", "Wombo Combo": "Command: Shockwave"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Ornn",
    "id": "Ornn",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Top"],
    "compTags": ["Front-to-Back", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Call of the Forge God", "Front-to-Back": ["Searing Charge","Living Forge"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Pantheon",
    "id": "Pantheon",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Jungle"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Dive": "Shield Vault", "Split Push": "Grand Starfall"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": true
  },
  {
    "name": "Poppy",
    "id": "Poppy",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Front-to-Back", "Dive"],
    "abilityTagMap": {"Dive": "Heroic Charge", "Front-to-Back": ["Keeper's Verdict","Steadfast Presence"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Pyke",
    "id": "Pyke",
    "tags": ["Support", "Assassin"],
    "lanes": ["Support"],
    "compTags": ["Split Push", "Pick", "Dive"],
    "abilityTagMap": {"Pick": "Bone Skewer", "Split Push": "Ghostwater Dive", "Dive": "Phantom Undertow"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Qiyana",
    "id": "Qiyana",
    "tags": ["Assassin", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Wombo Combo", "Dive"],
    "abilityTagMap": {"Wombo Combo": "Supreme Display of Talent", "Dive": "Audacity"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Quinn",
    "id": "Quinn",
    "tags": ["Marksman", "Assassin"],
    "lanes": ["ADC"],
    "compTags": ["Split Push","Dive","Front-to-Back"],
    "abilityTagMap": {"Dive": "Vault", "Split Push": "Behind Enemy Lines", "Front-to-Back": "Harrier"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Rakan",
    "id": "Rakan",
    "tags": ["Support"],
    "lanes": ["Support"],
    "compTags": ["Dive","Wombo Combo","Front-to-Back"],
    "abilityTagMap": {"Dive": "Grand Entrance","Wombo Combo": "The Quickness", "Front-to-Back": ["Gleaming Quill","Battle Dance"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Rammus",
    "id": "Rammus",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Front-to-Back"],
    "abilityTagMap": {"Dive": ["Soaring Slam","Frenzying Taunt"], "Front-to-Back": ["Defensive Ball Curl","Frenzying Taunt"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Rek'Sai",
    "id": "RekSai",
    "tags": ["Fighter"],
    "lanes": ["Top", "Jungle"],
    "compTags": ["Split Push","Dive"],
    "abilityTagMap": {"Split Push": "Tunnel","Dive": ["Void Rush","Tunnel"]},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Rell",
    "id": "Rell",
    "tags": ["Tank", "Support"],
    "lanes": ["Support"],
    "compTags": ["Dive", "Front-to-Back", "Wombo Combo"],
    "abilityTagMap": {"Front-to-Back": "Shattering Strike", "Wombo Combo": "Magnet Storm", "Dive": "Ferromancy: Crash Down"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Renata Glasc",
    "id": "Renata",
    "tags": ["Support", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Pick", "Wombo Combo"],
    "abilityTagMap": {"Pick": "Handshake", "Wombo Combo": "Hostile Takeover"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Renekton",
    "id": "Renekton",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Dive": "Slice and Dice", "Split Push": "Slice and Dice"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Rengar",
    "id": "Rengar",
    "tags": ["Assassin", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": "Thrill of the Hunt"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Riven",
    "id": "Riven",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Top"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": ["Broken Wings","Valor"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Rumble",
    "id": "Rumble",
    "tags": ["Fighter", "Mage"],
    "lanes": ["Top"],
    "compTags": ["Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Electro Harpoon", "Wombo Combo": "The Equalizer"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Ryze",
    "id": "Ryze",
    "tags": ["Mage", "Fighter"],
    "lanes": ["Mid"],
    "compTags": ["Split Push"],
    "abilityTagMap": {"Split Push": ["Spell Flux + Overload","Realm Warp"]},
    "gamePhases": [],
    "hasGlobalUlt": true
  },
  {
    "name": "Samira",
    "id": "Samira",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Wombo Combo", "Dive"],
    "abilityTagMap": {"Dive": "Wild Rush", "Wombo Combo": "Inferno Trigger"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Sejuani",
    "id": "Sejuani",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Front-to-Back", "Pick"],
    "abilityTagMap": {"Pick": "Glacial Prison", "Front-to-Back": "Arctic Assault"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Senna",
    "id": "Senna",
    "tags": ["Marksman", "Support"],
    "lanes": ["Support", "ADC"],
    "compTags": ["Poke", "Front-to-Back", "Pick"],
    "abilityTagMap": {"Poke": "Piercing Darkness", "Pick": "Last Embrace", "Front-to-Back": "Absolution"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Seraphine",
    "id": "Seraphine",
    "tags": ["Mage", "Support"],
    "lanes": ["Support", "ADC"],
    "compTags": ["Pick", "Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": ["Surround Sound","High Note"], "Pick": "Beat Drop", "Wombo Combo": "Encore"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Sett",
    "id": "Sett",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Dive", "Front-to-Back", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "The Show Stopper", "Front-to-Back": "Haymaker", "Dive": "The Show Stopper"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Shaco",
    "id": "Shaco",
    "tags": ["Assassin"],
    "lanes": ["Jungle"],
    "compTags": ["Dive"],
    "abilityTagMap": {"Dive": "Deceive"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Shen",
    "id": "Shen",
    "tags": ["Tank"],
    "lanes": ["Top"],
    "compTags": ["Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": ["Spirit's Refuge","Stand United"]},
    "gamePhases": [],
    "hasGlobalUlt": true
  },
  {
    "name": "Shyvana",
    "id": "Shyvana",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Jungle"],
    "compTags": ["Poke","Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Dragon's Descent", "Poke": "Flame Breath"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Singed",
    "id": "Singed",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Front-to-Back","Dive"],
    "abilityTagMap": {"Dive": ["Noxious Slipstream","Poison Trail"], "Front-to-Back": ["Mega Adhesive","Fling"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Sion",
    "id": "Sion",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Top"],
    "compTags": ["Split Push", "Front-to-Back"],
    "abilityTagMap": {"Front-to-Back": "Soul Furnace", "Split Push": "Decimating Smash"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Sivir",
    "id": "Sivir",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Poke", "Front-to-Back"],
    "abilityTagMap": {"Poke": "Boomerang Blade", "Front-to-Back": "Ricochet"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Skarner",
    "id": "Skarner",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Jungle"],
    "compTags": ["Front-to-Back", "Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Impale", "Front-to-Back": "Seismic Bastion"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Smolder",
    "id": "Smolder",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Poke", "Front-to-Back"],
    "abilityTagMap": {"Poke": "Achooo!", "Front-to-Back": "Super Scorcher Breath!"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Sona",
    "id": "Sona",
    "tags": ["Support", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Pick", "Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": ["Hymn of Valor","Aria of Perseverance"], "Pick": "Crescendo", "Wombo Combo": "Crescendo"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Soraka",
    "id": "Soraka",
    "tags": ["Support", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Poke"],
    "abilityTagMap": {"Poke": ["Wish","Astral Infusion"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Swain",
    "id": "Swain",
    "tags": ["Mage", "Fighter"],
    "lanes": ["Mid"],
    "compTags": ["Wombo Combo", "Pick"],
    "abilityTagMap": {"Pick": "Nevermove", "Wombo Combo": "Demonic Ascension"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Sylas",
    "id": "Sylas",
    "tags": ["Mage", "Assassin"],
    "lanes": ["Mid"],
    "compTags": ["Dive","Wombo Combo"],
    "abilityTagMap": {"Dive": ["Abscond / Abduct","Kingslayer"], "Wombo Combo": "Hijack"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Syndra",
    "id": "Syndra",
    "tags": ["Mage"],
    "lanes": ["Mid"],
    "compTags": ["Poke", "Pick"],
    "abilityTagMap": {"Poke": "Dark Sphere", "Pick": ["Scatter the Weak","Unleashed Power"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Tahm Kench",
    "id": "TahmKench",
    "tags": ["Support", "Tank"],
    "lanes": ["Support"],
    "compTags": ["Dive", "Front-to-Back"],
    "abilityTagMap": {"Dive": "Abyssal Dive", "Front-to-Back": ["Thick Skin","Devour"]},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Taliyah",
    "id": "Taliyah",
    "tags": ["Mage", "Support"],
    "lanes": ["Mid"],
    "compTags": ["Pick", "Poke", "Split Push"],
    "abilityTagMap": {"Poke": "Threaded Volley", "Pick": "Unraveled Earth", "Split Push": "Weaver's Wall"},
    "gamePhases": [],
    "hasGlobalUlt": true
  },
  {
    "name": "Talon",
    "id": "Talon",
    "tags": ["Assassin"],
    "lanes": ["Jungle"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Pick": "Noxian Diplomacy", "Split Push": "Assassin's Path"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Taric",
    "id": "Taric",
    "tags": ["Support", "Fighter"],
    "lanes": ["Support"],
    "compTags": ["Front-to-Back", "Dive"],
    "abilityTagMap": {"Front-to-Back": "Starlight's Touch", "Dive": "Bastion"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Teemo",
    "id": "Teemo",
    "tags": ["Marksman", "Assassin"],
    "lanes": ["Top"],
    "compTags": ["Split Push"],
    "abilityTagMap": {"Split Push": "Noxious Trap"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Thresh",
    "id": "Thresh",
    "tags": ["Support", "Fighter"],
    "lanes": ["Support"],
    "compTags": ["Pick", "Dive"],
    "abilityTagMap": {"Pick": "Death Sentence", "Dive": "Dark Passage"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Tristana",
    "id": "Tristana",
    "tags": ["Marksman", "Assassin"],
    "lanes": ["ADC"],
    "compTags": ["Front-to-Back", "Dive"],
    "abilityTagMap": {"Front-to-Back": "Rapid Fire", "Dive": "Rocket Jump"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Trundle",
    "id": "Trundle",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top", "Jungle"],
    "compTags": ["Split Push", "Front-to-Back"],
    "abilityTagMap": {"Split Push": "Pillar of Ice", "Front-to-Back": "Subjugate"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Tryndamere",
    "id": "Tryndamere",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Top", "Mid"],
    "compTags": ["Split Push", "Dive"],
    "abilityTagMap": {"Split Push": "Endless Rage", "Dive": "Spinning Slash"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Twisted Fate",
    "id": "TwistedFate",
    "tags": ["Mage"],
    "lanes": ["Mid", "Top"],
    "compTags": ["Pick", "Split Push"],
    "abilityTagMap": {"Pick": "Destiny", "Split Push": "Destiny"},
    "gamePhases": [],
    "hasGlobalUlt": true
  },
  {
    "name": "Twitch",
    "id": "Twitch",
    "tags": ["Marksman", "Assassin"],
    "lanes": ["ADC"],
    "compTags": ["Front-to-Back", "Pick"],
    "abilityTagMap": {"Front-to-Back": "Spray and Pray", "Pick": "Ambush"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Udyr",
    "id": "Udyr",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top", "Jungle"],
    "compTags": ["Front-to-Back", "Split Push"],
    "abilityTagMap": {"Front-to-Back": "Ram Stance", "Split Push": "Bear Stance"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Urgot",
    "id": "Urgot",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Front-to-Back", "Poke"],
    "abilityTagMap": {"Front-to-Back": "Fear Beyond Death", "Poke": "Corrosive Charge"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Varus",
    "id": "Varus",
    "tags": ["Marksman", "Mage"],
    "lanes": ["ADC"],
    "compTags": ["Poke", "Pick"],
    "abilityTagMap": {"Poke": "Piercing Arrow", "Pick": "Chain of Corruption"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Vayne",
    "id": "Vayne",
    "tags": ["Marksman", "Assassin"],
    "lanes": ["ADC", "Top"],
    "compTags": ["Front-to-Back", "Split Push"],
    "abilityTagMap": {"Front-to-Back": "Final Hour", "Split Push": "Tumble"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Veigar",
    "id": "Veigar",
    "tags": ["Mage"],
    "lanes": ["Mid"],
    "compTags": ["Pick", "Wombo Combo"],
    "abilityTagMap": {"Pick": "Primordial Burst", "Wombo Combo": "Event Horizon"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Vel'Koz",
    "id": "Velkoz",
    "tags": ["Mage"],
    "lanes": ["Mid"],
    "compTags": ["Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Plasma Fission", "Wombo Combo": "Life Form Disintegration Ray"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Vex",
    "id": "Vex",
    "tags": ["Mage"],
    "lanes": ["Mid"],
    "compTags": ["Pick", "Dive"],
    "abilityTagMap": {"Pick": "Shadow Surge", "Dive": "Shadow Surge"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Vi",
    "id": "Vi",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Top", "Jungle"],
    "compTags": ["Dive", "Pick"],
    "abilityTagMap": {"Dive": "Cease and Desist", "Pick": "Vault Breaker"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Viego",
    "id": "Viego",
    "tags": ["Assassin", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Split Push"],
    "abilityTagMap": {"Dive": "Heartbreaker", "Split Push": "Sovereign's Domination"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Viktor",
    "id": "Viktor",
    "tags": ["Mage"],
    "lanes": ["Mid"],
    "compTags": ["Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Death Ray", "Wombo Combo": "Chaos Storm"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Vladimir",
    "id": "Vladimir",
    "tags": ["Mage"],
    "lanes": ["Mid", "Top"],
    "compTags": ["Wombo Combo"],
    "abilityTagMap": {"Wombo Combo": "Hemoplague"},
    "gamePhases": ["Late Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Volibear",
    "id": "Volibear",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top", "Jungle"],
    "compTags": ["Dive", "Front-to-Back"],
    "abilityTagMap": {"Dive": "Stormbringer", "Front-to-Back": "Thunder Claws"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Warwick",
    "id": "Warwick",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top", "Jungle"],
    "compTags": ["Dive", "Pick"],
    "abilityTagMap": {"Dive": "Infinite Duress", "Pick": "Infinite Duress"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Xayah",
    "id": "Xayah",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Front-to-Back", "Wombo Combo"],
    "abilityTagMap": {"Front-to-Back": "Featherstorm", "Wombo Combo": "Bladecaller"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Xerath",
    "id": "Xerath",
    "tags": ["Mage"],
    "lanes": ["Mid", "Support"],
    "compTags": ["Poke", "Pick"],
    "abilityTagMap": {"Poke": "Arcanopulse", "Pick": "Rite of the Arcane"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Xin Zhao",
    "id": "XinZhao",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Pick"],
    "abilityTagMap": {"Dive": "Crescent Guard", "Pick": "Audacious Charge"},
    "gamePhases": ["Early Game"],
    "hasGlobalUlt": false
  },
  {
    "name": "Yasuo",
    "id": "Yasuo",
    "tags": ["Fighter", "Assassin"],
    "lanes": ["Mid", "Top"],
    "compTags": ["Wombo Combo", "Dive"],
    "abilityTagMap": {"Wombo Combo": "Last Breath", "Dive": "Sweeping Blade"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Yone",
    "id": "Yone",
    "tags": ["Assassin", "Fighter"],
    "lanes": ["Mid", "Top"],
    "compTags": ["Dive", "Pick"],
    "abilityTagMap": {"Dive": "Fate Sealed", "Pick": "Soul Unbound"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Yorick",
    "id": "Yorick",
    "tags": ["Fighter", "Tank"],
    "lanes": ["Top"],
    "compTags": ["Split Push"],
    "abilityTagMap": {"Split Push": "Eulogy of the Isles"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Yuumi",
    "id": "Yuumi",
    "tags": ["Support", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Poke"],
    "abilityTagMap": {"Poke": "Prowling Projectile"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Zac",
    "id": "Zac",
    "tags": ["Tank", "Fighter"],
    "lanes": ["Jungle"],
    "compTags": ["Dive", "Wombo Combo"],
    "abilityTagMap": {"Dive": "Let's Bounce!", "Wombo Combo": "Let's Bounce!"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Zed",
    "id": "Zed",
    "tags": ["Assassin"],
    "lanes": ["Jungle", "Mid"],
    "compTags": ["Pick", "Dive"],
    "abilityTagMap": {"Pick": "Death Mark", "Dive": "Living Shadow"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Zeri",
    "id": "Zeri",
    "tags": ["Marksman"],
    "lanes": ["ADC"],
    "compTags": ["Front-to-Back", "Dive"],
    "abilityTagMap": {"Front-to-Back": "Lightning Crash", "Dive": "Spark Surge"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Ziggs",
    "id": "Ziggs",
    "tags": ["Mage"],
    "lanes": ["Mid", "ADC"],
    "compTags": ["Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Bouncing Bomb", "Wombo Combo": "Mega Inferno Bomb"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Zilean",
    "id": "Zilean",
    "tags": ["Support", "Mage"],
    "lanes": ["Support"],
    "compTags": ["Pick", "Poke"],
    "abilityTagMap": {"Pick": "Time Bomb", "Poke": "Time Bomb"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Zoe",
    "id": "Zoe",
    "tags": ["Mage", "Support"],
    "lanes": ["Mid"],
    "compTags": ["Pick", "Poke"],
    "abilityTagMap": {"Pick": "Sleepy Trouble Bubble", "Poke": "Paddle Star"},
    "gamePhases": [],
    "hasGlobalUlt": false
  },
  {
    "name": "Zyra",
    "id": "Zyra",
    "tags": ["Mage", "Support"],
    "lanes": ["Support", "Jungle"],
    "compTags": ["Poke", "Wombo Combo"],
    "abilityTagMap": {"Poke": "Deadly Spines", "Wombo Combo": "Stranglethorns"},
    "gamePhases": [],
    "hasGlobalUlt": false
  }
];