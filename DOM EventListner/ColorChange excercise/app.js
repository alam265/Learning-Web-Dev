const btn = document.querySelector('#b')
const h1 = document.querySelector('h1')
btn.onclick = function(){
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    var NewColor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = NewColor
    h1.innerText = NewColor
    
    
}