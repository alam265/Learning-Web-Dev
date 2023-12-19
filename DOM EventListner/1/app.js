const btn = document.querySelector('#b1')

btn.onclick = function() {
    console.log("You clicked me ")
}
function scream(){
    console.log('AHHHHHHHHHHHHH')
}

document.querySelector('#b2').onclick = scream ;


const btn3 = document.querySelector('#b3')

btn3.addEventListener('click', function(){
    console.log("3rd Button clicked")

})