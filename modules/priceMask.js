// Маска для поля "Цена"
const priceInput = document.querySelector('.product__form input[name="productPrice"]')

// Убираем из строки ненужные символы и добавляем пробел для разделения тысячных
const getInputNumbersValue = input => input.value.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

const onPriceInput = (event) => {
    let input = event.target,
          inputNumbersValue = getInputNumbersValue(input)
    
    if (!inputNumbersValue) {
        return input.value = ''
    }

    input.value = inputNumbersValue + ' руб.'
}

priceInput.addEventListener('input', onPriceInput)