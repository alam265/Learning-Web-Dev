const form = document.querySelector('#shelterForm')
var btn = document.querySelector('button')
var input = document.querySelector("#catName")
var lists = document.querySelector("#list")

form.addEventListener("submit",function (evt){
    evt.preventDefault();
    var cat_name = input.value
    var newLI = document.createElement('li')
    newLI.innerText = cat_name 
    lists.append(newLI)
})
