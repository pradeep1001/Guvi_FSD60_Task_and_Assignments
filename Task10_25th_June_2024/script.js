let count = 10;

const updateDisplay = (text) => document.body.innerHTML = text;

const countdown = () => {
    updateDisplay(count);
    count--;
    
    if (count > 0) {
        setTimeout(countdown, 1000);
    } else {
        setTimeout(() => updateDisplay("Happy Independence Day"), 1000);
    }
};

setTimeout(countdown, 0);