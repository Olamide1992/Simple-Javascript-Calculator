//Build a basic arithmetic calculator without a frontend
//The calculator should be able to perform basic operations like Addition, Subtraction, Multiplication, & Division

//1 create a function for each of the operator
//2 create a function to do the calculation. inside this function, create a varable to take the first and second number from the user and also 
//3 to take operator variable from the user
//4 create a loop for the operators
//5 and break the loop if the user enters invalid  variables.


function add(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}

function Multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}




function my_caculator(){
    var a = prompt("Enter first number");
    var b = prompt("Enter second number");
    var operator = prompt("Enter operator");
    var result = 0;
    if (operator === "+") {
        result = add(a, b);
    }
    else if (operator === "-") {
        result = substract(a, b);
    }
    else if (operator === "*") {
        result = Multiply(a, b);
    }
    else if (operator === "/") {
        result = divide(a, b);
    }
    else {
    alert("Please enter a valid operator");
    }
    alert(result);
}
my_caculator()