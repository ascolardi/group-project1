



var recipeId = localStorage.getItem("mealId")


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
        var instructions = meal.strInstructions;
        var mealInstructions = $('#cooking-instructions');
        mealInstructions.text(instructions);

        for(i=1; i<=20; i++){
            console.log(`meal.strIngredient${i}`)
        }

        var ingredients = $(meal).slice(7,27)


        
        console.log(ingredients)
        
        console.log(meal.strMeasure1)







    })

}

getApi()









