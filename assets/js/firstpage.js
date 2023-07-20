//this page gets the value of the submissions on the index page and passes it to local storage

var fetchButton = document.getElementById('button');
var formBtn = document.querySelector(".mainBtn");
var formEl = document.querySelector(".form-select");

formBtn.addEventListener('click', function(){  
  var proteinEl = formEl.value;
  localStorage.setItem("Main Ingredient", proteinEl);
})

var categoryButton = document.querySelector(".categoryBtn");

categoryButton.addEventListener('click', function(){
  var formEl = document.getElementById("category-form");
  var proteinEl = formEl.value;
  localStorage.setItem("Main Ingredient", proteinEl);
})

// console.log(proteinEl)
