let counter = 0 ;

const counterValue = document.getElementById("counter-value");
const incremantBtn = document.getElementById("increment-btn");
const decremantBtn = document.getElementById("decrement-btn");
const resetBtn = document.querySelector("#reset")

incremantBtn.addEventListener("click" ,()=>{
    counter+= 2;
    counterVal2e.innerHTML= counter;


})

decremantBtn.addEventListener("click" ,()=>{
    counter-= 2;
    counterValue.innerHTML= counter;
    

})
resetBtn.addEventListener("click" , reset);
function reset(){
    counter = 0;
    counterValue.innerHTML= counter;
}