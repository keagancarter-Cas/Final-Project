//2. Using getElementsByClassName, select all the elements with the class of "center" and set them to a const variable called centered
const centered = document.getElementsByClassName("center");

//3. Using querySelector, select the first div with the info for Batman: The Animated Series inside of it and set it to a const variable called batman.
const jojoIds = ["johnathan", "joseph", "jotaro", "josuke", "Giorno", "jolyne", "johnny", "Gappy", "Jodio"];

// Create descriptions for each Joestar
const jojoDescriptions = {
  johnathan: {
    Name: "Jonathan Joestar",
    Personality: "He has a sense of justice, and chivalry",
    FightingStyle: "Hamon Technique; Ripple",
    FightingStyleInfo: "Martial arts technique,",
    Introduced: "Part 1; Phantom Blood"},

  joseph: {
    Name: "Joseph Joestar", 
    Personality: "He's cunning, resourceful, and intellectual",
    Stand: "Hermit Purple",
    StandInfo: "",
    Introduced: "Part 2; Battle Tendancy"},

  jotaro: {
    Name:"Jotaro Kujo", 
    Personality: "",
    Stand: "Star Platinum",
    Evolution: "Over Heaven",
    StandInfo: "",
    Introduced: "Part 3; Stardust Crusaders"},

  josuke: {
    Name: "Josuke Higashikata", 
    Personality: "",
    Stand: "Crazy Diamond",
    StandInfo: "",
    Introduced: "Part 4; Diamond Is Unbreakable"},

  Giorno: {
    Name: "Giorno Giovanna", 
    Personality: "", 
    Stand: "Gold Experience",
    Evolution:"Requiem",
    StandInfo: "",
    Introduced: "Part 5; Golden Wind"},

  jolyne: {
    Name:"Jolyne Cujoh", 
    Personality: "",
    Stand: "Stone Free", 
    StandInfo: "",
    Introduced: "Part 6; Stone Ocean"},

  johnny: {
    Name:"Johnny Joestar",
    Personality: "",
    Stand: "Tusk",
    Evolution: "Acts: 1-4",
    StandInfo: "",
    Introduced: "Part 7; Steel Ball Run"},

  Gappy: {
    Name: "Gappy",
    Personality: ", is",
    Stand: "Soft and Wet",
    Evolution: "Go Beyond!",
    StandInfo: "",
    Introduced: "Part 8; Jojolion"},

  Jodio: { 
    Name: "Jodio Joestar", 
    Personality: "",
    Stand: "November Rain",
    StandInfo: "His stand is a palm tree that controls rain, and within a 9 meter radius of coming in contact with the stand,  ",
    Introduced: "Part 9; JOJOLands"}
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