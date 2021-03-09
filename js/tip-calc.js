document.getElementById("name-btn").addEventListener("click", userName);

function userName(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value; 
    
    document.getElementById("userName").innerHTML = firstName.toUpperCase() + " " + lastName.toUpperCase();
}
    
document.getElementById("calc-btn").addEventListener("click", answer);
function answer(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;       
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    result = num1 + num2;
    document.getElementById("answer").innerHTML = result;
    
}
    