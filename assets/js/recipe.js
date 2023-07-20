//get the string from Main Ingredient key in local storage then put that on the title of the page
var base = localStorage.getItem("Main Ingredient");
var newRecipeTitle = [];
newRecipeTitle.push(base.split('=')[1]);

var headerTitle = $('#recipe-header');
headerTitle.text(`${newRecipeTitle}` + "  " + "Recipes")

function getApi() {  
  // fetch request gets a list of all the repos for the
  //node.js organization
  //this gets the Main Ingredient key from local storage and puts it on the end of the fetch URL
  var requestUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?${base}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //get images, information, and meal ID for each meal retreived by the fetch and then puts them on the page
      for (var i = 0; i < data.meals.length; i++) {
        var mealId = data.meals[i].idMeal
        var meals = data.meals[i].strMeal
        var mealImage = data.meals[i].strMealThumb
        
        function showStored() {
          var newCard = `<div class="card col-lg-3 col-md-6 col-sm-12 col-xs-12">
                          <img src = "${mealImage}" id="cardImg${i}" class="card-img-top animate__animated animate__bounceIn">
                         <div class = "card-body">
                          <h2 class = "card-text">${meals}</h2>
                          <button data-meal="${mealId}" class="recipe-button" type="button" class="btn btn-primary">See Recipe</button>
                         </div>
                        </div>`
          $('.container .row').append(newCard);
        }
      showStored();
      }
      //put the meal ID into local storage where it can be called by the recipe page        
        $(".recipe-button").on("click", function(){
          var mealId = $(this).data("meal")
          localStorage.setItem("mealId", mealId);
          window.location = "recipe-page.html"
        })
    })
}

//Gets the ingredient and measurement from the ingredients array and pushed them to a new array which is then appended to a table which displays on the instructions page
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









