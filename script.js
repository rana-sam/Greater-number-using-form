// program 1
var dom = document

function greater() {
    var num1 = dom.getElementById("number1")
    var num2 = dom.getElementById("number2")
    var output = dom.getElementById("output")
    var number1 = parseInt(num1.value)
    var number2 = parseInt(num2.value)

    if (number1 > number2) {
        output.innerHTML = "Output:First number is greater" + " " + number1
    }
    else if (number2 > number1) {
        output.innerHTML = "Output:Second number is greater" + " " + number2
    }
    else if (number1 == number2) {
        output.innerHTML = "Output:Numbers are Equal" + " " + number1 + "=" + number2
    }
    else {
        output.innerHTML = "Output:Enter Valid Number"

    }

    num1.value = ""
    num2.value = ""
}

//  program 2

function greater3() {
    var num1 = dom.getElementById("numb1")
    var num2 = dom.getElementById("numb2")
    var num3 = dom.getElementById("numb3")
    var output = dom.getElementById("outp")
    var number1 = parseInt(num1.value)
    var number2 = parseInt(num2.value)
    var number3 = parseInt(num3.value)

    if (number1 > number2 && number1 > number3) {
        outp.innerHTML = "Output:First number is greater" + " " + number1
    }
    else if (number2 > number1 && number2 > number3) {
        outp.innerHTML = "Output:Second number is greater" + " " + number2
    }
    else if (number3 > number1 && number3 > number2) {
        output.innerHTML = "Output:Third number is greater" + " " + number3
    }
    else if (number1 == number2 && number2 == number3) {
        outp.innerHTML = "Output:Numbers are Equal" + " " + number1 + "=" + number2 + "=" + number3
    }
    else {
        outp.innerHTML = "Output:Enter Valid Number"

    }

    num1.value = ""
    num2.value = ""
    num3.value = ""
}


// program 3

function anynumber() {
    var num = dom.getElementById("anynumber")
    var number = parseInt(num.value)
    if (number > 0) {
        anyoutput.innerHTML = "Output:" + " " + number + " " + "is positive number"
    }
    else if (number < 0) {
        anyoutput.innerHTML = "Output:" + " " + number + " is Negative number "
    }
    else if (number = 0) {
        anyoutput.innerHTML = "Output:" + " " + number + " " + " is zero"

    }
    else {
        anyoutput.innerHTML = "Output:Enter Valid Number"

    }
    num.value = ""
}


// program 4

function divided() {
    var number = dom.getElementById("divnumber")
    var num = number.value
    if (num >= 0 || num <= 0) {


        if (num % 5 == 0 && num % 11 == 0) {
            divoutput.innerHTML = "Output: " + num + " is divided on Both 5 and 11"
        }
        else if (num % 5 == 0) {
            divoutput.innerHTML = "Output: " + num + " is divisibale on 5"
        }
        else if (num % 11 == 0) {
            divoutput.innerHTML = "Output: " + num + " is divisibale on 11"
        }
        else {
            divoutput.innerHTML = "Output: " + num + " is Not divisibale on 11 or 5"
        }
    }
    else {
        divoutput.innerHTML = "Output: Enter Valid Number"
    }
    number.value = ""
}


// program 5
function even() {
    var number = dom.getElementById("evnumber")
    var num = parseInt(number.value)
    if (num >= 0 || num <= 0) {

        if (num % 2 == 0) {
            evoutput.innerHTML = "Output:" + num + " is Even Number"
        }
        else {
            evoutput.innerHTML = "Output:" + num + " is Odd Number"
        }
    }
    else {
        evoutput.innerHTML = "Output: Enter Valid Number"
    }
    number.value = ""

}
// program 6
function leap() {
    var number = dom.getElementById("lenumber")
    var num = parseInt(number.value)
    if (num <= 12 && num>0) {


            if (num % 4 == 0) {
                leoutput.innerHTML = "Output:" + num + " is leap Year"
            }
            else {
                leoutput.innerHTML = "Output:" + num + " is Not Leap Year"
            }
    
    }
    else {
        leoutput.innerHTML = "Output: Enter Valid Number"
    }
    number.value = ""

}

// program 7

function month() {

    var number=dom.getElementById("monumber")
    var num=parseInt(number.value)
    if (num>0 && num<=12) {
        if (num==2) {
            mooutput.innerHTML="Output:There Is 28 Days In This Month"            
        }
        else if (num==1||num==3||num==5||num==7||num==8||num==10||num==12) {
            mooutput.innerHTML="Output:There Is 31 Days In This Month"            

        }
        else{
            mooutput.innerHTML="Output:There Is 30 Days In This Month"            

        }
        
    }
    else{
        mooutput.innerHTML="Output:Please Enter Valid Month"            

    }
     number.value=""
}



// program 8

function alphabat() {
    var ch=dom.getElementById("alpha")
    var char=ch.value
    if (char>='A' && char<='Z' || char>='a' && char<='z') {
        alphaoutput.innerHTML="Output: "+char+" Is Alphabat"
    }
    else{
        alphaoutput.innerHTML="Output: "+char+" Is Not A Alphabat"
    }
    ch.value=""
}


// program 9
function vowel() {
    var ch=dom.getElementById("vowel")
    var char=ch.value
    if (char>='A' && char<='Z' || char>='a' && char<='z') {
        if (char=='A'||char=='a'||char=='e'||char=='E'||char=='i'||char=='I'||char=='o'||char=='O'||char=='u'||char=='U') {
            
            voweloutput.innerHTML="Output: "+char+" Is Vowel Alphabat"
        }
        else{
            voweloutput.innerHTML="Output: "+char+" Is Consonant Alphabat"

        }
    }
    else{
        voweloutput.innerHTML="Output: "+char+" Is Not A Alphabat"
    }
    ch.value=""
}


// program 10
 
function character() {

    var ch=dom.getElementById("char")
    var char=ch.value
    if (char<=0 || char>=0) {
        charoutput.innerHTML="Output: "+char+" is Digit"
    }
    else if ((char>='a' && char<='z') || (char>='A' && char<='Z') ) {
        
        charoutput.innerHTML="Output: "+char+" is Alphabat"
    }
    else{
        
        charoutput.innerHTML="Output: "+char+" is Special Character"
    }
    ch.value=""
}


// program 11

function uppercase() {
    var ch=dom.getElementById("upper")
    var char=ch.value
    if (char>='A' && char<='Z' ) {
        upperoutput.innerHTML="Output: "+char+" Is Uppercase Alphabat"
    }
    else if (char>='a' && char<='z') {
        
        upperoutput.innerHTML="Output: "+char+" Is A Lowercase Alphabat"
    }
    else{
        upperoutput.innerHTML="Output: "+char+" Is Not A Alphabat"

    }
    ch.value=""
}



// program 12
function week() {
    var num=dom.getElementById("week")
    var num1=parseInt(num.value)
    if (num1==1) {
        weekoutput.innerHTML="Output: Monday"
        
    }
    else if(num1==2) {
        weekoutput.innerHTML="Output: Tuseday"
        
    }
    else if(num1==3) {
        weekoutput.innerHTML="Output: Wednesday"
        
    }
    else if(num1==4) {
        weekoutput.innerHTML="Output: Thursday"
        
    }
    else if(num1==5) {
        weekoutput.innerHTML="Output: Friday"
        
    }
    else if(num1==6) {
        weekoutput.innerHTML="Output: Saturday"
        
    }
    else if(num1==7) {
        weekoutput.innerHTML="Output: Sunday"
        
    }
    else{
        
        weekoutput.innerHTML="Output: Enter Valid Number From 1-7"
    }
    num.value=""
    
}


// program 13

function subject() {
    var phy=dom.getElementById("phy")
    var che=dom.getElementById("che")
    var mat=dom.getElementById("math")
    var bio=dom.getElementById("bio")
    var com=dom.getElementById("com")
    var num1=parseInt(phy.value)
    var num2=parseInt(che.value)
    var num3=parseInt(mat.value)
    var num4=parseInt(bio.value)
    var num5=parseInt(com.value)

    var perc=((num1+num2+num3+num4+num5)/500)*100
    if (perc<=100 && perc>=0) {
        peroutput.innerHTML="Output Percentage: "+perc+"%" 
    }
    else  {
        peroutput.innerHTML="Output Percentage: Enter valid number" 
        
    }



    if (perc>=90 && perc<=100) {
        graoutput.innerHTML="Output Grade: A"
    }
    else if (perc>=80 && perc<=100) {
        graoutput.innerHTML="Output Grade: B"
    }
    else if (perc>=70 && perc<=100) {
        graoutput.innerHTML="Output Grade: C"
    }
    else if (perc>=60 && perc<=100) {
        graoutput.innerHTML="Output Grade: D"
    }
    else if (perc>=40 && perc<=100) {
        graoutput.innerHTML="Output Grade: E"
    }
    else if (perc>=0 && perc<40) {
        graoutput.innerHTML="Output Grade: F"
    }
    else{
        graoutput.innerHTML="Output Grade: Enter Valid Number"
    }
     phy.value=""
     mat.value=""
     che.value=""
     bio.value=""
     com.value=""
    
}