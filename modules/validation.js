const form = document.querySelector('.product__form')
const btnSubmit = document.querySelector('.product__body__submit')

form.addEventListener('change', onFormChange)
form.addEventListener('submit', onFormSend)

// Функуия валидации полей формы добовления товаров
function onFormChange (event) {
    const formRequired = document.querySelectorAll('.__required')
    const message = 'Поле является обязательным'
    let error = 0

    for (const input of formRequired) {
        if (input.classList.contains('__error')) {
            formRemoveError(input)
        }
        if (input.classList.contains('__sucess')) {
            formRemoveSucess(input)
        }

        if (!input.value) {
            formAddError(input, message)
            error++
        } else {
            formAddSucess(input)
        }
    }

    if (!error) {
        btnSubmit.classList.add('__sucess__btn')
        btnSubmit.disabled = false
    }
}

function onFormSend (event) {
    event.preventDefault()

    // Добавляем новый товар, если выполняется условие (форма прошла валидацию и кнопка "Добавить товар" активна)
    if (!btnSubmit.disabled) {
        
        let productLink        = document.querySelector('.product__form input[name="productImageLink"]').value,
            productHeader      = document.querySelector('.product__form input[name="productName"]').value,
            productDescription = document.querySelector('.product__form textarea[name="productDescription"]').value,
            productPrice       = document.querySelector('.product__form input[name="productPrice"]').value
        
        const item = {
            link:        productLink,
            header:      productHeader,
            description: productDescription,
            price:       productPrice,
        }

        const newProductItem = new ProductItem(item)
            newProductItem.appendProductItem(newProductItem)

        event.target.reset()
        
        for (const input of document.querySelectorAll('.__required')) {
            formRemoveSucess(input)
        }

        btnSubmit.classList.remove('__sucess__btn')
        btnSubmit.disabled = true
    }
}

function formAddError (input, message) {
    const messageBox = input.nextElementSibling
        messageBox.classList.add('__error')
        messageBox.innerText = message
    input.classList.add('__error')
}

function formAddSucess (input) {
    input.classList.add('__sucess')
}

function formRemoveError (input) {
    const messageBox = input.nextElementSibling
        messageBox.classList.remove('__error')
        messageBox.innerText = ''
    input.classList.remove('__error')
}

function formRemoveSucess (input) {
    const messageBox = input.nextElementSibling
        messageBox.classList.remove('__sucess')
        messageBox.innerText = ''
    input.classList.remove('__sucess')
}