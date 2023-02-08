const amountInput = document.querySelector('input[name="amount__input"]');
const radioCheked = document.querySelectorAll('.radio__range');
const gradationBox = document.querySelector('.gradation__box')

gradationBox.addEventListener('input', e => amountInput.value = e.target.value)

window.onload = function() {
    radioCheked[5].checked = true;
    amountInput.value = '100';
};


function changeInput(){
    for (let i = 0; i < radioCheked.length; i++){
        if (amountInput.value ===  radioCheked[i].value){
            radioCheked[i].checked = true;
        } else {
            radioCheked[i].checked = false;
        }
    }
}
    
amountInput.addEventListener('input', changeInput);

