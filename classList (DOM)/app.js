// WRITE YOUR CODE IN HERE:
// WRITE YOUR CODE IN HERE:
const lis = document.querySelectorAll('li') 

for (let i=0 ;i<lis.length ;i++){
    lis[i].classList.toggle('highlight');

    
}


// From Console (Adding class in a element)

// querySelectorAll('img')

// undefined

// x

// NodeList(4) [img#banner, img.square, img.square, img.square]

// x.classList

// undefined

// x.classList()

// VM450:1 Uncaught TypeError: x.classList is not a function

//     at <anonymous>:1:3

// (anonymous) @ VM450:1

// x[0].classList

// DOMTokenList [value: '']

// x[1].classList

// DOMTokenList ['square', value: 'square']

// x[1].classList.add

// ƒ add() { [native code] }

// x[1].classList.add('newClass')

// undefined

//x[1].classList

//DOMTokenList(2) ['square', 'newClass', value: 'square newClass']