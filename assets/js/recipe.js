var ingredientText = document.getElementById('ingredients')
var recipeId = localStorage.getItem("mealId")
const ingredients = []

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?' + recipeId;
    fetch(requestUrl).then(function (res) {
        return res.json()
    }).then(function (data) {
        var meal = data.meals[0]

        // adds meal name to top of page
        var mealName = meal.strMeal;
        var mealTitle = $('#card-title');
        mealTitle.text(mealName);

        // adds meal image to page
        var mealImage = meal.strMealThumb;
        var mealPic = $('#food-image');
        mealPic.attr('src', mealImage);
   
        //gets the ingredients and measurements and puts them in an object for later use.  Stops if there is an empty string in the data.
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

        // 
        var instructions = meal.strInstructions.replace(/(?:\r\n|\r|\n)/g, '');
        for (i = 0; i <= 50; i++) {
            var newInstructions = [];
            newInstructions.push(instructions.split('.')[i]);
            $('#cooking-instructions').append(`<p id='instructions${i}' class='instruction-text'>${newInstructions}</p>`)
        }    
    
        showIngredients();
    })

}

function showIngredients() {
    for (x = 0; x < ingredients.length; x++) {
        var ingred = []
        var amounts = []
        ingred.push(ingredients[`${x}`].ingredient)
        amounts.push(ingredients[`${x}`].measure)
         
    var newRow = `<tr>
                    <td>${ingred}
                    <td>${amounts}
                  </tr>`  
    
    $('#ingredients-tbody').append(newRow);
    }              
}

getApi()









