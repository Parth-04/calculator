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

function replace(array, oldValue, newValue){
    array.forEach((element,index,array) => {
        if (element === oldValue){
            array[index] = newValue;
        }
    })
}


let finalExpression = [];
let buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
    button.addEventListener('click',() => {
        let display = document.querySelector(".display");
            if (button.textContent === 'AC'){
                display.innerHTML = `<p> </p>`;
                finalExpression = [];
            }
            else if(['/','x','+','-'].includes(button.textContent)){
                console.log(display.textContent.trim());
                finalExpression.push(display.textContent.trim());
                finalExpression.push(button.textContent);
                console.log(finalExpression);
                display.innerHTML = `<p> </p>`;
            }
            else if(button.textContent === '+/-'){
    
            }
            else if(button.textContent === '%'){
                
            }
            else if(button.textContent === '='){
                finalExpression.push(display.textContent.trim());
                replace(finalExpression, '', '0');
                console.log(finalExpression);
                
                finalExpression.forEach((value,index,array) => {
                    if(value == '/'){
                        result = Number(array[index-1]) / Number(array[index+1]);
                        array.splice(index-1,3,result);
                    }
                })
                console.log(finalExpression);
                finalExpression.forEach((value,index,array) => {
                    if(value == 'x'){
                        result = Number(array[index-1]) * Number(array[index+1]);
                        array.splice(index-1,3,result);
                    }
                })
                console.log(finalExpression);
                finalExpression.forEach((value,index,array) => {
                    if(value == '+'){
                        result = Number(array[index-1]) + Number(array[index+1]);
                        array.splice(index-1,3,result);
                    }
                })
                console.log(finalExpression);
                finalExpression.forEach((value,index,array) => {
                    if(value == '-'){
                        result = Number(array[index-1]) - Number(array[index+1]);
                        array.splice(index-1,3,result);
                    }
                })
                console.log(finalExpression);

                
                console.log(finalExpression);

                finalExpression = [];
            }
            else{
                display.innerHTML += `${button.textContent}`;
            }
    })
})