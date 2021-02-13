"use strict";

// ----  Assignments during the start of the program --- 

let indexVal = 0;                               // Setting the index of the Array of Numbers
let operationSign = "";                         // To fetch the operation sign (+ , - , /, *)
let clickOperation = false;                     // To identify if any operator has been clicked or not
let str = "";                                   // To show the output
let operandStrValue = 0;                        // To accept the Numbers and concatenate all digits 
let result = 0;                                 // To store the calculated result
let operand = [];                               // Declaring the array of numbers as empty array Literal
let operator = [];                              // To save the operators in an array

// ---------------------------------------------------------

// ---- funtion to accept numbers from the buttons----
function num(val){

        operandStrValue = Number(operandStrValue + val);                // String operand = previous value + "<number input>"
        if(isNaN(operandStrValue))                                      // To check if the input is a valid number or not
        alert("Invalid input detected! Kindly press delete and start input numbers");
        document.getElementById("txt1").value = operandStrValue;  // Value from number button is shown in the text box after clicking  
   
}
//-----------------------------------------------------------

// ---- function to Clear the text box -------------
function clr(val0){

    
    indexVal = val0;                            // Setting the index of the Array of Numbers
    operationSign = "";                         // To fetch the operation sign (+ , - , /, *)
    clickOperation = false;
    str = "";                                   // To show the output
    operandStrValue = 0;
    result = 0;                                 // To store the calculated result
    operand = [];                               // Declaring the array of numbers as empty array Literal
    operator = [];     
    document.getElementById("txt1").value = 0;
    document.getElementById("lbl").textContent = "Deleted successfully";
}
//-------------------------------------------------------------------

// ---- function to place decimal point

function putPoint(){
    operandStrValue = operandStrValue + ".";
    document.getElementById("txt1").value = operandStrValue;
}

//--------------------------------------------------------------------



// ---- function to accept the airthematic operators from buttons---------
function passOperator(sign){

    clickOperation = true;                      
    operationSign = sign;                                       // Read the operator and assign it as string to operationSign variable
    str = document.getElementById("lbl").textContent  = `${str} ${operandStrValue} ${operationSign}`;
                                                          // To display in the Label 
    if(clickOperation == true){
        operand[indexVal] = Number(operandStrValue);              // Converting the concatenated String value to a Number 
        clickOperation = false;
        operandStrValue = 0;
    }
       
    document.getElementById("txt1").value = 0;                  // The textbox should be 0 if an operator has been clicked
    operand.push(0);                                            // Dynamically create the Next array index to accept new number value in it

// -----------Operation for Addition of numbers ------------------------------------  
     
    if(operationSign == '+'){
        if(indexVal == 0)                                       // for the first index
        operator[indexVal] = operationSign;
        else{
            // To check the operator of previous index of the operator[] array
            if(operator[indexVal-1] == '+'){                    
                result = operand[indexVal] + operand[indexVal-1];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }

            if(operator[indexVal-1] == '-'){
                result = operand[indexVal-1] - operand[indexVal];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }
            
            if(operator[indexVal-1] == 'x'){
                result = operand[indexVal] * operand[indexVal-1];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }

            if(operator[indexVal-1] == '/'){
                result = operand[indexVal-1] / operand[indexVal];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }
        }

        operator.push('');                                  // dynamically inserting an empty elemnt to operator[]
    }


// -----------Operation for Substraction of numbers ------------------------------------  

    if(operationSign == '-'){
        if(indexVal == 0)
        operator[indexVal] = operationSign;
        else{
            if(operator[indexVal-1] == '+'){
                result = operand[indexVal] + operand[indexVal-1];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }

            if(operator[indexVal-1] == '-'){
                result = operand[indexVal-1] - operand[indexVal];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }
            
            if(operator[indexVal-1] == 'x'){
                result = operand[indexVal] * operand[indexVal-1];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }

            if(operator[indexVal-1] == '/'){
                result = operand[indexVal-1] / operand[indexVal];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }
        }

        operator.push('');
    }

// -----------Operation for Multiplication of numbers ------------------------------------  

        if(operationSign == 'x'){
            if(indexVal == 0)
            operator[indexVal] = operationSign;
            else{
                if(operator[indexVal-1] == '+'){
                    result = operand[indexVal] + operand[indexVal-1];
                    operand[indexVal] = result;
                    operator[indexVal] = operationSign;
                }
    
                if(operator[indexVal-1] == '-'){
                    result = operand[indexVal-1] - operand[indexVal];
                    operand[indexVal] = result;
                    operator[indexVal] = operationSign;
                }
                
                if(operator[indexVal-1] == 'x'){
                    result = operand[indexVal] * operand[indexVal-1];
                    operand[indexVal] = result;
                    operator[indexVal] = operationSign;
                }
    
                if(operator[indexVal-1] == '/'){
                    result = operand[indexVal-1] / operand[indexVal];
                    operand[indexVal] = result;
                    operator[indexVal] = operationSign;
                }
            }
    
            operator.push('');
        }


// -----------Operation for Division of numbers ------------------------------------  

    if(operationSign == '/'){
        if(indexVal == 0)
        operator[indexVal] = operationSign;
        else{
            if(operator[indexVal-1] == '+'){
                result = operand[indexVal] + operand[indexVal-1];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }

            if(operator[indexVal-1] == '-'){
                result = operand[indexVal-1] - operand[indexVal];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }
            
            if(operator[indexVal-1] == 'x'){
                result = operand[indexVal] * operand[indexVal-1];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }

            if(operator[indexVal-1] == '/'){
                result = operand[indexVal-1] / operand[indexVal];
                operand[indexVal] = result;
                operator[indexVal] = operationSign;
            }
        }

        operator.push('');
    }
    
    indexVal++;                                                 // Incrementing the index    
   
    
}
//----------------------------------------------------------------------

// ---- function to calutate after hitting Equals sign ----------------------
function eql(){

    //-- Itendifying the position of last operator as it is not getting into the array -- 
    let pos = str.charAt(str.length-1);

    //-- Calculating the result w.r.t each operator
    if(pos == "+")
    result = Number(document.getElementById("txt1").value) + result;
    if(pos == "-")
    result = result - Number(document.getElementById("txt1").value);
    if(pos == "x")
    result = result * Number(document.getElementById("txt1").value);
    if(pos == "/")
    result = result / Number(document.getElementById("txt1").value);

    if(!isNaN(result)){  //--- To pring only if the Result is a Number  (isNaN not true)

    // Written the text content of the label using string literal template
    document.getElementById("lbl").textContent = `${str} ${document.getElementById("txt1").value}  = ${result}`;
 
    }
    else{

        indexVal = val0;                            // Re-Setting the index of the Array of Numbers
        operationSign = "";                         // Emptying the operation sign (+ , - , /, *)
        clickOperation = false;
        str = "";                                   // Output string has been emptied
        operandStrValue = 0;
        result = 0;                                 // Emptied calculated result
        operand = [];                               // Emptied the array of numbers as empty array Literal
        operator = [];     
        document.getElementById("txt1").value = 0;

        alert("You have made wrong inputs, so output couldn't be shown. Try again");
    }

}
//------------------------------------------------------------------------------------------------------------------------

