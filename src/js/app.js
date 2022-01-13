//Dom elements
let btnCalcular = document.getElementById('btnCalcular');
let firstInput = document.getElementById('firstInput');
let secondInput = document.getElementById('secondInput');

//logic
function euclidesAlgorithm(firstNumber,secondNumber){
    if(secondNumber === 0){
        throw new Error('El segundo elemento no puede ser 0');
    }

    let c = Math.abs(firstNumber);
    let d = Math.abs(secondNumber);
    let r;

    while(d !== 0){
        r = c % d;
        c = d;
        d = r;
    }
    
    return Swal.fire({
            title: 'Resultado',
            text:`El mcd (${firstNumber},${secondNumber}) es: ${Math.abs(c)}`,
            icon: 'success'
        }
    );
}

//Handle of events
btnCalcular.addEventListener('click',() => {
    try{
        euclidesAlgorithm(parseInt(firstInput.value),parseInt(secondInput.value));
    }catch (e){
        Swal.fire({
            text: e.message,
            icon: 'error',}
        );
    }
});