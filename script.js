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
    race = "Nord"

}





