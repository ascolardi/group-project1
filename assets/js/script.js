// var tableBody = document.getElementById('table');



var base = localStorage.getItem("Main Ingredient");
console.log(base)
getApi();


function getApi() {  
  // fetch request gets a list of all the repos for the
  //node.js organization
  var requestUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${base}`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data.meals)
      for (var i = 0; i < data.meals.length; i++) {
        var mealId = data.meals[i].idMeal
        var meals = data.meals[i].strMeal
        var mealImage = data.meals[i].strMealThumb
        
        console.log(data)
        console.log(meals)
        // console.log(mealImage)
        // console.log(mealId)
      
        function showStored() {
            
        
          var newCard = `<div class="card col-lg-3 col-md-6 col-sm-12 col-xs-12">
                          <img src = "${mealImage}" id="cardImg${i}" class="card-img-top animate__animated animate__flipInX">
                         <div class = "card-body">
                          <h2 class = "card-text">${meals}</h2>
                          <button data-meal="${mealId}" class="recipe-button" type="button" class="btn btn-primary">See Recipe</button>
                         </div>
                        </div>
          `
          $('.container .row').append(newCard);
        }

        showStored();

      }
    
        // data.meals.forEach(function(meal, index){
        // console.log(meal);
        // console.log(index)
        // var buttonClick = $('.recipe-button');
        // buttonClick.data("id", meal.idMeal)
        // console.log(buttonClick);
        $(".recipe-button").on("click", function(){
          // var mealLookUp = $(data.meals[i]);
          var mealId = $(this).data("meal")
          localStorage.setItem("mealId", mealId);
          window.location = "recipe-page.html"
        })
      // })
    })
  }

        


