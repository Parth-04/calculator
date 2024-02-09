function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operator(num1, num2, operator){
    if (operator === '+'){
        return add(num1,num2);
    }
    else if (operator === '-'){
        return subtract(num1,num2);
    }
    else if (operator === '*'){
        return multiply(num1,num2);
    }
    else if (operator === '/'){
        return divide(num1,num2);
    }
    else{
        console.log("Error!");
    }
}



let finalexpression = ``;
let buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click',() => {
        let display = document.querySelector(".display");
            if (button.textContent === 'AC'){
                display.innerHTML = `<p> </p>`;
            }
            else if(['/','x','+','-'].includes(button.textContent)){
                finalexpression += display.textContent;
                finalexpression += button.textContent;
                console.log(finalexpression);
                display.innerHTML = `<p> </p>`;

            }
            else if(button.textContent === '+/-'){
    
            }
            else if(button.textContent === '%'){
                
            }
            else if(button.textContent === '='){
                finalexpression += display.textContent;
            }
            else{
                display.innerHTML += `${button.textContent}`;
                console.log(display.textContent);
            }
    })
})