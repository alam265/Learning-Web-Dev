
// let images = document.getElementsByTagName('img')
// images[0].src = "https://images.unsplash.com/photo-1462027076063-1ceabb252dbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpa2VufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"

// let heading = document.getElementsByClassName("mw-headline")

// heading[0].innerHTML = "History regain"

// ------------------------------------------------------------
//    (CREATING NEW ELEMENT AND ADDING TO A PARENT )

let p = document.querySelector('p')

// Creating new element. For example we'll create button.

let btn = document.createElement('button')
btn.innerText = "I am a button"

// Adding this new button element to p element 

p.append(btn)
p.prepend(btn)

