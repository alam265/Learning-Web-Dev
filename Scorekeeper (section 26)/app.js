const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

let p1Button = document.querySelector("#player1_button")
let p2Button = document.querySelector("#player2_button")
let reset = document.querySelector("#reset")

let playingto = document.querySelector("#playingTo")

let score1 = 0; 
let score2 = 0; 
let winningScore = 0;
let isGameOver = false; 

p1Button.addEventListener('click',function(){
    if (!isGameOver){
    score1 =score1+1; 
    p1Display.textContent = score1; 
    if (score1 === winningScore){
        isGameOver = true;
        
    }
 }

})

p2Button.addEventListener('click',function(){
    if (!isGameOver){

    score2 =score2+1; 
    p2Display.textContent = score2; 
    if (score2 === winningScore){
        isGameOver = true;
        
    }
    

     
    
}

})



function resetfunc(){
    score1 =0; 
    score2=0; 
    
    p1Display.textContent = score1
    p2Display.textContent = score2
    isGameOver = false; 
}

reset.addEventListener("click",resetfunc)

playingto.addEventListener("change",function(){
    winningScore = parseInt(this.value)
    resetfunc();
})

