const priceInput = document.querySelector('#productPrice')

priceInput.addEventListener('input', (event) => {
    let input = event.target,
        inputNumbersValue = replaceInputPrice(input.value)

    if (!inputNumbersValue) {
        return input.value = ''
    }

    input.value = inputNumbersValue + ' руб.' 
})

function replaceInputPrice (inputValue) {
    return inputValue.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}