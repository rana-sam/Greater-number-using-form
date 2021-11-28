

function greater() {
    var Dom=document
var num1=Dom.getElementById("number1")
var num2=Dom.getElementById("number2")
var output=Dom.getElementById("output")
var number1=parseInt(num1.value)
var number2=parseInt(num2.value)

    if (number1>number2) {
        output.innerHTML="Output:First number is greater"
    }
    else if( number2>number1){
        output.innerHTML="Output:Second number is greater" 
    }
    else{
        output.innerHTML="Output:Numbers are Equal"
    }
    
    num1.value=""
    num2.value=""
}
