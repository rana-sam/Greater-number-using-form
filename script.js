// program 1

function greater() {
    var Dom=document
var num1=Dom.getElementById("number1")
var num2=Dom.getElementById("number2")
var output=Dom.getElementById("output")
var number1=parseInt(num1.value)
var number2=parseInt(num2.value)

    if (number1>number2) {
        output.innerHTML="Output:First number is greater" + " " +number1
    }
    else if( number2>number1){
        output.innerHTML="Output:Second number is greater" + " " + number2
    }
    else if( number1==number2){
        output.innerHTML="Output:Numbers are Equal" + " " + number1 + "=" +number2
    }
    else{
        output.innerHTML="Output:Enter Valid Number"

    }
    
    num1.value=""
    num2.value=""
}

//  program 2

function greater3() {
    var Dom=document
var num1=Dom.getElementById("numb1")
var num2=Dom.getElementById("numb2")
var num3=Dom.getElementById("numb3")
var output=Dom.getElementById("outp")
var number1=parseInt(num1.value)
var number2=parseInt(num2.value)
var number3=parseInt(num3.value)

    if (number1>number2 && number1>number3) {
        outp.innerHTML="Output:First number is greater" + " " +number1
    }
    else if( number2>number1 && number2>number3){
        outp.innerHTML="Output:Second number is greater" + " " + number2
    }
    else if( number3>number1 && number3>number2){
        output.innerHTML="Output:Third number is greater" + " " + number3
    }
    else if(number1==number2 &&number2==number3){
        outp.innerHTML="Output:Numbers are Equal" + " " + number1 + "=" +number2 + "=" +number3
    }
    else{
        outp.innerHTML="Output:Enter Valid Number"

    }
    
    num1.value=""
    num2.value=""
    num3.value=""
}


// program 3

function anynumber() {
    var dom=document
    var num=dom.getElementById("anynumber")
    var number=parseInt(num.value)
    if (number>0) {
        anyoutput.innerHTML="Output:"+ " "+number+" "+"is positive number"
    }
    else if(number<0){
        anyoutput.innerHTML="Output:"+ " "+number+" is Negative number "
    }
    else if(number=0){
        anyoutput.innerHTML="Output:"+ " "+number+" "+" is zero"
        
    }
    else{
        anyoutput.innerHTML="Output:Enter Valid Number"

    }
    num.value=""
}


// program 4