document.addEventListener("DOMContentLoaded", function(e) {
 let localStorageKeyName = 'data';
  loadFromLocalStorage();
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
     let operation = {};
    if (result.value != "") {
            let ope = "", res = 0;
            if (!consecutiveSigns()) {
                let newOperation = result.value.substr(0, result.value.length-1);
                result.value = eval(newOperation);
                initialValue= eval(newOperation);
                ope = newOperation;
                res = result.value;
            } else {
        ope = result.value;
        result.value = eval(result.value);
        initialValue = eval(result.value);
        res = result.value;
        }
        operation.result = res;
        operation.operation = ope;
    }
    
    else {
        alert("Please, enter any operation to compute");
        }
    setToLocalStorage(operation);
    loadFromLocalStorage();
    });


// Local Storage Operations
function setToLocalStorage(obj) {
    let operations = [], dataInLocalStorage = localStorage.getItem(localStorageKeyName);
    if (dataInLocalStorage !== null) {
        operations = JSON.parse(dataInLocalStorage);
    }
    operations.push(obj);
    localStorage.setItem(localStorageKeyName, JSON.stringify(operations));
}

function loadFromLocalStorage() {
    let operations  = [],
        dataInLocalStorage = localStorage.getItem(localStorageKeyName),
        gridHistorial = document.querySelector("#grid-historial tbody");

        if (dataInLocalStorage !== null) {
            operations = JSON.parse(dataInLocalStorage);
        }
        gridHistorial.innerHTML = '';
        
        operations.forEach(function(x,i) {
            let tr =  document.createElement("tr"),
            tdOperations = document.createElement("td"),
            tdResult  =  document.createElement("td"),
            tdRemove = document.createElement("td"),
            btnRemove = document.createElement("button");

        tdOperations.innerHTML = x.operation;
        tdResult.innerHTML = x.result;
 
        btnRemove.textContent = 'Remove';
        btnRemove.className = 'btn-remove';
        btnRemove.addEventListener('click', function() {
            removeFromLocalStorage(i);
        })
        tdRemove.appendChild(btnRemove);

        tr.appendChild(tdOperations);
        tr.appendChild(tdResult);
        tr.appendChild(tdRemove);
        gridHistorial.appendChild(tr);
        });
}

function removeFromLocalStorage(i) {
        let operations =[],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);
        
        operations = JSON.parse(dataInLocalStorage);
        operations.splice(i,1);
        localStorage.setItem(localStorageKeyName, JSON.stringify(operations));
        loadFromLocalStorage();
    }
});



