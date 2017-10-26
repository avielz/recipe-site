function Recipe(name, preparationTime, difficulty, instructions, Ingredients) {
    this.name = name;
    this.preparationTime = preparationTime;
    this.difficulty = difficulty;
    this.instructions = instructions;
    this.Ingredients = Ingredients;
}

function ingridient(name, quant, type) {
    this.name = name;
    this.quant = quant;
    this.type = type;
}

function ingridientToString(ingridient) {
    return [ingridient.name,
            ingridient.quant,
            ingridient.type
           ].join(' ');
}

function ingridientPrint(ingridient) {
    if (Array.isArray(ingridient)) {
        var temp = [];
        for (var i = 0; i < ingridient.length; i++) {
            temp.push(ingridientToString(ingridient[i]));
        }
        return temp.join('<br>');
    } else {
        return ingridientToString(ingridient);
    }
}


var Recepie1 = new Recipe("Roast Chicken", 45, "easy", "Place chicken pieces in oven tray. spread ingredients on top and rub with hands into chicken. Place in oven uncovered on grill at 210C for 35 minutes until color is crispy brown.", [
            new ingridient("chicken", "4", " thighs"),
            new ingridient("salt", "1", " pinch"),
            new ingridient("pepper", "1", " pinch"),
            new ingridient("olive oil", "2", " tablespoon"),
            new ingridient("paprika", "1", " pinch"),
            new ingridient("lemon juice", "1", " squeeze")
        ]);

var Recepie2 = new Recipe("Rice", 20, "easy", "Place rice in a sieve and rinse well under the tap. Place washed rice in pot. add water and other Ingredients. Stir well, cover with lid and heat to boil then reduce heat to simmer for 15 minutes. Allow to cool down covered for another 10 minutes at least.", [
            new ingridient("rice", "1 1/2", " Cup"),
            new ingridient("salt", "1", " teaspoon"),
            new ingridient("oil", "1", " tablespoon"),
            new ingridient("water", "3", " cup"),
        ]);

var Recepie3 = new Recipe("Peas", 10, "easy", "Place peas in pot. add water and salt. Cover with lid and heat to boil then turn heat off. Allow to cool down covered for another 5 minutes and then strain over sieve.", [
            new ingridient("Peas", "800", "gram"),
            new ingridient("salt", "1", " teaspoon"),
            new ingridient("water", "1", " cup"),
        ]);


var i = 1;
while (i <= 3) {
    console.log(i);
    if (i == 1) {
        document.getElementById("name" + i).innerHTML = Recepie1.name;
        document.getElementById("time" + i).innerHTML = "Preparation  time: " + Recepie1.preparationTime;
        document.getElementById("difc" + i).innerHTML = "Difficulty: " + Recepie1.difficulty;
        document.getElementById("ingrid" + i).innerHTML = "Ingredients: " + "<br/>" + ingridientPrint(Recepie1.Ingredients);
        document.getElementById("instructions" + i).innerHTML = Recepie1.instructions;
    }
    if (i == 2) {
        document.getElementById("name" + i).innerHTML = Recepie2.name;
        document.getElementById("time" + i).innerHTML = "Preparation  time: " + Recepie2.preparationTime;
        document.getElementById("difc" + i).innerHTML = "Difficulty: " + Recepie2.difficulty;
        document.getElementById("ingrid" + i).innerHTML = "Ingredients: " + "<br/>" + ingridientPrint(Recepie2.Ingredients);
        document.getElementById("instructions" + i).innerHTML = Recepie2.instructions;
    }
    if (i == 3) {
        document.getElementById("name" + i).innerHTML = Recepie3.name;
        document.getElementById("time" + i).innerHTML = "Preparation  time: " + Recepie3.preparationTime;
        document.getElementById("difc" + i).innerHTML = "Difficulty: " + Recepie3.difficulty;
        document.getElementById("ingrid" + i).innerHTML = "Ingredients: " + "<br/>" + ingridientPrint(Recepie3.Ingredients);
        document.getElementById("instructions" + i).innerHTML = Recepie3.instructions;
    }
    i++;
}

/* dynamic boxes*/
var dynamicArray = [Recepie1, Recepie2, Recepie3]
var temp;
var j = 1;
while (j <= 3) {
    if (j == 1) {
        temp = Math.floor((Math.random() * 3));
        console.log("i am box dyn 1");
        document.getElementById("dynName" + j).innerHTML = dynamicArray[temp].name;
        document.getElementById("dynTime" + j).innerHTML = "Preparation  time: " + dynamicArray[temp].preparationTime;
        document.getElementById("dynDifc" + j).innerHTML = "Difficulty: " + dynamicArray[temp].difficulty;
        document.getElementById("dynIngrid" + j).innerHTML = "Ingredients: " + "<br/>" + ingridientPrint(dynamicArray[temp].Ingredients);
        document.getElementById("dynInstructions" + j).innerHTML = dynamicArray[temp].instructions;
    }
    if (j == 2) {
        temp = Math.floor((Math.random() * 3));
        console.log("i am box dyn 2");
        document.getElementById("dynName" + j).innerHTML = dynamicArray[temp].name;
        document.getElementById("dynTime" + j).innerHTML = "Preparation  time: " + dynamicArray[temp].preparationTime;
        document.getElementById("dynDifc" + j).innerHTML = "Difficulty: " + dynamicArray[temp].difficulty;
        document.getElementById("dynIngrid" + j).innerHTML = "Ingredients: " + "<br/>" + ingridientPrint(dynamicArray[temp].Ingredients);
        document.getElementById("dynInstructions" + j).innerHTML = dynamicArray[temp].instructions;
    }
    if (j == 3) {
        temp = Math.floor((Math.random() * 3));
        console.log("i am box dyn 3");;
        document.getElementById("dynName" + j).innerHTML = dynamicArray[temp].name;
        document.getElementById("dynTime" + j).innerHTML = "Preparation  time: " + dynamicArray[temp].preparationTime;
        document.getElementById("dynDifc" + j).innerHTML = "Difficulty: " + dynamicArray[temp].difficulty;
        document.getElementById("dynIngrid" + j).innerHTML = "Ingredients: " + "<br/>" + ingridientPrint(dynamicArray[temp].Ingredients);
        document.getElementById("dynInstructions" + j).innerHTML = dynamicArray[temp].instructions;
    }
    j++;
}
/*document.getElementById("box1").innerHTML =
    Recepie1.name + "<br/>" + "Preparation time: " + Recepie1.preparationTime + "<br/>" + "Difficulty: " + Recepie1.difficulty + "<br/>" + "<br/>" + "Instructions:" + "<br/>" + Recepie1.instructions + "<br/>" + "<br/>" + ingridientPrint(Recepie1.Ingredients);
*/
/*first recepie*/
/*
document.getElementById("box"+2).innerHTML =
    Recepie2.name + "<br/>" + "Preparation time: " + Recepie2.preparationTime + "<br/>" + "Difficulty: " + Recepie2.difficulty + "<br/>" + "<br/>" + "Instructions:" + "<br/>" + Recepie2.instructions + "<br/>" + "<br/>" + ingridientPrint(Recepie2.Ingredients);

document.getElementById("box3").innerHTML =
    Recepie3.name + "<br/>" + "Preparation time: " + Recepie3.preparationTime + "<br/>" + "Difficulty: " + Recepie3.difficulty + "<br/>" + "<br/>" + "Instructions:" + "<br/>" + Recepie3.instructions + "<br/>" + "<br/>" + ingridientPrint(Recepie3.Ingredients);


var Recepie1 = {
        name:"Chicken Makhani (Indian Butter Chicken)",
        time:"60",
        difficulty:"easy", 
        instructions:"Heat 1 tablespoon oil in a large saucepan over medium high heat. Saute shallot and onion until soft asnd translucent. Stir in butter, lemon juice, ginger-garlic paste, 1 teaspoon garam masala, chili powder, cumin and bay leaf. Cook, stirring, for 1 minute. Add tomato sauce, and cook for 2 minutes, stirring frequently. Stir in half-and-half and yogurt. Reduce heat to low, and simmer for 10 minutes, stirring frequently. Season with salt pepper. Remove from heat and set aside.Heat 1 tablespoon oil in a large heavy skillet over medium heat. Cook chicken until lightly browned, about 10 minutes. Reduce heat, and season with 1 teaspoon garam masala and cayenne. Stir in a few spoonfuls of sauce, and simmer until liquid has reduced, and chicken is no longer pink. Stir cooked chicken into sauce.Mix together cornstarch and water, then stir into the sauce. Cook for 5 to 10 minutes, or until thickened.",
    Ingredients:[
        new ingridient("sugar", "1/2" ," teaspoon"),
        new ingridient("sugar", "1/2" ," teaspoon"),
        new ingridient("sugar", "1/2" ," teaspoon"),
        new ingridient("sugar", "1/2" ," teaspoon"),
        new ingridient("sugar", "1/2" ," teaspoon"),
        new ingridient("butter", "1/2" ," teaspoon")
    ]
  
};
*/
