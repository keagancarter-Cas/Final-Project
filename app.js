//2. Using getElementsByClassName, select all the elements with the class of "center" and set them to a const variable called centered
const centered = document.getElementsByClassName("center");

//3. Using querySelector, select the first div with the info for Batman: The Animated Series inside of it and set it to a const variable called batman.
const jojoIds = ["johnathan", "joseph", "jotaro", "josuke", "jolyne", "johnny", "Gappy", "Jodio"];

// Create descriptions for each Joestar
const jojoDescriptions = {
  johnathan: "Jonathan Joestar - Stand: Null",
  joseph: "Joseph Joestar - Stand: Hermit Purple",
  jotaro: "Jotaro Kujo - Stand: Star Platinum ",
  josuke: "Josuke Higashikata - Stand: Crazy Diamond",
  jolyne: "Jolyne Cujoh - Stand: Stone Free",
  johnny: "Johnny Joestar - Stand: Tusk (Acts: 1-4)",
  Gappy: "Gappy (Josuke Part 8) - Stand: Soft and Wet:Go Beyond!",
  Jodio: "Jodio Joestar - Stand: November Rain"
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
      tooltip.textContent = jojoDescriptions[name];
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

//4. Using querySelectorAll, select all the h3 elements and set it to a const variable called h3s
const h3s = document.querySelectorAll("h3");
//5a. Select the h1 (You can use whichever selector you want) and set it to a const variable called h1.
const h1 = document.querySelector("h1");

//6a. Select the div with the id of "honorable-mentions" and set it to a const variable called honorableMentions.
const honorableMentions = document.getElementById("honorable-mentions");

//6b. Use innerHTML to change the HTML to a p (AKA Paragraph) element with the text of "OTHER GREAT SHOWS" inside of it (NOTE: Do NOT include the "center" class)
if (honorableMentions) { honorableMentions.innerHTML = "<p>Joe-bros</p>"; }

//8. Using classList, ADD both the "background" and "text-color" classes to the h1 (NOTE: You can use the h1 variable you created earlier)
if (h1) { h1.classList.add("background", "text-color"); }

//9. Using classList, REMOVE the "background" class from the h1 (NOTE: You can use the h1 variable you created earlier)
if (h1) { h1.classList.remove("background"); }

//10a. Using createElement, create an h4 element and set it to a const variable called h4
const h4 = document.createElement("h4");