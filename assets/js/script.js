var currentNumberWrapper1 = document.getElementById("currentNumber1");
var currentNumberWrapper2 = document.getElementById("currentNumber2");
var currentNumber = 0;




function increment(){

    if (currentNumber == -1 ){
        currentNumber = currentNumber +1;
        currentNumberWrapper1.innerHTML = currentNumber;
        currentNumberWrapper1.className = "text-nowrap bd-highlight";
        currentNumberWrapper2.className = "text-nowrap bd-highlight";
        currentNumberWrapper2.innerHTML = "ZERO";

    } else if (currentNumber < 0 ){
        currentNumber = currentNumber +1;
        currentNumberWrapper1.innerHTML = currentNumber;
        currentNumberWrapper2.innerHTML = "NEGATIVO";
    
    } else {
        currentNumber = currentNumber +1;
        currentNumberWrapper1.innerHTML = currentNumber;
        currentNumberWrapper2.innerHTML = "POSITIVO";
        
        }
}

function decrement(){

    if (currentNumber == 1 ){
        currentNumber = currentNumber -1;
        currentNumberWrapper1.innerHTML = currentNumber;
        currentNumberWrapper2.innerHTML = "ZERO";

    } else if (currentNumber > 0 ){
        currentNumber = currentNumber -1;
        currentNumberWrapper1.innerHTML = currentNumber;
        currentNumberWrapper2.innerHTML = "POSITIVO";
        
    } else {
        currentNumber = currentNumber -1;
        currentNumberWrapper1.innerHTML = currentNumber;
        currentNumberWrapper2.innerHTML = "NEGATIVO";
        currentNumberWrapper1.className = "text-danger bd-highlight";
        currentNumberWrapper2.className = "text-danger bd-highlight";
            
    }   
}