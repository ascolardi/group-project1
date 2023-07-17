



var recipeId = localStorage.getItem("mealId")
const ingredients = []

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + recipeId;
    fetch(requestUrl).then(function (res) {
        return res.json()
    }).then(function (data) {
        var meal = data.meals[0]

        console.log(meal)


        // adds meal name to top of page
        var mealName = meal.strMeal;
        var mealTitle = $('#meal-title');
        mealTitle.text(mealName);

        // adds meal image to page
        var mealImage = meal.strMealThumb;
        var mealPic = $('#meal-image');
        mealPic.attr('src', mealImage);
        

        // adds coocking instructions
        var instructions = meal.strInstructions.replace(/(?:\r\n|\r|\n)/g, '<br>');

        var mealInstructions = document.getElementById('cooking-instructions');
        mealInstructions.innerHTML = `${instructions}`;        
        

        for(i=1; i<=20; i++){
            const obj = { ingredient: "", measure: "" }
            if( meal[`strIngredient${i}`] && meal[`strMeasure${i}`] ){
                obj.ingredient = meal[`strIngredient${i}`]
                obj.measure = meal[`strMeasure${i}`]
                ingredients.push(obj)
            }
            else {
                break
            }
        }

        console.log(ingredients.length)



        

        console.log(ingredients)


        showIngredients();
    })

}

function showIngredients() {
    for (x = 0; x < ingredients.length; x++) {
        var ingred = []
        var amounts = []
        ingred.push(ingredients[`${x}`].ingredient)
        amounts.push(ingredients[`${x}`].measure)
         
        console.log(ingredients[`${x}`]);
        console.log(ingred)
        console.log(amounts)

    

    var newRow = `<tr>
                    <td>${ingred}
                    <td>${amounts}
                  </tr>`  
    
    $('#ingredients tbody').append(newRow);
    }              
}

getApi()









