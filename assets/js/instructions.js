var ingredientText = document.getElementById('ingredients')
var recipeId = localStorage.getItem("mealId")
const ingredients = []

function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + recipeId;
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

        //since the instructions string in the data comes back as one massive string and also has some newline/carriage returns we had to find a way to get those out of the string and then split the string up based on where a period falls.  That way we get each individual sentence as each index in an array and we can structure the instructions how we like. 
        var instructions = meal.strInstructions.replace(/(?:\r\n|\r|\n)/g, '');
        for (i = 0; i <= 50; i++) {
            var newInstructions = [];
            newInstructions.push(instructions.split('.')[i]);
            $('#cooking-instructions').append(`<p id='instructions${i}' class='instruction-text'>${newInstructions}</p>`)
        }        
        showIngredients();
    })
}

// we created a function to get the ingredient and measurements from the ingredients array and to then push them based on index to new arrays which we then append to a table.
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









