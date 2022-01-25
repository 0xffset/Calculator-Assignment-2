document.addEventListener("DOMContentLoaded", function(e) {
  let body = document.querySelector('body');
  let result = document.querySelector('#output');
  // Clear button calling
  let clearButton =  document.querySelector("#clear");
  let historyButton = document.querySelector("#history");
  let equalButton = document.querySelector("#equal");
  // Delete one sign button
  let deleteOneSign = document.querySelector("#remove");
  // Operational Numbers
 let OperationalNumbers = document.querySelectorAll("#OperationalButton");

 // Numbers
 let numbers = document.querySelectorAll("#numbers");
let initialValue = "";

// Loop through all `Numbers` IDs
numbers.forEach((numbers, i)=> {
    numbers.addEventListener('click', function() {
        let text = this.innerHTML;
        initialValue += text;
        result.value = initialValue; 
    });
});

// Loop through all `Operational Numbers` IDs
OperationalNumbers.forEach((OperationalNumbers, i)=>{
OperationalNumbers.addEventListener('click', function(){
    let text = this.innerHTML;
    if(consecutiveSigns()) {
            initialValue += text;
            result.value = initialValue;
        }
    });
});

// Check if exists another operational sign 
function consecutiveSigns() {
    const lastSign =  document.getElementById("output").value;
    let regexPattern =  lastSign.substr(lastSign.length -1).match(/\d+/g);
    return regexPattern != null? true: false;
     
}
// Clear all
clear.addEventListener('click', function() {
    result.value="";
    initialValue ="";
});

// Delete Single Digit
deleteOneSign.addEventListener('click', function() {
    result.value = result.value.substring(0, result.value.length-1);
    initialValue = result.value;
});
// Equal Clicked
    equalButton.addEventListener('click',function(){
    if (result.value != "") {
            if (!consecutiveSigns()) {
                let newOperation = result.value.substr(0, result.value.length-1);
                result.value = eval(newOperation);
                initialValue= eval(newOperation);
    document.getElementById("output").value =  result.innerHTML;
            } else {
        result.value = eval(result.value);
        initialValue = eval(result.value);
        }
    }
    else {
        alert("Please, enter any operation to compute");
        }
    });
});


