



var recipeId = localStorage.getItem("mealId")
console.log(recipeId)


function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ recipeId;
    fetch(requestUrl).then(function(res){
        return res.json()
    }) .then(function(data){
       var meal = data.meals[0]
       console.log(meal.strInstructions)









    })

}

getApi()









