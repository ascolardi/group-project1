//this page gets the value of the submissions on the index page and passes it to local storage

var formBtn = document.querySelector(".mainBtn");

formBtn.addEventListener('click', function(){  
  var formEl = document.querySelector(".form-select");
  grabVal(formEl)
})

var categoryButton = document.querySelector(".categoryBtn");

categoryButton.addEventListener('click', function(){
  var formEl = document.getElementById("category-form");
  grabVal(formEl)
})

function grabVal(formEl) {
  var proteinEl = formEl.value;
  if(!proteinEl){
    alert("Please select something from dropdown menu");
  } else{
    localStorage.setItem("Main Ingredient", proteinEl);
    window.location = 'list-page.html'
  }
}