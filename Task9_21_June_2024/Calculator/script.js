function createNewElement(element, value = "", atbt, atbtVal) {
    let newElement = document.createElement(element);
    newElement.setAttribute(atbt, atbtVal);
    newElement.innerHTML = value;
    return newElement;
}

function createCalculator() {
    const container = createNewElement("div", "", "class", "container");
    const calculator = createNewElement("div", "", "class", "calculator");
    const form = createNewElement("form");

    // Display
    const displayDiv = createNewElement("div", "", "class", "display");
    const displayInput = createNewElement("input", "", "type", "text");
    displayInput.setAttribute("name", "display");
    displayInput.setAttribute("id", "result");
    displayInput.value = "0";
    displayInput.readOnly = true;
    displayDiv.appendChild(displayInput);
    form.appendChild(displayDiv);

    // Button rows
    const rows = [
        ["C", "<-", ".", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["00", "0", "="]
    ];
    
    const buttonConfigs = {
        "C": { onclick: "clearDisplay()", style: "color:#FA484F", id: "clear" },
        "<-": { onclick: "backspace()", class: "font-color", id: "backspace" },
        ".": { onclick: "appendToDisplay('.')", class: "operator", id: "dot" },
        "/": { onclick: "appendToDisplay('/')", class: "operator", id: "division" },
        "*": { onclick: "appendToDisplay('*')", class: "operator", id: "multiply" },
        "-": { onclick: "appendToDisplay('-')", class: "operator", id: "subtract" },
        "+": { onclick: "appendToDisplay('+')", class: "operator", id: "add" },
        "=": { onclick: "calculate()", class: "equal operator", style: "background-color: #0D6EFD;color:#FFFFFF", id: "equal" }
    };

    rows.forEach(row => {
        const rowDiv = createNewElement("div");
        row.forEach(button => {
            const buttonElement = createNewElement("input", "", "type", "button");
            buttonElement.setAttribute("value", button);
            
            if (buttonConfigs[button]) {
                Object.entries(buttonConfigs[button]).forEach(([attr, value]) => {
                    buttonElement.setAttribute(attr, value);
                });
            } else {
                buttonElement.setAttribute("onclick", `appendToDisplay('${button}')`);
                buttonElement.setAttribute("class", "font-color");
                buttonElement.setAttribute("id", button === "00" ? "doubleZero" : button);
            }

            rowDiv.appendChild(buttonElement);
        });
        form.appendChild(rowDiv);
    });
    calculator.appendChild(form);
    container.appendChild(calculator);

    return container;
}

// Calculator functions
function appendToDisplay(value) {
    const display = document.getElementById('result');
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('result').value = '0';
}

function backspace() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1) || '0';
}

function calculate() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

// Add the calculator to the document
document.body.appendChild(createCalculator());

// Keyboard event handling
document.addEventListener('keydown', function(event) {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    
    if (validKeys.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    } 
    else {
        alert("Only numbers are allowed");
    }
    
    event.preventDefault();
});

// CSS for responsiveness
const style = document.createElement('style');
style.textContent = `
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .calculator {
        background-color: #f0f0f0;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    #display {
        width: 100%;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 24px;
        text-align: right;
    }
    input[type="button"] {
        width: 50px;
        height: 50px;
        font-size: 18px;
        margin: 5px;
        cursor: pointer;
    }
    @media (max-width: 480px) {
        .calculator {
            width: 100%;
            max-width: 300px;
        }
        input[type="button"] {
            width: 60px;
            height: 60px;
        }
    }
`;
document.head.appendChild(style);

