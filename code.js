function Recipe(image, name, preparationTime, difficulty, instructions, Ingredients) {
    this.image = image;
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
    return [ingridient.image,
            ingridient.name,
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

function myButtonFunction() {
    location.reload();
}

var Recepie1 = new Recipe("image/roast%20chicken.jpg","Roast Chicken", 45, "easy", "Place chicken pieces in oven tray. spread ingredients on top and rub with hands into chicken. Place in oven uncovered on grill at 210C for 35 minutes until color is crispy brown.", [
            new ingridient("chicken", "4", " thighs"),
            new ingridient("salt", "1", " pinch"),
            new ingridient("pepper", "1", " pinch"),
            new ingridient("olive oil", "2", " tablespoon"),
            new ingridient("paprika", "1", " pinch"),
            new ingridient("lemon juice", "1", " squeeze")
        ]);

var Recepie2 = new Recipe("image/rice.jpg","Rice", 20, "easy", "Place rice in a sieve and rinse well under the tap. Place washed rice in pot. add water and other Ingredients. Stir well, cover with lid and heat to boil then reduce heat to simmer for 15 minutes. Allow to cool down covered for another 10 minutes at least.", [
            new ingridient("rice", "1 1/2", " Cup"),
            new ingridient("salt", "1", " teaspoon"),
            new ingridient("oil", "1", " tablespoon"),
            new ingridient("water", "3", " cup"),
        ]);

var Recepie3 = new Recipe("image/peas.jpg","Peas", 10, "easy", "Place peas in pot. add water and salt. Cover with lid and heat to boil then turn heat off. Allow to cool down covered for another 5 minutes and then strain over sieve.", [
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

/* dynamic boxes- randomly will display different order of the recepies*/
var dynamicArray = [Recepie1, Recepie2, Recepie3];
var tempArr = [-1];
var temp;

//My original solution. to use need to invoke assignTemp function in line 170 into the for J= loop
//and all references to [temp[j-1]] need to be changed back just to [temp]

// function randomRecep(){
//     return Math.floor((Math.random() * 3));
// }

// function assignTemp(tempArr){
//     console.log("Started assign function, tempArr has: "+tempArr);
//     var num = randomRecep();
//     for (var i = 0; i < tempArr.length; i++) {
//         console.log("num is: " + num + ". check for doubles. tampArr["+i+"] is: "+tempArr[i]);
//         if (num == tempArr[i]){
//             console.log("FOUND DOUBLE! random num = "+num+" IS ALREADY IN array:"+tempArr)
//             return assignTemp(tempArr);
//         }
        
//     }    
//     tempArr.push(num);
//     console.log("pushed " + num + "into array. now is:" + tempArr);
//     return num;
    
// }
function assignTemp(tempArr){
    var arr = []
    while(arr.length < dynamicArray.length){
        var r = Math.floor(Math.random()*dynamicArray.length);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    document.write(arr);
    return arr;
    
}


/*
more solutions from stackoverflow:

1.

var arr = []
while(arr.length < 8){
    var r = Math.floor(Math.random()*100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
document.write(arr);

2.
You could also rewrite your code in the following way (I do not know if you have any requirements to a certain JavaScript versions, or you are only allowed to use a for loop)

function randomRecep(){
 return Math.floor((Math.random() * 3));
}

function assignTemp(tempArr){
  const number = randomRecep();
  if (tempArr.includes( number ) ) {
    console.warn( `${number} exists in [${tempArr.join(', ')}]` );
    return assignTemp(tempArr);
  }
  console.warn( `adding ${number} to [${tempArr.join(', ')}]` );
  tempArr.push( number );
  return tempArr;
}

const output = [];
// shouldn't call this more than the nr of output possibilities (and the pool here has 3 options)
assignTemp( output );
assignTemp( output );
assignTemp( output );
// we will always expect 0, 1, 2 in the output in some manner
console.log( output );
*/

temp = assignTemp(tempArr);  

for (j = 1; j <= dynamicArray.length; j++){
        
        console.log("dynName" + j);
            
        console.log("temp num is: " + temp[j-1]);
        console.log("RECEPIE is: " + dynamicArray[temp[j-1]].name);
        
        document.getElementById("dynImage" + j).src=dynamicArray[temp[j-1]].image;
        document.getElementById("dynName" + j).innerHTML = dynamicArray[temp[j-1]].name;
        document.getElementById("dynTime" + j).innerHTML = "Preparation  time: " + dynamicArray[temp[j-1]].preparationTime;
        document.getElementById("dynDifc" + j).innerHTML = "Difficulty: " + dynamicArray[temp[j-1]].difficulty;
        document.getElementById("dynIngrid" + j).innerHTML = "Ingredients: " + "<br/>" + ingridientPrint(dynamicArray[temp[j-1]].Ingredients);
        document.getElementById("dynInstructions" + j).innerHTML = dynamicArray[temp[j-1]].instructions;
    };
 
