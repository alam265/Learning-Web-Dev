const numbers = [1,2,3,4,5,6,7,8,9,10];

const odd = numbers.filter((num)=>{
    if (num%2!==0){
        return num;
    }
});