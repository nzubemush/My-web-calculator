function myPowerButton() {
    var y = document.getElementById("powerButton").innerHTML;

    function pwrOn() { document.getElementById("powerButton").innerHTML = "ON" };
    function pwrOff() { document.getElementById("powerButton").innerHTML = "OFF" };

    switch (y) {
        case "OFF": pwrOn(); document.getElementById("input").style.background = "grey";
            break;
        case "ON": pwrOff(); document.getElementById("input").style.background = "";
    }
}

//function that display value 
function dis(num) {
    let inputVar = document.getElementById("input");
    inValue = inputVar.value;
    switch (num) {
        case 1:
            inputVar.value += "1";
            break;
        case 2:
            inputVar.value += "2";
            break;
        case 3:
            inputVar.value += "3";
            break;
        case 4:
            inputVar.value += "4";
            break;
        case 5:
            inputVar.value += "5";
            break;
        case 6:
            inputVar.value += "6";
            break;
        case 7:
            inputVar.value += "7";
            break;
        case 8:
            inputVar.value += "8";
            break;
        case 9:
            inputVar.value += "9";
            break;
        case 0:
            inputVar.value += "0";
            break;
        case '.':
            if (!inValue.includes('.')) {
                inputVar.value += ".";
            }
    }
}

//function that clear the display 
function clr() {
    document.getElementById("input").value = "";
}

// function that deletes like backspace
function backspace() {
    let inputVar = document.getElementById("input")
    let x = inputVar.value;
    if (x.length > 0) {
        x = x.substring(0, x.length - 1);
        inputVar.value = x;
    }
}

function compute() {
    let inputVar = document.getElementById("input");
    ans = Math.floor(+eval(inputVar.value));
    document.getElementById("input").value = '=' + ans;
}

// function that does the mathematical operations
function getOperand(operand) {
    let inputVar = document.getElementById("input");
    switch (operand) {
        case '+':
            inputVar.value += '+';
            break;
        case '-':
            inputVar.value += '-';
            break;
        case 'x':
            inputVar.value += '*';
            break;
        case '/':
            inputVar.value += '/';
            break;
    }
}