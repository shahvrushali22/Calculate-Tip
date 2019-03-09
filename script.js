//Script.js
//window.alert("Hello World");
function calculateTip(){
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    if(billAmount === "" || serviceQuality == 0){
        window.alert("Please add some values to make this baby running up");
        return; //this would exit the function
        
    }
    if(numPeople === "" || numPeople <= 1){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
        
    }else{
        document.getElementById("each").style.display="block";
        
    }
    
    var tipAmount = (billAmount * serviceQuality)/numPeople;
    tipAmount = tipAmount.toFixed(2);
    document.getElementById("tip").innerHTML = tipAmount;
    document.getElementById("totalTip").style.display ="block";
    
}
document.getElementById("totalTip").style.display = "none";

document.getElementById("btnCalculate").onclick = function(){
//    code which has to be performed when the button is clicked!
    calculateTip();
}