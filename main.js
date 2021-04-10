let activeNumber = '';
let activeOpertor= '';
let storedNumber = '';




function digitIsPressed(digit) {
    if(activeNumber.length > 13){
       return;
     }
     activeNumber += digit;
     console.log(digit);
     updateScreen();
     
   }


function operatorIsPressed(operator) {
activeOpertor = operator;
doMath();
storedNumber = activeNumber;
updateScreen();
activeNumber = '';
}

function equalsIsPressed() {
    doMath();
    updateScreen();
    activeNumber = '';
    storedNumber = '';
  
}
function clearScreen(){
    document.getElementById('screen').innerHTML = '';
    activeNumber = '';
    setoredNumber = '';
  }

function updateScreen() {
    document.getElementById('screen').innerHTML = activeNumber;
  
}
function doMath() {
   
    if (activeNumber && storedNumber && activeOpertor) {
        switch(activeOpertor) {
            case '+':
                activeNumber = parseFloat(storedNumber) + parseFloat(activeNumber);
                break;
                case '-' :  activeNumber = parseFloat(storedNumber) - parseFloat(activeNumber);
                break;
                case '/' :
                activeNumber = parseFloat(storedNumber) / parseFloat(activeNumber);
                break;
                case '*':
                activeNumber = parseFloat(storedNumber) * parseFloat(activeNumber); 
                break;
                
        }
    }
}