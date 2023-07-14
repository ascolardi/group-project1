var tableBody = document.getElementById('table');
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
            // var showName = localStorage.getItem("Name");
            // var showType = localStorage.getItem("Type");
            // var showDate = localStorage.getItem("Date");
            var newRow = `<tr>
                            <td>${meals}
                            <td> <img src = "${mealImage}">
                            <td>${mealId}
                          </tr>`
            $('#infoTable tbody').append(newRow);
            /*localStorage.clear();*/
        }

        showStored();

      }
    
    })
}
    

        


fetchButton.addEventListener('click', getApi);