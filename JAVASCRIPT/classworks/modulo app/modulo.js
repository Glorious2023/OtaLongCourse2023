function modulo(){
    var value1=document.getElementById("val1").value
    var value2 =document.getElementById("val2").value
    var remainder = Number (value1) % Number (value2)
    document.getElementById("answer").innerHTML=remainder
}