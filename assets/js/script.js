// var tableBody = document.getElementById('table');
var fetchButton = document.getElementById('button');

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=beef';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.meals)
      for (var i = 0; i < data.meals.length; i++) {
        var mealId = data.meals[i].idMeal
        var meals = data.meals[i].strMeal
        var mealImage = data.meals[i].strMealThumb
        
      
        console.log(meals)
        console.log(mealImage)
        console.log(mealId)
      
        function showStored() {
            
            var newRow = `<tr>
                            <td> ${meals}
                            <td> <img src = "${mealImage}" id= "meal-image">
                            <td> <button type="button" class="btn btn-primary">See Recipe</button>
                          </tr>`
            $('#infoTable tbody').append(newRow);
           
        }

        showStored();

      }
    
    })
}
    

        


fetchButton.addEventListener('click', getApi);