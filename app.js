function getpin(){
    const pin = generatePin();
    const pinStr = pin + '';
    // console.log(typeof pinStr.length);
    if(pinStr.length === 4){
        return pin;
    }else{
        return getpin();
    }
}

function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('pin-generate').addEventListener('click', function(){
    const pin = getpin();
    if(pin==undefined) {
        console.log(pin);
    }
    const getIputFild = document.getElementById('input-fild');
    getIputFild.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const displayInputFild = document.getElementById('display-input-fild');
    const previousDisplayValue = displayInputFild.value;
    if(isNaN(number)){
        if(number === 'C'){
            displayInputFild.value = '';
        }else if(number === '<'){
            const digit = previousDisplayValue.split('');
            digit.pop();
            const remainigDigits = digit.join('');
            displayInputFild.value = remainigDigits;
        }
    }else{
        const courrentDisplayValue = previousDisplayValue + number;
        displayInputFild.value = courrentDisplayValue;
    }
})

document.getElementById('verify-btn').addEventListener('click', function(){
    const getIputFild = document.getElementById('display-input-fild');
    const getValue = getIputFild.value;
    const pinValue = document.getElementById('input-fild');
    const getPin = pinValue.value;
    if(getPin == getValue){
        document.getElementById('correct').style.display = "block";
        document.getElementById('not-correct').style.display = "none";
    }else{
        document.getElementById('not-correct').style.display = "block";
        document.getElementById('correct').style.display = "none";
    }

})