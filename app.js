const Stand = document.getElementById("Joestars Stands");
//2. Using getElementsByClassName, select all the elements with the class of "center" and set them to a const variable called centered
const centered = document.getElementsByClassName("center");

//3. Using querySelector, select the first div with the info for Batman: The Animated Series inside of it and set it to a const variable called batman.
const jojoIds = ["johnathan", "joseph", "jotaro", "josuke", "jolyne", "johnny", "Gappy(josuke-part 8)", "Jodio"];
const joestars = jojoIds.map(id => document.querySelector(`#${id}`));

const jojoList = document.getElementById("jojo-list");
jojoIds.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    jojoList.appendChild(li);
});

//4. Using querySelectorAll, select all the h3 elements and set it to a const variable called h3s
const h3s = document.querySelectorAll("h3");
//5a. Select the h1 (You can use whichever selector you want) and set it to a const variable called h1.
const h1 = document.querySelector("h1");

//6a. Select the div with the id of "honorable-mentions" and set it to a const variable called honorableMentions.
const honorableMentions = document.getElementById("honorable-mentions");

//6b. Use innerHTML to change the HTML to a p (AKA Paragraph) element with the text of "OTHER GREAT SHOWS" inside of it (NOTE: Do NOT include the "center" class)
honorableMentions.innerHTML = "<p>Joe-bros</p>";

//8. Using classList, ADD both the "background" and "text-color" classes to the h1 (NOTE: You can use the h1 variable you created earlier)
h1.classList.add("background", "text-color");

//9. Using classList, REMOVE the "background" class from the h1 (NOTE: You can use the h1 variable you created earlier)
h1.classList.remove("background");

//10a. Using createElement, create an h4 element and set it to a const variable called h4
const h4 = document.createElement("h4");