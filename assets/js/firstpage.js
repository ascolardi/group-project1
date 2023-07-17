var formBtn = document.querySelector(".mainBtn");
var formEl = document.querySelector(".form-select")

formBtn.addEventListener('click', function(){

  var proteinEl = formEl.value;
  //var text = formEl.options[formEl.selectedIndex].value;
  localStorage.setItem("Main Ingredient", proteinEl);

})

