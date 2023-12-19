window.addEventListener('keydown',function(evt){
    console.log(evt.key)
})

const inp = document.querySelector('input')

inp.addEventListener('keypress',function(evt){
    console.log(evt)
})