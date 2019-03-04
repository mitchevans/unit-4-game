
// individual character stats
let Grant = {   "name": "Grant",
                'healthPoints': 180, 
                "attackPower": 25, 
                "counterAttackPower": 25,
                "picture": "./assets/images/grant.png",
                "gender": "him"};

let Ellie = {  "name": "Ellie",
                 'healthPoints': 150, 
                "attackPower": 15, 
                "counterAttackPower": 15,
                "picture": "./assets/images/ellie.jpg",
                "gender": "her"};   
            
let Hammond = { "name": "Hammond",
                "healthPoints": 100, 
                "attackPower": 8, 
                "counterAttackPower": 8,
                "picture": "./assets/images/hammond.jpg",
                "gender": "him" };

let Malcolm = {  "name": "Malcolm",
                "healthPoints": 120, 
                "attackPower": 12, 
                "counterAttackPower": 12,
                "picture": "./assets/images/malcolm.png",
                "gender": "him"};

// array of characters
let characters = [Grant, Ellie, Hammond, Malcolm];
let enemies = [];
console.log(enemies.length);
let defender= [];
let character = [];
let defeated= [];

$("#char0").html(
    "<img src='" + characters[0]["picture"]  + "'/>")

$("#char1").html(
        "<img src='" + characters[1]["picture"]  + "'/>")

$("#char2").html(
        "<img src='" + characters[2]["picture"]  + "'/>")
        
$("#char3").html(
        "<img src='" + characters[3]["picture"]  + "'/>")


// Selecting a character and moving the remaining characters to the enemies array



// Grant is chosen as character
$("#char0").on("click", function() {
        if (enemies.length == 0) {
        $("#char1").html("");
        $("#char2").html("");
        $("#char3").html("");
        for (i = 0; i < characters.length; i++) {
                if (i != 0) {
                        enemies.push(characters[i]);
                }
        }
        character.push(characters[0]);
        $("#enemy0").html("<img src='" + enemies[0]["picture"]  + "'/>");
        $("#enemy1").html("<img src='" + enemies[1]["picture"]  + "'/>");
        $("#enemy2").html("<img src='" + enemies[2]["picture"]  + "'/>");
        $("#enemyTitle").text("Select an Enemy to Attack");
        $("#characterTitle").text("Character");
        $("#characterStats").html("<p>" + Grant["name"] + "</p>"
                                + "<p>" + "Attack: " + Grant["attackPower"] + "</p>"
                                + "<p>" + "Health: " + Grant["healthPoints"] + "</p>");
}
})

// Ellie is chosen as character
$("#char1").on("click", function() {
        if (enemies.length == 0) {
        $("#char0").html("");
        $("#char2").html("");
        $("#char3").html("");
        for (i = 0; i < characters.length; i++) {
                if (i != 1) {
                        enemies.push(characters[i]);
                }
        }
        character.push(characters[1]);
        $("#enemy0").html("<img src='" + enemies[0]["picture"]  + "'/>")
        $("#enemy1").html("<img src='" + enemies[1]["picture"]  + "'/>")
        $("#enemy2").html("<img src='" + enemies[2]["picture"]  + "'/>") 
        $("#enemyTitle").text("Select an Enemy to Attack")
        $("#characterTitle").text("Character")
        $("#characterStats").html("<p>" + Ellie["name"] + "</p>"
                                + "<p>" + "Attack: " + Ellie["attackPower"] + "</p>"
                                + "<p>" + "Health: " + Ellie["healthPoints"] + "</p>")
}
})

// Hammond is chosen as character
$("#char2").on("click", function() {
        if (enemies.length == 0) {
        $("#char0").html("");
        $("#char1").html("");
        $("#char3").html("");
        for (i = 0; i < characters.length; i++) {
                if (i != 2) {
                        enemies.push(characters[i]);
                }
        }
        character.push(characters[2]);
        $("#enemy0").html("<img src='" + enemies[0]["picture"]  + "'/>")
        $("#enemy1").html("<img src='" + enemies[1]["picture"]  + "'/>")
        $("#enemy2").html("<img src='" + enemies[2]["picture"]  + "'/>") 
        $("#enemyTitle").text("Select an Enemy to Attack")
        $("#characterTitle").text("Character")
        $("#characterStats").html("<p>" + Hammond["name"] + "</p>"
                                + "<p>" + "Attack: " + Hammond["attackPower"] + "</p>"
                                + "<p>" + "Health: " + Hammond["healthPoints"] + "</p>")
}
})

//Malcolm is chosen as character
$("#char3").on("click", function() {
        if (enemies.length == 0) {
        $("#char0").html("");
        $("#char1").html("");
        $("#char2").html("");
        for (i = 0; i < characters.length; i++) {
                if (i != 3) {
                        enemies.push(characters[i]);
                }
        }
        character.push(characters[3]);
        $("#enemy0").html("<img src='" + enemies[0]["picture"]  + "'/>");
        $("#enemy1").html("<img src='" + enemies[1]["picture"]  + "'/>");
        $("#enemy2").html("<img src='" + enemies[2]["picture"]  + "'/>");
        $("#enemyTitle").text("Select an Enemy to Attack")
        $("#characterTitle").text("Character")
        $("#characterStats").html("<p>" + Malcolm["name"] + "</p>"
                                + "<p>" + "Attack: " + Malcolm["attackPower"] + "</p>"
                                + "<p>" + "Health: " + Malcolm["healthPoints"] + "</p>")
}
})



$("#enemy0").on("click", function() {
        if (defender.length === 0) {
        $("#enemy0").html("");
        $("#enemyTitle").text("Enemies to Attack");
        defender.push(enemies[0]);
        $("#defender").html("<img src='" + defender[0]["picture"]  + "'/>") ;
        $("#defenderTitle").html("<h1>" + "Click on " + defender[0]["name"] + " to Attack " + defender[0]["gender"] + "</h1>");
        $("#defenderStats").html("<p>" + defender[0]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[0]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[0]["healthPoints"] + "</p>");
        }
})

$("#enemy1").on("click", function() {
        if (defender.length === 0) {
        $("#enemy1").html("");
        $("#enemyTitle").text("Enemies to Attack");
        defender.push(enemies[1]);
        $("#defender").html("<img src='" + defender[0]["picture"]  + "'/>") 
        $("#defenderTitle").html("<h1>" + "Click on " + defender[0]["name"] + " to Attack " + defender[0]["gender"] + "</h1>");
        $("#defenderStats").html("<p>" + defender[0]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[0]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[0]["healthPoints"] + "</p>");
        }
})

$("#enemy2").on("click", function() {
        if (defender.length === 0) {
        $("#enemy2").html("");
        $("#enemyTitle").text("Enemies to Attack");
        defender.push(enemies[2]);
        $("#defender").html("<img src='" + defender[0]["picture"]  + "'/>") 
        $("#defenderTitle").html("<h1>" + "Click on " + defender[0]["name"] + " to Attack " + defender[0]["gender"] + "</h1>");
        $("#defenderStats").html("<p>" + defender[0]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[0]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[0]["healthPoints"] + "</p>");
        }
})

// attacking first defender
$("#defender").on("click", function() {
        if (defender[0]["healthPoints"] > 0) {
                defender[0]["healthPoints"] -= character[0]["attackPower"];
                character[0]["healthPoints"] -= defender[0]["counterAttackPower"];
        
        $("#defenderStats").html("<p>" + defender[0]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[0]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[0]["healthPoints"] + "</p>");

        character[0]["attackPower"] += 10;

        $("#characterStats").html("<p>" + character[0]["name"] + "</p>"
                                + "<p>" + "Attack: " + character[0]["attackPower"] + "</p>"
                                + "<p>" + "Health: " + character[0]["healthPoints"] + "</p>")
        }
        if (defender[0]["healthPoints"] <= 0) {
                $("#defenderStats").html("<p>" + defender[0]["name"] + "</p>"
                + "<p>Has Been</p>" +
                "<p>Elimnated</p>");
                $("#enemyTitle").text("Select Another Enemy to Attack");
                defeated.push(defender[0]);
        }
})

$("#enemy0").on("click", function() {
        if (defeated.length === 1) {
        $("#enemy0").html("");
        $("#enemyTitle").text("Enemies to Attack");
        defender.push(enemies[0]);
        $("#defender1").html("<img src='" + defender[1]["picture"]  + "'/>") ;
        $("#defenderTitle").html("<h1>" + "Click on " + defender[1]["name"] + " to Attack " + defender[1]["gender"] + "</h1>");
        $("#defender1Stats").html("<p>" + defender[1]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[1]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[1]["healthPoints"] + "</p>");
        }
})

$("#enemy1").on("click", function() {
        if (defeated.length === 1) {
        $("#enemy1").html("");
        $("#enemyTitle").text("Enemies to Attack");
        defender.push(enemies[1]);
        $("#defender1").html("<img src='" + defender[1]["picture"]  + "'/>") ;
        $("#defenderTitle").html("<h1>" + "Click on " + defender[1]["name"] + " to Attack " + defender[1]["gender"] + "</h1>");
        $("#defender1Stats").html("<p>" + defender[1]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[1]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[1]["healthPoints"] + "</p>");
        }
})

$("#enemy2").on("click", function() {
        if (defeated.length === 1) {
        $("#enemy2").html("");
        $("#enemyTitle").text("Enemies to Attack");
        defender.push(enemies[2]);
        $("#defender1").html("<img src='" + defender[1]["picture"]  + "'/>") ;
        $("#defenderTitle").html("<h1>" + "Click on " + defender[1]["name"] + " to Attack " + defender[1]["gender"] + "</h1>");
        $("#defender1Stats").html("<p>" + defender[1]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[1]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health " + defender[1]["healthPoints"] + "</p>");
        }
})

// attacking second defender
        $("#defender1").on("click", function() {
                console.log(defender[1]);
                console.log(defender[1]["healthPoints"]);

                if (defender[1]["healthPoints"] > 0) {
                        defender[1]["healthPoints"] -= character[0]["attackPower"];
                        character[0]["healthPoints"] -= defender[1]["counterAttackPower"];
                
                $("#defender1Stats").html("<p>" + defender[1]["name"] + "</p>"
                                        + "<p>" + "Counter Attack: " + defender[1]["counterAttackPower"] + "</p>"
                                        + "<p>" + "Health: " + defender[1]["healthPoints"] + "</p>");
        
                character[0]["attackPower"] += 10;
        
                $("#characterStats").html("<p>" + character[0]["name"] + "</p>"
                                        + "<p>" + "Attack: " + character[0]["attackPower"] + "</p>"
                                        + "<p>" + "Health: " + character[0]["healthPoints"] + "</p>")
                }
                if (defender[1]["healthPoints"] <= 0) {
                        $("#defender1Stats").html("<p>" + defender[1]["name"] + "</p>"
                        + "<p>Has Been</p>" +
                        "<p>Elimnated</p>");
                        $("#enemyTitle").text("Select Another Enemy to Attack");
                        defeated.push(defender[1]);
                }
        }) 
// selecting last enemy
$("#enemy0").on("click", function() {
        if (defeated.length === 2) {
        $("#enemy0").html("");
        $("#enemyTitle").text("");
        defender.push(enemies[0]);
        $("#defender2").html("<img src='" + defender[2]["picture"]  + "'/>") ;
        $("#defenderTitle").html("<h1>" + "Click on " + defender[2]["name"] + " to Attack " + defender[2]["gender"] + "</h1>");
        $("#defender2Stats").html("<p>" + defender[2]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[2]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[2]["healthPoints"] + "</p>");
                }
        })

$("#enemy1").on("click", function() {
        if (defeated.length === 2) {
        $("#enemy1").html("");
        $("#enemyTitle").text("");
        defender.push(enemies[1]);
        $("#defender2").html("<img src='" + defender[2]["picture"]  + "'/>") ;
        $("#defenderTitle").html("<h1>" + "Click on " + defender[2]["name"] + " to Attack " + defender[2]["gender"] + "</h1>");
        $("#defender2Stats").html("<p>" + defender[2]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[2]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[2]["healthPoints"] + "</p>");
                }
        })
$("#enemy2").on("click", function() {
        if (defeated.length === 2) {
        $("#enemy2").html("");
        $("#enemyTitle").text("");
        defender.push(enemies[2]);
        $("#defender2").html("<img src='" + defender[2]["picture"]  + "'/>") ;
        $("#defenderTitle").html("<h1>" + "Click on " + defender[2]["name"] + " to Attack " + defender[2]["gender"] + "</h1>");
        $("#defender2Stats").html("<p>" + defender[2]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[2]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[2]["healthPoints"] + "</p>");
                }
        })
// attacking final defender
$("#defender2").on("click", function() {
        console.log(defender[2]);
        console.log(defender[2]["healthPoints"]);

        if (defender[2]["healthPoints"] > 0) {
                defender[2]["healthPoints"] -= character[0]["attackPower"];
                character[0]["healthPoints"] -= defender[2]["counterAttackPower"];
        
        $("#defender2Stats").html("<p>" + defender[2]["name"] + "</p>"
                                + "<p>" + "Counter Attack: " + defender[2]["counterAttackPower"] + "</p>"
                                + "<p>" + "Health: " + defender[2]["healthPoints"] + "</p>");

        character[0]["attackPower"] += 10;

        $("#characterStats").html("<p>" + character[0]["name"] + "</p>"
                                + "<p>" + "Attack: " + character[0]["attackPower"] + "</p>"
                                + "<p>" + "Health: " + character[0]["healthPoints"] + "</p>")
        }
        if (defender[2]["healthPoints"] <= 0) {
                $("#defender2Stats").html("<p>" + defender[2]["name"] + "</p>"
                + "<p>Has Been</p>" +
                "<p>Elimnated</p>");
                $("#enemyTitle").text("");
                defeated.push(defender[2]);
                $("#defenderTitle").html("<h1>Congratulations You Defeated Every Enemy</h1>");
                $("#reset").html("<h1>Reset</h1>")
        }
}) 

$("#reset").on("click", function() {let characters = [Grant, Ellie, Hammond, Malcolm];
        enemies = [];
        defender= [];
        character = [];
        defeated= [];
        
        $("#char0").html(
            "<img src='" + characters[0]["picture"]  + "'/>")
        
        $("#char1").html(
                "<img src='" + characters[1]["picture"]  + "'/>")
        
        $("#char2").html(
                "<img src='" + characters[2]["picture"]  + "'/>")
                
        $("#char3").html(
                "<img src='" + characters[3]["picture"]  + "'/>")
        $("#characterTitle").text("Select a Character")
        $("#characterStats").html("");
        $("#defender").html("");
        $("#defenderStats").html("");
        $("#defender1").html("");
        $("#defender1Stats").html("");
        $("#defender2").html("");
        $("#defender2Stats").html("");
        $("#defenderTitle").html("");
        $("#reset").html("");

})