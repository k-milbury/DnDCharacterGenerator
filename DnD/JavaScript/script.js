const classesArray = [
  'Barbarian',
  'Bard',
  'Cleric',
  'Druid',
  'Fighter',
  'Monk',
  'Paladin',
  'Ranger',
  'Rogue',
  'Sorcerer',
  'Warlock',
  'Wizard',
  'Blood Hunter',
  'Artificer'
];

const descriptorsArray = [
  'Shy',
  'Pretentious',
  'Ugly',
  'Anxious',
  'Paranoid',
  'Optimistic',
  'Kind-hearted',
  'Shady',
  'Nosy',
  'Good-looking',
  'Pleasant-scented',
  'Smelly',
  'Quirky',
  'Eccentric',
  'Loud',
  'Stoic',
  'Depressed',
  'Bitter',
  'Tormented',
  'Reckless',
  'Lazy',
  'Short',
  'Brave',
  'Chatty',
  'Introverted',
  'Psychopathic',
  'Poor',
  'Rich',
  'Greedy',
  'Short Tempered',
  'Self Centered',
  'Sensitive',
  'Stinky',
  'Controlling',
  'Pessimistic',
  'Ungrateful',
  'Irrational'
];

const racesArray = [
  'Aarakocra',
  'Aasimar',
  'Genasi',
  'Bugbear',
  'Centaur',
  'Changeling',
  'Gnome',
  'Dragonborn',
  'Duergar',
  'Dwarf',
  'Eladrin',
  'Elf',
  'Fairy',
  'Firbolg',
  'Githyanki',
  'Githzerai',
  'Goblin',
  'Goliath',
  'Half Elf',
  'Half Orc',
  'Halfling',
  'Hobgoblin',
  'Human',
  'Kenku',
  'Kobold',
  'Lizardfolk',
  'Minotaur',
  'Orc',
  'Satyr',
  'Shadar-Kai',
  'Shifter',
  'Tabaxi',
  'Tiefling',
  'Tortle',
  'Triton',
  'Yuan-Ti'
];

const characterTraitsArray = [
  "is tone-deaf (-6 performance)",
  "spent a weekend accidentally studying propaganda (-4 history)",
  "uncovered the secrets of the universe by spending years studying fortune cookie messages (+4 Insight)",
  "helped contain a plague outbreak (+3 medicine)",
  "was dropped as a child and suffered minor brain damage (-3 acrobatics)",
  "had to learn how to be quiet so that they could hunt for rodents in the poverty-stricken streets (+3 Stealth)",
  "wrote a book about animal tracks (+4 survival)",
  "is colorblind (-3 perception)",
  "took over their father's PI business (+4 investigation)",
  "trained as a priest just to avoid going to jail (+3 religion)",
  "used to work as a guard (+2 intimidation)",
  "was previously married to a librarian (+2 history)",
  "has no thumbs on either hand (-3 sleight of hand)",
  "got cursed by a spirit of the forest after killing an albino squirrel (-4 nature)",
  "has two left feet (-2 stealth)",
  "made their living cheating at cards (sleight of hand +3)",
  "is gullible because they used to have a manipulative girlfriend (-3 Insight)",
  "lost their left leg in a potato sack race incident (-4 acrobatics)",
  "is an atheist (-6 religion)",
  "doesn’t trust the local flora and fauna (-4 Nature)",
  "worked the wagon warranty extension stall at the market (+3 persuasion)",
  "pretends to read every book they find to seem smarter than they are (+2 deception)",
  "visited Wong Shi Tong's Library (+3 History)",
  "performed in a play that went famous through their homeland (+3 performance)",
  "has brittle bones (-4 athletics)",
  "has no friends and talks to every animal they see to make up for it (+2 animal handling)",
  "got enslaved by a circus (+3 Acrobatics)",
  "was abandoned in the forest by their parents (+3 Survival)",
  "grew up on a farm (+4 animal handling)",
  "lost their hearing in their left ear after getting kicked by a horse (-3 Perception)",
  "is slightly blind from staring at the sun too often (-3 Perception)",
  "doesn't believe magic is real (-5 Arcana)",
  "panics when they have to lie (-4 Deception)",
  "got bit by a spider and has felt different ever since (+3 Perception)",
  "is extremely manipulative (+3 Persuasion)",
  "trusts people way too much because they're desperate for friends. (-3 Insight)",
  "is a compulsive liar (+3 Deception)",
  "was the town's family doctor (+3 Medicine)",
  "is terrified of confrontation. (-4 Intimidation)"
];

const locationsArray = [
  "a hole behind a waterfall in an enchanted forest",
  "a city on the back of a massive sea turtle",
  "a wagon convoy of traveling bards",
  "the circus",
  "a mental institution for troubled youth run by the church",
  "the brothel on the corner by the market",
  "a haunted house in a nice village",
  "a decrepit shack in the swamps",
  "a cabin in the mountains overlooking the sea",
  "the city slums",
  "an upside-down cliffside city",
  "the Feywild",
  "a low-income orphanage in the city",
  "a deep, dark cave in the middle of nowhere",
  "Atlantis",
  "a town that floats on an iceberg in the sea",
  "a treehouse in a forest village",
  "The Misty Palms Oasis"
];


function getRandomIndex(array){
    // Check if the array is empty
    if (array.length === 0) {
        return null; // or handle as needed
    }

    // Get a random index
    const randomIndex = Math.floor(Math.random() * array.length);

    // Return the value at the random index
    return array[randomIndex];
}

function getDescriptor(){
    var descriptor = getRandomIndex(descriptorsArray);
    return descriptor;
}

function getRace(){
    var race = getRandomIndex(racesArray);
    return race;
}

function getClass(){
    var playerClass = getRandomIndex(classesArray);
    return playerClass;
}

function getLocation(){
    var location = getRandomIndex(locationsArray);
    return location;
}

function getTrait(){
    var trait = getRandomIndex(characterTraitsArray);
    return trait;
}

function formatTrait(trait) {
    if (trait.includes("+")) {
        return '<span class="positive">' + trait + '</span>';
    } else if (trait.includes("-")) {
        return '<span class="negative">' + trait + '</span>';
    } else {
        return trait;
    }
}

function generate(){
    var descriptor = getDescriptor();
    var charRace = getRace();
    var charClass = getClass();
    var location = getLocation();
    var trait1 = getTrait();
    var trait2 = getTrait();

    if (trait1 == trait2){
        trait2 = getTrait();
    }

    // Get the charPrompt div from HTML
    charPrompt = document.getElementById("charPrompt");

    // Clear charPrompt
    charPrompt.innerHTML = "";

    charPrompt.innerHTML += "<p>" + descriptor + " " + charRace + " " + charClass + " from " + location + ", who " + formatTrait(trait1) + " and " + formatTrait(trait2) + ".</p>";
}
