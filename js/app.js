//Dom elements
let btnCalcular = document.getElementById('btnCalcular');
let firstInput = document.getElementById('firstInput');
let secondInput = document.getElementById('secondInput');
let lblResult = document.getElementById('lblResult');
//logic
function euclidesAlgorithm(firstNumber, secondNumber) {
    let c = Math.abs(firstNumber);
    let d = Math.abs(secondNumber);
    let r;

    while (d !== 0) {
        r = c % d;
        c = d;
        d = r;
    }

    return Math.abs(c);
}

function isNumber(number) {
    return number === '0' ||
        number === '1' ||
        number === '2' ||
        number === '3' ||
        number === '4' ||
        number === '5' ||
        number === '6' ||
        number === '7' ||
        number === '8' ||
        number === '9'
}

function isValidateNumber(number) {
    if(number === ''){
        return false;
    }else{
        for (let i = 0; i < number.length; i++) {       
            if (!isNumber(number.charAt(i))) {
                return false;
            }
        }
        return true;
    }
}

//Handle of events
btnCalcular.addEventListener('click', () => {
    try {
        
        let isValidateInput =  (isValidateNumber(firstInput.value) && 
        isValidateNumber(secondInput.value));

        if (isValidateInput) {

            let firstNumber = parseInt(firstInput.value);
            let secondNumber = parseInt(secondInput.value);

            if (secondNumber === 0) {
                throw new Error('El segundo elemento no puede ser 0');
            }

            lblResult.innerText =`El mcd (${firstNumber},${secondNumber}) = ${euclidesAlgorithm(firstNumber, secondNumber)}`;
            
        }else{
            throw new Error('Asegurese que la entrada son solo números');
        }

    } catch (err) {
        Swal.fire({
                text: err.message,
                icon: 'error',
            }
        );
    }
});