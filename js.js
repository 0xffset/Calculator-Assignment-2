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

let initialValue = "";
// Loop through all `Operational Numbers` IDs
OperationalNumbers.forEach((OperationalNumbers, i)=>{
OperationalNumbers.addEventListener('click', function(){
    let text = this.innerHTML;
    initialValue += text;
    result.value = initialValue;
});
});


// Equal Clicked
    equalButton.addEventListener('click',function(){
    if (result.value != "") {
        result.value = eval(result.value);
        initialValue = eval(result.value);
    }
    else {
        alert("Please, enter any operation to compute");
    }
});
});


