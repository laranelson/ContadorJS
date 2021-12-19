var currentNumberWrapper1 = document.getElementById("currentNumber1");
var rotulo = document.getElementById("rotulo");
var currentNumber = 0;




function increment(){

    if (currentNumber == -1 ){
        currentNumber = currentNumber +1;
        currentNumberWrapper1.innerHTML = currentNumber;
        currentNumberWrapper1.className = "text-nowrap bd-highlight";
        rotulo.className = "text-nowrap bd-highlight";
        rotulo.innerHTML = "ZERO";

    } else if (currentNumber < 0 ){
        currentNumber = currentNumber +1;
        currentNumberWrapper1.innerHTML = currentNumber;
        rotulo.innerHTML = "NEGATIVO";
    
    } else {
        currentNumber = currentNumber +1;
        currentNumberWrapper1.innerHTML = currentNumber;
        rotulo.innerHTML = "POSITIVO";
        
        }
}

function decrement(){

    if (currentNumber == 1 ){
        currentNumber = currentNumber -1;
        currentNumberWrapper1.innerHTML = currentNumber;
        rotulo.innerHTML = "ZERO";

    } else if (currentNumber > 0 ){
        currentNumber = currentNumber -1;
        currentNumberWrapper1.innerHTML = currentNumber;
        rotulo.innerHTML = "POSITIVO";
        
    } else {
        currentNumber = currentNumber -1;
        currentNumberWrapper1.innerHTML = currentNumber;
        rotulo.innerHTML = "NEGATIVO";
        currentNumberWrapper1.className = "text-danger bd-highlight";
        rotulo.className = "text-danger bd-highlight";
            
    }   
}