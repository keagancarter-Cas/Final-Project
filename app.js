//2. Using getElementsByClassName, select all the elements with the class of "center" and set them to a const variable called centered
const centered = document.getElementsByClassName("center");

//3. Using querySelector, select the first div with the info for Batman: The Animated Series inside of it and set it to a const variable called batman.
const jojoIds = ["johnathan", "joseph", "jotaro", "josuke", "Giorno", "jolyne", "johnny", "Gappy", "Jodio"];

// Create descriptions for each Joestar
const jojoDescriptions = {
  johnathan: {
    Name: "Jonathan Joestar",
    Personality: "Honorable, selfless, and couragous, with a strong sense of justice",
    Age: "20",
    FightingStyle: "Hamon Technique; Ripple",
    FightingStyleInfo: "Martial arts technique, Controls the power of the sun and life force to deliver devastating blows to enemies",
    Introduced: "Part 1; Phantom Blood"
  },

  joseph: {
    Name: "Joseph Joestar", 
    Personality: "Cunning, resourceful, and intellectual, and cocky, as well as strategic",
    Age: "18-91",
    FightingStyle: "Hamon Technique; Ripple",
    FightingStyleInfo: "Controls the power of the sun and life force to deliver devastating blows to enemies, later evolving into Hermit Purple",
    Stand: "Hermit Purple",
    StandType: "Close Range",
    StandAppearance: "thorn covered vines",
    StandAbilities: "unique ability called 'Divination', which lets it cast images onto a screen or draw a map. it can also channel Ripple, which is his hamon technique. Has the flexibility to be used as a grapple or sling, and used as a whip for offense",
    Introduced: "Part 2; Battle Tendancy",
    Appearances: "Appears in parts 2-4, having a huge role during parts 2, 3, and 4"
  },

  jotaro: {
    Name:"Jotaro Kujo", 
    Personality: "Stoic, serious, and composed, as well as strong-willed",
    Age: "17-40",
    Stand: "Star Platinum",
    Evolution: "Over Heaven",
    StandType: "Close Range",
    StandAppearance: "Appearance; Humanoid stand which is manifested upon being called upon, it has a muscular build similar to Jotaro's. Its skin is a variety between purple, blue, green, and gold",
    StandAbilities: "Has the unique ability to timestop for a few seconds, with everything that has been interacted with during the timestop being affected after time resumes. It is symbolic for its strength, and has immense power.",
    Introduced: "Part 3; Stardust Crusaders",
    Appearances: "Appears in parts 3-6, having a huge role during parts 3, 4, and 5"
  },

  josuke: {
    Name: "Josuke Higashikata", 
    Personality: "compassionate, kind hearted, and social",
    Age: "16",
    Stand: "Crazy Diamond",
    StandType: "Close Range",
    StandAppearance: "Armored appearance, with a corinthian helmet. It has cables attached to the back of its head and upper back. A heart motif can be seen between the top of its head, chin, shoulder, celiac plexus, belt and also knees. Its color scheme is also blue, pink, and sometimes green",
    StandAbilities: "Has the ability to heal any wounds that have been inflicted onto a person, only capable of healing if the person hasn't been killed. Everytime the person is healed however, the pain inflicted is reinflicted but still healed to the original form. Similar to Star Platinum, it is another strong and humanoid-like stand.",
    Introduced: "Part 4; Diamond Is Unbreakable"
  },

  Giorno: {
    Name: "Giorno Giovanna", 
    Personality: "calm, intelligent, morally driven, strong-witted", 
    Age: "15-16",
    Stand: "Gold Experience",
    Evolution:"Requiem",
    StandType: "Close Range",
    StandAppearance: "Humanoid, slender and of average height(resembling Giorno's physical build.), Top of its head is resemblant to that of a soldier wearing a helmet but with a ladybug-like pattern. Stylized wings are shown all over the body of the stand, and is based upon the scarab beetle. Its color scheme is resemblant of that which is yellow, white, and orange",
    StandAbilities: "Able to manipulate the idea of life, seemingly producing endless amounts of life energy. It can revive those who are unalive as long as it has its soul still intact. He is unable to control the object however(majorly) when the object is attacked also, all damage inflicted is redirected back to the person who was the attacker. His stand focuses on the idea of reanimation for a short time.",
    Introduced: "Part 5; Golden Wind"
  },

  jolyne: {
    Name:"Jolyne Cujoh", 
    Personality: "brave, determined, fiercly independent, adaptable",
    Age: "19", 
    Stand: "Stone Free", 
    StandType: "Close Range",
    StandAppearance: "Humanoid stand, similar to that of its user. While being made up of string, has a pair of sunglasses, blade like protrusions from the top of its jaw to the back of its neck and bordering the sides of each eye. It has shoulder, and knee pads.",
    StandAbilities: "Has integrated abilities that the user can manifest to their own will, like turning their body into string, or also using the stand as it is and manifesting it to fight close ranged.",
    Introduced: "Part 6; Stone Ocean"
  },

  johnny: {
    Name:"Johnny Joestar",
    Personality: "paralyzed, insecure, relies on others, grows into being resillient, intellegent, and determined",
    Age: "19",
    Stand: "Tusk",
    Evolution: "Acts: 1-4",
    StandType: "Close Range/Long Range",
    StandAppearance: "",
    StandAbilities: "",
    Introduced: "Part 7; Steel Ball Run"
  },

  Gappy: {
    Name: "Gappy",
    Personality: "Amnesiac, struggles with identity, compassionate and has a sense of ruthelessness, logically-driven",
    Age: "19",
    Stand: "Soft and Wet",
    Evolution: "Go Beyond!",
    StandType: "Close Range/Mid-Range",
    StandAppearance: "",
    StandAbilities: "",
    Introduced: "Part 8; Jojolion"
  },

  Jodio: { 
    Name: "Jodio Joestar", 
    Personality: "brash, impulsive, pragmatically ambitious, timid, and protective",
    Age: "15",
    Stand: "November Rain",
    StandType: "Close Range",
    StandAppearance: "His stand is a palm tree that controls rain, and within a 9 meter radius of coming in contact with the stand,",
    StandAbilities: "",
    Introduced: "Part 9; JOJOLands"
  }
};

const joestars = jojoIds.map(id => document.querySelector(`#${id}`));
console.log("JOE STARS", joestars)
const jojoList = document.getElementById("jojo-list");
if (jojoList) {
  jojoIds.forEach(name => {
    const li = document.createElement("p");
    li.textContent = name;
    li.style.cursor = "pointer";
    li.style.position = "sticky";
    
    // Add hover event to show custom tooltip
    li.addEventListener("mouseover", () => {
      // Remove any existing tooltip
      const existing = li.querySelector(".tooltip");
      if (existing) existing.remove();
      
      // Create tooltip element
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      const info = jojoDescriptions[name];
      const details = [];
      if (info.Age) details.push(info.Age);
      if (info.FightingStyle) details.push(info.FightingStyle);
      if (info.FightingStyleInfo) details.push(info.FightingStyleInfo);
      if (info.Stand) details.push(info.Stand);
      if (info.Evolution) details.push(info.Evolution);
      if (info.Personality) details.push(info.Personality);
      const detailText = details.length ? " — " + details.join(" - ") : "";
      const introducedText = info.Introduced ? " (" + info.Introduced + ")" : "";
      tooltip.textContent = info.Name + detailText + introducedText;
      tooltip.style.position = "absolute";
      tooltip.style.bottom = "100%";
      tooltip.style.left = "0";
      tooltip.style.backgroundColor = "#333";
      tooltip.style.color = "#fff";
      tooltip.style.padding = "8px 12px";
      tooltip.style.borderRadius = "4px";
      tooltip.style.whiteSpace = "nowrap";
      tooltip.style.fontSize = "12px";
      tooltip.style.zIndex = "1000";
      tooltip.style.marginBottom = "5px";
      
      li.appendChild(tooltip);
    });
    
    // Remove tooltip on mouse leave
    li.addEventListener("mouseleave", () => {
      const tooltip = li.querySelector(".tooltip");
      if (tooltip) tooltip.remove();
    });
    
    jojoList.appendChild(li);
  });
}
//search bar
const input = document.getElementById("user-input");
const joestarsCall = document.getElementById("joestar-call");

// Create a dropdown container for search suggestions
const dropdown = document.createElement("div");
dropdown.id = "search-dropdown";
dropdown.style.position = "center";
dropdown.style.backgroundColor = "#0f3460";
dropdown.style.border = "2px solid #e94560";
dropdown.style.borderRadius = "6px";
dropdown.style.maxHeight = "250px";
dropdown.style.overflowY = "auto";
dropdown.style.minWidth = "200px";
dropdown.style.display = "none";
dropdown.style.marginTop = "5px";
dropdown.style.zIndex = "1000";
joestarsCall.appendChild(dropdown);

// Create an info display area for searched joestar details
const infoDisplay = document.createElement("div");
infoDisplay.id = "search-info-display";
infoDisplay.style.marginTop = "15px";
infoDisplay.style.padding = "15px";
infoDisplay.style.backgroundColor = "#0f3460";
infoDisplay.style.borderRadius = "6px";
infoDisplay.style.border = "2px solid #e94560";
infoDisplay.style.display = "none";
infoDisplay.style.color = "#e0e0e0";
joestarsCall.appendChild(infoDisplay);

// Function to display full joestar info
function displayJoestarInfo(name) {
    const info = jojoDescriptions[name];
    if (!info) return;
    
    infoDisplay.innerHTML = "";
    infoDisplay.style.display = "block";
    
    const title = document.createElement("h3");
    title.textContent = info.Name;
    title.style.color = "#e94560";
    title.style.marginBottom = "10px";
    infoDisplay.appendChild(title);
    
    // Add all properties from the description
    for (const [key, value] of Object.entries(info)) {
        const displayValue = typeof value === "string" ? value.trim() : value;
        if (key !== "Name" && displayValue !== undefined && displayValue !== null && displayValue !== "") {
            const line = document.createElement("p");
            line.style.margin = "5px 0";
            line.innerHTML = `<strong>${key}:</strong> ${displayValue}`;
            infoDisplay.appendChild(line);
        }
    }
}

// Function to hide the info display
function hideJoestarInfo() {
    infoDisplay.style.display = "none";
    infoDisplay.innerHTML = "";
}

input.addEventListener("input", () => {
    const searchTerm = input.value.toLowerCase();
    
    // Keep the jojo list visible while searching
    const jojoItems = jojoList.querySelectorAll("p");
    jojoItems.forEach(item => {
        item.style.display = null;
    });
    
    // Update the dropdown suggestions
    dropdown.innerHTML = ""; // clear previous options
    
    if (searchTerm === "") {
        dropdown.style.display = "none";
        hideJoestarInfo();
        return;
    }
    
    const matchingNames = jojoIds.filter(name => name.toLowerCase().includes(searchTerm));
    if (matchingNames.length > 0) {
        const exactMatch = matchingNames.find(name => name.toLowerCase() === searchTerm);
        const displayName = exactMatch || matchingNames[0];
        displayJoestarInfo(displayName);
    } else {
        hideJoestarInfo();
    }
    
    // Create dropdown items for matching jojos
    matchingNames.forEach(name => {
        const option = document.createElement("div");
        option.textContent = name;
        option.style.padding = "10px 12px";
        option.style.cursor = "pointer";
        option.style.color = "#e0e0e0";
        option.style.borderBottom = "1px solid #16213e";
        
        option.addEventListener("mouseover", () => {
            option.style.backgroundColor = "#e94560";
            option.style.color = "#1a1a2e";
        });
        
        option.addEventListener("mouseleave", () => {
            option.style.backgroundColor = "transparent";
            option.style.color = "#e0e0e0";
        });
        
        option.addEventListener("click", () => {
            input.value = name;
            dropdown.style.display = "none";
            displayJoestarInfo(name);
            
            // Keep the jojo list visible after selection
            jojoItems.forEach(item => {
                item.style.display = null;
            });
        });
        
        dropdown.appendChild(option);
    });
    
    // Show dropdown if there are matches
    dropdown.style.display = dropdown.children.length > 0 ? "block" : "none";
});

// Hide dropdown when clicking outside
document.addEventListener("click", (e) => {
    if (e.target !== input && e.target !== dropdown) {
        dropdown.style.display = "none";
    }
});

// Show dropdown again when input is focused
input.addEventListener("focus", () => {
    if (input.value === "") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});
