var fetchButton = document.getElementById('button');

var formBtn = document.querySelector(".mainBtn");
var formEl = document.querySelector(".form-select")

formBtn.addEventListener('click', function(){
  
  var proteinEl = formEl.value;
  //var text = formEl.options[formEl.selectedIndex].value;
  localStorage.setItem("Main Ingredient", proteinEl);

})

var categoryButton = document.getElementById("categoryBtn");

var categorySelect = document.getElementById("category-select")


categoryButton.addEventListener('click', function(){
  
  var categoryEl = categorySelect.value;
  //var text = formEl.options[formEl.selectedIndex].value;
  localStorage.setItem("Main Ingredient", categoryEl);

})
