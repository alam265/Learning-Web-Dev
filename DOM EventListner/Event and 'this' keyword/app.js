var buttons = document.querySelectorAll('button')
var h1s = document.querySelectorAll('h1')

function change_color(){
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    var NewColor = `rgb(${r},${g},${b})`
    return NewColor
}


for (let button of buttons){
    button.addEventListener('click',colorize)
}
for (let h1 of h1s){
    h1.addEventListener('click',colorize)
}

function colorize(){
    this.style.backgroundColor = change_color()
    
}