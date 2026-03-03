console.log ("JS is connected");
let health = 100
let magicka = 100
let stamina = 100
alert ("Welcome to Tamreil! You are in the province of Skyrim!");

// Race selection
let race = prompt(`Please select your race. Orc Nord Imperial Dark Elf`);

if (race == "Orc"){
   health += 20;
   stamina -= 5;
   magicka -= 25;

} else if (race == "Imperial"){
    health += 10;
    stamina += 10;
    magicka += 10;
} else if (race == "Nord"){
    health += 10;
    stamina += 25;
    magicka -= 15;

} else if (race == "Dark Elf"){
        health -= 5;
        magicka += 25;
} else {
    race = "Nord"}
// Border choice
    let border = prompt("You have been thinking about leaving Skyrim for a long time. You come up upon a bridge that spans into the next province. Do you A. Continue across the border or B. Turn around and go home.");
if (border == "B") {alert("You turn around and go home staying in Skyrim. After years of hard work in Skyrim you retire.")}
else if (border == "A") {encounter = prompt("Just your luck, you have crossed at the same time where Imperial and Stormcloak forces meet. The Imperials believe you are with the Stormcloaks. So, what do you do? A. Fight along with the Stormcloaks. B. Give up and lay down your arms. ")}

if (encounter == "A"){combat = prompt ("Time to fight for your life! A light Imperial infantry rushes at you with a sword and shield. What you decide will lead to life or death. Do you A. Cast a fire bolt and fry the poor soldier. (-25 magicka) B. Block the soldier's attack (-15 stamina) C. Swing at the soldier with your weapon (-25 stamina)")}
else if (encounter == "B") {alert ("You are captured by the Imperials! You are taken with the Stormcloak rebels to Helgen to be executed.")}
